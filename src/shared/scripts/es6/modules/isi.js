'use strict';

import {
   closePopUps
} from './popup';

const headerContainer = $('header'),
   referencesContainer = $('.references'),
   menu = headerContainer.find('.menu'),
   menuItems = headerContainer.find('.menu-items'),
   mainContent = $('.slide > div.content'),
   isiContainer = $('.isi'),
   btn = isiContainer.find('.btn-toggle'),
   btnPi = isiContainer.find('.btn-pi'),
   touchclick =
   'ontouchend' in document.documentElement ?
   'touchend' :
   window.navigator.pointerEnabled ?
   'pointerup' :
   'click';

export default function isi() {
   const trackingCollapse = {
      id: 'button',
      type: 'collapse ISI',
      description: 'global_isi_tray>ISI_tray>collapse button'
   };
   const trackingExpanded = {
      id: 'button',
      type: 'expand ISI',
      description: 'global_isi_tray>ISI_tray>expand button'
   };

   btnPi.on(touchclick, (e) => {
      e.preventDefault();
      const tracking = {
         id: 'button',
         type: 'prescribing information link',
         description: 'global_isi_tray>ISI_tray>PI link'
      };
      veevaUtils.gotoSlide($(e.target).data('target'), tracking);
   });
   btn.on(touchclick, () => {
      if (referencesContainer.hasClass('expanded')) {
         // referencesContainer.removeClass('expanded');
      }
      if (menu.hasClass('opened')) {
         menu.removeClass('opened');
         menuItems.removeClass('opened');
      }
      closePopUps();
      // mainContent.removeClass('show-blur');
      if (isiContainer.hasClass('expanded')) {
         veevaUtils.trackEvent(trackingCollapse, () => {});
      } else {
         veevaUtils.trackEvent(trackingExpanded, () => {});
      }
      isiContainer.toggleClass('expanded');

      var iScroll = new IScroll('#isi-expanded-container', {
         mouseWheel: true,
         scrollbars: true
      });
   });
}
