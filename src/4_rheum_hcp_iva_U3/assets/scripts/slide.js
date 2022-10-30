'use strict';

$(() => {

//private

class Slide {

	constructor() {
		//set vars
		const el = $('#rheum_hcp_iva_U3_4'),
		openModule = el.find('.module-open'),
		closeModule = el.find('.module-close'),
		interactiveModule = el.find('.interactive-module'),
      mainContent = el.find('.content'),

      touchclick = ('ontouchend' in document.documentElement) ? 'touchend' : (window.navigator.pointerEnabled) ? 'pointerup' : 'click',
      dCells = el.find('.d-cells a');

      //initial setup

		//listeners

		openModule.on(touchclick, function(e) {
			let module = $(`#${$(e.target).data('target')}`);
			mainContent.addClass('show-blur');
			interactiveModule.removeClass('open');
         module.addClass('open');
         let tracking = {};
         let target = $(e.target).data('target');

         switch (target) {
            case 't-cells':
               tracking = {
                  id: 'button',
                  type: 'T-cells circle',
                  description: 'potential_moa>slide_moa>T-cells button'
               };
               break;
            case 'b-cells':
               tracking = {
                  id: 'button',
                  type: 'B-cells circle',
                  description: 'potential_moa>slide_moa>B-cells button'
               };
               break;
            case 'cykotines':
               tracking = {
                  id: 'button',
                  type: 'Cytokines circle',
                  description: 'potential_moa>slide_moa>cytokines button'
               };
               break;
            case 'macrophages':
               tracking = {
                  id: 'button',
                  type: 'Macrophages circle',
                  description: 'potential_moa>slide_moa>macrophages button'
               };
               break;
            case 'd-cells':
               tracking = {
                  id: 'button',
                  type: 'Dendritic cells circle',
                  description: 'potential_moa>slide_moa>dendritic cells button'
               };
               break;
            case 'osteoclasts':
               tracking = {
                  id: 'button',
                  type: 'Osteoclasts circle',
                  description: 'potential_moa>slide_moa>osteoclasts button'
               };
               break;
               case 'monocytes':
                  tracking = {
                     id: 'button',
                     type: 'Monocytes circle',
                     description: 'potential_moa>slide_moa>monocytes button'
                  };
                  break;
               case 'fibroblasts':
                  tracking = {
                     id: 'button',
                     type: 'Fibroblasts circle',
                     description: 'potential_moa>slide_moa>fibroblasts button'
                  };
                  break;
               case 'epithelial':
                  tracking = {
                     id: 'button',
                     type: 'Fibroblasts circle',
                     description: 'potential_moa>slide_moa>epithelial button'
                  };
                     break;
            default:
               break;
         }
         veevaUtils.trackEvent(tracking, () => {});
      });

		closeModule.on(touchclick, function(e) {
			let module = $(e.target).parent();
			mainContent.removeClass('show-blur');
         module.removeClass('open');
         const tracking = {
            id: 'button',
            type: 'Cell close button',
            description: 'potential_moa>slide_moa>cell close button'
         };
         veevaUtils.trackEvent(tracking, () => {});
		});


      dCells.on(touchclick, (e) => {
         const dCell = $(e.target).data('target');
         let tracking = {};

         switch (dCell) {
            case 't-cells':
               tracking = {
                  id: 'button',
                  type: 'T-cells circle',
                  description: 'potential_moa>slide_moa>T-cells button'
               };
               break;
            case 'b-cells':
               tracking = {
                  id: 'button',
                  type: 'B-cells circle',
                  description: 'potential_moa>slide_moa>B-cells button'
               };
               break;
            case 'cykotines':
               tracking = {
                  id: 'button',
                  type: 'Cytokines circle',
                  description: 'potential_moa>slide_moa>cytokines button'
               };
               break;
            case 'macrophages':
               tracking = {
                  id: 'button',
                  type: 'Macrophages circle',
                  description: 'potential_moa>slide_moa>macrophages button'
               };
               break;
            case 'd-cells':
               tracking = {
                  id: 'button',
                  type: 'Dendritic cells circle',
                  description: 'potential_moa>slide_moa>dendritic cells button'
               };
               break;
            default:
               break;
         }
         veevaUtils.trackEvent(tracking, () => {});
      });

	}

	//----- handlers ------//


	//----- utils ------//

}

var slide = new Slide();

});
