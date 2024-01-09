const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
]


const gridDisplay = document.querySelector('#grid');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];
const resultDisplay = document.querySelector('#result');

cardArray.sort(()=>0.5 - Math.random());
function createBoard(){
    for (let i=0; i<cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        gridDisplay.append(card);
        card.addEventListener('click', flipCard);
    }
}

createBoard();


function flipCard(){
    const cardId = this.getAttribute('data-id');
    cardsChosenIds.push(cardId);
    cardsChosen.push(cardArray[cardId].name);
    this.setAttribute('src', cardArray[cardId].img);
    console.log('clicked', cardId);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch, 500);
    }
}

function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    console.log('check for match!');
    if(optionOneId == optionTwoId){
        alert('You clicked the same image!');
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
    }else if(cardsChosen[0] == cardsChosen[1]){
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cards[optionOneId].removeEventListener('click', flipCard);
            cards[optionTwoId].removeEventListener('click', flipCard);
            cardsWon.push(cardsChosen);
    }else{
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('Sorry, try again!');
    }
    resultDisplay.textContent = cardsWon.length;
    

    if(cardsWon.length == cardArray.length/2){
       resultDisplay.textContent = 'Congratulations you found them all!';
    }
   
    cardsChosen = [];
    cardsChosenIds = [];

}