

function cambiarFondoYTexto() {
  const myDiv = document.getElementById("myDiv");

  
  if (myDiv) {
    myDiv.style.backgroundColor = "darkblue";
    myDiv.style.color = "lightblue";
  }
  const colorText = document.querySelector(".color");
  if (colorText) {
    colorText.textContent = "darkblue";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".button");
  if (btn) {
    btn.addEventListener("click", cambiarFondoYTexto);
  }
});
