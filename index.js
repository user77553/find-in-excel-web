const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("btn-el")
const responseEl = document.getElementById("response")

buttonEl.addEventListener("click", () => {

  $.ajax({
    type: "POST",
    url: "run.php",
    data: { search: inputEl.value }
  }).done( ( obj ) => {
    responseEl.innerHTML = obj
  });
})
