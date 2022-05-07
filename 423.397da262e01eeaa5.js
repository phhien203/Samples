"use strict";(self.webpackChunksamples=self.webpackChunksamples||[]).push([[423],{2844:(x,f,l)=>{l.d(f,{P:()=>v,z:()=>p});var h=l(4813);class m extends h.w0{constructor(e,n){super()}schedule(e,n=0){return this}}const a={setInterval(u,e,...n){const{delegate:r}=a;return(null==r?void 0:r.setInterval)?r.setInterval(u,e,...n):setInterval(u,e,...n)},clearInterval(u){const{delegate:e}=a;return((null==e?void 0:e.clearInterval)||clearInterval)(u)},delegate:void 0};var y=l(8308),C=l(2069);class d{constructor(e,n=d.now){this.schedulerActionCtor=e,this.now=n}schedule(e,n=0,r){return new this.schedulerActionCtor(this,e).schedule(r,n)}}d.now=C.l.now;const p=new class k extends d{constructor(e,n=d.now){super(e,n),this.actions=[],this._active=!1,this._scheduled=void 0}flush(e){const{actions:n}=this;if(this._active)return void n.push(e);let r;this._active=!0;do{if(r=e.execute(e.state,e.delay))break}while(e=n.shift());if(this._active=!1,r){for(;e=n.shift();)e.unsubscribe();throw r}}}(class t extends m{constructor(e,n){super(e,n),this.scheduler=e,this.work=n,this.pending=!1}schedule(e,n=0){if(this.closed)return this;this.state=e;const r=this.id,s=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(s,r,n)),this.pending=!0,this.delay=n,this.id=this.id||this.requestAsyncId(s,this.id,n),this}requestAsyncId(e,n,r=0){return a.setInterval(e.flush.bind(e,this),r)}recycleAsyncId(e,n,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return n;a.clearInterval(n)}execute(e,n){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(e,n);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,n){let s,r=!1;try{this.work(e)}catch(c){r=!0,s=c||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),s}unsubscribe(){if(!this.closed){const{id:e,scheduler:n}=this,{actions:r}=n;this.work=this.state=this.scheduler=null,this.pending=!1,(0,y.P)(r,this),null!=e&&(this.id=this.recycleAsyncId(n,e,null)),this.delay=null,super.unsubscribe()}}}),v=p},7220:(x,f,l)=>{l.r(f),l.d(f,{SvgClockModule:()=>r});var h=l(1048),m=l(5166),a=l(1995),y=l(7969),t=l(9724);function C(s,c){if(1&s&&(t.O4$(),t._UZ(0,"circle",5)),2&s){const o=c.index,i=t.oxw(2);t.uIk("r",i.radiusFromPosition(o))}}function d(s,c){if(1&s&&(t.O4$(),t._UZ(0,"circle")),2&s){const o=c.$implicit,i=c.index,g=t.oxw().ngIf,w=t.oxw();t.uIk("r",w.radiusFromPosition(i))("stroke",o)("stroke-dasharray",w.dashArray(g[i],i))}}function k(s,c){if(1&s&&(t.O4$(),t.TgZ(0,"svg",1),t.YNc(1,C,1,1,"circle",2),t.YNc(2,d,1,3,"circle",3),t.TgZ(3,"text",4),t._uU(4),t.qZA()()),2&s){const o=c.ngIf,i=t.oxw();t.xp6(1),t.Q6J("ngForOf",i.strokeColors),t.xp6(1),t.Q6J("ngForOf",i.strokeColors),t.xp6(2),t.lnq("",i.zerod(o[0]),":",i.zerod(o[1]),":",i.zerod(o[2]),"")}}const p=2*Math.PI,v=s=>p*s,e=[{path:"",component:(()=>{class s{constructor(){this.strokeColors=["rgb(132, 35, 156)","rgb(240, 26, 115)","rgb(70, 166, 179)"],this.time$=(0,a.H)(0,500).pipe((0,y.U)(o=>{const i=new Date;return[i.getHours(),i.getMinutes(),i.getSeconds()]}))}radiusFromPosition(o){return 44-6*o}minuteToAngle(o,i){return o/60*v(i)}dashArray(o,i){const g=this.radiusFromPosition(i);return`${0===i?(S=o,S%12/12*v(g)):this.minuteToAngle(o,g)} ${v(g)}`;var S}zerod(o){return o<10?`0${o}`:o}}return s.\u0275fac=function(o){return new(o||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-svg-clock"]],decls:4,vars:3,consts:[["viewBox","-50 -50 100 100",4,"ngIf"],["viewBox","-50 -50 100 100"],["stroke","lightgray","style","stroke-width:2;",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],["dominant-baseline","central","text-anchor","middle"],["stroke","lightgray",2,"stroke-width","2"]],template:function(o,i){1&o&&(t.TgZ(0,"h1"),t._uU(1,"SVG Clock sample"),t.qZA(),t.YNc(2,k,5,5,"svg",0),t.ALo(3,"async")),2&o&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,i.time$)))},directives:[h.O5,h.sg],pipes:[h.Ov],styles:["[_nghost-%COMP%] {\n    display: block;\n  }\n\n  svg[_ngcontent-%COMP%] {\n    \n    transform: rotate(-0.25turn);\n    max-height: 90vh;\n    ;\n  }\n\n  circle[_ngcontent-%COMP%] {\n    fill: none;\n    stroke-width: 6;\n  }\n\n  text[_ngcontent-%COMP%] {\n    transform: rotate(0.25turn);\n    \n    font-size: .5rem;\n    font-weight: bold;\n    fill: lightgray;\n  }"]}),s})()}];let n=(()=>{class s{}return s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[m.Bz.forChild(e)],m.Bz]}),s})(),r=(()=>{class s{}return s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[h.ez,n]]}),s})()}}]);