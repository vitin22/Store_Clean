import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
 
export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      //uri: 'http://164.68.115.191:8000/graphql/',
      //uri: 'http://localhost:8000/graphql/',
      uri: 'http://192.168.123.1:8000/api/',
      request: (operation) => {
        const token = localStorage.getItem('authToken')
        operation.setContext({
          headers: {
            authorization: `JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTkzMzE0MDE2LCJvcmlnSWF0IjoxNTkzMjg1MjE2fQ.2nupLPcRQC-sYJeddn42D1UX7SukK5WT2l-2D1aflp4`
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
