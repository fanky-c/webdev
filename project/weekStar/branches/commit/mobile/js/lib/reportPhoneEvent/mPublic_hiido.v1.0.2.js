<<<<<<< HEAD
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

=======
function checkTicketStatus(e,i,o){var n=window.YYApiCore.invokeClientMethod("data","webTicket");n&&n.length>0?(stateTicket=n,e(n)):YYMobile.checkLoginStatusWithCallback(function(){YYMobile.requestUserWebToken(function(n){n&&n.length>0?(stateTicket=n,e(n)):i&&(YYMobileOverridable.loginEvent=function(){o&&o()},YYMobile.gotoLogin())})},function(){i&&(YYMobileOverridable.loginEvent=function(){o&&o()},YYMobile.gotoLogin())})}"undefined"==typeof window.console&&(window.console={log:function(){}});var hiido=function(){var e=window,i=(e._hiidoDebug||!1,{domain:"ylog.hiido.com",ipPrefix:"183.61.2.",ips:[91,92,94,95,96,97,98],getServerUrl:function(e){e=e||this.domain;var i=location.protocol,o="j.gif?";return i+"//"+e+"/"+o},randomIp:function(){var e=Math.random(),i=Math.round(e*(this.ips.length-1)),o=this.ips[i];return this.ipPrefix+o},getParam:function(e){var i=e,o=[];i.time=parseInt(1*new Date/1e3),i.ui=this.getCookie("hiido_ui"),i.username=this.getCookie("username");for(h in i)i.hasOwnProperty(h)&&o.push(encodeURIComponent(h)+"="+(void 0===i[h]||null===i[h]?"":encodeURIComponent(i[h])));return o.join("&")},send:function(e,i,o){var n=o||0,t=new Image,a=this;t.onerror=function(){n<=1?a.send(e,i,++n):2==n&&a.send(i,i,++n)},t.src=e},getCookie:function(e){var i,o=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(i=document.cookie.match(o))?unescape(i[2]):null}}),o={stat:function(e){if(!e)return!1;var o=i.getServerUrl(),n=i.getParam(e),t=o+n,a=i.getServerUrl(i.randomIp())+n;i.send(t,a)},loadHiidoJS:function(){_hiido_no=0;var e=document.getElementsByTagName("head")[0]||document.documentElement,i=document.createElement("script");i.src="http://www.duowan.com/duowan.js",i.type="text/javascript";var o=!1;i.onload=i.onreadystatechange=function(){o||this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(o=!0,i.onload=i.onreadystatechange=null,e&&i.parentNode&&e.removeChild(i))},e.insertBefore(i,e.firstChild)},addUVToHiido:function(e){if("[object Array]"!=toString.call(e)?(_hiido_wid=[],_hiido_wid.push(e)):_hiido_wid=e,"undefined"==typeof _hiido_no&&(_hiido_no=0),window.hiidov3)try{hiidov3()}catch(i){}else this.loadHiidoJS()}};return"object"==typeof module&&(module.exports=o),window.appHiido=o,o}(),param={act:"webevent",eventid:"",value:"",class1:"ent",class2:"ceremony",eventype:"1",uid:0,bak1:0,bak2:0};window.reportEvent=function(e,i,o,n,t){YYMobile.getAppInfo(function(n){var a=n.uid>0?n.uid:0;a=a||n.imei||n.imsi||n.phoneNumbe,o&&o!=-1||(o=0);var r=$.extend({},param);r.eventid=e,r.value=i,r.uid=a||r.uid,r.bak1=o||r.bak1,r.bak2=n.imei,hiido.stat(r),"function"==typeof t&&t(r)})},ua=navigator.userAgent,isIos=ua.match(/iPhone|iPad|iPod/i)&&ua.indexOf("AppleWebKit")>-1,window.getDeviceInfo=function(){return window.YYApiCore.invokeClientMethod("device","deviceInfo")};var appVersion="0",canOpenInnerView=!1,stateTicket,isUserNewAPI=function(){var e=!1;if(isIos)return!0;try{var i=0;if(i=getDeviceInfo()){appVersion=i.appVersion;var o=appVersion.replace(/[^0-9.]/gi,""),n=o.split(".");$.each(n,function(i,o){if(o=Number(o),0==i){if(o<3)return!1;if(o>3)return canOpenInnerView=!0,e=!0,!1}else if(1==i){if(o>0)return e=!0,canOpenInnerView=!0,!1}else 2==i&&(o>0&&(e=!0),o>5&&(canOpenInnerView=!0))})}}catch(t){console.log("exception:"+t)}return e}();window.openPageInner=function(e){e&&(window.location.href="objc://clientLoadUrl/"+e)},window.showPoneMsg=function(e,i){YYMobile.showAlertMessageSimple?YYMobile.showAlertMessageSimple(e,i):alert(i)},window.sendHeightToClient=function(e){canOpenInnerView&&(e||(e=document.body.clientHeight),window.YYApiCore.invokeClientMethod("ui","webHeightPx",{height:e}))},window.gotoPage=function(e){if(isUserNewAPI){var i=encodeURIComponent(encodeURIComponent(e));window.YYApiCore.invokeClientMethod("ui","goto",{uri:"yymobile://Web/Features/5/Url/"+i})}else window.location.href=e},window.gotoPageInner=function(e){e&&(window.location.href=e)},window.backJoinLive=function(){isNaN(window.topSid)||isNaN(window.subSid)||0==topSid?YYMobile.gotoLiveHome():YYMobile.joinLive(window.topSid,window.subSid)},window.errBackHome=function(e){e||(e="用户信息查询失败，请稍候再试！"),showPoneMsg("确定",e),setTimeout(pop,1500)},window.showNobleRightButton=function(){isUserNewAPI&&window.YYApiCore.invokeClientMethod("ui","showNobleRightButton")},window.hideNobleRightButton=function(){isUserNewAPI&&window.YYApiCore.invokeClientMethod("ui","hideNobleRightButton")},window.setNavigationBarTitle=function(e){e||(e="活动页面"),isUserNewAPI&&window.YYApiCore.invokeClientMethod("ui","setNavigationBar",{title:{title:e}})};var mobileHiidoParam={act:"webevent",eventype:"1",eventid:"0",uid:"0",hostid:"0",class1:"ent",class2:"earn",imei:"0",sys:"3",act_type:"0",channelSource:"official"},reportPhoneEvent=function(e,i,o,n){getAppInfo(function(t){var a=t.uid>0?t.uid:0;a=a||t.imei||t.imsi||t.phoneNumbe,i&&i!=-1||(i=0);var r=$.extend({},mobileHiidoParam),d=t.system,s=0;d&&(d.toLowerCase()=="iOS".toLowerCase()?s=0:d.toLowerCase()=="Android".toLowerCase()&&(s=2)),r.eventid=e,r.uid=a||r.uid,r.hostid=o||r.hostid,r.sys=s,r.imei=t.imei,r.act_type=i;var c="";try{c=window.YYApiCore.invokeClientMethod("data","getChannelSource"),"string"!=typeof c&&(c="")}catch(u){c=""}r.channelSource=c,hiido.stat(r),"function"==typeof n&&n(r)})},mobileHiidoParam2={act:"webevent",eventype:"1",eventid:"0",uid:"0",hostid:"0",class1:"ent",class2:"earn",imei:"0",sys:"3",act_type:"0",channelSource:"official",bak1:"0"},reportPhoneEvent2=function(e,i,o,n,t){getAppInfo(function(a){var r=a.uid>0?a.uid:0;r=r||a.imei||a.imsi||a.phoneNumbe,i&&i!=-1||(i=0);var d=$.extend({},mobileHiidoParam2),s=a.system,c=0;s&&(s.toLowerCase()=="iOS".toLowerCase()?c=0:s.toLowerCase()=="Android".toLowerCase()&&(c=2)),d.eventid=e,d.uid=r||d.uid,d.hostid=n||d.hostid,d.sys=c,d.imei=a.imei,d.act_type=i,d.bak1=o;var u="";try{u=window.YYApiCore.invokeClientMethod("data","getChannelSource"),"string"!=typeof u&&(u="")}catch(l){u=""}d.channelSource=u,hiido.stat(d),"function"==typeof t&&t(d)})};
>>>>>>> 9566897826097956bf2752219a88daed6ce1419b
