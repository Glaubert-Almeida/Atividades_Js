function calcular() {
    var tHoras = parseFloat(horas.value)

    var tMinutos = parseFloat(minutos.value) 

    var mHoras = tHoras * 60
    var tempo = mHoras + tMinutos

    var tTotal = tempo / 15

    if(!Number.isInteger(tTotal)) { tTotal = Math.trunc(tTotal) + 1; }

    var tArred = Math.round(tTotal)

    var tValor = tArred * 2d

    pesoIdeal.innerHTML =`
    <h4>Total a pagar: R$ ${tValor.toFixed(2)}</h4>
    `

}

btnCalcular.addEventListener('click', calcular)    