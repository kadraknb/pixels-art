for (let i3 = 0; i3 < 5; i3 += 1) {
  document.querySelector('#pixel-board')
    .appendChild(document.createElement('div'))
    .className = 'pixel';
}
for (let i = 0; i < 5; i += 1) {
  for (let i2 = 0; i2 < 5; i2 += 1) {
    document.querySelectorAll('.pixel')[i2]
      .appendChild(document.createElement('div'))
      .className = 'color2 white';
  }
}
