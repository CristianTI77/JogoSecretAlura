//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
let amigosConfirmados = [];
let entradaAmigos = document.querySelector('input');

function adicionarAmigos() {
    let amigo = entradaAmigos.value;
    
    if (!amigo || amigo.trim() === "") {
        alert("Digite o nome do amigo"); 
    } else {
        if (!amigosConfirmados.includes(amigo)) {
            amigosConfirmados.push(amigo);
            alert("Amigo adicionado com sucesso!!!");
        } else {
            let opcao = prompt("Um amigo com este nome foi confirmado, \n gostaria de adicionar outro amigo com o mesmo nome? \n \
                Digite: \n 1 - Adicionar \n 2 - Cancelar");
                
            if (opcao == 1) {
                while (amigosConfirmados.includes(amigo)) {
                    amigo = prompt("Você precisa adicionar um apelido para o amigo: \n Ex: João Silva (Joãozinho)");
                }
                console.log(amigo);
                if (!amigo || amigo.trim() === "") {
                    alert("Amigo não adicionado!");
                    return;
                }
                amigosConfirmados.push(amigo);
                alert("Amigo adicionado com sucesso");
            } else {
                alert("Amigo não adicionado!");
            }
        }
    } 
    entradaAmigos.value = "";
    exibirListaDeAmigos();
}

function exibirListaDeAmigos() {
    let mostradoramigos = document.getElementById("listaAmigos");
    mostradoramigos.innerHTML = "";

    amigosConfirmados.forEach(amigo => {
        let participante = document.createElement('li');
        participante.textContent = amigo;
        mostradoramigos.appendChild(participante);
    });
}

function sortearNumeroSecreto() { 
    let numeroSorteado = Math.floor(Math.random() * amigosConfirmados.length);
    return numeroSorteado;
}

function selecionarAmigoSecreto(numeroSecreto) {
    console.log("selecionando amigo secreto");
    return amigosConfirmados[numeroSecreto];
}

function sortearAmigo() {
    if (amigosConfirmados.length == 0) {
        alert('Não há amigos para o sorteio!');
        return 0;
    }

    let amigoSecreto = selecionarAmigoSecreto(sortearNumeroSecreto());
    let result = document.getElementById('resultado').innerHTML;
    console.log(amigoSecreto + " - " + result);
    console.log(amigoSecreto == result);
    if (amigoSecreto == result && amigosConfirmados.length > 1) {
        sortearAmigo();
    } else {
        if (amigosConfirmados.length == 1) {
            alert('Este jogo é melhor com um amigo, convide seus amigos para o sorteio!');
            return 0;
        }
        // Alteração aqui para exibir "O amigo secreto é"
        document.getElementById('resultado').innerHTML = `O amigo secreto é: ${amigoSecreto}`;
    }
}
