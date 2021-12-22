// Requisito 12 (Essas 2 primeiras funções rodam assim que onload acontecer)

/** Source: https://stackoverflow.com/questions/1484506/random-color-generator
 * Usei uma função pronta do stackoverflow que gera as cores hexadecimal randomicamente */
function generateHexadecimalColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// Requisito 12 (continuação)
function buildColorPalette() {
  const colorsElements = document.querySelectorAll('.color');
  const colors = ['#000'];

  for (let i = 0; i < 3; i += 1) {
    colors.push(generateHexadecimalColor());
  }

  for (let i = 0; i < colorsElements.length; i += 1) {
    colorsElements[i].style.backgroundColor = colors[i];
  }
}

buildColorPalette();

// Requisito 7
function selectColor() {
  const colorPalleteContainer = document.querySelector('#color-palette');

  colorPalleteContainer.addEventListener('click', (event) => {
    const { target } = event;

    if (target.classList.contains('color')) {
      document.querySelector('.selected').classList.remove('selected');
      target.classList.add('selected');
    }
  });
}

selectColor();

// Requisito 8
function changeColor() {
  const colorPaletteContainer = document.querySelector('#pixel-board');

  colorPaletteContainer.addEventListener('click', (event) => {
    const { target } = event;

    if (target.classList.contains('pixel')) {
      const color = document.querySelector('.selected').style.backgroundColor;

      target.style.backgroundColor = color;
    }
  });
}

changeColor();

// Requisito 9
function clearPixels() {
  const clearButton = document.querySelector('#clear-board');

  clearButton.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');

    for (const item of pixels) {
      item.style.backgroundColor = '#fff';
    }
  });
}

clearPixels();

// Requisito 10
function changeNumbersPixels() {
  const addPixels = document.querySelector('#generate-board');

  addPixels.addEventListener('click', () => {
    const selectInpud = document.querySelector('#board-size');
    const { value } = selectInpud;

    if (value === '') {
      alert('Board inválido!');

      return;
    }

    const colorPaletteContainer = document.querySelector('#pixel-board');

    colorPaletteContainer.innerHTML = '';
    colorPaletteContainer.style.width = `${42 * value}px`;
    colorPaletteContainer.style.height = `${42 * value}px`;

    const amountOfPixels = value * value;

    for (let index = 0; index < amountOfPixels; index += 1) {
      const pixel = document.createElement('div');

      pixel.className = 'pixel';
      colorPaletteContainer.appendChild(pixel);
    }
  });
}

changeNumbersPixels();

// Requisito 11
/** Source: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/blur_event */
function checkValueBoard() {
  const selectInpud = document.querySelector('#board-size');

  selectInpud.addEventListener('blur', () => {
    if (selectInpud.value < 5 && selectInpud.value !== '') {
      selectInpud.value = 5;
    } else if (selectInpud.value > 50) {
      selectInpud.value = 50;
    }
  });
}

checkValueBoard();
