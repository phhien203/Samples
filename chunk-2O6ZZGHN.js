import{$ as A,I as h,O as w,T as $,U as b,X as y,e as c,n as u,o as d,q as p,x as m}from"./chunk-MHRY5PTC.js";import{a as o,b as f,h as a}from"./chunk-G5KKTNWD.js";var x=import("./chance-4YH6SDT5.js").then(t=>t).then(({default:t})=>new t);var n=class{constructor(){this.flush$=new c,this.updatedUsers$=new c,this.allUsers$=this.flush$.pipe(p(()=>this.updatedUsers$),b([]),$({bufferSize:1,refCount:!1})),this.admins$=this.allUsers$.pipe(d(s=>s.filter(e=>e.isAdmin))),this.users$=this.allUsers$.pipe(d(s=>s.filter(e=>!e.isAdmin))),this.flushCache()}addUsers(s){return a(this,null,function*(){let e=yield u(this.allUsers$),r=e.length,i=yield Promise.all(Array.from({length:s}).map((l,g)=>a(this,null,function*(){return o({id:r+g},yield v())})));this.updatedUsers$.next(e.concat(i))})}saveUser(s){return a(this,null,function*(){let e=yield this.allUsers$.pipe(h(1)).toPromise(),r=e.findIndex(i=>i.id===s.id);if(r>-1)Object.assign(e[r],s);else{let i;for(;!i||e.findIndex(l=>l.id===i)>-1;)i=Math.floor(Math.random()*Number.MAX_SAFE_INTEGER);e.unshift(f(o({},s),{id:i}))}this.updatedUsers$.next(e)})}deleteUser(s){return a(this,null,function*(){let e=(yield this.allUsers$.pipe(w()).toPromise()).filter(r=>r.id!==s.id);this.updatedUsers$.next(e)})}flushCache(){return a(this,null,function*(){let s=yield x;yield new Promise(e=>setTimeout(e)),this.flush$.next(),m(0,250).pipe(y(()=>this.addUsers(s.integer({min:100,max:400}))),h(20)).subscribe()})}},U=n;(()=>{n.\u0275fac=function(e){return new(e||n)}})(),(()=>{n.\u0275prov=A({token:n,factory:n.\u0275fac,providedIn:"root"})})();function v(){return a(this,null,function*(){let t=yield x;return{userState:t.integer({min:0,max:3}),username:t.name(),isAdmin:t.bool(),isActive:t.bool(),email:t.email()}})}export{U as a};
