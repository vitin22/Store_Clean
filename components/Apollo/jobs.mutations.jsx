import gql from 'graphql-tag';

export const REGISTRAR_MUTATION = gql`
mutation($aPagar: Int, $barrio: ID ,$card: String!, $categoriaEmpresa: ID, $country: String!, $email: String!, $fullname: String!, $name: String!, $nombreCompannia: String!, $nombreEmpresa: String!, $password: String!, $phone: String!, $premium: Boolean, $sell: Boolean!, $tarjeta: String ,$username: String!){
  newUser(
    aPagar: $aPagar
    barrio: $barrio
    card: $card
    categoriaEmpresa: $categoriaEmpresa
    country: $country
    email: $email
    fullname: $fullname,
    name: $name
    nombreCompannia: $nombreCompannia
    nombreEmpresa: $nombreEmpresa
    password: $password
    phone: $phone
    premium: $premium
    sell: $sell
    tarjeta: $tarjeta
    username: $username
  ){
    question{
      isActive
    }
  }
}
`;

export const COMENTARIO_MUTATION = gql`
mutation AgragarComentario($producto: ID,$text: String!) {
  agragarComentario(producto:$producto,text: $text) {
    comentario{
      text
    }
  
  }
}
`;

export const LOGIN_MUTATION = gql`
mutation($username: String!, $password: String!){
  tokenAuth(
    username: $username,
    password:$password
  ){
    token
  }
}
`;

export const SEND_PASSWORDRESET = gql`
mutation($email: String!){
  sendPasswordResetEmail(
    email: $email
  ){
    success
  }
}
`;

export const RESET_PASSWORD = gql`
mutation($token: String!, $newPassword1: String!, $newPassword2: String!){
  passwordReset(
    token: $token
    newPassword1: $newPassword1
    newPassword2: $newPassword2
  ){
    success
  }
}
`;

export const CHANGE_PASSWORD = gql`
mutation($oldPassword: String!, $newPassword1: String!, $newPassword2: String!){
  passwordChange(
    oldPassword: $oldPassword
    newPassword1: $newPassword1
    newPassword2: $newPassword2
  ){
    success
  }
}
`;

export const ADDCOMPANY_MUTATION = gql`
mutation($nombre: String!, $pais: ID){
  addCompannia (
     nombre: $nombre,
     pais:$pais
   ){
     compannia{
       nombre
     }
   }
 }
`;

export const ADDPRODUCTO_MUTATION = gql`
mutation($cantidad: Int, $codigo: String!, $descripcion: String, $empresa: ID, $marca: ID,$preciocompra: Float, $precioventa: Float, $subcategoria: ID){
  crearProducto(
    cantidad: $cantidad,
    codigo: $codigo,
    descripcion: $descripcion,
    empresa: $empresa,
    marca: $marca,
    preciocompra: $preciocompra,
    precioventa: $precioventa,
    subcategoria: $subcategoria
    
  ){
    producto{
      estado
      fechacreado
      fechamodificado
      id
      codigo
      descripcion
    }
  
    
  }
}
`;


export const ADD_CATEGORIA = gql`
mutation($categoria: String!){
  createCategoriaServicio(
    nombre: $categoria
  )  {
    categoria{
      id
      nombre
    }
  }
}
`;

export const DEL_CATEGORIA = gql`
mutation($categoriaId: String!){
  deleteCategoriaServicio(
    id: $categoriaId
  )  {
    categoria{
      id
      nombre
    }
  }
}
`;


export const UPD_CATEGORIA = gql`
mutation($categoria: String!){
  updateCategoriaServicio(
    nombre: $categoria
  )  {
    categoria{
      id
      nombre
    }
  }
}
`;

export const ADD_TIPOPRODUCTO = gql`
mutation($hasVariants: Boolean, $isShippingRequired: Boolean,$nombre: String,){
  createTipoProducto(
    hasVariants: $hasVariants,
    isShippingRequired: $isShippingRequired
    nombre: $nombre
    
  )  {
    tipoProducto{
      id
      nombre
        hasVariants
      isShippingRequired
      
    }
  }
  }

`;

export const UPD_TIPOPRODUCTO = gql`
mutation($hasVariants: Boolean, $isShippingRequired: Boolean, $nombre: String!, $tipoProductoId: String!){
  updateTipoProducto(
    hasVariants: $hasVariants,
    isShippingRequired: $isShippingRequired,
    nombre: $nombre,
    tipoProductoId: $tipoProductoId
  )  
  }

`;

export const DEL_TIPOPRODUCTO = gql`
mutation($tipoProductoId: String!){
  deleteTipoProducto(
    tipoProductoId: $tipoProductoId
  )  
  }

`;

export const ADD_PRODUCTO = gql`
mutation($description: String, $minimalVariantPriceAmount: Float, $moneda: String, $nombre: String, $priceAmount: Float, $tipoProducto: String){
  createProducto(
    description: $description,
    minimalVariantPriceAmount: $minimalVariantPriceAmount,
    moneda: $moneda,
    nombre: $nombre,
    priceAmount: $priceAmount,
    tipoProducto: $tipoProducto
  )  {
    producto{
      id
      productType{
        id
      }
        nombre
      description
      moneda
      priceAmount
      variants{
        edges{
          node{
            id
          }
        }
      }
      servicioSet{
        edges{
          node{
            id
          }
        }
      }
      minimalVariantPriceAmount
      
    }
  }
  }

`;

