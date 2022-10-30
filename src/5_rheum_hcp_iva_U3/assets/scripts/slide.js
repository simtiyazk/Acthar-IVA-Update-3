'use strict';

$(() => {

//private
var el, touchclick, pred, closeBtn;

class Slide {

	constructor() {
		//set vars
      el = $('#rheum_hcp_iva_U3_5');
      pred = el.find('.pred-popup-btn');
      closeBtn = el.find('#pred .close');
      touchclick =
         'ontouchend' in document.documentElement
            ? 'touchend'
            : window.navigator.pointerEnabled
            ? 'pointerup'
            : 'click';

      pred.on(touchclick, (e) => {
         const tracking = {
            id: 'button',
            type: 'Endogenous Cortisol: prednisone-equivalent daily cortisol image +',
            description: 'moa_endogenous_cortisol>slide_moa>EC_prednisone-equivalent daily cortisol image expand'
         };
         veevaUtils.trackEvent(tracking, () => {});
      });

      closeBtn.on(touchclick, (e) => {
         const tracking = {
            id: 'button',
            type: 'Endogenous Cortisol: prednisone-equivalent daily cortisol image X',
            description: 'moa_endogenous_cortisol>slide_moa>EC_prednisone-equivalent daily cortisol image close'
         };
         veevaUtils.trackEvent(tracking, () => {});
      });

      //initial setup

      //listeners
	}

	//----- handlers ------//


	//----- utils ------//

}

var slide = new Slide();

});
