
/*
Escriba una función de Javascript que convierta un numero 
a formato moneda 
Ej ---> convertExchange(2000) resultado --> "$2,000.00"
*/

function convertExchange(amount){
    importe = amount.toString()
    miles = importe.length
    // console.log(miles)
    if(miles <4){
        return "$"+importe+".00" 
    } else if(miles >3 & miles < 7){
        thousand = importe.substr(miles-3,3)
        hundredThousand = importe.slice(0,miles-3)
       // console.log(hundredThousand)
        return "$"+hundredThousand+","+thousand+".00"
    }
    
}


const amount1 = 2000
console.log(convertExchange(amount1))






