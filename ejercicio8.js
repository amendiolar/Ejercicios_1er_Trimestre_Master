
/*
Escriba una función de de JavaScript para crear 
una nueva cadena a partir de una cadena dada con 
el primer carácter de la cadena dada agregado 
al principio y al final. 
Ej --> addFisrt("Hola") resultado ---> "HHolaH"
*/

function addFisrt(texto){
    letra = texto.charAt(0)
    resultado = letra+texto+letra
    return resultado
}

const texto1 = "Hola"
console.log(addFisrt(texto1))




