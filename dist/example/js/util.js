!function(win){"use strict";var util={},doc=win.document;util.confirm=function(e,i,t){var o=this,n=arguments.length;if(2>n)return void console.error("From YDUI's confirm: Please set two or three parameters!!!");if("function"!=typeof arguments[1]&&2==n&&!arguments[1]instanceof Array)return void console.error("From YDUI's confirm: The second parameter must be a function or array!!!");2==n&&(t=i,i=e,e="提示");var r=t;"function"==typeof t&&(r=[{txt:"取消",color:!1},{txt:"确定",color:!0,callback:function(){t&&t()}}]);var a=doc.createElement("div"),l="YDUI_CONFRIM";a.id=l,a.innerHTML='<div class="mask-black"></div><div class="m-confirm">    <div class="confirm-hd"><strong class="confirm-title">'+e+'</strong></div>    <div class="confirm-bd">'+i+"</div></div>";var c=doc.querySelector("#"+l);c&&a.parentNode.removeChild(a);var d=doc.createElement("div");d.className="confirm-ft",r.forEach(function(e,i){var t=doc.createElement("a");t.href="javascript:;","boolean"==typeof e.color?t.className="confirm-btn "+(e.color?"primary":"default"):"string"==typeof e.color&&t.setAttribute("style","color: "+e.color),t.innerHTML=e.txt||"",function(e){t.onclick=function(){r[e].stay||(o.pageScroll.unlock(),a.parentNode.removeChild(a)),r[e].callback&&r[e].callback()}}(i),d.appendChild(t)}),a.querySelector(".m-confirm").appendChild(d),o.pageScroll.lock(),body.appendChild(a)},util.alert=function(e,i){var t=doc.createElement("div"),o="YDUI_ALERT";t.innerHTML='<div>    <div class="mask-black"></div>    <div class="m-confirm m-alert">        <div class="confirm-bd">'+(e||"YDUI Touch")+'</div>        <div class="confirm-ft">            <a href="javascript:;" class="confirm-btn primary">确定</a>        </div>    </div></div>';var n=doc.querySelector("#"+o);n&&t.parentNode.removeChild(t),util.pageScroll.lock(),body.appendChild(t),t.querySelectorAll("a")[0].onclick=function(){t.parentNode.removeChild(t),util.pageScroll.unlock(),"function"==typeof i&&i()}},util.tipMes=function(e,i,t,o){var n=arguments.length;if(2>n)return void console.error("From YDUI's tipMes: Please set two or more parameters!!!");var r="error"==i?"tipmes-error-ico":"tipmes-success-ico",a=doc.createElement("div"),l="YDUI_TIPMES";a.id=l,a.innerHTML='<div>    <div class="mask-white"></div>    <div class="m-tipmes">        <div class="'+r+'"></div>        <p class="tipmes-content">'+(e||"")+"</p>    </div></div>";var c=doc.querySelector("#"+l);c&&a.parentNode.removeChild(a),util.pageScroll.lock(),body.appendChild(a),"function"==typeof t&&arguments.length>=3&&(o=t,t=2e3);var d=setTimeout(function(){clearTimeout(d),util.pageScroll.unlock(),a.parentNode.removeChild(a),"function"==typeof o&&o()},(~~t||2e3)+100)},util.showLoading=function(e){var i=doc.createElement("div"),t="YDUI_LOADING";i.id=t,i.innerHTML='    <div class="mask-white"></div>    <div class="m-loading">        <div class="ld-loading">            <div class="m-loading-leaf m-loading-leaf-0"></div>            <div class="m-loading-leaf m-loading-leaf-1"></div>            <div class="m-loading-leaf m-loading-leaf-2"></div>            <div class="m-loading-leaf m-loading-leaf-3"></div>            <div class="m-loading-leaf m-loading-leaf-4"></div>            <div class="m-loading-leaf m-loading-leaf-5"></div>            <div class="m-loading-leaf m-loading-leaf-6"></div>            <div class="m-loading-leaf m-loading-leaf-7"></div>            <div class="m-loading-leaf m-loading-leaf-8"></div>            <div class="m-loading-leaf m-loading-leaf-9"></div>            <div class="m-loading-leaf m-loading-leaf-10"></div>            <div class="m-loading-leaf m-loading-leaf-11"></div>        </div>        <p class="ld-toast-content">'+(e||"数据加载中")+"</p>    </div>";var o=doc.querySelector("#"+t);o&&i.parentNode.removeChild(i),util.pageScroll.lock(),body.appendChild(i)},util.hideLoading=function(){util.pageScroll.unlock();var e=doc.querySelector("#YDUI_LOADING");e.parentNode.removeChild(e)},util.pageScroll=function(){var e=function(e){e=e||window.event,e.preventDefault(),e.stopPropagation()},i=!1;return{lock:function(){i||(i=!0,doc.addEventListener("touchmove",e))},unlock:function(){i=!1,doc.removeEventListener("touchmove",e)}}}(),util.checkTime=function(e){return 10>e?"0"+e:e},util.timestampTotime=function(e,i){var t=this,o={};o.f=i%1e3,i=Math.floor(i/1e3),o.s=i%60,i=Math.floor(i/60),o.m=i%60,i=Math.floor(i/60),o.h=i%24,o.d=Math.floor(i/24);var n=function(e){return"$1"+t.checkTime(e)+"$2"};return e=e.replace(/\{([^{]*?)%d(.*?)\}/g,n(o.d)),e=e.replace(/\{([^{]*?)%h(.*?)\}/g,n(o.h)),e=e.replace(/\{([^{]*?)%m(.*?)\}/g,n(o.m)),e=e.replace(/\{([^{]*?)%s(.*?)\}/g,n(o.s)),e=e.replace(/\{([^{]*?)%f(.*?)\}/g,n(o.f))},util.countdown=function(e,i,t,o){var n=this,r=(new Date).getTime(),a=setInterval(function(){var t=i-(new Date).getTime()+r;t>0?o(n.timestampTotime(e,t)):(clearInterval(a),"function"==typeof o&&o(""))},t)},util.calc=function(arg1,arg2,op){var ra=1,rb=1,m;try{ra=arg1.toString().split(".")[1].length}catch(e){}try{rb=arg2.toString().split(".")[1].length}catch(e){}switch(m=Math.pow(10,Math.max(ra,rb)),op){case"+":case"-":arg1=Math.round(arg1*m),arg2=Math.round(arg2*m);break;case"*":ra=Math.pow(10,ra),rb=Math.pow(10,rb),m=ra*rb,arg1=Math.round(arg1*ra),arg2=Math.round(arg2*rb);break;case"/":arg1=Math.round(arg1*m),arg2=Math.round(arg2*m),m=1}try{var result=eval("(("+arg1+")"+op+"("+arg2+"))/"+m)}catch(e){}return result},util.getImgBase64=function(e,i){var t=this,o="",n=e.files[0];if(n){if(!/image\/\w+/.test(n.type))return void t.tipMes("请上传图片文件","error");var r=new FileReader;r.readAsDataURL(n),r.onload=function(){o=this.result,"function"==typeof i&&i(o)}}},util.getQueryString=function(e){var i=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),t=win.location.search.substr(1).match(i),o="";return null!=t&&(o=decodeURIComponent(t[2])),o},util.localStorage=function(){var e=win.localStorage;return{set:function(i,t){e.setItem(i,t)},get:function(i){return e.getItem(i)},remove:function(i){e.removeItem(i)}}}(),util.sessionStorage=function(){var e=win.sessionStorage;return{set:function(i,t){e.setItem(i,t)},get:function(i){return e.getItem(i)},remove:function(i){e.removeItem(i)}}}(),util.cookie=function(){return{get:function(e){var i=doc.cookie.match("(?:^|;)\\s*"+e+"=([^;]*)");return i&&i[1]?decodeURIComponent(i[1]):""},set:function(e,i,t,o,n,r){var a=String(encodeURIComponent(i)),l=t;"number"==typeof l&&(l=new Date,l.setTime(l.getTime()+60*t*60*1e3)),l instanceof Date&&(a+="; expires="+l.toUTCString()),!!o&&(a+="; domain="+o),!!n&&(a+="; path="+n),r&&(a+="; secure"),doc.cookie=e+"="+a}}}(),util.getUA=function(){return win.navigator&&win.navigator.userAgent||""},util.isMobile=function(){return!!getUA.match(/AppleWebKit.*Mobile.*/)||"ontouchstart"in doc.documentElement},util.isIOS=function(){return!!getUA.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},util.isWeixin=function(){return getUA.indexOf("MicroMessenger")>-1};var body=doc.querySelectorAll("body")[0],getUA=util.getUA();if(win.isMobile=util.isMobile(),win.isWeixin=util.isWeixin(),win.isIOS=util.isIOS(),"function"==typeof define)define(util);else{var ydui=win.YDUI=win.YDUI||{};ydui.util=util}}(window);