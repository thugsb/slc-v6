jQuery(function($) {
  
  
  window.$showcase = $('.showcase .tiles');
  $showcase.isotope({
    layoutMode: 'masonryHorizontal',
    masonryHorizontal : {
      rowHeight : 160
    }
  });
  
  $(window).setBreakpoints({
    distinct: true,
    breakpoints: [1, 768, 992]
  });
  
  $(window).bind('enterBreakpoint992',function() {
  
    // Adjust panel heights
    $('.info-panel').height($(window).height() - 559)
    
  });
  
  $(window).bind('enterBreakpoint768',function() {
    console.log('enter desktop');
    
    // Adjust panel heights
    $('.slc-news .info-panel, .slc-spotlight .info-panel').height('auto');
    $('.slc-sites .info-panel').height(10 + $('.slc-news .info-panel').height() + $('.slc-spotlight').height());
    
    $('.showcase-left').off('click');
    $('.showcase-right').off('click');
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
    
    
    $('.showcase-left').off('click');
    $('.showcase-right').off('click');
    $('.showcase-left').on('click', function() {
      $('.showcase-content').animate({scrollLeft: '-=300px'})
    });
    $('.showcase-right').on('click', function() {
      $('.showcase-content').animate({scrollLeft: '+=300px'})
    });
    
    
    $('.slc-sites .info-panel').appendTo('.nav');
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