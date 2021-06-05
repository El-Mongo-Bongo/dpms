video = document.getElementById('intro');
video.addEventListener('ended',function(){
    // alert('video is ended');       
    window.location.href = 'pages/login/login.html';
})
function pressStart(){
    $('.fullsite').hide();
    $('.video-container').show();
    $('.video-container').play();
}