'use strict';

$(function () {
	
	/**
	 * .ad 广告
	 */
	$('.ad').animate({
		'marginTop': 0,
		'transition': "all 3s ease-in"
	}, 3000, function () {
		$('.ad-btn').click(function (e) {
			e.preventDefault();
			$('.ad').slideUp('slow');
		});
	});
	
	/**
	 * .hide-box 菜单导航
	 */
	let num;
	console.log($('.nav li'))
	$('.nav li').hover(
		function () {
			console.log($(this))
			let Obj = $(this).attr('id');
        	num = Obj.substr(3);
			$('#box'+num).slideDown(300).removeClass('.hide-box');
		},
		function () {
			console.log(2)
			$('#box'+num).hide();
		}
	);
	$('.hide-box').hover(
		function () {
			$(this).show();
		},
		function () {
			$(this).slideUp(200);
		}
	);
})
