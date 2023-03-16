window.onscroll = function() {
	var menu = document.querySelector('.menu');
	var vMenu = document.querySelector('#v-menu');
	var screenWidth = screen.width;
	// console.log(screenWidth);
	
	if(screenWidth > 768) {
		if(window.pageYOffset == 0) {		
		menu.style.height = 69 + 'px';
		vMenu.style.top = 70 + 'px';
	} else {
		menu.style.height = 40 + 'px';
		vMenu.style.top = 42 + 'px';
		}
	} else 	if(screenWidth <= 768) {
		if(window.pageYOffset == 0) {		
		menu.style.height = 50 + 'px';
		vMenu.style.top = 51 + 'px';
	} else {
		menu.style.height = 30 + 'px';
		vMenu.style.top = 32 + 'px';
		}
	};	
};



var menuLink = document.querySelector('#menu-pos-2');
menuLink.addEventListener('mouseover', function() {
	var myLayer = document.getElementById('v-menu');
	myLayer.style.display = 'flex';
	myLayer.style.zIndex = 2;
});

menuLink.addEventListener('mouseout', function() {
	var myLayer = document.getElementById('v-menu');
	myLayer.style.display = 'none';	
});


var vMenu = document.querySelector('#v-menu');
vMenu.addEventListener('mouseout', function() {
	var myLayer = document.getElementById('v-menu');
	myLayer.style.display = 'none';
	
});


var circleForehead = document.querySelector('.circle-forehead');
circleForehead.addEventListener('mouseover', function() {
	var foreHead = document.querySelector('.forehead');
	var circle = document.querySelector('.circle-1');
	circle.style.visibility = 'hidden';
	foreHead.style.backgroundImage = 'url(images/forehead.png)';
	foreHead.style.backgroundRepeat = 'no-repeat';
});
circleForehead.addEventListener('mouseout', function() {
	var foreHead = document.querySelector('.forehead');
	var circle = document.querySelector('.circle-1');
	circle.style.visibility = 'visible';
	foreHead.style.backgroundImage = 'none';
});



var circleEye = document.querySelector('.circle-eye');
circleEye.addEventListener('mouseover', function() {
	var eye = document.querySelector('.eye');
	var circle = document.querySelector('.circle-2');
	circle.style.visibility = 'hidden';
	eye.style.backgroundImage = 'url(images/eye.png)';
});
circleEye.addEventListener('mouseout', function() {
	var eye = document.querySelector('.eye');
	var circle = document.querySelector('.circle-2');
	circle.style.visibility = 'visible';
	eye.style.backgroundImage = 'none';
});


var circleUnderEye = document.querySelector('.circle-undereye');
circleUnderEye.addEventListener('mouseover', function() {
	var underEye = document.querySelector('.under-eye');
	var circle = document.querySelector('.circle-3');
	circle.style.visibility = 'hidden';
	underEye.style.backgroundImage = 'url(images/under_eye.png)';
	underEye.style.backgroundRepeat = 'no-repeat';
});
circleUnderEye.addEventListener('mouseout', function() {
	var underEye = document.querySelector('.under-eye');
	var circle = document.querySelector('.circle-3');
	circle.style.visibility = 'visible';
	underEye.style.backgroundImage = 'none';
});


var circleCheek = document.querySelector('.circle-cheek');
circleCheek.addEventListener('mouseover', function() {
	var cheek = document.querySelector('.cheek');
	var circle = document.querySelector('.circle-4');
	circle.style.visibility = 'hidden';
	cheek.style.backgroundImage = 'url(images/cheek.png)';
	cheek.style.backgroundRepeat = 'no-repeat';
});
circleCheek.addEventListener('mouseout', function() {
	var cheek = document.querySelector('.cheek');
	var circle = document.querySelector('.circle-4');
	circle.style.visibility = 'visible';
	cheek.style.backgroundImage = 'none';
});


var circleChin = document.querySelector('.circle-chin');
circleChin.addEventListener('mouseover', function() {
	var chin = document.querySelector('.chin');
	var circle = document.querySelector('.circle-5');
	circle.style.visibility = 'hidden';
	chin.style.backgroundImage = 'url(images/chin.png)';
	chin.style.backgroundRepeat = 'no-repeat';
});
circleChin.addEventListener('mouseout', function() {
	var chin = document.querySelector('.chin');
	var circle = document.querySelector('.circle-5');
	circle.style.visibility = 'visible';
	chin.style.backgroundImage = 'none';
});




