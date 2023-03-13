//这一步是为了防止，点击事件的过度发生。
var myTimer = -1;

function back() {
	//1、获取当前滚动了多少距离
	//2、启动定时器，以一定时间减少响应的滚动距离
	var scrollTo = document.documentElement.scrollTop || document.body.scrollTop
	if (myTimer == -1) {
		myTimer = setInterval(() => {
			scrollTo -= 60
			if (scrollTo <= 0) {
				scrollTo = 0
				window.clearInterval(myTimer)
				myTimer = -1
			}
			window.scrollTo(0, scrollTo) //这是值  是指离开网页顶部的距离   
		}, 10);

	}

}
var wechatcode = document.getElementsByClassName('wechat')[0]
// var weiboicon = document.getElementsByClassName('weibo')[0]


function blockWchat() {
	wechatcode.classList.add('weixinHover')
}

function NoneWchat() {
	wechatcode.classList.remove('weixinHover')

}
// function blockWeibo() {
// 	weiboicon.classList.add('weiboHover')
// }

// function NoneWeibo() {
// 	weiboicon.classList.remove('weiboHover')

// }

// 		const loopDiv = document.getElementById('loopDiv')
// 		const pic = document.getElementById('pic')
// 		const left = document.getElementById('left')
// 		const right = document.getElementById('right')
// 		const list = document.getElementById('list')
// 		const lis = document.getElementsByTagName('li')
// 		// 初始化第一个小圆点
// 		lis[0].style.backgroundColor = 'yellow'
// 		var currentPage = 0;
// 		var td = 6000;
// 		var timer = setInterval(func, td)

// 		function func() {
// 			// 到最后一个的时候要返回到第一个
// 			currentPage++
// 			changePic()
// 		}

// 		function changePic() {
// 			// 实现循环
// 			if (currentPage == 5) {
// 				currentPage = 0
// 			}
// 			if (currentPage == -1) {
// 				currentPage = 4
// 			}
// 			pic.src = "uploads/" + currentPage + ".webp"
// 			for (let i = 0; i < lis.length; i++) {
// 				lis[i].style.backgroundColor = "#aaa"
// 			}
// 			lis[currentPage].style.backgroundColor = "yellow"
// 		}
// 		// 实现光标悬浮在轮播图上的效果
// 		loopDiv.onmouseover = function() {
// 			clearInterval(timer)
// 			left.style.display = 'block'
// 			right.style.display = 'block'
// 		}
// 		loopDiv.onmouseout = function() {
// 			timer = setInterval(func, td)
// 			left.style.display = 'none'
// 			right.style.display = 'none'
// 		}
// 		// 实现按钮的点击
// 		left.onclick = function() {
// 			currentPage--
// 			changePic()
// 		}
// 		right.onclick = function() {
// 			currentPage++
// 			changePic()
// 		}
// 		left.onmouseover = function() {
// 			this.style.backgroundColor = "rgba(0,0,0,.6)"
// 		}
// 		left.onmouseout = function() {
// 			this.style.backgroundColor = "rgba(0,0,0,.2)"
// 		}
// 		right.onmouseover = function() {
// 			this.style.backgroundColor = "rgba(0,0,0,.6)"
// 		}
// 		right.onmouseout = function() {
// 			this.style.backgroundColor = "rgba(0,0,0,.2)"
// 		}


// 		var footturnlist = document.querySelector('#footturnlist')
// 		//做滚动函数run，通过样式marginleft进行移动
// 		var left = 0;
// 		var timer;
// 		run();

// 		function run() {
// 			if (left <= -5692) {
// 				left = 0;
// 			}
// 			footturnlist.style.marginLeft = left + 'px';
// 			var n = (left % 1423 == 0) ? n = 1200 : n = 1;
// 			left -= 10; //每10 毫秒运行一次run，每次偏移left累积-10
// 			timer = setTimeout(run, n);

// 		}
	