
import { useQuery } from '@apollo/react-hooks';
import { AllCategories } from '@components/Apollo/jobs.query';
import { client } from '@components/MyApollo/MyApollo';

const Select = () => {
    const { loading, data } = useQuery(AllCategories, {
		client:client
	});
	
	  /*if (loading || !data) {
		return <img src="img/giphy.gif"/>;
      }*/
      return(
        <div>
    <select className="input-select">
        {data.allCategorias.edges.map(
        link => {
          if(link.node.id!=link.node.categoriaPadre.id){
            return(
          <option value={link.node.id}>{link.node.descripcion}</option>
            )
          }
        }         
        )}
    </select>
    </div>
      );
};
export default Select;