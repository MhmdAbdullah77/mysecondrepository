const openButton = document.querySelector('.btn');
const closeButton = document.querySelector('.btz');
let popup = document.querySelector('#popup');


openButton.addEventListener('click',function(){
popup.classList.add('openpopup')
})

closeButton.addEventListener('click',function(){
    popup.classList.remove('openpopup')
    })