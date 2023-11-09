var footer = document.getElementById('footer');
var menu = document.getElementById('menu');

if (document.body.scrollHeight < window.innerHeight) {
    footer.style.bottom = "0";
    footer.style.position = "fixed";
}else{
    footer.style.position = "relative";
}

window.onscroll = function() {
    if (window.pageYOffset == 0) {
        menu.style.opacity = "100%";
    }else{
        menu.style.opacity = "70%";
        menu.style.backdropFilter = "blur(10px)";
    }
}

var menuItems = document.querySelectorAll('#menu a');
var menuHeight = document.querySelector('#menu').offsetHeight;
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener('click', function(e) {
        e.preventDefault();
        var section = document.querySelector(this.getAttribute('href'));
        if (this.getAttribute('href') == "#top") {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            return;
        }
        var sectionTop = section.offsetTop - menuHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    });
}



