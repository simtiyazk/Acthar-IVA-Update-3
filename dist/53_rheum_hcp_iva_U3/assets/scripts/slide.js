"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}$(function(){var t,n,e,a,i=function c(){_classCallCheck(this,c),t=$("#rheum_hcp_iva_U3_53 .content"),e=t.find("a.clickArea1"),a=t.find("a.clickArea2"),n="ontouchend"in document.documentElement?"touchend":window.navigator.pointerEnabled?"pointerup":"click",e.on(n,function(t){var n={id:"",type:"",description:""};veevaUtils.gotoSlide($(t.target).data("target"),n)}),a.on(n,function(t){var n={id:"",type:"",description:""};veevaUtils.gotoSlide($(t.target).data("target"),n)})};new i});