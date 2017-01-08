<<<<<<< HEAD
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
=======
!function(){if(navigator.userAgent.match(/(iPad|iPhone|iPod).*?YY/g))if(null==window.opener&&null==window.YYApiCore||null!=window.opener&&null==window.opener.YYApiCore){var n=document.createElement("iframe");n.style.display="none",n.src="yyapi://load",document.body.appendChild(n)}else null!=window.opener&&null==window.YYApiCore&&null!=window.opener.YYApiCore&&(window.YYApiCore=window.opener.YYApiCore);else navigator.userAgent.indexOf("Android")!=-1&&(YYApiCore={__GLOBAL_FUNC_INDEX__:0,invokeClientMethod:function(n,o,e,i){var l;try{var r="";i&&(r="function"==typeof i?YYApiCore.createGlobalFuncForCallback(i):i),l=JSON.parse(window.AndroidJSInterfaceV2.invoke(n,o,JSON.stringify(e||{}),r))}catch(t){console&&console.log(t)}return l},createGlobalFuncForCallback:function(n){if(n){var o="__GLOBAL_CALLBACK__"+YYApiCore.__GLOBAL_FUNC_INDEX__++;return window[o]=function(){var o=arguments,e="function"==typeof n?n:window[n];setTimeout(function(){e.apply(null,o)},0)},o}return null},invokeWebMethod:function(n,o){YYApiCore.invokeCallbackWithArgs(n,[o])},invokeCallbackWithArgs:function(n,o){if(n){var e,i=null;"function"==typeof n?i=n:(e=window[n])&&"function"==typeof e&&(i=e),i&&setTimeout(function(){i.apply(null,o)},0)}}})}();
>>>>>>> 9566897826097956bf2752219a88daed6ce1419b
