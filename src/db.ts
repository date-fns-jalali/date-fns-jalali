import { JSONBond } from "json-bond";
import type { ContainerReflection } from "typedoc";
import { schema, Typesaurus } from "typesaurus";

export const db = schema(($) => ({
  packages: $.collection<Package>(),
  versions: $.collection<Version>(),
  pages: $.collection<Page>(),
}));

export type Schema = Typesaurus.Schema<typeof db>;

// export const sub

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

export type Page = MarkdownPage | TSDocPage | JSDocPage;

export interface PageBase {
  package: string;
  version: string;
  slug: string;
  category: string;
  title: string;
  summary: string;
}

/**
 * Generic Markdown page (used for v1, v2 and v3 documentation).
 */
export interface MarkdownPage extends PageBase {
  type: "markdown";
  markdown: string;
}

/**
 * TSDoc function page (v3).
 */
export interface TSDocPage extends PageBase {
  type: "tsdoc";
  name: string;
  tsdoc: JSONBond<ContainerReflection>;
}

/**
 * JSDoc function page (used for v1 and v2 documentation).
 */
export interface JSDocPage {
  type: "jsdoc";
  name: string;
  doc: JSONBond<JSDocFunction>;
}

/**
 * JSDoc function definition (used for v1 and v2 documentation).
 */
export interface JSDocFunction {
  args?: JSDocParam[];
  category: string;
  content: {
    category: string;
    description: string;
    examples?: string | string[];
    exceptions: JSDocAttribute[];
    id: string;
    kind: string;
    longname: string;
    meta: {
      filename: string;
      lineno: number;
      path: string;
    };
    name: string;
    order: number;
    properties?: JSDocParam[];
    params?: JSDocParam[];
    returns?: JSDocAttribute[];
    scope: string;
    summary: string;
    type?: JSDocType;
  };
  description: string;
  isFPFn?: boolean;
  kind: "function" | "typedef";
  relatedDocs?: {
    default?: string;
    fp?: string;
    fpWithOptions?: string;
  };
  syntax?: string;
  title: string;
  type: "jsdoc";
  urlId: string;
  usage?: JSDocUsage;
  usageTabs?: string[];
}

/**
 * JSDoc type, used to define function arguments and return values.
 */
export interface JSDocType {
  names: string[];
}

/**
 * JSDoc attribute (return, exception, base for param).
 */
export interface JSDocAttribute {
  description: string;
  type: JSDocType;
}

/**
 * JSDoc param.
 */
export interface JSDocParam extends JSDocAttribute {
  name: string;
  optional?: boolean;
  defaultvalue?: string;
  variable?: boolean;
  props?: JSDocParam[];
}

/**
 * JSDoc usage map.
 */
export interface JSDocUsage {
  [usageTab: string]: {
    code: string;
    title: string;
    text?: string;
  };
}
