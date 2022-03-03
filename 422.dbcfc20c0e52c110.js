"use strict";(self.webpackChunksamples=self.webpackChunksamples||[]).push([[422],{2844:(A,h,o)=>{o.d(h,{P:()=>v,z:()=>g});var u=o(4813);class f extends u.w0{constructor(e,s){super()}schedule(e,s=0){return this}}const m={setInterval(...a){const{delegate:e}=m;return((null==e?void 0:e.setInterval)||setInterval)(...a)},clearInterval(a){const{delegate:e}=m;return((null==e?void 0:e.clearInterval)||clearInterval)(a)},delegate:void 0};var p=o(8308),n=o(2069);class d{constructor(e,s=d.now){this.schedulerActionCtor=e,this.now=s}schedule(e,s=0,r){return new this.schedulerActionCtor(this,e).schedule(r,s)}}d.now=n.l.now;const g=new class w extends d{constructor(e,s=d.now){super(e,s),this.actions=[],this._active=!1,this._scheduled=void 0}flush(e){const{actions:s}=this;if(this._active)return void s.push(e);let r;this._active=!0;do{if(r=e.execute(e.state,e.delay))break}while(e=s.shift());if(this._active=!1,r){for(;e=s.shift();)e.unsubscribe();throw r}}}(class y extends f{constructor(e,s){super(e,s),this.scheduler=e,this.work=s,this.pending=!1}schedule(e,s=0){if(this.closed)return this;this.state=e;const r=this.id,t=this.scheduler;return null!=r&&(this.id=this.recycleAsyncId(t,r,s)),this.pending=!0,this.delay=s,this.id=this.id||this.requestAsyncId(t,this.id,s),this}requestAsyncId(e,s,r=0){return m.setInterval(e.flush.bind(e,this),r)}recycleAsyncId(e,s,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return s;m.clearInterval(s)}execute(e,s){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(e,s);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(e,s){let t,r=!1;try{this.work(e)}catch(c){r=!0,t=c||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),t}unsubscribe(){if(!this.closed){const{id:e,scheduler:s}=this,{actions:r}=s;this.work=this.state=this.scheduler=null,this.pending=!1,(0,p.P)(r,this),null!=e&&(this.id=this.recycleAsyncId(s,e,null)),this.delay=null,super.unsubscribe()}}}),v=g},2069:(A,h,o)=>{o.d(h,{l:()=>u});const u={now:()=>(u.delegate||Date).now(),delegate:void 0}},3546:(A,h,o)=>{o.r(h),o.d(h,{SvgTimerModule:()=>r});var u=o(1048),f=o(3290),m=o(1995),p=o(5598),y=o(7969),n=o(9724);function d(t,c){if(1&t&&(n.O4$(),n._UZ(0,"circle")),2&t){const i=c.$implicit,l=c.index,T=n.oxw().ngIf,x=n.oxw();n.uIk("r",x.radiusFromPosition(l))("stroke",i)("stroke-dasharray",x.dashArray(T,x.radiusFromPosition(l)))}}function w(t,c){if(1&t&&(n.O4$(),n.TgZ(0,"svg",1),n.YNc(1,d,1,3,"circle",2),n.TgZ(2,"text",3),n._uU(3),n.qZA()()),2&t){const i=c.ngIf,l=n.oxw();n.xp6(1),n.Q6J("ngForOf",l.strokeColors),n.xp6(2),n.Oqu(60-i)}}const g=2*Math.PI,v=t=>g*t,e=[{path:"",component:(()=>{class t{constructor(){this.strokeColors=["rgb(132, 35, 156)","rgb(240, 26, 115)","rgb(70, 166, 179)","#3dd656"],this.timer$=(0,m.H)(0,250).pipe((0,p.q)(60),(0,y.U)(i=>i+1))}radiusFromPosition(i){return 44-6*i}minuteToAngle(i,l){return i/60*v(l)}dashArray(i,l){return`${this.minuteToAngle(i,l)} ${v(l)}`}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-svg-timer"]],decls:4,vars:3,consts:[["viewBox","-50 -50 100 100",4,"ngIf"],["viewBox","-50 -50 100 100"],[4,"ngFor","ngForOf"],["dominant-baseline","central","text-anchor","middle"]],template:function(i,l){1&i&&(n.TgZ(0,"h1"),n._uU(1,"SVG timer sample"),n.qZA(),n.YNc(2,w,4,2,"svg",0),n.ALo(3,"async")),2&i&&(n.xp6(2),n.Q6J("ngIf",n.lcZ(3,1,l.timer$)))},directives:[u.O5,u.sg],pipes:[u.Ov],styles:["[_nghost-%COMP%] {\n    display: block;\n  }\n\n  svg[_ngcontent-%COMP%] {\n    \n    transform: rotate(-0.25turn);\n    max-height: 90vh;\n    ;\n  }\n\n  circle[_ngcontent-%COMP%] {\n    fill: none;\n    stroke-width: 6;\n  }\n\n  text[_ngcontent-%COMP%] {\n    transform: rotate(0.25turn);\n    \n    font-size: 2em;\n    font-weight: bold;\n    fill: #fff;\n  }\n\n  \n  circle[_ngcontent-%COMP%]:nth-child(2) {\n    transform: scaleY(-1);\n  }\n\n  circle[_ngcontent-%COMP%]:nth-child(3) {\n    transform: scaleX(-1);\n  }\n\n  circle[_ngcontent-%COMP%]:nth-child(4) {\n    transform: rotate(-0.25turn);\n  }"]}),t})()}];let s=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[f.Bz.forChild(e)],f.Bz]}),t})(),r=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[u.ez,s]]}),t})()}}]);