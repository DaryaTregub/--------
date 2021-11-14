window.addEventListener('DOMContentLoaded', ()=>{
 
  $(document).ready(function() {
    $('.product__card__image__slider__list').slick({
      asNavFor: '.product__card__image__gallary__slider',
      infinite: true,
      vertical: true,
      verticalSwiping: true,             
      slidesToShow: 3,
      slidesToScroll: 1,                       
      prevArrow: '<button class=" arrow prevarrow" type="button"><img src="/img/prevarrow.svg"></button>',
      nextArrow: '<button class="arrow nextarrow" type="button"><img src="/img/nextarrow.svg"></button>',    
    });     

    $('.product__card__image__gallary__slider').slick({
      asNavFor: '.product__card__image__slider__list',
      infinite: true,      
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '20px', 
      arrows:false,              
      prevArrow:  $('.arrow-prevarrow'),
      nextArrow: $('.arrow-nextarrow'),
      responsive:  [
        {   
          breakpoint: 1600,
          settings: { 
            arrows: false,
          } 
        },
        {   
          breakpoint: 1200,
          settings: { 
            arrows: true,
          }
        },
        {
          breakpoint: 992,
          settings: { 
            arrows: true,
          }
        },
        {
          breakpoint: 768,
          settings: {            
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 568,
          settings: { 
            arrows: false,
            dots: true,
          }
        },
        {
          breakpoint: 414,
          settings: {
            arrows: false,
            dots: true,
          }
        },         
             
      ]   
    });  
    
});


 
});
