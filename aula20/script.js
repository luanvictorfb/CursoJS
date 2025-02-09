let res = document.querySelector('div#res')
let txtn = document.querySelector('input#txtn')
let lista = document.querySelector('select#flista')
let array = []

function adicionar() {

    if (isNumero(Number.value) && !inLista(Number.value)) {
        
    } else {
        window.alert('Número não válido ou já encontrado na lista')
    }

    txtn.value = ""
    txtn.focus()
}
