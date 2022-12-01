import { ApolloClient, InMemoryCache } from '@apollo/client'

// initialize a GraphQL client
export const apolloClient = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache(),
})
