import {useRouter} from 'next/router'
import Datos, { ImageValidate , Urlgraph } from '@components/Store/Datos';

const List = (props) => {
        
        const router = useRouter();
        var productos = props.datos;
        
        var url = Urlgraph();

    return(
        <div>
        <div className="cart-list">
        {productos.allProductos.edges.map(
            allprod => {
                var image = ImageValidate(allprod.node.images.edges);
                return(
            <div className="row">
            <div className="col-md-3">
                <div className="product-widget">
                    <div className="product-img">
                        <img src={`${url}/media/${image}`} alt=""
                        onClick={()=>{
                            router.push(`/product?id=${allprod.node.id}`);
                        }}
                        />
                    </div>
                    <div className="product-body">
                        <p className="product-category">{allprod.node.subcategoria.descripcion}</p>
                        <h3 className="product-name">
                            <a href={`product?id=${allprod.node.id}`}
                                onClick={(e)=>{
                                    e.preventDefault();
                                    router.push(`/product?id=${allprod.node.id}`);
                                }}
                                >{allprod.node.descripcion}
                            </a>
                        </h3>
                        <h4 className="product-price">${allprod.node.precioventa}</h4>
                    </div>
                {/* <div className="col-md-3">sdfgsdfgfd</div> */}
                {/* <button className="delete"><i className="fa fa-close"></i></button> */}
                </div>
            </div>
	<div className={`col-md-3`}>
<div className="product">
	<div className="product-body">
		<div className="product-btns">
			<button className="add-to-wishlist"><i className="fa fa-heart-o"></i><span className="tooltipp">add to wishlist</span></button>
			<button className="add-to-compare"><i className="fa fa-exchange"></i><span className="tooltipp">add to compare</span></button>
			<button className="quick-view"
                                onClick={(e)=>{
                                    e.preventDefault();
                                    router.push(`/product?id=${allprod.node.id}`);
                                }}><i className="fa fa-eye"></i><span className="tooltipp">quick view</span></button>
		</div>
	</div>
</div>
</div>
            </div>
                )
            }
                )
        }
        </div>
          </div>
)
};

export default List;