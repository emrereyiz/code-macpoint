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
      macPoint.animate.slideAnimate();
    });


    var middleSlide = new Swiper ('.slide-section-middle .swiper-container', {
      // Optional parameters
      slidesPerView: 3,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next-2',
        prevEl: '.swiper-button-prev-2',
      },
    });


    var bottomSlide = new Swiper ('.slide-section-bottom .swiper-container', {
      // Optional parameters
      slidesPerView: 3,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next-3',
        prevEl: '.swiper-button-prev-3',
      },
    });


  },
  animate: {
    slideAnimate: function(){

      $(".slide-section .slide-item .animated").each(function(){

        $(".slide-section .slide-item .animated").attr("class","animated");

        var $this = $(this),
            animate = $this.attr("data-animate-type"),
            time = Number($this.attr("data-time"));
            setTimeout(function(){
              $this.addClass(animate);
            }, time);

      });
    },
    pageAnimate: function(){
      $(".animate").each(function(index, item){
          var $this = $(this),
              time = $this.attr("data-time"),
              type = $this.attr("data-type");
              setTimeout(function(){
                $this.addClass("animated "+type);
              }, time);
      });
    },
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


    $(document).on('click', '.slide-section-middle .slide-arrow .next', function(e){
      e.preventDefault();
      $(".slide-section-middle .swiper-button-next-2").trigger("click");
    });
    
    $(document).on('click', '.slide-section-middle .slide-arrow .prev', function(e){
      e.preventDefault();
      $(".slide-section-middle .swiper-button-prev-2").trigger("click");
    });


    $(document).on('click', '.slide-section-bottom .slide-arrow .next', function(e){
      e.preventDefault();
      $(".slide-section-bottom .swiper-button-next-3").trigger("click");
    });
    
    $(document).on('click', '.slide-section-bottom .slide-arrow .prev', function(e){
      e.preventDefault();
      $(".slide-section-bottom .swiper-button-prev-3").trigger("click");
    });
    
    $(document).on('click', '.select-title .text', function(e){
      e.preventDefault();
      var $this = $(this);
      $this.parents("h1").addClass("active");
    });
    
    $(document).on('click', '.select-title li a', function(e){
      e.preventDefault();
      var $this = $(this);
      $(".select-title .text").html($this.text());
      $(".select-title.active").removeClass("active");
    });
    
    $(document).on('click', '.select-title.active', function(e){
      e.preventDefault();
      var $this = $(this);
      $this.removeClass("active");
    });
    
    $(document).on('click', '.detail .detail-top .image-wrap li img', function(e){
      e.preventDefault();
      var $this = $(this),
          src = $this.attr("src"),
          src2 = $this.parents(".image-wrap").find(".big").attr("src");

          $this.parents(".image-wrap").find(".big").attr("src",src);
          $this.attr("src",src2);
    });
    
    $(document).on('mouseover', '.has-sub', function(e){
      e.preventDefault();
      var $this = $(this);
      $this.find("ul").stop().fadeIn();
    });
    
    $(document).on('mouseleave', '.has-sub', function(e){
      e.preventDefault();
      var $this = $(this);
          $this.find("ul").stop().fadeOut();
    });

  },
  wowInit: function(){
  },  
  subInit: function(){
    this.swipe();
    this.oneLine();
    this.animate.slideAnimate();
    this.animate.pageAnimate();
    this.wowInit();
  },
  init: function(){
    this.subInit();
  },
};

$(document).ready(function(){
  macPoint.init();
});
