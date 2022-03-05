var num1 = 8
var num2 = 6
var num3 = 9
var num4 = 7
var num5 = 4

var notafinal = (num1 + num2 + num3 + num4) / num5

console.log(`Suas notas foram: ${num1}, ${num2}, ${num3}, ${num4}`)
console.log(`A sua média foi de ${notafinal}`)
if ( notafinal >= 7){
    console.log("Aprovado!")
}else if ( notafinal >= 5){
    console.log("Recuperação!")
}else{
    console.log("Reprovado!")
}

