
import { useQuery } from '@apollo/react-hooks';
import { All_CATSERV } from '@components/Apollo/jobs.query';
import { client } from '@components/MyApollo/MyApollo';

const Select = () => {
    const { loading, data } = useQuery(All_CATSERV, {
		client:client
	});
	
	  /*if (loading || !data) {
		return <img src="img/giphy.gif"/>;
      }*/
      let sopa = 20;
      console.log(data)
      return(
        <div>
    <select className="input-select">
        {data.allCategoriaServicio.edges.map(
        link => {
          
            return(
          <option value={link.node.id}>{link.node.nombre}</option>
            )
          
        }         
        )}
    </select>
    </div>
      );
};
export default Select;