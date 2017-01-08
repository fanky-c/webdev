<<<<<<< HEAD
/*! jQuery v@1.8.0 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bX(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bV.length;while(e--){b=bV[e]+c;if(b in a)return b}return d}function bY(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function bZ(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bY(c)&&(e[f]=p._data(c,"olddisplay",cb(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b$(a,b,c){var d=bO.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function b_(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bU[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bU[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bU[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bU[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bU[e]+"Width"))||0));return f}function ca(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bP.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+b_(a,b,c||(f?"border":"content"),e)+"px"}function cb(a){if(bR[a])return bR[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bR[a]=c,c}function ch(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||cd.test(a)?d(a,e):ch(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ch(a+"["+e+"]",b[e],c,d);else d(a,b)}function cy(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cz(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cu;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cz(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cz(a,c,d,e,"*",g)),h}function cA(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cB(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cC(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cK(){try{return new a.XMLHttpRequest}catch(b){}}function cL(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cT(){return setTimeout(function(){cM=b},0),cM=p.now()}function cU(a,b){p.each(b,function(b,c){var d=(cS[b]||[]).concat(cS["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cV(a,b,c){var d,e=0,f=0,g=cR.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cM||cT(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cM||cT(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cW(k,j.opts.specialEasing);for(;e<g;e++){d=cR[e].call(j,a,k,j.opts);if(d)return d}return cU(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cW(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cX(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bY(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cb(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cO.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cY(a,b,c,d,e){return new cY.prototype.init(a,b,c,d,e)}function cZ(a,b){var c,d={height:a},e=0;for(;e<4;e+=2-b)c=bU[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function c_(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=r.test(" ")?/^[\s\xA0]+|[\s\xA0]+$/g:/^\s+|\s+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.0",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":a.toString().replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||f.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete"||e.readyState!=="loading"&&e.addEventListener)setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){p.isFunction(c)&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return typeof a=="object"?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length||!d)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/^(?:\{.*\}|\[.*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||++p.uuid:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")===0&&(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.shift(),e=p._queueHooks(a,b),f=function(){p.dequeue(a,b)};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),delete e.stop,d.call(a,f,e)),!c.length&&e&&e.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)(d=p._data(g[h],a+"queueHooks"))&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>-1)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=[].slice.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click")){g=p(this),g.context=this;for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){i={},k=[],g[0]=f;for(d=0;d<q;d++)l=o[d],m=l.selector,i[m]===b&&(i[m]=g.is(m)),i[m]&&k.push(l);k.length&&u.push({elem:f,matches:k})}}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){j=u[d],c.currentTarget=j.elem;for(e=0;e<j.matches.length&&!c.isImmediatePropagationStopped();e++){l=j.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,h=((p.event.special[l.origType]||{}).handle||l.handler).apply(j.elem,r),h!==b&&(c.result=h,h===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{ready:{setup:p.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bd(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)Z(a,b[e],c,d)}function be(a,b,c,d,e,f){var g,h=$.setFilters[b.toLowerCase()];return h||Z.error(b),(a||!(g=e))&&bd(a||"*",d,g=[],e),g.length>0?h(g,c,f):[]}function bf(a,c,d,e,f){var g,h,i,j,k,l,m,n,p=0,q=f.length,s=L.POS,t=new RegExp("^"+s.source+"(?!"+r+")","i"),u=function(){var a=1,c=arguments.length-2;for(;a<c;a++)arguments[a]===b&&(g[a]=b)};for(;p<q;p++){s.exec(""),a=f[p],j=[],i=0,k=e;while(g=s.exec(a)){n=s.lastIndex=g.index+g[0].length;if(n>i){m=a.slice(i,g.index),i=n,l=[c],B.test(m)&&(k&&(l=k),k=e);if(h=H.test(m))m=m.slice(0,-5).replace(B,"$&*");g.length>1&&g[0].replace(t,u),k=be(m,g[1],g[2],l,k,h)}}k?(j=j.concat(k),(m=a.slice(i))&&m!==")"?B.test(m)?bd(m,j,d,e):Z(m,c,d,e?e.concat(k):k):o.apply(d,j)):Z(a,c,d,e)}return q===1?d:Z.uniqueSort(d)}function bg(a,b,c){var d,e,f,g=[],i=0,j=D.exec(a),k=!j.pop()&&!j.pop(),l=k&&a.match(C)||[""],m=$.preFilter,n=$.filter,o=!c&&b!==h;for(;(e=l[i])!=null&&k;i++){g.push(d=[]),o&&(e=" "+e);while(e){k=!1;if(j=B.exec(e))e=e.slice(j[0].length),k=d.push({part:j.pop().replace(A," "),captures:j});for(f in n)(j=L[f].exec(e))&&(!m[f]||(j=m[f](j,b,c)))&&(e=e.slice(j.shift().length),k=d.push({part:f,captures:j}));if(!k)break}}return k||Z.error(a),g}function bh(a,b,e){var f=b.dir,g=m++;return a||(a=function(a){return a===e}),b.first?function(b,c){while(b=b[f])if(b.nodeType===1)return a(b,c)&&b}:function(b,e){var h,i=g+"."+d,j=i+"."+c;while(b=b[f])if(b.nodeType===1){if((h=b[q])===j)return b.sizset;if(typeof h=="string"&&h.indexOf(i)===0){if(b.sizset)return b}else{b[q]=j;if(a(b,e))return b.sizset=!0,b;b.sizset=!1}}}}function bi(a,b){return a?function(c,d){var e=b(c,d);return e&&a(e===!0?c:e,d)}:b}function bj(a,b,c){var d,e,f=0;for(;d=a[f];f++)$.relative[d.part]?e=bh(e,$.relative[d.part],b):(d.captures.push(b,c),e=bi(e,$.filter[d.part].apply(null,d.captures)));return e}function bk(a){return function(b,c){var d,e=0;for(;d=a[e];e++)if(d(b,c))return!0;return!1}}var c,d,e,f,g,h=a.document,i=h.documentElement,j="undefined",k=!1,l=!0,m=0,n=[].slice,o=[].push,q=("sizcache"+Math.random()).replace(".",""),r="[\\x20\\t\\r\\n\\f]",s="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",t=s.replace("w","w#"),u="([*^$|!~]?=)",v="\\["+r+"*("+s+")"+r+"*(?:"+u+r+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+t+")|)|)"+r+"*\\]",w=":("+s+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",x=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",y=r+"*([\\x20\\t\\r\\n\\f>+~])"+r+"*",z="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+v+"|"+w.replace(2,7)+"|[^\\\\(),])+",A=new RegExp("^"+r+"+|((?:^|[^\\\\])(?:\\\\.)*)"+r+"+$","g"),B=new RegExp("^"+y),C=new RegExp(z+"?(?="+r+"*,|$)","g"),D=new RegExp("^(?:(?!,)(?:(?:^|,)"+r+"*"+z+")*?|"+r+"*(.*?))(\\)|$)"),E=new RegExp(z.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+y,"g"),F=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,G=/[\x20\t\r\n\f]*[+~]/,H=/:not\($/,I=/h\d/i,J=/input|select|textarea|button/i,K=/\\(?!\\)/g,L={ID:new RegExp("^#("+s+")"),CLASS:new RegExp("^\\.("+s+")"),NAME:new RegExp("^\\[name=['\"]?("+s+")['\"]?\\]"),TAG:new RegExp("^("+s.replace("[-","[-\\*")+")"),ATTR:new RegExp("^"+v),PSEUDO:new RegExp("^"+w),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+r+"*(even|odd|(([+-]|)(\\d*)n|)"+r+"*(?:([+-]|)"+r+"*(\\d+)|))"+r+"*\\)|)","i"),POS:new RegExp(x,"ig"),needsContext:new RegExp("^"+r+"*[>+~]|"+x,"i")},M={},N=[],O={},P=[],Q=function(a){return a.sizzleFilter=!0,a},R=function(a){return function(b){return b.nodeName.toLowerCase()==="input"&&b.type===a}},S=function(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}},T=function(a){var b=!1,c=h.createElement("div");try{b=a(c)}catch(d){}return c=null,b},U=T(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),V=T(function(a){a.id=q+0,a.innerHTML="<a name='"+q+"'></a><div name='"+q+"'></div>",i.insertBefore(a,i.firstChild);var b=h.getElementsByName&&h.getElementsByName(q).length===2+h.getElementsByName(q+0).length;return g=!h.getElementById(q),i.removeChild(a),b}),W=T(function(a){return a.appendChild(h.createComment("")),a.getElementsByTagName("*").length===0}),X=T(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==j&&a.firstChild.getAttribute("href")==="#"}),Y=T(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||a.getElementsByClassName("e").length===0?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length!==1)}),Z=function(a,b,c,d){c=c||[],b=b||h;var e,f,g,i,j=b.nodeType;if(j!==1&&j!==9)return[];if(!a||typeof a!="string")return c;g=ba(b);if(!g&&!d)if(e=F.exec(a))if(i=e[1]){if(j===9){f=b.getElementById(i);if(!f||!f.parentNode)return c;if(f.id===i)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(i))&&bb(b,f)&&f.id===i)return c.push(f),c}else{if(e[2])return o.apply(c,n.call(b.getElementsByTagName(a),0)),c;if((i=e[3])&&Y&&b.getElementsByClassName)return o.apply(c,n.call(b.getElementsByClassName(i),0)),c}return bm(a,b,c,d,g)},$=Z.selectors={cacheLength:50,match:L,order:["ID","TAG"],attrHandle:{},createPseudo:Q,find:{ID:g?function(a,b,c){if(typeof b.getElementById!==j&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==j&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==j&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:W?function(a,b){if(typeof b.getElementsByTagName!==j)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(K,""),a[3]=(a[4]||a[5]||"").replace(K,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||Z.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&Z.error(a[0]),a},PSEUDO:function(a){var b,c=a[4];return L.CHILD.test(a[0])?null:(c&&(b=D.exec(c))&&b.pop()&&(a[0]=a[0].slice(0,b[0].length-c.length-1),c=b[0].slice(0,-1)),a.splice(2,3,c||a[3]),a)}},filter:{ID:g?function(a){return a=a.replace(K,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(K,""),function(b){var c=typeof b.getAttributeNode!==j&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(K,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=M[a];return b||(b=M[a]=new RegExp("(^|"+r+")"+a+"("+r+"|$)"),N.push(a),N.length>$.cacheLength&&delete M[N.shift()]),function(a){return b.test(a.className||typeof a.getAttribute!==j&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return b?function(d){var e=Z.attr(d,a),f=e+"";if(e==null)return b==="!=";switch(b){case"=":return f===c;case"!=":return f!==c;case"^=":return c&&f.indexOf(c)===0;case"*=":return c&&f.indexOf(c)>-1;case"$=":return c&&f.substr(f.length-c.length)===c;case"~=":return(" "+f+" ").indexOf(c)>-1;case"|=":return f===c||f.substr(0,c.length+1)===c+"-"}}:function(b){return Z.attr(b,a)!=null}},CHILD:function(a,b,c,d){if(a==="nth"){var e=m++;return function(a){var b,f,g=0,h=a;if(c===1&&d===0)return!0;b=a.parentNode;if(b&&(b[q]!==e||!a.sizset)){for(h=b.firstChild;h;h=h.nextSibling)if(h.nodeType===1){h.sizset=++g;if(h===a)break}b[q]=e}return f=a.sizset-d,c===0?f===0:f%c===0&&f/c>=0}}return function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b,c,d){var e=$.pseudos[a]||$.pseudos[a.toLowerCase()];return e||Z.error("unsupported pseudo: "+a),e.sizzleFilter?e(b,c,d):e}},pseudos:{not:Q(function(a,b,c){var d=bl(a.replace(A,"$1"),b,c);return function(a){return!d(a)}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!$.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},contains:Q(function(a){return function(b){return(b.textContent||b.innerText||bc(b)).indexOf(a)>-1}}),has:Q(function(a){return function(b){return Z(a,b).length>0}}),header:function(a){return I.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:R("radio"),checkbox:R("checkbox"),file:R("file"),password:R("password"),image:R("image"),submit:S("submit"),reset:S("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return J.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b,c){return c?a.slice(1):[a[0]]},last:function(a,b,c){var d=a.pop();return c?a:[d]},even:function(a,b,c){var d=[],e=c?1:0,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},odd:function(a,b,c){var d=[],e=c?0:1,f=a.length;for(;e<f;e=e+2)d.push(a[e]);return d},lt:function(a,b,c){return c?a.slice(+b):a.slice(0,+b)},gt:function(a,b,c){return c?a.slice(0,+b+1):a.slice(+b+1)},eq:function(a,b,c){var d=a.splice(+b,1);return c?a:d}}};$.setFilters.nth=$.setFilters.eq,$.filters=$.pseudos,X||($.attrHandle={href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}}),V&&($.order.push("NAME"),$.find.NAME=function(a,b){if(typeof b.getElementsByName!==j)return b.getElementsByName(a)}),Y&&($.order.splice(1,0,"CLASS"),$.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!==j&&!c)return b.getElementsByClassName(a)});try{n.call(i.childNodes,0)[0].nodeType}catch(_){n=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}var ba=Z.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},bb=Z.contains=i.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:i.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc=Z.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=bc(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=bc(b);return c};Z.attr=function(a,b){var c,d=ba(a);return d||(b=b.toLowerCase()),$.attrHandle[b]?$.attrHandle[b](a):U||d?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},Z.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},[0,0].sort(function(){return l=0}),i.compareDocumentPosition?e=function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:(e=function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],g=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return f(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)g.unshift(j),j=j.parentNode;c=e.length,d=g.length;for(var l=0;l<c&&l<d;l++)if(e[l]!==g[l])return f(e[l],g[l]);return l===c?f(a,g[l],-1):f(e[l],b,1)},f=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),Z.uniqueSort=function(a){var b,c=1;if(e){k=l,a.sort(e);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1)}return a};var bl=Z.compile=function(a,b,c){var d,e,f,g=O[a];if(g&&g.context===b)return g;e=bg(a,b,c);for(f=0;d=e[f];f++)e[f]=bj(d,b,c);return g=O[a]=bk(e),g.context=b,g.runs=g.dirruns=0,P.push(a),P.length>$.cacheLength&&delete O[P.shift()],g};Z.matches=function(a,b){return Z(a,null,null,b)},Z.matchesSelector=function(a,b){return Z(b,null,null,[a]).length>0};var bm=function(a,b,e,f,g){a=a.replace(A,"$1");var h,i,j,k,l,m,p,q,r,s=a.match(C),t=a.match(E),u=b.nodeType;if(L.POS.test(a))return bf(a,b,e,f,s);if(f)h=n.call(f,0);else if(s&&s.length===1){if(t.length>1&&u===9&&!g&&(s=L.ID.exec(t[0]))){b=$.find.ID(s[1],b,g)[0];if(!b)return e;a=a.slice(t.shift().length)}q=(s=G.exec(t[0]))&&!s.index&&b.parentNode||b,r=t.pop(),m=r.split(":not")[0];for(j=0,k=$.order.length;j<k;j++){p=$.order[j];if(s=L[p].exec(m)){h=$.find[p]((s[1]||"").replace(K,""),q,g);if(h==null)continue;m===r&&(a=a.slice(0,a.length-r.length)+m.replace(L[p],""),a||o.apply(e,n.call(h,0)));break}}}if(a){i=bl(a,b,g),d=i.dirruns++,h==null&&(h=$.find.TAG("*",G.test(a)&&b.parentNode||b));for(j=0;l=h[j];j++)c=i.runs++,i(l,b)&&e.push(l)}return e};h.querySelectorAll&&function(){var a,b=bm,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[],f=[":active"],g=i.matchesSelector||i.mozMatchesSelector||i.webkitMatchesSelector||i.oMatchesSelector||i.msMatchesSelector;T(function(a){a.innerHTML="<select><option selected></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+r+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),T(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+r+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=e.length&&new RegExp(e.join("|")),bm=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a)))if(d.nodeType===9)try{return o.apply(f,n.call(d.querySelectorAll(a),0)),f}catch(i){}else if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){var j=d.getAttribute("id"),k=j||q,l=G.test(a)&&d.parentNode||d;j?k=k.replace(c,"\\$&"):d.setAttribute("id",k);try{return o.apply(f,n.call(l.querySelectorAll(a.replace(C,"[id='"+k+"'] $&")),0)),f}catch(i){}finally{j||d.removeAttribute("id")}}return b(a,d,f,g,h)},g&&(T(function(b){a=g.call(b,"div");try{g.call(b,"[test!='']:sizzle"),f.push($.match.PSEUDO)}catch(c){}}),f=new RegExp(f.join("|")),Z.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!ba(b)&&!f.test(c)&&(!e||!e.test(c)))try{var h=g.call(b,c);if(h||a||b.document&&b.document.nodeType!==11)return h}catch(i){}return Z(c,null,null,[b]).length>0})}(),Z.attr=p.attr,p.find=Z,p.expr=Z.selectors,p.expr[":"]=p.expr.pseudos,p.unique=Z.uniqueSort,p.text=Z.getText,p.isXMLDoc=Z.isXML,p.contains=Z.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=(c[0]||c).ownerDocument||c[0]||c,typeof c.createDocumentFragment=="undefined"&&(c=e),a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=0,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(g=b===e&&bA;(h=a[s])!=null;s++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{g=g||bk(b),l=l||g.appendChild(b.createElement("div")),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(f=n.length-1;f>=0;--f)p.nodeName(n[f],"tbody")&&!n[f].childNodes.length&&n[f].parentNode.removeChild(n[f])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l=g.lastChild}h.nodeType?t.push(h):t=p.merge(t,h)}l&&(g.removeChild(l),h=l=g=null);if(!p.support.appendChecked)for(s=0;(h=t[s])!=null;s++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(s=0;(h=t[s])!=null;s++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[s+1,0].concat(r)),s+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^margin/,bO=new RegExp("^("+q+")(.*)$","i"),bP=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bQ=new RegExp("^([-+])=("+q+")","i"),bR={},bS={position:"absolute",visibility:"hidden",display:"block"},bT={letterSpacing:0,fontWeight:400,lineHeight:1},bU=["Top","Right","Bottom","Left"],bV=["Webkit","O","Moz","ms"],bW=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return bZ(this,!0)},hide:function(){return bZ(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bW.apply(this,arguments):this.each(function(){(c?a:bY(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bX(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bQ.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bX(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bT&&(f=bT[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(a,b){var c,d,e,f,g=getComputedStyle(a,null),h=a.style;return g&&(c=g[b],c===""&&!p.contains(a.ownerDocument.documentElement,a)&&(c=p.style(a,b)),bP.test(c)&&bN.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=c,c=g.width,h.width=d,h.minWidth=e,h.maxWidth=f)),c}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bP.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0||bH(a,"display")!=="none"?ca(a,b,d):p.swap(a,bS,function(){return ca(a,b,d)})},set:function(a,c,d){return b$(a,c,d?b_(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bP.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bU[d]+b]=e[d]||e[d-2]||e[0];return f}},bN.test(a)||(p.cssHooks[a+b].set=b$)});var cc=/%20/g,cd=/\[\]$/,ce=/\r?\n/g,cf=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,cg=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||cg.test(this.nodeName)||cf.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(ce,"\r\n")}}):{name:b.name,value:c.replace(ce,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ch(d,a[d],c,f);return e.join("&").replace(cc,"+")};var ci,cj,ck=/#.*$/,cl=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cm=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,cn=/^(?:GET|HEAD)$/,co=/^\/\//,cp=/\?/,cq=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cr=/([?&])_=[^&]*/,cs=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,ct=p.fn.load,cu={},cv={},cw=["*/"]+["*"];try{ci=f.href}catch(cx){ci=e.createElement("a"),ci.href="",ci=ci.href}cj=cs.exec(ci.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&ct)return ct.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cq,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cA(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cA(a,b),a},ajaxSettings:{url:ci,isLocal:cm.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cw},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cy(cu),ajaxTransport:cy(cv),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cB(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cC(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=""+(c||y),k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cl.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(ck,"").replace(co,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=cs.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]==cj[1]&&i[2]==cj[2]&&(i[3]||(i[1]==="http:"?80:443))==(cj[3]||(cj[1]==="http:"?80:443)))),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cz(cu,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!cn.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cp.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cr,"$1_="+z);l.url=A+(A===l.url?(cp.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cw+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cz(cv,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cD=[],cE=/\?/,cF=/(=)\?(?=&|$)|\?\?/,cG=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cD.pop()||p.expando+"_"+cG++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cF.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cF.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cF,"$1"+f):m?c.data=i.replace(cF,"$1"+f):k&&(c.url+=(cE.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cD.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cH,cI=a.ActiveXObject?function(){for(var a in cH)cH[a](0,1)}:!1,cJ=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cK()||cL()}:cK,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cI&&delete cH[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cJ,cI&&(cH||(cH={},p(a).unload(cI)),cH[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cM,cN,cO=/^(?:toggle|show|hide)$/,cP=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cQ=/queueHooks$/,cR=[cX],cS={"*":[function(a,b){var c,d,e,f=this.createTween(a,b),g=cP.exec(b),h=f.cur(),i=+h||0,j=1;if(g){c=+g[2],d=g[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&i){i=p.css(f.elem,a,!0)||c||1;do e=j=j||".5",i=i/j,p.style(f.elem,a,i+d),j=f.cur()/h;while(j!==1&&j!==e)}f.unit=d,f.start=i,f.end=g[1]?i+(g[1]+1)*c:c}return f}]};p.Animation=p.extend(cV,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cS[c]=cS[c]||[],cS[c].unshift(b)},prefilter:function(a,b){b?cR.unshift(a):cR.push(a)}}),p.Tween=cY,cY.prototype={constructor:cY,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cY.propHooks[this.prop];return a&&a.get?a.get(this):cY.propHooks._default.get(this)},run:function(a){var b,c=cY.propHooks[this.prop];return this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration),this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cY.propHooks._default.set(this),this}},cY.prototype.init.prototype=cY.prototype,cY.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cY.propHooks.scrollTop=cY.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(cZ(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bY).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cV(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cQ.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:cZ("show"),slideUp:cZ("hide"),slideToggle:cZ("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cY.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cN&&(cN=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cN),cN=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c$=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j,k,l,m=this[0],n=m&&m.ownerDocument;if(!n)return;return(e=n.body)===m?p.offset.bodyOffset(m):(d=n.documentElement,p.contains(d,m)?(c=m.getBoundingClientRect(),f=c_(n),g=d.clientTop||e.clientTop||0,h=d.clientLeft||e.clientLeft||0,i=f.pageYOffset||d.scrollTop,j=f.pageXOffset||d.scrollLeft,k=c.top+i-g,l=c.left+j-h,{top:k,left:l}):{top:0,left:0})},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c$.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c$.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=c_(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
define("jQuery", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.$;
    };
}(this)));

/*!art-template - Template Engine | http://aui.github.com/artTemplate/*/
!function(){function a(a){return a.replace(t,"").replace(u,",").replace(v,"").replace(w,"").replace(x,"").split(y)}function b(a){return"'"+a.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function c(c,d){function e(a){return m+=a.split(/\n/).length-1,k&&(a=a.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),a&&(a=s[1]+b(a)+s[2]+"\n"),a}function f(b){var c=m;if(j?b=j(b,d):g&&(b=b.replace(/\n/g,function(){return m++,"$line="+m+";"})),0===b.indexOf("=")){var e=l&&!/^=[=#]/.test(b);if(b=b.replace(/^=[=#]?|[\s;]*$/g,""),e){var f=b.replace(/\s*\([^\)]+\)/,"");n[f]||/^(include|print)$/.test(f)||(b="$escape("+b+")")}else b="$string("+b+")";b=s[1]+b+s[2]}return g&&(b="$line="+c+";"+b),r(a(b),function(a){if(a&&!p[a]){var b;b="print"===a?u:"include"===a?v:n[a]?"$utils."+a:o[a]?"$helpers."+a:"$data."+a,w+=a+"="+b+",",p[a]=!0}}),b+"\n"}var g=d.debug,h=d.openTag,i=d.closeTag,j=d.parser,k=d.compress,l=d.escape,m=1,p={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},q="".trim,s=q?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],t=q?"$out+=text;return $out;":"$out.push(text);",u="function(){var text=''.concat.apply('',arguments);"+t+"}",v="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+t+"}",w="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(g?"$line=0,":""),x=s[0],y="return new String("+s[3]+");";r(c.split(h),function(a){a=a.split(i);var b=a[0],c=a[1];1===a.length?x+=e(b):(x+=f(b),c&&(x+=e(c)))});var z=w+x+y;g&&(z="try{"+z+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+b(c)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var A=new Function("$data","$filename",z);return A.prototype=n,A}catch(B){throw B.temp="function anonymous($data,$filename) {"+z+"}",B}}var d=function(a,b){return"string"==typeof b?q(b,{filename:a}):g(a,b)};d.version="3.0.0",d.config=function(a,b){e[a]=b};var e=d.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},f=d.cache={};d.render=function(a,b){return q(a,b)};var g=d.renderFile=function(a,b){var c=d.get(a)||p({filename:a,name:"Render Error",message:"Template not found"});return b?c(b):c};d.get=function(a){var b;if(f[a])b=f[a];else if("object"==typeof document){var c=document.getElementById(a);if(c){var d=(c.value||c.innerHTML).replace(/^\s*|\s*$/g,"");b=q(d,{filename:a})}}return b};var h=function(a,b){return"string"!=typeof a&&(b=typeof a,"number"===b?a+="":a="function"===b?h(a.call(a)):""),a},i={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},j=function(a){return i[a]},k=function(a){return h(a).replace(/&(?![\w#]+;)|[<>"']/g,j)},l=Array.isArray||function(a){return"[object Array]"==={}.toString.call(a)},m=function(a,b){var c,d;if(l(a))for(c=0,d=a.length;d>c;c++)b.call(a,a[c],c,a);else for(c in a)b.call(a,a[c],c)},n=d.utils={$helpers:{},$include:g,$string:h,$escape:k,$each:m};d.helper=function(a,b){o[a]=b};var o=d.helpers=n.$helpers;d.onerror=function(a){var b="Template Error\n\n";for(var c in a)b+="<"+c+">\n"+a[c]+"\n\n";"object"==typeof console&&console.error(b)};var p=function(a){return d.onerror(a),function(){return"{Template Error}"}},q=d.compile=function(a,b){function d(c){try{return new i(c,h)+""}catch(d){return b.debug?p(d)():(b.debug=!0,q(a,b)(c))}}b=b||{};for(var g in e)void 0===b[g]&&(b[g]=e[g]);var h=b.filename;try{var i=c(a,b)}catch(j){return j.filename=h||"anonymous",j.name="Syntax Error",p(j)}return d.prototype=i.prototype,d.toString=function(){return i.toString()},h&&b.cache&&(f[h]=d),d},r=n.$each,s="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",t=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,u=/[^\w$]+/g,v=new RegExp(["\\b"+s.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),w=/^\d[^,]*|,\d[^,]*/g,x=/^,+|,+$/g,y=/^$|,+/;e.openTag="{{",e.closeTag="}}";var z=function(a,b){var c=b.split(":"),d=c.shift(),e=c.join(":")||"";return e&&(e=", "+e),"$helpers."+d+"("+a+e+")"};e.parser=function(a){a=a.replace(/^\s/,"");var b=a.split(" "),c=b.shift(),e=b.join(" ");switch(c){case"if":a="if("+e+"){";break;case"else":b="if"===b.shift()?" if("+b.join(" ")+")":"",a="}else"+b+"{";break;case"/if":a="}";break;case"each":var f=b[0]||"$data",g=b[1]||"as",h=b[2]||"$value",i=b[3]||"$index",j=h+","+i;"as"!==g&&(f="[]"),a="$each("+f+",function("+j+"){";break;case"/each":a="});";break;case"echo":a="print("+e+");";break;case"print":case"include":a=c+"("+b.join(",")+");";break;default:if(/^\s*\|\s*[\w\$]/.test(e)){var k=!0;0===a.indexOf("#")&&(a=a.substr(1),k=!1);for(var l=0,m=a.split("|"),n=m.length,o=m[l++];n>l;l++)o=z(o,m[l]);a=(k?"=":"=#")+o}else a=d.helpers[c]?"=#"+c+"("+b.join(",")+");":"="+a}return a},"function"==typeof define?define('artTemplate',[],function(){return d}):"undefined"!=typeof exports?module.exports=d:this.template=d}();
;(function () {
  'use strict';

  /**
   * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
   *
   * @codingstandard ftlabs-jsv2
   * @copyright The Financial Times Limited [All Rights Reserved]
   * @license MIT License (see LICENSE.txt)
   */

  /*jslint browser:true, node:true*/
  /*global define, Event, Node*/


  /**
   * Instantiate fast-clicking listeners on the specified layer.
   *
   * @constructor
   * @param {Element} layer The layer to listen on
   * @param {Object} [options={}] The options to override the defaults
   */
  function FastClick(layer, options) {
    var oldOnClick;

    options = options || {};

    /**
     * Whether a click is currently being tracked.
     *
     * @type boolean
     */
    this.trackingClick = false;


    /**
     * Timestamp for when click tracking started.
     *
     * @type number
     */
    this.trackingClickStart = 0;


    /**
     * The element being tracked for a click.
     *
     * @type EventTarget
     */
    this.targetElement = null;


    /**
     * X-coordinate of touch start event.
     *
     * @type number
     */
    this.touchStartX = 0;


    /**
     * Y-coordinate of touch start event.
     *
     * @type number
     */
    this.touchStartY = 0;


    /**
     * ID of the last touch, retrieved from Touch.identifier.
     *
     * @type number
     */
    this.lastTouchIdentifier = 0;


    /**
     * Touchmove boundary, beyond which a click will be cancelled.
     *
     * @type number
     */
    this.touchBoundary = options.touchBoundary || 10;


    /**
     * The FastClick layer.
     *
     * @type Element
     */
    this.layer = layer;

    /**
     * The minimum time between tap(touchstart and touchend) events
     *
     * @type number
     */
    this.tapDelay = options.tapDelay || 200;

    /**
     * The maximum time for a tap
     *
     * @type number
     */
    this.tapTimeout = options.tapTimeout || 700;

    if (FastClick.notNeeded(layer)) {
      return;
    }

    // Some old versions of Android don't have Function.prototype.bind
    function bind(method, context) {
      return function() { return method.apply(context, arguments); };
    }


    var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
    var context = this;
    for (var i = 0, l = methods.length; i < l; i++) {
      context[methods[i]] = bind(context[methods[i]], context);
    }

    // Set up event handlers as required
    if (deviceIsAndroid) {
      layer.addEventListener('mouseover', this.onMouse, true);
      layer.addEventListener('mousedown', this.onMouse, true);
      layer.addEventListener('mouseup', this.onMouse, true);
    }

    layer.addEventListener('click', this.onClick, true);
    layer.addEventListener('touchstart', this.onTouchStart, false);
    layer.addEventListener('touchmove', this.onTouchMove, false);
    layer.addEventListener('touchend', this.onTouchEnd, false);
    layer.addEventListener('touchcancel', this.onTouchCancel, false);

    // Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
    // which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
    // layer when they are cancelled.
    if (!Event.prototype.stopImmediatePropagation) {
      layer.removeEventListener = function(type, callback, capture) {
        var rmv = Node.prototype.removeEventListener;
        if (type === 'click') {
          rmv.call(layer, type, callback.hijacked || callback, capture);
        } else {
          rmv.call(layer, type, callback, capture);
        }
      };

      layer.addEventListener = function(type, callback, capture) {
        var adv = Node.prototype.addEventListener;
        if (type === 'click') {
          adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
            if (!event.propagationStopped) {
              callback(event);
            }
          }), capture);
        } else {
          adv.call(layer, type, callback, capture);
        }
      };
    }

    // If a handler is already declared in the element's onclick attribute, it will be fired before
    // FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
    // adding it as listener.
    if (typeof layer.onclick === 'function') {

      // Android browser on at least 3.2 requires a new reference to the function in layer.onclick
      // - the old one won't work if passed to addEventListener directly.
      oldOnClick = layer.onclick;
      layer.addEventListener('click', function(event) {
        oldOnClick(event);
      }, false);
      layer.onclick = null;
    }
  }

  /**
  * Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
  *
  * @type boolean
  */
  var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

  /**
   * Android requires exceptions.
   *
   * @type boolean
   */
  var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


  /**
   * iOS requires exceptions.
   *
   * @type boolean
   */
  var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


  /**
   * iOS 4 requires an exception for select elements.
   *
   * @type boolean
   */
  var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


  /**
   * iOS 6.0-7.* requires the target element to be manually derived
   *
   * @type boolean
   */
  var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

  /**
   * BlackBerry requires exceptions.
   *
   * @type boolean
   */
  var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

  /**
   * Determine whether a given element requires a native click.
   *
   * @param {EventTarget|Element} target Target DOM element
   * @returns {boolean} Returns true if the element needs a native click
   */
  FastClick.prototype.needsClick = function(target) {
    switch (target.nodeName.toLowerCase()) {

    // Don't send a synthetic click to disabled inputs (issue #62)
    case 'button':
    case 'select':
    case 'textarea':
      if (target.disabled) {
        return true;
      }

      break;
    case 'input':

      // File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
      if ((deviceIsIOS && target.type === 'file') || target.disabled) {
        return true;
      }

      break;
    case 'label':
    case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
    case 'video':
      return true;
    }

    return (/\bneedsclick\b/).test(target.className);
  };


  /**
   * Determine whether a given element requires a call to focus to simulate click into element.
   *
   * @param {EventTarget|Element} target Target DOM element
   * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
   */
  FastClick.prototype.needsFocus = function(target) {
    switch (target.nodeName.toLowerCase()) {
    case 'textarea':
      return true;
    case 'select':
      return !deviceIsAndroid;
    case 'input':
      switch (target.type) {
      case 'button':
      case 'checkbox':
      case 'file':
      case 'image':
      case 'radio':
      case 'submit':
        return false;
      }

      // No point in attempting to focus disabled inputs
      return !target.disabled && !target.readOnly;
    default:
      return (/\bneedsfocus\b/).test(target.className);
    }
  };


  /**
   * Send a click event to the specified element.
   *
   * @param {EventTarget|Element} targetElement
   * @param {Event} event
   */
  FastClick.prototype.sendClick = function(targetElement, event) {
    var clickEvent, touch;

    // On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
    if (document.activeElement && document.activeElement !== targetElement) {
      document.activeElement.blur();
    }

    touch = event.changedTouches[0];

    // Synthesise a click event, with an extra attribute so it can be tracked
    clickEvent = document.createEvent('MouseEvents');
    clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
    clickEvent.forwardedTouchEvent = true;
    targetElement.dispatchEvent(clickEvent);
  };

  FastClick.prototype.determineEventType = function(targetElement) {

    //Issue #159: Android Chrome Select Box does not open with a synthetic click event
    if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
      return 'mousedown';
    }

    return 'click';
  };


  /**
   * @param {EventTarget|Element} targetElement
   */
  FastClick.prototype.focus = function(targetElement) {
    var length;

    // Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
    if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
      length = targetElement.value.length;
      targetElement.setSelectionRange(length, length);
    } else {
      targetElement.focus();
    }
  };


  /**
   * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
   *
   * @param {EventTarget|Element} targetElement
   */
  FastClick.prototype.updateScrollParent = function(targetElement) {
    var scrollParent, parentElement;

    scrollParent = targetElement.fastClickScrollParent;

    // Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
    // target element was moved to another parent.
    if (!scrollParent || !scrollParent.contains(targetElement)) {
      parentElement = targetElement;
      do {
        if (parentElement.scrollHeight > parentElement.offsetHeight) {
          scrollParent = parentElement;
          targetElement.fastClickScrollParent = parentElement;
          break;
        }

        parentElement = parentElement.parentElement;
      } while (parentElement);
    }

    // Always update the scroll top tracker if possible.
    if (scrollParent) {
      scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
    }
  };


  /**
   * @param {EventTarget} targetElement
   * @returns {Element|EventTarget}
   */
  FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

    // On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
    if (eventTarget.nodeType === Node.TEXT_NODE) {
      return eventTarget.parentNode;
    }

    return eventTarget;
  };


  /**
   * On touch start, record the position and scroll offset.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onTouchStart = function(event) {
    var targetElement, touch, selection;

    // Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
    if (event.targetTouches.length > 1) {
      return true;
    }

    targetElement = this.getTargetElementFromEventTarget(event.target);
    touch = event.targetTouches[0];

    if (deviceIsIOS) {

      // Only trusted events will deselect text on iOS (issue #49)
      selection = window.getSelection();
      if (selection.rangeCount && !selection.isCollapsed) {
        return true;
      }

      if (!deviceIsIOS4) {

        // Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
        // when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
        // with the same identifier as the touch event that previously triggered the click that triggered the alert.
        // Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
        // immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
        // Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
        // which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
        // random integers, it's safe to to continue if the identifier is 0 here.
        if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
          event.preventDefault();
          return false;
        }

        this.lastTouchIdentifier = touch.identifier;

        // If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
        // 1) the user does a fling scroll on the scrollable layer
        // 2) the user stops the fling scroll with another tap
        // then the event.target of the last 'touchend' event will be the element that was under the user's finger
        // when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
        // is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
        this.updateScrollParent(targetElement);
      }
    }

    this.trackingClick = true;
    this.trackingClickStart = event.timeStamp;
    this.targetElement = targetElement;

    this.touchStartX = touch.pageX;
    this.touchStartY = touch.pageY;

    // Prevent phantom clicks on fast double-tap (issue #36)
    if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
      event.preventDefault();
    }

    return true;
  };


  /**
   * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.touchHasMoved = function(event) {
    var touch = event.changedTouches[0], boundary = this.touchBoundary;

    if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
      return true;
    }

    return false;
  };


  /**
   * Update the last position.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onTouchMove = function(event) {
    if (!this.trackingClick) {
      return true;
    }

    // If the touch has moved, cancel the click tracking
    if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
      this.trackingClick = false;
      this.targetElement = null;
    }

    return true;
  };


  /**
   * Attempt to find the labelled control for the given label element.
   *
   * @param {EventTarget|HTMLLabelElement} labelElement
   * @returns {Element|null}
   */
  FastClick.prototype.findControl = function(labelElement) {

    // Fast path for newer browsers supporting the HTML5 control attribute
    if (labelElement.control !== undefined) {
      return labelElement.control;
    }

    // All browsers under test that support touch events also support the HTML5 htmlFor attribute
    if (labelElement.htmlFor) {
      return document.getElementById(labelElement.htmlFor);
    }

    // If no for attribute exists, attempt to retrieve the first labellable descendant element
    // the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
    return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
  };


  /**
   * On touch end, determine whether to send a click event at once.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onTouchEnd = function(event) {
    var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

    if (!this.trackingClick) {
      return true;
    }

    // Prevent phantom clicks on fast double-tap (issue #36)
    if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
      this.cancelNextClick = true;
      return true;
    }

    if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
      return true;
    }

    // Reset to prevent wrong click cancel on input (issue #156).
    this.cancelNextClick = false;

    this.lastClickTime = event.timeStamp;

    trackingClickStart = this.trackingClickStart;
    this.trackingClick = false;
    this.trackingClickStart = 0;

    // On some iOS devices, the targetElement supplied with the event is invalid if the layer
    // is performing a transition or scroll, and has to be re-detected manually. Note that
    // for this to function correctly, it must be called *after* the event target is checked!
    // See issue #57; also filed as rdar://13048589 .
    if (deviceIsIOSWithBadTarget) {
      touch = event.changedTouches[0];

      // In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
      targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
      targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
    }

    targetTagName = targetElement.tagName.toLowerCase();
    if (targetTagName === 'label') {
      forElement = this.findControl(targetElement);
      if (forElement) {
        this.focus(targetElement);
        if (deviceIsAndroid) {
          return false;
        }

        targetElement = forElement;
      }
    } else if (this.needsFocus(targetElement)) {

      // Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
      // Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
      if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
        this.targetElement = null;
        return false;
      }

      this.focus(targetElement);
      this.sendClick(targetElement, event);

      // Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
      // Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
      if (!deviceIsIOS || targetTagName !== 'select') {
        this.targetElement = null;
        event.preventDefault();
      }

      return false;
    }

    if (deviceIsIOS && !deviceIsIOS4) {

      // Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
      // and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
      scrollParent = targetElement.fastClickScrollParent;
      if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
        return true;
      }
    }

    // Prevent the actual click from going though - unless the target node is marked as requiring
    // real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
    if (!this.needsClick(targetElement)) {
      event.preventDefault();
      this.sendClick(targetElement, event);
    }

    return false;
  };


  /**
   * On touch cancel, stop tracking the click.
   *
   * @returns {void}
   */
  FastClick.prototype.onTouchCancel = function() {
    this.trackingClick = false;
    this.targetElement = null;
  };


  /**
   * Determine mouse events which should be permitted.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onMouse = function(event) {

    // If a target element was never set (because a touch event was never fired) allow the event
    if (!this.targetElement) {
      return true;
    }

    if (event.forwardedTouchEvent) {
      return true;
    }

    // Programmatically generated events targeting a specific element should be permitted
    if (!event.cancelable) {
      return true;
    }

    // Derive and check the target element to see whether the mouse event needs to be permitted;
    // unless explicitly enabled, prevent non-touch click events from triggering actions,
    // to prevent ghost/doubleclicks.
    if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

      // Prevent any user-added listeners declared on FastClick element from being fired.
      if (event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      } else {

        // Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
        event.propagationStopped = true;
      }

      // Cancel the event
      event.stopPropagation();
      event.preventDefault();

      return false;
    }

    // If the mouse event is permitted, return true for the action to go through.
    return true;
  };


  /**
   * On actual clicks, determine whether this is a touch-generated click, a click action occurring
   * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
   * an actual click which should be permitted.
   *
   * @param {Event} event
   * @returns {boolean}
   */
  FastClick.prototype.onClick = function(event) {
    var permitted;

    // It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
    if (this.trackingClick) {
      this.targetElement = null;
      this.trackingClick = false;
      return true;
    }

    // Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
    if (event.target.type === 'submit' && event.detail === 0) {
      return true;
    }

    permitted = this.onMouse(event);

    // Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
    if (!permitted) {
      this.targetElement = null;
    }

    // If clicks are permitted, return true for the action to go through.
    return permitted;
  };


  /**
   * Remove all FastClick's event listeners.
   *
   * @returns {void}
   */
  FastClick.prototype.destroy = function() {
    var layer = this.layer;

    if (deviceIsAndroid) {
      layer.removeEventListener('mouseover', this.onMouse, true);
      layer.removeEventListener('mousedown', this.onMouse, true);
      layer.removeEventListener('mouseup', this.onMouse, true);
    }

    layer.removeEventListener('click', this.onClick, true);
    layer.removeEventListener('touchstart', this.onTouchStart, false);
    layer.removeEventListener('touchmove', this.onTouchMove, false);
    layer.removeEventListener('touchend', this.onTouchEnd, false);
    layer.removeEventListener('touchcancel', this.onTouchCancel, false);
  };


  /**
   * Check whether FastClick is needed.
   *
   * @param {Element} layer The layer to listen on
   */
  FastClick.notNeeded = function(layer) {
    var metaViewport;
    var chromeVersion;
    var blackberryVersion;
    var firefoxVersion;

    // Devices that don't support touch don't need FastClick
    if (typeof window.ontouchstart === 'undefined') {
      return true;
    }

    // Chrome version - zero for other browsers
    chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

    if (chromeVersion) {

      if (deviceIsAndroid) {
        metaViewport = document.querySelector('meta[name=viewport]');

        if (metaViewport) {
          // Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
          if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
            return true;
          }
          // Chrome 32 and above with width=device-width or less don't need FastClick
          if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }

      // Chrome desktop doesn't need FastClick (issue #15)
      } else {
        return true;
      }
    }

    if (deviceIsBlackBerry10) {
      blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

      // BlackBerry 10.3+ does not require Fastclick library.
      // https://github.com/ftlabs/fastclick/issues/251
      if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
        metaViewport = document.querySelector('meta[name=viewport]');

        if (metaViewport) {
          // user-scalable=no eliminates click delay.
          if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
            return true;
          }
          // width=device-width (or less than device-width) eliminates click delay.
          if (document.documentElement.scrollWidth <= window.outerWidth) {
            return true;
          }
        }
      }
    }

    // IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
    if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
      return true;
    }

    // Firefox version - zero for other browsers
    firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

    if (firefoxVersion >= 27) {
      // Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

      metaViewport = document.querySelector('meta[name=viewport]');
      if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
        return true;
      }
    }

    // IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
    // http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
    if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
      return true;
    }

    return false;
  };


  /**
   * Factory method for creating a FastClick object
   *
   * @param {Element} layer The layer to listen on
   * @param {Object} [options={}] The options to override the defaults
   */
  FastClick.attach = function(layer, options) {
    return new FastClick(layer, options);
  };


  if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

    // AMD. Register as an anonymous module.
    define('fastclick',[],function() {
      return FastClick;
    });
  } else if (typeof module !== 'undefined' && module.exports) {
    module.exports = FastClick.attach;
    module.exports.FastClick = FastClick;
  } else {
    window.FastClick = FastClick;
  }
}());
/*!
 * An jQuery | zepto plugin for lazy loading images.
 * author -> jieyou
 * see https://github.com/jieyou/lazyload
 * use some tuupola's code https://github.com/tuupola/jquery_lazyload (BSD)
 * use component's throttle https://github.com/component/throttle (MIT)
 */
