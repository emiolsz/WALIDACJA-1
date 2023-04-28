function addTodoElem() {
  const todoInputHTMLElement = document.querySelector('[data-test="todo-input"]');
  const todoInputLabelHTMLElement = document.querySelector(
    '[data-test="todo-input-label"]'
  );
  const txt = todoInputHTMLElement.value;
  if(txt == "") {
   alert("Nic nie wpisałeś!")
} else {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", {
      title: txt,
      body: "lorem ipsum",
      userId: 1,
    })
    .then((response) => {
      alert(`Dodano zadanie: ${txt}`);
      todoInputHTMLElement.value = "";
    })
    .catch((error) => {
      todoInputLabelHTMLElement.textContent = "Request error";
    });
}
}

const addButton = document.querySelector('[data-test="todo-add"]');
addButton.addEventListener("click", addTodoElem);
