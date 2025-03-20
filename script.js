let input = document.querySelector(".input")
input.addEventListener("keyup", (e) => {
  let input2 = document.querySelector(".input")
  let list = document.querySelector(".list")
  if (e.key.toLowerCase() === "enter") {
    let li = document.createElement("li")
    let span = document.createElement("span")
    span.innerHTML = input2.value
    li.innerHTML = '<input type = "checkbox" class="feito">' + '<span>'+ span.innerHTML +'</span>'
    list.appendChild(li)
    input.value = "";
  }

})
