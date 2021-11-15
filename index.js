const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("btn-el")
const homeEl = document.getElementById("home")
const responseEl = document.getElementById("response")

homeEl.addEventListener("click", () => {
  window.location.href = "../index.php"
})

buttonEl.addEventListener("click", () => {
  $.ajax({
    type: "POST",
    url: "run.php",
    data: { search: inputEl.value }
  }).done( ( o ) => {
    responseEl.innerHTML = o
  });
  inputEl.select()
})

inputEl.addEventListener("keyup", (event) => {
  if ( event.key === 'Enter' ) {
    event.preventDefault()
    buttonEl.click()
    inputEl.select()
  }
})
