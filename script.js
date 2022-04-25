for (let i3 = 0; i3 < 5; i3 += 1) {
  document.querySelector('#pixel-board')
    .appendChild(document.createElement('div'))
    .className = 'colunaPixel';
}
function aleta() {
  document.querySelector('.selected').classList.remove('selected');
  document.getElementsByClassName('color')[1].classList.add('selected');
}
for (let i = 0; i < 5; i += 1) {
  for (let i2 = 0; i2 < 5; i2 += 1) {
    document.querySelectorAll('.colunaPixel')[i2]
      .appendChild(document.createElement('div'))
      .className = 'pixel';
  }
}

const color1 = document.getElementsByClassName('color');




color1[0].addEventListener("click", function() {
  document.querySelector('.selected').classList.remove('selected');
    document.getElementsByClassName('color')[0].classList.add('selected');
  });
  color1[1].addEventListener("click", function() {
  document.querySelector('.selected').classList.remove('selected');
    document.getElementsByClassName('color')[1].classList.add('selected');
  });
  color1[2].addEventListener("click", function() {
  document.querySelector('.selected').classList.remove('selected');
    document.getElementsByClassName('color')[2].classList.add('selected');
  });
  color1[3].addEventListener("click", function() {
  document.querySelector('.selected').classList.remove('selected');
    document.getElementsByClassName('color')[3].classList.add('selected');
  });



/* function ondeclick() {
  color3


}
 */




/* document.getElementsByClassName('color')[1]
  .addEventListener("click", function aleta() {
    document.querySelector('.selected').classList.remove('selected');
    document.getElementsByClassName('color')[1].classList.add('selected');
  }); */


/*  function removsel() {
   let paletacor = document.getElementById('color-palette');
   event.removsel
   document.querySelector('.selected').classList.remove('selected')
   document.getElementsByClassName('color')[1].classList.add('seila')
//document.getElementsByClassName('color').addEventListener("click", function() { alert("ok") });


 } */
//window.onload ;




