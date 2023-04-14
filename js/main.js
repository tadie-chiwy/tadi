let menu = document.querySelector('.menu');
let hd = document.querySelector('header');

menu.addEventListener('click',function(){
    hd.classList.toggle('open');
})