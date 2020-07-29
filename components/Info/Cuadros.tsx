import Prod from '@components/Product/Prod';
import { ImageValidate } from './Datos';

const Cuadros = (props) => {
        var productos = props.datos;
        var state = 0;
        console.log(productos)
    return(
        <div>
            {productos.allPrestadorServicio.edges.map(
            allprod => {if ( state < 4){
              //var image = ImageValidate(allprod.node.images.edges);
                state++;
              return(  
                //<Prod md='3' category={allprod.node.subcategoria.descripcion} img={image} idmarca={allprod.node.id} marca={allprod.node.descripcion} price={allprod.node.precioventa} label={<span className="new">NEW</span>}/>			
                  <Prod md='3' nombre={allprod.node.nombre}  idprodserv={allprod.node.id} apellido={allprod.node.apellido}  label={<span className="new">NEW</span>}/>			
              )}else{
                  var image = ImageValidate(allprod.node.images.edges);
                  state = 1;
              return(  
                  <div>
                  <div className="clearfix visible-lg visible-md"></div>
                  <Prod md='3' nombre={allprod.node.nombre}  idprodserv={allprod.node.id} apellido={allprod.node.apellido}  label={<span className="new">NEW</span>}/>			
                  </div>
                  )
      
              }
              }
          )}
          </div>
)
};

export default Cuadros;