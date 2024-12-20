let scrollContainer = document.querySelector('.gallery');
let backbtn = document.querySelector('#backbtn');
let nextbtn = document.querySelector('#nextbtn');

scrollContainer.addEventListener('wheel',(e)=>{
e.preventDefault();
scrollContainer.scrollLeft += e.deltaY;
scrollContainer.style.scrollBehavior = 'auto'
})

nextbtn.addEventListener('click',function(){
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft += 900
})

backbtn.addEventListener('click',function(){
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft -= 900
 })
 