import{a as k,b as A,d as N}from"./chunk-N5NT5A7Z.js";import{l as I}from"./chunk-ELRT2GQ7.js";import{l as $,n as O,p as S,q as b}from"./chunk-WA577VHR.js";import{$a as D,Eb as c,Fb as m,Ta as n,V as h,X as l,Xa as M,Za as v,aa as g,ab as s,bb as r,ha as y,ia as C,j as u,qb as p,rb as x,sb as F}from"./chunk-MHRY5PTC.js";import"./chunk-G5KKTNWD.js";function B(a,i){if(a&1&&(s(0,"li"),p(1),r()),a&2){let e=i.$implicit;n(1),x(e)}}var o=class extends k(A(N(class{}))){constructor(){super(),this.demo$=this.seOnInit$.pipe(h(()=>u([1,2,3,4])),l(i=>console.log("init Fired",i))),this.updateSomethingSub=this.seAfterContentChecked$.pipe(l(()=>console.log("content is checked"))).subscribe({complete(){console.log("seAfterContentChecked$ is completed,")}}),this.onDestroySub=this.seOnDestroy$.subscribe(()=>console.log("onDestroy fired."),()=>console.log("err"),()=>console.log("onDestroy completed"))}},d=o;(()=>{o.\u0275fac=function(e){return new(e||o)}})(),(()=>{o.\u0275cmp=y({type:o,selectors:[["app-mixins"]],features:[M],decls:8,vars:8,consts:[[4,"ngFor","ngForOf"]],template:function(e,f){e&1&&(s(0,"h1"),p(1,"Mixins rule"),r(),s(2,"ul"),v(3,B,2,1,"li",0),c(4,"async"),r(),p(5),c(6,"json"),c(7,"async")),e&2&&(n(3),D("ngForOf",m(4,2,f.demo$)),n(2),F(" ",m(6,4,m(7,6,f.demo$)),`
`))},dependencies:[$,O,S],encapsulation:2})})();var E=[{path:"",component:d}],t=class{},j=t;(()=>{t.\u0275fac=function(e){return new(e||t)}})(),(()=>{t.\u0275mod=C({type:t})})(),(()=>{t.\u0275inj=g({imports:[b,I.forChild(E)]})})();export{j as MixinsModule};
