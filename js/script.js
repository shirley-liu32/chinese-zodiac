var ratdiv= document.getElementsByClassName("Rat");
var button= document.getElementById("Click");
var ratpic=document.getElementsByClassName("ratpic");
var ratp=document.getElementsByClassName("ratp");
var rat1=false;
var oxdiv= document.getElementsByClassName("Ox");
var oxpic= document.getElementsByClassName("oxpic");
var oxp= document.getElementsByClassName("oxp");
var tigerdiv= document.getElementsByClassName("Tiger");
var tigerpic= document.getElementsByClassName("tigerpic");
var tigerp= document.getElementsByClassName("tigerp");
var rabbitdiv= document.getElementsByClassName("Rabbit");
var rabbitpic= document.getElementsByClassName("rabbitpic");
var rabbitp= document.getElementsByClassName("rabbitp");
var dragondiv= document.getElementsByClassName("Dragon");
var dragonpic= document.getElementsByClassName("dragonpic");
var dragonp= document.getElementsByClassName("dragonp");
var snakediv= document.getElementsByClassName("Snake");
var snakepic= document.getElementsByClassName("snakepic");
var snakep= document.getElementsByClassName("snakep");
var horsediv= document.getElementsByClassName("Horse");
var horsepic= document.getElementsByClassName("horsepic");
var horsep= document.getElementsByClassName("horsep");
var goatdiv= document.getElementsByClassName("Goat");
var goatpic= document.getElementsByClassName("goatpic");
var goatp= document.getElementsByClassName("goatp");
var monkeydiv= document.getElementsByClassName("Monkey");
var monkeypic= document.getElementsByClassName("monkeypic");
var monkeyp= document.getElementsByClassName("monkeyp");
var roosterdiv= document.getElementsByClassName("Rooster");
var roosterpic= document.getElementsByClassName("roosterpic");
var roosterp= document.getElementsByClassName("roosterp");
var dogdiv= document.getElementsByClassName("Dog");
var dogpic= document.getElementsByClassName("dogpic");
var dogp= document.getElementsByClassName("dogp");
var pigdiv= document.getElementsByClassName("Pig");
var pigpic= document.getElementsByClassName("pigpic");
var pigp= document.getElementsByClassName("pigp");


function start(){
  rat1= true;
  if (rat1==true){
    button.style.display="none";
    ratpic[0].addEventListener("mouseover", showRat);
    ratpic[0].addEventListener("mouseout",offRat);
    ratdiv[0].addEventListener("click",movetoRat);
    oxpic[0].addEventListener("mouseover", showOx);
    oxpic[0].addEventListener("mouseout",offOx);
    oxdiv[0].addEventListener("click",movetoOx);
    tigerpic[0].addEventListener("mouseover",showTiger);
    tigerpic[0].addEventListener("mouseout",offTiger);
    tigerdiv[0].addEventListener("click",movetoTiger);
    rabbitpic[0].addEventListener("mouseover",showRabbit);
    rabbitpic[0].addEventListener("mouseout",offRabbit);
    rabbitdiv[0].addEventListener("click",movetoRabbit);
    dragonpic[0].addEventListener("mouseover",showDragon);
    dragonpic[0].addEventListener("mouseout",offDragon);
    dragondiv[0].addEventListener("click",movetoDragon);
    snakepic[0].addEventListener("mouseover", showSnake);
    snakepic[0].addEventListener("mouseout",offSnake);
    snakediv[0].addEventListener("click",movetoSnake);
    horsepic[0].addEventListener("mouseover", showHorse);
    horsepic[0].addEventListener("mouseout",offHorse);
    horsediv[0].addEventListener("click",movetoHorse);
    goatpic[0].addEventListener("mouseover", showGoat);
    goatpic[0].addEventListener("mouseout",offGoat);
    goatdiv[0].addEventListener("click",movetoGoat);
    monkeypic[0].addEventListener("mouseover", showMonkey);
    monkeypic[0].addEventListener("mouseout",offMonkey);
    monkeydiv[0].addEventListener("click",movetoMonkey);
    roosterpic[0].addEventListener("mouseover", showRooster);
    roosterpic[0].addEventListener("mouseout",offRooster);
    roosterdiv[0].addEventListener("click",movetoRooster);
    dogpic[0].addEventListener("mouseover", showDog);
    dogpic[0].addEventListener("mouseout",offDog);
    dogdiv[0].addEventListener("click",movetoDog);
    pigpic[0].addEventListener("mouseover", showPig);
    pigpic[0].addEventListener("mouseout",offPig);
    pigdiv[0].addEventListener("click",movetoPig);



}
}

