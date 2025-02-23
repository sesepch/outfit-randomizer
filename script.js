const images = ["top1.png", "top2.png", "bot1.png", "bot2.png"];

function randomizeImages() {
    const randomIndex1 = Math.floor(Math.random() * images.length / 2);
    const randomIndex2 = Math.floor(Math.random() * images.length / 2) + 2;
    document.getElementById("randomImage1").src = "fit_pieces/top/" + images[randomIndex1];
    document.getElementById("randomImage2").src = "fit_pieces/bottom/" + images[randomIndex2];
}
function bounceButton(button) {
    button.style.transform = "scale(1.2)";
    setTimeout(() => {
        button.style.transform = "scale(1)";
    }, 200);
}
