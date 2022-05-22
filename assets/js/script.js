function gerar() {
    let numero = document.querySelector('#txtn')
    let tab = document.querySelector('#seltab')

    if (numero.value.length == 0) {
        alert('Por favor digite um número!')
    } else {
        tab.innerHTML = ''        
        let n = Number(numero.value)
        
        for (let c = 1; c <= 10; c++ ) {
            let item = document.createElement('option')
            item.text = `${n} * ${c} = ${n*c}`
            tab.appendChild(item)
        }

    }
    
}