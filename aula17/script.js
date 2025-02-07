function calcular(){

    let numtxt = document.querySelector('input#num')
    let res = document.querySelector('div#res')
    let num = Number(numtxt.value)
    res.innerHTML=''
    for(c=1;c<=10;c++){
        let r = num*c
        res.innerHTML+=`${num} x ${c} = ${r} <br>`
    }
    res.innerHTML+='Fim!'
}