// const hamburgerIcon = document.getElementById("hamburgerIcon");

// hamburgerIcon.addEventListener("click", (x) => {
//   x.style.display("block");
// });


function handleHamburger(){
  console.log('good luck...');
  var navLinks = document.getElementsByClassName("nav-links");
  if(navLinks.style.display=="none"){
    navLinks.style.display = 'block';
  }
  else{
    navLinks.style.display = 'none';
  }
}