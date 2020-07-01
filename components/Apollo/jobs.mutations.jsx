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

