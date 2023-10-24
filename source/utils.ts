import { print } from "graphql";
import gqlTag from "graphql-tag";
import fs from "fs";

export function resolveGQL(): string {
  const schemaPath = "./schema.graphql";

  return print(gqlTag(fs.readFileSync(schemaPath, "utf8")));
}
