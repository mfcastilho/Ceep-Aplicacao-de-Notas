const novaTarefa = document.querySelector('[data-form-button]');


novaTarefa.addEventListener("click", (event)=> {
  
  //o preventDefault() significar prevenir o comportamento padrão
  event.preventDefault();
  const formulario = document.querySelector('[data-form-input]');
  alert(formulario.value);
});