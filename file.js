const backgroundImageEl=document.getElementById('bg-image');

// Adding an eventlistener to the window because we are making scroll effect on the window.

window.addEventListener('scroll',()=>{

    updateImage()

})

function updateImage(){

    backgroundImageEl.style.opacity= 1- window.pageYOffset / 800; //for slow decreasing of opacity .

    backgroundImageEl.style.backgroundSize=  160- window.pageYOffset /12 +'%';

    //divided by 12 to increase or decrease the size
}