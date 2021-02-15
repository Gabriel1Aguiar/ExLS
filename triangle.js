function triangle(n1,n2,n3) {
    if (n1 == n2 && n2 == n3){
        result= "Equilatero"
    }else if (n1 != n2 && n2 != n3 && n3 != n1){
        result = "Escaleno"
    }else {
        result ="Isósceles"
    }

    return result
}

console.log(triangle(2,2,2))
console.log(triangle(2,3,2))
console.log(triangle(1,2,3))