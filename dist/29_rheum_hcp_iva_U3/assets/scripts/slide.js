"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}$(function(){var t,e,n,i,a,o,d=function c(){_classCallCheck(this,c),t=$("#rheum_hcp_iva_U3_29 .content"),n=t.find("a.study1-btn"),i=t.find("a.study2-btn"),a=t.find("a.clickArea1_10"),o=t.find("a.clickArea4_10"),e="ontouchend"in document.documentElement?"touchend":window.navigator.pointerEnabled?"pointerup":"click",n.on(e,function(t){var e={id:"button",type:"MMT (Study1)",description:"rheum_scheduled_relief>slide_home>dm/pm section"};veevaUtils.gotoSlide($(t.target).data("target"),e)}),i.on(e,function(t){var e={id:"button",type:"MMT (Study1)",description:"rheum_scheduled_relief>slide_home>SLE section"};veevaUtils.gotoSlide($(t.target).data("target"),e)}),a.on(e,function(t){var e={id:"button",type:"",description:""};veevaUtils.gotoSlide($(t.target).data("target"),e)}),o.on(e,function(t){var e={id:"button",type:"",description:""};veevaUtils.gotoSlide($(t.target).data("target"),e)})};new d});