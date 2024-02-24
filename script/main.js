// mouse
let pen = document.querySelector('#mouse')

window.addEventListener('mousemove',(e)=>{
    // console.log(e) 작동확인
    pen.style.left = `${e.clientX}px`
    pen.style.top = `${e.clientY}px`
})