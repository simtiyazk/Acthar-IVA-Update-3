"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}$(function(){var t=function e(){_classCallCheck(this,e);var t=$("#rheum_hcp_iva_U3_4"),o=t.find(".module-open"),i=t.find(".module-close"),a=t.find(".interactive-module"),c=t.find(".content"),n="ontouchend"in document.documentElement?"touchend":window.navigator.pointerEnabled?"pointerup":"click",s=t.find(".d-cells a");o.on(n,function(t){var e=$("#"+$(t.target).data("target"));c.addClass("show-blur"),a.removeClass("open"),e.addClass("open");var o={},i=$(t.target).data("target");switch(i){case"t-cells":o={id:"button",type:"T-cells circle",description:"potential_moa>slide_moa>T-cells button"};break;case"b-cells":o={id:"button",type:"B-cells circle",description:"potential_moa>slide_moa>B-cells button"};break;case"cykotines":o={id:"button",type:"Cytokines circle",description:"potential_moa>slide_moa>cytokines button"};break;case"macrophages":o={id:"button",type:"Macrophages circle",description:"potential_moa>slide_moa>macrophages button"};break;case"d-cells":o={id:"button",type:"Dendritic cells circle",description:"potential_moa>slide_moa>dendritic cells button"};break;case"osteoclasts":o={id:"button",type:"Osteoclasts circle",description:"potential_moa>slide_moa>osteoclasts button"};break;case"monocytes":o={id:"button",type:"Monocytes circle",description:"potential_moa>slide_moa>monocytes button"};break;case"fibroblasts":o={id:"button",type:"Fibroblasts circle",description:"potential_moa>slide_moa>fibroblasts button"};break;case"epithelial":o={id:"button",type:"Fibroblasts circle",description:"potential_moa>slide_moa>epithelial button"}}veevaUtils.trackEvent(o,function(){})}),i.on(n,function(t){var e=$(t.target).parent();c.removeClass("show-blur"),e.removeClass("open");var o={id:"button",type:"Cell close button",description:"potential_moa>slide_moa>cell close button"};veevaUtils.trackEvent(o,function(){})}),s.on(n,function(t){var e=$(t.target).data("target"),o={};switch(e){case"t-cells":o={id:"button",type:"T-cells circle",description:"potential_moa>slide_moa>T-cells button"};break;case"b-cells":o={id:"button",type:"B-cells circle",description:"potential_moa>slide_moa>B-cells button"};break;case"cykotines":o={id:"button",type:"Cytokines circle",description:"potential_moa>slide_moa>cytokines button"};break;case"macrophages":o={id:"button",type:"Macrophages circle",description:"potential_moa>slide_moa>macrophages button"};break;case"d-cells":o={id:"button",type:"Dendritic cells circle",description:"potential_moa>slide_moa>dendritic cells button"}}veevaUtils.trackEvent(o,function(){})})};new t});