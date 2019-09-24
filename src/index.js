const gql = require("graphql-tag");
const { buildFederatedSchema } = require("@apollo/federation");

const typeDefs = gql`
  extend type Query {
    ping: String!
  }
`;

const schema = buildFederatedSchema({
  typeDefs
});

console.info("Built");
