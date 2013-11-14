jQuery(function($) {
  
  window.$showcase = $('.showcase .tiles');
  $(window).setBreakpoints({
    distinct: true,
    breakpoints: [1, 768]
  });
  
  $(window).bind('enterBreakpoint768',function() {
    console.log('enter desktop');
    if ($('.showcase .tiles').hasClass('cycle') ) {
      $showcase.cycle('destroy').removeClass('cycle');
    }
    
    $showcase.isotope({
      layoutMode: 'masonryHorizontal',
      masonryHorizontal : {
        rowHeight : 160
      }
    });
    
    $('.showcase-left').on('click', function() {
      $('.showcase-content').animate({scrollLeft: '-=480px'})
    });
    
    $('.showcase-right').on('click', function() {
      $('.showcase-content').animate({scrollLeft: '+=480px'})
    });
    
    $('header .info-panel').appendTo('.slc-sites');
  });
  
  $(window).bind('enterBreakpoint1',function() {
    console.log('enter mobile');
    if ($('.showcase .tiles').hasClass('isotope') ) {
      $showcase.isotope('destroy');
    }
    
    $('.showcase-left').off('click');
    $('.showcase-right').off('click');
    
    $showcase.find('.tile').each(function() {
      var tileCSS = '{"top": "'+(Math.floor(Math.random()*21)-10)+'px", "left": "'+(Math.floor(Math.random()*21)-10)+'px", "transform": "rotate('+(Math.floor(Math.random()*21)-10)+'deg)"}';
      $(this).attr('data-cycle-slide-css', tileCSS);
    });
    
    $showcase.addClass('cycle').cycle({
      slides: "> .tile",
      swipe: true,
      fx: "shuffle",
      prev: '.showcase-left',
      next: '.showcase-right'
    });
    
    $('.slc-sites .info-panel').appendTo('.nav');
  });
  
  
  // Mobile off-side menus
  $('.logo').click(function(e) {
    e.preventDefault();
    if ($('body').is('.center') ) {
      $('body').addClass('off-right').removeClass('center');
    } else if ($('body').is('.off-right') ) {
      $('body').addClass('center').removeClass('off-right');
    }
  });
  
  $('.xs-menu').click(function(e) {
    e.preventDefault();
    if ($('body').is('.center') ) {
      $('body').addClass('off-left').removeClass('center');
    } else if ($('body').is('.off-left') ) {
      $('body').addClass('center').removeClass('off-left');
    }
  });
  
  // Home Intro
  if ($('body').hasClass('initialize') ) {
    $('header').delay(1000).fadeIn(1000, function() {
      $('.initialize > section, footer').fadeIn(1000, function() {
        $('.showcase').animate({backgroundColor:'#0077b0'}, function() {
          $('.intro-home').fadeOut(function() {
            $('.intro').fadeOut();
            $('.initialize .showcase-wrap').fadeIn(1000);
          });
        });
      });
    });
  }
  
});