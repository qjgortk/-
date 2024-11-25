const banner = document.getElementsByClassName("banner")[0];
 
const closebtn = document.getElementsByClassName("closebtn")[0];
 
closebtn.onclick = function() {
    banner.classList.add("fadeout");
    setTimeout(function(){
        banner.style.display = "none";
    }, 500);
}

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    adElement.style.top = `${100 + scrollY}px`;
});
