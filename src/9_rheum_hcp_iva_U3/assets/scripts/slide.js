'use strict';

$(() => {

//private
var el, touchclick, openLabel_button, longTerm_button, openLabelStudy_button,prospective_button;

class Slide {

	constructor() {
		//set vars

      el = $('#rheum_hcp_iva_U3_9 .content');
      openLabel_button = el.find('a.openLabel-button');
      prospective_button = el.find('a.prospective-button');
      touchclick =
         'ontouchend' in document.documentElement
            ? 'touchend'
            : window.navigator.pointerEnabled
            ? 'pointerup'
            : 'click';

            openLabel_button.on(touchclick, (e) => {
         const tracking = {
            id: 'button',
            type: '',
            description: '',
         };
         veevaUtils.gotoSlide($(e.target).data('target'), tracking);
      });

      prospective_button.on(touchclick, (e) => {
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
