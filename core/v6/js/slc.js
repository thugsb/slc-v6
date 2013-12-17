jQuery(function($) {
  /*
  http://accessibility.siteimprove.com/MGMIPMBAAIAKGDOAIBKP/9057/9019405502#
  And SEO
  
  mobile init not working
  
  IAm height calculations
  
  scrollbar
  */
  
  window.$showcase = $('.showcase .tiles');
  
  // Initialize scrollable areas
  window.$sitesScroll = $('.slc-sites .scroll-vert');
  window.$newsScroll = $('.slc-news .scroll-vert');
  window.$iamScroll = $('#iAm .scroll-vert');
  window.$menuleftScroll = $('.menu-left .scroll-vert');
  $sitesScroll.tinyscrollbar({lockscroll: true, invertscroll: function() {if ('ontouchstart' in document.documentElement) {return true} else {return false}}});
  $newsScroll.tinyscrollbar({lockscroll: true, invertscroll: function() {if ('ontouchstart' in document.documentElement) {return true} else {return false}}});
  $iamScroll.tinyscrollbar({lockscroll: true, invertscroll: function() {if ('ontouchstart' in document.documentElement) {return true} else {return false}}});
  $menuleftScroll.tinyscrollbar({lockscroll: true, invertscroll: function() {if ('ontouchstart' in document.documentElement) {return true} else {return false}}});
  
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
  
  if (!$('body').hasClass('initialize') ) {
    $(window).setBreakpoints({breakpoints: [1, 768, 992]});
  }
  
  $(window).bind('enterBreakpoint992',function() {
    console.log('enter desktop');
    
    turnMobileOff();
    
    if ($showcase.is('.isotope') ) {$showcase.isotope('destroy')}
    $showcase.isotope({
      layoutMode: 'masonryHorizontal',
      masonryHorizontal : {
        rowHeight : 160
      }
    }).width($showcase.outerWidth()); // (isotope is built assuming box-sizing:content-box)
    
    
    // Adjust panel heights
    $('.info-panel').height($(window).height() - 559);
    $('.slc-sites .info-panel').height($(window).height() - 559 - 60);
    $sitesScroll.find('.viewport').height($sitesScroll.outerHeight()).end().tinyscrollbar_update();
    $newsScroll.find('.viewport').height($newsScroll.outerHeight()).end().tinyscrollbar_update();
    
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
    
    if ($showcase.is('.isotope') ) {$showcase.isotope('destroy')}
    $showcase.isotope({
      layoutMode: 'masonryHorizontal',
      masonryHorizontal : {
        rowHeight : 160
      }
    }).width($showcase.outerWidth()); // (isotope is built assuming box-sizing:content-box)
    
    
    // Adjust panel heights
    $('.slc-sites .info-panel').height(10 - 60 + $('.slc-news .info-panel').height() + $('.slc-spotlight').height());
    $sitesScroll.find('.viewport').height($sitesScroll.outerHeight()).end().tinyscrollbar_update();
    $newsScroll.height($newsScroll.find('.overview').outerHeight()).find('.viewport').height($newsScroll.outerHeight()).end().tinyscrollbar_update();

    $('.showcase .scroll-le').on('click', function() {
      $('.showcase-content').animate({scrollLeft: '-=480px'})
    });
    $('.showcase .scroll-ri').on('click', function() {
      $('.showcase-content').animate({scrollLeft: '+=480px'})
    });
  });
  
  $(window).bind('enterBreakpoint1',function() {
    console.log('enter mobile');
    
    if ($showcase.is('.isotope') ) {$showcase.isotope('destroy')}
    $showcase.isotope({
      layoutMode: 'masonryHorizontal',
      masonryHorizontal : {
        rowHeight : 120
      }
    }).width($showcase.outerWidth()); // (isotope is built assuming box-sizing:content-box)
    
    
    $('.showcase .scroll-le').off('click');
    $('.showcase .scroll-ri').off('click');
    
    $('.showcase .scroll-le').on('click', function() {
      $('.showcase-content').animate({scrollLeft: '-=240px'})
    });
    $('.showcase .scroll-ri').on('click', function() {
      $('.showcase-content').animate({scrollLeft: '+=240px'})
    });
    
    // Adjust panel heights
    $('.slc-sites .info-panel').height('auto');
    
    $(window).on('swipeleft', function() {
      if ($('body').is('.center') ) {
        $('.menu-right').css({'z-index':20});
        $('.menu-left').css({'z-index':10});
        $('body').addClass('off-left').removeClass('center');
        $sitesScroll.find('.viewport').height($sitesScroll.outerHeight()).end().tinyscrollbar_update();
      } else if ($('body').is('.off-right') ) {
        $('body').addClass('center').removeClass('off-right');
      }
    });
    $(window).on('swiperight', function() {
      if ($('body').is('.center') ) {
        $('.menu-left').css({'z-index':20});
        $('.menu-right').css({'z-index':10});
        $('body').addClass('off-right').removeClass('center');
        $menuleftScroll.find('.viewport').height($menuleftScroll.outerHeight()).end().tinyscrollbar_update();
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
        $menuleftScroll.find('.viewport').height($menuleftScroll.outerHeight()).end().tinyscrollbar_update();
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
        $sitesScroll.find('.viewport').height($sitesScroll.outerHeight()).end().tinyscrollbar_update();
      } else if ($('body').is('.off-left') ) {
        $('body').addClass('center').removeClass('off-left');
      }
    });
    
    
    $('.slc-sites').appendTo('.menu-right-content');
  });
  
  // End enterBreakpoint1
  
  
  
  
  
  
  
  
  
  
  
  
  
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
    $sitesScroll.tinyscrollbar_update();
  });
  
  // Expand nav
  $('.slc-sites .info-panel >div>ul>li>a').click(function(e) {
    e.preventDefault();
    if ($(this).next().is(':hidden')) {
      $(this).next().show('slow', function() {$sitesScroll.tinyscrollbar_update('relative')})
    } else {
      $(this).next().hide('slow', function() {$sitesScroll.tinyscrollbar_update('relative')})
    }
  });
  
  
  // IAm menu height
  $('.i-am, .info-for').click(function(e) {
    e.preventDefault();
    if ($('#iAm').is('.in') ) {
      $('#iAm').collapse('hide');
    } else {
      $('header #iAm nav').css({height: ($(window).height() - 170)});
      $('#iAm').collapse('show').on('shown.bs.collapse', function () {
        $iamScroll.find('.viewport').height($iamScroll.outerHeight()).end().tinyscrollbar_update('relative');
      })
    }
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
      $('.initialize .wrap > section, .menu').fadeIn(1000);
      $('footer').fadeIn(1000, function() {
        $(window).setBreakpoints({breakpoints: [1, 768, 992]});
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