export const UPD_PRODUCTO = gql`
mutation($description: String, $minimalVariantPriceAmount: Float, $moneda: String, $nombre: String, $priceAmount: Float, $productoId: String! $tipoProducto: String){
  updateProducto(
    description: $description,
    minimalVariantPriceAmount: $minimalVariantPriceAmount,
    moneda: $moneda,
    nombre: $nombre,
    priceAmount: $priceAmount,
    productoId: $productoId
    tipoProducto: $tipoProducto
  )  
  }

`;

export const DEL_PRODUCTO = gql`
mutation($productoId: String!){
  deleteProducto(
    productoId: $productoId
  )  
  }

`;

export const ADD_VARPRODUCTO = gql`
mutation( $codigo: String, $costPriceAmount: Float, $moneda: String, $nombre: String, $priceOverrideAmount: Float, $productoId: String! ){
  createVarianteProducto(
    codigo: $codigo,
    costPriceAmount: $costPriceAmount,
    moneda: $moneda,
    nombre: $nombre,
    priceOverrideAmount: $priceOverrideAmount,
    productoId: $productoId
  )  
  }

`;

export const UPD_VARPRODUCTO = gql`
mutation( $codigo: String, $costPriceAmount: Float, $moneda: String, $nombre: String, $priceOverrideAmount: Float, $productoId: String!,  $varianteId: String! ){
  updateVarianteProducto(
    codigo: $codigo,
    costPriceAmount: $costPriceAmount,
    moneda: $moneda,
    nombre: $nombre,
    priceOverrideAmount: $priceOverrideAmount,
    productoId: $productoId,
    varianteId: $ varianteId
  )  
  }

`;

export const DEL_VARPRODUCTO = gql`
mutation( $varianteId: String! ){
  updateVarianteProducto(
    varianteId: $ varianteId
  )  
  }

`;




export const ADD_SERVICIO = gql`
mutation($active: Boolean,$avaibleTimeFrom: Time,$availableTimeTo: Time, $avaliableOnlyOnBusinessLocation: Boolean, $categoriaId: Int, $licencia: String, $nombre: String, $precio: Float, $precioAlternativo: Float, $serviceDescription: String, $zipCode: Int){
  createServicio(
    active: $active,
    availableTimeFrom: $avaibleTimeFrom,
    availableTimeTo: $availableTimeTo,
    avaliableOnlyOnBusinessLocation: $avaliableOnlyOnBusinessLocation,
    categoriaId: $categoriaId,
    licencia: $licencia,
    nombre: $nombre,
    precio: $precio,
    precioAlternativo: $precioAlternativo,
    serviceDescription: $serviceDescription,
    zipCode: $zipCode
    
  )  {
    servicio{
      id
      categoria{
        id
      }
      nombre
      precio
      zipCode
    }
  }
}
`;


export const UPD_SERVICIO = gql`
mutation($active: Boolean,$avaibleTimeFrom: Time,$availableTimeTo: Time, $avaliableOnlyOnBusinessLocation: Boolean, $categoriaId: Int, $licencia: String, $nombre: String, $precio: Float, $precioAlternativo: Float, $serviceDescription: String, $servicioId: String!, $zipCode: Int){
  updateServicio(
    active: $active,
    availableTimeFrom: $avaibleTimeFrom,
    availableTimeTo: $availableTimeTo,
    avaliableOnlyOnBusinessLocation: $avaliableOnlyOnBusinessLocation,
    categoriaId: $categoriaId,
    licencia: $licencia,
    nombre: $nombre,
    precio: $precio,
    precioAlternativo: $precioAlternativo,
    serviceDescription: $serviceDescription,
    zipCode: $zipCode,
    servicioId: $servicioId
    
  )  
}
`;


export const DEL_SERVICIO = gql`
mutation( $servicioId: String! ){
  deleteServicio(
    servicioId: $servicioId
  )  
  }

`;


export const ADD_PRESERVICIO = gql`
mutation( $active: Boolean, $apellidos: String, $background: [BackgroundCheck], $birthDate: Date, $email: String, $localidad: [ZipCodes]!, $nombre: String, $particularOrBusinessAddress: String, $phone: String, $services: [Services], $socialSecurityNumber: String ){
  deleteServicio(
    active: $active,
    apellidos: $apellidos,
    background: $background,
    birthDate: $birthDate,
    email: $email,
    localidad: $localidad,
    nombre: $nombre,
    particularOrBusinessAddress: $particularOrBusinessAddress,
    phone: $phone,
    services: $services,
    socialSecurityNumber: $socialSecurityNumber


  )  
  }

`;

export const UPD_PRESERVICIO = gql`
mutation( $active: Boolean, $apellidos: String, $background: [BackgroundCheck], $birthDate: Date, $email: String, $localidad: [ZipCodes]!, $nombre: String, $particularOrBusinessAddress: String, $phone: String, $services: [Services],$prestadorServicioId: String $socialSecurityNumber: String ){
  prestadorServicioId(
    active: $active,
    apellidos: $apellidos,
    background: $background,
    birthDate: $birthDate,
    email: $email,
    localidad: $localidad,
    nombre: $nombre,
    particularOrBusinessAddress: $particularOrBusinessAddress,
    phone: $phone,
    services: $services,
    socialSecurityNumber: $socialSecurityNumber,
    prestadorServicioId: $prestadorServicioId


  )  
  }

`;



export const DEL_PRESERVICIO = gql`
mutation( $prestadorServicioIda: String! ){
  prestadorServicioId(
    prestadorServicioId: $prestadorServicioId
  )  
  }

`;
