/**
* Loading plugin for jQuery
* version: v1.0.6
*
* Small helper to give the user a visual feedback that something is happening
* when fetching/posting data
*
* USAGE:
* - global overlay:                     $.isLoading();
* - use javascript:                     $( selector ).isLoading();
* - On non-form elements:               $("div").isLoading({ text: "Loading", position:'inside'});
* - remove the loading element:         $( selector ).isLoading( "hide" );
*
* @author Laurent Blanes <laurent.blanes@gmail.com>
* ---
* Copyright 2013, Laurent Blanes ( https://github.com/hekigan/is-loading )
*
* The MIT License (MIT)
*
* Copyright (c) 2013 Laurent Blanes
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/!function(e,t){function i(t,i){this.element=t,this.options=e.extend({},n,i),this._defaults=n,this._name=o,this._loader=null,this.init()}function s(){e[o]||(e.isLoading=function(t){e("body").isLoading(t)})}var o="isLoading",n={position:"right",text:"","class":"glyphicon glyphicon-refresh",transparency:.5,tpl:'<span class="isloading-wrapper %wrapper%">%text%<i class="%class% glyphicon-spin"></i></span>',disableSource:!0,disableOthers:[]};i.prototype={init:function(){e(this.element).is("body")&&(this.options.position="overlay"),this.show()},show:function(){var i=this,s=i.options.tpl.replace("%wrapper%"," isloading-show  isloading-"+i.options.position);switch(s=s.replace("%class%",i.options["class"]),s=s.replace("%text%",""!==i.options.text?i.options.text+" ":""),i._loader=e(s),e(i.element).is("input, textarea")&&!0===i.options.disableSource?e(i.element).attr("disabled","disabled"):!0===i.options.disableSource&&e(i.element).addClass("disabled"),i.options.position){case"inside":e(i.element).html(i._loader);break;case"overlay":var o=null;if(e(i.element).is("body"))o=e('<div class="isloading-overlay" style="position:fixed; left:0; top:0; z-index: 10000; background: rgba(0,0,0,'+i.options.transparency+"); width: 100%; height: "+e(t).height()+'px;" />'),e("body").prepend(o),e(t).on("resize",function(){o.height(e(t).height()+"px"),i._loader.css({top:e(t).height()/2-i._loader.outerHeight()/2+"px"})});else{var n=e(i.element).css("position"),a={},l=e(i.element).outerHeight()+"px",r="100%";a="relative"===n||"absolute"===n?{top:0,left:0}:e(i.element).position(),o=e('<div class="isloading-overlay" style="position:absolute; top: '+a.top+"px; left: "+a.left+"px; z-index: 10000; background: rgba(0,0,0,"+i.options.transparency+"); width: "+r+"; height: "+l+';" />'),e(i.element).prepend(o),e(t).on("resize",function(){o.height(e(i.element).outerHeight()+"px"),i._loader.css({top:o.outerHeight()/2-i._loader.outerHeight()/2+"px"})})}o.html(i._loader),i._loader.css({top:o.outerHeight()/2-i._loader.outerHeight()/2+"px"});break;default:e(i.element).after(i._loader)}i.disableOthers()},hide:function(){"overlay"===this.options.position?e(this.element).find(".isloading-overlay").first().remove():(e(this._loader).remove(),e(this.element).text(e(this.element).attr("data-isloading-label"))),e(this.element).removeAttr("disabled").removeClass("disabled"),this.enableOthers()},disableOthers:function(){e.each(this.options.disableOthers,function(t,i){var s=e(i);s.is("button, input, textarea")?s.attr("disabled","disabled"):s.addClass("disabled")})},enableOthers:function(){e.each(this.options.disableOthers,function(t,i){var s=e(i);s.is("button, input, textarea")?s.removeAttr("disabled"):s.removeClass("disabled")})}},e.fn[o]=function(t){return this.each(function(){if(t&&"hide"!==t||!e.data(this,"plugin_"+o))e.data(this,"plugin_"+o,new i(this,t));else{var s=e.data(this,"plugin_"+o);"hide"===t?s.hide():s.show()}})},s()}(jQuery,window,document);
