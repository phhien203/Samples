import{a as Q,b as W}from"./chunk-3JKSV4NS.js";import{a as q}from"./chunk-K4IVRACX.js";import{a as A,b as B,c as G,d as K}from"./chunk-5DGVHUGD.js";import"./chunk-XZCHICF6.js";import{l as Y}from"./chunk-ELRT2GQ7.js";import{q as z}from"./chunk-WA577VHR.js";import{$ as S,$a as N,D as b,E as k,F as w,M as x,T as D,Ta as h,Va as F,X as a,Za as O,_a as $,aa as j,ab as p,bb as m,db as R,ea as I,eb as V,gb as H,h as C,ha as L,i as u,ia as T,kb as J,o as s,oa as E,pa as P,qb as l,rb as _,x as y}from"./chunk-MHRY5PTC.js";import{h as M}from"./chunk-G5KKTNWD.js";var n=class{constructor(t){this.http=t,this.base="https://pokeapi.co/api/v2"}load(t){return M(this,null,function*(){if(yield A(),!G(t)){let e=yield fetch(t).then(o=>o.json()).catch(o=>{});yield B(t,e)}return K(t)})}init(){console.log("ps init"),this.load(this.base).then(t=>{console.log(t),u(Object.entries(t)).pipe(a(e=>console.log("url",e)),w(([e,o])=>this.getAllPagedData(o).pipe(b((i,v)=>i.concat(v.results),[]),a(i=>console.log("d",i)),s(i=>({name:e,baseUrl:o,data:i})))),k(),a(e=>console.log(e))).subscribe()})}getAllPagedData(t){return u(this.load(`${t}`)).pipe(x(e=>e.next?this.load(e.next):C))}},d=n;(()=>{n.\u0275fac=function(e){return new(e||n)(I(q))}})(),(()=>{n.\u0275prov=S({token:n,factory:n.\u0275fac,providedIn:"root"})})();function te(g,t){if(g&1&&(R(0),p(1,"h1"),l(2),m(),V()),g&2){let e=t.$implicit;h(2),_(e)}}var c=class{constructor(t){this.pa=t,this.fakePost$=y(1500).pipe(a(()=>console.log("done")),s(()=>"hello world"),D({refCount:!0,bufferSize:1}))}ngOnInit(){console.log("pokeMain")}},f=c;(()=>{c.\u0275fac=function(e){return new(e||c)(F(d))}})(),(()=>{c.\u0275cmp=L({type:c,selectors:[["app-pokemain"]],decls:6,vars:1,consts:[[3,"click"],["save",""],[4,"seLet","seLetObserve"]],template:function(e,o){if(e&1){let i=H();p(0,"p"),l(1,"pokemain works!"),m(),p(2,"button",0,1),J("click",function(){E(i);let U=$(3);return P(U.goSave=!0)}),l(4,"Save"),m(),O(5,te,3,1,"ng-container",2)}e&2&&(h(5),N("seLetObserve",o.fakePost$))},dependencies:[Q],encapsulation:2})})();var oe=[{path:"",component:f},{path:"**",redirectTo:""}],r=class{},Z=r;(()=>{r.\u0275fac=function(e){return new(e||r)}})(),(()=>{r.\u0275mod=T({type:r})})(),(()=>{r.\u0275inj=j({imports:[z,Y.forChild(oe),W]})})();export{Z as PokeApiModule};
