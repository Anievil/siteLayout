const logo = document.getElementById('logoText');

logo.addEventListener('click', function(){
    var i = 0;
    idIntervals = setInterval(()=>{
        logo.style.transform = `rotate(${i+=2}deg)`;
        if(i === 360){
            clearInterval(idIntervals);
        }
        console.log('ok');
    }, 10);
})
