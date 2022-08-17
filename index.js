var randomNumber1=  Math.round(Math.random()*5)+1;
var randice1="dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src","images/"+randice1);
var randomNumber2=  Math.round(Math.random()*5)+1;
var randice2="dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src","images/"+randice2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Won the Match !";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player 2 Won the Match !";
}
else{
  document.querySelector("h1").innerHTML="Match is Draw !";
}
