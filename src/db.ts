import { JSONBond } from "json-bond";
import { schema, Typesaurus } from "typesaurus";
import type { ContainerReflection, ReflectionKind } from "typedoc";

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
  tsdoc: JSONBond<ContainerReflection>;
}

export interface MarkdownPage extends PageBase {
  type: "markdown";
  markdown: string;
}
