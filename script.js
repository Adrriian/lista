let input = document.querySelector('.input');
let list = document.querySelector('.list');

// Carrega as tarefas do localStorage ou usa um array padrão
let tasks = JSON.parse(localStorage.getItem('save')) || [
  { done: false, title: 'Estudar Programação' },
  { done: false, title: 'Ler 3 capítulos de Jeremias' },
  { done: false, title: 'Ler 5 páginas do livro A Arte de Pregar' }
];

// Salva a lista de tarefas no localStorage
function salvar() {
  localStorage.setItem('save', JSON.stringify(tasks));
}

// Renderiza a lista de tarefas na tela
function renderList() {
  list.innerHTML = ''; // Limpa a lista antes de renderizar

  for (let i in tasks) {
    let taskli = document.createElement('li');

    let taskinput = document.createElement('input');
    taskinput.setAttribute('type', 'checkbox');
    if (tasks[i].done) {
      taskinput.checked = true;
      taskli.classList.add('done');
    }

    taskinput.addEventListener('click', () => {
      tasks[i].done = !tasks[i].done; // Alterna entre concluído e não concluído
      salvar(); // Salva as alterações
      renderList(); // Re-renderiza a lista
    });

    taskli.appendChild(taskinput);

    let span = document.createElement('span');
    span.innerHTML = tasks[i].title;
    taskli.appendChild(span);

    list.appendChild(taskli);

     let taskdelete = document.createElement('button');
    taskdelete.innerHTML = 'Delete';
    taskdelete.addEventListener('click', () => {
      tasks.splice(i, 1); // Remove o item da lista
      salvar(); // Salva as alterações no localStorage
      renderList(); // Atualiza a exibição
    });


    taskli.appendChild(taskdelete);
  }
}

// Adiciona uma nova tarefa quando pressionar "Enter"
input.addEventListener("keyup", (e) => {
  if (e.key.toLowerCase() === "enter" && input.value !== "") {
    tasks.push({ done: false, title: input.value }); // Adiciona a nova tarefa
    input.value = ""; // Limpa o campo de entrada
    salvar(); // Salva a nova tarefa no localStorage
    renderList(); // Atualiza a lista
  } else if (input.value === "") {
    alert("Digite um título");
  }
});

// Inicializa a lista ao carregar a página
renderList();
