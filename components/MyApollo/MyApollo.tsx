import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
//import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
import { useQuery, ApolloProvider } from '@apollo/react-hooks';
import { Urlgraph } from '@components/Store/Datos';
import { setContext } from '@apollo/client/link/context';

//const cache = new InMemoryCache();
// const url = Urlgraph();
const httpLink = createHttpLink({
    uri: `http://localhost:8000/api/`,
    //uri: `http://5e19080.online-server.cloud:8000/api/`,
    fetch,
    
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('authToken');
        return{ 
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
          }
        }

  })

  //164.68.115.191
  export const client = new ApolloClient({
  
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
  
});

