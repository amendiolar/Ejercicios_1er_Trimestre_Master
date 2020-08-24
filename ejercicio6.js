
/*
Escriba un programa JavaScript para cambiar el uso de 
mayúsculas en todas las letras de una cadena determinada. 
Ej ---> changeMayus("ComoEstas") resultado ---> "cOMOeSTAS"
*/

var newText = []
function changeWords (text){
    for(var i=0; i<text.length; i++){
        if (text[i] == text[i].toUpperCase()) {
           //  console.log(text[i].toLowerCase())
            newText.push(text[i].toLowerCase())
         } else {
            // console.log(text[i].toUpperCase())
            newText.push(text[i].toUpperCase())
         }
         
    } 
    return newText.join("")
}


const texto1 = "ComoEstas"
console.log(changeWords(texto1))






