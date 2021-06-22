const dropdown = document.querySelector("#language");
const drop = document.querySelector(".drop");

dropdown.addEventListener("click", togle);

function togle() {
  drop.classList.toggle("active");
}

const opene = document.querySelectorAll('.open-btn');
const opentext = document.querySelectorAll(".open-text");

for(let i = 0 ; i<opene.length; i++){
  opene[i].addEventListener('click' , (e) => {
    opentext[i].classList.toggle('active');
  })
}
