let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(`O vetor tem ${num.length} posições`)
/*for(let c=0;c<num.length;c++){
    console.log(`o valor da posição ${c} do vetor é  ${num[c]} `)
}*/
for(let c in num){
    console.log(`o valor da posição ${c} do vetor é  ${num[c]} `)
}