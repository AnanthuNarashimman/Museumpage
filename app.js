const hamlist = document.querySelector('.navlinks');
const hambtn = document.querySelector('.hambur');

hambtn.addEventListener('click', function() {
    hambtn.classList.toggle('hamactive');
    hamlist.classList.toggle('active');
})

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

//Script for multilingual functionality

const langchange = document.querySelector('.langselect');

async function changeLanguage(lang) {
    const response = await fetch(`translations.json`);
    const translation = await response.json();
    
    //initialising textareas to translate
    let header = document.querySelector('.musname');
    let location = document.querySelector('.location');
    let headings = document.querySelectorAll('.heading');
    let aside_headings = document.querySelectorAll('.asd_head');
    let content = document.querySelectorAll('.content_section');
    let img_description = document.querySelectorAll('.img_description');
    let link_section = document.querySelectorAll('.link_section');

    header.innerText=translation[lang].header;

    location.innerText=translation[lang].location;

    headings.forEach((element,index)=>{
        element.textContent=translation[lang].heading[index];
    })

    aside_headings.forEach((element,index)=>{
        element.textContent=translation[lang].heading[index];
    })

    content.forEach((element,index)=>{
        element.textContent=translation[lang].contents[index];
    })

    img_description.forEach((element,index) => {
        element.textContent=translation[lang].image_descriptions[index];
    })

    link_section.forEach((element,index) => {
        element.innerHTML=translation[lang].link_sections[index];
    })
}

langchange.addEventListener('change', function() {
    const currlanguage = this.value;
    changeLanguage(currlanguage);
})