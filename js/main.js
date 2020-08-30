//Declarando as variáveis
var nome = "Lucas Alves"
var n1 = 21
var n2 = 10
var frase = "Alemanha é o melhor time do mundo!" //String de exemplo.

/*
alert("Bem-vindo " + nome +"!")
alert(nome + " tem " + idade + " anos")
console.log(nome)
console.log(n1)
console.log(n1 * n2) //Operação aritmética com números

alert(frase.replace("Alemanha", "Brasil")) //Troca a palavra selecionada.

console.log(frase.toLowerCase()) //Todo o texto fica em minúsculo.

console.log(frase.toUpperCase()) //Todo o texto fica em maiúsculo.
*/




// Arrays

var lista = ["Maçã", "Uva", "Morango"]

//lista.push("Laranja") //Adiciona item na lista
//lista.pop() //Remove o item da lista
//console.log(lista.length) //Mostra o tamanho da lista
//lista.reverse() //Inverte a ordem da lista
//console.log(lista.toString()) //Tira a referência de um array
console.log(lista.join(" || ")) //Altera o caractere especial que separa as palavras
var fruta = [{nome:"morango", cor:"vermelho"},{nome:"uva", cor:"roxa"}] //Dicionário
console.log(fruta[1].nome)


// CONDICIONAIS

var idade = prompt("Qual sua idade?")
if(idade >= 18){
    alert("maior de idade")
}else{
    alert("menor de idade")
}


//LAÇOS DE REPETIÇÃO

var count = 0
while(count <=10){
    console.log(count)
    count++
}

// FOR
var cont
for(cont = 0; cont <=5; cont++){
    alert(cont)
}

//MÉTODOS PARA DATA E HORA

var d = new Date() //Mostra a data atual completa
alert(d.getDay()) //Mostra o número correspondente ao dia da semana atual
alert(d.getHours()) //Mostra a hora inteira do horário atual(sem os minutos)
alert(d.getMinutes()) //Mostra os minutos do horário atual