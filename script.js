const body = document.getElementsByTagName('body')[0];
const colorHex = document.getElementById('colorHex');
const flipButton = document.getElementById('flipButton');

const hexChars = '0123456789ABCDEF';

function flipButtonClicked() {
  const hexValue = generateHex();
  updateElementColors(hexValue);
  colorHex.innerText = hexValue;
}
function updateElementColors(color) {
  body.style.backgroundColor = color;
  colorHex.style.color = color;
}

function generateHex() {
  let hexValue = '#';

  for (let i = 0; i < 6; ++i) {
    const randomNum = Math.floor(Math.random() * 16);
    hexValue += hexChars[randomNum];
  }

  return hexValue;
}

flipButton.addEventListener('click', flipButtonClicked);