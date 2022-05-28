
//declarando a altura e largura do plano
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;

//recuperamos, da propria página a altura  e largura da página, toda vez que a mesma for atualizada/modificada
function ajustaTamanhoPalcoJogo() {
    console.log("entrou aqui");
    altura = window.innerHeight;
    largura = window.innerWidth;
}
ajustaTamanhoPalcoJogo();

//função que cria o elemento html de forma dinamica
function posicaoRandomica() {

    //se existir ja um elemento mosquito, ele sera removido (para depois gerar outro)
    var mosquito = document.getElementById('mosquito')
    
    if (mosquito != null) {
        mosquito.remove();

        if(vidas > 3){
            window.location.href ='fimJogo.html';
        }else{
        document.getElementById('imagem' + vidas).src = "imagens/coracao_vazio.png";
        vidas++;
        }
    }
    //criando a posição de acordo com o tamanho da página
    var posicaoX = (Math.floor(((Math.random()) * largura))) - 90;
    var posicaoY = (Math.floor((Math.random() * altura))) - 90;
    //condiçao para o elemento não sair da dimensão da página 

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoY)
    //I)criando a imagem do html no js, para trabalhar nela de forma dinamica e não estatica 
    var mosquito = document.createElement('img');
    //II)atibui a essa imagem criada a imagem que queremos
    mosquito.src = 'imagens/mosquito.png';
    //III)aplicamos o css nessa imagem 
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    //IV) atibuidos a imagem posições geradas aleatoriamente
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    //V)criando o id do elemento
    mosquito.id = 'mosquito';
    //função click no objeto
    mosquito.onclick = function () {
        document.getElementById('mosquito').src= "imagens/mosquitoMorto.png";
        setInterval(function(){
            mosquito.remove();
        },500)

        
    }

    //VI)colocamos essa imagem criada pelo js no html
    document.body.appendChild(mosquito);
}

//criando classes que daram um tamanho aleatorio no tamanho do mosquito 
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);

    switch (classe) {
        case 0:
            return 'mosquito1'

        case 1:
            return 'mosquito2'

        case 2:
            return 'mosquito3'
    }
    console.log(classe);
}


function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);

    switch (classe) {
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
    }
    console.log(classe);
}

var cronometro = setInterval(function(){
    var vidas = document.getElementById('vidas');
    if(tempo == 0 && vidas < 3){
       window.location.href = 'jogoVitoria.html';
    }else{
        tempo=tempo - 1 ;
        document.getElementById('idCronometro').innerHTML = tempo;
    }
    
},1000)











