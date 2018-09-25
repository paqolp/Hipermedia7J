const cardsArray = 
[
    {
        "name": "tortuga",
        "img": "img/tortuga.jpg"
    },

    {
        "name": "foca",
        "img": "img/foca.jpg"
    },

    {
        "name": "nemo",
        "img": "img/nemo.jpg"
    },

    {
        "name": "dory",
        "img": "img/dory.jpg"
    },

    {
        "name": "calamar",
        "img": "img/calamar.jpg"
    },

    {
        "name": "espada",
        "img": "img/espada.jpg"
    },

    {
        "name": "huachinango",
        "img": "img/huachinango.jpg"
    },

    {
        "name": "pepino",
        "img": "img/pepino.jpg"
    },

    {
        "name": "tiburon",
        "img": "img/tiburon.jpg"
    },

    {
        "name": "sardina",
        "img": "img/sardina.jpg"
    },

    {
        "name": "medusa",
        "img": "img/medusa.jpg"
    },

    {
        "name": "ballena",
        "img": "img/ballena.jpg"
    },
    
];

const match = () => {
    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
      card.classList.add('match');
    });
  }

  const resetGuesses = () => {
    firstGuess = '';
    secondGuess = '';
    count = 0;
  
    var selected = document.querySelectorAll('.selected');
    selected.forEach(card => {
      card.classList.remove('selected');
    });
  };

  
let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

let firstGuess = '';
let secondGuess = '';
let previousTarget = null;
let count = 0;
let delay = 1200;

const game = document.getElementById('game');
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');
game.appendChild(grid);

gameGrid.forEach(item => {

    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.name = item.name;
  

    const front = document.createElement('div');
    front.classList.add('front');
  

    const back = document.createElement('div');
    back.classList.add('back');
    back.style.backgroundImage = `url(${item.img})`;
  

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });

grid.addEventListener('click', function (event) {
  let clicked = event.target;

  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected')
  ) {
    return;
  }

  if (count < 2) {
    count++;
    if (count == 1){
        firstGuess = clicked.parentNode.dataset.name;
        console.log(firstGuess);
        clicked.parentNode.classList.add('selected');
    }else {
        secondGuess = clicked.parentNode.dataset.name;
        console.log(secondGuess);
        clicked.parentNode.classList.add('selected');
      }

    if (firstGuess !== '' && secondGuess !== '') {
        if (firstGuess === secondGuess) {
            setTimeout(match, delay);
            setTimeout(resetGuesses, delay);
        } else {
            setTimeout(resetGuesses, delay);
        } 
    }
    previousTarget = clicked;
  }
});

