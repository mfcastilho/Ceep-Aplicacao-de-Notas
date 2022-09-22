
//Função de criar nova tarefa
const criarTarefa = () =>{
  //o preventDefault() significar prevenir o comportamento padrão
  event.preventDefault();
  const formulario = document.querySelector('[data-form-input]');
  alert(formulario.value);
  formulario.value = "";
}

//Buscando botão Novo Item
const novaTarefa = document.querySelector('[data-form-button]');

//Evento do botão novaTarefa
novaTarefa.addEventListener("click", criarTarefa);