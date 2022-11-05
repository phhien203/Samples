import{l as y}from"./chunk-ELRT2GQ7.js";import{q as x}from"./chunk-WA577VHR.js";import{Va as k,Zb as S,aa as f,cb as N,ha as T,ia as m}from"./chunk-MHRY5PTC.js";import"./chunk-G5KKTNWD.js";var d=class{constructor(i){this.zone=i}ngOnInit(){this.zone.runOutsideAngular(()=>{K(i());function i(){return document.querySelector(".canvas").getContext("2d")}})}},p=d;(()=>{d.\u0275fac=function(c){return new(c||d)(k(S))}})(),(()=>{d.\u0275cmp=T({type:d,selectors:[["app-analog-clock"]],decls:1,vars:0,consts:[["width","400","height","400",1,"canvas"]],template:function(c,I){c&1&&N(0,"canvas",0)},encapsulation:2})})();function K(h){function i(e,...t){let n=o=>o.length<e.length?(...r)=>n([...o,...r]):e(...o);return n(t)}let c=(...e)=>e.reduce((t,n)=>(...o)=>t(n(...o))),I=i((e,t)=>t.map(e)),V=i((e,t)=>t.reduce(e)),R=e=>(...t)=>t.reduce((n,o)=>n(o),e),X=e=>t=>e(t),Y=e=>e,$=e=>()=>e;function A(e,t,n){return e+t+n}let J=i(A);console.log(R(J)(1,2,3));let C=["#041010","#082121","#0c3131","#104141","#145252","#186262","#1d7272","#218383","#259393","#29a3a3","#2db4b4","#31c4c4","#3bcece","#4ed3d3","#5cd6d6","#6cdada","#7cdede","#8de2e2","#9de7e7","#adebeb","#beefef","#cef3f3","#def7f7","#effbfb"];function*P(){let e=0;for(;;)yield C[e],e+=1,e===C.length&&(e=0)}let _=P(),l=i(H)(h,[200,200]),u=c(D,b(60)),W=c(l(4,146),u),q=c(l(4,130),u),z=c(l(4,100),D,b(12)),L=i(Z)(h,[200,200],180);function w(e){O(e),window.requestAnimationFrame(()=>w(new Date))}function O(e){let t=e.getSeconds()+e.getMilliseconds()/1e3,n=e.getMinutes()+t/60,o=e.getHours()+n/60;o=o>12?o-12:o,E(h),B(),W(t),q(n),z(o)}function B(){let e=0,t=l(153);for(let n=1;n<61;n+=1)n%5===0?(e=15,L(u(n),""+n/5)):e=10,t(e,u(n))}function H(e,t,n,o,r){let M=[t[0]+r[0]*n,t[1]+r[1]*n],v=[t[0]+r[0]*(n+o),t[1]+r[1]*(n+o)];G(e,M,v)}function Z(e,t,n,o,r){let M=t[0]+o[0]*n,v=t[1]+o[1]*n;e.font="bold 18px Times",e.textAlign="center",e.textBaseline="middle",e.fillStyle="#fff",e.fillText(r,M,v)}function b(e){return function(t){let n=t*(360/e)-90;return n<0?n+360:n}}function D(e){let t=Math.PI/180*e;return[Math.cos(t),Math.sin(t)]}function E(e){e.save(),e.setTransform(1,0,0,1,0,0),e.clearRect(0,0,e.canvas.width,e.canvas.height),e.restore()}function ee(e,t,n){e.fillRect(t,n,1,1)}function G(e,t,n){e.beginPath(),e.strokeStyle="#ffffff",e.moveTo(t[0],t[1]),e.lineTo(n[0],n[1]),e.stroke()}w(new Date)}var U=[{path:"",component:p}],s=class{},g=s;(()=>{s.\u0275fac=function(c){return new(c||s)}})(),(()=>{s.\u0275mod=m({type:s})})(),(()=>{s.\u0275inj=f({imports:[y.forChild(U),y]})})();var a=class{},F=a;(()=>{a.\u0275fac=function(c){return new(c||a)}})(),(()=>{a.\u0275mod=m({type:a})})(),(()=>{a.\u0275inj=f({imports:[x,g]})})();export{F as AnalogClockModule};
