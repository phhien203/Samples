"use strict";(self.webpackChunksamples=self.webpackChunksamples||[]).push([[418],{3418:(j,d,e)=>{e.r(d),e.d(d,{PokeApiModule:()=>O});var f=e(1048),c=e(8168),v=e(7969),h=e(6466),g=e(1995),o=e(9724),P=e(4553),p=e(9226),m=e(985),A=e(9018),y=e(4551),M=e(6252),k=e(2474),C=e(1233),T=e(9725);let S=(()=>{class n{constructor(t){this.http=t,this.base="https://pokeapi.co/api/v2"}load(t){return(0,P.Z)(function*(){if(yield(0,p.QS)(),!(0,p.ss)(t)){const s=yield fetch(t).then(i=>i.json()).catch(i=>{});yield(0,p.se)(t,s)}return(0,p.TK)(t)})()}init(){console.log("ps init"),this.load(this.base).then(t=>{console.log(t),(0,m.D)(Object.entries(t)).pipe((0,c.b)(s=>console.log("url",s)),(0,y.b)(([s,i])=>this.getAllPagedData(i).pipe((0,M.u)((l,r)=>l.concat(r.results),[]),(0,c.b)(l=>console.log("d",l)),(0,v.U)(l=>({name:s,baseUrl:i,data:l})))),(0,k.q)(),(0,c.b)(s=>console.log(s))).subscribe()})}getAllPagedData(t){return(0,m.D)(this.load(`${t}`)).pipe((0,C.j)(s=>s.next?this.load(s.next):A.E))}}return n.\u0275fac=function(t){return new(t||n)(o.LFG(T.eN))},n.\u0275prov=o.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=e(4395);function Z(n,a){if(1&n&&(o.ynx(0),o.TgZ(1,"h1"),o._uU(2),o.qZA(),o.BQk()),2&n){const t=a.$implicit;o.xp6(2),o.Oqu(t)}}let x=(()=>{class n{constructor(t){this.pa=t,this.fakePost$=(0,g.H)(1500).pipe((0,c.b)(()=>console.log("done")),(0,v.U)(()=>"hello world"),(0,h.d)({refCount:!0,bufferSize:1}))}ngOnInit(){console.log("pokeMain")}}return n.\u0275fac=function(t){return new(t||n)(o.Y36(S))},n.\u0275cmp=o.Xpm({type:n,selectors:[["app-pokemain"]],decls:6,vars:1,consts:[[3,"click"],["save",""],[4,"seLet","seLetObserve"]],template:function(t,s){if(1&t){const i=o.EpF();o.TgZ(0,"p"),o._uU(1,"pokemain works!"),o.qZA(),o.TgZ(2,"button",0,1),o.NdJ("click",function(){return o.CHM(i),o.MAs(3).goSave=!0}),o._uU(4,"Save"),o.qZA(),o.YNc(5,Z,3,1,"ng-container",2)}2&t&&(o.xp6(5),o.Q6J("seLetObserve",s.fakePost$))},directives:[u.g],encapsulation:2}),n})();var D=e(5166);const F=[{path:"",component:x},{path:"**",redirectTo:""}];let O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[[f.ez,D.Bz.forChild(F),u.f]]}),n})()}}]);