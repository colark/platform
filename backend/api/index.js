import {
  makeExecutableSchema,
  mergeSchemas,
  transformSchema,
  FilterRootFields,
  RenameTypes,
  RenameRootFields
} from "graphql-tools";
import { applyMiddleware } from "graphql-middleware";
import { importSchema } from "graphql-import";
import gql from "graphql-tag";

const mergeTypeDefs = typeDefs => {
  if (typeof typeDefs === "string") {
    if (typeDefs.endsWith("graphql")) {
      const schemaPath = path.resolve(typeDefs);

      if (!fs.existsSync(schemaPath)) {
        throw new Error(`No schema found for path: ${schemaPath}`);
      }

      return importSchema(schemaPath);
    } else {
      return typeDefs;
    }
  }

  if (typeof typeDefs === "function") {
    typeDefs = typeDefs();
  }

  if (isDocumentNode(typeDefs)) {
    return print(typeDefs);
  }

  if (Array.isArray(typeDefs)) {
    return typeDefs.reduce((acc, t) => acc + "\n" + mergeTypeDefs(t), "");
  }

  throw new Error(
    "Typedef is not string, function, DocumentNode or array of previous"
  );
};

const resolvers = require("./resolvers").default;

const fs = require("fs");
const path = require("path");

export default {
  makeConfig: async context => {
    const activeSchema = makeExecutableSchema({
      typeDefs: gql`
        type User {
          name: String
          className: String
          position: String
          photo: String
          email: String
          linkedin: String
        }

        type Query {
          projectList: [Project]
          team: [User]
          hello(name: String): String!
          navbarList: [Navbar]
          partnerList: [Partner]
        }

        type Partner {
          name: String
          logo: String
          website: String
        }

        type Project {
          name: String
          icon: String
          title: String
          blurb: String
          href: String
          callToAction: String
          launched: Boolean
        }

        type Navbar {
          name: String
          scroll: String
        }
      `,
      resolvers
    });

    const schema = mergeSchemas({
      schemas: [activeSchema]
    });

    //const schema = apiSchema;

    const schemaWithMiddleware = applyMiddleware(schema, ...[]);

    return {
      schema: schemaWithMiddleware,
      subscriptions: "/",
      playground: false, // will use graphql-playground-middleware-express
      validationRules: [],
      context: ({ req: request }) => ({
        request
      }),
      plugins: []
    };
  }
};
