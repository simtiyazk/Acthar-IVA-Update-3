'use strict';

$(() => {

//private
var el, touchclick, pred, closeBtn, s1, clickArea1_10, clickArea4_10;

class Slide {

	constructor() {
		//set vars
      el = $('#rheum_hcp_iva_U3_32');
      pred = el.find('.pred-popup-btn');
      closeBtn = el.find('#pred .close');
      s1 = el.find('div.study1');
      clickArea1_10 = el.find('a.clickArea1_10');
      clickArea4_10 = el.find('a.clickArea4_10');

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

      s1.on(touchclick, (e) => {
         const tracking = {
            id: 'button',
            type: 'MMT (Study2) Tab',
            description: 'rheum_scheduled_relief>slide_home>dm/pm section',
         };
         veevaUtils.gotoSlide($(e.target).data('target'), tracking);
      });

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
