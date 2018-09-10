var macPoint = {
  swipe: function(){

    var mainSlide = new Swiper ('.slide-section .swiper-container', {
      // Optional parameters
      effect: 'fade',
      slidesPerView: 1,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    mainSlide.on('slideChange', function () {
      macPoint.animateRender();
    });


    var middleSlide = new Swiper ('.slide-section-middle .swiper-container', {
      // Optional parameters
      effect: 'fade',
      slidesPerView: 1,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
      },
    });


  },
  animateRender: function(){
    $(".animated").each(function(){

      $(".slide-section .animated").attr("class","animated");

      var $this = $(this),
          animate = $this.attr("data-animate-type"),
          time = Number($this.attr("data-time"));
          setTimeout(function(){
            $this.addClass(animate);
          }, time);

    });
  },
  oneLine: function(){
    $(document).on('click', '.slide-section a .next', function(e){
      e.preventDefault();
      $(".slide-section .swiper-button-next").trigger("click");
    });
    $(document).on('click', '.slide-section a .prev', function(e){
      e.preventDefault();
      $(".slide-section .swiper-button-prev").trigger("click");
    });
  },
  subInit: function(){
    this.swipe();
    this.animateRender();
    this.oneLine();
  },
  init: function(){
    this.subInit();
  },
};

$(document).ready(function(){
  macPoint.init();
});
