"use strict";(self.webpackChunksamples=self.webpackChunksamples||[]).push([[255],{6255:(T,x,s)=>{s.r(x),s.d(x,{DynFormModule:()=>N});var d=s(1048),_=s(5166),v=s(4553),F=s(4121),c=s(7969),g=s(5696),y=s(1927),h=s(4970),p=s(1528),u=s(8168),m=s(7445),n=s(9724),Z=s(9725);let $=(()=>{class t{constructor(e){this.http=e,this.addresses$=this.http.get("assets/addresses.csv",{responseType:"text"}).pipe((0,c.U)(r=>r.split("\r").map(i=>i.split(","))),(0,c.U)(([r,...i])=>i.map(a=>a.reduce((l,C,M)=>(l.id=133*M,l[D(r[M])]=D(C),l),{}))))}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(Z.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function D(t){return null==t?void 0:t.replace(/^"(.*)"$/,"$1")}var f=s(9508);const A=["myForm"];function O(t,o){1&t&&(n.TgZ(0,"p"),n._uU(1,"Do not change"),n.qZA())}function w(t,o){if(1&t){const e=n.EpF();n.TgZ(0,"label"),n._uU(1),n.TgZ(2,"div")(3,"input",8),n.NdJ("ngModelChange",function(i){const l=n.CHM(e).$implicit;return n.oxw().ngIf.person[l.name]=i}),n.qZA(),n.YNc(4,O,2,0,"p",0),n.qZA()()}if(2&t){const e=o.$implicit,r=n.oxw().ngIf;n.xp6(1),n.AsE(" ",e.name," ",e.type," "),n.xp6(2),n.Q6J("name",e.name)("type",e.type)("ngModel",r.person[e.name]),n.xp6(1),n.Q6J("ngIf","id"===e.name)}}function b(t,o){if(1&t&&(n.TgZ(0,"th"),n._uU(1),n.qZA()),2&t){const e=o.$implicit;n.xp6(1),n.Oqu(e)}}function J(t,o){if(1&t&&(n.TgZ(0,"td"),n._uU(1),n.qZA()),2&t){const e=o.$implicit,r=n.oxw().$implicit;n.xp6(1),n.Oqu(r[e])}}function U(t,o){if(1&t){const e=n.EpF();n.TgZ(0,"tr",9),n.NdJ("click",function(){const a=n.CHM(e).$implicit;return n.oxw(2).openWith(a.id)}),n.YNc(1,J,2,1,"td",3),n.qZA()}if(2&t){const e=n.oxw().ngIf;n.xp6(1),n.Q6J("ngForOf",e.names)}}function I(t,o){if(1&t&&(n.ynx(0),n.TgZ(1,"dialog")(2,"form",1,2),n.YNc(4,w,5,6,"label",3),n.TgZ(5,"div",4)(6,"button",5),n._uU(7,"Submit"),n.qZA()()()(),n.TgZ(8,"div",6)(9,"table")(10,"thead"),n.YNc(11,b,2,1,"th",3),n.qZA(),n.YNc(12,U,2,1,"tr",7),n.qZA()(),n.BQk()),2&t){const e=o.ngIf;n.xp6(4),n.Q6J("ngForOf",e.fields),n.xp6(7),n.Q6J("ngForOf",e.names),n.xp6(1),n.Q6J("ngForOf",e.addresses)}}new Date;const Q=t=>{const o=(t.constructor.name||"unknown").toLowerCase();return console.log(o),null==t?"hidden":"string"===o?"text":o},S=[{path:"",component:(()=>{class t{constructor(e){this.adr=e,this.person$=new F.X({}),this.fieldData$=this.person$.pipe((0,c.U)(r=>Object.entries(r).map(([i,a])=>({name:i,value:a,type:Q(a)}))),(0,c.U)(r=>r.filter(i=>"Array"!==i.type))),this.addresses$=this.adr.addresses$,this.vm$=(0,g.a)({person:this.person$,fields:this.fieldData$,addresses:this.addresses$}).pipe((0,c.U)(({person:r,fields:i,addresses:a})=>({person:r,fields:i,addresses:a,names:Object.keys(a[0])})))}ngAfterViewInit(){this.formList.changes.pipe((0,y.O)(void 0),(0,c.U)(()=>this.formList.first),(0,h.h)(e=>void 0!==e),(0,p.w)(e=>e.valueChanges),(0,u.b)(e=>console.log("form value changed",e))).subscribe()}openWith(e){var r=this;return(0,v.Z)(function*(){if(e){const i=document.querySelector("dialog"),l=(yield(0,m.z)(r.addresses$)).find(C=>C.id===e);r.person$.next(l),i.showModal()}})()}}return t.\u0275fac=function(e){return new(e||t)(n.Y36($))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-dyn-form"]],viewQuery:function(e,r){if(1&e&&n.Gf(A,5),2&e){let i;n.iGM(i=n.CRH())&&(r.formList=i)}},decls:4,vars:3,consts:[[4,"ngIf"],["method","dialog"],["myForm","ngForm"],[4,"ngFor","ngForOf"],[1,"labelRow"],["type","submit"],[1,"tableHolder"],[3,"click",4,"ngFor","ngForOf"],[3,"name","type","ngModel","ngModelChange"],[3,"click"]],template:function(e,r){1&e&&(n.TgZ(0,"h1"),n._uU(1,"Dynamic form sample"),n.qZA(),n.YNc(2,I,13,3,"ng-container",0),n.ALo(3,"async")),2&e&&(n.xp6(2),n.Q6J("ngIf",n.lcZ(3,1,r.vm$)))},directives:[d.O5,f._Y,f.JL,f.F,d.sg,f.Fj,f.JJ,f.On],pipes:[d.Ov],styles:["dialog[_ngcontent-%COMP%]::backdrop {\n    background: rgba(30, 20, 35, 0.45);\n  }\n\n\n  .tableHolder[_ngcontent-%COMP%] {\n    height: 80vh;\n    overflow: auto;\n    width: 100rem;\n    border-collapse: collapse;\n  }\n\n  tr[_ngcontent-%COMP%]:nth-child(even) {\n    background-color: rgb(42, 41, 41);\n  }\n\n  form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  label[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 7rem 1fr;\n    align-items: center;\n    gap:.4rem;\n  }\n  input[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n    width: 20rem;\n  }"]}),t})()}];let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[_.Bz.forChild(S)],_.Bz]}),t})(),N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[d.ez,f.u5,L]]}),t})()},4553:(T,x,s)=>{function d(v,F,c,g,y,h,p){try{var u=v[h](p),m=u.value}catch(n){return void c(n)}u.done?F(m):Promise.resolve(m).then(g,y)}function _(v){return function(){var F=this,c=arguments;return new Promise(function(g,y){var h=v.apply(F,c);function p(m){d(h,g,y,p,u,"next",m)}function u(m){d(h,g,y,p,u,"throw",m)}p(void 0)})}}s.d(x,{Z:()=>_})}}]);