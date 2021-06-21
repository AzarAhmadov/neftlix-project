const dropdown = document.querySelector("#language");
const drop = document.querySelector(".drop");

dropdown.addEventListener("click" , togle );

function togle(){
  drop.classList.toggle("active");
}

// const opene = document.getElementsByTagName("button");
// const opentext = document.querySelector(".open-text");

// for(let i = 0 ; i < opene.length; i++){
//   opene[i].addEventListener("click" , open);

//   function open(){
//     opentext.classList.toggle("active");
//   }
// }