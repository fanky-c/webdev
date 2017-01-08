<<<<<<< HEAD
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
=======
!function(l,n){function i(l,n,i){if(e.initBridge())try{r.callHandler(l,n||null,i||null)}catch(o){t.log(l+" bridge call error: "+o)}else alert(l+" bridge is null")}var e=l.YYMobileBridge={},r=null,t=l.console||{log:function(){}};e.refreshActCallback=function(l){t.log(l)},l.refreshAct=function(l){l=n.parseJSON(l),e.refreshActCallback(l)},e.isUseBridge=function(){return null!=r},e.initBridge=function(n){return e.useBridge=!0,r||(r=l.WebViewJavascriptBridge,r.init(n||function(){})),r},e.loadUrl=function(n,i){return n?void(e.isUseBridge()?getBridge()?r.callHandler("clientLoadURL",n,i):alert("clientLoadURL bridge is null"):l.location.href="objc://clientLoadUrl/"+n):(t.log("loadUrl error: url is blank"),!1)},e.login=function(l){i("clientLogin",null,l)},e.getTicketAndGUID=function(l){i("getTicketAndGUID",null,l)}}(window,jQuery);
>>>>>>> 9566897826097956bf2752219a88daed6ce1419b
