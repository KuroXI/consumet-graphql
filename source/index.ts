import Fastify from "fastify";
import FastifyCors from "@fastify/cors";
import { createHandler } from "graphql-http/lib/use/fastify";
import { resolveGQL } from "./utils";
import { resolver } from "./resolver";
import { buildSchema } from "graphql/utilities";
import "dotenv/config";

const PORT = process.env.PORT || 8080;
const graphQLRoute = process.env.GRAPHQL_ROUTE || "/graphql";
const fastify = Fastify({ logger: true });

fastify.register(FastifyCors, {
  origin: "*",
  allowedHeaders: ["Content-Type", "Authorization"],
  methods: ["GET", "POST", "DELETE", "PUT", "PATCH"],
});

fastify.route({
  url: graphQLRoute,
  method: ["GET", "POST"],
  handler: createHandler({
    schema: buildSchema(resolveGQL()),
    rootValue: resolver,
  }),
});

fastify.listen({ port: PORT as number }, (err) => {
  if (err) return console.error(err);
  console.log(`Server is online: http://localhost:${PORT}${graphQLRoute}`);
});
