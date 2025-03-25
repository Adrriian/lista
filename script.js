let input = document.querySelector('.input');
let list = document.querySelector('.list');

let tasks = [
  { done: false, title: 'Estudar Programação' },
  { done: false, title: 'Ler 3 capitulos de Jeremias' },
  { done: false, title: 'Ler 5 pg do livro a arte de pregar ' },
];

input.addEventListener("keyup", (e) => {
  if (e.key.toLowerCase() === "enter" && input.value !== "") {
    tasks.push({ done: false, title: input.value }); // Adiciona um novo item ao array
    console.log(tasks)
    input.value = ""; // Limpa o campo de entrada
    renderList()
  }else if(input.value === ""){
    alert("digite um titulo")
  }

}
);

function renderList() {
  list.innerHTML = '';
  for (let i in tasks) {
    let taskli = document.createElement('li');

    let taskinput = document.createElement('input');
    taskinput.setAttribute('type', 'checkbox');
    if (tasks[i].done === true) {
      taskinput.setAttribute('checked', 'true');
      taskli.classList.add('done');
    }
    taskinput.addEventListener('click', () => {
      tasks[i].done = !tasks[i].done;
      renderList()
    })

    taskli.appendChild(taskinput)

    let span = document.createElement('span');
    span.innerHTML = tasks[i].title;
    taskli.appendChild(span)

    list.appendChild(taskli)

  }
}
renderList()
