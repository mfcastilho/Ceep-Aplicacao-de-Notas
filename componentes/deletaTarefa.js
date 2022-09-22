
const funcaoDoBotaoDeletar = () =>{
  const botaoDeletar = document.createElement("button");
  botaoDeletar.innerText = "Deletar";

  botaoDeletar.addEventListener("click", deletarTarefa)

  return botaoDeletar;
}

const deletarTarefa = (event) =>{
  const botaoDeletar = event.target;
  
  const tarefa = botaoDeletar.parentElement;
  tarefa.remove();

  return botaoDeletar;
}

export default funcaoDoBotaoDeletar