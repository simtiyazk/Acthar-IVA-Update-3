'use strict';

$(() => {

//private
var self, el, touchclick;

class Slide {

	constructor() {
		//set vars
		self = this;
		el = $('#rheum_hcp_iva_U3_72');
		touchclick = 'ontouchend' in document.documentElement
         ? 'touchend'
         : window.navigator.pointerEnabled
         ? 'pointerup'
         : 'click';
		//initial setup

		//listeners
	}

	//----- handlers ------//


	//----- utils ------//

}

var slide = new Slide();

});
