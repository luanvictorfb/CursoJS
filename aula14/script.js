function carregar(){
    let msg = document.querySelector('div#msg')
    let img = document.querySelector("div#foto")

    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas<br>`

    if(hora >=0 && hora < 12){
        msg.innerHTML += 'Bom dia!'
        img.style.backgroundImage = "url('imagens/dia.jpg')"
    } else if(hora >= 12 && hora < 18){
        msg.innerHTML += 'Boa tarde!'
        img.style.backgroundImage ="url('imagens/tarde.jpg')"
    } else{
        msg.innerHTML += 'Boa noite!'
        img.style.backgroundImage ="url('imagens/noite.jpg')"
    }
}