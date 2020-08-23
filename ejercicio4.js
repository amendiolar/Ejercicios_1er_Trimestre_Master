
/*
Escriba una funcion JavaScript para eliminar un carácter 
en la posición especificada de una cadena dada y devolver 
la nueva cadena Ej ---> removeChar("Hola",2) 
resultado --> "Hoa"
*/



function removeChar(texto,posicion){
    aCambiar = texto.charAt(posicion)
    console.log(aCambiar)
    return texto.replace(aCambiar,"")
}     


const texto1 = 'Hola'
const posicion1 = 2
console.log(removeChar(texto1,posicion1)) 