!function(a){"function"==typeof define&&define.amd?define('lazyload',["jQuery"],a):a(window.jQuery||window.zepto)}(function(a,b){function g(){}function h(a,b){var e;return e=b._$container==d?("innerHeight"in c?c.innerHeight:d.height())+d.scrollTop():b._$container.offset().top+b._$container.height(),e<=a.offset().top-b.threshold}function i(b,e){var f;return f=e._$container==d?d.width()+(a.fn.scrollLeft?d.scrollLeft():c.pageXOffset):e._$container.offset().left+e._$container.width(),f<=b.offset().left-e.threshold}function j(a,b){var c;return c=b._$container==d?d.scrollTop():b._$container.offset().top,c>=a.offset().top+b.threshold+a.height()}function k(b,e){var f;return f=e._$container==d?a.fn.scrollLeft?d.scrollLeft():c.pageXOffset:e._$container.offset().left,f>=b.offset().left+e.threshold+b.width()}function l(a,b){var c=0;a.each(function(d,e){function g(){f.trigger("_lazyload_appear"),c=0}var f=a.eq(d);if(!(f.width()<=0&&f.height()<=0||"none"===f.css("display")))if(b.vertical_only)if(j(f,b));else if(h(f,b)){if(++c>b.failure_limit)return!1}else g();else if(j(f,b)||k(f,b));else if(h(f,b)||i(f,b)){if(++c>b.failure_limit)return!1}else g()})}function m(a){return a.filter(function(b,c){return!a.eq(b)._lazyload_loadStarted})}function n(a,b){function h(){f=0,g=+new Date,e=a.apply(c,d),c=null,d=null}var c,d,e,f,g=0;return function(){c=this,d=arguments;var a=new Date-g;return f||(a>=b?h():f=setTimeout(h,b-a)),e}}var f,c=window,d=a(c),e={threshold:0,failure_limit:0,event:"scroll",effect:"show",effect_params:null,container:c,data_attribute:"original",data_srcset_attribute:"original-srcset",skip_invisible:!0,appear:g,load:g,vertical_only:!1,check_appear_throttle_time:300,url_rewriter_fn:g,no_fake_img_loader:!1,placeholder_data_img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",placeholder_real_img:"http://ditu.baidu.cn/yyfm/lazyload/0.0.1/img/placeholder.png"};f=function(){var a=Object.prototype.toString;return function(b){return a.call(b).replace("[object ","").replace("]","")}}(),a.fn.hasOwnProperty("lazyload")||(a.fn.lazyload=function(b){var i,j,k,h=this;return a.isPlainObject(b)||(b={}),a.each(e,function(g,h){-1!=a.inArray(g,["threshold","failure_limit","check_appear_throttle_time"])?"String"==f(b[g])?b[g]=parseInt(b[g],10):b[g]=h:"container"==g?(b.hasOwnProperty(g)?b[g]==c||b[g]==document?b._$container=d:b._$container=a(b[g]):b._$container=d,delete b.container):!e.hasOwnProperty(g)||b.hasOwnProperty(g)&&f(b[g])==f(e[g])||(b[g]=h)}),i="scroll"==b.event,k=0==b.check_appear_throttle_time?l:n(l,b.check_appear_throttle_time),j=i||"scrollstart"==b.event||"scrollstop"==b.event,h.each(function(c,d){var e=this,f=h.eq(c),i=f.attr("src"),k=f.attr("data-"+b.data_attribute),l=b.url_rewriter_fn==g?k:b.url_rewriter_fn.call(e,f,k),n=f.attr("data-"+b.data_srcset_attribute),o=f.is("img");return 1==f._lazyload_loadStarted||i==l?(f._lazyload_loadStarted=!0,void(h=m(h))):(f._lazyload_loadStarted=!1,o&&!i&&f.one("error",function(){f.attr("src",b.placeholder_real_img)}).attr("src",b.placeholder_data_img),f.one("_lazyload_appear",function(){function i(){d&&f.hide(),o?(n&&f.attr("srcset",n),l&&f.attr("src",l)):f.css("background-image",'url("'+l+'")'),d&&f[b.effect].apply(f,c?b.effect_params:[]),h=m(h)}var d,c=a.isArray(b.effect_params);f._lazyload_loadStarted||(d="show"!=b.effect&&a.fn[b.effect]&&(!b.effect_params||c&&0==b.effect_params.length),b.appear!=g&&b.appear.call(e,f,h.length,b),f._lazyload_loadStarted=!0,b.no_fake_img_loader||n?(b.load!=g&&f.one("load",function(){b.load.call(e,f,h.length,b)}),i()):a("<img />").one("load",function(){i(),b.load!=g&&b.load.call(e,f,h.length,b)}).attr("src",l))}),void(j||f.on(b.event,function(){f._lazyload_loadStarted||f.trigger("_lazyload_appear")})))}),j&&b._$container.on(b.event,function(){k(h,b)}),d.on("resize load",function(){k(h,b)}),a(function(){k(h,b)}),this})});
/*
 * jQuery JSONP Core Plugin 2.4.0 (2012-08-21)
 *
 * https://github.com/jaubourg/jquery-jsonp
 *
 * Copyright (c) 2012 Julian Aubourg
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */
( function( $ ) {

	// ###################### UTILITIES ##

	// Noop
	function noop() {
	}

	// Generic callback
	function genericCallback( data ) {
		lastValue = [ data ];
	}

	// Call if defined
	function callIfDefined( method , object , parameters ) {
		return method && method.apply( object.context || object , parameters );
	}

	// Give joining character given url
	function qMarkOrAmp( url ) {
		return /\?/ .test( url ) ? "&" : "?";
	}

	var // String constants (for better minification)
		STR_ASYNC = "async",
		STR_CHARSET = "charset",
		STR_EMPTY = "",
		STR_ERROR = "error",
		STR_INSERT_BEFORE = "insertBefore",
		STR_JQUERY_JSONP = "_jqjsp",
		STR_ON = "on",
		STR_ON_CLICK = STR_ON + "click",
		STR_ON_ERROR = STR_ON + STR_ERROR,
		STR_ON_LOAD = STR_ON + "load",
		STR_ON_READY_STATE_CHANGE = STR_ON + "readystatechange",
		STR_READY_STATE = "readyState",
		STR_REMOVE_CHILD = "removeChild",
		STR_SCRIPT_TAG = "<script>",
		STR_SUCCESS = "success",
		STR_TIMEOUT = "timeout",

		// Window
		win = window,
		// Deferred
		Deferred = $.Deferred,
		// Head element
		head = $( "head" )[ 0 ] || document.documentElement,
		// Page cache
		pageCache = {},
		// Counter
		count = 0,
		// Last returned value
		lastValue,

		// ###################### DEFAULT OPTIONS ##
		xOptionsDefaults = {
			//beforeSend: undefined,
			//cache: false,
			callback: STR_JQUERY_JSONP,
			//callbackParameter: undefined,
			//charset: undefined,
			//complete: undefined,
			//context: undefined,
			//data: "",
			//dataFilter: undefined,
			//error: undefined,
			//pageCache: false,
			//success: undefined,
			//timeout: 0,
			//traditional: false,
			url: location.href
		},

		// opera demands sniffing :/
		opera = win.opera,

		// IE < 10
		oldIE = !!$( "<div>" ).html( "<!--[if IE]><i><![endif]-->" ).find("i").length;

	// ###################### MAIN FUNCTION ##
	function jsonp( xOptions ) {

		// Build data with default
		xOptions = $.extend( {} , xOptionsDefaults , xOptions );

		// References to xOptions members (for better minification)
		var successCallback = xOptions.success,
			errorCallback = xOptions.error,
			completeCallback = xOptions.complete,
			dataFilter = xOptions.dataFilter,
			callbackParameter = xOptions.callbackParameter,
			successCallbackName = xOptions.callback,
			cacheFlag = xOptions.cache,
			pageCacheFlag = xOptions.pageCache,
			charset = xOptions.charset,
			url = xOptions.url,
			data = xOptions.data,
			timeout = xOptions.timeout,
			pageCached,

			// Abort/done flag
			done = 0,

			// Life-cycle functions
			cleanUp = noop,

			// Support vars
			supportOnload,
			supportOnreadystatechange,

			// Request execution vars
			firstChild,
			script,
			scriptAfter,
			timeoutTimer;

		// If we have Deferreds:
		// - substitute callbacks
		// - promote xOptions to a promise
		Deferred && Deferred(function( defer ) {
			defer.done( successCallback ).fail( errorCallback );
			successCallback = defer.resolve;
			errorCallback = defer.reject;
		}).promise( xOptions );

		// Create the abort method
		xOptions.abort = function() {
			!( done++ ) && cleanUp();
		};

		// Call beforeSend if provided (early abort if false returned)
		if ( callIfDefined( xOptions.beforeSend , xOptions , [ xOptions ] ) === !1 || done ) {
			return xOptions;
		}

		// Control entries
		url = url || STR_EMPTY;
		data = data ? ( (typeof data) == "string" ? data : $.param( data , xOptions.traditional ) ) : STR_EMPTY;

		// Build final url
		url += data ? ( qMarkOrAmp( url ) + data ) : STR_EMPTY;

		// Add callback parameter if provided as option
		callbackParameter && ( url += qMarkOrAmp( url ) + encodeURIComponent( callbackParameter ) + "=?" );

		// Add anticache parameter if needed
		!cacheFlag && !pageCacheFlag && ( url += qMarkOrAmp( url ) + "_" + ( new Date() ).getTime() + "=" );

		// Replace last ? by callback parameter
		url = url.replace( /=\?(&|$)/ , "=" + successCallbackName + "$1" );

		// Success notifier
		function notifySuccess( json ) {

			if ( !( done++ ) ) {

				cleanUp();
				// Pagecache if needed
				pageCacheFlag && ( pageCache [ url ] = { s: [ json ] } );
				// Apply the data filter if provided
				dataFilter && ( json = dataFilter.apply( xOptions , [ json ] ) );
				// Call success then complete
				callIfDefined( successCallback , xOptions , [ json , STR_SUCCESS, xOptions ] );
				callIfDefined( completeCallback , xOptions , [ xOptions , STR_SUCCESS ] );

			}
		}

		// Error notifier
		function notifyError( type ) {

			if ( !( done++ ) ) {

				// Clean up
				cleanUp();
				// If pure error (not timeout), cache if needed
				pageCacheFlag && type != STR_TIMEOUT && ( pageCache[ url ] = type );
				// Call error then complete
				callIfDefined( errorCallback , xOptions , [ xOptions , type ] );
				callIfDefined( completeCallback , xOptions , [ xOptions , type ] );

			}
		}

		// Check page cache
		if ( pageCacheFlag && ( pageCached = pageCache[ url ] ) ) {

			pageCached.s ? notifySuccess( pageCached.s[ 0 ] ) : notifyError( pageCached );

		} else {

			// Install the generic callback
			// (BEWARE: global namespace pollution ahoy)
			win[ successCallbackName ] = genericCallback;

			// Create the script tag
			script = $( STR_SCRIPT_TAG )[ 0 ];
			script.id = STR_JQUERY_JSONP + count++;

			// Set charset if provided
			if ( charset ) {
				script[ STR_CHARSET ] = charset;
			}

			opera && opera.version() < 11.60 ?
				// onerror is not supported: do not set as async and assume in-order execution.
				// Add a trailing script to emulate the event
				( ( scriptAfter = $( STR_SCRIPT_TAG )[ 0 ] ).text = "document.getElementById('" + script.id + "')." + STR_ON_ERROR + "()" )
			:
				// onerror is supported: set the script as async to avoid requests blocking each others
				( script[ STR_ASYNC ] = STR_ASYNC )

			;

			// Internet Explorer: event/htmlFor trick
			if ( oldIE ) {
				script.htmlFor = script.id;
				script.event = STR_ON_CLICK;
			}

			// Attached event handlers
			script[ STR_ON_LOAD ] = script[ STR_ON_ERROR ] = script[ STR_ON_READY_STATE_CHANGE ] = function ( result ) {

				// Test readyState if it exists
				if ( !script[ STR_READY_STATE ] || !/i/.test( script[ STR_READY_STATE ] ) ) {

					try {

						script[ STR_ON_CLICK ] && script[ STR_ON_CLICK ]();

					} catch( _ ) {}

					result = lastValue;
					lastValue = 0;
					result ? notifySuccess( result[ 0 ] ) : notifyError( STR_ERROR );

				}
			};

			// Set source
			script.src = url;

			// Re-declare cleanUp function
			cleanUp = function( i ) {
				timeoutTimer && clearTimeout( timeoutTimer );
				script[ STR_ON_READY_STATE_CHANGE ] = script[ STR_ON_LOAD ] = script[ STR_ON_ERROR ] = null;
				head[ STR_REMOVE_CHILD ]( script );
				scriptAfter && head[ STR_REMOVE_CHILD ]( scriptAfter );
			};

			// Append main script
			head[ STR_INSERT_BEFORE ]( script , ( firstChild = head.firstChild ) );

			// Append trailing script if needed
			scriptAfter && head[ STR_INSERT_BEFORE ]( scriptAfter , firstChild );

			// If a timeout is needed, install it
			timeoutTimer = timeout > 0 && setTimeout( function() {
				notifyError( STR_TIMEOUT );
			} , timeout );

		}

		return xOptions;
	}

	// ###################### SETUP FUNCTION ##
	jsonp.setup = function( xOptions ) {
		$.extend( xOptionsDefaults , xOptions );
	};

	// ###################### INSTALL in jQuery ##
	$.jsonp = jsonp;

} )( jQuery );

define("jsonp", ["jQuery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.$.jsonp;
    };
}(this)));

/**
 * YY Mobile Bridge API.
 * 
 * e.g. common activity framework api, etc.
 */

 /**
  * 非稳定版本, 谨慎使用.
  * 
  * @author alvin hwang
  */
(function(window, $) {
	
	var YYMobileBridge = window.YYMobileBridge = {};
	
	var bridge = null,
		console = window.console || {
			log : function() {}
		};

	/**
	 * 任务条的回调.
	 * 
	 * @param {Function}
	 *            callback function(json).
	 */
	YYMobileBridge.refreshActCallback = function(json) {
		console.log(json);
	};
	
	/**
	 * 手机客户端活动框架任务条的回调.
	 * 
	 * @param {String}
	 *            json json字符串.
	 */
	window.refreshAct = function(json) {
		json = $.parseJSON(json);
		YYMobileBridge.refreshActCallback(json);
	};
	
	/**
	 * 是否使用bridge代理? 
	 * 
	 * 若需要使用请加入WebViewJavascriptBridge.js, 并进行初始化YYMobileBridge.initBridge.
	 */
	YYMobileBridge.isUseBridge = function() {
		return bridge != null;
	};
	
	/**
	 * 初始化WebViewJavascriptBridge.
	 * 
	 * @param {Function}
	 *            callback function(data, responseCallback).
	 */
	YYMobileBridge.initBridge = function(callback) {
		YYMobileBridge.useBridge = true;
		if (!bridge) {
			bridge = window.WebViewJavascriptBridge;
			bridge.init(callback || function() {});
		}
		return bridge;
	};
	
	/**
	 * 跳转页面.
	 * 
	 * @param {String}
	 *            url 需跳转的页面地址.
	 * @param {Function} [optional]
	 *            callback function(data, responseCallback).
	 */
	YYMobileBridge.loadUrl = function(url, callback) {
		if (!url) {
			console.log("loadUrl error: url is blank");
			return false;
		}
		if (YYMobileBridge.isUseBridge()) {
			if (getBridge()) {
				bridge.callHandler('clientLoadURL', url, callback);
			} else {
				alert("clientLoadURL bridge is null");
			}
		} else {
			window.location.href = "objc://clientLoadUrl/" + url;
		}
	};
	
	YYMobileBridge.login = function(callback) {
		callBridgeHandler('clientLogin', null, callback);
	};
	
	function callBridgeHandler(handler, data, callback) {
		if (YYMobileBridge.initBridge()) {
			try {			
				bridge.callHandler(handler, data || null, callback || null);
			} catch (e) {
				console.log(handler + " bridge call error: " + e);
			}
		} else {
			alert(handler + " bridge is null");
		}
	}
	
	/**
	 * 获取ticket和guid.
	 * 
	 * @param {Function}
	 *            callback function(data, responseCallback).
	 */
	YYMobileBridge.getTicketAndGUID = function(callback) {
		callBridgeHandler('getTicketAndGUID', null, callback);
	};

})(window, jQuery);

define("YYMobileBridge", ["jQuery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.YYMobileBridge;
    };
}(this)));

 (function () {
  if (navigator.userAgent.match(/(iPad|iPhone|iPod).*?YY/g)) {
      if ((window.opener == null && window.YYApiCore == null) || (window.opener != null && window.opener.YYApiCore == null))
      {
          // load YYApiCore
          var i = document.createElement('iframe');
          i.style.display = 'none';
          i.src = "yyapi://load";
          document.body.appendChild(i);
      }
      else if (window.opener != null && window.YYApiCore == null && window.opener.YYApiCore != null) {
          window.YYApiCore = window.opener.YYApiCore;
      }
  }else if (navigator.userAgent.indexOf('Android') != -1) {
        YYApiCore = {
            __GLOBAL_FUNC_INDEX__:0,
            invokeClientMethod: function(module, name, parameters, callback) {
            	var r;
                try{
                    var cbName = '';
                    if (callback) {
                        if (typeof callback == "function") {
                            cbName = YYApiCore.createGlobalFuncForCallback(callback);
                        } else {
                            cbName = callback;
                        }
                    }
                    r = JSON.parse(window.AndroidJSInterfaceV2.invoke(module,name,JSON.stringify(parameters || {}),cbName));
                }catch(e){
                    if(console) {
                        console.log(e);
                    }
                }
                return r;
            },
            createGlobalFuncForCallback: function(callback){
                if (callback) {
                    var name = '__GLOBAL_CALLBACK__' + (YYApiCore.__GLOBAL_FUNC_INDEX__++);
                    window[name] = function(){
                        var args = arguments;
                        var func = (typeof callback == "function") ? callback : window[callback];
                        //we need to use setimeout here to avoid ui thread being frezzen
                        setTimeout(function(){ func.apply(null, args); }, 0);
                    };
                    return name;
                }
                return null;
            },
            invokeWebMethod: function(callback, returnValue) {
                YYApiCore.invokeCallbackWithArgs(callback, [returnValue]);
            },

            invokeCallbackWithArgs: function(callback, args) {
                if (callback) {
                    var func = null;
                    var tmp;
                    if (typeof callback == "function") {
                        func = callback;
                    }
                    else if((tmp = window[callback]) && typeof tmp == 'function') {
                        func = tmp;
                    }
                    if (func) {
                        setTimeout(function(){ func.apply(null, args); }, 0);
                    }
                }
            }
        };
  }
  }) ();

