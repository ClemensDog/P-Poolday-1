let hund = document.querySelector(".puppy");

hund.addEventListener('mouseover', flygt);
    console.log("sker der noget hallo?");


function flygt() {
    let x = Math.floor(Math.random() * 600);
    let y = Math.floor(Math.random() * 600);

    hund.style.transform = "translate(" + x + "px, " + y + "px)";
}
