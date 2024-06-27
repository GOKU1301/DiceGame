var randomnumber = Math.floor(Math.random() * 6) + 1; // Ensure a number between 1 and 6
if(randomnumber==1)
  document.querySelector(".dice img.img1").setAttribute("src","./dice1.png");
else if(randomnumber==2)
  document.querySelector(".dice img.img1").setAttribute("src","./dice2.png");
else if(randomnumber==3)
  document.querySelector(".dice img.img1").setAttribute("src","./dice3.png");
else if(randomnumber==4)
  document.querySelector(".dice img.img1").setAttribute("src","./dice4.png");
else if(randomnumber==5)
  document.querySelector(".dice img.img1").setAttribute("src","./dice5.png");
else if(randomnumber==6)
  document.querySelector(".dice img.img1").setAttribute("src","./dice6.png");

var randomnumber2 = Math.floor(Math.random() * 6) + 1; // Ensure a number between 1 and 6
if(randomnumber2==1)
  document.querySelector(".dice img.img2").setAttribute("src","./dice1.png");
else if(randomnumber2==2)
  document.querySelector(".dice img.img2").setAttribute("src","./dice2.png");
else if(randomnumber2==3)
  document.querySelector(".dice img.img2").setAttribute("src","./dice3.png");
else if(randomnumber2==4)
  document.querySelector(".dice img.img2").setAttribute("src","./dice4.png");
else if(randomnumber2==5)
  document.querySelector(".dice img.img2").setAttribute("src","./dice5.png");
else if(randomnumber2==6)
  document.querySelector(".dice img.img2").setAttribute("src","./dice6.png");

if(randomnumber>randomnumber2)
  document.querySelector("h1").innerHTML="Player 1 wins!!!";
else if(randomnumber<randomnumber2)
  document.querySelector("h1").innerHTML="Player 2 wins!!!"
else
  document.querySelector("h1").innerHTML="Tieeee";
