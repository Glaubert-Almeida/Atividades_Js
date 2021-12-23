function calcularPesoPrato() {
    var peso1 = parseFloat(pesoPrato.value) / 1000
    var peso2 = parseFloat(vKg.value)

    if (peso1 === "") {
        alert("Favor preencher o valor do peso!")
        return
    }

    valorPrato = (peso1 * peso2)

    pesoIdeal.innerHTML =`
    <h4>Valor do prato: R$ ${valorPrato.toFixed(2)}</h4>
    `

}

btnCalcular.addEventListener('click', calcularPesoPrato)    