'use strict';

$(() => {

//private
var el, touchclick, RASub1;

class Slide {

	constructor() {
		//set vars

      el = $('#rheum_hcp_iva_U3_60 .content');
      RASub1 = el.find('a.RASub1');
      touchclick =
         'ontouchend' in document.documentElement
            ? 'touchend'
            : window.navigator.pointerEnabled
            ? 'pointerup'
            : 'click';

            RASub1.on(touchclick, (e) => {
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
