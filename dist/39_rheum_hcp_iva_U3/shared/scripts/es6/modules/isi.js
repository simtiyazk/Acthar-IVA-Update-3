"use strict";function isi(){var e={id:"button",type:"collapse ISI",description:"global_isi_tray>ISI_tray>collapse button"},n={id:"button",type:"expand ISI",description:"global_isi_tray>ISI_tray>expand button"};btnPi.on(touchclick,function(e){e.preventDefault();var n={id:"button",type:"prescribing information link",description:"global_isi_tray>ISI_tray>PI link"};veevaUtils.gotoSlide($(e.target).data("target"),n)}),btn.on(touchclick,function(){referencesContainer.hasClass("expanded"),menu.hasClass("opened")&&(menu.removeClass("opened"),menuItems.removeClass("opened")),(0,_popup.closePopUps)(),isiContainer.hasClass("expanded")?veevaUtils.trackEvent(e,function(){}):veevaUtils.trackEvent(n,function(){}),isiContainer.toggleClass("expanded");new IScroll("#isi-expanded-container",{mouseWheel:!0,scrollbars:!0})})}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=isi;var _popup=require("./popup"),headerContainer=$("header"),referencesContainer=$(".references"),menu=headerContainer.find(".menu"),menuItems=headerContainer.find(".menu-items"),mainContent=$(".slide > div.content"),isiContainer=$(".isi"),btn=isiContainer.find(".btn-toggle"),btnPi=isiContainer.find(".btn-pi"),touchclick="ontouchend"in document.documentElement?"touchend":window.navigator.pointerEnabled?"pointerup":"click";