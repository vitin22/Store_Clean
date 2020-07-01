import { ID_QUERY } from '@components/Apollo/jobs.query'
import { useQuery } from '@apollo/react-hooks';
import { client } from '@components/MyApollo/MyApollo';

function HomePage(props) {

  const { loading, data } = useQuery(ID_QUERY, {
    variables: {id: props.id },
    client: client
});

if (loading || !data) {
    return <img src="img/giphy.gif"/>;
}
  return(
    <div>
        {data.usuarios.username}
    </div>
  )
  }
  export default HomePage;