var Nn=Array.isArray,Zt=Array.prototype.indexOf,Pn=Array.from,bn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Wt=Object.getOwnPropertyDescriptors,Cn=Object.prototype,Fn=Array.prototype,zt=Object.getPrototypeOf;const qn=()=>{};function Ln(t){return t()}function Jt(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,yt=4,J=8,ut=16,A=32,j=64,G=128,O=256,K=512,d=1024,x=2048,C=4096,b=8192,F=16384,Qt=32768,wt=65536,Yn=1<<17,Xt=1<<19,Et=1<<20,vt=Symbol("$state"),Mn=Symbol("legacy props");function mt(t){return t===this.v}function tn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!tn(t,this.v)}function nn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function en(t){throw new Error("https://svelte.dev/e/effect_orphan")}function ln(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function jn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Un(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Hn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Bn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Q=!1;function Vn(){Q=!0}const Gn=1,Kn=2,$n=4,Zn=8,Wn=16,zn=1,Jn=2,an="[",on="[!",fn="]",gt={},Qn=Symbol();function at(t,n){var r={f:0,v:t,reactions:null,equals:mt,rv:0,wv:0};return r}function Xn(t){return _n(at(t))}function tr(t,n=!1){var e;const r=at(t);return n||(r.equals=Tt),Q&&_!==null&&_.l!==null&&((e=_.l).s??(e.s=[])).push(r),r}function _n(t){return a!==null&&a.f&w&&(m===null?An([t]):m.push(t)),t}function nr(t,n){return a!==null&&X()&&a.f&(w|ut)&&(m===null||!m.includes(t))&&un(),cn(t,n)}function cn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Ut(),At(t,x),X()&&f!==null&&f.f&d&&!(f.f&(A|j))&&(g===null?xn([t]):g.push(t))),n}function At(t,n){var r=t.reactions;if(r!==null)for(var e=X(),l=r.length,s=0;s<l;s++){var u=r[s],o=u.f;o&x||!e&&u===f||(T(u,n),o&(d|O)&&(o&w?At(u,C):nt(u)))}}function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let S=!1;function rr(t){S=t}let E;function q(t){if(t===null)throw xt(),gt;return E=t}function er(){return q(I(E))}function lr(t){if(S){if(I(E)!==null)throw xt(),gt;E=t}}function sr(t=1){if(S){for(var n=t,r=E;n--;)r=I(r);E=r}}function ur(){for(var t=0,n=E;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===an||r===on)&&(t+=1)}var e=I(n);n.remove(),n=e}}var pt,Rt,Dt;function ar(){if(pt===void 0){pt=window;var t=Element.prototype,n=Node.prototype;Rt=ct(n,"firstChild").get,Dt=ct(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Rt.call(t)}function I(t){return Dt.call(t)}function or(t,n){if(!S)return et(t);var r=et(E);if(r===null)r=E.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),q(e),e}return q(r),r}function ir(t,n){if(!S){var r=et(t);return r instanceof Comment&&r.data===""?I(r):r}return E}function fr(t,n=1,r=!1){let e=S?E:t;for(var l;n--;)l=e,e=I(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var u=rt();return e===null?l==null||l.after(u):e.before(u),q(u),u}return q(e),e}function _r(t){t.textContent=""}function vn(t){var n=w|x;f===null?n|=O:f.f|=Et;var r=a!==null&&a.f&w?a:null;const e={children:null,ctx:_,deps:null,equals:mt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f};return r!==null&&(r.children??(r.children=[])).push(e),e}function cr(t){const n=vn(t);return n.equals=Tt,n}function St(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?ot(e):k(e)}}}function pn(t){for(var n=t.parent;n!==null;){if(!(n.f&w))return n;n=n.parent}return null}function kt(t){var n,r=f;W(pn(t));try{St(t),n=Bt(t)}finally{W(r)}return n}function Ot(t){var n=kt(t),r=(D||t.f&O)&&t.deps!==null?C:d;T(t,r),t.equals(n)||(t.v=n,t.wv=Ut())}function ot(t){St(t),M(t,0),T(t,F),t.v=t.children=t.deps=t.ctx=t.reactions=null}function It(t){f===null&&a===null&&en(),a!==null&&a.f&O&&rn(),it&&nn()}function hn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function U(t,n,r,e=!0){var l=(t&j)!==0,s=f,u={ctx:_,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=N;try{ht(!0),ft(u),u.f|=Qt}catch(v){throw k(u),v}finally{ht(o)}}else n!==null&&nt(u);var c=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&(Et|G))===0;if(!c&&!l&&e&&(s!==null&&hn(u,s),a!==null&&a.f&w)){var p=a;(p.children??(p.children=[])).push(u)}return u}function vr(t){It();var n=f!==null&&(f.f&A)!==0&&_!==null&&!_.m;if(n){var r=_;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:a})}else{var e=Nt(t);return e}}function pr(t){return It(),dn(t)}function hr(t){const n=U(j,t,!0);return(r={})=>new Promise(e=>{r.outro?En(n,()=>{k(n),e(void 0)}):(k(n),e(void 0))})}function Nt(t){return U(yt,t,!1)}function dn(t){return U(J,t,!0)}function dr(t){return yn(t)}function yn(t,n=0){return U(J|ut|n,t,!0)}function yr(t,n=!0){return U(J|A,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=it,e=a;dt(!0),Z(null);try{n.call(null)}finally{dt(r),Z(e)}}}function bt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ot(n[r])}}function Ct(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;k(r,n),r=e}}function wn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&A||k(n),n=r}}function k(t,n=!0){var r=!1;if((n||t.f&Xt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:I(e);e.remove(),e=s}r=!0}Ct(t,n&&!r),bt(t),M(t,0),T(t,F);var u=t.transitions;if(u!==null)for(const c of u)c.stop();Pt(t);var o=t.parent;o!==null&&o.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function En(t,n){var r=[];qt(t,r,!0),mn(r,()=>{k(t),n&&n()})}function mn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function qt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const u of t.transitions)(u.is_global||r)&&n.push(u);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&wt)!==0||(e.f&A)!==0;qt(e,n,s?r:!1),e=l}}}function wr(t){Lt(t,!0)}function Lt(t,n){if(t.f&b){t.f^=b,t.f&d||(t.f^=d),H(t)&&(T(t,x),nt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&wt)!==0||(r.f&A)!==0;Lt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let $=!1,lt=[];function Yt(){$=!1;const t=lt.slice();lt=[],Jt(t)}function Er(t){$||($=!0,queueMicrotask(Yt)),lt.push(t)}function Tn(){$&&Yt()}const Mt=0,gn=1;let B=!1,V=Mt,L=!1,Y=null,N=!1,it=!1;function ht(t){N=t}function dt(t){it=t}let R=[],P=0;let a=null;function Z(t){a=t}let f=null;function W(t){f=t}let m=null;function An(t){m=t}let h=null,y=0,g=null;function xn(t){g=t}let jt=1,z=0,D=!1,_=null;function Ut(){return++jt}function X(){return!Q||_!==null&&_.l===null}function H(t){var p;var n=t.f;if(n&x)return!0;if(n&C){var r=t.deps,e=(n&O)!==0;if(r!==null){var l,s,u=(n&K)!==0,o=e&&f!==null&&!D,c=r.length;if(u||o){for(l=0;l<c;l++)s=r[l],(u||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);u&&(t.f^=K)}for(l=0;l<c;l++)if(s=r[l],H(s)&&Ot(s),s.wv>t.wv)return!0}(!e||f!==null&&!D)&&T(t,d)}return!1}function Rn(t,n){for(var r=n;r!==null;){if(r.f&G)try{r.fn(t);return}catch{r.f^=G}r=r.parent}throw B=!1,t}function Dn(t){return(t.f&F)===0&&(t.parent===null||(t.parent.f&G)===0)}function tt(t,n,r,e){if(B){if(r===null&&(B=!1),Dn(n))throw t;return}r!==null&&(B=!0);{Rn(t,n);return}}function Ht(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&w?Ht(s,n,r+1):n===s&&(r===0?T(s,x):s.f&d&&T(s,C),nt(s))}}function Bt(t){var _t;var n=h,r=y,e=g,l=a,s=D,u=m,o=_,c=t.f;h=null,y=0,g=null,a=c&(A|j)?null:t,D=!N&&(c&O)!==0,m=null,_=t.ctx,z++;try{var p=(0,t.fn)(),v=t.deps;if(h!==null){var i;if(M(t,y),v!==null&&y>0)for(v.length=y+h.length,i=0;i<h.length;i++)v[y+i]=h[i];else t.deps=v=h;if(!D)for(i=y;i<v.length;i++)((_t=v[i]).reactions??(_t.reactions=[])).push(t)}else v!==null&&y<v.length&&(M(t,y),v.length=y);if(X()&&g!==null&&!(t.f&(w|C|x)))for(i=0;i<g.length;i++)Ht(g[i],t);return l!==null&&z++,p}finally{h=n,y=r,g=e,a=l,D=s,m=u,_=o}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=Zt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&w&&(h===null||!h.includes(n))&&(T(n,C),n.f&(O|K)||(n.f^=K),M(n,0))}function M(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function ft(t){var n=t.f;if(!(n&F)){T(t,d);var r=f,e=_;f=t;try{n&ut?wn(t):Ct(t),bt(t),Pt(t);var l=Bt(t);t.teardown=typeof l=="function"?l:null,t.wv=jt;var s=t.deps,u}catch(o){tt(o,t,r,e||t.ctx)}finally{f=r}}}function Vt(){if(P>1e3){P=0;try{ln()}catch(t){if(Y!==null)tt(t,Y,null);else throw t}}P++}function Gt(t){var n=t.length;if(n!==0){Vt();var r=N;N=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&d||(l.f^=d);var s=[];Kt(l,s),kn(s)}}finally{N=r}}}function kn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(F|b)))try{H(e)&&(ft(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}catch(l){tt(l,e,null,e.ctx)}}}function On(){if(L=!1,P>1001)return;const t=R;R=[],Gt(t),L||(P=0,Y=null)}function nt(t){V===Mt&&(L||(L=!0,queueMicrotask(On))),Y=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(j|A)){if(!(r&d))return;n.f^=d}}R.push(n)}function Kt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&A)!==0,u=s&&(l&d)!==0,o=r.next;if(!u&&!(l&b))if(l&J){if(s)r.f^=d;else try{H(r)&&ft(r)}catch(i){tt(i,r,null,r.ctx)}var c=r.first;if(c!==null){r=c;continue}}else l&yt&&e.push(r);if(o===null){let i=r.parent;for(;i!==null;){if(t===i)break t;var p=i.next;if(p!==null){r=p;continue t}i=i.parent}}r=o}for(var v=0;v<e.length;v++)c=e[v],n.push(c),Kt(c,n)}function $t(t){var n=V,r=R;try{Vt();const l=[];V=gn,R=l,L=!1,Gt(r);var e=t==null?void 0:t();return Tn(),(R.length>0||l.length>0)&&$t(),P=0,Y=null,e}finally{V=n,R=r}}async function mr(){await Promise.resolve(),$t()}function Tr(t){var v;var n=t.f,r=(n&w)!==0;if(r&&n&F){var e=kt(t);return ot(t),e}if(a!==null){m!==null&&m.includes(t)&&sn();var l=a.deps;t.rv<z&&(t.rv=z,h===null&&l!==null&&l[y]===t?y++:h===null?h=[t]:h.push(t))}else if(r&&t.deps===null)for(var s=t,u=s.parent,o=s;u!==null;)if(u.f&w){var c=u;o=c,u=c.parent}else{var p=u;(v=p.deriveds)!=null&&v.includes(o)||(p.deriveds??(p.deriveds=[])).push(o);break}return r&&(s=t,H(s)&&Ot(s)),t.v}function gr(t){const n=a;try{return a=null,t()}finally{a=n}}const In=-7169;function T(t,n){t.f=t.f&In|n}function Ar(t,n=!1,r){_={p:_,c:null,e:null,m:!1,s:t,x:null,l:null},Q&&!n&&(_.l={s:null,u:null,r1:[],r2:at(!1)})}function xr(t){const n=_;if(n!==null){const u=n.e;if(u!==null){var r=f,e=a;n.e=null;try{for(var l=0;l<u.length;l++){var s=u[l];W(s.effect),Z(s.reaction),Nt(s.fn)}}finally{W(r),Z(e)}}_=n.p,n.m=!0}return{}}function Rr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{Hn as $,q as A,er as B,fn as C,xt as D,wt as E,jn as F,_r as G,an as H,Pn as I,hr as J,rt as K,pr as L,Jt as M,Tr as N,Ln as O,Rr as P,vn as Q,dr as R,or as S,lr as T,fr as U,zn as V,Jn as W,vt as X,Cn as Y,Fn as Z,at as _,gr as a,nr as a0,ct as a1,Qn as a2,Bn as a3,zt as a4,on as a5,ur as a6,wr as a7,En as a8,Nt as a9,dn as aa,Er as ab,Un as ac,Yn as ad,$n as ae,Tt as af,A as ag,j as ah,Gn as ai,Kn as aj,Zn as ak,Mn as al,cr as am,tr as an,Wn as ao,$t as ap,mr as aq,Xn as ar,tn as as,yn as b,_ as c,yr as d,Vn as e,qn as f,k as g,S as h,E as i,ir as j,xr as k,Q as l,bn as m,sr as n,W as o,Ar as p,Nn as q,a as r,Z as s,f as t,vr as u,ar as v,et as w,I as x,gt as y,rr as z};
