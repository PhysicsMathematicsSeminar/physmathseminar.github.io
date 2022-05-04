$('#shareme').sharrre({
  share: {
    googlePlus: true, facebook: true, twitter: true,},
  buttons: {
    googlePlus: {size: 'tall', annotation:'bubble'},
    facebook: {layout: 'box_count'}, twitter: {count: 'vertical'}
  },
  enableHover: false, enableCounter: false, enableTracking: true
});

if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
}else {

	$(function($) {
		var tab = $('#menu'),
    			offset = tab.offset();

		$(window).scroll(function () {
  					if($(window).scrollTop() > offset.top - 11) {
    					tab.addClass('fixed');
    					
    					if($(window).scrollLeft() > 0) {
					tab.css("margin-left", (-1) * $(window).scrollLeft());
				} else {
					tab.css("margin-left", "0");
				}
    					
			} else {
				tab.removeClass('fixed');
				tab.css("margin-left", "0");
			}
									
		});
	});
    }