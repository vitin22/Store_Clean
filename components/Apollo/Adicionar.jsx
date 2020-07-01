import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import withApollo from './apollo';
import { ADD_TODO } from './jobs.query';
// import { getDataFromTree } from '@apollo/react-ssr';
 
const Index = () => {
  const [ addTodo,{ data } ]= useMutation(ADD_TODO, {
   
  });
 
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          addTodo({ variables: { type: input.value } });
          input.value = '';
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
 
export default withApollo(Index);
 
// You can also override the configs for withApollo here, so if you want
// this page to have SSR (and to be a lambda) for SEO purposes and remove
// the loading state, uncomment the import at the beginning and this:
//
// export default withApollo(Index, { getDataFromTree });