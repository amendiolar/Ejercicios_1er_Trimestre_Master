
/*
Escriba una función de JavaScript para verificar si 
dos valores enteros dados están en el rango 50..99 
(inclusive). Devuelve verdadero si alguno de ellos 
está en dicho rango. 
Ej --> inRange(55,47) resultado ---> true
*/

function inRange(num1,num2){
    if(num1 >= 50 & num1 <=99 || num2>=50 & num2 <= 99){
            return "resultado ---> true"
        } else {
            return "resultado ---> falso"
        }
}


const numero1 = 55
const numero2 = 47
console.log(inRange(numero1,numero2))





