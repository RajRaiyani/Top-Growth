

// nav active on scroll

window.addEventListener("scroll",() => {

    let a = document.getElementsByClassName("navbar")[0];
    a.classList.toggle("navbar-scroll-active",window.scrollY > 5);

});

// home btn link

// var home_btn = document.getElementsByClassName("about")[0];

// home_btn.addEventListener("click", function(){
//     document.location.href = "https://www.google.com/?client=safari";
// });


