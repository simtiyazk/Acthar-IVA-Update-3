'use strict';

$(() => {

//private
var el, touchclick, dmPm, sle, sympSarcoidosis, ra;

class Slide {

	constructor() {
		//set vars

      el = $('#rheum_hcp_iva_U3_1 .content');
      dmPm = el.find('a.dm-pm');
      sle = el.find('a.sle');
      sympSarcoidosis = el.find('a.symp-sarcoidosis');
      ra = el.find('a.ra');
      touchclick =
         'ontouchend' in document.documentElement
            ? 'touchend'
            : window.navigator.pointerEnabled
            ? 'pointerup'
            : 'click';

      dmPm.on(touchclick, (e) => {
         const tracking = {
            id: 'button',
            type: 'Rheum home DM/PM button (purple)',
            description: 'rheum_scheduled_relief>slide_home>dm/pm section',
         };
         veevaUtils.gotoSlide($(e.target).data('target'), tracking);
      });

      sle.on(touchclick, (e) => {
         const tracking = {
            id: 'button',
            type: 'Rheum home SLE button (green)',
            description: 'rheum_scheduled_relief>slide_home>SLE section',
         };
         veevaUtils.gotoSlide($(e.target).data('target'), tracking);
      });

      sympSarcoidosis.on(touchclick, (e) => {
         const tracking = {
            id: 'button',
            type: 'Rheum home Sarc button (blue)',
            description: 'rheum_scheduled_relief>slide_home>sarc section',
         };
         veevaUtils.gotoSlide($(e.target).data('target'), tracking);
      });

      ra.on(touchclick, (e) => {
         const tracking = {
            id: 'button',
            type: 'Rheum home RA button (orange)',
            description: 'rheum_scheduled_relief>slide_home>ra section',
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
