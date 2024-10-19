let listaMercado = ["arroz", "leche", "pasta", "papa criolla", "helado", "papa", "carne", "pollo" ]

console.log(listaMercado)
console.log(listaMercado.length)

listaMercado.push("costillas de cerdo")
console.log(listaMercado)
// listaMercado.forEach((item,index) =>{
//     console.log(item + " " + index)
// })

let fibo = [0,1,1,2,3,5,8,13,21]

fiboNuevo = fibo.map(numero =>{ 
    return numero*2
})
console.log(fibo)
console.log(fiboNuevo)