function showPig(){
  pigpic[0].style.opacity="0.3";
  pigp[0].style.visibility="visible";
  pigp[0].style.opacity="1";
}

function offPig(){
  pigpic[0].style.opacity="1";
  pigp[0].style.visibility="hidden";
}

function movetoPig(){
  location.href= "files/pig.html";
}




function showDog(){
  dogpic[0].style.opacity="0.3";
  dogp[0].style.visibility="visible";
  dogp[0].style.opacity="1";
}

function offDog(){
  dogpic[0].style.opacity="1";
  dogp[0].style.visibility="hidden";
}

function movetoDog(){
  location.href= "files/dog.html";
}



function showRooster(){
  roosterpic[0].style.opacity="0.3";
  roosterp[0].style.visibility="visible";
  roosterp[0].style.opacity="1";
}

function offRooster(){
  roosterpic[0].style.opacity="1";
  roosterp[0].style.visibility="hidden";
}

function movetoRooster(){
  location.href= "files/rooster.html";
}



function showMonkey(){
  monkeypic[0].style.opacity="0.3";
  monkeyp[0].style.visibility="visible";
  monkeyp[0].style.opacity="1";
}

function offMonkey(){
  monkeypic[0].style.opacity="1";
  monkeyp[0].style.visibility="hidden";
}

function movetoMonkey(){
  location.href= "files/monkey.html";
}

function showGoat(){
  goatpic[0].style.opacity="0.3";
  goatp[0].style.visibility="visible";
  goatp[0].style.opacity="1";
}

function offGoat(){
  goatpic[0].style.opacity="1";
  goatp[0].style.visibility="hidden";
}

function movetoGoat(){
  location.href= "files/goat.html";
}



function showHorse(){
  horsepic[0].style.opacity="0.3";
  horsep[0].style.visibility="visible";
  horsep[0].style.opacity="1";
}

function offHorse(){
  horsepic[0].style.opacity="1";
  horsep[0].style.visibility="hidden";
}

function movetoHorse(){
  location.href= "files/horse.html";
}

function showSnake(){
  snakepic[0].style.opacity="0.3";
  snakep[0].style.visibility="visible";
  snakep[0].style.opacity="1";
}

function offSnake(){
  snakepic[0].style.opacity="1";
  snakep[0].style.visibility="hidden";
}

function movetoSnake(){
  location.href= "files/snake.html";
}
function showDragon(){
  dragonpic[0].style.opacity="0.3";
  dragonp[0].style.visibility="visible";
  dragonp[0].style.opacity="1";
}

function offDragon(){
  dragonpic[0].style.opacity="1";
  dragonp[0].style.visibility="hidden";
}

function movetoDragon(){
  location.href= "files/dragon.html";
}
function showRabbit(){
  rabbitpic[0].style.opacity="0.3";
  rabbitp[0].style.visibility="visible";
  rabbitp[0].style.opacity="1";
}

function offRabbit(){
  rabbitpic[0].style.opacity="1";
  rabbitp[0].style.visibility="hidden";
}

function movetoRabbit(){
  location.href= "files/rabbit.html";
}

function showTiger(){
  tigerpic[0].style.opacity="0.3";
  tigerp[0].style.visibility="visible";
  tigerp[0].style.opacity="1";
}

function offTiger(){
  tigerpic[0].style.opacity="1";
  tigerp[0].style.visibility="hidden";
}

function movetoTiger(){
  location.href= "files/tiger.html";
}


function showOx(){
  oxpic[0].style.opacity="0.3";
  oxp[0].style.visibility="visible";
  oxp[0].style.opacity="1";
}

function offOx(){
  oxpic[0].style.opacity="1";
  oxp[0].style.visibility="hidden";
}

function movetoOx(){
  location.href= "files/ox.html";
}

function showRat(){
  ratpic[0].style.opacity="0.3";
  ratp[0].style.visibility="visible";
  ratp[0].style.opacity="1";
}

function offRat(){
  ratpic[0].style.opacity="1";
  ratp[0].style.visibility="hidden";
}

function movetoRat(){
  location.href= "files/rat.html";
}
