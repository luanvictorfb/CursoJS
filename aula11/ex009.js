function verificar(){
    let pais = document.querySelector('pais')
    let res = document.querySelector('res')
    res.innerHTML = `<p>Seu pais é de origem é <strong>${pais}</strong>`
    if(pais == 'brasil'){
        res.innerHTML += `<p>Você é brasileiro</p>`
    }else{
        res.innerHTML += `<p>Você é estrangeiro</p>`
    }
}