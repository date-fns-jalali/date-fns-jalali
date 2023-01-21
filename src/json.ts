import { readFile } from "fs/promises";
import type {
  ContainerReflection,
  DeclarationReflection,
  ReferenceType,
  SomeType,
  TypeParameterReflection,
} from "typedoc";
import type { DateFnsDocs } from "./types";
import { findFn } from "./utils";

/**
 * Reads and parses TypeDoc JSOn and extracts function reflections.
 * @param jsonPath - the path to the docs JSON
 * @returns parsed function reflections
 */
export async function readFnsFromJSON(
  jsonPath: string
): Promise<DateFnsDocs.FnReflection[]> {
  const docs = await readDocsJSON(jsonPath);
  const map = typesMap(docs);

  return (
    docs.children?.reduce<DateFnsDocs.FnReflection[]>((acc, ref) => {
      const fn = findFn(ref);
      if (!fn) return acc;

      const recoveredRefs: DeclarationReflection[] = [];
      const fnMap = typesMap(ref);

      function recoverRefs(r: DeclarationReflection) {
        const fnRefs = typeRefs(r);

        const missingRefs = new Set<number>();
        fnRefs.forEach((id) => {
          if (fnMap[id]) return;
          missingRefs.add(id);
        });

        missingRefs.forEach((id) => {
          const missingRef = map[id];
          if (!missingRef) return;

          recoveredRefs.push(missingRef);

          fnMap[id] = missingRef;
          Object.assign(fnMap, typesMap(missingRef));

          recoverRefs(r);
        });
      }

      recoverRefs(ref);

      const completedRef = {
        ...ref,
        children: [...(ref.children || []), ...recoveredRefs],
      };

      return acc.concat({ ref: completedRef, fn });
    }, []) || []
  );
}

function typeRefs(ref: DeclarationReflection) {
  const refs = new Set<number>();
  traverseRefs(ref, (r) => {
    // id might be undefined for some reason
    if (r.id === undefined) return;
    refs.add(r.id);
  });
  return refs;
}

interface RefType extends ReferenceType {
  id?: number;
}

function traverseRefs(ref: DeclarationReflection, cb: (ref: RefType) => void) {
  function extractRef(type: SomeType) {
    if (type.type === "reference") cb(type);
    "elementType" in type && extractRef(type.elementType);
    "typeArguments" in type && type.typeArguments?.forEach(extractRef);
  }

  ref.inheritedFrom && cb(ref.inheritedFrom);

  ref.type && extractRef(ref.type);

  ref.extendedTypes?.forEach(extractRef);

  ref.children?.forEach((r) => {
    traverseRefs(r, cb);
  });

  "signatures" in ref &&
    ref.signatures?.forEach((signature) => {
      // @ts-ignore: TypeDoc don't have typeParameters but typeParameter
      (signature.typeParameter as TypeParameterReflection[])?.forEach((r) => {
        r.type && extractRef(r.type);
      });

      signature.parameters?.forEach((r) => {
        r.type && extractRef(r.type);
      });
    });
}

function typesMap(ref: ContainerReflection) {
  const map: Record<number, DeclarationReflection> = {};

  traverseTypes(ref, (r) => {
    if (map[r.id]) return;
    map[r.id] = r;
  });

  return map;
}

function traverseTypes(
  ref: ContainerReflection | DeclarationReflection,
  cb: (ref: DeclarationReflection) => void
) {
  ref.children?.forEach((r) => {
    cb(r);
    traverseTypes(r, cb);
  });
}

/**
 * Reads and parses TypeDoc container reflection from a JSON file.
 * @param jsonPath - the path to the docs JSON
 * @returns parsed container reflection
 */
export async function readDocsJSON(
  jsonPath: string
): Promise<ContainerReflection> {
  const docsJSON = await readFile(jsonPath, "utf8");
  return JSON.parse(docsJSON) as ContainerReflection;
}
