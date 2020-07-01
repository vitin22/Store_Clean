import gql from 'graphql-tag';
import { SubscriptionHookOptions } from '@apollo/react-hooks';
import withApollo from './apollo';
import { COMMENTS_SUBSCRIPTION } from './jobs.query';
// import { getDataFromTree } from '@apollo/react-ssr';
 
const Index = ({ repoFullName }) => {
    const {
        data: { commentAdded },
        loading,
      } = useSubscription(COMMENTS_SUBSCRIPTION, { variables: { repoFullName } });
      return <h4>New comment: {!loading && commentAdded.content}</h4>;
    }
export default withApollo(Index);