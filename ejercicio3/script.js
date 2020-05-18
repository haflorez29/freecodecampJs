var codigo = [
  {letra: "A", cifrado: "N"},
  {letra: "B", cifrado: "O"},
  {letra: "C", cifrado: "P"},
  {letra: "D", cifrado: "Q"},
  {letra: "E", cifrado: "R"},
  {letra: "F", cifrado: "S"},
  {letra: "G", cifrado: "T"},
  {letra: "H", cifrado: "U"},
  {letra: "I", cifrado: "V"},
  {letra: "J", cifrado: "W"},
  {letra: "K", cifrado: "X"},
  {letra: "L", cifrado: "Y"},
  {letra: "M", cifrado: "Z"},
];
//asi encuentro la propiedad del objeto
// console.log (codigo[1].cifrado);

function rot13 (str) {  
  //paso el valor que ingresa a mayuscula
  str = str.toUpperCase();
  //divido el string ingresado en un arreglo
  var newArray = str.split("");
  // console.log (newArray)  
  //reviso si el el string ingresado esta en el arreglo y retorno el indice 
  var i = codigo.findIndex(element => element.letra == str || element.cifrado == str );
  // console.log("El elemento buscado está en el índice ", i);  
  var letra = codigo[i].letra;
  var cifrado = codigo[i].cifrado;
// recorro el arreglo que ingresa y que me evalue las condiciones para que retorne el cifrado
  // newArray.forEach ((element) =>{    
  if ( newArray == letra){
  return (cifrado)
  }else if( newArray == cifrado){
    return (letra)
  } 
// })
}
console.log (rot13("z"))
// no supe como hacer para que al ser mas de una letra me recorra ese arreglo y realize el if en cada uno

