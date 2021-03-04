let darkMode = localStorage.getItem('darkMode');
// that code line means we have something called darkMode in localStorage
// localStorage: the data has never sent back to the server
// it's only stored locally on the computer

const darkModeToggle = document.querySelector('#dark-mode-toggle');
// check if dark mode is enabled
// if it's enabled, turn it off
// if it's disabled, turn it on

const enableDarkMode = () => {
  // 1. add the class darkMode to the body
  document.body.classList.add('darkMode');
  // 2. update darkMode in the localStorage
  localStorage.setItem('darkMode', 'enable');
};

const disableDarkMode = () => {
  // 1. add the class darkMode to the body
  document.body.classList.remove('darkMode');
  // 2. update darkMode in the localStorage
  localStorage.setItem('darkMode', null);
};

//! to keep the current state,
// when you want dark mode, then you click the toggle
// the dark mode will be kept even though the page would be reload
if (darkMode === 'enabled') {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enable') {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
});
