function randomNumber(min,max)
{
 return Math.floor(Math.random()*(max-min+1)+min);
}

document.addEventListener("keydown", function(e) {
  var pacmanX = Number(document.getElementById("pacman").getAttribute("x"))
  var pacmanY = Number(document.getElementById("pacman").getAttribute("y"))
 if (e.keyCode == 37) {//left
  document.getElementById("pacman").setAttribute("x", pacmanX - "2")
 }
  else if(e.keyCode == 39) {//right
     document.getElementById("pacman").setAttribute("x", pacmanX + "5")
  }
  else if(e.keyCode == 38) {//up
     document.getElementById("pacman").setAttribute("y", pacmanY - "3")
  }
  else if(e.keyCode == 40) {//down
     document.getElementById("pacman").setAttribute("y", pacmanY + "3")
  }
  var pacman = document.getElementById("pacman")
    var pacmanFood = document.getElementById("pacmanFood")
    var pacmanFood2 = document.getElementById("pacmanFood2")

    var foodX = Number(document.getElementById("pacmanFood").getAttribute("x"))
 var foodY = Number(document.getElementById("pacmanFood").getAttribute("y"))
 var food2X = Number(document.getElementById("pacmanFood2").getAttribute("x"))
var food2Y = Number(document.getElementById("pacmanFood2").getAttribute("y"))


     if (pacmanX > foodX) {
       pacmanFood.setAttribute("opacity", "1")
     }
     else {
       pacmanFood.setAttribute("opacity", "0")
      //  return randomNumber();
     }

     if (pacmanY > foodY) {
       pacmanFood.setAttribute("opacity", "1")
     }
     else {
     pacmanFood.setAttribute("opacity", "0")
    //  return randomNumber();
     }

     if (pacmanX > food2X) {
       pacmanFood2.setAttribute("opacity", "1")
     }
     else {
       pacmanFood2.setAttribute("opacity", "0")
     }

     if (pacmanY > food2Y) {
       pacmanFood2.setAttribute("opacity", "1")
     }
     else {
       pacmanFood2.setAttribute("opacity", "0")
     }

  });
