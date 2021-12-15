const img__container= document.querySelector('.requirement--img__container');
const slide= document.querySelector('.slider__1');
const box= document.querySelector('.slider__box');
let width = box[0].offsetwidth +30;
slide.style.minWidth ='${box.length * width}px';
let start;
let change;
img__container.addEventListener('dragstart', (e)=>{
    start = e.clientX;

})

img__container.addEventListener('dragover', (e)=>{
    e.preventDefault();
    let touch = e.clientX;
    change = start - touch;
})

img__container.addEventListener('dragend',slideshow);
function slideshow(){
    if(change > 0){
        img__container.scrollLeft += width;

    }else{
        img__container.scrollLeft -= width;
    }
}