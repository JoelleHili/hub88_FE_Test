import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { addTypenameToDocument } from "@apollo/client/utilities";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://countries.trevorblades.com/",
    fetch,
  }),
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default client;
