import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
 
export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      //uri: 'http://164.68.115.191:8000/graphql/',
      uri: 'http://localhost:8000/api/',
      //uri: 'http://5e19080.online-server.cloud:8000/api/',
      request: (operation) => {
        const token = localStorage.getItem('authToken')
        operation.setContext({
          headers: {
            authorization: token ? `JWT ${token}` : ''
          }
        })
      }
      //cache: new InMemoryCache()
      //.restore(initialState || {})
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
          
        </ApolloProvider>
      );
    }
  }
);
