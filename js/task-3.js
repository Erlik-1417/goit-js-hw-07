const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
  const cleanedValue = event.currentTarget.value.trim();
  if (cleanedValue === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = cleanedValue;
  }
});