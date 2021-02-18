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

export const All_CATSERV = gql`
query {
  allCategoriaServicio{
  edges{
    node{
      id
      nombre
     
    }
  }
}
}
`;


export const All_CONDADO = gql`
query {
  allCondado{
  edges{
    node{
      id
      nombre
      
     
    }
  }
}
}
`;

export const ALL_ZIP = gql `
query allCiudad($condado: String!){
  allCiudad(condado_Nombre: $condado){
  edges{
    node{
      id
      nombre
      condado{
        nombre
      }
      zipCode
      
     
    }
  }
}
}
`;

export const ALL_CONZIP = gql `
query allCiudad($zipcode: Int!){
  allCiudad(zipCode: $zipcode){
  edges{
    node{
      id
      nombre
      condado{
        nombre
      }
        
    }
  }
}
}
`;

export const PagSearch = gql`
query allPrestadorServicio($zipcode: Int, $first: Int!, $after: String!){
  allPrestadorServicio(zipCode: $zipcode, first: $first, after: $after ){
 
    pageInfo{
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
}
}
`;


export const PagProd = gql`
query allPrestadorServicio($services_Zipcode: Int,$first: Int, $after: String){
  allPrestadorServicio(services_Zipcode: $services_Zipcode,first: $first, after: $after){
   edges{
     node{
       id
       nombre
       services{
        edges{
          node{
            nombre
            precio
            serviceDescription
          }
     }
   }
 }
}
}
}
`;

export const PagProServ = gql`
query allPrestadorServicio($first: Int, $after: String){
  allPrestadorServicio(first: $first, after: $after){
   edges{
     node{
       id
       nombre
       services{
        edges{
          node{
            nombre
            precio
            serviceDescription
          }
        }
      }
     }
   }
 }
 }
`;


export const ALL_CIUDZIP = gql`
query allCiudad($zipCode: Int){
  allCiudad(zipCode: $zipCode){
   edges{
     node{
            nombre
           condado{
             estado{
               nombre
             }
             nombre
           }
       
    
     }
   }
 }
 }
`;


