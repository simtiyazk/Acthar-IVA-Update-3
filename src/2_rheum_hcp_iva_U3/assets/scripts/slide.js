'use strict';

$(() => {
   //private
   var el, touchclick;

   class Slide {
      constructor() {
         //set vars
         el = $('#rheum_hcp_iva_U3_2');
         touchclick =
            'ontouchend' in document.documentElement
               ? 'touchend'
               : window.navigator.pointerEnabled
               ? 'pointerup'
               : 'click';

         //initial setup

         //listeners
      }

      //----- handlers ------//

      //----- utils ------//
   }

   var slide = new Slide();
});
