let res = document.querySelector('div#res')
let array = []

function adicionar() {
    let txtn = document.querySelector('input#txtn')
    let n = Number(txtn.value)

    if (isNaN(n) || n < 0 || n > 100) {
        window.alert('Número não válido')
    } else {
        array.push(n)
        res.innerHTML = `Valor adicionado: ${n}`
    }

    txtn.value = "<br>"
    txtn.focus()
}
