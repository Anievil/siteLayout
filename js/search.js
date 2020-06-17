const cont = document.querySelector('.searchImg');
const searchBlock = document.querySelector('.searchBlock');

cont.addEventListener('click', () => {
    searchBlock.classList.toggle('openSearch');
});

document.addEventListener('click', (event) => {
    if(!event.target.closest('.search')){ 
        searchBlock.classList.remove('openSearch');
    }
});