
function myFunction() {
    if(screen.width>=0){
      var x = document.getElementById("mySidenav");
      if (x.style.width === "200px") {
        document.getElementById("mySidenav").style.width = "0px";
        document.getElementById("main").style.marginRight= "0px";
      } else {
        document.getElementById("mySidenav").style.width = "200px";
        document.getElementById("main").style.marginRight= "175px";
      }
    }
    else{
      if (x.style.width === "200px") {
        document.getElementById("mySidenav").style.width = "0px";

      } else {
        document.getElementById("mySidenav").style.width = "200px";
      }
    }
}
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
     // Add a click event listener to the menu
    menu.addEventListener("click", function () {
      // Toggle the menuClick class on each line
      const lines = menu.querySelectorAll(".line");
      lines.forEach(line => {
        line.classList.toggle("menuClick");
      });
    });
  });
  