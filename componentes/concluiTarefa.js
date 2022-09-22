
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

export default funcaoDoBotaoConcluir