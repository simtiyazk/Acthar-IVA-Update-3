'use strict';

$(() => {

//private
var el, actharTreatment, actharTreatmentClose, physician, physicianClose, s2, touchclick, clickArea1_10, clickArea4_10;

class Slide {

	constructor() {
      //set vars
      el = $('#rheum_hcp_iva_U3_30 .content');
      actharTreatment = el.find('.acthar-treatment');
      actharTreatmentClose = el.find('#acthar-treatment .close');
      physician = el.find('.physician-measured');
      physicianClose = el.find('#physician-measured .close');
      s2 = el.find('a.study2');
      clickArea1_10 = el.find('a.clickArea1_10');
      clickArea4_10 = el.find('a.clickArea4_10');

      touchclick =
         'ontouchend' in document.documentElement
            ? 'touchend'
            : window.navigator.pointerEnabled
            ? 'pointerup'
            : 'click';

      actharTreatment.on(touchclick, () => {
         const tracking = {
            id: 'button',
            type: 'SLE case study 2 acthar treatment image chart +',
            description: 'sle_case_studies>slide_sle_studies>case study 2_acthar treatment_image chart expand'
         };
         veevaUtils.trackEvent(tracking, () => {});
      });

      physician.on(touchclick, () => {
         const tracking = {
            id: 'button',
            type: 'SLE case study 2 physician measure outcome image chart +',
            description: 'sle_case_studies>slide_sle_studies>case study 2_physician measure outcome_image chart open'
         };
         veevaUtils.trackEvent(tracking, () => {});
      });

      actharTreatmentClose.on(touchclick, () => {
         const tracking = {
            id: 'button',
            type: 'SLE case study 2 acthar treatment image chart X',
            description: 'sle_case_studies>slide_sle_studies>case study 2_acthar treatment_image chart close'
         };
         veevaUtils.trackEvent(tracking, () => {});
      });

      physicianClose.on(touchclick, () => {
         const tracking = {
            id: 'button',
            type: 'SLE case study 2 physician measure outcome image chart X',
            description: 'sle_case_studies>slide_sle_studies>case study 2_physician measure outcome_image chart close'
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
