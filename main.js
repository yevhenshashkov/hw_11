const imgContainer = document.querySelector("#imgContainer")
const myBtn = document.querySelector("button")

function changeImage () {
    let randomImage= Math.floor((Math.random() * 8) +1);
    imgContainer.src = `./img/${randomImage}.jpg`;
}
changeImage()

myBtn.addEventListener("click", () => {
    changeImage()
})


