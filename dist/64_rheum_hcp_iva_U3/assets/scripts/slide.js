"use strict";function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}$(function(){var n,t,e,a=function c(){_classCallCheck(this,c),n=$("#rheum_hcp_iva_U3_64 .content"),e=n.find("a.clickArea1_61"),t="ontouchend"in document.documentElement?"touchend":window.navigator.pointerEnabled?"pointerup":"click",e.on(t,function(n){var t={id:"button",type:"",description:""};veevaUtils.gotoSlide($(n.target).data("target"),t)})};new a});