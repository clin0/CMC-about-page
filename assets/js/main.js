(function ($) {
    "use strict";


    // offcanvas-js
    $('.offcanvas-open').click(function() {
        $('.offcanvas-menu').addClass('active');
        $('.offcanvas-overlay').addClass('active');
    });
    $('.offcanvas-close').click(function() {
        $('.offcanvas-menu').removeClass('active');
        $('.offcanvas-overlay').removeClass('active');
    });
    $(document).mouseup(function(e){
        var container = $(".offmenu");
    
        // If the target of the click isn't the container
        if(!container.is(e.target) && container.has(e.target).length === 0){
        $('.offcanvas-menu').removeClass('active');
        $('.offcanvas-overlay').removeClass('active');
        }
    });

    
    let regiAccordion = document.querySelectorAll('.regi-accrdion .accordion-item')

    regiAccordion.forEach((acco, index) => {
        let instractor = document.querySelector('.regi-instractor')

        let trigger = acco.querySelector('.accordion-button')
        let placeholder = acco.querySelector('.regi-placeholder-title')
        let input = acco.querySelector('.regi-title-input')

        acco.addEventListener('click', ()=>{
            if (index > 0) {                
                placeholder.classList.remove('active')
                input.classList.add('active')
                instractor.innerText = 'Enter your personal details of registant ' + (index + 1) + ' in English only'
            }
        })



    });



    
})(jQuery);