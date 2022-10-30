'use strict';

import { closePopUps } from './popup';
const headerContainer = $('header'),
   referencesContainer = $('.references'),
   referenceBtn = $('.reference-btn'),
   menu = headerContainer.find('.menu'),
   menuItems = headerContainer.find('.menu-items'),
   menuOverlay = headerContainer.find('.menu-overlay'),
   items = menuItems.find('a'),
   hamburguer = headerContainer.find('.hamburguer'),
   mainContent = $('.slide > div.content'),
   piButton = headerContainer.find('.pi-button'),
   logoButton = headerContainer.find('.Logo-button'),
   tab = headerContainer.find('.tabs .tab'),
   subMenu = $('.sub-menu'),
   touchclick =
      'ontouchend' in document.documentElement
         ? 'touchend'
         : window.navigator.pointerEnabled
         ? 'pointerup'
         : 'click',
   touchclick1 =
      'tap' in document.documentElement
         ? 'tap'
         : window.navigator.pointerEnabled
         ? 'pointerup'
         : 'click';
export default function header() {

   const toggleMenuControls = () => {
      if (referencesContainer.hasClass('expanded')) {
         referencesContainer.removeClass('expanded');
         mainContent.removeClass('show-blur');
         referenceBtn.removeClass('hide');
         subMenu.removeClass('show-blur');
      }
      closePopUps();
      menu.toggleClass('opened');
      menuItems.toggleClass('opened');
      menuOverlay.toggleClass('show');
      mainContent.toggleClass('show-blur');
      subMenu.toggleClass('show-blur');
   };

   hamburguer.on(touchclick, () => {
      toggleMenuControls();
   });

   menuOverlay.on(touchclick, () => {
      toggleMenuControls();
   });

   piButton.on(touchclick, (e) => {
      const tracking = {
         id: 'button',
         type: 'global header prescribing information button',
         description: 'global_header>prescribing_information_tab>pdf'
      };
      veevaUtils.gotoSlide($(e.target).data('target'), tracking);
   });
   logoButton.on(touchclick, (e) => {
      const tracking = {
         id: 'button',
         type: '',
         description: ''
      };
      veevaUtils.gotoSlide($(e.target).data('target'), tracking);
   });

   items.on(touchclick1, (e) => {
      const slide = $(e.target).data('target');
      let tracking = {};
      veevaUtils.gotoSlide($(e.target).data('target'), tracking);
   });

   tab.on(touchclick, (e) => {
      const slide = $(e.target).data('target');
      let tracking = {
         id: 'button',
         type: 'DM/PM sub menu study design',
         description: 'dm_pm_global_sub_nav>slide_dm_pm_studies>study design sub menu tab'
      };
      veevaUtils.gotoSlide($(e.target).data('target'), tracking);
   });
}
