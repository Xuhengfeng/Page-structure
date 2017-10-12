'use strict';

/*
 * @@左右自适应屏幕高度
 */
let Header = document.getElementsByClassName('header')[0];
let Left = document.getElementsByClassName('menu-lt')[0];
let Right = document.getElementsByClassName('img-rt')[0];
let Mid = document.getElementsByClassName('main-mid')[0];
console.log(Mid)

let winHeight;
function autoHeight() {
	/**
	 * @@获取浏览器窗口高度
	 */
	if (window.innerHeight) {
		winHeight = window.innerHeight;
	} else if ((document.body) && (document.body.clientHeight)){
		winHeight = document.body.clientHeight;
	} if (document.documentElement && document.documentElement.clientHeight) {
		winHeight = document.documentElement.clientHeight;
	}
	let changeHeight = winHeight  - 20;
	Left.style.height = changeHeight+'px';
	Right.style.height = changeHeight+'px';	
}

/**
 * @@浏览器 监听窗口变化 
 * @@页面加载时 执行一个onload事件
 * @@窗口变化时 执行一个onresize 事件
 * @@页面滚动时 执行 onscroll 事件
 */
window.onload = autoHeight;;
window.onresize = autoHeight;
window.onscroll = function () {
	console.log(Left.offsetHeight)
	console.log(Mid.offsetHeight)
	if (Left.offsetHeight > Mid.offsetHeight - 50) {
		return 
	}
	Left.style.height = Left.offsetHeight + 10 + 'px';
	Right.style.height = Right.offsetHeight + 10 + 'px';
}


let oList = Left.getElementsByTagName('li');


/**
 * @@事件代理实现原理 
 * (事件机制, 先捕获阶段, 在目标阶段, 再冒泡阶段)
 */
let index;
Left.addEventListener('click', function(e) {
	e.preventDefault();
	let event = e || window.event;
	let target = event.target;
	if (target.nodeName == 'A') {
		target.style.background = '#ccc';
		index = parseInt(target.parentNode.getAttribute('data-num'));
	}
	
	for (let item of oList) {
		console.log(parseInt(item.getAttribute('data-num')))
		if (parseInt(item.getAttribute('data-num')) === index) {		
			item.children[0].style.background = '#ccc';
		} else {
			item.children[0].style.background = '';
		}
	}

})


