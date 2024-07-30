let lightMode = localStorage.getItem('lightMode');
const lightModeToggle = document.querySelector('#light-mode-toggle');

const enableLightMode = () => {
  document.body.classList.add('lightMode');
  localStorage.setItem('lightMode', 'enabled');
};

const disableLightMode = () => {
  document.body.classList.remove('lightMode');
  localStorage.setItem('lightMode', 'disabled');
};

lightModeToggle.addEventListener('click', () => {
  lightMode = localStorage.getItem('lightMode');
  if (lightMode !== 'enabled') {
    enableLightMode();
  } else {
    disableLightMode();
  }
})