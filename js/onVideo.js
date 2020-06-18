const post = document.querySelector('#videoBlock'),
video = document.querySelector('#video'),
playVideo = document.createElement('video'),
videoBlock = document.querySelector('#videoBlock');

video.addEventListener('click', function(){
    videoBlock.classList.add('videoPost');
    playVideo.setAttribute('src', '../video/clip.mp4');
    playVideo.setAttribute('controls','');
    playVideo.setAttribute('autoplay', '');
    playVideo.classList.add('videoPleyer');
    videoBlock.append(playVideo);
    check = false;
})

document.addEventListener('click', (event) => {
    if(!event.target.closest('.videoPleyer')){ 
        if(!event.target.closest('.video')){
            playVideo.classList.remove('videoPleyer');
            videoBlock.classList.remove('videoPost');
            playVideo.remove()
        }
    }
});