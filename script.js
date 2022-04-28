let botaoXY = document.getElementById('generate-board');




for (let i3 = 0; i3 < 5; i3 += 1) {
  document.querySelector('#pixel-board2')
    .appendChild(document.createElement('div'))
    .className = 'colunaPixel';
}

for (let i = 0; i < 5; i += 1) {
  for (let i2 = 0; i2 < 5; i2 += 1) {
    document.querySelectorAll('.colunaPixel')[i2]
      .appendChild(document.createElement('div'))
      .className = 'pixel futuracor';
  }
}


botaoXY.addEventListener("click", function () {
  let xy = document.getElementById('board-size').value;
  if (document.getElementById('board-size').value > 50 
  || document.getElementById('board-size').value < 5 
  || document.getElementById('board-size').value == "") {
    alert('Board inválido!');
    return
  }

  document.querySelector('#pixel-board').removeChild(document.querySelector('#pixel-board2'));


  for (let i3 = 0; i3 < xy; i3 += 1) {
    document.querySelector('#pixel-board')
      .appendChild(document.createElement('div'))
      .className = 'colunaPixel';
  }
  for (let i = 0; i < xy; i += 1) {
    for (let i2 = 0; i2 < xy; i2 += 1) {
      document.querySelectorAll('.colunaPixel')[i2]
        .appendChild(document.createElement('div'))
        .className = 'pixel futuracor';
    }
  }
  console.log(xy);

});


/* function quantidadeDePixel() {
  for (let i3 = 0; i3 < xy; i3 += 1) {
    document.querySelector('#pixel-board')
      .appendChild(document.createElement('div'))
      .className = 'colunaPixel';
  }

  for (let i = 0; i < xy; i += 1) {
    for (let i2 = 0; i2 < xy; i2 += 1) {
      document.querySelectorAll('.colunaPixel')[i2]
        .appendChild(document.createElement('div'))
        .className = 'pixel futuracor';
    }
  } console.log(xy);
} */

//window.onload = quantidadeDePixel()

const color1 = document.getElementsByClassName('color');
const tabeladecor = document.querySelector('#pixel-board');



color1[0].addEventListener("click", function () {
  document.querySelector('.selected').classList.remove('selected');
  document.getElementsByClassName('color')[0].classList.add('selected'); console.log(event.target.className);
});
color1[1].addEventListener("click", function () {
  document.querySelector('.selected').classList.remove('selected');
  document.getElementsByClassName('color')[1].classList.add('selected'); console.log(event.target.className);
});
color1[2].addEventListener("click", function () {
  document.querySelector('.selected').classList.remove('selected');
  document.getElementsByClassName('color')[2].classList.add('selected'); console.log(event.target.className);
});
color1[3].addEventListener("click", function () {
  document.querySelector('.selected').classList.remove('selected');
  document.getElementsByClassName('color')[3].classList.add('selected');
  console.log(event.target.className);
});

tabeladecor.addEventListener("click", function () {
  let cor = document.querySelector('.selected').classList[1];
  let localPinta = event.target;
  let removertinta = localPinta.classList[1]
  localPinta.classList.remove(removertinta);
  localPinta.classList.add(cor);
  console.log(event.target);
})
let limpar = document.querySelector('#clear-board');
limpar.addEventListener("click", function () {
  location.reload();
});

//clear-board

/* limpar.addEventListener("click", function() {
  for (let i = 0; i < 5; i += 1) {
    for (let i2 = 0; i2 < 5; i2 += 1) {
      document.querySelectorAll('.colunaPixel')[i2]
        .appendChild.className = 'pixel futuracor';
    }
  }
}); */




    //let localPinta = event.target.classList
/*
//localPinta.className += " " + cor;



//localPinta.classList[1].remove(function(){})
/* localPinta.classList[1].add(function(){
      document.querySelector('.selected').classList[1];
      console.log(event.target);
    });
function ondeclick() {
  color3

  tabeladecor.addEventListener("click", () => {
    let cor = document.querySelector('.selected').classList[1];
    let localPinta = event.target;
    localPinta.classList[1].remove
    localPinta.className = " " + cor;
    console.log(event.target);
})

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




