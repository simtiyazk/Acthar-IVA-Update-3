'use strict';

$(() => {

//private
var el, touchclick, clickArea1_61;

class Slide {

	constructor() {
		//set vars

      el = $('#rheum_hcp_iva_U3_65 .content');
      clickArea1_61 = el.find('a.clickArea1_61');
      touchclick =
         'ontouchend' in document.documentElement
            ? 'touchend'
            : window.navigator.pointerEnabled
            ? 'pointerup'
            : 'click';

      clickArea1_61.on(touchclick, (e) => {
         const tracking = {
            id: 'button',
            type: '',
            description: '',
         };
         veevaUtils.gotoSlide($(e.target).data('target'), tracking);
      });

		//initial setup

		//listeners
	}

	//----- handlers ------//


	//----- utils ------//

}

var slide = new Slide();

});
