'use strict';

$(() => {

//private
var el, touchclick, primaryEndpoint, primaryClose, s2, clickArea1_10,clickArea4_10;

class Slide {

	constructor() {
		//set vars
      el = $('#rheum_hcp_iva_U3_31 .content');
      primaryEndpoint = el.find('.primary-endpoint');
      primaryClose = el.find('#primary-endpoint .close');
      s2 = el.find('div.study2');
      clickArea1_10 = el.find('a.clickArea1_10');
      clickArea4_10 = el.find('a.clickArea4_10');

      touchclick =
         'ontouchend' in document.documentElement
            ? 'touchend'
            : window.navigator.pointerEnabled
            ? 'pointerup'
            : 'click';

      primaryEndpoint.on(touchclick, (e) => {
         const tracking = {
            id: 'button',
            type: 'DM/PM results primary endpoint image +',
            description: 'dm_pm_results>slide_dm_pm_studies>results_primary endpoint image expand'
         };
         veevaUtils.trackEvent(tracking, () => {});
      });

      primaryClose.on(touchclick, (e) => {
         const tracking = {
            id: 'button',
            type: 'DM/PM results primary endpoint image X',
            description: 'dm_pm_results>slide_dm_pm_studies>results_primary endpoint image close'
         };
         veevaUtils.trackEvent(tracking, () => {});
      });

      s2.on(touchclick, (e) => {
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
