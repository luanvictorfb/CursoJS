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
    }
    else{
        window.alert('Número não válido ou já encontrado na lista.')
    }
}
