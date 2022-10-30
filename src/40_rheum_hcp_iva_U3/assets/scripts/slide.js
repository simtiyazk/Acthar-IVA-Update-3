'use strict';

$(() => {

//private
var el, touchclick, clickArea1_35, clickArea3_35;

class Slide {

	constructor() {
		//set vars

      el = $('#rheum_hcp_iva_U3_40 .content');
      clickArea1_35 = el.find('a.clickArea1_35');
      clickArea3_35 = el.find('a.clickArea3_35');
      touchclick =
         'ontouchend' in document.documentElement
            ? 'touchend'
            : window.navigator.pointerEnabled
            ? 'pointerup'
            : 'click';

      clickArea1_35.on(touchclick, (e) => {
         const tracking = {
            id: 'button',
            type: '',
            description: '',
         };
         veevaUtils.gotoSlide($(e.target).data('target'), tracking);
      });

      clickArea3_35.on(touchclick, (e) => {
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
