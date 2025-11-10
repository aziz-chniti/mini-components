const inputs = document.querySelectorAll('.otp-input');

inputs.forEach((input, index) => {
  input.addEventListener('input', (e) => {
    const val = e.target.value.replace(/[^0-9]/g, '');
    e.target.value = val;

    if (val) {
      input.classList.add('filled');
      if (index < inputs.length - 1) inputs[index + 1].focus();
    } else {
      input.classList.remove('filled');
    }
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });
  input.addEventListener('paste', (e) => {
    let paste = e.clipboardData.getData('text').trim();
    paste = paste.replace(/[^0-9]/g, '');
    if (paste.length) {
      paste.split('').forEach((char, i) => {
        if (inputs[i]) {
          inputs[i].value = char;
          inputs[i].classList.add('filled');
        }
      });
      inputs[Math.min(paste.length - 1, inputs.length - 1)].focus();
    }
    e.preventDefault();
  });
});
