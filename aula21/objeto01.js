let amigo ={nome:'José',sexo:'M',peso:85.5,engordar(p=0){
    this.peso += p
}}

console.log(amigo)
amigo.engordar(2)
console.log(`${amigo.nome} engordou para ${amigo.peso}`)