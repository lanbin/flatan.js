(function(t,r){typeof exports=="object"&&typeof module<"u"?r(exports,require("lodash-es"),require("@vueuse/shared")):typeof define=="function"&&define.amd?define(["exports","lodash-es","@vueuse/shared"],r):(t=typeof globalThis<"u"?globalThis:t||self,r(t.FlatanService={},t.lodashEs,t.share))})(this,function(t,r,j){"use strict";const p=/^http(s?):\/\/.*?\//,h=/^http(s?)/,m=/\((.+?)\)/g,d=j.createGlobalState(()=>{const o={},n={};return{services:o,urls:n,install:i=>{i.apis.forEach(S=>{var $,b;let[l,v="get",R=""]=S.split("|");const u=l.match(m);let a=l.replace(p,"").replace(m,"").split("/").reduce((e,c)=>(c.indexOf("-")>-1?e.concat(c.split("-").map(s=>r.upperFirst(s))):e.push(r.upperFirst(c)),e),[]).join("");($=l==null?void 0:l.match(h))!=null&&$[0]&&(a=r.upperFirst((b=l.match(h))==null?void 0:b[0])+a);const F=R||a;u||(n[F]=l),o[F]=(e,c)=>{let[s]=S.split("|");u&&u.forEach(y=>{const P=y.replace(/^\(|\)$/g,"");s=s.replace(y,e==null?void 0:e[P]),e==null||delete e[P]}),i.appRoot&&!s.match(p)&&(s=`${i.appRoot}${s}`);let f={url:s,method:v,...c};return i.isMini?i.$http({data:e,...f}):i.$http(v==="get"?{params:e,...f}:{data:e,...f})}}),i.debug&&(console.log(o),console.log(n))}}})(),M={install:(o,n)=>{const{$http:g}=n;if(!g)return new Error("Missing $http field configuration. Please specify the object responsible for sending the request, such as axios");d.install(n)}};t.FlatanServiceStore=d,t.default=M,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
