const dropdown = document.querySelector("#language");
const drop = document.querySelector(".drop");

dropdown.addEventListener("click" , togle );

function togle(){
  drop.classList.toggle("active");
}