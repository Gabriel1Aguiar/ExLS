const numeros = [1,2,3,4,5]

var impares = numeros.filter((value) => value % 2 !== 0)
var total = impares.reduce((total,impares) => total + impares, 0)


console.log(total)