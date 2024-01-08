function openNav() {
    document.getElementById("Menu").style.left = "0%";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
function closeNav() {
    document.getElementById("Menu").style.left = "-100%";
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
}


setTimeout(() => {
    const preloader = document.getElementById("preloader")
    preloader.classList.add("d-none")
    document.body.classList.remove("overflow-hidden")
}, 3000)

document.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

// Scroll to the top when the button is clicked
document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


{
    AOS.init();
}
