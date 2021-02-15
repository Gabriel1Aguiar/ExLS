function calculator (n1,n2,op) {
    if (op === '+') {
        result = n1 + n2;
    }else if (op === '-') {
        result = n1 - n2;
    }else if (op === '*') {
        result = n1 * n2;
    }else if (op === '/') {
        result = n1 / n2;
    }else {
        console.log('Operador inválido')
    }


    return result 
}

console.log(calculator(1,2,'+'))
console.log(calculator(1,2,'-'))
console.log(calculator(2,2,'*'))
console.log(calculator(10,5,'/'))