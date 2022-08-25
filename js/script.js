console.log("Witam! Ten kod jest już w repozytorium Git.");

let section__button = document.querySelector(".section__button");
let section__trailPicture = document.querySelector(".section__trailPicture");
let changeSpanText = document.querySelector(".js-changeSpanText");

section__button.addEventListener("click", () => {
    section__trailPicture.classList.toggle("section__trailPicture--bigSize");

    if (section__trailPicture.classList.contains("section__trailPicture--bigSize")) {
        changeSpanText.innerText = "Zmniejsz";
    } else {
        changeSpanText.innerText = "Powiększ";
    }
});

let section__button2 = document.querySelector(".section__button2");
let section__trailPicture2 = document.querySelector(".section__trailPicture2");
let changeSpanText2 = document.querySelector(".js-changeSpanText2");

section__button2.addEventListener("click", () => {
    section__trailPicture2.classList.toggle("section__trailPicture--bigSize");

    if (section__trailPicture2.classList.contains("section__trailPicture--bigSize")) {
        changeSpanText2.innerText = "Zmniejsz";
    } else {
        changeSpanText2.innerText = "Powiększ";
    }
});