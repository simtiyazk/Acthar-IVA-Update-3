'use strict';

$(() => {

//private
var el, touchclick, study1, study2, clickArea1_10,clickArea4_10;

class Slide {

	constructor() {
		//set vars

      el = $('#rheum_hcp_iva_U3_29 .content');
      study1 = el.find('a.study1-btn');
      study2 = el.find('a.study2-btn');
      clickArea1_10 = el.find('a.clickArea1_10');
      clickArea4_10 = el.find('a.clickArea4_10');

      touchclick =
         'ontouchend' in document.documentElement
            ? 'touchend'
            : window.navigator.pointerEnabled
            ? 'pointerup'
            : 'click';

      study1.on(touchclick, (e) => {
         const tracking = {
            id: 'button',
            type: 'MMT (Study1)',
            description: 'rheum_scheduled_relief>slide_home>dm/pm section',
         };
         veevaUtils.gotoSlide($(e.target).data('target'), tracking);
      });

      study2.on(touchclick, (e) => {
         const tracking = {
            id: 'button',
            type: 'MMT (Study1)',
            description: 'rheum_scheduled_relief>slide_home>SLE section',
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
