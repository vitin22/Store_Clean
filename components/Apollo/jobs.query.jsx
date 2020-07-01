import gql from 'graphql-tag';

export const JOBS_QUERY = gql`
query usuarios{
  allUsuarios {
    edges {
      node {
        id
        username
      }
    }
    
  }
}
`;

export const All_BARRIOS = gql`
query {
  allBarrios{
  edges{
    node{
      id
     
    }
  }
}
}
`;


export const All_CATEGORIAS = gql`
query {
  allCategorias{
  edges{
    node{
      id
     
    }
  }
}
}
`;



export const allEmpresas = gql`
query{
  allEmpresas{
    edges{
      node{
        id,
        nombre,
        premium,
        images(first:1){
          edges{
            node{
              image
            }
          }
        }
      }
    }
  }
}`;

export const AllSubcategorias = gql`
query{
  allSubcategorias(first:6){
    edges{
      node{
        id,
        descripcion
      }
    }
  }
}
`;

export const AllSubcat = gql`
query{
  allSubcategorias{
    edges{
      node{
        id,
        descripcion
      }
    }
  }
}
`;

export const AllMarcas = gql`
query{
  allMarcas{
    edges{
      node{
        id,
        descripcion
      }
    }
  }
}
`;

export const All_Categories = gql`
query{
  allCategorias{
    edges{
      node{
        id,
        descripcion
      }
    }
  }
}
`;

export const AllCategories = gql`
query{
  allCategorias{
    edges{
      node{
        id,
        descripcion,
        categoriaPadre{
          id
        }
      }
    }
  }
}
`;

export const All_Product = gql`
query{
  allProductos(first:6){
    edges{
      node{
        id,
        descripcion,
        images(first:1){
          edges{
            node{
              id,
              image
            }
          }
        },
        marca{
          id,
          descripcion
        },
        subcategoria{
          descripcion,
          categoria{
            descripcion
          }
        }
      }
    }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
  }
}
`;

export const AllProdSub = gql`
query allProductos($subcategoria: ID!){
  allProductos(first:8,subcategoria:$subcategoria){
    edges{
      node{
        id,
        descripcion,
        preciocompra,
        precioventa,
        images(first:1){
          edges{
            node{
              id,
              image
            }
          }
        },
        marca{
          id,
          descripcion
        },
        subcategoria{
          id,
          descripcion,
          categoria{
            descripcion
          }
        }
      }
    }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
  }
}
`;

export const PagProduct = gql`
query allProductos($first: Int!, 
  $after: String!, 
  $descripcion: String!,
  $subcat: ID!,
	$marca: ID!){
  allProductos(first: $first, 
    after: $after, 
    descripcion_Icontains :$descripcion,
  	subcategoria: $subcat,
    marca: $marca){
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
  }
}
`;

export const AllProduct = gql`
query allProductos($first: Int!, 
  $after: String!, 
  $descripcion: String!,
  $subcat: ID!,
	$marca: ID!){
  allProductos(first: $first, 
    after: $after, 
    descripcion_Icontains :$descripcion,
  	subcategoria: $subcat,
    marca: $marca){
    edges{
      node{
        id,
        descripcion,
        precioventa,
        images(first:1){
          edges{
            node{
              id,
              image
            }
          }
        },
        marca{
          id,
          descripcion
        },
        subcategoria{
          descripcion,
          categoria{
            descripcion
          }
        }
      }
    }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
  }
}
`;

export const PROD_QUERY = gql`
query productos($marca_Descripcion: String!) {
  allProductos(marca_Descripcion_Icontains :$marca_Descripcion) {
    edges{
      node{
        id,
        descripcion,
        images(first:1){
          edges{
            node{
              id,
              image
            }
          }
        },
        marca{
          id,
          descripcion
        },
        subcategoria{
          descripcion,
          categoria{
            descripcion
          }
        }
      }
    }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
  }
}
`;

export const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

export const ID_QUERY = gql`
query usuarios($id: ID!){
  usuarios(id:$id){
  username
  email
}
}
`;

export const Services =gql`
query{
  allServicios{
    edges{
      node{
        id
        precio
        subcategoria{
          descripcion
        }
      }
    }
  }
}
`;

export const Empresa = gql`
query empresa($id: ID!){
  empresa(id: $id){
    id
    nombre
    tarjeta
    aPagar
    premium
    latitud
    longitud
    images{
      edges{
        node{
          image
        }
      }
    }
    productoSet{
      edges{
        node{
          id
          descripcion
          precioventa
          subcategoria{
            descripcion
          }
          images{
            edges{
              node{
                image
              }
            }
          }
        }
      }
    }
  }
}
`;

export const ID_PRODUCT = gql`
query productos($id: ID!){
  productos(id:$id){
    id,
    descripcion,
    precioventa,
    subcategoria{
      descripcion,
      categoria{
        descripcion
      }
    },
    calificacionSet{
      calificacion
    }
    comentarioSet{
      edges{
        node{
          text,
          fechacreado,
          fechamodificado
          cliente{
            username
          }
        }
      }
    },
      images{
        edges{
          node{
            id,
            image
          }
        }
      }
  }
}
`;

export const COMMENTS_SUBSCRIPTION = gql`
  subscription onCommentAdded($repoFullName: String!) {
    commentAdded(repoFullName: $repoFullName) {
      id
      content
    }
  }
`;

export const GET_GREETING = gql`
  query getGreeting($language: String!) {
    greeting(language: $language) {
      message
    }
  }
`;




export const PRODO_QUERY = gql`
query productos {
  allProductos{
    edges{
      node{
        marca {
          id, descripcion
        }
      }
    }
  }
}
`;


export const COMPROBAR_EMAIL= gql`
query usuarios($correo: String!){
  users(email:$correo){
  edges{
    node{
      username
    }
  }
}
}
`;
