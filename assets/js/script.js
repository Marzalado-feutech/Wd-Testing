const imageContainer = document.getElementById('image-container');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500){
        imageContainer.classList.add('animate');
    } else {
        imageContainer.classList.remove('animate');
    }
});