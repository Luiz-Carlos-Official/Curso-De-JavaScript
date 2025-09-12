var idade = 11
console.log (`Você tem ${idade} anos`)
if (idade < 16) {
    console.log(`Não vota`)
}

else {
    if (idade >= 16 && idade < 18) {
        console.log(`Voto opcional`)
    }
    else {
        if (idade >= 18 && idade < 60) {
            console.log (`Voto obrigatorio`)
        }
        else  {
            if (idade >= 60 && idade < 100) {
                console.log (`Voto novamente opcional`)
            }
            else {
                console.log (`Você ainda está vivo?`)
            }
        }
    }
}