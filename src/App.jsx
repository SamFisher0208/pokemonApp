import React from "react";
import { PokemonContainer } from "./containers/PokemonContainer";
import { ApolloClient, HttpLink, InMemoryCache, gql } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://graphql-pokemon2.vercel.app/" }),
  cache: new InMemoryCache(),
});

export function App() {
  return (
    <ApolloProvider client={client}>
      <main className="App">
        <PokemonContainer />
      </main>
    </ApolloProvider>
  );
}