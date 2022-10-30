'use strict';

$(() => {

//private
var el, touchclick, clickArea1, clickArea2;

class Slide {

	constructor() {
		//set vars

      el = $('#rheum_hcp_iva_U3_50 .content');
      clickArea1 = el.find('a.clickArea1');
      clickArea2 = el.find('a.clickArea2');

      touchclick =
         'ontouchend' in document.documentElement
            ? 'touchend'
            : window.navigator.pointerEnabled
            ? 'pointerup'
            : 'click';

		clickArea1.on(touchclick, (e) => {
         const tracking = {
            id: '',
            type: '',
            description: '',
         };
         veevaUtils.gotoSlide($(e.target).data('target'), tracking);
      });

      clickArea2.on(touchclick, (e) => {
         const tracking = {
            id: '',
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
