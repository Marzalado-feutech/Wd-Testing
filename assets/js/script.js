const image = document.getElementById('image');
let x = 0;
let y = 0;
let speed = 5;
const maxWidth = window.innerWidth - image.offsetWidth;
const maxHeight = window.innerHeight - image.offsetHeight;

document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'a':
            x -= speed;
            if (x < 0) x = 0;
            break;
        case 'd':
            x += speed;
            if (x > maxWidth) x = maxWidth;
            break;
        case 'w':
            y -= speed;
            if (y < 0) y = 0;
            break;
        case 's':
            y += speed;
            if (y > maxHeight) y = maxHeight;
            break;
    }
    image.style.transform = `translate(${x}px, ${y}px)`;
});