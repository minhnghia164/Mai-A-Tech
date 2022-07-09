const menuBtn = document.querySelector('.menu-icon-close');
const menuBtnfull = document.querySelector('.icon-menu-pc');
var fmenu = document.querySelector('.fullmenu');
let clicked = false;
var header = document.getElementById('header');
var menuMobie = document.getElementById('menu-icon-close')
var learnMobie = document.querySelector('.learn-mobie')
var headerHeight = header.clientHeight;
var menuItems = document.querySelectorAll('.header__menu-list li a[href*="#"]')

menuBtnfull.addEventListener('click', menufull)

function menufull() {
    clicked = !clicked;
    clicked ? fmenu.classList.add('active') : fmenu.classList.remove('active')
    clicked ? menuBtnfull.classList.add('active') : menuBtnfull.classList.remove('active')
}

menuBtn.addEventListener('click', menuClickHandler)

function menuClickHandler() {
    // clicked = !clicked;
    // clicked ? menuBtn.classList.add('active') : menuBtn.classList.remove('active')
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        menuBtn.classList.add('active')
        header.style.height = 'auto';

    } else {
        header.style.height = null;
        menuBtn.classList.remove('active')

    }
}
//đóng menu
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('nav-menu');
        if (isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;

            menuBtn.classList.remove('active')


        }
    }
}

$(document).ready(function() {
    $('.small-news').slick({
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 5000,
            draggable: false,
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
            ],
            prevArrow: `<button type='button' class='slick-arrow slick-prev pull-left'><i class="fa-solid fa-arrow-left"></i></button>`,
            nextArrow: `<button type='button' class='slick-arrow slick-next pull-right'><i class="fa-solid fa-arrow-right"></i></button>`,


        }

    );
});