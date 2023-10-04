  
   const li = document.querySelector('li');
   li.addEventListener('click', abre);
  
  function abre(){
    const lista = document.querySelector(".lista3");
    
    if(lista.style.display == 'flex'){
        lista.style.display = 'none'
    } else{
        lista.style.display = 'flex'
    }
    
  }



  function fecha(){ 
    const lista = document.querySelector(".lista3");

    if(lista.style.display == 'none'){
      lista.style.display = 'flex'
  } else{
      lista.style.display = 'none'
  }
  }

  const button = document.querySelector('button')
  button.addEventListener('click', fecha)