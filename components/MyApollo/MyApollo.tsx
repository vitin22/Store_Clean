import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { useQuery, ApolloProvider } from '@apollo/react-hooks';
import { Urlgraph } from '@components/Store/Datos';

const cache = new InMemoryCache();
// const url = Urlgraph();
const link = new HttpLink({
    //uri: `http://127.0.0.1:8000/graphql/`,
    uri: `http://192.168.123.1:8000/api/`,
    fetch,
    
  });

  //164.68.115.191
export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link
});