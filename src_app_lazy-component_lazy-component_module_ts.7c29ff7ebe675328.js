"use strict";(self.webpackChunksamples=self.webpackChunksamples||[]).push([["src_app_lazy-component_lazy-component_module_ts"],{5694:(C,a,o)=>{o.r(a),o.d(a,{LazyComponentModule:()=>r});var l=o(1048),c=o(3290),y=o(4553),t=o(9724);const d=[{path:"",component:(()=>{class n{constructor(){this.steps=[{file:()=>o.e("src_app_lazy-component_sample-one_sample-one_component_ts").then(o.bind(o,6146))},{file:()=>o.e("src_app_lazy-component_sample-two_sample-two_component_ts").then(o.bind(o,6729))},{file:()=>o.e("src_app_lazy-component_sample-three_sample-three_component_ts").then(o.bind(o,1791))}],this.currentStep=2}update(e){var s=this;return(0,y.Z)(function*(){const u=s.steps[e],{default:m}=yield u.file();s.component=m})()}ngOnInit(){this.update(this.currentStep)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-lazy-component"]],decls:4,vars:2,consts:[["type","range",3,"max","change"],[3,"ngComponentOutlet"]],template:function(e,s){1&e&&(t.TgZ(0,"p"),t._uU(1,"lazy-component works!"),t.qZA(),t.TgZ(2,"input",0),t.NdJ("change",function(m){return s.update(m.target.value)}),t.qZA(),t.GkF(3,1)),2&e&&(t.xp6(2),t.Q6J("max",s.steps.length-1),t.xp6(1),t.Q6J("ngComponentOutlet",s.component))},directives:[l.$G],encapsulation:2}),n})()}];let i=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(d)],c.Bz]}),n})(),r=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,i]]}),n})()}}]);