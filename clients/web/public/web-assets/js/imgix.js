(function(){function t(e,i,r){function s(a,u){if(!i[a]){if(!e[a]){var o="function"==typeof require&&require;if(!u&&o)return o(a,!0);if(n)return n(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var f=i[a]={exports:{}};e[a][0].call(f.exports,function(t){var i=e[a][1][t];return s(i||t)},f,f.exports,t,e,i,r)}return i[a].exports}for(var n="function"==typeof require&&require,a=0;a<r.length;a++)s(r[a]);return s}return t})()({1:[function(t,e,i){var r=t("./util.js"),s=t("./targetWidths.js");var n=function(){function t(t,e){this.el=t;this.settings=e||{};if(!this.el){throw new Error("ImgixTag must be passed a DOM element.")}if(this.el.hasAttribute("ix-initialized")&&!this.settings.force){return}this.ixPathVal=t.getAttribute(this.settings.pathInputAttribute);this.ixParamsVal=t.getAttribute(this.settings.paramsInputAttribute);this.ixSrcVal=t.getAttribute(this.settings.srcInputAttribute);this.ixHostVal=t.getAttribute(this.settings.hostInputAttribute)||this.settings.host;if(this.ixPathVal&&!this.ixHostVal){throw new Error("You must set a value for `imgix.config.host` or specify an `ix-host` attribute to use `ix-path` and `ix-params`.")}this.baseParams=this._extractBaseParams();this.baseUrl=this._buildBaseUrl();this.baseUrlWithoutQuery=this.baseUrl.split("?")[0];if(r.isString(this.settings.sizesAttribute)){this.el.setAttribute(this.settings.sizesAttribute,this.sizes())}if(r.isString(this.settings.srcsetAttribute)){this.el.setAttribute(this.settings.srcsetAttribute,this.srcset())}if(r.isString(this.settings.srcAttribute)&&this.el.nodeName=="IMG"){this.el.setAttribute(this.settings.srcAttribute,this.src())}this.el.setAttribute("ix-initialized","ix-initialized")}t.prototype._extractBaseParams=function(){var t={};if(this.settings.defaultParams&&typeof this.settings.defaultParams==="object"&&this.settings.defaultParams!==null){t=Object.assign({},this.settings.defaultParams)}if(this.ixPathVal){t=Object.assign({},t,JSON.parse(this.ixParamsVal)||{});for(var e in t){if(e.substr(-2)==="64"){t[e]=r.encode64(t[e])}}}else{var i=this.ixSrcVal.lastIndexOf("?");if(i>-1){var s=this.ixSrcVal.substr(i+1),n=s.split("&");for(var a=0,u;a<n.length;a++){u=n[a].split("=");t[u[0]]=u[1]}}}if(this.settings.includeLibraryParam){t.ixlib="imgixjs-"+imgix.VERSION}return t};t.prototype._buildBaseUrl=function(){if(this.ixSrcVal){return this.ixSrcVal}var t=this.ixPathVal,e=this.settings.useHttps?"https":"http",i=e+"://"+this.ixHostVal,r=this.ixHostVal.substr(-1)==="/",s=t[0]==="/";if(r&&s){i+=t.substr(1)}else if(!r&&!s){i+="/"+t}else{i+=t}i+="?";var n=[],a;for(var u in this.baseParams){a=this.baseParams[u];if(a==null){continue}n.push(encodeURIComponent(u)+"="+encodeURIComponent(a))}i+=n.join("&");return i};t.prototype._buildSrcsetPair=function(t){var e=r.shallowClone(this.baseParams);e.w=t;if(this.baseParams.w!=null&&this.baseParams.h!=null){e.h=Math.round(t*(this.baseParams.h/this.baseParams.w))}var i=this.baseUrlWithoutQuery+"?",s,n=[];for(var a in e){s=e[a];n.push(a+"="+s)}i+=n.join("&");return i+" "+t+"w"};t.prototype.src=function(){return this.baseUrl};t.prototype.srcset=function(){var t=[];for(var e=0;e<s.length;e++){t.push(this._buildSrcsetPair(s[e]))}return t.join(", ")};t.prototype.sizes=function(){var t=this.el.getAttribute("sizes");if(t){return t}else{return"100vw"}};return t}();e.exports=n},{"./targetWidths.js":4,"./util.js":5}],2:[function(t,e,i){e.exports={host:null,useHttps:true,includeLibraryParam:true,defaultParams:{},srcAttribute:"src",srcsetAttribute:"srcset",sizesAttribute:"sizes",srcInputAttribute:"ix-src",pathInputAttribute:"ix-path",paramsInputAttribute:"ix-params",hostInputAttribute:"ix-host"}},{}],3:[function(t,e,i){(function(e){var i=t("./ImgixTag.js"),r=t("./util.js"),s=t("./defaultConfig");var n="3.4.0";function a(t){var e=document.querySelector('meta[property="ix:'+t+'"]'),i;if(!e){return}i=e.getAttribute("content");if(i==="true"){return true}else if(i==="false"){return false}else if(i===""||i==="null"){return null}else{return i}}e.imgix={init:function(t){var e=r.shallowClone(this.config);r.extend(e,t||{});var s=["img["+e.srcInputAttribute+"]","source["+e.srcInputAttribute+"]","img["+e.pathInputAttribute+"]","source["+e.pathInputAttribute+"]"].join(",");var n=document.querySelectorAll(s);for(var a=0,u;a<n.length;a++){new i(n[a],e)}},config:s,VERSION:n};r.domReady(function(){r.objectEach(s,function(t,i){var r=a(i);if(typeof r!=="undefined"){const n=typeof s[i];if(n==="boolean"){e.imgix.config[i]=!!r}else if(n==="object"&&s[i]!=null){e.imgix.config[i]=JSON.parse(r)||{}}else{e.imgix.config[i]=r}}});if(a("autoInit")!==false){e.imgix.init()}})}).call(this,typeof global!=="undefined"?global:typeof self!=="undefined"?self:typeof window!=="undefined"?window:{})},{"./ImgixTag.js":1,"./defaultConfig":2,"./util.js":5}],4:[function(t,e,i){function r(){var t=[];var e=100;var i=8;var r=8192;function s(t){return 2*Math.round(t/2)}while(e<=r){t.push(s(e));e*=1+i/100*2}return t}e.exports=r()},{}],5:[function(t,e,i){e.exports={compact:function(t){var e=[];for(var i=0;i<t.length;i++){t[i]&&e.push(t[i])}return e},shallowClone:function(t){var e={};for(var i in t){e[i]=t[i]}return e},extend:function(t,e){for(var i in e){t[i]=e[i]}return t},uniq:function(t){var e={},i=[],r;for(r=0;r<t.length;r++){if(!e[t[r]]){e[t[r]]=true;i.push(t[r])}}return i},objectEach:function(t,e){for(var i in t){if(t.hasOwnProperty(i)){e(t[i],i)}}},isString:function(t){return typeof t==="string"},encode64:function(t){var e=unescape(encodeURIComponent(t)),i=btoa(e),r=i.replace(/\+/g,"-");r=r.replace(/\//g,"_").replace(/\//g,"_").replace(/\=+$/,"");return r},decode64:function(t){var e=t.replace(/-/g,"+").replace(/_/g,"/"),i=atob(e),r=decodeURIComponent(escape(i));return r},domReady:function(t){if(document.readyState==="complete"){setTimeout(t,0)}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",t,false)}else{document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){t()}})}}}},{}]},{},[3]);