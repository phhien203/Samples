"use strict";(self.webpackChunksamples=self.webpackChunksamples||[]).push([[593],{5398:(x,m,c)=>{c.r(m),c.d(m,{LocalStateModule:()=>O});var u=c(1048),l=c(5166),t=c(9724);let d=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-local-state"]],decls:1,vars:0,template:function(o,a){1&o&&t._UZ(0,"router-outlet")},directives:[l.lC],encapsulation:2}),n})();var h=c(4762),v=c(4121),g=c(4581),S=c(5696),f=c(2993),r=c(7969),C=c(4970),p=c(8168),b=c(1528);const L=["b"];function y(n,e){if(1&n){const o=t.EpF();t.ynx(0),t.TgZ(1,"button",1,2),t.NdJ("click",function(){return t.CHM(o),t.oxw().updateCounterWith(-1)}),t._uU(3,"-1"),t.qZA(),t.TgZ(4,"span"),t._uU(5),t.qZA(),t.TgZ(6,"button",1,2),t.NdJ("click",function(){return t.CHM(o),t.oxw().updateCounterWith(1)}),t._uU(8,"+1"),t.qZA(),t.BQk()}if(2&n){const o=e.ngIf;t.xp6(5),t.Oqu(o.count)}}class s{constructor(e){this.route=e,this.localState$=new v.X({count:0}),this.id$=this.route.params.pipe((0,f.j)("id"),(0,r.U)(o=>+o)),this.clicks$=this.localState$.pipe((0,f.j)("buttons"),(0,C.h)(o=>o instanceof t.n_E),(0,r.U)(o=>o.toArray().map(a=>a.nativeElement)),(0,p.b)(o=>o.forEach(a=>console.log(a))),(0,b.w)(o=>(0,g.R)(o,"click")),(0,p.b)(o=>console.log({cl:o}))).subscribe(console.log),this.vm$=(0,S.a)({id:this.id$,state:this.localState$}).pipe((0,r.U)(o=>({id:o.id,count:o.state.count||0})),(0,p.b)(console.log))}ngOnInit(){}updateCounterWith(e){this.localState$.next(Object.assign(Object.assign({},this.localState$.value),{count:this.localState$.value.count+e}))}}s.\u0275fac=function(e){return new(e||s)(t.Y36(l.gz))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-ls-home"]],viewQuery:function(e,o){if(1&e&&t.Gf(L,5,t.SBq),2&e){let a;t.iGM(a=t.CRH())&&(o.buttons=a)}},decls:4,vars:3,consts:[[4,"ngIf"],[3,"click"],["b",""]],template:function(e,o){1&e&&(t.TgZ(0,"h2"),t._uU(1," test some state"),t.qZA(),t.YNc(2,y,9,1,"ng-container",0),t.ALo(3,"async")),2&e&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,o.vm$)))},directives:[u.O5],pipes:[u.Ov],encapsulation:2}),(0,h.gn)([function $(n){return(e,o)=>{Object.defineProperty(e,o,{set:function(a){const i=this[n];a&&i.next(Object.assign(Object.assign({},i.value),{[o]:a}))},get:function(){throw new Error(`Don't read the "${o}" directly, instead take it from the "${n}" behaviourSubject`)},configurable:!1,enumerable:!0})}}("localState$")],s.prototype,"buttons",void 0),Symbol("subjectProp");const j=[{path:"",component:d,children:[{path:":id",component:s},{path:"",redirectTo:"./1",pathMatch:"full"}]}];let M=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.Bz.forChild(j)],l.Bz]}),n})(),O=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.ez,M]]}),n})()}}]);