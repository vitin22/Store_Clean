import {useRouter} from 'next/router'
import Datos, { ImageValidate , Urlgraph } from '@components/Store/Datos';
import { client } from '@components/MyApollo/MyApollo';
import { PagSearch, ALL_CIUDZIP } from '@components/Apollo/jobs.query';
import { useQuery } from '@apollo/react-hooks';

const List = (props) => {
        
        const router = useRouter();
        var productos = props.datos;
        
        var url = Urlgraph();
        const bandera = true;


        let zipco = productos.allPrestadorServicio.edges.map(
            allprese => {
                (allprese.node.zipCode)
            })

        const { data } = useQuery(ALL_CIUDZIP, {
            variables: {
                
                zipCode: zipco
                
            },
            client: client
        });

        let condado = data.allCiudad.edges.map(
            cond => {
                (cond.node.condado.nombre)
                })

        let ciudad = data.allCiudad.edges.map(
                    cond => {
                        (cond.node.nombre)
                        })

        let estado = data.allCiudad.edges.map(
                            cond => {
                                (cond.node.estado.nombre)
                                })

        
if (bandera){
    return(
        <div>

<div className="explore-filter d-lg-flex align-items-center d-block">
                            <div className="text-dark font-weight-semibold font-size-md mb-4 mb-lg-0">56 Results found</div>
                            <div className="form-filter d-flex align-items-center ml-auto">
                                <div className="form-group row no-gutters align-items-center">
                                    <label htmlFor="sort-by"
                                           className="col-sm-3 text-dark font-size-md font-weight-semibold mb-0">Sort
                                        by</label>
                                    <div className="select-custom col-sm-9">
                                        <select id="sort-by" className="form-control">
                                            <option value="0">Latest</option>
                                            <option value="1">New York</option>
                                            <option value="1">LA</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="format-listing ml-auto">
                                <a href="#" className="active"><i className="fas fa-th"></i></a>
                                    <a href="explore-full-map-list.html"><i className="fal fa-bars"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="row equal-height">
                            
        {productos.allPrestadorServicio.edges.map(
            allpres => {
                var image = ImageValidate(allpres.node.images.edges);
                return(
                    <div className="col-lg-6 mb-6">
                                <div className="store card border-0 rounded-0">
                                    <div className="position-relative store-image img-fluid">
                                        <a href="listing-details-full-image.html">
                                            <img src={`${url}/media/${image}`} alt="store 1"
                                                 className="card-img-top rounded-0"/>
                                        </a>
                                        <div className="image-content position-absolute d-flex align-items-center">
                                            <div className="content-right w-lg mr-0 d-flex ml-auto">

                                                <a href={`${url}/media/${image}`} className="item viewing"
                                                   data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Quickview" data-gtf-mfp="true">
                                                    <svg className="icon icon-expand">
                                                        <use xlinkHref="#icon-expand"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" className="item marking" data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                                <a href="#" className="col-md-6 col-lg mb-6 mb-lg-0" data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Compare">
                                                    <svg className="icon icon-chart-bars">
                                                        <use xlinkHref="#icon-chart-bars"></use>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pb-0 pt-3">
                                        <a href="listing-details-full-image.html"
                                           className="card-title h5 text-dark d-inline-block mb-2"><span
                                                className="letter-spacing-25">{allpres.node.nombre}</span> </a>
                                        <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                            <li className="list-inline-item"><span
                                                    className="badge badge-success d-inline-block mr-1">{allpres.node.service.precio}</span><span
                                                    className="number">2 rating</span>
                                            </li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="mr-1">From</span><span
                                                    className="text-danger font-weight-semibold">{allpres.node.service.precioAlternativo}</span></li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="text-green">Open now!</span></li>
                                        </ul>

                                        <div className="media">
                                            <a href="#" className="d-inline-block mr-3"><img
                                                    src="images/listing/testimonial-1.png"
                                                    alt="testimonial" className="rounded-circle"/>
                                            </a>
                                            <div className="media-body lh-14 font-size-sm">{allpres.node.service.serviceDescription}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer rounded-0 border-0 bg-transparent pt-5 pb-3">
                                        <div className="border-top pt-3 lh-1">
											<span className="d-inline-block mr-1"><i
                                                    className="fal fa-map-marker-alt"></i></span>
                                            <a href="#" className="text-secondary text-decoration-none address">{ciudad},
                {condado}, {estado}</a>
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

}
else{


    return(
        <div>

<div className="explore-filter d-lg-flex align-items-center d-block">
                            <div className="text-dark font-weight-semibold font-size-md mb-4 mb-lg-0">56 Results found</div>
                            <div className="form-filter d-flex align-items-center ml-auto">
                                <div className="form-group row no-gutters align-items-center">
                                    <label htmlFor="sort-by"
                                           className="col-sm-3 text-dark font-size-md font-weight-semibold mb-0">Sort
                                        by</label>
                                    <div className="select-custom col-sm-9">
                                        <select id="sort-by" className="form-control">
                                            <option value="0">Latest</option>
                                            <option value="1">New York</option>
                                            <option value="1">LA</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="format-listing ml-auto">
                                    <a href="explore-full-map-grid.html"><i className="fas fa-th"></i></a>
                                    <a href="#" className="active"><i className="fal fa-bars"></i></a>
                                </div>
                            </div>
                        </div>

        <div className="store-listing-style store-listing-style-01">
                           
        {productos.allPrestadorServicio.edges.map(
            allpres => {
                var image = ImageValidate(allpres.node.images.edges);
                return(
                    <div className="mb-6">
                                <div className="store media align-items-stretch bg-white">
                                    <div className="position-relative store-image"
                                             
                                         style={{backgroundImage: `${url}/media/${image}`}}>
                                        <div className="image-content position-absolute d-flex align-items-center">
                                            <div className="content-right ml-auto d-flex">
                                                <a href={`${url}/media/${image}`}
                                                   className="item viewing"
                                                   data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Quickview" data-gtf-mfp="true">
                                                    <svg className="icon icon-expand">
                                                        <use xlinkHref="#icon-expand"></use>
                                                    </svg>
                                                </a>
                                                <a href="#" className="item marking" data-toggle="tooltip"
                                                   data-placement="top"
                                                   title="Bookmark"><i className="fal fa-bookmark"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="media-body pt-4 pb-3 px-5">
                                        <a href="listing-details-full-image.html"
                                           className="h5 text-dark d-inline-block mb-2"><span
                                                className="letter-spacing-25">{allpres.node.nombre}</span></a>
                                        <ul className="list-inline store-meta mb-4 font-size-sm d-flex align-items-center flex-wrap">
                                            <li className="list-inline-item"><span
                                                    className="badge badge-success d-inline-block mr-1">{allpres.node.service.precio}</span><span
                                            >price</span>
                                            </li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="mr-1">From</span><span
                                                    className="text-danger font-weight-semibold">{allpres.node.service.precioAlternativo}</span></li>
                                            <li className="list-inline-item separate"></li>
                                            <li className="list-inline-item"><span className="text-green">Open now!</span></li>
                                        </ul>

                                        <div className="media">
                                            <a href="#" className="d-inline-block mr-3"><img
                                                    src="images/listing/testimonial-1.png"
                                                    alt="testimonial" className="rounded-circle"/>
                                            </a>
                                            <div className="media-body lh-14 font-size-sm">{allpres.node.service.serviceDescription}
                                            </div>
                                        </div>
                                        <div className="border-top pt-3 mt-5 lh-12">
												<span
                                                        className="d-inline-block mr-1"><i
                                                        className="fal fa-map-marker-alt">
											</i>
												</span>
                                            <a href="#" className="text-secondary text-decoration-none address">{ciudad},
                {condado}, {estado}</a>
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
}
};

export default List;