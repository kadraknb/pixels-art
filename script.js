/* eslint-disable no-restricted-globals */
document.getElementsByClassName('color')[0].style.backgroundColor = 'rgb(0, 0, 0)';
for (let i3 = 1; i3 < 4; i3 += 1) {
  const nr1 = Math.floor(Math.random() * 255);
  const nr2 = Math.floor(Math.random() * 255);
  const nr3 = Math.floor(Math.random() * 255);
  const nr22 = `rgb(${nr1},${nr2},${nr3})`;
  document.getElementsByClassName('color')[i3].style.backgroundColor = nr22;
}

function criarDiv(id, bb) {
  for (let i3 = 0; i3 < bb; i3 += 1) {
    document.querySelector(id)
      .appendChild(document.createElement('div'))
      .className = 'colunaPixel';
  }
  for (let i = 0; i < bb; i += 1) {
    for (let i2 = 0; i2 < bb; i2 += 1) {
      document.querySelectorAll('.colunaPixel')[i2]
        .appendChild(document.createElement('div'))
        .className = 'pixel';
    }
  }
}
const board = '#pixel-board2';
criarDiv(board, 5);

document.getElementById('generate-board').addEventListener('click', () => {
  let xy = document.getElementById('board-size').value;
  const valorAterado = document.getElementById('board-size').value;
  if (valorAterado === '') {
    alert('Board inválido!');
    return;
  }
  if (valorAterado < 5) { xy = 5; }
  if (valorAterado > 50) { xy = 50; }
  document.querySelector(board)
    .remove(document.querySelector(board));
  criarDiv('#pixel-board', xy);
});

const color1 = document.querySelector('#color-palette');
color1.addEventListener('click', () => {
  document.querySelector('.selected').classList.remove('selected');
  event.target.classList.add('selected');
});

const tabeladecor = document.querySelector('#pixel-board');
tabeladecor.addEventListener('click', () => {
  const cor = document.querySelector('.selected').style.backgroundColor;
  const localPinta = event.target;
  localPinta.style.backgroundColor = cor;
});

const limpar = document.querySelector('#clear-board');
limpar.addEventListener('click', () => {
  location.reload();
});
