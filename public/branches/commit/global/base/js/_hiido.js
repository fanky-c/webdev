/*
 *  1、hiido_stat() 海度统计上报
 *  
 *  2、hiido_init_department() 设置内容部，内容一部=1, 内容二部=2, 内容三部=3
 *
 *  3、hiido_init_program() 设置节目，如：曹格=1，黄致列=2
 *
 *  4、hiido_init_eventid() 设置事件id
 *
 *  5、设置渠道号在url后在加参数?f=101
 *  
 *  6、window.hiido_init_settings = {  //在统计js前定义统计信息
 *			eventid:"10009951",
 *			department:1,
 *			program:18,
 *			fromH5:true
 * 		}
 */
;
(function() {
	var hiido = (function() {
		var uuutype = navigator.userAgent,
			app = navigator.appVersion,
			isAndroid = uuutype.indexOf('Android') > -1 || uuutype.indexOf('Linux') > -1, //android终端或者uc浏览器
			isiOS = !!uuutype.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
			yyinfo = uuutype.match(/.*YY([\/\(])?(ClientVersion:)?([0-9\.]+).*/),
			version = '1.3.1',
			_hiidoDebug = window._hiidoDebug || false,
			info = window.YYApiCore && window.YYApiCore.invokeClientMethod("device", "deviceInfo"),
			settings = window.hiido_init_settings || {};

		function IsPC() {
			var userAgentInfo = navigator.userAgent;
			var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
			var flag = true;
			for (var v = 0; v < Agents.length; v++) {
				if (userAgentInfo.indexOf(Agents[v]) > 0) {
					flag = false;
					break;
				}
			}
			return flag;
		}

		return {
			domain: "ylog.hiido.com",
			ipPrefix: "183.61.2.",
			ips: [91, 92, 94, 95, 96, 97, 98],
			// 海度统计的基本参数，如果调用hiido_stat时没有提供详细参数，会默认从这里读取
			hiido_params: {},
			setHiidoParams: function() {
				var sys = this.getSysTerminal();
				var source = this.getUrlParams('f');
				this.hiido_params = {
					"act": "webevent", // 基本固定
					"eventid": settings.eventid || "10009951", // 基本固定   
					"eventype": '1', // 基本固定
					"class2": 2, // 基本固定
					"sys": sys, // 可变，分端，一定要是整型
					"bak1": settings.department || '', // 可变，内容部，如：内容一部=1, 内容二部=2, 内容三部=3
					"bak2": settings.program || '', // 可变，节目id，如：曹格=1
					"bak3": source, //渠道号
					"parm1": '', //备用字段
					"act_type": '0', // 具体事件，应该每次调用hiido_stat都传入，放这里只是一个示例
					"imei": info && info.imei || "" //设备唯一标识码 (手机端)
				}
			},
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
				obj.uid = this.getCookie("uid") || this.getCookie("yyuid");
				obj.ui = this.getCookie("hiido_ui");
				obj.username = this.getCookie("username");
				for (h in obj) {
					if (obj.hasOwnProperty(h)) {
						param.push(encodeURIComponent(h) + "=" + (obj[h] === undefined || obj[h] === null ? "" :
							encodeURIComponent(obj[h])))
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
				}
				img.src = url;
			},
			getCookie: function(name) {
				var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
				if (arr = document.cookie.match(reg)) {
					return unescape(arr[2]);
				} else {
					return null
				};
			},
			// ============= 新统计接口 待定
			// 读取当前分端,IOS:0,手Y:1,Android:2,PC:3,web:4,h5:5
			getSysTerminal: function() {
				try {
					if (window.external.sendCommand("") == true) {
						return 3;
					}
				} catch (e) {
					if (yyinfo) {
						return 1;
					} else if (settings.fromH5 || !IsPC()) {
						return 5;
					} else {
						return 4;
					}
				}
			},
			// 读取当前url参数
			getUrlParams: function(name) {
				var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
				var params = window.location.search.substr(1).match(reg);
				if (params == null) {
					return null;
				} else {
					return unescape(params[2]);
				}
			},
			// 设置eventid
			hiido_init_eventid: function(eventid) {
				this.hiido_params.eventid = eventid;
			},
			// 设置内容部，如 1,2,3
			hiido_init_department: function(deptid) {
				this.hiido_params.bak1 = deptid;
			},
			// 设置节目id，如 1,2,3
			hiido_init_program: function(pgid) {
				this.hiido_params.bak2 = pgid;
			},
			hiido_stat: function(act_type, parm1, deptid, pgid, source) {
				var hiidoParams = this.hiido_params;
				var params = {
					"act": hiidoParams.act,
					"eventid": hiidoParams.eventid,
					"eventype": hiidoParams.eventype,
					"class2": hiidoParams.class2,
					"sys": hiidoParams.sys,
					"bak1": deptid || hiidoParams.bak1,
					"bak2": pgid || hiidoParams.bak2,
					"bak3": source || hiidoParams.bak3,
					"parm1": parm1 || hiidoParams.parm1,
					"act_type": act_type,
					"imei": hiidoParams.imei
				};
				this.appHiidoStat(params);
			},
			appHiidoStat: function(opt) {
				if (!opt) {
					return false;
				}
				var svr = this.getServerUrl();
				var param = this.getParam(opt);
				var url = svr + param
				var backurl = this.getServerUrl(hiido.randomIp()) + param;
				this.send(url, backurl);
			},
			/*
			将 duowan.js 的加载改放到页面 script 标签中引入  chenwubin 2016-11-24
			
			addDuowanJs:function(){
				var head = document.getElementsByTagName("head")[0] || document.documentElement;
			    var script = document.createElement("script");
			    script.src = "http://www.duowan.com/duowan.js?nocdn=true";
			    script.type = "text/javascript";
			    head.insertBefore(script, head.firstChild );
			},
			*/
			init: function() {
				// this.addDuowanJs();
				this.setHiidoParams();
			}
		}
	})();

	hiido.init();
	window.hiido_stat = function(act_type, parm1, deptid, pgid, source) {
		hiido.hiido_stat(act_type, parm1, deptid, pgid, source);
	}
	window.hiido_init_program = function(pgid) {
		hiido.hiido_init_program(pgid);
	}
	window.hiido_init_department = function(deptid) {
		hiido.hiido_init_department(deptid);
	}
	window.hiido_init_eventid = function(eventid) {
		hiido.hiido_init_eventid(eventid);
	}

}());