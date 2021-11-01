


let MarkTwain = {
  Author: "Mark Twain",
  Quote: '“To succeed in life, you need two things: ignorance and confidence”'
};

let NapoleanHill = {
  Author: "Napolean Hill",
  Quote: '“The starting point of all achievement is desire”'
};

let WinstonChurchill = {
  Author: "Winston Churchill",
  Quote: '“Success consists of going from failure to failure without loss of enthusiasm”'
};

let MichaelJordan = {
  Author: "Michael Jordan",
  Quote: '“I’ve failed over and over and over again in my life and that is why I succeed”'
};

let FranklinRoosevelt = {
  Author: "Franklin Roosevelt",
  Quote: '“Happiness lies in the joy of achievement and the thrill of creative effort”'
};

let BillGates = {
  Author: "Bill Gates",
  Quote: '“Success is a lousy teacher. It seduces smart people into thinking they can’t lose”'
};

let Confucius = {
  Author: "Confucius",
  Quote: '“Success depends upon previous preparation, and without such preparation there is sure to be failure”'
};

let PabloPicasso = {
  Author: "Pablo Picasso",
  Quote: '“Action is the foundational key to all success”'
};

let AlbertEinstein = {
  Author: "Albert Einstein",
  Quote: '“Strive not to be a success, but rather to be of value”'
};

//creat an Array of objects
let QuoteArray = [MarkTwain, NapoleanHill, WinstonChurchill, MichaelJordan, FranklinRoosevelt, BillGates, Confucius, PabloPicasso, AlbertEinstein];

//create a color Array
let colorArray = ["#FAEF19", "#18EC0D", "#0DECE1", "#FC3B98", "#F82FEB", "#F8A12F", "#2FF83C", "#834FDD", "#DD834F", "#4FA9DD" ];

//make a function for generating a random number that will fall within the bounds of the array indices
function getRandomArrayIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function clickAction() {
randomQuoteIndex = getRandomArrayIndex(0, QuoteArray.length - 1);
randomColorIndex = getRandomArrayIndex(0, colorArray.length - 1);
document.body.style.backgroundColor = colorArray[randomColorIndex];
document.getElementById("quote_text").innerHTML = QuoteArray[randomQuoteIndex].Quote;
document.getElementById("author_text").innerHTML = "- " + QuoteArray[randomQuoteIndex].Author;

}


document.getElementById('quote_button').addEventListener('click', clickAction, false);
