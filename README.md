# @apollo/federation minification bug

There seems to be an issue when using buildFederatedSchema while minified.
[Per the documentation](https://www.apollographql.com/docs/apollo-server/federation/introduction/), when you're using federation, you are expected to use
the `extend` keyword on types that will be merged with other schemas:

```graphql
extend type Query {
  ping: String!
}
```

This syntax breaks when minified, causing the error:

```
Error: Cannot extend type "Query" because it is not defined.
```

Steps to replicate:

- [ ] [Clone this repository](https://github.com/dncrews/federation-minification-bug-9-24-19)
- [ ] run `yarn` or `npm install` to install the depedencies
- [ ] run `yarn start` or `npm start` to run the non-minified code. You will see the output line "Built"
- [ ] run `yarn bug` or `npm run bug` to minify and run the minified code. The expected result would be to see "Built" again. The actual result is that it errors out with the aforementioned error.
