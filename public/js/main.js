$(function() {

	var mq10214 = window.matchMedia( "(min-width: 025px)" );
	var mq768 = window.matchMedia( "(min-width: 769px)" );
	var mq480 = window.matchMedia( "(min-width: 481px)" );

	$(window).resize(function() {
		mq1024 = window.matchMedia( "(min-width: 1025px)" );
		mq768 = window.matchMedia( "(min-width: 769px)" );
		mq480 = window.matchMedia( "(min-width: 481px)" );
	});

	var blockDropdown = function(click, block) {

		var $blockBtn = $(click);
		var $blockBody = $(block);
		var menuTitle = (click == '.menu-header-title, .dropdown-exit') ? true : false;

		$blockBtn.click(function() {

			if ($blockBody.hasClass('opened')) {
				$blockBody.removeClass('opened').addClass('closed');
			} else {
				$blockBody.addClass('opened').removeClass('closed');
			}

			console.log(menuTitle);

			if (menuTitle) {

				if ($blockBody.hasClass('opened')) {
					$('body').css("overflow-y", "hidden");
				} else {
					$('body').removeAttr('style');
				}
			}

			return false;
		});

		$(document).click(function(event) {
			if ($(event.target).closest(block).length) return;
			$blockBody.removeClass('opened').addClass('closed');
			$('body').removeAttr('style');
			event.stopPropagation();
		});

		$(window).resize(function(event) {
			$blockBody.removeClass('opened').removeClass('closed');
			$('body').removeAttr('style');
		});
	}

	blockDropdown('.callback-button', '.callback-form');

	blockDropdown('.menu-header-title, .dropdown-exit', '.menu-header-dropdown');

});

$(window).on("load", function() {
	var $headerContainer = $('.header-container'),
		$menuHeader = $('.menu-header-wrapper'),
		$callback = $('.callback-button'),
		wrapWidth = $('.header-container').width(),
		desktop, tablet, isTablet,
		menuHeaderWidth, callbackButton, blocksWidth,
		menuHtml = $('.menu-header').clone();

	var headerResp = function() {
		wrapWidth = $('.header-container').width();
		if ($(window).width() > 768 && typeof blocksWidth === 'undefined') {

			menuHeaderWidth = 0;

			$headerContainer.removeClass('respons').addClass('resp');

			$(".menu-header > li").each(function(index, el) {
				menuHeaderWidth += $(el).outerWidth();
			});
			callbackButton = $callback.outerWidth();
			blocksWidth = menuHeaderWidth;
		}

		if (wrapWidth < 768 && typeof isTablet === 'undefined') {
			mobile();
			isTablet = true;
			desktop = undefined;
		}

		if (wrapWidth >= blocksWidth && typeof desktop == 'undefined') {
			tablet = undefined;
			desktop = true;

			$headerContainer.removeClass('respons').addClass('resp');

			$('.menu-header').remove();
			$('.menu-header-inner').append(menuHtml);

			$('.header-container.respons .menu-header > li > ul').removeAttr("style");

		} else if (wrapWidth <= blocksWidth && typeof tablet == 'undefined') {
			mobile();
			tablet = true;
			desktop = undefined;
		}

		function mobile() {
			$headerContainer.addClass('respons').removeClass('resp');

			$('.menu-header').remove();
			$('.menu-header-inner').append(menuHtml);

				$('.header-container.respons .menu-header > li ul').prev().click(function() {
				$(this).closest('li').toggleClass('opened');

				return false;
			});
		}
	}

	$(window).resize(headerResp).trigger('resize');
});

// slick initialize
$(document).ready(function() {
	$(".header-slider").slick({
		prevArrow: '<i class="fa fa-chevron-circle-left fa-3x slick-prev" aria-hidden="true"></i>',
		nextArrow: '<i class="fa fa-chevron-circle-right fa-3x slick-next" aria-hidden="true"></i>',
	});
});
