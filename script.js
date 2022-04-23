for (let i3 = 0; i3 < 5; i3 += 1) {
  document.querySelector('#pixel-board')
    .appendChild(document.createElement('div'))
    .className = 'colunaPixel';
}
for (let i = 0; i < 5; i += 1) {
  for (let i2 = 0; i2 < 5; i2 += 1) {
    document.querySelectorAll('.colunaPixel')[i2]
      .appendChild(document.createElement('div'))
      .className = ' color2 white pixel';
  }
}
