  // for sec section
  var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("sec");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


// for add button sec
document.getElementById("getImage").addEventListener("click", function(){
    var path;
    if(this.getAttribute("src") === "Assets/Create All-Rounder/Add button.png")
        path = "Assets/Create All-Rounder/Added button.png";
    else
        path = "Assets/Create All-Rounder/Add button.png";
    this.setAttribute("src", path);
});  

document.getElementById("setImage").addEventListener("click", function(){
    var path;
    if(this.getAttribute("src") === "Assets/Create All-Rounder/Compare Button.png")
        path = "Assets/Create All-Rounder/Compare clicked button.png";
    else
        path = "Assets/Create All-Rounder/Compare Button.png";
    this.setAttribute("src", path);
}); 

document.getElementById("saveTeam").addEventListener("click", function(){
    var path;
    if(this.getAttribute("src") === "Assets/Create All-Rounder/Save team enabled.png" )
        path = "Assets/Create All-Rounder/Save team disabled.png" ;
    else
        path = "Assets/Create All-Rounder/Save team enabled.png" ;
    this.setAttribute("src", path);
}); 
