//
const emojis =[
  "🐱","🐱","🦝","🦝","🦊","🦊","🐶","🐶",
  "🐵","🐵","🐆","🐆","🐔","🐔","🐯","🐯",
];
let openCards = []; //guarda temporariamente as cartas que forem abertas

let shuffleEmojis = emojis.sort(() =>(Math.random() > 0.5 ? 2: -1));
//método .sort() - embaralha os emojis de forma aleatória
//condição (Math.random() > 0.5) retorna true ou false (ordenação aleatória)
// true retorna 2 empurra o elemento pra frente)
//false retorna -1 empurra o elemento para trás 
for(let i = 0; i < emojis.length; i++)
//itera sobre cada elemento do array com base no seu comprimento
{
  let box = document.createElement("div");
//cria um novo elemento <div> no DOM (uma "carta" para o jogo)
  box.className = "item";
//define a classe CSS para o novo elemento <div>
  box.innerHTML = shuffleEmojis[i];
//define o conteúdo interno (innerHTML) do <div> como o emoji correspondende do array shuffleEmojis

  box.onclick = handleClick;
//adiciona um evento de clique ao elemento <div> (função handleClick)
  document.querySelector(".game").appendChild(box);
//seleciona um elemento no DOM com a classe "game" e adiciona o novo <div> como seu filho, inserindo as "cartas" no tabuleiro do jogo
}

function handleClick() {
//verifica se menos de 2 elementos estão abertos
  if (openCards.length < 2){
    this.classList.add("boxOpen");
//adiciona a classe CSS "boxOpen" ao elemento clicado (this) alterando sua aparência para indicar que foi aberto
    openCards.push(this);
//adiciona o elemento clicado (this) ao array openCards, para rastrear as cartas que foram abertas 
  }

  if(openCards.length == 2) {
    setTimeout(checkMatch, 500); 
//se há 2 elementos na lista openCards, chama a função checkMatch após um atraso de 500 ms para verificar se as cartas formam um par 
  }

  console.log(openCards);
}

function checkMatch() {
  //verifica se as cartas abertas são iguais
  if(openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
    //adiciona a classe CSS "boxMatch" às cartas abertas, indicando que combinam

  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
    //remove a classe CSS "boxOpen" das cartas abertas, indicando que não combinam
  }

  openCards = [];
  //limpa o array openCards para que as cartas possam ser abertas novamente

  if(document.querySelectorAll(".boxMatch").length === emojis.length) {
  //se o número de cartas abertas com a classe ".boxMatch" que indica que as cartas são iguais, for exatamente do mesmo tamanho que o array "emojis" emite um alert indicando o fim do jogo

    alert ("Você venceu!");
  }
}

