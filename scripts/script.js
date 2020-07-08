const hamburger =document.querySelector(".hamburger");
const nav = document.getElementById("nav-m");
const body= document.querySelector("body");
hamburger.addEventListener("click", ()=>{
    nav.classList.toggle("nav-mobi-t")
    body.classList.toggle("mobi-scroll-x")

})

// Image Slider
// List of images
const images=["photo","photo-bg2","photo-bg3"]

const left_arrow= document.querySelector(".left-arrow")
const right_arrow= document.querySelector(".right-arrow")
const bg=document.getElementById("bgphoto")
let count=0
right_arrow.addEventListener("click", ()=>{
    count++
    if (count>images.length-1){
        count=0
    }
    class_name=bg.classList[0]
    bg.classList.replace(class_name,images[count])
    console.log(count)
})

left_arrow.addEventListener("click", ()=>{
    count--
    if (count<0){
        count=images.length-1
    }
    class_name=bg.classList[0]
    bg.classList.replace(class_name,images[count])
    console.log(count)
})
