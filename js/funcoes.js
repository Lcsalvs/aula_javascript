//Introdução às Funções no JS

function soma(n1, n2){
    return n1 +n2;
}

alert(soma(5,10))

function validaIdade(idade){
    var validar
    if(idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar
}

var idade = prompt("Qual sua idade?")
alert(validaIdade(idade))