


//var queryOszi = document.querySelector("bereich1");

//var canvasB1 = document.getElementById("bereich1");
//var ctxB1 = canvasB1.getContext("2d");
let url = ['./img/bambus_100.png',
           './img/edelgase_100.png',
           './img/hirsch_100.png',
           './img/leiter_100.png',
           './img/schloss_100.png',
           './img/kokosnuss_100.png'
          ];
let box = [ document.getElementById('box1'),
            document.getElementById('box2'),
            document.getElementById('box3'),
            document.getElementById('box4'),
            document.getElementById('box5'),
            document.getElementById('box6')
          ];

let boxErf = document.getElementById('boxErf');

var combo = [4,4,4,4,4,4];
let rcombo = [1,1,3,2,4,5];





function rotateBox(i){
  var boxI = box[i-1];
  var urli = boxI.style.backgroundImage;
  var urlInd = url.indexOf(urli.substring(5, urli.length-2));

  if (urlInd > url.length-2){
    urlInd=0;
  }
  else{
    urlInd++;
  }
  boxI.style.backgroundImage = "url('"+url[urlInd]+"')";
  setCombo(i,urlInd);
}

function setCombo(n,v){
  combo[n-1]=v;
  //alert(combo);
  if(checkCombo()){
    setTimeout(function() {
  // Code, der erst nach 2 Sekunden ausgeführt wird
  alert('Richtig!');
    }, 500);
  }
}

function checkCombo(){
  if (combo.length !== rcombo.length) return false;
   for (var i = 0, len = combo.length; i < len; i++){
       if (combo[i] !== rcombo[i]){
           return false;
       }
   }
   return true;
}

function rotateErf(){
  boxErf.style.backgroundImage = "url(./img/erfinder_1.png)";
}
