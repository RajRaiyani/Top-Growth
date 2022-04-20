

// nav active on scroll

window.addEventListener("scroll",() => {

    let a = document.getElementsByClassName("navbar")[0];
    a.classList.toggle("navbar-scroll-active",window.scrollY > 5);

});

