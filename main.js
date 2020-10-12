$(document).ready(function(){

    
    $('.dot').click( function(){

        var slide = ($(this).index());

        transition(slide);


    });
    
    function transition(newSlide){


        $('li.activeDot').removeClass('activeDot');
        $('.slide.active').removeClass('active').css('height', '0');

        $('li.dot').eq(newSlide).addClass('activeDot');

        $('.slide').eq(newSlide).css('height', '100vh').addClass('active');
    }


    var textWrapper = document.querySelector('.go');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({loop: true})
        .add({
            targets: '.go .letter',
            scale: [4,1],
            opacity: [0,1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 950,
            delay: (el, i) => 70*i
        }).add({
            targets: '.go',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000
        });





});



