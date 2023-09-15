import { print } from "graphql";
import gqlTag from "graphql-tag";
import fs from "fs";

export function resolveGQL() : string {
  return print(gqlTag(fs.readFileSync("./source/schema.graphql", 'utf8')));
}