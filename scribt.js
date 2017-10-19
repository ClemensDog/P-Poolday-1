let hund = document.querySelector(".puppy");
let splat = document.querySelector(".blood");
let anders = document.querySelector(".hvalp");
let avfor = document.querySelector(".av");
let start =document.querySelector(".intro")



start.addEventListener('click', startbox);

console.log("sker der noget hallo?");


function startbox(){
    start.classList.toggle('intro');
    hund.classList.remove("skjult");
    flygt()
    hund.addEventListener('mouseover', flygt);
    hund.addEventListener('click', die);

}

function flygt() {
    let x = Math.floor(Math.random() * 700);
    let y = Math.floor(Math.random() * 700);

    hund.style.transform = "translate(" + x + "px, " + y + "px)";
}


function die(){
    console.log("hejsa den viker");
    splat.classList.toggle("blood");
    splat.style.opacity="1";
    anders.style.opacity="0";
    console.log("Av Siger Anders");
    avfor.play();

}
