const prev = document.querySelector('.prev'),
next = document.querySelector('.next'),
button = document.querySelector('.watchGallery'),
preview = document.querySelector('.preview'),
gallary = document.querySelector('.gallary');

const watchGallery = () =>{
    button.addEventListener('click', () =>{
        preview.style.opacity = '0';
        preview.style.visibility = 'hidden';
        gallary.style.visibility = 'visible';
        gallary.style.opacity = '1';
        console.log('ok')
    })
}

const showNextSlide = () =>{
    const hidden = document.querySelector('.hidden')
    prevSlide = document.querySelector('.prevSlide'),
    mainSlide = document.querySelector('.mainSlide'),
    nextSlide = document.querySelector('.nextSlide');
    
    prevSlide.classList.add('hidden');
    prevSlide.classList.remove('prevSlide');
    
    hidden.classList.add('nextSlide');
    hidden.classList.remove('hidden');

    nextSlide.classList.add('mainSlide')
    nextSlide.classList.remove('nextSlide');
   
    mainSlide.classList.add('prevSlide');
    mainSlide.classList.remove('mainSlide');
}

const showPrevSlide = () =>{
    const hidden = document.querySelector('.hidden')
    prevSlide = document.querySelector('.prevSlide'),
    mainSlide = document.querySelector('.mainSlide'),
    nextSlide = document.querySelector('.nextSlide');
    
    prevSlide.classList.add('mainSlide');
    prevSlide.classList.remove('prevSlide');
    
    hidden.classList.add('prevSlide');
    hidden.classList.remove('hidden');

    nextSlide.classList.add('hidden')
    nextSlide.classList.remove('nextSlide');
   
    mainSlide.classList.add('nextSlide');
    mainSlide.classList.remove('mainSlide');
}

next.addEventListener('click',showNextSlide);
prev.addEventListener('click',showPrevSlide);
watchGallery();
