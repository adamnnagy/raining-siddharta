// Using the code of Daniel Shiffman
// Code for: https://youtu.be/KkyIDI6rQJI
//https://github.com/CodingTrain/Rainbow-Code/tree/master/challenges/CC_04_PurpleRain_p5.js

var drops = [];
var lines;
var words;
var txt;
var counter = 40;


function preload() {
  lines = loadStrings('siddharta.txt');
  console.log(lines);
}



function setup() {

  textFont('Georgia');
  textAlign(CENTER, CENTER);

  txt = join(lines, '\n');
  createCanvas(windowWidth, windowHeight);
  var delimiters = '.:;?! !@#$%^&*()]+,';
  words = splitTokens(txt, delimiters);

  for (var i = 0; i < counter; i++) {
    drops[i] = new Drop(words[i]);
  }


}

function draw() {
  background('#d6c59c');
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}
