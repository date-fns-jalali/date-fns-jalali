import { JSONBond } from "json-bond";
import { schema, Typesaurus } from "typesaurus";
import type { ReflectionKind } from "typedoc";

export const db = schema(($) => ({
  packages: $.collection<Package>(),
  versions: $.collection<Version>(),
  pages: $.collection<Page>(),
}));

export type Schema = Typesaurus.Schema<typeof db>;

export interface Package {
  name: string;
  versions: VersionPreview[];
}

export interface VersionPreview {
  version: string;
  preRelease: boolean;
}

export interface Version {
  package: string;
  version: string;
  preRelease: boolean;
  pages: PagePreview[];
}

export interface PagePreview {
  slug: string;
  category: string;
  title: string;
  summary: string;
}

export type Page = TsDocPage | MarkdownPage;

export interface PageBase {
  package: string;
  version: string;
  slug: string;
  category: string;
  title: string;
  summary: string;
}

export interface TsDocPage extends PageBase {
  type: "tsdoc";
  name: string;
  tsdoc: JSONBond<TypeDocFunction>;
}

export interface MarkdownPage extends PageBase {
  type: "markdown";
  markdown: string;
}

export interface TypeDocLibrary {
  id: number;
  name: string;
  kind: number;
  flags: TypeDocLibraryFlags;
  originalName: string;
  children: TypeDocFunction[];
  groups: TypeDocGroup[];
}

export interface TypeDocLibraryFlags {}

export interface TypeDocGroup {
  title: string;
  kind: number;
  children: number[];
  categories: TypeDocCategory[];
}

export interface TypeDocCategory {
  title: string;
  children: number[];
}

export interface TypeDocFunction {
  id: number;
  name: string;
  kind: ReflectionKind;
  kindString: string;
  flags: TypeDocFunctionFlags;
  signatures: TypeDocSignature[];
  sources: TypeDocSource[];
  comment?: { tags: TypeDocTag[] };
}

export interface TypeDocBaseFlags {
  isExported: boolean;
}

export interface TypeDocFunctionFlags extends TypeDocBaseFlags {
  isPublic?: boolean;
}

export interface TypeDocTag {
  tag: string;
  text: string;
}

export interface TypeDocSource {
  fileName: string;
  line: number;
  character: number;
}

export interface TypeDocComment {
  shortText?: string;
  returns?: string;
  tags?: TypeDocTag[];
}

export interface TypeDocReflection {
  id: number;
  name: string;
  kind: number;
  kindString: string;
}

export interface TypeDocTypeParameter extends TypeDocReflection {
  flags: TypeDocBaseFlags;
  type?: TypeDocType;
}

export interface TypeDocArgumentParameter extends TypeDocReflection {
  flags: TypeDocArgumentParameterFlags;
  type: TypeDocType;
  comment?: { text: string };
  defaultValue?: string;
}

export interface TypeDocArgumentParameterFlags extends TypeDocBaseFlags {
  isRest?: boolean;
}

export interface TypeDocSignature extends TypeDocReflection {
  flags: TypeDocFunctionFlags;
  comment?: TypeDocComment;
  typeParameter?: TypeDocTypeParameter[];
  parameters: TypeDocArgumentParameter[];
  type: TypeDocType;
}

export interface TypeDocDeclaration extends TypeDocReflection {
  signatures?: TypeDocSignature[];
  sources: TypeDocSource[];
  flags: TypeDocBaseFlags;
}

export type TypeDocType = {
  type: string;
  name?: string;
  types?: TypeDocType[];
  constraint?: TypeDocType;
  typeArguments?: TypeDocType[];
  elementType?: TypeDocType;
  extendsType?: TypeDocType;
  target?: TypeDocType;
  declaration?: TypeDocDeclaration;
  operator?: string;
  indexType?: TypeDocType;
  objectType?: TypeDocType;
  value?: string;
  elements?: TypeDocType[];
} & (
  | {
      checkType?: undefined;
      trueType?: undefined;
      falseType?: undefined;
    }
  | {
      checkType: TypeDocType;
      trueType: TypeDocType;
      falseType: TypeDocType;
    }
);
