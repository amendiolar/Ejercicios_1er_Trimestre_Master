
/*
Escriba un programa JavaScript para crear 
una nueva cadena a partir de una cadena dada 
cambiando la posición del primer y último carácter. 
La longitud de la cadena debe ser mayor o igual a 1. 
Ej ----> firstLast("Hola") resultado ---> "aolH"
*/


function firstLast(texto){
    if(texto.length>1){
        ultimo = texto.length
        aCambiar = texto.charAt(0)
        nuevoTexto = texto.replace(aCambiar,"")
        return nuevoTexto + aCambiar
    } else {
        return "El texto debe tener mas caracteres"
    }
}


const texto1 = "Hola"
console.log(firstLast(texto1))



