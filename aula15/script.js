function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let anonas = document.querySelector('input#anonas');
    let res = document.querySelector('div#res');

    if (anonas.value.length == 0 || anonas.value > ano) {
        window.alert('Preencha os dados corretamente!');
    } else {
        let sexo = document.getElementsByName('radsex');
        let idade = ano - Number(anonas.value);
        let genero = '';
        let foto = document.createElement('div');
        foto.id = 'foto';

        if (sexo[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                foto.style.backgroundImage = "url('imagens/criança-m.png')";
            } else if (idade >= 10 && idade < 26) {
                foto.style.backgroundImage = "url('imagens/jovem-m.jpg')";
            } else if (idade >= 26 && idade < 50) {
                foto.style.backgroundImage = "url('imagens/adulto-m.jpg')";
            } else {
                foto.style.backgroundImage = "url('imagens/idoso-m.jpg')";
                foto.style.backgroundPosition = "center right"
            }
        } else if (sexo[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                foto.style.backgroundImage = "url('imagens/criança-f.jpg')";
            } else if (idade >= 10 && idade < 26) {
                foto.style.backgroundImage = "url('imagens/jovem-f.jpg')";
            } else if (idade >= 26 && idade < 50) {
                foto.style.backgroundImage = "url('imagens/adulto-f.jpg')";
            } else {
                foto.style.backgroundImage = "url('imagens/idoso-f.jpg')";
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(foto);
    }
}
