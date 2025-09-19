let valores = []

function adicionar() {
    let num = document.getElementById('num')
    let tab = document.getElementById('tab')
    let n = Number(num.value)

    if (n < 1 || n > 100 || num.value.length == 0) {
        window.alert('Número inválido! Por favor, digite novamente!')
    } else if (valores.includes(n)) {
        window.alert('Número já adicionado!')
    } else {
        valores.push(n)
        let item = document.createElement('option')
        item.text =  `Valor ${n} adicionado`
        tab.appendChild(item)
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    let res = document.getElementById('res')

    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = Math.max(...valores)
        let menor = Math.min(...valores)
        let soma = valores.reduce((acc, cur) => acc + cur, 0)
        let media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}.</p>`
    }
}

function resetar() {
    let tab = document.getElementById('tab')
    let res = document.getElementById('res')

    valores = [] // limpa o array
    tab.innerHTML = '' // limpa a lista
    res.innerHTML = '' // limpa os resultados
    window.alert('Todos os dados foram resetados!')
}
