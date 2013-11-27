jQuery(function($) {
  
  /*
  Make the portrait tablet play nice with the info-panels:
  https://www.dropbox.com/s/0h2s1fzhx5v40p7/2013-11-22%2018.14.20.png
  */
  
  window.$showcase = $('.showcase .tiles');
  $showcase.isotope({
    layoutMode: 'masonryHorizontal',
    masonryHorizontal : {
      rowHeight : 160
    }
  });

  function turnMobileOff() {
    $('.logo').off('click');
    $('.xs-menu').off('click');
    $('body').removeClass('off-right').removeClass('off-left').addClass('center');
    $('.showcase .scroll-le').off('click');
    $('.showcase .scroll-ri').off('click');
    $(window).off('swiperight');
    $(window).off('swipeleft');
    // $('header .slc-sites').appendTo('.slc-sites-wrap');
    $('.menu-right .slc-sites').appendTo('.slc-sites-wrap');
  }
  
  $(window).setBreakpoints({
    distinct: true,
    breakpoints: [1, 768, 992]
  });
  
  $(window).bind('enterBreakpoint992',function() {
    console.log('enter desktop');
    
    turnMobileOff();
    
    // Adjust panel heights
    $('.info-panel').height($(window).height() - 559)
    
    $('.showcase .scroll-le').on('click', function() {
      $('.showcase-content').animate({scrollLeft: '-=640px'})
    });
    $('.showcase .scroll-ri').on('click', function() {
      $('.showcase-content').animate({scrollLeft: '+=640px'})
    });
  });
  
  $(window).bind('enterBreakpoint768',function() {
    console.log('enter tablet');
    
    turnMobileOff();
    
    // Adjust panel heights
    $('.slc-news .info-panel, .slc-spotlight .info-panel').height('auto');
    $('.slc-sites .info-panel').height(10 + $('.slc-news .info-panel').height() + $('.slc-spotlight').height());
    
    $('.showcase .scroll-le').on('click', function() {
      $('.showcase-content').animate({scrollLeft: '-=480px'})
    });
    $('.showcase .scroll-ri').on('click', function() {
      $('.showcase-content').animate({scrollLeft: '+=480px'})
    });
  });
  
  $(window).bind('enterBreakpoint1',function() {
    console.log('enter mobile');
    
    $('.showcase .scroll-le').off('click');
    $('.showcase .scroll-ri').off('click');
    
    $('.showcase .scroll-le').on('click', function() {
      $('.showcase-content').animate({scrollLeft: '-=240px'})
    });
    $('.showcase .scroll-ri').on('click', function() {
      $('.showcase-content').animate({scrollLeft: '+=240px'})
    });
    
    
    $(window).on('swipeleft', function() {
      if ($('body').is('.center') ) {
        $('.menu-right').css({'z-index':20});
        $('.menu-left').css({'z-index':10});
        $('body').addClass('off-left').removeClass('center');
      } else if ($('body').is('.off-right') ) {
        $('body').addClass('center').removeClass('off-right');
      }
    });
    $(window).on('swiperight', function() {
      if ($('body').is('.center') ) {
        $('.menu-left').css({'z-index':20});
        $('.menu-right').css({'z-index':10});
        $('body').addClass('off-right').removeClass('center');
      } else if ($('body').is('.off-left') ) {
        $('body').addClass('center').removeClass('off-left');
      }
    });
    
    
    // Mobile off-side menus
    $('.logo, .menu-helpers .explore').click(function(e) {
      e.preventDefault();
      if ($('body').is('.center') ) {
        $('.menu-left').css({'z-index':20});
        $('.menu-right').css({'z-index':10});
        $('body').addClass('off-right').removeClass('center');
      } else if ($('body').is('.off-right') ) {
        $('body').addClass('center').removeClass('off-right');
      }
    });

    $('.xs-menu, .menu-helpers .sites').click(function(e) {
      e.preventDefault();
      if ($('body').is('.center') ) {
        $('.menu-right').css({'z-index':20});
        $('.menu-left').css({'z-index':10});
        $('body').addClass('off-left').removeClass('center');
      } else if ($('body').is('.off-left') ) {
        $('body').addClass('center').removeClass('off-left');
      }
    });
    
    
    $('.slc-sites').appendTo('.menu-right-content');
  });
  
  
  
  
  // Filter and search
  $('#q').keyup(function(e) {
    $('.slc-sites .info-panel a').removeClass('hidden');
    $('.slc-sites .info-panel').removeHighlight();
    var q = $(this).val().toLowerCase();
    
    if (q.length >= 2) {
      $('.slc-sites .info-panel').addClass('filtering');
      $('.slc-sites .info-panel a').addClass('hidden');
      $('.slc-sites .info-panel ul ul a').each(function(i,v) {
        if ($(this).text().toLowerCase().indexOf(q) > -1) {
          $(this).removeClass('hidden');
        }
      });
      $('.slc-sites .info-panel > ul > li').each(function(i,v) {
        if ($(this).find('ul a').not('.hidden').length > 0) {
          $(this).find('> a').removeClass('hidden');
        }
      });
      $('.slc-sites .info-panel > ul > li > a').each(function(i,v) {
        if ($(this).text().toLowerCase().indexOf(q) > -1) {
          $(this).removeClass('hidden');
        }
      });
      $('.slc-sites .info-panel').highlight(q);
    } else {
      $('.slc-sites .info-panel').removeClass('filtering');
    }
  });
  
  
  // IAm menu height
  $('.i-am, .info-for').click(function(e) {
    e.preventDefault();
    $('#iAm').collapse('toggle');
    if ($(window).height() < 780) {
      $('header #iAm nav').height($(window).height() - 140)
    } else {$('header #iAm nav').height('auto')}
  });
  
  
  $('body header').click(function(e) {
    if (e.target.nodeName === 'HEADER') {
      if ($('body').is('.off-left') ) {
        $('body').addClass('center').removeClass('off-left');
      } else if ($('body').is('.off-right') ) {
        $('body').addClass('center').removeClass('off-right');
      }
    }
  });
  
  // Home Intro
  if ($('body').hasClass('initialize') ) {
    $('header').delay(1000).fadeIn(1000, function() {
      $('.initialize .wrap > section, footer, .menu').fadeIn(1000, function() {
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