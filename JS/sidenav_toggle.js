function myFunction() {
    var x = document.getElementById("mySidenav");
    if (x.style.width === "250px") {
      document.getElementById("mySidenav").style.width = "0px";
      document.getElementById("main").style.marginRight= "0px";
    } else {
      document.getElementById("mySidenav").style.width = "250px";
      document.getElementById("main").style.marginRight= "250px";
    }
  } 