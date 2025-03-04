/*

OBEJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
  - passo 2 - dar um jeito de indentificar o clique do usuário na seta avançar
  - passo 3 - fazer aparecer o proximo cartão da lista 
  - passo 4 - buscar o cartão que esta selecionado e esconder

OBEJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
  - passo 2- dar um jeito de indentificar o clique do usuário na seta voltar
  - passo 3 - fazer aparecer o cartão anterior da lista 
  - passo 4 - buscar o cartão que esta selecionado e esconder
*/

//OBEJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista

// passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar");  
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

cartoes.forEach(cartao => {
   cartao.addEventListener("click", function(){
    const cartaVirada = cartao.querySelector(".carta-virada");

    //virar o cartão
    cartao.classList.toggle("virar");
    //mostrar o fundo da carta
    cartaVirada.classList.toggle("mostrar-fundo-carta");

    const descricao = cartao.querySelector(".descricao");
    descricao.classList.toggle("esconder");
    
   });
});

// passo 2- dar um jeito de indentificar o clique do usuário na seta avancar
btnAvancar.addEventListener("click", function () {
if(cartaoAtual === cartoes.length - 1) return;

// passo 4 - buscar o cartão que esta selecionado e esconder
const cartaoSelecionado = document.querySelector(".selecionado");
cartaoSelecionado.classList.remove("selecionado");

// passo 3 - fazer aparecer o proximo cartão da lista
cartaoAtual++;
cartoes[cartaoAtual].classList.add("selecionado");
});

/* OBEJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
  - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
  - passo 2- dar um jeito de indentificar o clique do usuário na seta voltar
  - passo 3 - fazer aparecer o cartão anterior da lista 
  - passo 4 - buscar o cartão que esta selecionado e esconder
*/

const btnVoltar = document.getElementById("btn-voltar");

btnVoltar.addEventListener("click", function () {
    if(cartaoAtual === 0 ) return;
    
   
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
    
    
    cartaoAtual--;
    cartoes[cartaoAtual].classList.add("selecionado");
    });

