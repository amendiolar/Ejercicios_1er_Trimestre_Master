
/*
Escriba una función de JavaScript para redondear un número a una cantidad específica 
de dígitos. Ej ---> roundNumber(2.3453467335,2) resultado -> 2.34
*/


function roundNumber(number, digitos){
    var n = number.toString()
    // console.log(n)
    for(var i=0; i<n.length; i++){
        if(n[i] === "."){
            // console.log(i)
            redondeo = i+digitos+1
            // console.log(redondeo)
            newString = n.substr(0,redondeo)
            // console.log("newString ",newString)
            // console.log(parseInt(n[redondeo]))
            arriba = parseFloat(newString)
            // console.log("arriba ",arriba)
            if(parseInt(n[redondeo]) > 5){
                fraccion = parseFloat((1/(10**(digitos))))
                fraccionRounded = fraccion.toFixed(digitos)
                final = arriba + parseFloat(fraccionRounded)
                return `Sube ${final.toFixed(digitos)}`
            } else{
                return `Baja ${arriba}`
            }

        }
        
    }
    
}


const numero1 = 2.3453467335
const digitos1 = 2
console.log(roundNumber(numero1,digitos1))





