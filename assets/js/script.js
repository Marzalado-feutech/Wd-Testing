let list = document.querySelector('.portfolio .arrows');
let items = document.querySelectorAll('.porfolio .content .items');
let dots =document.querySelectorAll('.portfolio .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function(){
    if(active + 1 > lengthItems){
        active = 0;
    }else{
        active = active + 1;
    }
    reloadSlider();
}
prev.onclick = function(){
    if(active - 1 < 0){
        active =lengthItems;
    }else{
        active = active - 1;
    }
    reloadSlider();
}
let refreshSlider = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    let checkleft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.portfolio .dots li.active');
    lastActiveDot.classList.remove('ative');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(()=> {next.click()}, 5000);
}
dots.forEach((li,key) => {
    li.addEventlistener('click', function(){
        active = key;
        reloadSlider();
    })
})

