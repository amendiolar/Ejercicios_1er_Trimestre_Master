
/*
Escriba una función de JavaScript para contar 
el número de vocales en una cadena dada.
*/

contador = []
function vowelsCount(texto){
    console.log(texto.length)
    for(var i=0; i<texto.length; i++){
        if(texto[i]=="a" || texto[i]=="e" || texto[i]=="i" 
        || texto[i]=="o" || texto[i]=="u" || texto[i]=="A"
        || texto[i]=="E" || texto[i]=="I" || texto[i]=="O"
        || texto[i]=="U"){
            console.log(texto[i])
            contador.push(texto[i])
        }
    } 
    console.log(contador)
    return `Cantidad de vocales = ${contador.length}`
}

/*
const texto1 = "El morro"
console.log("El morro "+vowelsCount(texto1))

const texto2 = "EL MORRO"
console.log("EL MORRO "+vowelsCount(texto2))
*/
const texto3 = "El Orangutan"
console.log("El Orangutan "+vowelsCount(texto3))


