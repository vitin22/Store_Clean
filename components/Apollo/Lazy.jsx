import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';
import withApollo from './apollo';
import { GET_GREETING } from './jobs.query';
// import { getDataFromTree } from '@apollo/react-ssr';
 
const Index = ({ repoFullName }) => {
    const [loadGreeting, { called, loading, data }] = useLazyQuery(
        GET_GREETING,
        { variables: { language: "english" } }
      );
      if (called && loading) return <p>Loading ...</p>
      if (!called) {
        return <button onClick={() => loadGreeting()}>Load greeting</button>
      }
      return <h1>Hello {data.greeting.message}!</h1>;
    }
export default withApollo(Index);