 //* funcoes

 //* adicionar li
  function adicionar(e){
      if(e.key ==='Enter'){
        const Nemli = document.createElement('li');
        Nemli.innerHTML = input.value;
        ul.appendChild(Nemli)

        Nemli.addEventListener('click', abre);


        input.value = '';
      }

    }
 
//* abrir o li

  function abre(){
    if(lista.style.display == 'flex'){
        lista.style.display = 'none'
    } else{
        lista.style.display = 'flex'
    }   
  }

//* fechar o li

    function fecha(){ 
      if(lista.style.display == 'none'){
          lista.style.display = 'flex'
      } else{
          lista.style.display = 'none'
      }
      }
        


  //* elementos
  const button = document.querySelector('button')
  const lista = document.querySelector(".lista3");
  const ul = document.querySelector('ul');
  const input = document.querySelector('input');

  //*Eventos
  input.addEventListener('keyup', adicionar)
  button.addEventListener('click', fecha)