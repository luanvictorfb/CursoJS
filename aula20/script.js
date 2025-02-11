let num = document.querySelector('input#txtn')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let array = []

function isNum(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    }
    else{
        return false
    }
}
function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }
}
function adicionar() {
    if(isNum(num.value) && !inLista(num.value, array)) {
        array.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML=''
    }
    else{
        window.alert('Número não válido ou já encontrado na lista.')
    }
}
function finalizar(){
    if(array.length==0){
        window.alert('Adicione valores antes de finalizar')
    } else{
        array.sort()
        let total = array.length
        let soma = 0
        let media = 0 
        for(let pos in array){
            soma += array[pos]
        }
        media = soma/total
        res.innerHTML=''
        res.innerHTML+=`<p>Ao todo, temos ${total} números cadastrados.<p>`
        res.innerHTML+=`<p>Menor número é ${array[0]}.<p>`
        res.innerHTML+=`<p>Maior número é ${array[array.length-1]}.<p>`
        res.innerHTML+=`<p>A soma dos números é ${soma}.<p>`
        res.innerHTML+=`<p>A média dos números é ${media}.<p>`
    }
}