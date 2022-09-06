{
    const welcome = () => {
        console.log("Witam! Ten kod jest już w repozytorium Git.")
    }

    const togglePictureSize = () => {
        const section__trailPicture = document.querySelector(".js-section__trailPicture");
        const changeSpanText = document.querySelector(".js-changeSpanText");

        section__trailPicture.classList.toggle("section__trailPicture--bigSize");
        changeSpanText.innerText = section__trailPicture.classList.contains("section__trailPicture--bigSize") ? "Zmniejsz" : "Powiększ";
    };

    const togglePictureSize2 = () => {
        const section__trailPicture2 = document.querySelector(".js-section__trailPicture2");
        const changeSpanText2 = document.querySelector(".js-changeSpanText2");

        section__trailPicture2.classList.toggle("section__trailPicture--bigSize");
        changeSpanText2.innerText = section__trailPicture2.classList.contains("section__trailPicture--bigSize") ? "Zmniejsz" : "Powiększ";
    };

    const init = () => {
        const section__button = document.querySelector(".js-section__button");
        section__button.addEventListener("click", togglePictureSize);

        const section__button2 = document.querySelector(".js-section__button2");
        section__button2.addEventListener("click", togglePictureSize2);

        welcome();
    };

    init();
}