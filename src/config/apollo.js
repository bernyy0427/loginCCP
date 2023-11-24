import { ApolloClient, InMemoryCache } from "@apollo/client";
import { createHttpLink } from "apollo-link-http";

const httpLink = createHttpLink({
  uri: "https://app.cuidadoconelperro.com.mx/graphql",
  headers: {
    Store: "cuidadoconelperro_mx_store_view",
  },
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

export default client;
