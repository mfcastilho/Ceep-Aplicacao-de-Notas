
//Função de criar nova tarefa
const criarTarefa = (event) =>{

  //o preventDefault() significa prevenir o comportamento padrão
  event.preventDefault();

  //Buscando a ul
  const lista = document.querySelector("[data-list]");

  //Buscando o input
  const formulario = document.querySelector('[data-form-input]');

  //Passando as informações digitadas no forme para a variável valor
  const valor = formulario.value;

  //riando uma nova li
  const novaTarefa = document.createElement("li");

  //Adicionando uma classe na li
  novaTarefa.classList.add("task");

  //Adicionando a variável um parágrafo com o valor do input
  const paragrafo = `<p class="content">${valor}</p>`;

  //Passando para o conteúdo interno da li o parágrafo
  novaTarefa.innerHTML = paragrafo;

  novaTarefa.appendChild(funcaoDoBotaoConcluir());
  
  //Inserindo a li como filha da ul
  lista.appendChild(novaTarefa);

  //limpando a input
  formulario.value = "";
 
}

//Buscando botão Novo Item
const novaTarefa = document.querySelector('[data-form-button]');

//Evento do botão novaTarefa
novaTarefa.addEventListener("click", criarTarefa);

const funcaoDoBotaoConcluir = ()=>{
  const botaoConcluir = document.createElement("button");
  botaoConcluir.classList.add("check-button");
  botaoConcluir.innerText = "Concluir";
  botaoConcluir.addEventListener("click", concluirTarefa);
  return botaoConcluir;
}

const concluirTarefa = (event) =>{

  //o target mostra o elemento que foi manipulado no evento, ou seja, o alvo do evento
  const botaoConcluir = event.target;

  //o parentElemento pega o elemento pai de um outro elemento
  //no nosso caso, iremos pegar o pai do botaoConcluir que é a li
  const tarefacompleta = botaoConcluir.parentElement;

  //o método toggle: se a classe existir naquele elemento, ele a remove, se não existir ele a adiciona
  tarefacompleta.classList.toggle("done");
}




/*
Todos os elementos na nossa árvore do DOM são nós e todos os nós podem ser acessados via JavaScript. Os nós podem ser deletados, criados ou modificados. Durante o curso utilizamos o método appendChild que sempre é adicionado no final do nó, para colocar um nó filho dentro do nó pai

Existem outros métodos que podemos utilizar para manipular nós:

insertBefore(pai, filho): Coloca um nó antes do outro.
replaceChild( elemento1, elemento2): Substitui o nó elemento 1 pelo nó elemento2.
removeChild(elemento): Remove um nó da árvore.


*/