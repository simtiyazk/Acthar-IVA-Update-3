'use strict';

$(() => {

//private
var el, touchclick, clickArea1_10, clickArea4_10;

class Slide {

	constructor() {
		//set vars

      el = $('#rheum_hcp_iva_U3_13 .content');
      clickArea1_10 = el.find('a.clickArea1_10');
      clickArea4_10 = el.find('a.clickArea4_10');
      touchclick =
         'ontouchend' in document.documentElement
            ? 'touchend'
            : window.navigator.pointerEnabled
            ? 'pointerup'
            : 'click';

      clickArea1_10.on(touchclick, (e) => {
         const tracking = {
            id: 'button',
            type: '',
            description: '',
         };
         veevaUtils.gotoSlide($(e.target).data('target'), tracking);
      });

      clickArea4_10.on(touchclick, (e) => {
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