define("yyBridge", ["YYMobileBridge"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.yyBridge;
    };
}(this)));

/**
 *  YYMobile Javascript API
 *  API Level: 2
 *  Version: 1.2.10
 */

function consoleLog() {
    if (console) {
        console.log.apply(console, arguments)
    }
}

YYMobileJavascriptAPILevelTable = {
    "yyuigoto": 1,
    "pop": 1,
    "gotoLogin": 1,
    "gotoRegister": 1,
    "gotoPersonalCenter": 1,
    "gotoVipSign": 1,
    "gotoPhotoAlbum": 1,
    "gotoPrivilege": 1,
    "gotoCharacterEmoticonPrivilege": 1,
    "gotoColorfulBubblePrivilege": 1,
    "gotoLiveHome": 1,
    "gotoLiveCenter": 1,
    "gotoSettingCenter": 1,
    "gotoColorfulBubble": 1,
    "gotoPluginManagementSetting": 1,
    "gotoNeighborhood": 1,
    "joinChannel": 1,
    "joinLive": 1,
    "gotoPluginManagement": 1,
    "gotoPluginItem": 1,
    "gotoPluginItemOutline": 1,
    "checkLoginStatusWithCallback": 1,
    "requestUserWebToken": 1,
    "followUser": 1,
    "unFollowUser": 1,
    "getAppInfo": 2,
    "setPhoneNumber": 2,
    "showAlertMessage": 2,
    "setCommonStorageValueForKey": 2,
    "getCommonStorageValueForKey": 2,
    "showProgressWindow": 2,
    "hideProgressWindow": 2,
    "postNotification": 2,
    "deleteSharedCookie": 2,
    "gotoWeb": 2,
    "goto1931": 2,
    "gotoMessageCenter": 2,
    "closeAllWindow": 3,
    "gotoBrowser": 3,
    "showBackBtn": 3,
    "hideBackBtn": 3
}

YYMobileJavascriptAPIVersionTable = {
    "yyuigoto": "1.1",
    "pop": "1.1",
    "gotoLogin": "1.1",
    "gotoRegister": "1.1",
    "gotoPersonalCenter": "1.1",
    "gotoVipSign": "1.1",
    "gotoPhotoAlbum": "1.1",
    "gotoPrivilege": "1.1",
    "gotoCharacterEmoticonPrivilege": "1.1",
    "gotoColorfulBubblePrivilege": "1.1",
    "gotoLiveHome": "1.1",
    "gotoLiveCenter": "1.1",
    "gotoSettingCenter": "1.1",
    "gotoColorfulBubble": "1.1",
    "gotoPluginManagementSetting": "1.1",
    "gotoNeighborhood": "1.1",
    "joinChannel": "1.1",
    "joinLive": "1.1",
    "gotoPluginManagement": "1.1",
    "gotoPluginItem": "1.1",
    "gotoPluginItemOutline": "1.1",
    "checkLoginStatusWithCallback": "1.1",
    "requestUserWebToken": "1.1",
    "followUser": "1.1",
    "unFollowUser": "1.1",
    "getAppInfo": "1.2",
    "setPhoneNumber": "1.2",
    "showAlertMessage": "1.2",
    "setCommonStorageValueForKey": "1.2",
    "getCommonStorageValueForKey": "1.2",
    "showProgressWindow": "1.2",
    "hideProgressWindow": "1.2",
    "postNotification": "1.2",
    "deleteSharedCookie": "1.2",
    "gotoWeb": "1.2",
    "goto1931": "1.2",
    "gotoMessageCenter": "1.2",
    "closeAllWindow": "1.3",
    "gotoBrowser": "1.3",
    "showBackBtn": "1.3",
    "hideBackBtn": "1.3"
}

YYMobileJavascriptAPIVersionTable = {
    "1.1": 1,
    "1.2": 2,
    "1.3": 3
}

YYMobileNotificationIDs = {
    // 运营商流量包定购状态发生变化
    "CarrierDataTrafficPackageSubscribeStateChanged": 0x1001
}

YYMobileNotificationUserInfoKeys = {

    // 运营商流量包定购状态发生变化, 新状态
    "CarrierDataTrafficPackageSubscribeStateChangedUserInfoNewState": "CarrierDataTrafficPackageSubscribeStateChangedUserInfoNewState"
}

YYMobileOverridable = {
    popAction: function() {
        return false;
    }
};

YYMobileJavascriptWasReady = false;
var __YYMobileAPILevel__ = 0;

function onJavascriptBridgeReady(callback) {
    if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge);
    } else {
        document.addEventListener('WebViewJavascriptBridgeReady', function() {
            consoleLog("bridge ready");
            initializeJSHandles(WebViewJavascriptBridge);
            callback(WebViewJavascriptBridge);
        }, false);
    }
}

function onYYMobileJavascriptAPIReady(callback) {
    if (YYMobileJavascriptWasReady) {
        callback();
    } else {
        document.addEventListener('YYMobileJavascriptAPIReady', function() {
            callback();
        });
    }
}

function initializeYYMobileAPI() {
    onJavascriptBridgeReady(function(bridge) {
        bridge.init(function(message, responseCallback) {});
        //                            bridge.callHandler("getAPILevel", null, function(level) {
        //                                               consoleLog("yymobile api ready, level: " + level)
        //                                               __YYMobileAPILevel__ = level;
        YYMobileJavascriptWasReady = true;
        var readyEvent = document.createEvent('Events')
        readyEvent.initEvent('YYMobileJavascriptAPIReady')
        document.dispatchEvent(readyEvent)
        //                                               })
    });
}

function initializeJSHandles(bridge) {
    bridge.registerHandler('brdigeEventHandler', onBridgeEvent);
    bridge.registerHandler('askForHandlePopAction', function(data, responseCallback) {
        var handled = YYMobileOverridable.popAction();
        responseCallback(handled);
    });
}

// Helper functions

function safeCallHandler(handler, arguments1, callback) {
    var p1 = handler;
    var p2 = arguments1;
    var p3 = callback;
    onYYMobileJavascriptAPIReady(function() {
        //                                     var levelRequired = APILevelTable[handler];
        //                                     if (levelRequired == null || levelRequired > __YYMobileAPILevel__) {
        //                                     var error = (handler + " requires YYMobile API level " + levelRequired + ", but current API level is " + __YYMobileAPILevel__);
        //                                     alert(error);
        //                                     }
        //                                     else
        {
            window.WebViewJavascriptBridge.callHandler(p1, p2, p3);
        }
    });
}

function getAPILevel(callback) {
    safeCallHandler("getAPILevel", null, callback);
}

function pop() {
    safeCallHandler("yyuipop");
}

function _goto(uri) {
    safeCallHandler("yyuigoto", {
        "uri": uri
    });
}

// 登录
/**
 * 打开登录页
 */

function gotoLogin() {
    _goto("yymobile://Login/Login");
    //window.YYApiCore.invokeClientMethod('ui', 'showLoginDialog');
}

/**
 * 打开注册页
 */

function gotoRegister() {
    _goto("yymobile://Login/Register");
}

// 个人中心
/**
 * 跳转至个人主页
 * Params:
 *      uid - 用户的uid(0为自己)
 */

function gotoPersonalCenter(uid) {
    _goto("yymobile://PersonalCenter/" + uid);
}

/**
 * 跳转至会员签
 */

function gotoVipSign() {
    _goto("yymobile://PersonalCenter/VipSign");
}

/**
 * 跳转至相册和作品页
 * Params:
 *      uid - 用户的uid(0为自己)
 */

function gotoPhotoAlbum(uid) {
    _goto("yymobile://PersonalCenter/" + uid + "/PhotoAlbum");
}

// 特权
/**
 * 跳转至连登特权首页
 */

function gotoPrivilege() {
    _goto("yymobile://Privilege/All");
}

/**
 * 跳转至字符画特权页
 */

function gotoCharacterEmoticonPrivilege() {
    _goto("yymobile://Privilege/CharacterEmoticon");
}

/**
 * 跳转至炫彩气泡特权页
 */

function gotoColorfulBubblePrivilege() {
    _goto("yymobile://Privilege/ColorfulBubble");
}

// 直播中心
/**
 * 跳转至直播首页
 */

function gotoLiveHome() {
    _goto("yymobile://LiveCenter/Nav/-1");
}

/**
 * 跳转至1931首页
 */

function goto1931Home() {
    _goto("yymobile://1931/Home");
}

/**
 * 跳转至直播分类
 * Params:
 *      categoryId - 分类id(表现为直播大厅左侧的分类列表)
 *      subCategoryId - 子分类id(表现直播分类上方的子分类切换)
 */

function gotoLiveCenter(categoryId, subCategoryId) {
    _goto("yymobile://LiveCenter/" + categoryId + "/" + subCategoryId);
}

// 设置
/**
 * 跳转至设置页面
 */

function gotoSettingCenter() {
    _goto("yymobile://Settings/Home");
}

/**
 * 跳转至炫彩气泡设置页面
 */

function gotoColorfulBubble() {
    _goto("yymobile://Settings/ColorfulBubble");
}

/**
 * 跳转至插件管理设置页面
 */

function gotoPluginManagementSetting() {
    _goto("yymobile://Settings/PluginManagement");
}

// 社交
/**
 * 跳转至附近的人
 */

function gotoNeighborhood() {
    _goto("yymobile://Social/Neighborhood");
}

// 频道
/**
 * 根据频道号进入频道
 * Params:
 *      channelId - 频道号
 */

function joinChannel(channelId) {
    _goto("yymobile://Channel/" + channelId);
}

/**
 * 根据sid和ssid进入频道
 * Params:
 *      sid - 频道的sid
 *      ssid - 频道的ssid
 */

function joinLive(sid, ssid) {
    _goto("yymobile://Channel/Live/" + sid + "/" + ssid);
}

// 插件
/**
 * 跳转至插件管理页
 */

function gotoPluginManagement() {
    _goto("yymobile://Plugin/Management");
}

/**
 * 跳转至特定插件的设置页
 * Params:
 *      appId - 插件的appId
 */

function gotoPluginItem(appId) {
    _goto("yymobile://Plugin/Item/" + appId);
}

/**
 * 跳转至特定插件的内容页
 * Params:
 *      appId - 插件的appId
 */

function gotoPluginItemOutline(appId) {
    _goto("yymobile://Plugin/Item/" + appId + "/Outline");
}

function gotoWeb(url, showToolbar, enableJSAPI) {
    var encodedURL = encodeURIComponent(encodeURIComponent(url));
    var features = (1 << 2);
    if (showToolbar) {
        features = features | (1 << 1);
    }
    if (enableJSAPI) {
        features = features | (1 << 0);
    }
    _goto("yymobile://Web/Features/" + features + "/Url/" + encodedURL);
}

function goto1931(url) {
    var encodedURL = encodeURIComponent(encodeURIComponent(url));
    _goto("yymobile://1931/" + encodedURL);
}

function gotoMessageCenter() {
    _goto("yymobile://MessageCenter/Home");
}

function goto1931Girl(url) {
    var encodedURL = encodeURIComponent(encodeURIComponent(url));
    _goto("yymobile://1931/Girl/" + encodedURL);
}

/**
 * @param tabs  [
        {
            tabId: 100000101,
            tabName: "回复",
            actionUrl: "http://1931.yy.com/mobile/index.html",
            defaultOpen : true
        },
        {
            tabId: 100000102,
            tabName: "@我",
            actionUrl: "http://bbs.1931.yy.com",
            defaultOpen : false
        }
    ]
 */

function goto1931Tabs(tabs) {
    var encodedData = encodeURIComponent(encodeURIComponent(JSON.stringify(tabs)));
    _goto("yymobile://1931/Tabs/" + encodedData);
}

/**
 * @param photos {
    defaultPhoto : 0, // 下标从0开始
    photos : [{
        imgId : 12,
        thumbnail : "http://res.3g.yystatic.com/images/act/201405-unicom-2.jpg",
        imgUrl : "http://res.3g.yystatic.com/images/act/201405-unicom-2.jpg",
        imgName : "图片啊图片",
        hasLoved : true | false,
        girlName : "妹子",
        shareContent : "分享内容",
        loveAction : "http://1931.yy.com/dream/love.action?ticket=%ticket%&img=%imgId%",
        loveCount : 1234, // 大于0时, 显示出数字
        shareCount : 234,
        clickCount : 456,
        downloadCount : 567,
        commentCount : 678,
        createTime : "2004-05-15"
    }, {...}, {...}]
}
 */

function goto1931PhotoView(photos) {
    var encodedData = encodeURIComponent(encodeURIComponent(JSON.stringify(photos)));
    _goto("yymobile://1931/PhotoView/" + encodedData);
}

/**
 * 登录态判断
 * Params:
 *      successCallback - 当前为用户密码登录时的回调
 *      otherwiseCallback - 当前为未登录或匿名登录时的回调
 */

function checkLoginStatusWithCallback(successCallback, otherwiseCallback) {
    safeCallHandler("isLoggedInWithUserPassword", {}, function(response) {
        if (response) {
            successCallback();
        } else {
            otherwiseCallback();
        }
    });
}

function loginTest() {
    checkLoginStatusWithCallback(function() {
            joinChannel(2080)
        },
        function() {
            gotoLogin()
        });
}

/*
 查询网页登陆token
 */

function requestUserWebToken(callback) {
    safeCallHandler("requestWebToken", {}, callback);
}

/*
 关注用户
 */

function followUser(uid) {
    safeCallHandler("followUser", uid);
}

/*
 取消关注
 */

function unFollowUser(uid) {
    safeCallHandler("unFollowUser", uid);
}

/**
 *  获取app信息
 *  requires YYMobile API Level - 2
 *  @param callback 回调函数, 参数为appInfo对象
 *  appInfo对象包括:
 *      uid: 当前登录帐号的uid, 整数
 *      imid: 当前登录帐号的yy号, 整数
 *      phoneNumber: 当前手机的手机号, 字符串(iPhone无法获取, 返回"", 若调用过setPhoneNumber则返回相应的号码)
 *      carrier: 当前运营商的类型, 整数(0为未知, 1为中国移动, 2为中国联通, 3为中国电信, 0x0000FFFF为其他)
 *      carrierName: 当前运营商的名称(参考使用), 字符串
 *      system: 当前设备的操作系统, 字符串(如iOS, Android)
 *      systemVersion: 当前设备的操作系统版本, 整数(如7.0)
 *      deviceName: 当前设备的名称, 字符串, 如(iPhone5, 1)
 *      appVersion: yy的版本号
 */

function getAppInfo(callback) {
    safeCallHandler("getAppInfo", {}, function(response) {
        callback(response)
    });
}

/**
 *  设置手机号码
 *  requires YYMobile API Level - 2
 *  @param phoneNumber 字符串
 */

function setPhoneNumber(phoneNumber) {
    safeCallHandler("setPhoneNumber", phoneNumber);
}

/**
 *  弹出Alert对话框
 *  requires YYMobile API Level - 2
 *  @param title 标题
 *  @param message 消息
 *  @param buttons 要增加的按钮
 *  @param callback 回调函数, 参数为用户按钮的索引(0开始)
 *
 */

function showAlertMessage(title, message, buttons, callback) {
    safeCallHandler("showAlertMessage", {
        "title": title,
        "message": message,
        "buttons": buttons
    }, function(response) {
        callback(response)
    });
}

function showAlertMessageSimple(title, message) {
    showAlertMessage(title, message, new Array('我知道了'), function(result) {});
}

/**
 *  保存通用存储键值对
 *  requires YYMobile API Level - 2
 *  @param value - 值
 *  @param key - 键, 必须为字符串
 *  @param callback - 设置完成的回调, 参数为response对象
 *  response对象包括
 *      error - 保存过程中发生的错误
 */

function setCommonStorageValueForKey(value, key, callback) {
    safeCallHandler("setCommonStorageValueForKey", {
        "value": value,
        "key": key
    }, function(response) {
        callback(response);
    });
}

/**
 *  读取通用存储键值对
 *  required javescript API Level - 2
 *  @param key - 键
 *  @param callback - 设置完成的回调, 参数为response对象
 *  response对象包括
 *      error - 读取过程中发生的错误
 *      value - 取值结果
 */

function getCommonStorageValueForKey(key, callback) {
    safeCallHandler("getCommonStorageValueForKey",
        key, function(response) {
            callback(response);
        })
}

/**
 *  显示loading窗口
 *  required javescript API Level - 2
 *  @param label - 标签
 */

function showProgressWindow(label) {
    safeCallHandler("showProgressWindow", {
        "label": label
    });
}

/**
 *  隐藏loading窗口
 *  required javescript API Level - 2
 */

function hideProgressWindow() {
    safeCallHandler("hideProgressWindow");
}

function postNotification(notificationID, userInfo) {
    if (notificationID) {
        safeCallHandler("postNotification", {
            "notificationID": notificationID,
            "userInfo": userInfo
        });
    }
}

function deleteSharedCookie(cookieDomain, callback) {
    safeCallHandler("deleteSharedCookie", cookieDomain, function(response) {
        if (callback) {
            callback(response.count);
        }
    });
}

/*
 客户端事件侦听
 */

function onBridgeEvent(event) {
    switch (event.type) {
        case "LoginEvent":
            if (YYMobileOverridable.loginEvent) {
                YYMobileOverridable.loginEvent(event);
            }
            //consoleLog("on login uid="+event.uid+",success="+event.isSuccess)
            break;
        case "LogoutEvent":
            consoleLog("on logout")
            break;
        case "FollowEvent":
            consoleLog("on follow success=" + event.isSuccess + ",uid=" + event.uid)
            break;
        case "UnFollowEvent":
            consoleLog("on unfollow success=" + event.isSuccess + ",uid=" + event.uid)
            break;
        case "ApiUnSupportedEvent":
            consoleLog("client un support api:" + event.apiUri)
            break;
    }
}

initializeYYMobileAPI();

// Public APIs
YYMobile = {
    Overridable: YYMobileOverridable,
    NotificationIDs: YYMobileNotificationIDs,
    NotificationUserInfoKeys: YYMobileNotificationUserInfoKeys,
    // Level 1
    pop: pop,
    gotoLogin: gotoLogin,
    gotoRegister: gotoRegister,
    gotoPersonalCenter: gotoPersonalCenter,
    gotoVipSign: gotoVipSign,
    gotoPhotoAlbum: gotoPhotoAlbum,
    gotoPrivilege: gotoPrivilege,
    gotoCharacterEmoticonPrivilege: gotoCharacterEmoticonPrivilege,
    gotoColorfulBubblePrivilege: gotoColorfulBubblePrivilege,
    gotoLiveHome: gotoLiveHome,
    gotoLiveCenter: gotoLiveCenter,
    gotoSettingCenter: gotoSettingCenter,
    gotoColorfulBubble: gotoColorfulBubble,
    gotoPluginManagementSetting: gotoPluginManagementSetting,
    gotoNeighborhood: gotoNeighborhood,
    joinChannel: joinChannel,
    joinLive: joinLive,
    gotoPluginManagement: gotoPluginManagement,
    gotoPluginItem: gotoPluginItem,
    gotoPluginItemOutline: gotoPluginItemOutline,
    checkLoginStatusWithCallback: checkLoginStatusWithCallback,
    requestUserWebToken: requestUserWebToken,
    followUser: followUser,
    unFollowUser: unFollowUser,

    // Level 2
    getAPILevel: getAPILevel,
    getAppInfo: getAppInfo,
    setPhoneNumber: setPhoneNumber,
    showAlertMessage: showAlertMessage,
    showAlertMessageSimple: showAlertMessageSimple,
    setCommonStorageValueForKey: setCommonStorageValueForKey,
    getCommonStorageValueForKey: getCommonStorageValueForKey,
    showProgressWindow: showProgressWindow,
    hideProgressWindow: hideProgressWindow,
    postNotification: postNotification,
    deleteSharedCookie: deleteSharedCookie,
    gotoWeb: gotoWeb,
    goto1931: goto1931,
    gotoMessageCenter: gotoMessageCenter,
    
    // Level 3
    closeAllWindow : function closeAllWindow() {
    	safeCallHandler("closeAllWindow");
    },
    showBackBtn : function showBackBtn() {
    	safeCallHandler("showBackBtn");
    },
    hideBackBtn : function hideBackBtn() {
    	safeCallHandler("hideBackBtn");
    },
    gotoBrowser : function gotoBrowser(url) {
    	safeCallHandler("gotoBrowser", {
            "url": url
        });
    }
};

// 1931 API 中的可重写方法
Y1931Overridable = {
    /**
     *  用于处理导航按钮点击事件
     *  @param identifier - 被点击按钮的标识, see Y1931API.createBarButtonItem
     */
    onNavigationBarButtonItemTapped: function(identifier, selected) {},

    onGetNavigationBarInformation: function() {
        return {};
    }
};

Y1931BarButtonItemIcons = {
    "POST": 1000,
    "MESSAGE": 1001,
    "SHARE": 1002,
    "POSTOWNER": 1003,
    "CLOSE": 1004,
    "CLEARMESSAGE": 1005
};

Y1931Images = {
    "1931LOGO": 1931
};

Y1931API = {
    initialize1931API: function() {
        onJavascriptBridgeReady(function(bridge) {
            bridge.registerHandler('1931NavigationBarButtonItemTapped', function(data, responseCallback) {
                Y1931Overridable.onNavigationBarButtonItemTapped(data.identifier, data.selected);
            });
            bridge.registerHandler('get1931NavigationBarInformation', function(data, responseCallback) {
                responseCallback(Y1931Overridable.onGetNavigationBarInformation())
            });
        })

    },

    /**
     *  创建一个导航条按钮item
     *  @param identifier - 按钮标识, 用于onNavigationBarButtonItemTapped回调
     *  @param title - 按钮标题
     *  @param icon - 按钮图片(如有此项, 则不显示title)
     *  @param badge - 按钮的badge(string)
     */
    createBarButtonItem: function(identifier, title, icon, selectable, badge, selected) {
        var button = {};
        button.identifier = identifier;
        button.icon = icon;
        button.title = title;
        button.selectable = selectable;
        button.badge = badge;
        button.selected = selected;
        return button;
    },

    createNavigationBarInformation: function(title, titleImage, rightItems) {
        var info = {};
        info.title = title;
        info.titleImage = titleImage;
        info.rightItems = rightItems;
        return info;
    },

    /**
     *  设置导航条左侧按钮组(从左到右显示)
     *  @param items - Array of items
     */
    setNavigationBarLeftItems: function(items) {

    },

    /**
     *  设置导航条右侧按钮组(从左到右显示)
     *  @param items - Array of items
     */
    setNavigationBarRightItems: function(items) {
        safeCallHandler("setNavigationRightItems", items);
    },

    /**
     *  设置导航条标题
     *  @param title - a String
     */
    setNavigationTitle: function(title, titleImage) {
        safeCallHandler("setNavigationTitle", {
            "title": title,
            "titleImage": titleImage
        });
    },

    updateNavigationBarItemBadge: function(itemId, badge) {
        safeCallHandler("updateNavigationBarItemBadge", {
            "itemId": itemId,
            "badge": badge
        })
    },

    /**
     *  分享内容
     */
    share: function(content, imageUrl, title, shareUrl, musicUrl, videoUrl) {
        safeCallHandler("share", {
            "content": content,
            "imageUrl": imageUrl,
            "title": title,
            "shareUrl": shareUrl,
            "musicUrl": musicUrl,
            "videoUrl": videoUrl
        });
    }
};

Y1931API.initialize1931API();

define("yymobile", ["yyBridge"], function(){});

;
//兼容IE低版本浏览器没有控制台
if (typeof(window.console) == "undefined"){
	window.console={
		log:function(){}
	};
}

var hiido = (function(){
    var version = 1.1;
    var win = window;
    var _hiidoDebug = win._hiidoDebug || false;
    var logger = {
        log: function() {
            if (_hiidoDebug) {
                win.console && win.console.log(arguments);
            }
        }
    };
    var hiido = {
        domain: "ylog.hiido.com",
        ipPrefix: "183.61.2.",
        ips: [91, 92, 94, 95, 96, 97, 98],
        getServerUrl: function(host) {
            host = host || this.domain;
            var ptl = location.protocol;
            var path = "j.gif?";
            return ptl + "//" + host + "/" + path;
        },
        randomIp: function() {
            var Rand = Math.random();
            var index = Math.round(Rand * (this.ips.length - 1));
            var suff = this.ips[index];
            return this.ipPrefix + suff;
        },
        getParam: function(opt) {
            var obj = opt;
            var param = [];
            obj.time = parseInt(1 * new Date() / 1000);
            obj.ui = this.getCookie("hiido_ui");
            obj.username = this.getCookie("username");
            for (h in obj) {
                if (obj.hasOwnProperty(h)) {
                    param.push(encodeURIComponent(h) + "=" + (obj[h] === undefined || obj[h] === null ? "" :
                        encodeURIComponent(obj[h])));
                }
            }
            return param.join("&");
        },
        send: function(url, backurl, times) {
            var reties = times || 0;
            var img = new Image();
            var self = this;
            img.onerror = function() {
                if (reties <= 1) {
                    self.send(url, backurl, ++reties);
                } else if (reties == 2) {
                    self.send(backurl, backurl, ++reties);
                }
            };
            img.src = url;
        },
        getCookie: function(name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg)) {
                return unescape(arr[2]);
            } else {
                return null;
            };
        }
    };
    var iface = {
        stat: function(opt) {
            if (!opt) {
                return false;
            }
            var svr = hiido.getServerUrl();
            var param = hiido.getParam(opt);
            var url = svr + param;
            var backurl = hiido.getServerUrl(hiido.randomIp()) + param;
            hiido.send(url, backurl);
        },
        loadHiidoJS: function(){
			_hiido_no = 0;
			var head = document.getElementsByTagName("head")[0] || document.documentElement;
			var script = document.createElement("script");
			script.src = "http://www.duowan.com/duowan.js";
			script.type = "text/javascript";
			
			var done = false;
			script.onload = script.onreadystatechange = function() {
				if (!done && (!this.readyState ||
						this.readyState === "loaded" || this.readyState === "complete") ) {
					done = true;
					script.onload = script.onreadystatechange = null;
					if (head && script.parentNode ) {
						head.removeChild( script );
					}
				}
			};
			head.insertBefore( script, head.firstChild );
		},
        addUVToHiido: function(myWid) {
            if (toString.call(myWid) != "[object Array]") {
                _hiido_wid = [];
                _hiido_wid.push(myWid);
            } else {
            	_hiido_wid = myWid;
            }
            if (typeof _hiido_no === 'undefined') {
                _hiido_no = 0;
            }
            if (window.hiidov3) {
				try {
					hiidov3();
				} catch (e) {
				}
			} else {
				this.loadHiidoJS();		
			}
        }
    };

    if (typeof(module) === "object") {
        module.exports = iface;
    }
    window.appHiido = iface;
    return iface;
})();

var param = {
	"act" : "webevent",
	"eventid" : '',
	"value" : '',
	"class1" : "ent",
	"class2" : "ceremony",
	"eventype" : '1',
	"uid" : 0, //
	"bak1" : 0, //
	"bak2" : 0 //imei
};
window.reportEvent = function(eventid, value, bak1, bak2,callback) {
	YYMobile.getAppInfo(
    		function(appinfo){
    			var uid = appinfo.uid > 0 ? appinfo.uid : 0;
                uid = uid || appinfo.imei || appinfo.imsi || appinfo.phoneNumbe;
    			if(!bak1 || bak1 == -1)
    				bak1 = 0;
    			var vparam = $.extend({}, param);
    			vparam.eventid = eventid;
    			vparam.value = value;
    			vparam.uid = uid || vparam.uid;
    			vparam.bak1 = bak1 || vparam.bak1;
    			vparam.bak2 =  appinfo.imei;//bak2若无填写，默认上报imei
    			hiido.stat(vparam);
    			if(typeof callback == 'function') {
    				callback(vparam);
    			}
    		}
    );		
};
ua = navigator.userAgent, isIos = ua.match(/iPhone|iPad|iPod/i) && ua.indexOf("AppleWebKit") > -1;
/**
 * 调用客户端API获取设备信息
 */
window.getDeviceInfo = function(){
	return window.YYApiCore.invokeClientMethod('device', 'deviceInfo');
};
/**
 * 根据版本号判断是否新版
 * 3.1以后则用新的API
 */
var appVersion = "0";
var canOpenInnerView = false;
var stateTicket;
var isUserNewAPI = function(){
	var result = false;
	//go to ios system
	if(isIos){
        return true;
    }
	//select android system version
	try {
		var deviceInfo=0;

		deviceInfo = getDeviceInfo();
		
		
		if(deviceInfo){//取不到版本信息，则视为旧版
			appVersion = deviceInfo.appVersion;
			var v = appVersion.replace(/[^0-9.]/ig,""); 
			var vArray = v.split(".");            
            //in $.each, return false means "break", return true means "continue" in the loop
			$.each(vArray,function(index,value){
				value =  Number(value);
			
					//android 3.0.1 以后则为使用新版api 3.0.6以后可在频道内开页面
					//比较版本号的第一位
					if(index == 0){                     
						if(value < 3){//大版本小于3则都为旧API
							return false;
						}
                        //for version > 3(e.g 4.0.0)
                        else if(value >3){                           
                            canOpenInnerView = true;
                            result = true;
                            return false;
                        }
					//比较版本号的第二位	
					}else if(index == 1){                        
						if(value > 0){//大于0则使用新
							result = true;
							canOpenInnerView = true;
							return false;
						}
					//比较版本号的第三位	
					}else if(index == 2){
						if(value > 0){//大于0则使用新
							result = true;
						}
						if(value > 5){//大于5则使用新
							canOpenInnerView = true;
				        }
	                }
	            });
	        }
	} catch (e) {
		console.log("exception:"+e);
	}
	return result;
}();
// var isUserNewAPI = true;
// alert(isUserNewAPI+";isIos:"+isIos);

