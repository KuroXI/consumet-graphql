import Fastify from "fastify";
import {createHandler} from "graphql-http/lib/use/fastify";
import {resolveGQL} from "./utils";
import {resolver} from "./resolver";
import {buildSchema} from "graphql/utilities";

const PORT = 8080;
const graphQLRoute = "/graphql";
const fastify = Fastify({ logger: true });

fastify.route({
  url: graphQLRoute,
  method: ["GET", "POST"],
  handler: createHandler({
    schema: buildSchema(resolveGQL()),
    rootValue: resolver,
  })
})

fastify.listen({ port: PORT }, () => {
  console.log(`Server is online: http://localhost:${PORT}${graphQLRoute}`)
});