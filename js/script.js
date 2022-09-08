{
    const welcome = () => {
        console.log("Witam! Ten kod jest już w repozytorium Git.")
    };

    const togglePictureSize = (picture, text) => {
        picture.classList.toggle("section__trailPicture--bigSize");
        text.innerText = picture.classList.contains("section__trailPicture--bigSize") ? "Zmniejsz" : "Powiększ";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        const trailPicture = document.querySelector(".js-trailPicture");
        const spanText = document.querySelector(".js-spanText");

        const button2 = document.querySelector(".js-button2");
        const trailPicture2 = document.querySelector(".js-trailPicture2");
        const spanText2 = document.querySelector(".js-spanText2");

        button.addEventListener("click", () => {
            togglePictureSize(trailPicture, spanText);
        });

        button2.addEventListener("click", () => {
            togglePictureSize(trailPicture2, spanText2);
        });

        welcome();
    };

    init();
}