//YY andriod最新版支持在频道内打开页面
window.openPageInner = function(url){
    if(url){
        window.location.href = "objc://clientLoadUrl/" + url;
    }
};
window.showPoneMsg = function(title,msg){
	if(YYMobile.showAlertMessageSimple){
		YYMobile.showAlertMessageSimple(title,msg);
	}else{
		alert(msg);
	}    
};
//YY andriod最新版支持：向手机客户端发送页面高度
window.sendHeightToClient = function(height) {
    if(canOpenInnerView){
        if(!height) {
            height = document.body.clientHeight;
        }
        window.YYApiCore.invokeClientMethod('ui', 'webHeightPx', {'height':height});
    }
};
//在频道外打开页面
window.gotoPage = function(url){
    //新版YY
    if(isUserNewAPI){        
        var encodeUrl = encodeURIComponent(encodeURIComponent(url));
        window.YYApiCore.invokeClientMethod('ui', 'goto', {'uri' : 'yymobile://Web/Features/5/Url/'+encodeUrl});        
    //旧版YY  
    }else{        
        window.location.href = url;
    }
};
//在频道外打开页面
window.gotoPageInner = function(url){
    if(url){
        window.location.href = url;
    }
};

window.backJoinLive=function(){
    if(!isNaN(window.topSid) && !isNaN(window.subSid) && topSid !=0){
        YYMobile.joinLive(window.topSid,window.subSid);
    }else{
        YYMobile.gotoLiveHome();
    }
};
window.errBackHome=function(msg){
    if(!msg){
        msg="用户信息查询失败，请稍候再试！";
    }
    showPoneMsg("确定", msg);
    // setTimeout(backJoinLive,1500);
    setTimeout(pop,1500);
};
//显示更多按钮
window.showNobleRightButton = function(){
    if(isUserNewAPI){
        window.YYApiCore.invokeClientMethod('ui','showNobleRightButton');        
    }
};
//隐藏更多按钮
window.hideNobleRightButton = function(){
    if(isUserNewAPI){
        window.YYApiCore.invokeClientMethod('ui','hideNobleRightButton');
    }
};
//设置页面的title
window.setNavigationBarTitle = function(title){
    if(!title){
        title ="活动页面";
    }
    if(isUserNewAPI){
        //window.YYApiCore.invokeClientMethod('ui','setNavigationBarTitle',{title:title});
    	window.YYApiCore.invokeClientMethod('ui','setNavigationBar',{"title":{"title":title}});
    }
};


//登录状态查询,needlogin是说是否需要登录   ,IOS与Android使用同一个函数。
function checkTicketStatus(callback,needlogin,loginCallback){   
    var ticket = window.YYApiCore.invokeClientMethod('data', 'webTicket');
    if(ticket && ticket.length > 0){
        //登录用户
        stateTicket = ticket;
        callback(ticket);         
    }else{
        YYMobile.checkLoginStatusWithCallback(
            function() {
                YYMobile.requestUserWebToken(function(ticket) {
                    if(ticket && ticket.length > 0){
                        //登录用户
                        stateTicket = ticket;
                        callback(ticket);
                    }else{
                        //匿名用户
                        if(needlogin){
                            YYMobileOverridable.loginEvent = function(){
                               if(loginCallback){
                                    loginCallback();
                               }
                               //openNoble.init();
                            };
                            YYMobile.gotoLogin();
                        }
                    }
                });
            },
            function() {
                //获取用户登录信息失败
                if(needlogin){
                    YYMobileOverridable.loginEvent = function(){
                       if(loginCallback){
                            loginCallback();
                       }
                    };
                    YYMobile.gotoLogin();
                }
            }
        );
    }
};

//手机海度数据埋点统计 统一接口 bac,param为扩展字段，不用最好
var mobileHiidoParam = {
    "act"       :"webevent",
    "eventype"  :"1",   //事件类型，点击上报1
    "eventid"   :"0",   //事件id
    "uid"       :"0",   //用户uid  uid||imsi||imei||phoneNumbe||
    "hostid"    :"0",   //主播uid
    "class1"    :"ent", //娱乐
    "class2"    :"earn",//营收
    "imei"      :"0",   //手机串号，唯一标志
    "sys"       :"3",   //操作系统平台，移动端必备 0=IOS /1=WEB / 2=ANDROID
    "act_type"  :"0",   //事件标志-事件id
    "channelSource":"official"  //移动端 频道来源 official
};
//eventBak 事件标识  
var reportPhoneEvent = function(eventid,eventBak,anUid,callback) {
    getAppInfo(
            function(appinfo){
                var uid = appinfo.uid > 0 ? appinfo.uid : 0;
                uid = uid || appinfo.imei || appinfo.imsi || appinfo.phoneNumbe;
                if(!eventBak || eventBak == -1)
                    eventBak = 0;                
                var vparam = $.extend({}, mobileHiidoParam);
                //系统iOS,Android...
                //分端标识（手机端的web页面：android：0，ios：1）
                var system =  appinfo.system;
                var sysIndex = 0;
                if(system){
                    if(system.toLowerCase() == "iOS".toLowerCase()){
                        sysIndex = 0;
                    }
                    else if(system.toLowerCase() == "Android".toLowerCase()){
                        sysIndex = 2;
                    }
                }
                vparam.eventid = eventid;
                vparam.uid = uid || vparam.uid;
                vparam.hostid = anUid || vparam.hostid;
                vparam.sys = sysIndex;
                vparam.imei =  appinfo.imei;
                vparam.act_type =  eventBak;             
                //add channel source start
                var channelSource ='';
                try{
                     channelSource = window.YYApiCore.invokeClientMethod('data', 'getChannelSource');
                      if(typeof channelSource !== 'string'){
                        channelSource = '';
                        }
                      
                }
                catch(err){
                     channelSource = '';
                }
                vparam.channelSource = channelSource;
                //add channel source end
                hiido.stat(vparam);
                if(typeof callback == 'function') {
                    callback(vparam);
                }
            }
    );      
};


//手机海度数据埋点统计 统一接口 bac,param为扩展字段，不用最好
var mobileHiidoParam2 = {
    "act"       :"webevent",
    "eventype"  :"1",   //事件类型，点击上报1
    "eventid"   :"0",   //事件id
    "uid"       :"0",   //用户uid  uid||imsi||imei||phoneNumbe||
    "hostid"    :"0",   //主播uid
    "class1"    :"ent", //娱乐
    "class2"    :"earn",//营收
    "imei"      :"0",   //手机串号，唯一标志
    "sys"       :"3",   //操作系统平台，移动端必备 0=IOS /1=WEB / 2=ANDROID
    "act_type"  :"0",   //事件标志-事件id
    "channelSource":"official",  //移动端 频道来源 official
    "bak1":"0"
};
//eventBak 事件标识  
var reportPhoneEvent2 = function(eventid,eventBak,bak1,anUid,callback) {
    getAppInfo(
            function(appinfo){
                var uid = appinfo.uid > 0 ? appinfo.uid : 0;
                uid = uid || appinfo.imei || appinfo.imsi || appinfo.phoneNumbe;
                if(!eventBak || eventBak == -1)
                    eventBak = 0;                
                var vparam = $.extend({}, mobileHiidoParam2);
                //系统iOS,Android...
                //分端标识（手机端的web页面：android：0，ios：1）
                var system =  appinfo.system;
                var sysIndex = 0;
                if(system){
                    if(system.toLowerCase() == "iOS".toLowerCase()){
                        sysIndex = 0;
                    }
                    else if(system.toLowerCase() == "Android".toLowerCase()){
                        sysIndex = 2;
                    }
                }
                vparam.eventid = eventid;
                vparam.uid = uid || vparam.uid;
                vparam.hostid = anUid || vparam.hostid;
                vparam.sys = sysIndex;
                vparam.imei =  appinfo.imei;
                vparam.act_type =  eventBak;     
                vparam.bak1 = bak1;  
                //add channel source start
                var channelSource ='';
                try{
                     channelSource = window.YYApiCore.invokeClientMethod('data', 'getChannelSource');
                      if(typeof channelSource !== 'string'){
                        channelSource = '';
                        }
                      
                }
                catch(err){
                     channelSource = '';
                }
                vparam.channelSource = channelSource;
                //add channel source end
                hiido.stat(vparam);
                if(typeof callback == 'function') {
                    callback(vparam);
                }
            }
    );      
};


define("reportPhoneEvent2", ["yymobile"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.reportPhoneEvent2;
    };
}(this)));

require(['jQuery', 'artTemplate','fastclick','lazyload','jsonp','reportPhoneEvent2'],function ($,template,attachFastClick,lazyload) {
    //fackclick
    $(function(){
    	attachFastClick.attach(document.body);   
    });

     
     app();

      /**
       * [render 页面入口]
       * @return {[type]} [description]
       */
      function app(){
           hotNewRender();
           listRender();
      }


	  /**
	   * [hotNewRender 最热战报]
	   * @return {[type]} [description]
	   */
	  function hotNewRender(){
	  	  var url = 'http://yue.yy.com/yyue/topicMsg/queryWithCount?topicId=99&count=1&from=SYzhouxing';
	  	  $.ajax({
		        type: 'GET',
		        url: url,
		        dataType:'jsonp',
		        callback: 'jsonp1',
		        error: function(err){
		            console.log(err);
		        },
		        success: function(json){
		        	    var data = json || {};
		        	    $('#hotNewsTxt').attr('href',data.list[0]['messageUrl']).text(data.list[0]['msgTitle'])
                        
		        }	  	  	  
	  	  })
	  }


    //千分位 
    template.helper('milliFormat',function(num){
            if(!num){
                  return "0";
            }
            return num.toString().replace(/(?=(?!^)(\d{3})+$)/g, ',');
    });

      /**
       * [listRender 榜单]
       * @return {[type]} [description]
       */
	  function listRender(){
           var obj = $('.ui-toggeBtn');
           
           renderWeekList();

           obj.on('click','li',function(){
           	      var idx = ($(this).index() == 0 ? 0 : -1);
           	      //if($(this).hasClass('active')) return;
           	      $(this).addClass('active').siblings('li').removeClass('active');
                  renderWeekList({
                     week: idx   
                  });

           });
           

          //渲染模板 
    		  function renderWeekList(opts){
    		  	  var opt = $.extend({
    	                   week: 0 	  
    	                },opts || {});
    	          var week = opt.week;
    	          var requrl = 'http://api.ys.m.yy.com/api/public/weekStar/PQueryWeekStartRankReq.json?data={week_flag:'+ week +',extData:{}}&callback=weekstart';
    	                       
                $.jsonp({
    	                type: 'GET',
    	                url: requrl,
    	                dataType:'jsonp',
    	                callback: 'weekstart',
                      cache: true,
    	                error: function(err){
    	                    console.log(err);
    	                },
    	                success: function(rs){
    	                    if(!rs || rs.result == 1){
    	                        return;
    	                    }
    	                    var gRankMod = $('#g-rank-mod');
    	                    var rankData = {
    	                          rank_info_vec:  rs.rank_info_vec || [],
    	                          defaults:{
                                       img :'http://act.m.yystatic.com/act/images/default_grey_yy.png'
    	                          }
    	                    };
  
                            /*
                                下面全部是容错处理，写那么多循环代码影响性能，
                                其实我也不愿意容错，但是和服务器那边合作那么久，
                                他们给的数据不能绝对相信。
                             */
                            var _data = rs.rank_info_vec; //json下发列表数据
                            var max_list_len = 7;  //默认显示天数据
                            var max_rank_len = 3;  //默认显示前三名

                      
                            if(_data.length < max_list_len){
                            	  var lenNum = _data.length;
                                  for(var i=0; i<(max_list_len - lenNum); ++i){
                                       rankData.rank_info_vec.push({});   
                                  } 
                            };

                            for(var i=0; i<rankData.rank_info_vec.length; ++i){
                                if(!rankData.rank_info_vec[i]['top_fan_vec']){
                                     rankData.rank_info_vec[i]['top_fan_vec'] = [];
                                }   
                            }

                            for(var i=0; i<rankData.rank_info_vec.length; ++i){
                                if(!rankData.rank_info_vec[i]['top_anchor_vec']){
                                     rankData.rank_info_vec[i]['top_anchor_vec'] = [];
                                }   
                            }

                            for(var i=0; i<rankData.rank_info_vec.length; ++i){
                                if(!rankData.rank_info_vec[i]['gift_info_map']){
                                     rankData.rank_info_vec[i]['gift_info_map'] = [];
                                }   
                            }                        

                            
                            for(var i=0; i<rankData.rank_info_vec.length; ++i){
                                 if(rankData.rank_info_vec[i]['top_fan_vec'].length < max_rank_len){
                                    var lenNum = rankData.rank_info_vec[i]['top_fan_vec'].length;
                                    for(var j=0; j<(max_rank_len - lenNum); ++j){
                                           rankData.rank_info_vec[i]['top_fan_vec'].push({});
                                    }        
                                 }
                            }

                            for(var i=0; i<rankData.rank_info_vec.length; ++i){
                                 if(rankData.rank_info_vec[i]['top_anchor_vec'].length < max_rank_len){
                                    var lenNum = rankData.rank_info_vec[i]['top_anchor_vec'].length;
                                    for(var j=0; j<(max_rank_len - lenNum); ++j){
                                           rankData.rank_info_vec[i]['top_anchor_vec'].push({});
                                    }        
                                 }
                            }                                                

                          //填充模板
    	                    gRankMod.html(template('rankWrap',rankData));
                          $("img.lazy").lazyload();

                          //点击头像跳转
                          $('#g-rank-mod').on('click','dl.u-rankList > dd',function(){
                                var uid = $(this).attr('data-uid') || 0,
                                    live = $(this).attr('data-live') || 0,
                                    topcid = $(this).attr('data-topcid') || 0,
                                    subcid = $(this).attr('data-subcid') || 0;
                                    gotoLivingRoom(live, topcid, subcid, uid);
                                    
                                    //统计点击主播头像埋点
                                    reportPhoneEvent2("10010853", "4", "0", 0);
                          })                 
    	                }
    	          });          
    		  }           
	  };
     


    /**
     * [gotoLivingRoom 跳转直播间、个人页面]
     * @param  {[type]} live   [description]
     * @param  {[type]} topCid [description]
     * @param  {[type]} subCid [description]
     * @param  {[type]} uid    [description]
     * @return {[type]}        [description]
     */
    function gotoLivingRoom(live,topCid,subCid,uid){
          if(parseInt(live) == 1){
                 if(parseInt(topCid)!=0 && parseInt(subCid)!=0){
                      YYMobile.joinLive(topCid,subCid);
                 }else if(uid && parseInt(uid) != 0){
                      YYMobile.gotoPersonalCenter(uid);
                 }
          }else{
            if(uid && parseInt(uid) != 0){
               YYMobile.gotoPersonalCenter(uid);
            }
          }
      
    };

});
define("p-list.js", function(){});

