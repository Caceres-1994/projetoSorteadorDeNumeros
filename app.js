let listaDeNumerosSorteados = [];


function resultadoSorteio() {
    document.getElementById(`resultado`).innerHTML = `Números sorteados: ${listaDeNumerosSorteados}`;
    document.getElementById(`btn-reiniciar`).style.cursor = "pointer";
    document.getElementById(`btn-reiniciar`).removeAttribute(`disabled`);
    document.getElementById(`btn-sortear`).style.cursor = "not-allowed";
    document.getElementById(`btn-sortear`).setAttribute(`disabled`, "");

}


function sortear() {
    let de = parseInt(document.getElementById(`de`).value);
    let ate = parseInt(document.getElementById(`ate`).value);
    let quantidade = parseInt(document.getElementById(`quantidade`).value);
    let numeroSorteado = parseInt(Math.random() * ate + 1);

    if(de>=ate){
        alert(`Não é possível sortear, pois o intervalo selecionado é negativo. Selecione novos parâmetros.`);
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        return;
      }
    
    if(numeroSorteado<de) {
        numeroSorteado = parseInt(Math.random() * ate + 1);
    }else{
        listaDeNumerosSorteados.push(numeroSorteado);
    }

    while(listaDeNumerosSorteados.length<quantidade){
        if(numeroSorteado<de || listaDeNumerosSorteados.includes(numeroSorteado)){
            numeroSorteado = parseInt(Math.random() * ate + 1);
        }else{
            listaDeNumerosSorteados.push(numeroSorteado);
        }
    }

    resultadoSorteio();
}

function reiniciar() {
    listaDeNumerosSorteados = [];
    quantidade.value = ``;
    de.value = ``;
    ate.value = ``;
    numeroSorteado = "";
    document.getElementById(`btn-sortear`).style.cursor = "pointer";
    document.getElementById(`btn-sortear`).removeAttribute(`disabled`);
    document.getElementById(`btn-reiniciar`).style.cursor = "not-allowed";
    document.getElementById(`btn-reiniciar`).setAttribute(`disabled`, "");
    document.getElementById(`resultado`).innerHTML = `Números sorteados:  escolha novos parâmetros.`;
}

