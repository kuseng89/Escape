


//var queryOszi = document.querySelector("bereich1");

var canvasB1 = document.getElementById("bereich1");
var ctxB1 = canvasB1.getContext("2d");

var canvasB2 = document.getElementById("bereich2");
var ctxB2 = canvasB2.getContext("2d");

//var canvasB3 = document.getElementById("bereich3");
//var ctxB3 = canvasB3.getContext("2d");

//var canvasB4 = document.getElementById("bereich4");
//var ctxB4 = canvasB4.getContext("2d");

var canvasOszi = document.getElementById("oszi");
var ctxOszi = canvasOszi.getContext("2d");

//var audio = new Audio('https://github.com/kuseng89/Escape/blob/main/sound_game_v2.mp3');
//audio.play();

var z = 1;
var n1 = 1;
var n2 = 1;

let imOszi = new Image();
imOszi.onload = function () {
  //continue canvas procesing after image has been loaded
  canvasOszi.width = imOszi.width;
  canvasOszi.height = imOszi.height;
  ctxOszi.drawImage(imOszi,0,0);
};
imOszi.src = "https://raw.githubusercontent.com/kuseng89/Escape/main/oszi.png";


/////////////////////// Bereich 1/////////////////////////////////////////////////////////////////////////////////////////

let imBi4 = new Image();
imBi4.onload = function () {
  //continue canvas procesing after image has been loaded
  canvasB1.width = imBi4.width;
  canvasB1.height = imBi4.height;
//  ctxB1.drawImage(imBi4,0,0);
};
imBi4.src = "https://raw.githubusercontent.com/kuseng89/Escape/main/oszi_i_4.png";

let imBi3 = new Image();
imBi3.onload = function () {
  //continue canvas procesing after image has been loaded
  canvasB1.width = imBi3.width;
  canvasB1.height = imBi3.height;
//  ctxB1.drawImage(imBi3,0,0);
};
imBi3.src = "https://raw.githubusercontent.com/kuseng89/Escape/main/oszi_i_3.png";


let imBi2 = new Image();
imBi2.onload = function () {
  //continue canvas procesing after image has been loaded
  canvasB1.width = imBi2.width;
  canvasB1.height = imBi2.height;
//  ctxB1.drawImage(imBi2,0,0);
};
imBi2.src = "https://raw.githubusercontent.com/kuseng89/Escape/main/oszi_i_2.png";

let imBi1 = new Image();
imBi1.onload = function () {
  //continue canvas procesing after image has been loaded
  canvasB1.width = imBi1.width;
  canvasB1.height = imBi1.height;
  ctxB1.drawImage(imBi1,0,0);
};
imBi1.src = "https://raw.githubusercontent.com/kuseng89/Escape/main/oszi_i_1.png";

/////////////////////// Bereich 2/////////////////////////////////////////////////////////////////////////////////////////


let imBii4 = new Image();
imBii4.onload = function () {
  //continue canvas procesing after image has been loaded
  canvasB2.width = imBii4.width;
  canvasB2.height = imBii4.height;
//  ctxB1.drawImage(imBii4,0,0);
};
imBii4.src = "https://raw.githubusercontent.com/kuseng89/Escape/main/oszi_ii_4.png";

let imBii3 = new Image();
imBii3.onload = function () {
  //continue canvas procesing after image has been loaded
  canvasB2.width = imBii3.width;
  canvasB2.height = imBii3.height;
//  ctxB1.drawImage(imBii3,0,0);
};
imBii3.src = "https://raw.githubusercontent.com/kuseng89/Escape/main/oszi_ii_3.png";


let imBii2 = new Image();
imBii2.onload = function () {
  //continue canvas procesing after image has been loaded
  canvasB2.width = imBii2.width;
  canvasB2.height = imBii2.height;
//  ctxB1.drawImage(imBii2,0,0);
};
imBii2.src = "https://raw.githubusercontent.com/kuseng89/Escape/main/oszi_ii_2.png";

let imBii1 = new Image();
imBii1.onload = function () {
  //continue canvas procesing after image has been loaded
  canvasB2.width = imBii1.width;
  canvasB2.height = imBii1.height;
  ctxB2.drawImage(imBii1,0,0);
};
imBii1.src = "https://raw.githubusercontent.com/kuseng89/Escape/main/oszi_ii_1.png";










canvasB1.addEventListener('click', function() {
//alert('Tesdt');
//ctxB1.clearRect(0, 0, canvaB1.width, canvasB1.height);
if(n1<4){
  n1++;
}
else{
  n1=1;
}
//drawN1(n1);
ctxB1.drawImage(eval('imBi'+n1),0,0);
if (n1 == 3 && n2 == 2)setTimeout(function() {
  alert('Richtig!');
}, 300);
}, false);

canvasB2.addEventListener('click', function() {
//alert('Tesdt');
//ctxB1.clearRect(0, 0, canvaB1.width, canvasB1.height);
if(n2<4){
  n2++;
}
else{
  n2=1;
}
//drawN1(n1);
ctxB2.drawImage(eval('imBii'+n2),0,0);

if (n1 == 3 && n2 == 2)setTimeout(function() {
  alert('Richtig!');
}, 300);
}, false);
