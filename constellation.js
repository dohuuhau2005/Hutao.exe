// const listImage = document.querySelector('.listimg') ////false
// const imgs = document.getElementsByTagName('img')
// let current = 0
// const length = img.length
// setInterval(() => {
//     if (current == length - 1) {
//         current = 0;
//         let width = imgs[0].offsetWidth
//         listImage.style.transform = `translateX(0px)`

//     }
//     else {
//         current++
//         let width = imgs[0].offsetWidth
//         listImage.style.transform = `translateX(${width * -1 * current}px)`


//     }
// }, 5000)
const listImage = document.querySelector('.listimg');
const imgs = Array.from(document.getElementsByTagName('img'));
let current = 0;
const totalImages = 7; // Explicitly set total images to 7 (optional)

function scrollImages() {
    if (current === totalImages - 1) { // Use totalImages if needed
        current = 0;
        listImage.style.transform = `translateX(0px)`;
    } else {
        current++;
        let width = imgs[0].offsetWidth
        listImage.style.transform = `translateX(${width * -1 * current}px)`
    }
}

setInterval(scrollImages, 5000);

