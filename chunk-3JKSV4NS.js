import{Jb as f,Kb as h,Va as s,X as o,aa as c,gc as p,ia as d,ja as u,l as r}from"./chunk-MHRY5PTC.js";var v=(()=>{class t{constructor(e,i,a){this.templateRef=e,this.viewContainer=i,this.cdr=a,this.context={$implicit:void 0,seLet:void 0},this.assign=this.assign.bind(this)}set seLet(e){this.assign(e)}set seLetObserve(e){this.assign(e)}set seLetOn(e){this.assign(e)}assign(e){this.sub&&this.sub.unsubscribe(),r(e)?this.sub=e.pipe(o(()=>this.cdr.markForCheck())).subscribe(i=>{this.context.$implicit=i,this.context.seLet=i}):(this.context.$implicit=e,this.context.seLet=e)}ngOnInit(){this.viewContainer.createEmbeddedView(this.templateRef,this.context)}ngOnDestroy(){this.sub&&this.sub.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s(f),s(h),s(p))},t.\u0275dir=u({type:t,selectors:[["","seLet",""]],inputs:{seLet:"seLet",seLetObserve:"seLetObserve",seLetOn:"seLetOn"}}),t})(),g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d({type:t}),t.\u0275inj=c({}),t})();export{v as a,g as b};
