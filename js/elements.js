//Função para alinhar página HTML com o JS
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>" //Manipulando a tag html
    
}

function redirecionar(){
    window.open("https://developer.mozilla.org/bm/docs/Web/JavaScript/Reference") //Abre o site em uma nova aba
    window.location.href = "https://developer.mozilla.org/bm/docs/Web/JavaScript/Reference" //abre o site na mesma aba
}


//Usando o 'this' passa o próprio elemento como parâmetro, sem a necessidade de criar outra função para outro elemento.

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse!"
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
    
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}

//Mostra uma mensagem ao (re)carregar a página
function load(){
    alert("Página carregada!")
}

//Função que detecta o valor alterado pelo usuário
function mudar(elemento){
    console.log(elemento.value)
}