'use strict';
import {
   closePopUps
} from './popup';
const referencesContainer = $('.references'),
   header = $('header'),
   btn = $('.reference-btn'),
   menu = header.find('.menu'),
   menuItems = header.find('.menu-items'),
   menuOverlay = header.find('.menu-overlay'),
   mainContent = $('.slide > div.content'),
   overlay = $('.reference-overlay'),
   subMenu = $('.sub-menu'),
   touchclick =
   'ontouchend' in document.documentElement ?
   'touchend' :
   window.navigator.pointerEnabled ?
   'pointerup' :
   'click';

export default function attachListeners() {
   const handleReference = () => {
      menu.removeClass('opened');
      menuItems.removeClass('opened');
      menuOverlay.removeClass('show');
      referencesContainer.toggleClass('expanded');
      mainContent.toggleClass('show-blur');
      subMenu.toggleClass('show-blur');
      btn.toggleClass('hide');
   };
   btn.on(touchclick, (e) => {
      closePopUps();
      handleReference();

      const target = $(e.target).parent().attr('id');
      let tracking = {};

      switch (target) {
         case 'rheum_hcp_iva_mallinckrodt_commitment':
            tracking = {
               id: 'button',
               type: 'MNK commitment reference tab',
               description: 'mnk_commitment_rheum>slide_introduction>reference tab open'
            };
            break;
         default:
            break;
      }

      veevaUtils.trackEvent(tracking, () => {});
   });
   overlay.on(touchclick, () => {
      handleReference();
   });
}
