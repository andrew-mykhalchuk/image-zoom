$(document).ready(function () {
	var imgWrapper = $('.product-image-wrapper');
	var imgToZoom = $('.product-image-wrapper img');
	var largeImage = imgToZoom.data('zoom-image');
	var zoomContainer = $('.product-image-zoom');
	var zoomedImage = $('.product-image-zoom img');
	var zoomRatio = 100;
	var currentZoom = 100;
	var zoomStep = 5;
	var minZoom = 100 + zoomStep;

	// console.log(imgToZoom.attr('src'));
	// console.log(largeImage);

	imgWrapper.on('click', function () {
		var _this = $(this);
		var largeImageSrc = _this.find('img')
		var lg = _this.find('img').attr('src');

		zoomContainer.css('background-image', 'url(' + lg + ')');

		// console.log(zoomedImage);
		// getZoomRatio(zoomedImage);
	})

	getZoomRatio();
	scrollZoom();

	function getZoomRatio(data) {
		var img = $('.zoom-image');
		var visibleWidth = img.width();
		// var visibleHeight = img.height();
		var realWidth = img[0].naturalWidth;
		// var realHeight = img[0].naturalHeight;
		zoomRatio = Math.floor((realWidth / visibleWidth) * 100);

		// console.log(zoomRatio);
	}



	function scrollZoom(imageBox) {
		var zoomArea = $('.product-image');

		var handleScroll = function (evt) {
			var delta = evt.wheelDelta ? evt.wheelDelta / 40 : evt.detail ? -evt.detail : 0;
			if (delta) zoom(delta);
			return evt.preventDefault() && false;
		};
		document.querySelector('.product-image').addEventListener('DOMMouseScroll', handleScroll, false);
		document.querySelector('.product-image').addEventListener('mousewheel', handleScroll, false);
	}

	function zoom(delta) {
		if (delta > 0) {
			if (currentZoom <= zoomRatio - zoomStep) {
				currentZoom += 5;
			}
		} else {
			if (currentZoom >= minZoom) {
				currentZoom -= 5;
			}
		}
		
		// console.log(delta);
		console.log(zoomRatio);
		console.log(currentZoom);
		zoomedImage.css({
			"width": currentZoom + "%",
			"color": "red"
		})
	}
});