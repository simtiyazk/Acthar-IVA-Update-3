'use strict';

$(() => {

//private
var el, touchclick, sleHomelink1, sleHomelink3;

class Slide {

	constructor() {
		//set vars

      el = $('#rheum_hcp_iva_U3_34 .content');
      sleHomelink1 = el.find('a.sleHomelink1');
      sleHomelink3 = el.find('a.sleHomelink3');
      touchclick =
         'ontouchend' in document.documentElement
            ? 'touchend'
            : window.navigator.pointerEnabled
            ? 'pointerup'
            : 'click';

      sleHomelink1.on(touchclick, (e) => {
         const tracking = {
            id: 'button',
            type: '',
            description: '',
         };
         veevaUtils.gotoSlide($(e.target).data('target'), tracking);
      });

      sleHomelink3.on(touchclick, (e) => {
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
