const buttonForOpenMenu = document.querySelector('.openMenu'),
menu = document.querySelector('.menu');

buttonForOpenMenu.addEventListener('click', () =>{
    buttonForOpenMenu.classList.toggle('closeMenu');
    menu.classList.toggle('openMenuBlock');
})