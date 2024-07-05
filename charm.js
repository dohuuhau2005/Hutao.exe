const listImage = document.querySelector('.listimg')
const imgs = document.getElementsByTagName('img')
let current = 0
setInterval(() => {
    current++
    let width = imgs[0].offsetWidth
    listImage.style.transform = `translateX(${width * -1 * current}px)`
}, 3000)