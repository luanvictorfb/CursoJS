function contar(){
    let inicio = document.querySelector('input#ini')
    let fim = document.querySelector('input#fim')
    let pulo = document.querySelector('input#pulo')
    let res = document.querySelector('div#res')

    if(inicio.value.length==0 || fim.value.length==0 || pulo.value.length==0){
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(pulo.value)
        if(p==0){
            window.alert('Pulo marcado como 0, será considerado 1')
            p=1
        }
        if(i<f){
            for(let c=i ; c<=f ; c+=p){
                res.innerHTML+=`${c}, `
            }
            
        }else{
            for(let c=i ; c>=f ; c-=p){
                res.innerHTML+=`${c}, `
            }
        }
        res.innerHTML += 'FIM!'
    } 
}