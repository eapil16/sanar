'use strict';
document.addEventListener('DOMContentLoaded', () => {
    $('.menu-toggle-cont').click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass('menu-toggle-cont_active')) { 
            $(this).addClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideDown(300); 
            $('body').addClass('hidd'); 
       } else { 
            $(this).removeClass('menu-toggle-cont_active'); 
            $('.fixed-menu').slideUp(300);
            $('body').removeClass('hidd');
        } 
    }); 
 
    $('.catalog-list__link_first').click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
        $(this).parent().find('.catalog-list_second').slideToggle();
    });
  
    $('.catalog-list__link_second').click(function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
        $(this).parent().find('.catalog-list_third').slideToggle();
    });

    $('.catalog-content__menu_button').click(function (e) {
        e.preventDefault();
        $('.catalog-content__menu').slideToggle();
    });

    $('.lk-sidebar__button').click(function (e) {
        e.preventDefault();
        $('.lk-sidebar ').slideToggle();
    });

    const mainSlider = new Swiper(".main-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,        
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: ".main-next",
            prevEl: ".main-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    const newsSlider = new Swiper(".news-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,        
        spaceBetween: 30,
        speed: 800,
        navigation: {
            nextEl: ".news-next",
            prevEl: ".news-prev",
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            }
        },
    });

    const modalSlider = new Swiper(".modal-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,        
        spaceBetween: 30,
        speed: 800,
        navigation: {
            nextEl: ".modal-next",
            prevEl: ".modal-prev",
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 2,
            }
        },
    });

    const partnersSlider = new Swiper(".partners-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,        
        spaceBetween: 30,
        speed: 800,
        navigation: {
            nextEl: ".partners-next",
            prevEl: ".partners-prev",
        },
        breakpoints: {
            1200: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 3,
            },
           
        },
    });

    $('.item-btn').click(function(e) {
		e.preventDefault();
		var target = $(this);
		target.toggleClass('active');
    });

    setTimeout(function() {
        $('select').styler();
    }, 100)
    
});