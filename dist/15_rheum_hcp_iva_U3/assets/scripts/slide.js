"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}$(function(){var t,n,e,a,i=function o(){_classCallCheck(this,o),t=$("#rheum_hcp_iva_U3_15 .content"),e=t.find("a.clickArea1_10"),a=t.find("a.clickArea4_10"),n="ontouchend"in document.documentElement?"touchend":window.navigator.pointerEnabled?"pointerup":"click",e.on(n,function(t){var n={id:"button",type:"",description:""};veevaUtils.gotoSlide($(t.target).data("target"),n)}),a.on(n,function(t){var n={id:"button",type:"",description:""};veevaUtils.gotoSlide($(t.target).data("target"),n)})};new i});