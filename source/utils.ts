import { print } from "graphql";
import gqlTag from "graphql-tag";
import fs from "fs";

export function resolveGQL(): string {
  const schema = fs.readFileSync(`${__dirname}/schema/schema.gql`, "utf-8")
  return print(gqlTag(schema));
}
