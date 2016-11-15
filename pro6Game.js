var pacmanX = 550;
var pacmanY = 250;
document.addEventListener("keydown", function(e) {
 if (e.keyCode == 37) {//left
  document.getElementById("pacman").setAttribute("x", pacmanX - "50")
 }
  else if(e.keyCode == 39) {//right
     document.getElementById("pacman").setAttribute("x", pacmanX + "5")
  }
  else if(e.keyCode == 38) {//up
     document.getElementById("pacman").setAttribute("y", pacmanY - "20")
  }
  else if(e.keyCode == 40) {//down
     document.getElementById("pacman").setAttribute("y", pacmanY + "3")
  }
});
