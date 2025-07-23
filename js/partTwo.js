function alternarColorFondo() {
  const body = document.body;
  const colorText = document.querySelector('.color');
  const currentColor = body.style.backgroundColor;

  
  if (currentColor === 'darkblue') {
    body.style.backgroundColor = 'red';
    if (colorText) colorText.textContent = 'Rojo';
  } else {
    body.style.backgroundColor = 'darkblue';
    if (colorText) colorText.textContent = 'Azul';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.button');
  if (btn) {
    btn.addEventListener('click', alternarColorFondo);
  }
});
