<<<<<<< HEAD
'use strict';
(function(){


    var 
        iUA = navigator.userAgent,
        // 配置是否使用 缩放 viewport
        needScale = window.__flexlayoutConfig && window.__flexlayoutConfig.scale === false ? false : true,
        UA = {
            YY: /YY[\/ ][0-9.]+/.test(iUA),
            Android: /Android[\/ ](\d+\.\d+)/.test(iUA) ? RegExp.$1 : false,
            IOS: /(iPhone|iPod|iPad)/.test(iUA),
            UCBrowser: /UCBrowser|UCWEB/.test(iUA)
        };


    var 
        metaEl = document.querySelector('meta[name=viewport]'),
        head = document.getElementsByTagName('head')[0],
        htmlEl = document.getElementsByTagName('html')[0],
        docEl = document.documentElement,
        dpr = window.devicePixelRatio || 1,
        scWidth = window.screen.width,
        scHeight = window.screen.height;

    if(!metaEl){
        metaEl = document.createElement('meta');
        metaEl.name = "viewport";
        head.appendChild(metaEl);
    }

    // 已经初始化过, 跳出
    if(htmlEl.getAttribute('data-dpr')) {
        return;
    }

    if(UA.IOS && UA.YY){
        needScale = false;
    }


    metaEl.content = "width=device-width, initial-scale=1, maximum-scale=1";

    if(UA.IOS){
        if(needScale){
            scWidth = scWidth * dpr;
            scHeight = scHeight * dpr;
        }

    } else if(UA.Android){
        // 修复部分机型内嵌页(oppo R8) 无论是 clientWidth、 offsetWidth、 screenWidth 都相等的情况（webview 已写死尺寸， 缩放不了）
        if(docEl.clientWidth == docEl.offsetWidth && docEl.offsetWidth == scWidth){
            needScale = false;
        }


        if(needScale){
            var docW2H = docEl.clientWidth - docEl.clientHeight,
                scW2H = scWidth - scHeight;

            // 修复部分机型 window.screen.width 始终代表屏幕较短的问题 即 横屏情况下 window.screen.width < window.screen.height
            if(docW2H / Math.abs(docW2H) != (scW2H) / Math.abs(scW2H)){
                scWidth = window.screen.height;
                scHeight = window.screen.width;
            }


            // 修复部分机型 window.screen.width === docEl.clientWidth 情况, 正常应该是 window.screen.width == docEl.clientWidth * dpr
            if(Math.abs(scWidth - docEl.clientWidth * dpr) > 2){
                scWidth = Math.floor(scWidth * dpr);
                scHeight = Math.floor(scHeight * dpr);
            }
        }
        htmlEl.className += ' mobile-layout android-layout';


    } else {
        scWidth = docEl.clientWidth;
        scHeight = docEl.clientHeight;
        htmlEl.className += ' pc-layout';
    }

    var 
		clientWidth = scWidth > scHeight? scHeight: scWidth,
		clientHeight = scWidth > scHeight? scWidth: scHeight,
        rem = clientWidth / 10, 
		vrem = clientHeight / 10,
		fontEl = document.createElement('style'), 
		scale = 1 / dpr; // 设置viewport，进行缩放，达到高清效果 

    var cnt = [
        'width=' + clientWidth,
		'initial-scale=' + scale,
        'maximum-scale='+ scale
    ];

    if(UA.Android && UA.Android <= 4 && !UA.UCBrowser){
        // 修复部分低端机缩放后显示比例不正常问题 而 UC浏览器 碰到这个则会出现忽略 scale 直接 1:1 显示
        cnt.push('target-densitydpi=device-dpi');
    }
    if(needScale){
        metaEl.setAttribute('content', cnt.join(','));
    }

    htmlEl.setAttribute('data-dpr', dpr); // 动态写入样式

	docEl.firstElementChild.appendChild(fontEl); 


    var 
        cWidth = docEl.clientWidth,
        cHeight = docEl.clientHeight,
        mediaWidth = cWidth > cHeight? cWidth: cHeight;


	fontEl.innerHTML = [
		'html{font-size:' + rem + 'px!important;}',
		'@media screen and (min-width: '+ mediaWidth +'px){',
			'html{font-size:'+ vrem +'px!important;}',
		'}',
	].join('');


    ////////////////////////////////////////////////////////////////////////////
    //if(UA.IOS) { // IOS
    //    // 临时方案 修复 ios yy 内嵌页 缩放比例不正常问题
    //    if(UA.YY){
    //        dpr = 1;
    //    }
    //    scWidth = scWidth * dpr;
    //    scHeight = scHeight * dpr;
    //    htmlEl.className += ' mobile-layout ios-layout';

    //} else if(UA.Android) { // Android

    //    // 修复部分机型内嵌页(oppo R8) 无论是 clientWidth、 offsetWidth、 screenWidth 都相等的情况（webview 已写死尺寸， 缩放不了）
    //    if(docEl.clientWidth == docEl.offsetWidth && docEl.offsetWidth == scWidth){
    //        dpr = 1;
    //    }
        
    //    metaEl.content = "width=device-width, initial-scale=1, maximum-scale=1";

    //    var 
    //        docW2H = docEl.clientWidth - docEl.clientHeight,
    //        scW2H = scWidth - scHeight;

    //    // 修复部分机型 window.screen.width 始终代表屏幕较短的问题 即 横屏情况下 window.screen.width < window.screen.height
    //    if(docW2H / Math.abs(docW2H) != (scW2H) / Math.abs(scW2H)){
    //        scWidth = window.screen.height;
    //        scHeight = window.screen.width;
    //    }


    //    // 修复部分机型 window.screen.width === docEl.clientWidth 情况, 正常应该是 window.screen.width == docEl.clientWidth * dpr
    //    if(Math.abs(scWidth - docEl.clientWidth * dpr) > 2){
    //        scWidth = Math.floor(scWidth * dpr);
    //        scHeight = Math.floor(scHeight * dpr);
    //    }
    //    htmlEl.className += ' mobile-layout android-layout';

    //} else {
    //    htmlEl.className += ' pc-layout';
    //    return;
    //}

    //var 
		//clientWidth = scWidth > scHeight? scHeight: scWidth,
		//clientHeight = scWidth > scHeight? scWidth: scHeight,
    //    rem = clientWidth / 10, 
		//vrem = clientHeight / 10,
		//fontEl = document.createElement('style'), 
		//scale = 1 / dpr; // 设置viewport，进行缩放，达到高清效果 

    //var cnt = [
    //    'width=' + clientWidth,
		//'initial-scale=' + scale,
    //    'maximum-scale='+ scale
    //];

    //if(UA.Android && UA.Android <= 4 && !UA.UCBrowser){
    //    // 修复部分低端机缩放后显示比例不正常问题 而 UC浏览器 碰到这个则会出现忽略 scale 直接 1:1 显示
    //    cnt.push('target-densitydpi=device-dpi');
    //}
	
	//metaEl.setAttribute('content', cnt.join(','));

	//docEl.setAttribute('data-dpr', dpr); // 动态写入样式 

	//docEl.firstElementChild.appendChild(fontEl); 


    //var 
    //    cWidth = docEl.clientWidth,
    //    cHeight = docEl.clientHeight,
    //    mediaWidth = cWidth > cHeight? cWidth: cHeight;


	//fontEl.innerHTML = [
		//'html{font-size:' + rem + 'px!important;}',
		//'@media screen and (min-width: '+ mediaWidth +'px){',
			//'html{font-size:'+ vrem +'px!important;}',
		//'}',
	//].join('');

})();
=======
"use strict";!function(){var e=navigator.userAgent,t=!window.__flexlayoutConfig||window.__flexlayoutConfig.scale!==!1,i={YY:/YY[\/ ][0-9.]+/.test(e),Android:!!/Android[\/ ](\d+\.\d+)/.test(e)&&RegExp.$1,IOS:/(iPhone|iPod|iPad)/.test(e),UCBrowser:/UCBrowser|UCWEB/.test(e)},n=document.querySelector("meta[name=viewport]"),d=document.getElementsByTagName("head")[0],a=document.getElementsByTagName("html")[0],o=document.documentElement,l=window.devicePixelRatio||1,r=window.screen.width,s=window.screen.height;if(n||(n=document.createElement("meta"),n.name="viewport",d.appendChild(n)),!a.getAttribute("data-dpr")){if(i.IOS&&i.YY&&(t=!1),n.content="width=device-width, initial-scale=1, maximum-scale=1",i.IOS)t&&(r*=l,s*=l);else if(i.Android){if(o.clientWidth==o.offsetWidth&&o.offsetWidth==r&&(t=!1),t){var c=o.clientWidth-o.clientHeight,m=r-s;c/Math.abs(c)!=m/Math.abs(m)&&(r=window.screen.height,s=window.screen.width),Math.abs(r-o.clientWidth*l)>2&&(r=Math.floor(r*l),s=Math.floor(s*l))}a.className+=" mobile-layout android-layout"}else r=o.clientWidth,s=o.clientHeight,a.className+=" pc-layout";var h=r>s?s:r,w=r>s?r:s,u=h/10,f=w/10,p=document.createElement("style"),g=1/l,v=["width="+h,"initial-scale="+g,"maximum-scale="+g];i.Android&&i.Android<=4&&!i.UCBrowser&&v.push("target-densitydpi=device-dpi"),t&&n.setAttribute("content",v.join(",")),a.setAttribute("data-dpr",l),o.firstElementChild.appendChild(p);var y=o.clientWidth,x=o.clientHeight,A=y>x?y:x;p.innerHTML=["html{font-size:"+u+"px!important;}","@media screen and (min-width: "+A+"px){","html{font-size:"+f+"px!important;}","}"].join("")}}();
>>>>>>> 9566897826097956bf2752219a88daed6ce1419b
