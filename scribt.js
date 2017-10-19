let hund = document.querySelector(".puppy");
let splat = document.querySelector(".blood");
let anders = document.querySelector(".hvalp");
let avfor = document.querySelector(".av");

hund.addEventListener('mouseover', flygt);
hund.addEventListener('click', die);
    console.log("sker der noget hallo?");


function flygt() {
    let x = Math.floor(Math.random() * 600);
    let y = Math.floor(Math.random() * 600);

    hund.style.transform = "translate(" + x + "px, " + y + "px)";
}


function die(){
    console.log("hejsa den viker");
    splat.classList.toggle("blood");
    splat.style.opacity(1);
    anders.style.opacity(0);
    console.log("Av Siger Anders");
    avfor.play();

}
