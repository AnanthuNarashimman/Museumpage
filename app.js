const hamlist = document.querySelector('.navlinks');
const hambtn = document.querySelector('.hambur');

hambtn.addEventListener('click', function() {
    hambtn.classList.toggle('hamactive');
    hamlist.classList.toggle('active');
})
//

window.onscroll = function() { toggleButtonVisibility(); };

function toggleButtonVisibility() {
    const goToTopButton = document.querySelector(".gotopbtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        goToTopButton.style.display = "block"; 
    } else {
        goToTopButton.style.display = "none"; 
    }
}

window.onclick = function(event) {
    if (!hambtn.contains(event.target) && !hamlist.contains(event.target)) {
        hamlist.classList.remove('active'); 
        hambtn.classList.remove('hamactive');
    }
}