
var contador = 0;



function botaoCorFase2() {
    contador = contador + 1;
    var cor = document.getElementById('idCor').value;
    var container = document.getElementById('container')
    console.log("cor", cor);
    console.log("contador", contador);
    if (contador == 1 && cor == 'amarelo') {
        container.style.backgroundColor = "green";
        var vazio = " "
        document.getElementById('idCor').innerHTML = vazio;
    } else {
        if (contador == 2 && cor == 'verde'){
            container.style.backgroundColor = "blue";
        } else {
            if (cor == 'azul') {
                alert('fase 3');
            } else {
                window.location.href = 'fimJogo.html';
            }
        }
    }

}
   
