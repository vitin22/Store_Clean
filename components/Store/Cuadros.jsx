import Prod from '@components/Product/Prod';
import { ImageValidate } from '@components/Store/Datos';

const Cuadros = (props) => {
        var productos = props.datos;
        var state = 0;
        
    return(
        <div>
            {productos.allProductos.edges.map(
            allprod => {if ( state < 4){
              var image = ImageValidate(allprod.node.images.edges);
                state++;
              return(  
                  <Prod md='3' category={allprod.node.subcategoria.descripcion} img={image} idmarca={allprod.node.id} marca={allprod.node.descripcion} price={allprod.node.precioventa} label={<span className="new">NEW</span>}/>			
              )}else{
                  var image = ImageValidate(allprod.node.images.edges);
                  state = 1;
              return(  
                  <div>
                  <div className="clearfix visible-lg visible-md"></div>
                  <Prod md='3' category={allprod.node.subcategoria.descripcion} img={image} idmarca={allprod.node.id} marca={allprod.node.descripcion} price={allprod.node.precioventa} label={<span className="sale">-30%</span>} oldprice={'$990.00'}/>
                  </div>
                  )
      
              }
              }
          )}
          </div>
)
};

export default Cuadros;