var greenLineLink = document.querySelector('.green-line-link');
greenLineLink.addEventListener('mouseover', function() {
	var circleGreen = document.querySelector('.circle-green');
	var greenLlineText = document.querySelector('.green-line-text');
	var circleHight = circleGreen.offsetHeight;
	var circleWidth = circleGreen.offsetWidth;
	var screenWidth = screen.width;
	
	if(screenWidth > 768) {
		circleGreen.style.height = circleHight + 17 + "px"; 
		circleGreen.style.width = circleWidth + 17 + "px"; 
		circleGreen.style.left = -16 + "px";
		greenLlineText.style.marginLeft = -17 + 'px';
	} else {
		circleGreen.style.height = circleHight + 10 + "px"; 
		circleGreen.style.width = circleWidth + 10 + "px"; 
		circleGreen.style.left = -9 + "px";
		greenLlineText.style.marginLeft = -10 + 'px';
	};
});
greenLineLink.addEventListener('mouseout', function() {
	var circleGreen = document.querySelector('.circle-green');
	var greenLlineText = document.querySelector('.green-line-text');
	var screenWidth = screen.width;
	
	if(screenWidth > 768) {
		circleGreen.style.width = 98 + "px"; 
		circleGreen.style.height = 98 + "px";
		circleGreen.style.left = -12 + "px";
		greenLlineText.style.paddingLeft = 5 + 'px';
		greenLlineText.style.marginLeft = 0 + 'px';
	} else {
		circleGreen.style.width = 57 + "px"; 
		circleGreen.style.height = 57 + "px";
		circleGreen.style.left = -12 + "px";
		greenLlineText.style.paddingLeft = 5 + 'px';
		greenLlineText.style.marginLeft = 0 + 'px';
	}
});


var blueLineLink = document.querySelector('.blue-line-link');
blueLineLink.addEventListener('mouseover', function() {
	var circleBlue = document.querySelector('.circle-blue');
	var blueLlineText = document.querySelector('.blue-line-text');
	var circleHight = circleBlue.offsetHeight;
	var circleWidth = circleBlue.offsetWidth;
	var screenWidth = screen.width;
	
	if(screenWidth > 768) {
		circleBlue.style.height = circleHight + 17 + "px"; 
		circleBlue.style.width = circleWidth +17 + "px"; 
		circleBlue.style.left = -16 + "px";
		blueLlineText.style.marginLeft = -17 + 'px';
	} else {
		circleBlue.style.height = circleHight + 10 + "px"; 
		circleBlue.style.width = circleWidth + 10 + "px"; 
		circleBlue.style.left = -9 + "px";
		blueLlineText.style.marginLeft = -10 + 'px';
	};
});
blueLineLink.addEventListener('mouseout', function() {
	var circleBlue = document.querySelector('.circle-blue');
	var blueLlineText = document.querySelector('.blue-line-text');
	var screenWidth = screen.width;
	
	if(screenWidth > 768) {
		circleBlue.style.width = 98 + "px"; 
		circleBlue.style.height = 98 + "px";
		circleBlue.style.left = -12 + "px";
		blueLlineText.style.paddingLeft = 5 + 'px';
		blueLlineText.style.marginLeft = 0 + 'px';
	} else {
		circleBlue.style.width = 57 + "px"; 
		circleBlue.style.height = 57 + "px";
		circleBlue.style.left = -12 + "px";
		blueLlineText.style.paddingLeft = 5 + 'px';
		blueLlineText.style.marginLeft = 0 + 'px';
	};
});


var callBack = document.querySelector('.call-back');
var closeForm = document.querySelector('.input-close');
var inputBlock = document.querySelector('.input-block');
callBack.addEventListener('click', function() {
	inputBlock.style.display = 'block';
});
closeForm.addEventListener('click', function() {
	inputBlock.style.display = 'none';
})


//Zoomer
var zoomIcon = document.querySelectorAll('.gallery-search'),
	blockZoom = document.querySelector('.block-zoom'),
	zoomImages = document.querySelector('.zoom-images');
	
var bgImg = {

	number: ["images/gallery_1.jpg", "images/gallery_2.jpg", "images/gallery_3.jpg", "images/gallery_4.jpg", "images/gallery_5.jpg", "images/gallery_6.jpg", "images/gallery_7.jpg", "images/gallery_8.jpg", "images/gallery_9.jpg"],

	zoomer: function() {
		for (var i = 0; i < zoomIcon.length; i++) {
			(function(i){
				zoomIcon[i].addEventListener('click', function() {
					blockZoom.style.zIndex = 1;
					zoomImages.style.backgroundImage = 'url(' + bgImg.number[i] + ')';
					zoomImages.classList.add('zoom-images_2');
				});
			})(i);
		}
	},

	closeBlock: function() {
		blockZoom.addEventListener('click', function(e) {
			if (e.target != zoomImages) {
				zoomImages.classList.remove('zoom-images_2');
				blockZoom.style.zIndex = -1000;
			};
		});
	}
}

bgImg.zoomer();
bgImg.closeBlock();



//Slider
var slideBox = document.querySelector('.slide-box'),
	galleryPhoto = document.querySelector('.gallery-photo'),
	galleryCircle = document.querySelectorAll('.gallery-circle');

for (var i = 0; i < galleryCircle.length; i++) {
	
	(function(i){
		galleryCircle[i].addEventListener('click', function() {
			if(i == 0) {
				slideBox.style.left = -((3*galleryPhoto.width)*i) + "px";
				galleryCircle[1].style.background = "none";
				galleryCircle[2].style.background = "none";
				galleryCircle[i].style.background = "#ffffff";
			}else if (i == 1) {
				slideBox.style.left = -((3*galleryPhoto.width)*i) + "px";
				galleryCircle[0].style.background = "none";
				galleryCircle[2].style.background = "none";
				galleryCircle[i].style.background = "#ffffff";
			}else if (i == 2) {
				slideBox.style.left = -((3*galleryPhoto.width)*i) + "px";
				galleryCircle[0].style.background = "none";
				galleryCircle[1].style.background = "none";
				galleryCircle[i].style.background = "#ffffff";
			} 
		});
	})(i);
}