=======
function consoleLog(){console&&console.log.apply(console,arguments)}function onJavascriptBridgeReady(e){window.WebViewJavascriptBridge?e(WebViewJavascriptBridge):document.addEventListener("WebViewJavascriptBridgeReady",function(){consoleLog("bridge ready"),initializeJSHandles(WebViewJavascriptBridge),e(WebViewJavascriptBridge)},!1)}function onYYMobileJavascriptAPIReady(e){YYMobileJavascriptWasReady?e():document.addEventListener("YYMobileJavascriptAPIReady",function(){e()})}function initializeYYMobileAPI(){onJavascriptBridgeReady(function(e){e.init(function(e,t){}),YYMobileJavascriptWasReady=!0;var t=document.createEvent("Events");t.initEvent("YYMobileJavascriptAPIReady"),document.dispatchEvent(t)})}function initializeJSHandles(e){e.registerHandler("brdigeEventHandler",onBridgeEvent),e.registerHandler("askForHandlePopAction",function(e,t){var n=YYMobileOverridable.popAction();t(n)})}function safeCallHandler(e,t,n){var o=e,i=t,r=n;onYYMobileJavascriptAPIReady(function(){window.WebViewJavascriptBridge.callHandler(o,i,r)})}function getAPILevel(e){safeCallHandler("getAPILevel",null,e)}function pop(){safeCallHandler("yyuipop")}function _goto(e){safeCallHandler("yyuigoto",{uri:e})}function gotoLogin(){_goto("yymobile://Login/Login")}function gotoRegister(){_goto("yymobile://Login/Register")}function gotoPersonalCenter(e){_goto("yymobile://PersonalCenter/"+e)}function gotoVipSign(){_goto("yymobile://PersonalCenter/VipSign")}function gotoPhotoAlbum(e){_goto("yymobile://PersonalCenter/"+e+"/PhotoAlbum")}function gotoPrivilege(){_goto("yymobile://Privilege/All")}function gotoCharacterEmoticonPrivilege(){_goto("yymobile://Privilege/CharacterEmoticon")}function gotoColorfulBubblePrivilege(){_goto("yymobile://Privilege/ColorfulBubble")}function gotoLiveHome(){_goto("yymobile://LiveCenter/Nav/-1")}function goto1931Home(){_goto("yymobile://1931/Home")}function gotoLiveCenter(e,t){_goto("yymobile://LiveCenter/"+e+"/"+t)}function gotoSettingCenter(){_goto("yymobile://Settings/Home")}function gotoColorfulBubble(){_goto("yymobile://Settings/ColorfulBubble")}function gotoPluginManagementSetting(){_goto("yymobile://Settings/PluginManagement")}function gotoNeighborhood(){_goto("yymobile://Social/Neighborhood")}function joinChannel(e){_goto("yymobile://Channel/"+e)}function joinLive(e,t){_goto("yymobile://Channel/Live/"+e+"/"+t)}function gotoPluginManagement(){_goto("yymobile://Plugin/Management")}function gotoPluginItem(e){_goto("yymobile://Plugin/Item/"+e)}function gotoPluginItemOutline(e){_goto("yymobile://Plugin/Item/"+e+"/Outline")}function gotoWeb(e,t,n){var o=encodeURIComponent(encodeURIComponent(e)),i=4;t&&(i=2|i),n&&(i=1|i),_goto("yymobile://Web/Features/"+i+"/Url/"+o)}function goto1931(e){var t=encodeURIComponent(encodeURIComponent(e));_goto("yymobile://1931/"+t)}function gotoMessageCenter(){_goto("yymobile://MessageCenter/Home")}function goto1931Girl(e){var t=encodeURIComponent(encodeURIComponent(e));_goto("yymobile://1931/Girl/"+t)}function goto1931Tabs(e){var t=encodeURIComponent(encodeURIComponent(JSON.stringify(e)));_goto("yymobile://1931/Tabs/"+t)}function goto1931PhotoView(e){var t=encodeURIComponent(encodeURIComponent(JSON.stringify(e)));_goto("yymobile://1931/PhotoView/"+t)}function checkLoginStatusWithCallback(e,t){safeCallHandler("isLoggedInWithUserPassword",{},function(n){n?e():t()})}function loginTest(){checkLoginStatusWithCallback(function(){joinChannel(2080)},function(){gotoLogin()})}function requestUserWebToken(e){safeCallHandler("requestWebToken",{},e)}function followUser(e){safeCallHandler("followUser",e)}function unFollowUser(e){safeCallHandler("unFollowUser",e)}function getAppInfo(e){safeCallHandler("getAppInfo",{},function(t){e(t)})}function setPhoneNumber(e){safeCallHandler("setPhoneNumber",e)}function showAlertMessage(e,t,n,o){safeCallHandler("showAlertMessage",{title:e,message:t,buttons:n},function(e){o(e)})}function showAlertMessageSimple(e,t){showAlertMessage(e,t,new Array("我知道了"),function(e){})}function setCommonStorageValueForKey(e,t,n){safeCallHandler("setCommonStorageValueForKey",{value:e,key:t},function(e){n(e)})}function getCommonStorageValueForKey(e,t){safeCallHandler("getCommonStorageValueForKey",e,function(e){t(e)})}function showProgressWindow(e){safeCallHandler("showProgressWindow",{label:e})}function hideProgressWindow(){safeCallHandler("hideProgressWindow")}function postNotification(e,t){e&&safeCallHandler("postNotification",{notificationID:e,userInfo:t})}function deleteSharedCookie(e,t){safeCallHandler("deleteSharedCookie",e,function(e){t&&t(e.count)})}function onBridgeEvent(e){switch(e.type){case"LoginEvent":YYMobileOverridable.loginEvent&&YYMobileOverridable.loginEvent(e);break;case"LogoutEvent":consoleLog("on logout");break;case"FollowEvent":consoleLog("on follow success="+e.isSuccess+",uid="+e.uid);break;case"UnFollowEvent":consoleLog("on unfollow success="+e.isSuccess+",uid="+e.uid);break;case"ApiUnSupportedEvent":consoleLog("client un support api:"+e.apiUri)}}function checkTicketStatus(e,t,n){var o=window.YYApiCore.invokeClientMethod("data","webTicket");o&&o.length>0?(stateTicket=o,e(o)):YYMobile.checkLoginStatusWithCallback(function(){YYMobile.requestUserWebToken(function(o){o&&o.length>0?(stateTicket=o,e(o)):t&&(YYMobileOverridable.loginEvent=function(){n&&n()},YYMobile.gotoLogin())})},function(){t&&(YYMobileOverridable.loginEvent=function(){n&&n()},YYMobile.gotoLogin())})}!function(e,t){function n(e){var t=he[e]={};return Q.each(e.split(te),function(e,n){t[n]=!0}),t}function o(e,n,o){if(o===t&&1===e.nodeType){var i="data-"+n.replace(me,"-$1").toLowerCase();if(o=e.getAttribute(i),"string"==typeof o){try{o="true"===o||"false"!==o&&("null"===o?null:+o+""===o?+o:ge.test(o)?Q.parseJSON(o):o)}catch(r){}Q.data(e,n,o)}else o=t}return o}function i(e){var t;for(t in e)if(("data"!==t||!Q.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function r(){return!1}function a(){return!0}function s(e){return!e||!e.parentNode||11===e.parentNode.nodeType}function l(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function c(e,t,n){if(t=t||0,Q.isFunction(t))return Q.grep(e,function(e,o){var i=!!t.call(e,o,e);return i===n});if(t.nodeType)return Q.grep(e,function(e,o){return e===t===n});if("string"==typeof t){var o=Q.grep(e,function(e){return 1===e.nodeType});if(Ie.test(t))return Q.filter(t,o,!n);t=Q.filter(t,o)}return Q.grep(e,function(e,o){return Q.inArray(e,t)>=0===n})}function u(e){var t=Ye.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function f(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function d(e,t){if(1===t.nodeType&&Q.hasData(e)){var n,o,i,r=Q._data(e),a=Q._data(t,r),s=r.events;if(s){delete a.handle,a.events={};for(n in s)for(o=0,i=s[n].length;o<i;o++)Q.event.add(t,n,s[n][o])}a.data&&(a.data=Q.extend({},a.data))}}function p(e,t){var n;1===t.nodeType&&(t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),Q.support.html5Clone&&e.innerHTML&&!Q.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Je.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.selected=e.defaultSelected:"input"===n||"textarea"===n?t.defaultValue=e.defaultValue:"script"===n&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(Q.expando))}function h(e){return"undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName("*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll("*"):[]}function g(e){Je.test(e.type)&&(e.defaultChecked=e.checked)}function m(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),o=t,i=mt.length;i--;)if(t=mt[i]+n,t in e)return t;return o}function v(e,t){return e=t||e,"none"===Q.css(e,"display")||!Q.contains(e.ownerDocument,e)}function y(e,t){for(var n,o,i=[],r=0,a=e.length;r<a;r++)n=e[r],n.style&&(i[r]=Q._data(n,"olddisplay"),t?(!i[r]&&"none"===n.style.display&&(n.style.display=""),""===n.style.display&&v(n)&&(i[r]=Q._data(n,"olddisplay",C(n.nodeName)))):(o=nt(n,"display"),!i[r]&&"none"!==o&&Q._data(n,"olddisplay",o)));for(r=0;r<a;r++)n=e[r],n.style&&(t&&"none"!==n.style.display&&""!==n.style.display||(n.style.display=t?i[r]||"":"none"));return e}function b(e,t,n){var o=ct.exec(t);return o?Math.max(0,o[1]-(n||0))+(o[2]||"px"):t}function w(e,t,n,o){for(var i=n===(o?"border":"content")?4:"width"===t?1:0,r=0;i<4;i+=2)"margin"===n&&(r+=Q.css(e,n+gt[i],!0)),o?("content"===n&&(r-=parseFloat(nt(e,"padding"+gt[i]))||0),"margin"!==n&&(r-=parseFloat(nt(e,"border"+gt[i]+"Width"))||0)):(r+=parseFloat(nt(e,"padding"+gt[i]))||0,"padding"!==n&&(r+=parseFloat(nt(e,"border"+gt[i]+"Width"))||0));return r}function x(e,t,n){var o="width"===t?e.offsetWidth:e.offsetHeight,i=!0,r=Q.support.boxSizing&&"border-box"===Q.css(e,"boxSizing");if(o<=0){if(o=nt(e,t),(o<0||null==o)&&(o=e.style[t]),ut.test(o))return o;i=r&&(Q.support.boxSizingReliable||o===e.style[t]),o=parseFloat(o)||0}return o+w(e,t,n||(r?"border":"content"),i)+"px"}function C(e){if(dt[e])return dt[e];var t=Q("<"+e+">").appendTo($.body),n=t.css("display");return t.remove(),"none"!==n&&""!==n||(ot=$.body.appendChild(ot||Q.extend($.createElement("iframe"),{frameBorder:0,width:0,height:0})),it&&ot.createElement||(it=(ot.contentWindow||ot.contentDocument).document,it.write("<!doctype html><html><body>"),it.close()),t=it.body.appendChild(it.createElement(e)),n=nt(t,"display"),$.body.removeChild(ot)),dt[e]=n,n}function k(e,t,n,o){var i;if(Q.isArray(t))Q.each(t,function(t,i){n||bt.test(e)?o(e,i):k(e+"["+("object"==typeof i?t:"")+"]",i,n,o)});else if(n||"object"!==Q.type(t))o(e,t);else for(i in t)k(e+"["+i+"]",t[i],n,o)}function T(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var o,i,r,a=t.toLowerCase().split(te),s=0,l=a.length;if(Q.isFunction(n))for(;s<l;s++)o=a[s],r=/^\+/.test(o),r&&(o=o.substr(1)||"*"),i=e[o]=e[o]||[],i[r?"unshift":"push"](n)}}function S(e,n,o,i,r,a){r=r||n.dataTypes[0],a=a||{},a[r]=!0;for(var s,l=e[r],c=0,u=l?l.length:0,f=e===Bt;c<u&&(f||!s);c++)s=l[c](n,o,i),"string"==typeof s&&(!f||a[s]?s=t:(n.dataTypes.unshift(s),s=S(e,n,o,i,s,a)));return(f||!s)&&!a["*"]&&(s=S(e,n,o,i,"*",a)),s}function A(e,n){var o,i,r=Q.ajaxSettings.flatOptions||{};for(o in n)n[o]!==t&&((r[o]?e:i||(i={}))[o]=n[o]);i&&Q.extend(!0,e,i)}function E(e,n,o){var i,r,a,s,l=e.contents,c=e.dataTypes,u=e.responseFields;for(r in u)r in o&&(n[u[r]]=o[r]);for(;"*"===c[0];)c.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(r in l)if(l[r]&&l[r].test(i)){c.unshift(r);break}if(c[0]in o)a=c[0];else{for(r in o){if(!c[0]||e.converters[r+" "+c[0]]){a=r;break}s||(s=r)}a=a||s}if(a)return a!==c[0]&&c.unshift(a),o[a]}function N(e,t){var n,o,i,r,a=e.dataTypes.slice(),s=a[0],l={},c=0;if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),a[1])for(n in e.converters)l[n.toLowerCase()]=e.converters[n];for(;i=a[++c];)if("*"!==i){if("*"!==s&&s!==i){if(n=l[s+" "+i]||l["* "+i],!n)for(o in l)if(r=o.split(" "),r[1]===i&&(n=l[s+" "+r[0]]||l["* "+r[0]])){n===!0?n=l[o]:l[o]!==!0&&(i=r[0],a.splice(c--,0,i));break}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(u){return{state:"parsererror",error:n?u:"No conversion from "+s+" to "+i}}}s=i}return{state:"success",data:t}}function _(){try{return new e.XMLHttpRequest}catch(t){}}function L(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function P(){return setTimeout(function(){zt=t},0),zt=Q.now()}function M(e,t){Q.each(t,function(t,n){for(var o=(Qt[t]||[]).concat(Qt["*"]),i=0,r=o.length;i<r;i++)if(o[i].call(e,t,n))return})}function j(e,t,n){var o,i=0,r=Kt.length,a=Q.Deferred().always(function(){delete s.elem}),s=function(){for(var t=zt||P(),n=Math.max(0,l.startTime+l.duration-t),o=1-(n/l.duration||0),i=0,r=l.tweens.length;i<r;i++)l.tweens[i].run(o);return a.notifyWith(e,[l,o,n]),o<1&&r?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:Q.extend({},t),opts:Q.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:zt||P(),duration:n.duration,tweens:[],createTween:function(t,n,o){var i=Q.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(i),i},stop:function(t){for(var n=0,o=t?l.tweens.length:0;n<o;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(H(c,l.opts.specialEasing);i<r;i++)if(o=Kt[i].call(l,e,c,l.opts))return o;return M(l,c),Q.isFunction(l.opts.start)&&l.opts.start.call(e,l),Q.fx.timer(Q.extend(s,{anim:l,queue:l.opts.queue,elem:e})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function H(e,t){var n,o,i,r,a;for(n in e)if(o=Q.camelCase(n),i=t[o],r=e[n],Q.isArray(r)&&(i=r[1],r=e[n]=r[0]),n!==o&&(e[o]=r,delete e[n]),a=Q.cssHooks[o],a&&"expand"in a){r=a.expand(r),delete e[o];for(n in r)n in e||(e[n]=r[n],t[n]=i)}else t[o]=i}function B(e,t,n){var o,i,r,a,s,l,c,u,f=this,d=e.style,p={},h=[],g=e.nodeType&&v(e);n.queue||(c=Q._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,u=c.empty.fire,c.empty.fire=function(){c.unqueued||u()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,Q.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===Q.css(e,"display")&&"none"===Q.css(e,"float")&&(Q.support.inlineBlockNeedsLayout&&"inline"!==C(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",Q.support.shrinkWrapBlocks||f.done(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(o in t)if(r=t[o],Xt.exec(r)){if(delete t[o],r===(g?"hide":"show"))continue;h.push(o)}if(a=h.length)for(s=Q._data(e,"fxshow")||Q._data(e,"fxshow",{}),g?Q(e).show():f.done(function(){Q(e).hide()}),f.done(function(){var t;Q.removeData(e,"fxshow",!0);for(t in p)Q.style(e,t,p[t])}),o=0;o<a;o++)i=h[o],l=f.createTween(i,g?s[i]:0),p[i]=s[i]||Q.style(e,i),i in s||(s[i]=l.start,g&&(l.end=l.start,l.start="width"===i||"height"===i?1:0))}function I(e,t,n,o,i){return new I.prototype.init(e,t,n,o,i)}function D(e,t){for(var n,o={height:e},i=0;i<4;i+=2-t)n=gt[i],o["margin"+n]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function O(e){return Q.isWindow(e)?e:9===e.nodeType&&(e.defaultView||e.parentWindow)}var Y,F,$=e.document,W=e.location,R=e.navigator,q=e.jQuery,U=e.$,z=Array.prototype.push,V=Array.prototype.slice,X=Array.prototype.indexOf,J=Object.prototype.toString,G=Object.prototype.hasOwnProperty,K=String.prototype.trim,Q=function(e,t){return new Q.fn.init(e,t,Y)},Z=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,ee=/\S/,te=/\s+/,ne=ee.test(" ")?/^[\s\xA0]+|[\s\xA0]+$/g:/^\s+|\s+$/g,oe=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,ie=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,re=/^[\],:{}\s]*$/,ae=/(?:^|:|,)(?:\s*\[)+/g,se=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,le=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,ce=/^-ms-/,ue=/-([\da-z])/gi,fe=function(e,t){return(t+"").toUpperCase()},de=function(){$.addEventListener?($.removeEventListener("DOMContentLoaded",de,!1),Q.ready()):"complete"===$.readyState&&($.detachEvent("onreadystatechange",de),Q.ready())},pe={};Q.fn=Q.prototype={constructor:Q,init:function(e,n,o){var i,r,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:oe.exec(e),i&&(i[1]||!n)){if(i[1])return n=n instanceof Q?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:$,e=Q.parseHTML(i[1],a,!0),ie.test(i[1])&&Q.isPlainObject(n)&&this.attr.call(e,n,!0),Q.merge(this,e);if(r=$.getElementById(i[2]),r&&r.parentNode){if(r.id!==i[2])return o.find(e);this.length=1,this[0]=r}return this.context=$,this.selector=e,this}return!n||n.jquery?(n||o).find(e):this.constructor(n).find(e)}return Q.isFunction(e)?o.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),Q.makeArray(e,this))},selector:"",jquery:"1.8.0",length:0,size:function(){return this.length},toArray:function(){return V.call(this)},get:function(e){return null==e?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var o=Q.merge(this.constructor(),e);return o.prevObject=this,o.context=this.context,"find"===t?o.selector=this.selector+(this.selector?" ":"")+n:t&&(o.selector=this.selector+"."+t+"("+n+")"),o},each:function(e,t){return Q.each(this,e,t)},ready:function(e){return Q.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(V.apply(this,arguments),"slice",V.call(arguments).join(","))},map:function(e){return this.pushStack(Q.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:z,sort:[].sort,splice:[].splice},Q.fn.init.prototype=Q.fn,Q.extend=Q.fn.extend=function(){var e,n,o,i,r,a,s=arguments[0]||{},l=1,c=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[1]||{},l=2),"object"!=typeof s&&!Q.isFunction(s)&&(s={}),c===l&&(s=this,--l);l<c;l++)if(null!=(e=arguments[l]))for(n in e)o=s[n],i=e[n],s!==i&&(u&&i&&(Q.isPlainObject(i)||(r=Q.isArray(i)))?(r?(r=!1,a=o&&Q.isArray(o)?o:[]):a=o&&Q.isPlainObject(o)?o:{},s[n]=Q.extend(u,a,i)):i!==t&&(s[n]=i));return s},Q.extend({noConflict:function(t){return e.$===Q&&(e.$=U),t&&e.jQuery===Q&&(e.jQuery=q),Q},isReady:!1,readyWait:1,holdReady:function(e){e?Q.readyWait++:Q.ready(!0)},ready:function(e){if(e===!0?!--Q.readyWait:!Q.isReady){if(!$.body)return setTimeout(Q.ready,1);Q.isReady=!0,e!==!0&&--Q.readyWait>0||(F.resolveWith($,[Q]),Q.fn.trigger&&Q($).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===Q.type(e)},isArray:Array.isArray||function(e){return"array"===Q.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?String(e):pe[J.call(e)]||"object"},isPlainObject:function(e){if(!e||"object"!==Q.type(e)||e.nodeType||Q.isWindow(e))return!1;try{if(e.constructor&&!G.call(e,"constructor")&&!G.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var o;for(o in e);return o===t||G.call(e,o)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var o;return e&&"string"==typeof e?("boolean"==typeof t&&(n=t,t=0),t=t||$,(o=ie.exec(e))?[t.createElement(o[1])]:(o=Q.buildFragment([e],t,n?null:[]),Q.merge([],(o.cacheable?Q.clone(o.fragment):o.fragment).childNodes))):null},parseJSON:function(t){return t&&"string"==typeof t?(t=Q.trim(t),e.JSON&&e.JSON.parse?e.JSON.parse(t):re.test(t.replace(se,"@").replace(le,"]").replace(ae,""))?new Function("return "+t)():void Q.error("Invalid JSON: "+t)):null},parseXML:function(n){var o,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,o=i.parseFromString(n,"text/xml")):(o=new ActiveXObject("Microsoft.XMLDOM"),o.async="false",o.loadXML(n))}catch(r){o=t}return(!o||!o.documentElement||o.getElementsByTagName("parsererror").length)&&Q.error("Invalid XML: "+n),o},noop:function(){},globalEval:function(t){t&&ee.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(ce,"ms-").replace(ue,fe)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toUpperCase()===t.toUpperCase()},each:function(e,n,o){var i,r=0,a=e.length,s=a===t||Q.isFunction(e);if(o)if(s){for(i in e)if(n.apply(e[i],o)===!1)break}else for(;r<a&&n.apply(e[r++],o)!==!1;);else if(s){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;r<a&&n.call(e[r],r,e[r++])!==!1;);return e},trim:K?function(e){return null==e?"":K.call(e)}:function(e){return null==e?"":e.toString().replace(ne,"")},makeArray:function(e,t){var n,o=t||[];return null!=e&&(n=Q.type(e),null==e.length||"string"===n||"function"===n||"regexp"===n||Q.isWindow(e)?z.call(o,e):Q.merge(o,e)),o},inArray:function(e,t,n){var o;if(t){if(X)return X.call(t,e,n);for(o=t.length,n=n?n<0?Math.max(0,o+n):n:0;n<o;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var o=n.length,i=e.length,r=0;if("number"==typeof o)for(;r<o;r++)e[i++]=n[r];else for(;n[r]!==t;)e[i++]=n[r++];return e.length=i,e},grep:function(e,t,n){var o,i=[],r=0,a=e.length;for(n=!!n;r<a;r++)o=!!t(e[r],r),n!==o&&i.push(e[r]);return i},map:function(e,n,o){var i,r,a=[],s=0,l=e.length,c=e instanceof Q||l!==t&&"number"==typeof l&&(l>0&&e[0]&&e[l-1]||0===l||Q.isArray(e));if(c)for(;s<l;s++)i=n(e[s],s,o),null!=i&&(a[a.length]=i);else for(r in e)i=n(e[r],r,o),null!=i&&(a[a.length]=i);return a.concat.apply([],a)},guid:1,proxy:function(e,n){var o,i,r;return"string"==typeof n&&(o=e[n],n=e,e=o),Q.isFunction(e)?(i=V.call(arguments,2),r=function(){return e.apply(n,i.concat(V.call(arguments)))},r.guid=e.guid=e.guid||r.guid||Q.guid++,r):t},access:function(e,n,o,i,r,a,s){var l,c=null==o,u=0,f=e.length;if(o&&"object"==typeof o){for(u in o)Q.access(e,n,u,o[u],1,a,i);r=1}else if(i!==t){if(l=s===t&&Q.isFunction(i),c&&(l?(l=n,n=function(e,t,n){return l.call(Q(e),n)}):(n.call(e,i),n=null)),n)for(;u<f;u++)n(e[u],o,l?i.call(e[u],u,n(e[u],o)):i,s);r=1}return r?e:c?n.call(e):f?n(e[0],o):a},now:function(){return(new Date).getTime()}}),Q.ready.promise=function(t){if(!F)if(F=Q.Deferred(),"complete"===$.readyState||"loading"!==$.readyState&&$.addEventListener)setTimeout(Q.ready,1);else if($.addEventListener)$.addEventListener("DOMContentLoaded",de,!1),e.addEventListener("load",Q.ready,!1);else{$.attachEvent("onreadystatechange",de),e.attachEvent("onload",Q.ready);var n=!1;try{n=null==e.frameElement&&$.documentElement}catch(o){}n&&n.doScroll&&function i(){if(!Q.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}Q.ready()}}()}return F.promise(t)},Q.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){pe["[object "+t+"]"]=t.toLowerCase()}),Y=Q($);var he={};Q.Callbacks=function(e){e="string"==typeof e?he[e]||n(e):Q.extend({},e);var o,i,r,a,s,l,c=[],u=!e.once&&[],f=function(t){for(o=e.memory&&t,i=!0,l=a||0,a=0,s=c.length,r=!0;c&&l<s;l++)if(c[l].apply(t[0],t[1])===!1&&e.stopOnFalse){o=!1;break}r=!1,c&&(u?u.length&&f(u.shift()):o?c=[]:d.disable())},d={add:function(){if(c){var t=c.length;!function n(t){Q.each(t,function(t,o){!Q.isFunction(o)||e.unique&&d.has(o)?o&&o.length&&n(o):c.push(o)})}(arguments),r?s=c.length:o&&(a=t,f(o))}return this},remove:function(){return c&&Q.each(arguments,function(e,t){for(var n;(n=Q.inArray(t,c,n))>-1;)c.splice(n,1),r&&(n<=s&&s--,n<=l&&l--)}),this},has:function(e){return Q.inArray(e,c)>-1},empty:function(){return c=[],this},disable:function(){return c=u=o=t,this},disabled:function(){return!c},lock:function(){return u=t,o||d.disable(),this},locked:function(){return!u},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],c&&(!i||u)&&(r?u.push(t):f(t)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!i}};return d},Q.extend({Deferred:function(e){var t=[["resolve","done",Q.Callbacks("once memory"),"resolved"],["reject","fail",Q.Callbacks("once memory"),"rejected"],["notify","progress",Q.Callbacks("memory")]],n="pending",o={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return Q.Deferred(function(n){Q.each(t,function(t,o){var r=o[0],a=e[t];i[o[1]](Q.isFunction(a)?function(){var e=a.apply(this,arguments);e&&Q.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[r+"With"](this===i?n:this,[e])}:n[r])}),e=null}).promise()},promise:function(e){return"object"==typeof e?Q.extend(e,o):o}},i={};return o.pipe=o.then,Q.each(t,function(e,r){var a=r[2],s=r[3];o[r[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[r[0]]=a.fire,i[r[0]+"With"]=a.fireWith}),o.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,o,i=0,r=V.call(arguments),a=r.length,s=1!==a||e&&Q.isFunction(e.promise)?a:0,l=1===s?e:Q.Deferred(),c=function(e,n,o){return function(i){n[e]=this,o[e]=arguments.length>1?V.call(arguments):i,o===t?l.notifyWith(n,o):--s||l.resolveWith(n,o)}};if(a>1)for(t=new Array(a),n=new Array(a),o=new Array(a);i<a;i++)r[i]&&Q.isFunction(r[i].promise)?r[i].promise().done(c(i,o,r)).fail(l.reject).progress(c(i,n,t)):--s;return s||l.resolveWith(o,r),l.promise()}}),Q.support=function(){var t,n,o,i,r,a,s,l,c,u,f,d=$.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),o=d.getElementsByTagName("a")[0],o.style.cssText="top:1px;float:left;opacity:.5",!n||!n.length||!o)return{};i=$.createElement("select"),r=i.appendChild($.createElement("option")),a=d.getElementsByTagName("input")[0],t={leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(o.getAttribute("style")),hrefNormalized:"/a"===o.getAttribute("href"),opacity:/^0.5/.test(o.style.opacity),cssFloat:!!o.style.cssFloat,checkOn:"on"===a.value,optSelected:r.selected,getSetAttribute:"t"!==d.className,enctype:!!$.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==$.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===$.compatMode,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,i.disabled=!0,t.optDisabled=!r.disabled;try{delete d.test}catch(p){t.deleteExpando=!1}if(!d.addEventListener&&d.attachEvent&&d.fireEvent&&(d.attachEvent("onclick",f=function(){t.noCloneEvent=!1}),d.cloneNode(!0).fireEvent("onclick"),d.detachEvent("onclick",f)),a=$.createElement("input"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","checked"),a.setAttribute("name","t"),d.appendChild(a),s=$.createDocumentFragment(),s.appendChild(d.lastChild),t.checkClone=s.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=a.checked,s.removeChild(a),s.appendChild(d),d.attachEvent)for(c in{submit:!0,change:!0,focusin:!0})l="on"+c,u=l in d,u||(d.setAttribute(l,"return;"),u="function"==typeof d[l]),t[c+"Bubbles"]=u;return Q(function(){var n,o,i,r,a="padding:0;margin:0;border:0;display:block;overflow:hidden;",s=$.getElementsByTagName("body")[0];s&&(n=$.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",s.insertBefore(n,s.firstChild),o=$.createElement("div"),n.appendChild(o),o.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=o.getElementsByTagName("td"),i[0].style.cssText="padding:0;margin:0;border:0;display:none",u=0===i[0].offsetHeight,i[0].style.display="",i[1].style.display="none",t.reliableHiddenOffsets=u&&0===i[0].offsetHeight,o.innerHTML="",o.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===o.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==s.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(o,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(o,null)||{width:"4px"}).width,r=$.createElement("div"),r.style.cssText=o.style.cssText=a,r.style.marginRight=r.style.width="0",o.style.width="1px",o.appendChild(r),t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),"undefined"!=typeof o.style.zoom&&(o.innerHTML="",o.style.cssText=a+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===o.offsetWidth,o.style.display="block",o.style.overflow="visible",o.innerHTML="<div></div>",o.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==o.offsetWidth,n.style.zoom=1),s.removeChild(n),n=o=i=r=null)}),s.removeChild(d),n=o=i=r=a=s=d=null,t}();var ge=/^(?:\{.*\}|\[.*\])$/,me=/([A-Z])/g;Q.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(Q.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?Q.cache[e[Q.expando]]:e[Q.expando],!!e&&!i(e)},data:function(e,n,o,i){if(Q.acceptData(e)){var r,a,s=Q.expando,l="string"==typeof n,c=e.nodeType,u=c?Q.cache:e,f=c?e[s]:e[s]&&s;if(f&&u[f]&&(i||u[f].data)||!l||o!==t)return f||(c?e[s]=f=Q.deletedIds.pop()||++Q.uuid:f=s),u[f]||(u[f]={},c||(u[f].toJSON=Q.noop)),"object"!=typeof n&&"function"!=typeof n||(i?u[f]=Q.extend(u[f],n):u[f].data=Q.extend(u[f].data,n)),r=u[f],i||(r.data||(r.data={}),r=r.data),o!==t&&(r[Q.camelCase(n)]=o),l?(a=r[n],null==a&&(a=r[Q.camelCase(n)])):a=r,a}},removeData:function(e,t,n){if(Q.acceptData(e)){var o,r,a,s=e.nodeType,l=s?Q.cache:e,c=s?e[Q.expando]:Q.expando;if(l[c]){if(t&&(o=n?l[c]:l[c].data)){Q.isArray(t)||(t in o?t=[t]:(t=Q.camelCase(t),t=t in o?[t]:t.split(" ")));for(r=0,a=t.length;r<a;r++)delete o[t[r]];if(!(n?i:Q.isEmptyObject)(o))return}(n||(delete l[c].data,i(l[c])))&&(s?Q.cleanData([e],!0):Q.support.deleteExpando||l!=l.window?delete l[c]:l[c]=null)}}},_data:function(e,t,n){return Q.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&Q.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),Q.fn.extend({data:function(e,n){var i,r,a,s,l,c=this[0],u=0,f=null;if(e===t){if(this.length&&(f=Q.data(c),1===c.nodeType&&!Q._data(c,"parsedAttrs"))){for(a=c.attributes,l=a.length;u<l;u++)s=a[u].name,0===s.indexOf("data-")&&(s=Q.camelCase(s.substring(5)),o(c,s,f[s]));Q._data(c,"parsedAttrs",!0)}return f}return"object"==typeof e?this.each(function(){Q.data(this,e)}):(i=e.split(".",2),i[1]=i[1]?"."+i[1]:"",r=i[1]+"!",Q.access(this,function(n){return n===t?(f=this.triggerHandler("getData"+r,[i[0]]),f===t&&c&&(f=Q.data(c,e),f=o(c,e,f)),f===t&&i[1]?this.data(i[0]):f):(i[1]=n,void this.each(function(){var t=Q(this);t.triggerHandler("setData"+r,i),Q.data(this,e,n),t.triggerHandler("changeData"+r,i)}))},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){Q.removeData(this,e)})}}),Q.extend({queue:function(e,t,n){var o;if(e)return t=(t||"fx")+"queue",o=Q._data(e,t),n&&(!o||Q.isArray(n)?o=Q._data(e,t,Q.makeArray(n)):o.push(n)),o||[]},dequeue:function(e,t){t=t||"fx";var n=Q.queue(e,t),o=n.shift(),i=Q._queueHooks(e,t),r=function(){Q.dequeue(e,t)};"inprogress"===o&&(o=n.shift()),o&&("fx"===t&&n.unshift("inprogress"),delete i.stop,o.call(e,r,i)),!n.length&&i&&i.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q._data(e,n)||Q._data(e,n,{empty:Q.Callbacks("once memory").add(function(){Q.removeData(e,t+"queue",!0),Q.removeData(e,n,!0)})})}}),Q.fn.extend({queue:function(e,n){var o=2;return"string"!=typeof e&&(n=e,e="fx",o--),arguments.length<o?Q.queue(this[0],e):n===t?this:this.each(function(){var t=Q.queue(this,e,n);Q._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&Q.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Q.dequeue(this,e)})},delay:function(e,t){return e=Q.fx?Q.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var o=setTimeout(t,e);n.stop=function(){clearTimeout(o)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var o,i=1,r=Q.Deferred(),a=this,s=this.length,l=function(){--i||r.resolveWith(a,[a])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";s--;)(o=Q._data(a[s],e+"queueHooks"))&&o.empty&&(i++,o.empty.add(l));return l(),r.promise(n)}});var ve,ye,be,we=/[\t\r\n]/g,xe=/\r/g,Ce=/^(?:button|input)$/i,ke=/^(?:button|input|object|select|textarea)$/i,Te=/^a(?:rea|)$/i,Se=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,Ae=Q.support.getSetAttribute;Q.fn.extend({attr:function(e,t){return Q.access(this,Q.attr,e,t,arguments.length>1);
},removeAttr:function(e){return this.each(function(){Q.removeAttr(this,e)})},prop:function(e,t){return Q.access(this,Q.prop,e,t,arguments.length>1)},removeProp:function(e){return e=Q.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,o,i,r,a,s;if(Q.isFunction(e))return this.each(function(t){Q(this).addClass(e.call(this,t,this.className))});if(e&&"string"==typeof e)for(t=e.split(te),n=0,o=this.length;n<o;n++)if(i=this[n],1===i.nodeType)if(i.className||1!==t.length){for(r=" "+i.className+" ",a=0,s=t.length;a<s;a++)~r.indexOf(" "+t[a]+" ")||(r+=t[a]+" ");i.className=Q.trim(r)}else i.className=e;return this},removeClass:function(e){var n,o,i,r,a,s,l;if(Q.isFunction(e))return this.each(function(t){Q(this).removeClass(e.call(this,t,this.className))});if(e&&"string"==typeof e||e===t)for(n=(e||"").split(te),s=0,l=this.length;s<l;s++)if(i=this[s],1===i.nodeType&&i.className){for(o=(" "+i.className+" ").replace(we," "),r=0,a=n.length;r<a;r++)for(;o.indexOf(" "+n[r]+" ")>-1;)o=o.replace(" "+n[r]+" "," ");i.className=e?Q.trim(o):""}return this},toggleClass:function(e,t){var n=typeof e,o="boolean"==typeof t;return Q.isFunction(e)?this.each(function(n){Q(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var i,r=0,a=Q(this),s=t,l=e.split(te);i=l[r++];)s=o?s:!a.hasClass(i),a[s?"addClass":"removeClass"](i);else"undefined"!==n&&"boolean"!==n||(this.className&&Q._data(this,"__className__",this.className),this.className=this.className||e===!1?"":Q._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,o=this.length;n<o;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(we," ").indexOf(t)>-1)return!0;return!1},val:function(e){var n,o,i,r=this[0];{if(arguments.length)return i=Q.isFunction(e),this.each(function(o){var r,a=Q(this);1===this.nodeType&&(r=i?e.call(this,o,a.val()):e,null==r?r="":"number"==typeof r?r+="":Q.isArray(r)&&(r=Q.map(r,function(e){return null==e?"":e+""})),n=Q.valHooks[this.type]||Q.valHooks[this.nodeName.toLowerCase()],n&&"set"in n&&n.set(this,r,"value")!==t||(this.value=r))});if(r)return n=Q.valHooks[r.type]||Q.valHooks[r.nodeName.toLowerCase()],n&&"get"in n&&(o=n.get(r,"value"))!==t?o:(o=r.value,"string"==typeof o?o.replace(xe,""):null==o?"":o)}}}),Q.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,o,i,r=e.selectedIndex,a=[],s=e.options,l="select-one"===e.type;if(r<0)return null;for(n=l?r:0,o=l?r+1:s.length;n<o;n++)if(i=s[n],i.selected&&(Q.support.optDisabled?!i.disabled:null===i.getAttribute("disabled"))&&(!i.parentNode.disabled||!Q.nodeName(i.parentNode,"optgroup"))){if(t=Q(i).val(),l)return t;a.push(t)}return l&&!a.length&&s.length?Q(s[r]).val():a},set:function(e,t){var n=Q.makeArray(t);return Q(e).find("option").each(function(){this.selected=Q.inArray(Q(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,o,i){var r,a,s,l=e.nodeType;if(e&&3!==l&&8!==l&&2!==l)return i&&Q.isFunction(Q.fn[n])?Q(e)[n](o):"undefined"==typeof e.getAttribute?Q.prop(e,n,o):(s=1!==l||!Q.isXMLDoc(e),s&&(n=n.toLowerCase(),a=Q.attrHooks[n]||(Se.test(n)?ye:ve)),o!==t?null===o?void Q.removeAttr(e,n):a&&"set"in a&&s&&(r=a.set(e,o,n))!==t?r:(e.setAttribute(n,""+o),o):a&&"get"in a&&s&&null!==(r=a.get(e,n))?r:(r=e.getAttribute(n),null===r?t:r))},removeAttr:function(e,t){var n,o,i,r,a=0;if(t&&1===e.nodeType)for(o=t.split(te);a<o.length;a++)i=o[a],i&&(n=Q.propFix[i]||i,r=Se.test(i),r||Q.attr(e,i,""),e.removeAttribute(Ae?i:n),r&&n in e&&(e[n]=!1))},attrHooks:{type:{set:function(e,t){if(Ce.test(e.nodeName)&&e.parentNode)Q.error("type property can't be changed");else if(!Q.support.radioValue&&"radio"===t&&Q.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return ve&&Q.nodeName(e,"button")?ve.get(e,t):t in e?e.value:null},set:function(e,t,n){return ve&&Q.nodeName(e,"button")?ve.set(e,t,n):void(e.value=t)}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,o){var i,r,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!Q.isXMLDoc(e),a&&(n=Q.propFix[n]||n,r=Q.propHooks[n]),o!==t?r&&"set"in r&&(i=r.set(e,o,n))!==t?i:e[n]=o:r&&"get"in r&&null!==(i=r.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):ke.test(e.nodeName)||Te.test(e.nodeName)&&e.href?0:t}}}}),ye={get:function(e,n){var o,i=Q.prop(e,n);return i===!0||"boolean"!=typeof i&&(o=e.getAttributeNode(n))&&o.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var o;return t===!1?Q.removeAttr(e,n):(o=Q.propFix[n]||n,o in e&&(e[o]=!0),e.setAttribute(n,n.toLowerCase())),n}},Ae||(be={name:!0,id:!0,coords:!0},ve=Q.valHooks.button={get:function(e,n){var o;return o=e.getAttributeNode(n),o&&(be[n]?""!==o.value:o.specified)?o.value:t},set:function(e,t,n){var o=e.getAttributeNode(n);return o||(o=$.createAttribute(n),e.setAttributeNode(o)),o.value=t+""}},Q.each(["width","height"],function(e,t){Q.attrHooks[t]=Q.extend(Q.attrHooks[t],{set:function(e,n){if(""===n)return e.setAttribute(t,"auto"),n}})}),Q.attrHooks.contenteditable={get:ve.get,set:function(e,t,n){""===t&&(t="false"),ve.set(e,t,n)}}),Q.support.hrefNormalized||Q.each(["href","src","width","height"],function(e,n){Q.attrHooks[n]=Q.extend(Q.attrHooks[n],{get:function(e){var o=e.getAttribute(n,2);return null===o?t:o}})}),Q.support.style||(Q.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=""+t}}),Q.support.optSelected||(Q.propHooks.selected=Q.extend(Q.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),Q.support.enctype||(Q.propFix.enctype="encoding"),Q.support.checkOn||Q.each(["radio","checkbox"],function(){Q.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),Q.each(["radio","checkbox"],function(){Q.valHooks[this]=Q.extend(Q.valHooks[this],{set:function(e,t){if(Q.isArray(t))return e.checked=Q.inArray(Q(e).val(),t)>=0}})});var Ee=/^(?:textarea|input|select)$/i,Ne=/^([^\.]*|)(?:\.(.+)|)$/,_e=/(?:^|\s)hover(\.\S+|)\b/,Le=/^key/,Pe=/^(?:mouse|contextmenu)|click/,Me=/^(?:focusinfocus|focusoutblur)$/,je=function(e){return Q.event.special.hover?e:e.replace(_e,"mouseenter$1 mouseleave$1")};Q.event={add:function(e,n,o,i,r){var a,s,l,c,u,f,d,p,h,g,m;if(3!==e.nodeType&&8!==e.nodeType&&n&&o&&(a=Q._data(e))){for(o.handler&&(h=o,o=h.handler,r=h.selector),o.guid||(o.guid=Q.guid++),l=a.events,l||(a.events=l={}),s=a.handle,s||(a.handle=s=function(e){return"undefined"==typeof Q||e&&Q.event.triggered===e.type?t:Q.event.dispatch.apply(s.elem,arguments)},s.elem=e),n=Q.trim(je(n)).split(" "),c=0;c<n.length;c++)u=Ne.exec(n[c])||[],f=u[1],d=(u[2]||"").split(".").sort(),m=Q.event.special[f]||{},f=(r?m.delegateType:m.bindType)||f,m=Q.event.special[f]||{},p=Q.extend({type:f,origType:u[1],data:i,handler:o,guid:o.guid,selector:r,namespace:d.join(".")},h),g=l[f],g||(g=l[f]=[],g.delegateCount=0,m.setup&&m.setup.call(e,i,d,s)!==!1||(e.addEventListener?e.addEventListener(f,s,!1):e.attachEvent&&e.attachEvent("on"+f,s))),m.add&&(m.add.call(e,p),p.handler.guid||(p.handler.guid=o.guid)),r?g.splice(g.delegateCount++,0,p):g.push(p),Q.event.global[f]=!0;e=null}},global:{},remove:function(e,t,n,o,i){var r,a,s,l,c,u,f,d,p,h,g,m=Q.hasData(e)&&Q._data(e);if(m&&(d=m.events)){for(t=Q.trim(je(t||"")).split(" "),r=0;r<t.length;r++)if(a=Ne.exec(t[r])||[],s=l=a[1],c=a[2],s){for(p=Q.event.special[s]||{},s=(o?p.delegateType:p.bindType)||s,h=d[s]||[],u=h.length,c=c?new RegExp("(^|\\.)"+c.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null,f=0;f<h.length;f++)g=h[f],(i||l===g.origType)&&(!n||n.guid===g.guid)&&(!c||c.test(g.namespace))&&(!o||o===g.selector||"**"===o&&g.selector)&&(h.splice(f--,1),g.selector&&h.delegateCount--,p.remove&&p.remove.call(e,g));0===h.length&&u!==h.length&&((!p.teardown||p.teardown.call(e,c,m.handle)===!1)&&Q.removeEvent(e,s,m.handle),delete d[s])}else for(s in d)Q.event.remove(e,s+t[r],n,o,!0);Q.isEmptyObject(d)&&(delete m.handle,Q.removeData(e,"events",!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,o,i,r){if(!i||3!==i.nodeType&&8!==i.nodeType){var a,s,l,c,u,f,d,p,h,g,m=n.type||n,v=[];if(Me.test(m+Q.event.triggered))return;if(m.indexOf("!")>=0&&(m=m.slice(0,-1),s=!0),m.indexOf(".")>=0&&(v=m.split("."),m=v.shift(),v.sort()),(!i||Q.event.customEvent[m])&&!Q.event.global[m])return;if(n="object"==typeof n?n[Q.expando]?n:new Q.Event(m,n):new Q.Event(m),n.type=m,n.isTrigger=!0,n.exclusive=s,n.namespace=v.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,f=m.indexOf(":")<0?"on"+m:"",!i){a=Q.cache;for(l in a)a[l].events&&a[l].events[m]&&Q.event.trigger(n,o,a[l].handle.elem,!0);return}if(n.result=t,n.target||(n.target=i),o=null!=o?Q.makeArray(o):[],o.unshift(n),d=Q.event.special[m]||{},d.trigger&&d.trigger.apply(i,o)===!1)return;if(h=[[i,d.bindType||m]],!r&&!d.noBubble&&!Q.isWindow(i)){for(g=d.delegateType||m,c=Me.test(g+m)?i:i.parentNode,u=i;c;c=c.parentNode)h.push([c,g]),u=c;u===(i.ownerDocument||$)&&h.push([u.defaultView||u.parentWindow||e,g])}for(l=0;l<h.length&&!n.isPropagationStopped();l++)c=h[l][0],n.type=h[l][1],p=(Q._data(c,"events")||{})[n.type]&&Q._data(c,"handle"),p&&p.apply(c,o),p=f&&c[f],p&&Q.acceptData(c)&&p.apply(c,o)===!1&&n.preventDefault();return n.type=m,!r&&!n.isDefaultPrevented()&&(!d._default||d._default.apply(i.ownerDocument,o)===!1)&&("click"!==m||!Q.nodeName(i,"a"))&&Q.acceptData(i)&&f&&i[m]&&("focus"!==m&&"blur"!==m||0!==n.target.offsetWidth)&&!Q.isWindow(i)&&(u=i[f],u&&(i[f]=null),Q.event.triggered=m,i[m](),Q.event.triggered=t,u&&(i[f]=u)),n.result}},dispatch:function(n){n=Q.event.fix(n||e.event);var o,i,r,a,s,l,c,u,f,d,p=(Q._data(this,"events")||{})[n.type]||[],h=p.delegateCount,g=[].slice.call(arguments),m=!n.exclusive&&!n.namespace,v=Q.event.special[n.type]||{},y=[];if(g[0]=n,n.delegateTarget=this,!v.preDispatch||v.preDispatch.call(this,n)!==!1){if(h&&(!n.button||"click"!==n.type))for(a=Q(this),a.context=this,r=n.target;r!=this;r=r.parentNode||this)if(r.disabled!==!0||"click"!==n.type){for(l={},u=[],a[0]=r,o=0;o<h;o++)f=p[o],d=f.selector,l[d]===t&&(l[d]=a.is(d)),l[d]&&u.push(f);u.length&&y.push({elem:r,matches:u})}for(p.length>h&&y.push({elem:this,matches:p.slice(h)}),o=0;o<y.length&&!n.isPropagationStopped();o++)for(c=y[o],n.currentTarget=c.elem,i=0;i<c.matches.length&&!n.isImmediatePropagationStopped();i++)f=c.matches[i],(m||!n.namespace&&!f.namespace||n.namespace_re&&n.namespace_re.test(f.namespace))&&(n.data=f.data,n.handleObj=f,s=((Q.event.special[f.origType]||{}).handle||f.handler).apply(c.elem,g),s!==t&&(n.result=s,s===!1&&(n.preventDefault(),n.stopPropagation())));return v.postDispatch&&v.postDispatch.call(this,n),n.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var o,i,r,a=n.button,s=n.fromElement;return null==e.pageX&&null!=n.clientX&&(o=e.target.ownerDocument||$,i=o.documentElement,r=o.body,e.pageX=n.clientX+(i&&i.scrollLeft||r&&r.scrollLeft||0)-(i&&i.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&s&&(e.relatedTarget=s===e.target?n.toElement:s),!e.which&&a!==t&&(e.which=1&a?1:2&a?3:4&a?2:0),e}},fix:function(e){if(e[Q.expando])return e;var t,n,o=e,i=Q.event.fixHooks[e.type]||{},r=i.props?this.props.concat(i.props):this.props;for(e=Q.Event(o),t=r.length;t;)n=r[--t],e[n]=o[n];return e.target||(e.target=o.srcElement||$),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,i.filter?i.filter(e,o):e},special:{ready:{setup:Q.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){Q.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,o){var i=Q.extend(new Q.Event,n,{type:e,isSimulated:!0,originalEvent:{}});o?Q.event.trigger(i,null,t):Q.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},Q.event.handle=Q.event.dispatch,Q.removeEvent=$.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var o="on"+t;e.detachEvent&&("undefined"==typeof e[o]&&(e[o]=null),e.detachEvent(o,n))},Q.Event=function(e,t){return this instanceof Q.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?a:r):this.type=e,t&&Q.extend(this,t),this.timeStamp=e&&e.timeStamp||Q.now(),this[Q.expando]=!0,void 0):new Q.Event(e,t)},Q.Event.prototype={preventDefault:function(){this.isDefaultPrevented=a;var e=this.originalEvent;e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=a;var e=this.originalEvent;e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=a,this.stopPropagation()},isDefaultPrevented:r,isPropagationStopped:r,isImmediatePropagationStopped:r},Q.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){Q.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,o=this,i=e.relatedTarget,r=e.handleObj;r.selector;return i&&(i===o||Q.contains(o,i))||(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}}),Q.support.submitBubbles||(Q.event.special.submit={setup:function(){return!Q.nodeName(this,"form")&&void Q.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,o=Q.nodeName(n,"input")||Q.nodeName(n,"button")?n.form:t;o&&!Q._data(o,"_submit_attached")&&(Q.event.add(o,"submit._submit",function(e){e._submit_bubble=!0}),Q._data(o,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&Q.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return!Q.nodeName(this,"form")&&void Q.event.remove(this,"._submit")}}),Q.support.changeBubbles||(Q.event.special.change={setup:function(){return Ee.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(Q.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),Q.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),Q.event.simulate("change",this,e,!0)})),!1):void Q.event.add(this,"beforeactivate._change",function(e){var t=e.target;Ee.test(t.nodeName)&&!Q._data(t,"_change_attached")&&(Q.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&Q.event.simulate("change",this.parentNode,e,!0)}),Q._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type)return e.handleObj.handler.apply(this,arguments)},teardown:function(){return Q.event.remove(this,"._change"),Ee.test(this.nodeName)}}),Q.support.focusinBubbles||Q.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,o=function(e){Q.event.simulate(t,e.target,Q.event.fix(e),!0)};Q.event.special[t]={setup:function(){0===n++&&$.addEventListener(e,o,!0)},teardown:function(){0===--n&&$.removeEventListener(e,o,!0)}}}),Q.fn.extend({on:function(e,n,o,i,a){var s,l;if("object"==typeof e){"string"!=typeof n&&(o=o||n,n=t);for(l in e)this.on(l,n,o,e[l],a);return this}if(null==o&&null==i?(i=n,o=n=t):null==i&&("string"==typeof n?(i=o,o=t):(i=o,o=n,n=t)),i===!1)i=r;else if(!i)return this;return 1===a&&(s=i,i=function(e){return Q().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=Q.guid++)),this.each(function(){Q.event.add(this,e,i,o,n)})},one:function(e,t,n,o){return this.on(e,t,n,o,1)},off:function(e,n,o){var i,a;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,Q(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(a in e)this.off(a,n,e[a]);return this}return n!==!1&&"function"!=typeof n||(o=n,n=t),o===!1&&(o=r),this.each(function(){Q.event.remove(this,e,o,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return Q(this.context).on(e,this.selector,t,n),this},die:function(e,t){return Q(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,o){return this.on(t,e,n,o)},undelegate:function(e,t,n){return 1==arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){Q.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return Q.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||Q.guid++,o=0,i=function(n){var i=(Q._data(this,"lastToggle"+e.guid)||0)%o;return Q._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};for(i.guid=n;o<t.length;)t[o++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){Q.fn[t]=function(e,n){return null==n&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Le.test(t)&&(Q.event.fixHooks[t]=Q.event.keyHooks),Pe.test(t)&&(Q.event.fixHooks[t]=Q.event.mouseHooks)}),function(e,t){function n(e,t,n,o){for(var i=0,r=t.length;i<r;i++)re(e,t[i],n,o)}function o(e,t,o,i,r,a){var s,l=ae.setFilters[t.toLowerCase()];return l||re.error(t),(e||!(s=r))&&n(e||"*",i,s=[],r),s.length>0?l(s,o,a):[]}function i(e,i,r,a,s){for(var l,c,u,f,d,p,h,g,m=0,v=s.length,y=q.POS,b=new RegExp("^"+y.source+"(?!"+T+")","i"),w=function(){for(var e=1,n=arguments.length-2;e<n;e++)arguments[e]===t&&(l[e]=t)};m<v;m++){for(y.exec(""),e=s[m],f=[],u=0,d=a;l=y.exec(e);)g=y.lastIndex=l.index+l[0].length,g>u&&(h=e.slice(u,l.index),u=g,p=[i],H.test(h)&&(d&&(p=d),d=a),(c=F.test(h))&&(h=h.slice(0,-5).replace(H,"$&*")),l.length>1&&l[0].replace(b,w),d=o(h,l[1],l[2],p,d,c));d?(f=f.concat(d),(h=e.slice(u))&&")"!==h?H.test(h)?n(h,f,r,a):re(h,i,r,a?a.concat(d):d):C.apply(r,f)):re(e,i,r,a)}return 1===v?r:re.uniqueSort(r)}function r(e,t,n){for(var o,i,r,a=[],s=0,l=I.exec(e),c=!l.pop()&&!l.pop(),u=c&&e.match(B)||[""],f=ae.preFilter,d=ae.filter,p=!n&&t!==g;null!=(i=u[s])&&c;s++)for(a.push(o=[]),p&&(i=" "+i);i;){c=!1,(l=H.exec(i))&&(i=i.slice(l[0].length),c=o.push({part:l.pop().replace(j," "),captures:l}));for(r in d)(l=q[r].exec(i))&&(!f[r]||(l=f[r](l,t,n)))&&(i=i.slice(l.shift().length),c=o.push({part:r,captures:l}));if(!c)break}return c||re.error(e),a}function a(e,t,n){var o=t.dir,i=w++;return e||(e=function(e){return e===n}),t.first?function(t,n){for(;t=t[o];)if(1===t.nodeType)return e(t,n)&&t}:function(t,n){for(var r,a=i+"."+f,s=a+"."+u;t=t[o];)if(1===t.nodeType){if((r=t[k])===s)return t.sizset;if("string"==typeof r&&0===r.indexOf(a)){if(t.sizset)return t}else{if(t[k]=s,e(t,n))return t.sizset=!0,t;t.sizset=!1}}}}function s(e,t){return e?function(n,o){var i=t(n,o);return i&&e(i===!0?n:i,o)}:t}function l(e,t,n){for(var o,i,r=0;o=e[r];r++)ae.relative[o.part]?i=a(i,ae.relative[o.part],t):(o.captures.push(t,n),i=s(i,ae.filter[o.part].apply(null,o.captures)));return i}function c(e){return function(t,n){for(var o,i=0;o=e[i];i++)if(o(t,n))return!0;return!1}}var u,f,d,p,h,g=e.document,m=g.documentElement,v="undefined",y=!1,b=!0,w=0,x=[].slice,C=[].push,k=("sizcache"+Math.random()).replace(".",""),T="[\\x20\\t\\r\\n\\f]",S="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",A=S.replace("w","w#"),E="([*^$|!~]?=)",N="\\["+T+"*("+S+")"+T+"*(?:"+E+T+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+A+")|)|)"+T+"*\\]",_=":("+S+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|((?:[^,]|\\\\,|(?:,(?=[^\\[]*\\]))|(?:,(?=[^\\(]*\\))))*))\\)|)",L=":(nth|eq|gt|lt|first|last|even|odd)(?:\\((\\d*)\\)|)(?=[^-]|$)",P=T+"*([\\x20\\t\\r\\n\\f>+~])"+T+"*",M="(?=[^\\x20\\t\\r\\n\\f])(?:\\\\.|"+N+"|"+_.replace(2,7)+"|[^\\\\(),])+",j=new RegExp("^"+T+"+|((?:^|[^\\\\])(?:\\\\.)*)"+T+"+$","g"),H=new RegExp("^"+P),B=new RegExp(M+"?(?="+T+"*,|$)","g"),I=new RegExp("^(?:(?!,)(?:(?:^|,)"+T+"*"+M+")*?|"+T+"*(.*?))(\\)|$)"),D=new RegExp(M.slice(19,-6)+"\\x20\\t\\r\\n\\f>+~])+|"+P,"g"),O=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Y=/[\x20\t\r\n\f]*[+~]/,F=/:not\($/,$=/h\d/i,W=/input|select|textarea|button/i,R=/\\(?!\\)/g,q={ID:new RegExp("^#("+S+")"),CLASS:new RegExp("^\\.("+S+")"),NAME:new RegExp("^\\[name=['\"]?("+S+")['\"]?\\]"),TAG:new RegExp("^("+S.replace("[-","[-\\*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+_),CHILD:new RegExp("^:(only|nth|last|first)-child(?:\\("+T+"*(even|odd|(([+-]|)(\\d*)n|)"+T+"*(?:([+-]|)"+T+"*(\\d+)|))"+T+"*\\)|)","i"),POS:new RegExp(L,"ig"),needsContext:new RegExp("^"+T+"*[>+~]|"+L,"i")},U={},z=[],V={},X=[],J=function(e){return e.sizzleFilter=!0,e},G=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}},K=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}},Z=function(e){var t=!1,n=g.createElement("div");try{t=e(n)}catch(o){}return n=null,t},ee=Z(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),te=Z(function(e){e.id=k+0,e.innerHTML="<a name='"+k+"'></a><div name='"+k+"'></div>",m.insertBefore(e,m.firstChild);var t=g.getElementsByName&&g.getElementsByName(k).length===2+g.getElementsByName(k+0).length;return h=!g.getElementById(k),m.removeChild(e),t}),ne=Z(function(e){return e.appendChild(g.createComment("")),0===e.getElementsByTagName("*").length}),oe=Z(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==v&&"#"===e.firstChild.getAttribute("href")}),ie=Z(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!(!e.getElementsByClassName||0===e.getElementsByClassName("e").length)&&(e.lastChild.className="e",1!==e.getElementsByClassName("e").length)}),re=function(e,t,n,o){n=n||[],t=t||g;var i,r,a,s,l=t.nodeType;if(1!==l&&9!==l)return[];if(!e||"string"!=typeof e)return n;if(a=le(t),!a&&!o&&(i=O.exec(e)))if(s=i[1]){if(9===l){if(r=t.getElementById(s),!r||!r.parentNode)return n;if(r.id===s)return n.push(r),n}else if(t.ownerDocument&&(r=t.ownerDocument.getElementById(s))&&ce(t,r)&&r.id===s)return n.push(r),n}else{if(i[2])return C.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((s=i[3])&&ie&&t.getElementsByClassName)return C.apply(n,x.call(t.getElementsByClassName(s),0)),n}return de(e,t,n,o,a)},ae=re.selectors={cacheLength:50,match:q,order:["ID","TAG"],attrHandle:{},createPseudo:J,find:{ID:h?function(e,t,n){if(typeof t.getElementById!==v&&!n){var o=t.getElementById(e);return o&&o.parentNode?[o]:[]}}:function(e,n,o){if(typeof n.getElementById!==v&&!o){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==v&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:ne?function(e,t){if(typeof t.getElementsByTagName!==v)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if("*"===e){for(var o,i=[],r=0;o=n[r];r++)1===o.nodeType&&i.push(o);return i}return n}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(R,""),e[3]=(e[4]||e[5]||"").replace(R,""),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1]?(e[2]||re.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*("even"===e[2]||"odd"===e[2])),e[4]=+(e[6]+e[7]||"odd"===e[2])):e[2]&&re.error(e[0]),e},PSEUDO:function(e){var t,n=e[4];return q.CHILD.test(e[0])?null:(n&&(t=I.exec(n))&&t.pop()&&(e[0]=e[0].slice(0,t[0].length-n.length-1),n=t[0].slice(0,-1)),e.splice(2,3,n||e[3]),e)}},filter:{ID:h?function(e){return e=e.replace(R,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace(R,""),function(t){var n=typeof t.getAttributeNode!==v&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(R,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=U[e];return t||(t=U[e]=new RegExp("(^|"+T+")"+e+"("+T+"|$)"),z.push(e),z.length>ae.cacheLength&&delete U[z.shift()]),function(e){return t.test(e.className||typeof e.getAttribute!==v&&e.getAttribute("class")||"")}},ATTR:function(e,t,n){return t?function(o){var i=re.attr(o,e),r=i+"";if(null==i)return"!="===t;switch(t){case"=":return r===n;case"!=":return r!==n;case"^=":return n&&0===r.indexOf(n);case"*=":return n&&r.indexOf(n)>-1;case"$=":return n&&r.substr(r.length-n.length)===n;case"~=":return(" "+r+" ").indexOf(n)>-1;case"|=":return r===n||r.substr(0,n.length+1)===n+"-"}}:function(t){return null!=re.attr(t,e)}},CHILD:function(e,t,n,o){if("nth"===e){var i=w++;return function(e){var t,r,a=0,s=e;if(1===n&&0===o)return!0;if(t=e.parentNode,t&&(t[k]!==i||!e.sizset)){for(s=t.firstChild;s&&(1!==s.nodeType||(s.sizset=++a,s!==e));s=s.nextSibling);t[k]=i}return r=e.sizset-o,0===n?0===r:r%n===0&&r/n>=0}}return function(t){var n=t;switch(e){case"only":case"first":for(;n=n.previousSibling;)if(1===n.nodeType)return!1;if("first"===e)return!0;n=t;case"last":for(;n=n.nextSibling;)if(1===n.nodeType)return!1;return!0}}},PSEUDO:function(e,t,n,o){var i=ae.pseudos[e]||ae.pseudos[e.toLowerCase()];return i||re.error("unsupported pseudo: "+e),i.sizzleFilter?i(t,n,o):i}},pseudos:{not:J(function(e,t,n){var o=fe(e.replace(j,"$1"),t,n);return function(e){return!o(e)}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!ae.pseudos.empty(e)},empty:function(e){var t;for(e=e.firstChild;e;){if(e.nodeName>"@"||3===(t=e.nodeType)||4===t)return!1;e=e.nextSibling}return!0},contains:J(function(e){return function(t){return(t.textContent||t.innerText||ue(t)).indexOf(e)>-1}}),has:J(function(e){return function(t){return re(e,t).length>0}}),header:function(e){return $.test(e.nodeName)},text:function(e){var t,n;return"input"===e.nodeName.toLowerCase()&&"text"===(t=e.type)&&(null==(n=e.getAttribute("type"))||n.toLowerCase()===t)},radio:G("radio"),checkbox:G("checkbox"),file:G("file"),password:G("password"),image:G("image"),submit:K("submit"),reset:K("reset"),button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},input:function(e){return W.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&(!!e.type||!!e.href)},active:function(e){return e===e.ownerDocument.activeElement}},setFilters:{first:function(e,t,n){return n?e.slice(1):[e[0]]},last:function(e,t,n){var o=e.pop();return n?e:[o]},even:function(e,t,n){for(var o=[],i=n?1:0,r=e.length;i<r;i+=2)o.push(e[i]);return o},odd:function(e,t,n){for(var o=[],i=n?0:1,r=e.length;i<r;i+=2)o.push(e[i]);return o},lt:function(e,t,n){return n?e.slice(+t):e.slice(0,+t)},gt:function(e,t,n){return n?e.slice(0,+t+1):e.slice(+t+1)},eq:function(e,t,n){var o=e.splice(+t,1);return n?e:o}}};ae.setFilters.nth=ae.setFilters.eq,ae.filters=ae.pseudos,oe||(ae.attrHandle={href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}}),te&&(ae.order.push("NAME"),ae.find.NAME=function(e,t){if(typeof t.getElementsByName!==v)return t.getElementsByName(e)}),ie&&(ae.order.splice(1,0,"CLASS"),ae.find.CLASS=function(e,t,n){if(typeof t.getElementsByClassName!==v&&!n)return t.getElementsByClassName(e)});try{x.call(m.childNodes,0)[0].nodeType}catch(se){x=function(e){for(var t,n=[];t=this[e];e++)n.push(t);return n}}var le=re.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},ce=re.contains=m.compareDocumentPosition?function(e,t){return!!(16&e.compareDocumentPosition(t))}:m.contains?function(e,t){var n=9===e.nodeType?e.documentElement:e,o=t.parentNode;return e===o||!!(o&&1===o.nodeType&&n.contains&&n.contains(o))}:function(e,t){for(;t=t.parentNode;)if(t===e)return!0;return!1},ue=re.getText=function(e){var t,n="",o=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=ue(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[o];o++)n+=ue(t);return n};re.attr=function(e,t){var n,o=le(e);return o||(t=t.toLowerCase()),ae.attrHandle[t]?ae.attrHandle[t](e):ee||o?e.getAttribute(t):(n=e.getAttributeNode(t),n?"boolean"==typeof e[t]?e[t]?t:null:n.specified?n.value:null:null)},re.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},[0,0].sort(function(){return b=0}),m.compareDocumentPosition?d=function(e,t){return e===t?(y=!0,0):(e.compareDocumentPosition&&t.compareDocumentPosition?4&e.compareDocumentPosition(t):e.compareDocumentPosition)?-1:1}:(d=function(e,t){if(e===t)return y=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,o,i=[],r=[],a=e.parentNode,s=t.parentNode,l=a;if(a===s)return p(e,t);if(!a)return-1;if(!s)return 1;for(;l;)i.unshift(l),l=l.parentNode;for(l=s;l;)r.unshift(l),l=l.parentNode;n=i.length,o=r.length;for(var c=0;c<n&&c<o;c++)if(i[c]!==r[c])return p(i[c],r[c]);return c===n?p(e,r[c],-1):p(i[c],t,1)},p=function(e,t,n){if(e===t)return n;for(var o=e.nextSibling;o;){if(o===t)return-1;o=o.nextSibling}return 1}),re.uniqueSort=function(e){var t,n=1;if(d&&(y=b,e.sort(d),y))for(;t=e[n];n++)t===e[n-1]&&e.splice(n--,1);return e};var fe=re.compile=function(e,t,n){var o,i,a,s=V[e];if(s&&s.context===t)return s;for(i=r(e,t,n),a=0;o=i[a];a++)i[a]=l(o,t,n);return s=V[e]=c(i),s.context=t,s.runs=s.dirruns=0,X.push(e),X.length>ae.cacheLength&&delete V[X.shift()],s};re.matches=function(e,t){return re(e,null,null,t)},re.matchesSelector=function(e,t){return re(t,null,null,[e]).length>0};var de=function(e,t,n,o,r){e=e.replace(j,"$1");var a,s,l,c,d,p,h,g,m,v=e.match(B),y=e.match(D),b=t.nodeType;if(q.POS.test(e))return i(e,t,n,o,v);if(o)a=x.call(o,0);else if(v&&1===v.length){if(y.length>1&&9===b&&!r&&(v=q.ID.exec(y[0]))){if(t=ae.find.ID(v[1],t,r)[0],!t)return n;e=e.slice(y.shift().length)}for(g=(v=Y.exec(y[0]))&&!v.index&&t.parentNode||t,m=y.pop(),p=m.split(":not")[0],l=0,c=ae.order.length;l<c;l++)if(h=ae.order[l],v=q[h].exec(p)){if(a=ae.find[h]((v[1]||"").replace(R,""),g,r),null==a)continue;p===m&&(e=e.slice(0,e.length-m.length)+p.replace(q[h],""),e||C.apply(n,x.call(a,0)));break}}if(e)for(s=fe(e,t,r),f=s.dirruns++,null==a&&(a=ae.find.TAG("*",Y.test(e)&&t.parentNode||t)),l=0;d=a[l];l++)u=s.runs++,s(d,t)&&n.push(d);return n};g.querySelectorAll&&function(){var e,t=de,n=/'|\\/g,o=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[],r=[":active"],a=m.matchesSelector||m.mozMatchesSelector||m.webkitMatchesSelector||m.oMatchesSelector||m.msMatchesSelector;Z(function(e){e.innerHTML="<select><option selected></option></select>",
e.querySelectorAll("[selected]").length||i.push("\\["+T+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),Z(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+T+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=i.length&&new RegExp(i.join("|")),de=function(e,o,r,a,s){if(!(a||s||i&&i.test(e)))if(9===o.nodeType)try{return C.apply(r,x.call(o.querySelectorAll(e),0)),r}catch(l){}else if(1===o.nodeType&&"object"!==o.nodeName.toLowerCase()){var c=o.getAttribute("id"),u=c||k,f=Y.test(e)&&o.parentNode||o;c?u=u.replace(n,"\\$&"):o.setAttribute("id",u);try{return C.apply(r,x.call(f.querySelectorAll(e.replace(B,"[id='"+u+"'] $&")),0)),r}catch(l){}finally{c||o.removeAttribute("id")}}return t(e,o,r,a,s)},a&&(Z(function(t){e=a.call(t,"div");try{a.call(t,"[test!='']:sizzle"),r.push(ae.match.PSEUDO)}catch(n){}}),r=new RegExp(r.join("|")),re.matchesSelector=function(t,n){if(n=n.replace(o,"='$1']"),!(le(t)||r.test(n)||i&&i.test(n)))try{var s=a.call(t,n);if(s||e||t.document&&11!==t.document.nodeType)return s}catch(l){}return re(n,null,null,[t]).length>0})}(),re.attr=Q.attr,Q.find=re,Q.expr=re.selectors,Q.expr[":"]=Q.expr.pseudos,Q.unique=re.uniqueSort,Q.text=re.getText,Q.isXMLDoc=re.isXML,Q.contains=re.contains}(e);var He=/Until$/,Be=/^(?:parents|prev(?:Until|All))/,Ie=/^.[^:#\[\.,]*$/,De=Q.expr.match.needsContext,Oe={children:!0,contents:!0,next:!0,prev:!0};Q.fn.extend({find:function(e){var t,n,o,i,r,a,s=this;if("string"!=typeof e)return Q(e).filter(function(){for(t=0,n=s.length;t<n;t++)if(Q.contains(s[t],this))return!0});for(a=this.pushStack("","find",e),t=0,n=this.length;t<n;t++)if(o=a.length,Q.find(e,this[t],a),t>0)for(i=o;i<a.length;i++)for(r=0;r<o;r++)if(a[r]===a[i]){a.splice(i--,1);break}return a},has:function(e){var t,n=Q(e,this),o=n.length;return this.filter(function(){for(t=0;t<o;t++)if(Q.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(c(this,e,!1),"not",e)},filter:function(e){return this.pushStack(c(this,e,!0),"filter",e)},is:function(e){return!!e&&("string"==typeof e?De.test(e)?Q(e,this.context).index(this[0])>=0:Q.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,o=0,i=this.length,r=[],a=De.test(e)||"string"!=typeof e?Q(e,t||this.context):0;o<i;o++)for(n=this[o];n&&n.ownerDocument&&n!==t&&11!==n.nodeType;){if(a?a.index(n)>-1:Q.find.matchesSelector(n,e)){r.push(n);break}n=n.parentNode}return r=r.length>1?Q.unique(r):r,this.pushStack(r,"closest",e)},index:function(e){return e?"string"==typeof e?Q.inArray(this[0],Q(e)):Q.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n="string"==typeof e?Q(e,t):Q.makeArray(e&&e.nodeType?[e]:e),o=Q.merge(this.get(),n);return this.pushStack(s(n[0])||s(o[0])?o:Q.unique(o))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Q.fn.andSelf=Q.fn.addBack,Q.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Q.dir(e,"parentNode")},parentsUntil:function(e,t,n){return Q.dir(e,"parentNode",n)},next:function(e){return l(e,"nextSibling")},prev:function(e){return l(e,"previousSibling")},nextAll:function(e){return Q.dir(e,"nextSibling")},prevAll:function(e){return Q.dir(e,"previousSibling")},nextUntil:function(e,t,n){return Q.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return Q.dir(e,"previousSibling",n)},siblings:function(e){return Q.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return Q.sibling(e.firstChild)},contents:function(e){return Q.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:Q.merge([],e.childNodes)}},function(e,t){Q.fn[e]=function(n,o){var i=Q.map(this,t,n);return He.test(e)||(o=n),o&&"string"==typeof o&&(i=Q.filter(o,i)),i=this.length>1&&!Oe[e]?Q.unique(i):i,this.length>1&&Be.test(e)&&(i=i.reverse()),this.pushStack(i,e,V.call(arguments).join(","))}}),Q.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?Q.find.matchesSelector(t[0],e)?[t[0]]:[]:Q.find.matches(e,t)},dir:function(e,n,o){for(var i=[],r=e[n];r&&9!==r.nodeType&&(o===t||1!==r.nodeType||!Q(r).is(o));)1===r.nodeType&&i.push(r),r=r[n];return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var Ye="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Fe=/ jQuery\d+="(?:null|\d+)"/g,$e=/^\s+/,We=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Re=/<([\w:]+)/,qe=/<tbody/i,Ue=/<|&#?\w+;/,ze=/<(?:script|style|link)/i,Ve=/<(?:script|object|embed|option|style)/i,Xe=new RegExp("<(?:"+Ye+")[\\s/>]","i"),Je=/^(?:checkbox|radio)$/,Ge=/checked\s*(?:[^=]|=\s*.checked.)/i,Ke=/\/(java|ecma)script/i,Qe=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Ze={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},et=u($),tt=et.appendChild($.createElement("div"));Ze.optgroup=Ze.option,Ze.tbody=Ze.tfoot=Ze.colgroup=Ze.caption=Ze.thead,Ze.th=Ze.td,Q.support.htmlSerialize||(Ze._default=[1,"X<div>","</div>"]),Q.fn.extend({text:function(e){return Q.access(this,function(e){return e===t?Q.text(this):this.empty().append((this[0]&&this[0].ownerDocument||$).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(Q.isFunction(e))return this.each(function(t){Q(this).wrapAll(e.call(this,t))});if(this[0]){var t=Q(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return Q.isFunction(e)?this.each(function(t){Q(this).wrapInner(e.call(this,t))}):this.each(function(){var t=Q(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Q.isFunction(e);return this.each(function(n){Q(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){Q.nodeName(this,"body")||Q(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!s(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=Q.clean(arguments);return this.pushStack(Q.merge(e,this),"before",this.selector)}},after:function(){if(!s(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=Q.clean(arguments);return this.pushStack(Q.merge(this,e),"after",this.selector)}},remove:function(e,t){for(var n,o=0;null!=(n=this[o]);o++)e&&!Q.filter(e,[n]).length||(!t&&1===n.nodeType&&(Q.cleanData(n.getElementsByTagName("*")),Q.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)for(1===e.nodeType&&Q.cleanData(e.getElementsByTagName("*"));e.firstChild;)e.removeChild(e.firstChild);return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return Q.clone(this,e,t)})},html:function(e){return Q.access(this,function(e){var n=this[0]||{},o=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(Fe,""):t;if("string"==typeof e&&!ze.test(e)&&(Q.support.htmlSerialize||!Xe.test(e))&&(Q.support.leadingWhitespace||!$e.test(e))&&!Ze[(Re.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(We,"<$1></$2>");try{for(;o<i;o++)n=this[o]||{},1===n.nodeType&&(Q.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(r){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return s(this[0])?this.length?this.pushStack(Q(Q.isFunction(e)?e():e),"replaceWith",e):this:Q.isFunction(e)?this.each(function(t){var n=Q(this),o=n.html();n.replaceWith(e.call(this,t,o))}):("string"!=typeof e&&(e=Q(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;Q(this).remove(),t?Q(t).before(e):Q(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,o){e=[].concat.apply([],e);var i,r,a,s,l=0,c=e[0],u=[],d=this.length;if(!Q.support.checkClone&&d>1&&"string"==typeof c&&Ge.test(c))return this.each(function(){Q(this).domManip(e,n,o)});if(Q.isFunction(c))return this.each(function(i){var r=Q(this);e[0]=c.call(this,i,n?r.html():t),r.domManip(e,n,o)});if(this[0]){if(i=Q.buildFragment(e,this,u),a=i.fragment,r=a.firstChild,1===a.childNodes.length&&(a=r),r)for(n=n&&Q.nodeName(r,"tr"),s=i.cacheable||d-1;l<d;l++)o.call(n&&Q.nodeName(this[l],"table")?f(this[l],"tbody"):this[l],l===s?a:Q.clone(a,!0,!0));a=r=null,u.length&&Q.each(u,function(e,t){t.src?Q.ajax?Q.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):Q.error("no ajax"):Q.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Qe,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),Q.buildFragment=function(e,n,o){var i,r,a,s=e[0];return n=n||$,n=(n[0]||n).ownerDocument||n[0]||n,"undefined"==typeof n.createDocumentFragment&&(n=$),1===e.length&&"string"==typeof s&&s.length<512&&n===$&&"<"===s.charAt(0)&&!Ve.test(s)&&(Q.support.checkClone||!Ge.test(s))&&(Q.support.html5Clone||!Xe.test(s))&&(r=!0,i=Q.fragments[s],a=i!==t),i||(i=n.createDocumentFragment(),Q.clean(e,n,i,o),r&&(Q.fragments[s]=a&&i)),{fragment:i,cacheable:r}},Q.fragments={},Q.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Q.fn[e]=function(n){var o,i=0,r=[],a=Q(n),s=a.length,l=1===this.length&&this[0].parentNode;if((null==l||l&&11===l.nodeType&&1===l.childNodes.length)&&1===s)return a[t](this[0]),this;for(;i<s;i++)o=(i>0?this.clone(!0):this).get(),Q(a[i])[t](o),r=r.concat(o);return this.pushStack(r,e,a.selector)}}),Q.extend({clone:function(e,t,n){var o,i,r,a;if(Q.support.html5Clone||Q.isXMLDoc(e)||!Xe.test("<"+e.nodeName+">")?a=e.cloneNode(!0):(tt.innerHTML=e.outerHTML,tt.removeChild(a=tt.firstChild)),!(Q.support.noCloneEvent&&Q.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Q.isXMLDoc(e)))for(p(e,a),o=h(e),i=h(a),r=0;o[r];++r)i[r]&&p(o[r],i[r]);if(t&&(d(e,a),n))for(o=h(e),i=h(a),r=0;o[r];++r)d(o[r],i[r]);return o=i=null,a},clean:function(e,t,n,o){var i,r,a,s,l,c,f,d,p,h,m,v=0,y=[];for(t&&"undefined"!=typeof t.createDocumentFragment||(t=$),r=t===$&&et;null!=(a=e[v]);v++)if("number"==typeof a&&(a+=""),a){if("string"==typeof a)if(Ue.test(a)){for(r=r||u(t),f=f||r.appendChild(t.createElement("div")),a=a.replace(We,"<$1></$2>"),s=(Re.exec(a)||["",""])[1].toLowerCase(),l=Ze[s]||Ze._default,c=l[0],f.innerHTML=l[1]+a+l[2];c--;)f=f.lastChild;if(!Q.support.tbody)for(d=qe.test(a),p="table"!==s||d?"<table>"!==l[1]||d?[]:f.childNodes:f.firstChild&&f.firstChild.childNodes,i=p.length-1;i>=0;--i)Q.nodeName(p[i],"tbody")&&!p[i].childNodes.length&&p[i].parentNode.removeChild(p[i]);!Q.support.leadingWhitespace&&$e.test(a)&&f.insertBefore(t.createTextNode($e.exec(a)[0]),f.firstChild),a=f.childNodes,f=r.lastChild}else a=t.createTextNode(a);a.nodeType?y.push(a):y=Q.merge(y,a)}if(f&&(r.removeChild(f),a=f=r=null),!Q.support.appendChecked)for(v=0;null!=(a=y[v]);v++)Q.nodeName(a,"input")?g(a):"undefined"!=typeof a.getElementsByTagName&&Q.grep(a.getElementsByTagName("input"),g);if(n)for(h=function(e){if(!e.type||Ke.test(e.type))return o?o.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)},v=0;null!=(a=y[v]);v++)Q.nodeName(a,"script")&&h(a)||(n.appendChild(a),"undefined"!=typeof a.getElementsByTagName&&(m=Q.grep(Q.merge([],a.getElementsByTagName("script")),h),y.splice.apply(y,[v+1,0].concat(m)),v+=m.length));return y},cleanData:function(e,t){for(var n,o,i,r,a=0,s=Q.expando,l=Q.cache,c=Q.support.deleteExpando,u=Q.event.special;null!=(i=e[a]);a++)if((t||Q.acceptData(i))&&(o=i[s],n=o&&l[o])){if(n.events)for(r in n.events)u[r]?Q.event.remove(i,r):Q.removeEvent(i,r,n.handle);l[o]&&(delete l[o],c?delete i[s]:i.removeAttribute?i.removeAttribute(s):i[s]=null,Q.deletedIds.push(o))}}}),function(){var e,t;Q.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=Q.uaMatch(R.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.webkit&&(t.safari=!0),Q.browser=t,Q.sub=function(){function e(t,n){return new e.fn.init(t,n)}Q.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function n(n,o){return o&&o instanceof Q&&!(o instanceof e)&&(o=e(o)),Q.fn.init.call(this,n,o,t)},e.fn.init.prototype=e.fn;var t=e($);return e}}();var nt,ot,it,rt=/alpha\([^)]*\)/i,at=/opacity=([^)]*)/,st=/^(top|right|bottom|left)$/,lt=/^margin/,ct=new RegExp("^("+Z+")(.*)$","i"),ut=new RegExp("^("+Z+")(?!px)[a-z%]+$","i"),ft=new RegExp("^([-+])=("+Z+")","i"),dt={},pt={position:"absolute",visibility:"hidden",display:"block"},ht={letterSpacing:0,fontWeight:400,lineHeight:1},gt=["Top","Right","Bottom","Left"],mt=["Webkit","O","Moz","ms"],vt=Q.fn.toggle;Q.fn.extend({css:function(e,n){return Q.access(this,function(e,n,o){return o!==t?Q.style(e,n,o):Q.css(e,n)},e,n,arguments.length>1)},show:function(){return y(this,!0)},hide:function(){return y(this)},toggle:function(e,t){var n="boolean"==typeof e;return Q.isFunction(e)&&Q.isFunction(t)?vt.apply(this,arguments):this.each(function(){(n?e:v(this))?Q(this).show():Q(this).hide()})}}),Q.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=nt(e,"opacity");return""===n?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":Q.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,o,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,a,s,l=Q.camelCase(n),c=e.style;if(n=Q.cssProps[l]||(Q.cssProps[l]=m(c,l)),s=Q.cssHooks[n]||Q.cssHooks[l],o===t)return s&&"get"in s&&(r=s.get(e,!1,i))!==t?r:c[n];if(a=typeof o,"string"===a&&(r=ft.exec(o))&&(o=(r[1]+1)*r[2]+parseFloat(Q.css(e,n)),a="number"),!(null==o||"number"===a&&isNaN(o)||("number"===a&&!Q.cssNumber[l]&&(o+="px"),s&&"set"in s&&(o=s.set(e,o,i))===t)))try{c[n]=o}catch(u){}}},css:function(e,n,o,i){var r,a,s,l=Q.camelCase(n);return n=Q.cssProps[l]||(Q.cssProps[l]=m(e.style,l)),s=Q.cssHooks[n]||Q.cssHooks[l],s&&"get"in s&&(r=s.get(e,!0,i)),r===t&&(r=nt(e,n)),"normal"===r&&n in ht&&(r=ht[n]),o||i!==t?(a=parseFloat(r),o||Q.isNumeric(a)?a||0:r):r},swap:function(e,t,n){var o,i,r={};for(i in t)r[i]=e.style[i],e.style[i]=t[i];o=n.call(e);for(i in t)e.style[i]=r[i];return o}}),e.getComputedStyle?nt=function(e,t){var n,o,i,r,a=getComputedStyle(e,null),s=e.style;return a&&(n=a[t],""===n&&!Q.contains(e.ownerDocument.documentElement,e)&&(n=Q.style(e,t)),ut.test(n)&&lt.test(t)&&(o=s.width,i=s.minWidth,r=s.maxWidth,s.minWidth=s.maxWidth=s.width=n,n=a.width,s.width=o,s.minWidth=i,s.maxWidth=r)),n}:$.documentElement.currentStyle&&(nt=function(e,t){var n,o,i=e.currentStyle&&e.currentStyle[t],r=e.style;return null==i&&r&&r[t]&&(i=r[t]),ut.test(i)&&!st.test(t)&&(n=r.left,o=e.runtimeStyle&&e.runtimeStyle.left,o&&(e.runtimeStyle.left=e.currentStyle.left),r.left="fontSize"===t?"1em":i,i=r.pixelLeft+"px",r.left=n,o&&(e.runtimeStyle.left=o)),""===i?"auto":i}),Q.each(["height","width"],function(e,t){Q.cssHooks[t]={get:function(e,n,o){if(n)return 0!==e.offsetWidth||"none"!==nt(e,"display")?x(e,t,o):Q.swap(e,pt,function(){return x(e,t,o)})},set:function(e,n,o){return b(e,n,o?w(e,t,o,Q.support.boxSizing&&"border-box"===Q.css(e,"boxSizing")):0)}}}),Q.support.opacity||(Q.cssHooks.opacity={get:function(e,t){return at.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,o=e.currentStyle,i=Q.isNumeric(t)?"alpha(opacity="+100*t+")":"",r=o&&o.filter||n.filter||"";n.zoom=1,t>=1&&""===Q.trim(r.replace(rt,""))&&n.removeAttribute&&(n.removeAttribute("filter"),o&&!o.filter)||(n.filter=rt.test(r)?r.replace(rt,i):r+" "+i)}}),Q(function(){Q.support.reliableMarginRight||(Q.cssHooks.marginRight={get:function(e,t){return Q.swap(e,{display:"inline-block"},function(){if(t)return nt(e,"marginRight")})}}),!Q.support.pixelPosition&&Q.fn.position&&Q.each(["top","left"],function(e,t){Q.cssHooks[t]={get:function(e,n){if(n){var o=nt(e,t);return ut.test(o)?Q(e).position()[t]+"px":o}}}})}),Q.expr&&Q.expr.filters&&(Q.expr.filters.hidden=function(e){return 0===e.offsetWidth&&0===e.offsetHeight||!Q.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||nt(e,"display"))},Q.expr.filters.visible=function(e){return!Q.expr.filters.hidden(e)}),Q.each({margin:"",padding:"",border:"Width"},function(e,t){Q.cssHooks[e+t]={expand:function(n){var o,i="string"==typeof n?n.split(" "):[n],r={};for(o=0;o<4;o++)r[e+gt[o]+t]=i[o]||i[o-2]||i[0];return r}},lt.test(e)||(Q.cssHooks[e+t].set=b)});var yt=/%20/g,bt=/\[\]$/,wt=/\r?\n/g,xt=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Ct=/^(?:select|textarea)/i;Q.fn.extend({serialize:function(){return Q.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?Q.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||Ct.test(this.nodeName)||xt.test(this.type))}).map(function(e,t){var n=Q(this).val();return null==n?null:Q.isArray(n)?Q.map(n,function(e,n){return{name:t.name,value:e.replace(wt,"\r\n")}}):{name:t.name,value:n.replace(wt,"\r\n")}}).get()}}),Q.param=function(e,n){var o,i=[],r=function(e,t){t=Q.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=Q.ajaxSettings&&Q.ajaxSettings.traditional),Q.isArray(e)||e.jquery&&!Q.isPlainObject(e))Q.each(e,function(){r(this.name,this.value)});else for(o in e)k(o,e[o],n,r);return i.join("&").replace(yt,"+")};var kt,Tt,St=/#.*$/,At=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Et=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Nt=/^(?:GET|HEAD)$/,_t=/^\/\//,Lt=/\?/,Pt=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,Mt=/([?&])_=[^&]*/,jt=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Ht=Q.fn.load,Bt={},It={},Dt=["*/"]+["*"];try{kt=W.href}catch(Ot){kt=$.createElement("a"),kt.href="",kt=kt.href}Tt=jt.exec(kt.toLowerCase())||[],Q.fn.load=function(e,n,o){if("string"!=typeof e&&Ht)return Ht.apply(this,arguments);if(!this.length)return this;var i,r,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),Q.isFunction(n)?(o=n,n=t):"object"==typeof n&&(r="POST"),Q.ajax({url:e,type:r,dataType:"html",data:n,complete:function(e,t){o&&s.each(o,a||[e.responseText,t,e])}}).done(function(e){a=arguments,s.html(i?Q("<div>").append(e.replace(Pt,"")).find(i):e)}),this},Q.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){Q.fn[t]=function(e){return this.on(t,e)}}),Q.each(["get","post"],function(e,n){Q[n]=function(e,o,i,r){return Q.isFunction(o)&&(r=r||i,i=o,o=t),Q.ajax({type:n,url:e,data:o,success:i,dataType:r})}}),Q.extend({getScript:function(e,n){return Q.get(e,t,n,"script")},getJSON:function(e,t,n){return Q.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?A(e,Q.ajaxSettings):(t=e,e=Q.ajaxSettings),A(e,t),e},ajaxSettings:{url:kt,isLocal:Et.test(Tt[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Dt},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":Q.parseJSON,"text xml":Q.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:T(Bt),ajaxTransport:T(It),ajax:function(e,n){function o(e,n,o,a){var c,f,y,b,x,k=n;2!==w&&(w=2,l&&clearTimeout(l),s=t,r=a||"",C.readyState=e>0?4:0,o&&(b=E(d,C,o)),e>=200&&e<300||304===e?(d.ifModified&&(x=C.getResponseHeader("Last-Modified"),x&&(Q.lastModified[i]=x),x=C.getResponseHeader("Etag"),x&&(Q.etag[i]=x)),304===e?(k="notmodified",c=!0):(c=N(d,b),k=c.state,f=c.data,y=c.error,c=!y)):(y=k,k&&!e||(k="error",e<0&&(e=0))),C.status=e,C.statusText=""+(n||k),c?g.resolveWith(p,[f,k,C]):g.rejectWith(p,[C,k,y]),C.statusCode(v),v=t,u&&h.trigger("ajax"+(c?"Success":"Error"),[C,d,c?f:y]),m.fireWith(p,[C,k]),u&&(h.trigger("ajaxComplete",[C,d]),--Q.active||Q.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=t),n=n||{};var i,r,a,s,l,c,u,f,d=Q.ajaxSetup({},n),p=d.context||d,h=p!==d&&(p.nodeType||p instanceof Q)?Q(p):Q.event,g=Q.Deferred(),m=Q.Callbacks("once memory"),v=d.statusCode||{},y={},b={},w=0,x="canceled",C={readyState:0,setRequestHeader:function(e,t){if(!w){var n=e.toLowerCase();e=b[n]=b[n]||e,y[e]=t}return this},getAllResponseHeaders:function(){return 2===w?r:null},getResponseHeader:function(e){var n;if(2===w){if(!a)for(a={};n=At.exec(r);)a[n[1].toLowerCase()]=n[2];n=a[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return w||(d.mimeType=e),this},abort:function(e){return e=e||x,s&&s.abort(e),o(0,e),this}};if(g.promise(C),C.success=C.done,C.error=C.fail,C.complete=m.add,C.statusCode=function(e){if(e){var t;if(w<2)for(t in e)v[t]=[v[t],e[t]];else t=e[C.status],C.always(t)}return this},d.url=((e||d.url)+"").replace(St,"").replace(_t,Tt[1]+"//"),d.dataTypes=Q.trim(d.dataType||"*").toLowerCase().split(te),null==d.crossDomain&&(c=jt.exec(d.url.toLowerCase()),d.crossDomain=!(!c||c[1]==Tt[1]&&c[2]==Tt[2]&&(c[3]||("http:"===c[1]?80:443))==(Tt[3]||("http:"===Tt[1]?80:443)))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=Q.param(d.data,d.traditional)),S(Bt,d,n,C),2===w)return C;if(u=d.global,d.type=d.type.toUpperCase(),d.hasContent=!Nt.test(d.type),u&&0===Q.active++&&Q.event.trigger("ajaxStart"),!d.hasContent&&(d.data&&(d.url+=(Lt.test(d.url)?"&":"?")+d.data,delete d.data),i=d.url,d.cache===!1)){var k=Q.now(),T=d.url.replace(Mt,"$1_="+k);d.url=T+(T===d.url?(Lt.test(d.url)?"&":"?")+"_="+k:"")}(d.data&&d.hasContent&&d.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(i=i||d.url,Q.lastModified[i]&&C.setRequestHeader("If-Modified-Since",Q.lastModified[i]),Q.etag[i]&&C.setRequestHeader("If-None-Match",Q.etag[i])),C.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+Dt+"; q=0.01":""):d.accepts["*"]);for(f in d.headers)C.setRequestHeader(f,d.headers[f]);if(!d.beforeSend||d.beforeSend.call(p,C,d)!==!1&&2!==w){x="abort";for(f in{success:1,error:1,complete:1})C[f](d[f]);if(s=S(It,d,n,C)){C.readyState=1,u&&h.trigger("ajaxSend",[C,d]),d.async&&d.timeout>0&&(l=setTimeout(function(){C.abort("timeout")},d.timeout));try{w=1,s.send(y,o)}catch(A){if(!(w<2))throw A;o(-1,A)}}else o(-1,"No Transport");return C}return C.abort()},active:0,lastModified:{},etag:{}});var Yt=[],Ft=/\?/,$t=/(=)\?(?=&|$)|\?\?/,Wt=Q.now();Q.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||Q.expando+"_"+Wt++;return this[e]=!0,e}}),Q.ajaxPrefilter("json jsonp",function(n,o,i){var r,a,s,l=n.data,c=n.url,u=n.jsonp!==!1,f=u&&$t.test(c),d=u&&!f&&"string"==typeof l&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&$t.test(l);if("jsonp"===n.dataTypes[0]||f||d)return r=n.jsonpCallback=Q.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,a=e[r],f?n.url=c.replace($t,"$1"+r):d?n.data=l.replace($t,"$1"+r):u&&(n.url+=(Ft.test(c)?"&":"?")+n.jsonp+"="+r),n.converters["script json"]=function(){return s||Q.error(r+" was not called"),s[0]},n.dataTypes[0]="json",e[r]=function(){s=arguments},i.always(function(){e[r]=a,n[r]&&(n.jsonpCallback=o.jsonpCallback,Yt.push(r)),s&&Q.isFunction(a)&&a(s[0]),s=a=t}),"script"}),Q.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return Q.globalEval(e),e}}}),Q.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),Q.ajaxTransport("script",function(e){if(e.crossDomain){var n,o=$.head||$.getElementsByTagName("head")[0]||$.documentElement;return{send:function(i,r){n=$.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){(i||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,o&&n.parentNode&&o.removeChild(n),n=t,i||r(200,"success"))},o.insertBefore(n,o.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Rt,qt=!!e.ActiveXObject&&function(){for(var e in Rt)Rt[e](0,1)},Ut=0;Q.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&_()||L()}:_,function(e){Q.extend(Q.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(Q.ajaxSettings.xhr()),Q.support.ajax&&Q.ajaxTransport(function(n){if(!n.crossDomain||Q.support.cors){var o;return{send:function(i,r){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(c){}l.send(n.hasContent&&n.data||null),o=function(e,i){var s,c,u,f,d;try{if(o&&(i||4===l.readyState))if(o=t,a&&(l.onreadystatechange=Q.noop,qt&&delete Rt[a]),i)4!==l.readyState&&l.abort();else{s=l.status,u=l.getAllResponseHeaders(),f={},d=l.responseXML,d&&d.documentElement&&(f.xml=d);try{f.text=l.responseText}catch(e){}try{c=l.statusText}catch(p){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=f.text?200:404}}catch(h){i||r(-1,h)}f&&r(s,c,f,u)},n.async?4===l.readyState?setTimeout(o,0):(a=++Ut,qt&&(Rt||(Rt={},Q(e).unload(qt)),Rt[a]=o),l.onreadystatechange=o):o()},abort:function(){o&&o(0,1)}}}});var zt,Vt,Xt=/^(?:toggle|show|hide)$/,Jt=new RegExp("^(?:([-+])=|)("+Z+")([a-z%]*)$","i"),Gt=/queueHooks$/,Kt=[B],Qt={"*":[function(e,t){var n,o,i,r=this.createTween(e,t),a=Jt.exec(t),s=r.cur(),l=+s||0,c=1;if(a){if(n=+a[2],o=a[3]||(Q.cssNumber[e]?"":"px"),"px"!==o&&l){l=Q.css(r.elem,e,!0)||n||1;do i=c=c||".5",l/=c,Q.style(r.elem,e,l+o),c=r.cur()/s;while(1!==c&&c!==i)}r.unit=o,r.start=l,r.end=a[1]?l+(a[1]+1)*n:n}return r}]};Q.Animation=Q.extend(j,{tweener:function(e,t){Q.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,o=0,i=e.length;o<i;o++)n=e[o],Qt[n]=Qt[n]||[],Qt[n].unshift(t)},prefilter:function(e,t){t?Kt.unshift(e):Kt.push(e)}}),Q.Tween=I,I.prototype={constructor:I,init:function(e,t,n,o,i,r){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=o,this.unit=r||(Q.cssNumber[n]?"":"px")},cur:function(){var e=I.propHooks[this.prop];return e&&e.get?e.get(this):I.propHooks._default.get(this)},run:function(e){var t,n=I.propHooks[this.prop];return this.pos=t=Q.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration),this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):I.propHooks._default.set(this),this}},I.prototype.init.prototype=I.prototype,I.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=Q.css(e.elem,e.prop,!1,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){Q.fx.step[e.prop]?Q.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[Q.cssProps[e.prop]]||Q.cssHooks[e.prop])?Q.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},I.propHooks.scrollTop=I.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Q.each(["toggle","show","hide"],function(e,t){var n=Q.fn[t];Q.fn[t]=function(o,i,r){return null==o||"boolean"==typeof o||!e&&Q.isFunction(o)&&Q.isFunction(i)?n.apply(this,arguments):this.animate(D(t,!0),o,i,r)}}),Q.fn.extend({fadeTo:function(e,t,n,o){return this.filter(v).css("opacity",0).show().end().animate({opacity:t},e,n,o)},animate:function(e,t,n,o){var i=Q.isEmptyObject(e),r=Q.speed(t,n,o),a=function(){var t=j(this,Q.extend({},e),r);i&&t.stop(!0)};return i||r.queue===!1?this.each(a):this.queue(r.queue,a)},stop:function(e,n,o){var i=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof e&&(o=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",r=Q.timers,a=Q._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Gt.test(n)&&i(a[n]);for(n=r.length;n--;)r[n].elem===this&&(null==e||r[n].queue===e)&&(r[n].anim.stop(o),t=!1,r.splice(n,1));(t||!o)&&Q.dequeue(this,e)})}}),Q.each({slideDown:D("show"),slideUp:D("hide"),slideToggle:D("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Q.fn[e]=function(e,n,o){return this.animate(t,e,n,o)}}),Q.speed=function(e,t,n){var o=e&&"object"==typeof e?Q.extend({},e):{complete:n||!n&&t||Q.isFunction(e)&&e,duration:e,easing:n&&t||t&&!Q.isFunction(t)&&t};return o.duration=Q.fx.off?0:"number"==typeof o.duration?o.duration:o.duration in Q.fx.speeds?Q.fx.speeds[o.duration]:Q.fx.speeds._default,null!=o.queue&&o.queue!==!0||(o.queue="fx"),o.old=o.complete,o.complete=function(){Q.isFunction(o.old)&&o.old.call(this),o.queue&&Q.dequeue(this,o.queue)},o},Q.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},Q.timers=[],Q.fx=I.prototype.init,Q.fx.tick=function(){for(var e,t=Q.timers,n=0;n<t.length;n++)e=t[n],!e()&&t[n]===e&&t.splice(n--,1);t.length||Q.fx.stop()},Q.fx.timer=function(e){e()&&Q.timers.push(e)&&!Vt&&(Vt=setInterval(Q.fx.tick,Q.fx.interval))},Q.fx.interval=13,Q.fx.stop=function(){clearInterval(Vt),Vt=null},Q.fx.speeds={slow:600,fast:200,_default:400},Q.fx.step={},Q.expr&&Q.expr.filters&&(Q.expr.filters.animated=function(e){return Q.grep(Q.timers,function(t){return e===t.elem}).length});var Zt=/^(?:body|html)$/i;Q.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){Q.offset.setOffset(this,e,t)});var n,o,i,r,a,s,l,c,u,f,d=this[0],p=d&&d.ownerDocument;if(p)return(i=p.body)===d?Q.offset.bodyOffset(d):(o=p.documentElement,Q.contains(o,d)?(n=d.getBoundingClientRect(),r=O(p),a=o.clientTop||i.clientTop||0,s=o.clientLeft||i.clientLeft||0,l=r.pageYOffset||o.scrollTop,c=r.pageXOffset||o.scrollLeft,u=n.top+l-a,f=n.left+c-s,{top:u,left:f}):{top:0,left:0})},Q.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return Q.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(Q.css(e,"marginTop"))||0,n+=parseFloat(Q.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var o=Q.css(e,"position");"static"===o&&(e.style.position="relative");var i,r,a=Q(e),s=a.offset(),l=Q.css(e,"top"),c=Q.css(e,"left"),u=("absolute"===o||"fixed"===o)&&Q.inArray("auto",[l,c])>-1,f={},d={};u?(d=a.position(),i=d.top,r=d.left):(i=parseFloat(l)||0,r=parseFloat(c)||0),Q.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+i),null!=t.left&&(f.left=t.left-s.left+r),"using"in t?t.using.call(e,f):a.css(f)}},Q.fn.extend({position:function(){if(this[0]){var e=this[0],t=this.offsetParent(),n=this.offset(),o=Zt.test(t[0].nodeName)?{top:0,left:0
}:t.offset();return n.top-=parseFloat(Q.css(e,"marginTop"))||0,n.left-=parseFloat(Q.css(e,"marginLeft"))||0,o.top+=parseFloat(Q.css(t[0],"borderTopWidth"))||0,o.left+=parseFloat(Q.css(t[0],"borderLeftWidth"))||0,{top:n.top-o.top,left:n.left-o.left}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||$.body;e&&!Zt.test(e.nodeName)&&"static"===Q.css(e,"position");)e=e.offsetParent;return e||$.body})}}),Q.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var o=/Y/.test(n);Q.fn[e]=function(i){return Q.access(this,function(e,i,r){var a=O(e);return r===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:void(a?a.scrollTo(o?Q(a).scrollLeft():r,o?r:Q(a).scrollTop()):e[i]=r)},e,i,arguments.length,null)}}),Q.each({Height:"height",Width:"width"},function(e,n){Q.each({padding:"inner"+e,content:n,"":"outer"+e},function(o,i){Q.fn[i]=function(i,r){var a=arguments.length&&(o||"boolean"!=typeof i),s=o||(i===!0||r===!0?"margin":"border");return Q.access(this,function(n,o,i){var r;return Q.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(r=n.documentElement,Math.max(n.body["scroll"+e],r["scroll"+e],n.body["offset"+e],r["offset"+e],r["client"+e])):i===t?Q.css(n,o,i,s):Q.style(n,o,i,s)},n,a?i:t,a)}})}),e.jQuery=e.$=Q,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return Q})}(window),define("jQuery",function(e){return function(){var t;return t||e.$}}(this)),!function(){function e(e){return e.replace(b,"").replace(w,",").replace(x,"").replace(C,"").replace(k,"").split(T)}function t(e){return"'"+e.replace(/('|\\)/g,"\\$1").replace(/\r/g,"\\r").replace(/\n/g,"\\n")+"'"}function n(n,o){function i(e){return d+=e.split(/\n/).length-1,u&&(e=e.replace(/\s+/g," ").replace(/<!--[\w\W]*?-->/g,"")),e&&(e=y[1]+t(e)+y[2]+"\n"),e}function r(t){var n=d;if(c?t=c(t,o):a&&(t=t.replace(/\n/g,function(){return d++,"$line="+d+";"})),0===t.indexOf("=")){var i=f&&!/^=[=#]/.test(t);if(t=t.replace(/^=[=#]?|[\s;]*$/g,""),i){var r=t.replace(/\s*\([^\)]+\)/,"");p[r]||/^(include|print)$/.test(r)||(t="$escape("+t+")")}else t="$string("+t+")";t=y[1]+t+y[2]}return a&&(t="$line="+n+";"+t),v(e(t),function(e){if(e&&!g[e]){var t;t="print"===e?w:"include"===e?x:p[e]?"$utils."+e:h[e]?"$helpers."+e:"$data."+e,C+=e+"="+t+",",g[e]=!0}}),t+"\n"}var a=o.debug,s=o.openTag,l=o.closeTag,c=o.parser,u=o.compress,f=o.escape,d=1,g={$data:1,$filename:1,$utils:1,$helpers:1,$out:1,$line:1},m="".trim,y=m?["$out='';","$out+=",";","$out"]:["$out=[];","$out.push(",");","$out.join('')"],b=m?"$out+=text;return $out;":"$out.push(text);",w="function(){var text=''.concat.apply('',arguments);"+b+"}",x="function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);"+b+"}",C="'use strict';var $utils=this,$helpers=$utils.$helpers,"+(a?"$line=0,":""),k=y[0],T="return new String("+y[3]+");";v(n.split(s),function(e){e=e.split(l);var t=e[0],n=e[1];1===e.length?k+=i(t):(k+=r(t),n&&(k+=i(n)))});var S=C+k+T;a&&(S="try{"+S+"}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:"+t(n)+".split(/\\n/)[$line-1].replace(/^\\s+/,'')};}");try{var A=new Function("$data","$filename",S);return A.prototype=p,A}catch(E){throw E.temp="function anonymous($data,$filename) {"+S+"}",E}}var o=function(e,t){return"string"==typeof t?m(t,{filename:e}):a(e,t)};o.version="3.0.0",o.config=function(e,t){i[e]=t};var i=o.defaults={openTag:"<%",closeTag:"%>",escape:!0,cache:!0,compress:!1,parser:null},r=o.cache={};o.render=function(e,t){return m(e,t)};var a=o.renderFile=function(e,t){var n=o.get(e)||g({filename:e,name:"Render Error",message:"Template not found"});return t?n(t):n};o.get=function(e){var t;if(r[e])t=r[e];else if("object"==typeof document){var n=document.getElementById(e);if(n){var o=(n.value||n.innerHTML).replace(/^\s*|\s*$/g,"");t=m(o,{filename:e})}}return t};var s=function(e,t){return"string"!=typeof e&&(t=typeof e,"number"===t?e+="":e="function"===t?s(e.call(e)):""),e},l={"<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","&":"&#38;"},c=function(e){return l[e]},u=function(e){return s(e).replace(/&(?![\w#]+;)|[<>"']/g,c)},f=Array.isArray||function(e){return"[object Array]"==={}.toString.call(e)},d=function(e,t){var n,o;if(f(e))for(n=0,o=e.length;o>n;n++)t.call(e,e[n],n,e);else for(n in e)t.call(e,e[n],n)},p=o.utils={$helpers:{},$include:a,$string:s,$escape:u,$each:d};o.helper=function(e,t){h[e]=t};var h=o.helpers=p.$helpers;o.onerror=function(e){var t="Template Error\n\n";for(var n in e)t+="<"+n+">\n"+e[n]+"\n\n";"object"==typeof console&&console.error(t)};var g=function(e){return o.onerror(e),function(){return"{Template Error}"}},m=o.compile=function(e,t){function o(n){try{return new l(n,s)+""}catch(o){return t.debug?g(o)():(t.debug=!0,m(e,t)(n))}}t=t||{};for(var a in i)void 0===t[a]&&(t[a]=i[a]);var s=t.filename;try{var l=n(e,t)}catch(c){return c.filename=s||"anonymous",c.name="Syntax Error",g(c)}return o.prototype=l.prototype,o.toString=function(){return l.toString()},s&&t.cache&&(r[s]=o),o},v=p.$each,y="break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield,undefined",b=/\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|\s*\.\s*[$\w\.]+/g,w=/[^\w$]+/g,x=new RegExp(["\\b"+y.replace(/,/g,"\\b|\\b")+"\\b"].join("|"),"g"),C=/^\d[^,]*|,\d[^,]*/g,k=/^,+|,+$/g,T=/^$|,+/;i.openTag="{{",i.closeTag="}}";var S=function(e,t){var n=t.split(":"),o=n.shift(),i=n.join(":")||"";return i&&(i=", "+i),"$helpers."+o+"("+e+i+")"};i.parser=function(e){e=e.replace(/^\s/,"");var t=e.split(" "),n=t.shift(),i=t.join(" ");switch(n){case"if":e="if("+i+"){";break;case"else":t="if"===t.shift()?" if("+t.join(" ")+")":"",e="}else"+t+"{";break;case"/if":e="}";break;case"each":var r=t[0]||"$data",a=t[1]||"as",s=t[2]||"$value",l=t[3]||"$index",c=s+","+l;"as"!==a&&(r="[]"),e="$each("+r+",function("+c+"){";break;case"/each":e="});";break;case"echo":e="print("+i+");";break;case"print":case"include":e=n+"("+t.join(",")+");";break;default:if(/^\s*\|\s*[\w\$]/.test(i)){var u=!0;0===e.indexOf("#")&&(e=e.substr(1),u=!1);for(var f=0,d=e.split("|"),p=d.length,h=d[f++];p>f;f++)h=S(h,d[f]);e=(u?"=":"=#")+h}else e=o.helpers[n]?"=#"+n+"("+t.join(",")+");":"="+e}return e},"function"==typeof define?define("artTemplate",[],function(){return o}):"undefined"!=typeof exports?module.exports=o:this.template=o}(),function(){"use strict";function e(t,o){function i(e,t){return function(){return e.apply(t,arguments)}}var r;if(o=o||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=o.touchBoundary||10,this.layer=t,this.tapDelay=o.tapDelay||200,this.tapTimeout=o.tapTimeout||700,!e.notNeeded(t)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],s=this,l=0,c=a.length;l<c;l++)s[a[l]]=i(s[a[l]],s);n&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,o){var i=Node.prototype.removeEventListener;"click"===e?i.call(t,e,n.hijacked||n,o):i.call(t,e,n,o)},t.addEventListener=function(e,n,o){var i=Node.prototype.addEventListener;"click"===e?i.call(t,e,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),o):i.call(t,e,n,o)}),"function"==typeof t.onclick&&(r=t.onclick,t.addEventListener("click",function(e){r(e)},!1),t.onclick=null)}}var t=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!t,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!t,i=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),r=o&&/OS [6-7]_\d/.test(navigator.userAgent),a=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(o&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(e.className)},e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},e.prototype.sendClick=function(e,t){var n,o;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),o=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},e.prototype.determineEventType=function(e){return n&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},e.prototype.focus=function(e){var t;o&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},e.prototype.updateScrollParent=function(e){var t,n;if(t=e.fastClickScrollParent,!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},e.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},e.prototype.onTouchStart=function(e){var t,n,r;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],o){if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n},e.prototype.onTouchMove=function(e){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0)},e.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},e.prototype.onTouchEnd=function(e){var t,a,s,l,c,u=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,a=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,r&&(c=e.changedTouches[0],u=document.elementFromPoint(c.pageX-window.pageXOffset,c.pageY-window.pageYOffset)||u,u.fastClickScrollParent=this.targetElement.fastClickScrollParent),s=u.tagName.toLowerCase(),"label"===s){if(t=this.findControl(u)){if(this.focus(u),n)return!1;u=t}}else if(this.needsFocus(u))return e.timeStamp-a>100||o&&window.top!==window&&"input"===s?(this.targetElement=null,!1):(this.focus(u),this.sendClick(u,e),o&&"select"===s||(this.targetElement=null,e.preventDefault()),!1);return!(!o||i||(l=u.fastClickScrollParent,!l||l.fastClickLastScrollTop===l.scrollTop))||(this.needsClick(u)||(e.preventDefault(),this.sendClick(u,e)),!1)},e.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},e.prototype.onMouse=function(e){return!this.targetElement||(!!e.forwardedTouchEvent||(!e.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1))))},e.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail||(t=this.onMouse(e),t||(this.targetElement=null),t)},e.prototype.destroy=function(){var e=this.layer;n&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},e.notNeeded=function(e){var t,o,i,r;if("undefined"==typeof window.ontouchstart)return!0;if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(t=document.querySelector("meta[name=viewport]")){if(t.content.indexOf("user-scalable=no")!==-1)return!0;if(o>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(a&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(t.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction||(r=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(r>=27&&(t=document.querySelector("meta[name=viewport]"),t&&(t.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===e.style.touchAction||"manipulation"===e.style.touchAction))},e.attach=function(t,n){return new e(t,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("fastclick",[],function(){return e}):"undefined"!=typeof module&&module.exports?(module.exports=e.attach,module.exports.FastClick=e):window.FastClick=e}(),!function(e){"function"==typeof define&&define.amd?define("lazyload",["jQuery"],e):e(window.jQuery||window.zepto)}(function(e,t){function n(){}function o(e,t){var n;return n=t._$container==d?("innerHeight"in f?f.innerHeight:d.height())+d.scrollTop():t._$container.offset().top+t._$container.height(),n<=e.offset().top-t.threshold}function i(t,n){var o;return o=n._$container==d?d.width()+(e.fn.scrollLeft?d.scrollLeft():f.pageXOffset):n._$container.offset().left+n._$container.width(),o<=t.offset().left-n.threshold}function r(e,t){var n;return n=t._$container==d?d.scrollTop():t._$container.offset().top,n>=e.offset().top+t.threshold+e.height()}function a(t,n){var o;return o=n._$container==d?e.fn.scrollLeft?d.scrollLeft():f.pageXOffset:n._$container.offset().left,o>=t.offset().left+n.threshold+t.width()}function s(e,t){var n=0;e.each(function(s,l){function c(){u.trigger("_lazyload_appear"),n=0}var u=e.eq(s);if(!(u.width()<=0&&u.height()<=0||"none"===u.css("display")))if(t.vertical_only)if(r(u,t));else if(o(u,t)){if(++n>t.failure_limit)return!1}else c();else if(r(u,t)||a(u,t));else if(o(u,t)||i(u,t)){if(++n>t.failure_limit)return!1}else c()})}function l(e){return e.filter(function(t,n){return!e.eq(t)._lazyload_loadStarted})}function c(e,t){function n(){a=0,s=+new Date,r=e.apply(o,i),o=null,i=null}var o,i,r,a,s=0;return function(){o=this,i=arguments;var e=new Date-s;return a||(e>=t?n():a=setTimeout(n,t-e)),r}}var u,f=window,d=e(f),p={threshold:0,failure_limit:0,event:"scroll",effect:"show",effect_params:null,container:f,data_attribute:"original",data_srcset_attribute:"original-srcset",skip_invisible:!0,appear:n,load:n,vertical_only:!1,check_appear_throttle_time:300,url_rewriter_fn:n,no_fake_img_loader:!1,placeholder_data_img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC",placeholder_real_img:"http://ditu.baidu.cn/yyfm/lazyload/0.0.1/img/placeholder.png"};u=function(){var e=Object.prototype.toString;return function(t){return e.call(t).replace("[object ","").replace("]","")}}(),e.fn.hasOwnProperty("lazyload")||(e.fn.lazyload=function(t){var o,i,r,a=this;return e.isPlainObject(t)||(t={}),e.each(p,function(n,o){-1!=e.inArray(n,["threshold","failure_limit","check_appear_throttle_time"])?"String"==u(t[n])?t[n]=parseInt(t[n],10):t[n]=o:"container"==n?(t.hasOwnProperty(n)?t[n]==f||t[n]==document?t._$container=d:t._$container=e(t[n]):t._$container=d,delete t.container):!p.hasOwnProperty(n)||t.hasOwnProperty(n)&&u(t[n])==u(p[n])||(t[n]=o)}),o="scroll"==t.event,r=0==t.check_appear_throttle_time?s:c(s,t.check_appear_throttle_time),i=o||"scrollstart"==t.event||"scrollstop"==t.event,a.each(function(o,r){var s=this,c=a.eq(o),u=c.attr("src"),f=c.attr("data-"+t.data_attribute),d=t.url_rewriter_fn==n?f:t.url_rewriter_fn.call(s,c,f),p=c.attr("data-"+t.data_srcset_attribute),h=c.is("img");return 1==c._lazyload_loadStarted||u==d?(c._lazyload_loadStarted=!0,void(a=l(a))):(c._lazyload_loadStarted=!1,h&&!u&&c.one("error",function(){c.attr("src",t.placeholder_real_img)}).attr("src",t.placeholder_data_img),c.one("_lazyload_appear",function(){function o(){i&&c.hide(),h?(p&&c.attr("srcset",p),d&&c.attr("src",d)):c.css("background-image",'url("'+d+'")'),i&&c[t.effect].apply(c,r?t.effect_params:[]),a=l(a)}var i,r=e.isArray(t.effect_params);c._lazyload_loadStarted||(i="show"!=t.effect&&e.fn[t.effect]&&(!t.effect_params||r&&0==t.effect_params.length),t.appear!=n&&t.appear.call(s,c,a.length,t),c._lazyload_loadStarted=!0,t.no_fake_img_loader||p?(t.load!=n&&c.one("load",function(){t.load.call(s,c,a.length,t)}),o()):e("<img />").one("load",function(){o(),t.load!=n&&t.load.call(s,c,a.length,t)}).attr("src",d))}),void(i||c.on(t.event,function(){c._lazyload_loadStarted||c.trigger("_lazyload_appear")})))}),i&&t._$container.on(t.event,function(){r(a,t)}),d.on("resize load",function(){r(a,t)}),e(function(){r(a,t)}),this})}),function(e){function t(){}function n(e){a=[e]}function o(e,t,n){return e&&e.apply(t.context||t,n)}function i(e){return/\?/.test(e)?"&":"?"}function r(r){function p(e){J++||(G(),q&&(A[z]={s:[e]}),F&&(e=F.apply(r,[e])),o(D,r,[e,x,r]),o(Y,r,[r,x]))}function P(e){J++||(G(),q&&e!=C&&(A[z]=e),o(O,r,[r,e]),o(Y,r,[r,e]))}r=e.extend({},N,r);var M,j,H,B,I,D=r.success,O=r.error,Y=r.complete,F=r.dataFilter,$=r.callbackParameter,W=r.callback,R=r.cache,q=r.pageCache,U=r.charset,z=r.url,V=r.data,X=r.timeout,J=0,G=t;return T&&T(function(e){e.done(D).fail(O),D=e.resolve,O=e.reject}).promise(r),r.abort=function(){!J++&&G()},o(r.beforeSend,r,[r])===!1||J?r:(z=z||c,V=V?"string"==typeof V?V:e.param(V,r.traditional):c,z+=V?i(z)+V:c,$&&(z+=i(z)+encodeURIComponent($)+"=?"),!R&&!q&&(z+=i(z)+"_"+(new Date).getTime()+"="),z=z.replace(/=\?(&|$)/,"="+W+"$1"),q&&(M=A[z])?M.s?p(M.s[0]):P(M):(k[W]=n,H=e(w)[0],H.id=d+E++,U&&(H[l]=U),_&&_.version()<11.6?(B=e(w)[0]).text="document.getElementById('"+H.id+"')."+g+"()":H[s]=s,L&&(H.htmlFor=H.id,H.event=h),H[m]=H[g]=H[v]=function(e){if(!H[y]||!/i/.test(H[y])){try{H[h]&&H[h]()}catch(t){}e=a,a=0,e?p(e[0]):P(u)}},H.src=z,G=function(e){I&&clearTimeout(I),H[v]=H[m]=H[g]=null,S[b](H),B&&S[b](B)},S[f](H,j=S.firstChild),B&&S[f](B,j),I=X>0&&setTimeout(function(){P(C)},X)),r)}var a,s="async",l="charset",c="",u="error",f="insertBefore",d="_jqjsp",p="on",h=p+"click",g=p+u,m=p+"load",v=p+"readystatechange",y="readyState",b="removeChild",w="<script>",x="success",C="timeout",k=window,T=e.Deferred,S=e("head")[0]||document.documentElement,A={},E=0,N={callback:d,url:location.href},_=k.opera,L=!!e("<div>").html("<!--[if IE]><i><![endif]-->").find("i").length;r.setup=function(t){e.extend(N,t)},e.jsonp=r}(jQuery),define("jsonp",["jQuery"],function(e){return function(){var t;return t||e.$.jsonp}}(this)),function(e,t){function n(e,t,n){if(o.initBridge())try{i.callHandler(e,t||null,n||null)}catch(a){r.log(e+" bridge call error: "+a)}else alert(e+" bridge is null")}var o=e.YYMobileBridge={},i=null,r=e.console||{log:function(){}};o.refreshActCallback=function(e){r.log(e)},e.refreshAct=function(e){e=t.parseJSON(e),o.refreshActCallback(e)},o.isUseBridge=function(){return null!=i},o.initBridge=function(t){return o.useBridge=!0,i||(i=e.WebViewJavascriptBridge,i.init(t||function(){})),i},o.loadUrl=function(t,n){return t?void(o.isUseBridge()?getBridge()?i.callHandler("clientLoadURL",t,n):alert("clientLoadURL bridge is null"):e.location.href="objc://clientLoadUrl/"+t):(r.log("loadUrl error: url is blank"),!1)},o.login=function(e){n("clientLogin",null,e)},o.getTicketAndGUID=function(e){n("getTicketAndGUID",null,e)}}(window,jQuery),define("YYMobileBridge",["jQuery"],function(e){return function(){var t;return t||e.YYMobileBridge}}(this)),function(){if(navigator.userAgent.match(/(iPad|iPhone|iPod).*?YY/g))if(null==window.opener&&null==window.YYApiCore||null!=window.opener&&null==window.opener.YYApiCore){var e=document.createElement("iframe");e.style.display="none",e.src="yyapi://load",document.body.appendChild(e)}else null!=window.opener&&null==window.YYApiCore&&null!=window.opener.YYApiCore&&(window.YYApiCore=window.opener.YYApiCore);else navigator.userAgent.indexOf("Android")!=-1&&(YYApiCore={__GLOBAL_FUNC_INDEX__:0,invokeClientMethod:function(e,t,n,o){var i;try{var r="";o&&(r="function"==typeof o?YYApiCore.createGlobalFuncForCallback(o):o),i=JSON.parse(window.AndroidJSInterfaceV2.invoke(e,t,JSON.stringify(n||{}),r))}catch(a){console&&console.log(a)}return i},createGlobalFuncForCallback:function(e){if(e){var t="__GLOBAL_CALLBACK__"+YYApiCore.__GLOBAL_FUNC_INDEX__++;return window[t]=function(){var t=arguments,n="function"==typeof e?e:window[e];setTimeout(function(){n.apply(null,t)},0)},t}return null},invokeWebMethod:function(e,t){YYApiCore.invokeCallbackWithArgs(e,[t])},invokeCallbackWithArgs:function(e,t){if(e){var n,o=null;"function"==typeof e?o=e:(n=window[e])&&"function"==typeof n&&(o=n),o&&setTimeout(function(){o.apply(null,t)},0)}}})}(),define("yyBridge",["YYMobileBridge"],function(e){return function(){var t;return t||e.yyBridge}}(this)),YYMobileJavascriptAPILevelTable={yyuigoto:1,pop:1,gotoLogin:1,gotoRegister:1,gotoPersonalCenter:1,gotoVipSign:1,gotoPhotoAlbum:1,gotoPrivilege:1,gotoCharacterEmoticonPrivilege:1,gotoColorfulBubblePrivilege:1,gotoLiveHome:1,gotoLiveCenter:1,gotoSettingCenter:1,gotoColorfulBubble:1,gotoPluginManagementSetting:1,gotoNeighborhood:1,joinChannel:1,joinLive:1,gotoPluginManagement:1,gotoPluginItem:1,gotoPluginItemOutline:1,checkLoginStatusWithCallback:1,requestUserWebToken:1,followUser:1,unFollowUser:1,getAppInfo:2,setPhoneNumber:2,showAlertMessage:2,setCommonStorageValueForKey:2,getCommonStorageValueForKey:2,showProgressWindow:2,hideProgressWindow:2,postNotification:2,deleteSharedCookie:2,gotoWeb:2,goto1931:2,gotoMessageCenter:2,closeAllWindow:3,gotoBrowser:3,showBackBtn:3,hideBackBtn:3},YYMobileJavascriptAPIVersionTable={yyuigoto:"1.1",pop:"1.1",gotoLogin:"1.1",gotoRegister:"1.1",gotoPersonalCenter:"1.1",gotoVipSign:"1.1",gotoPhotoAlbum:"1.1",gotoPrivilege:"1.1",gotoCharacterEmoticonPrivilege:"1.1",gotoColorfulBubblePrivilege:"1.1",gotoLiveHome:"1.1",gotoLiveCenter:"1.1",gotoSettingCenter:"1.1",gotoColorfulBubble:"1.1",gotoPluginManagementSetting:"1.1",gotoNeighborhood:"1.1",joinChannel:"1.1",joinLive:"1.1",gotoPluginManagement:"1.1",gotoPluginItem:"1.1",gotoPluginItemOutline:"1.1",checkLoginStatusWithCallback:"1.1",requestUserWebToken:"1.1",followUser:"1.1",unFollowUser:"1.1",getAppInfo:"1.2",setPhoneNumber:"1.2",showAlertMessage:"1.2",setCommonStorageValueForKey:"1.2",getCommonStorageValueForKey:"1.2",showProgressWindow:"1.2",hideProgressWindow:"1.2",postNotification:"1.2",deleteSharedCookie:"1.2",gotoWeb:"1.2",goto1931:"1.2",gotoMessageCenter:"1.2",closeAllWindow:"1.3",gotoBrowser:"1.3",showBackBtn:"1.3",hideBackBtn:"1.3"},YYMobileJavascriptAPIVersionTable={1.1:1,1.2:2,1.3:3},YYMobileNotificationIDs={CarrierDataTrafficPackageSubscribeStateChanged:4097},YYMobileNotificationUserInfoKeys={CarrierDataTrafficPackageSubscribeStateChangedUserInfoNewState:"CarrierDataTrafficPackageSubscribeStateChangedUserInfoNewState"},YYMobileOverridable={popAction:function(){return!1}},YYMobileJavascriptWasReady=!1;var __YYMobileAPILevel__=0;initializeYYMobileAPI(),YYMobile={Overridable:YYMobileOverridable,NotificationIDs:YYMobileNotificationIDs,NotificationUserInfoKeys:YYMobileNotificationUserInfoKeys,pop:pop,gotoLogin:gotoLogin,gotoRegister:gotoRegister,gotoPersonalCenter:gotoPersonalCenter,gotoVipSign:gotoVipSign,gotoPhotoAlbum:gotoPhotoAlbum,gotoPrivilege:gotoPrivilege,gotoCharacterEmoticonPrivilege:gotoCharacterEmoticonPrivilege,gotoColorfulBubblePrivilege:gotoColorfulBubblePrivilege,gotoLiveHome:gotoLiveHome,gotoLiveCenter:gotoLiveCenter,gotoSettingCenter:gotoSettingCenter,gotoColorfulBubble:gotoColorfulBubble,gotoPluginManagementSetting:gotoPluginManagementSetting,gotoNeighborhood:gotoNeighborhood,joinChannel:joinChannel,joinLive:joinLive,gotoPluginManagement:gotoPluginManagement,gotoPluginItem:gotoPluginItem,gotoPluginItemOutline:gotoPluginItemOutline,checkLoginStatusWithCallback:checkLoginStatusWithCallback,requestUserWebToken:requestUserWebToken,followUser:followUser,unFollowUser:unFollowUser,getAPILevel:getAPILevel,getAppInfo:getAppInfo,setPhoneNumber:setPhoneNumber,showAlertMessage:showAlertMessage,showAlertMessageSimple:showAlertMessageSimple,setCommonStorageValueForKey:setCommonStorageValueForKey,getCommonStorageValueForKey:getCommonStorageValueForKey,showProgressWindow:showProgressWindow,hideProgressWindow:hideProgressWindow,postNotification:postNotification,deleteSharedCookie:deleteSharedCookie,gotoWeb:gotoWeb,goto1931:goto1931,gotoMessageCenter:gotoMessageCenter,closeAllWindow:function(){safeCallHandler("closeAllWindow")},showBackBtn:function(){safeCallHandler("showBackBtn")},hideBackBtn:function(){safeCallHandler("hideBackBtn")},gotoBrowser:function(e){safeCallHandler("gotoBrowser",{url:e})}},Y1931Overridable={onNavigationBarButtonItemTapped:function(e,t){},onGetNavigationBarInformation:function(){return{}}},Y1931BarButtonItemIcons={POST:1e3,MESSAGE:1001,SHARE:1002,POSTOWNER:1003,CLOSE:1004,CLEARMESSAGE:1005},Y1931Images={"1931LOGO":1931},Y1931API={initialize1931API:function(){onJavascriptBridgeReady(function(e){e.registerHandler("1931NavigationBarButtonItemTapped",function(e,t){Y1931Overridable.onNavigationBarButtonItemTapped(e.identifier,e.selected)}),e.registerHandler("get1931NavigationBarInformation",function(e,t){t(Y1931Overridable.onGetNavigationBarInformation())})})},createBarButtonItem:function(e,t,n,o,i,r){var a={};return a.identifier=e,a.icon=n,a.title=t,a.selectable=o,a.badge=i,a.selected=r,a},createNavigationBarInformation:function(e,t,n){var o={};return o.title=e,o.titleImage=t,o.rightItems=n,o},setNavigationBarLeftItems:function(e){},setNavigationBarRightItems:function(e){safeCallHandler("setNavigationRightItems",e)},setNavigationTitle:function(e,t){safeCallHandler("setNavigationTitle",{title:e,titleImage:t})},updateNavigationBarItemBadge:function(e,t){safeCallHandler("updateNavigationBarItemBadge",{itemId:e,badge:t})},share:function(e,t,n,o,i,r){safeCallHandler("share",{content:e,imageUrl:t,title:n,shareUrl:o,musicUrl:i,videoUrl:r})}},Y1931API.initialize1931API(),define("yymobile",["yyBridge"],function(){}),"undefined"==typeof window.console&&(window.console={log:function(){}});var hiido=function(){var e=window,t=(e._hiidoDebug||!1,{domain:"ylog.hiido.com",ipPrefix:"183.61.2.",ips:[91,92,94,95,96,97,98],getServerUrl:function(e){e=e||this.domain;var t=location.protocol,n="j.gif?";return t+"//"+e+"/"+n},randomIp:function(){var e=Math.random(),t=Math.round(e*(this.ips.length-1)),n=this.ips[t];return this.ipPrefix+n},getParam:function(e){var t=e,n=[];t.time=parseInt(1*new Date/1e3),t.ui=this.getCookie("hiido_ui"),t.username=this.getCookie("username");for(h in t)t.hasOwnProperty(h)&&n.push(encodeURIComponent(h)+"="+(void 0===t[h]||null===t[h]?"":encodeURIComponent(t[h])));return n.join("&")},send:function(e,t,n){var o=n||0,i=new Image,r=this;i.onerror=function(){o<=1?r.send(e,t,++o):2==o&&r.send(t,t,++o)},i.src=e},getCookie:function(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}}),n={stat:function(e){if(!e)return!1;var n=t.getServerUrl(),o=t.getParam(e),i=n+o,r=t.getServerUrl(t.randomIp())+o;t.send(i,r)},loadHiidoJS:function(){_hiido_no=0;var e=document.getElementsByTagName("head")[0]||document.documentElement,t=document.createElement("script");t.src="http://www.duowan.com/duowan.js",t.type="text/javascript";var n=!1;t.onload=t.onreadystatechange=function(){n||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(n=!0,t.onload=t.onreadystatechange=null,e&&t.parentNode&&e.removeChild(t))},e.insertBefore(t,e.firstChild)},addUVToHiido:function(e){if("[object Array]"!=toString.call(e)?(_hiido_wid=[],_hiido_wid.push(e)):_hiido_wid=e,"undefined"==typeof _hiido_no&&(_hiido_no=0),window.hiidov3)try{hiidov3()}catch(t){}else this.loadHiidoJS()}};return"object"==typeof module&&(module.exports=n),window.appHiido=n,n}(),param={act:"webevent",eventid:"",value:"",class1:"ent",class2:"ceremony",eventype:"1",uid:0,bak1:0,bak2:0};window.reportEvent=function(e,t,n,o,i){YYMobile.getAppInfo(function(o){var r=o.uid>0?o.uid:0;r=r||o.imei||o.imsi||o.phoneNumbe,n&&n!=-1||(n=0);var a=$.extend({},param);a.eventid=e,a.value=t,a.uid=r||a.uid,a.bak1=n||a.bak1,a.bak2=o.imei,hiido.stat(a),"function"==typeof i&&i(a)})},ua=navigator.userAgent,isIos=ua.match(/iPhone|iPad|iPod/i)&&ua.indexOf("AppleWebKit")>-1,window.getDeviceInfo=function(){return window.YYApiCore.invokeClientMethod("device","deviceInfo")};var appVersion="0",canOpenInnerView=!1,stateTicket,isUserNewAPI=function(){var e=!1;if(isIos)return!0;try{var t=0;if(t=getDeviceInfo()){appVersion=t.appVersion;var n=appVersion.replace(/[^0-9.]/gi,""),o=n.split(".");$.each(o,function(t,n){if(n=Number(n),0==t){if(n<3)return!1;if(n>3)return canOpenInnerView=!0,e=!0,!1}else if(1==t){if(n>0)return e=!0,canOpenInnerView=!0,!1}else 2==t&&(n>0&&(e=!0),n>5&&(canOpenInnerView=!0))})}}catch(i){console.log("exception:"+i)}return e}();window.openPageInner=function(e){e&&(window.location.href="objc://clientLoadUrl/"+e)},window.showPoneMsg=function(e,t){YYMobile.showAlertMessageSimple?YYMobile.showAlertMessageSimple(e,t):alert(t)},window.sendHeightToClient=function(e){canOpenInnerView&&(e||(e=document.body.clientHeight),window.YYApiCore.invokeClientMethod("ui","webHeightPx",{height:e}))},window.gotoPage=function(e){if(isUserNewAPI){var t=encodeURIComponent(encodeURIComponent(e));window.YYApiCore.invokeClientMethod("ui","goto",{uri:"yymobile://Web/Features/5/Url/"+t})}else window.location.href=e},window.gotoPageInner=function(e){e&&(window.location.href=e)},window.backJoinLive=function(){isNaN(window.topSid)||isNaN(window.subSid)||0==topSid?YYMobile.gotoLiveHome():YYMobile.joinLive(window.topSid,window.subSid)},window.errBackHome=function(e){e||(e="用户信息查询失败，请稍候再试！"),showPoneMsg("确定",e),setTimeout(pop,1500)},window.showNobleRightButton=function(){isUserNewAPI&&window.YYApiCore.invokeClientMethod("ui","showNobleRightButton")},window.hideNobleRightButton=function(){isUserNewAPI&&window.YYApiCore.invokeClientMethod("ui","hideNobleRightButton")},window.setNavigationBarTitle=function(e){e||(e="活动页面"),isUserNewAPI&&window.YYApiCore.invokeClientMethod("ui","setNavigationBar",{title:{title:e}})};var mobileHiidoParam={act:"webevent",
eventype:"1",eventid:"0",uid:"0",hostid:"0",class1:"ent",class2:"earn",imei:"0",sys:"3",act_type:"0",channelSource:"official"},reportPhoneEvent=function(e,t,n,o){getAppInfo(function(i){var r=i.uid>0?i.uid:0;r=r||i.imei||i.imsi||i.phoneNumbe,t&&t!=-1||(t=0);var a=$.extend({},mobileHiidoParam),s=i.system,l=0;s&&(s.toLowerCase()=="iOS".toLowerCase()?l=0:s.toLowerCase()=="Android".toLowerCase()&&(l=2)),a.eventid=e,a.uid=r||a.uid,a.hostid=n||a.hostid,a.sys=l,a.imei=i.imei,a.act_type=t;var c="";try{c=window.YYApiCore.invokeClientMethod("data","getChannelSource"),"string"!=typeof c&&(c="")}catch(u){c=""}a.channelSource=c,hiido.stat(a),"function"==typeof o&&o(a)})},mobileHiidoParam2={act:"webevent",eventype:"1",eventid:"0",uid:"0",hostid:"0",class1:"ent",class2:"earn",imei:"0",sys:"3",act_type:"0",channelSource:"official",bak1:"0"},reportPhoneEvent2=function(e,t,n,o,i){getAppInfo(function(r){var a=r.uid>0?r.uid:0;a=a||r.imei||r.imsi||r.phoneNumbe,t&&t!=-1||(t=0);var s=$.extend({},mobileHiidoParam2),l=r.system,c=0;l&&(l.toLowerCase()=="iOS".toLowerCase()?c=0:l.toLowerCase()=="Android".toLowerCase()&&(c=2)),s.eventid=e,s.uid=a||s.uid,s.hostid=o||s.hostid,s.sys=c,s.imei=r.imei,s.act_type=t,s.bak1=n;var u="";try{u=window.YYApiCore.invokeClientMethod("data","getChannelSource"),"string"!=typeof u&&(u="")}catch(f){u=""}s.channelSource=u,hiido.stat(s),"function"==typeof i&&i(s)})};define("reportPhoneEvent2",["yymobile"],function(e){return function(){var t;return t||e.reportPhoneEvent2}}(this)),require(["jQuery","artTemplate","fastclick","lazyload","jsonp","reportPhoneEvent2"],function(e,t,n,o){function i(){r(),a()}function r(){var t="http://yue.yy.com/yyue/topicMsg/queryWithCount?topicId=99&count=1&from=SYzhouxing";e.ajax({type:"GET",url:t,dataType:"jsonp",callback:"jsonp1",error:function(e){console.log(e)},success:function(t){var n=t||{};e("#hotNewsTxt").attr("href",n.list[0].messageUrl).text(n.list[0].msgTitle)}})}function a(){function n(n){var o=e.extend({week:0},n||{}),i=o.week,r="http://api.ys.m.yy.com/api/public/weekStar/PQueryWeekStartRankReq.json?data={week_flag:"+i+",extData:{}}&callback=weekstart";e.jsonp({type:"GET",url:r,dataType:"jsonp",callback:"weekstart",cache:!0,error:function(e){console.log(e)},success:function(n){if(n&&1!=n.result){var o=e("#g-rank-mod"),i={rank_info_vec:n.rank_info_vec||[],defaults:{img:"http://act.m.yystatic.com/act/images/default_grey_yy.png"}},r=n.rank_info_vec,a=7,l=3;if(r.length<a)for(var c=r.length,u=0;u<a-c;++u)i.rank_info_vec.push({});for(var u=0;u<i.rank_info_vec.length;++u)i.rank_info_vec[u].top_fan_vec||(i.rank_info_vec[u].top_fan_vec=[]);for(var u=0;u<i.rank_info_vec.length;++u)i.rank_info_vec[u].top_anchor_vec||(i.rank_info_vec[u].top_anchor_vec=[]);for(var u=0;u<i.rank_info_vec.length;++u)i.rank_info_vec[u].gift_info_map||(i.rank_info_vec[u].gift_info_map=[]);for(var u=0;u<i.rank_info_vec.length;++u)if(i.rank_info_vec[u].top_fan_vec.length<l)for(var c=i.rank_info_vec[u].top_fan_vec.length,f=0;f<l-c;++f)i.rank_info_vec[u].top_fan_vec.push({});for(var u=0;u<i.rank_info_vec.length;++u)if(i.rank_info_vec[u].top_anchor_vec.length<l)for(var c=i.rank_info_vec[u].top_anchor_vec.length,f=0;f<l-c;++f)i.rank_info_vec[u].top_anchor_vec.push({});o.html(t("rankWrap",i)),e("img.lazy").lazyload(),e("#g-rank-mod").on("click","dl.u-rankList > dd",function(){var t=e(this).attr("data-uid")||0,n=e(this).attr("data-live")||0,o=e(this).attr("data-topcid")||0,i=e(this).attr("data-subcid")||0;s(n,o,i,t),reportPhoneEvent2("10010853","4","0",0)})}}})}var o=e(".ui-toggeBtn");n(),o.on("click","li",function(){var t=0==e(this).index()?0:-1;e(this).addClass("active").siblings("li").removeClass("active"),n({week:t})})}function s(e,t,n,o){1==parseInt(e)&&0!=parseInt(t)&&0!=parseInt(n)?YYMobile.joinLive(t,n):o&&0!=parseInt(o)&&YYMobile.gotoPersonalCenter(o)}e(function(){n.attach(document.body)}),i(),t.helper("milliFormat",function(e){return e?e.toString().replace(/(?=(?!^)(\d{3})+$)/g,","):"0"})}),define("p-list.js",function(){});
>>>>>>> 9566897826097956bf2752219a88daed6ce1419b
