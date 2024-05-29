/*! For license information please see 629.d61cec6c.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkpannel=self.webpackChunkpannel||[]).push([[629],{8629:function(t,e,n){n.r(e),n.d(e,{SIWEController:function(){return m},W3mConnectingSiwe:function(){return qt},W3mConnectingSiweView:function(){return Qt},createSIWEConfig:function(){return Yt}});var i,r,s,o=n(74165),a=n(15861),u=n(45987),l=n(15671),c=n(43144),h=n(11885),v=n(9244),d=3e5,f=["enabled","nonceRefetchIntervalMs","sessionRefetchIntervalMs","signOutOnAccountChange","signOutOnDisconnect","signOutOnNetworkChange"],p=function(){function t(e){(0,l.Z)(this,t);var n=e.enabled,i=void 0===n||n,r=e.nonceRefetchIntervalMs,s=void 0===r?d:r,o=e.sessionRefetchIntervalMs,a=void 0===o?d:o,c=e.signOutOnAccountChange,h=void 0===c||c,v=e.signOutOnDisconnect,p=void 0===v||v,y=e.signOutOnNetworkChange,g=void 0===y||y,_=(0,u.Z)(e,f);this.options={enabled:i,nonceRefetchIntervalMs:s,sessionRefetchIntervalMs:a,signOutOnDisconnect:p,signOutOnAccountChange:h,signOutOnNetworkChange:g},this.methods=_}return(0,c.Z)(t,[{key:"getNonce",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(e){var n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.methods.getNonce(e);case 2:if(n=t.sent){t.next=5;break}throw new Error("siweControllerClient:getNonce - nonce is undefined");case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"createMessage",value:function(t){var e=this.methods.createMessage(t);if(!e)throw new Error("siweControllerClient:createMessage - message is undefined");return e}},{key:"verifyMessage",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(e){var n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.methods.verifyMessage(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getSession",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){var e;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.methods.getSession();case 2:if(e=t.sent){t.next=5;break}throw new Error("siweControllerClient:getSession - session is undefined");case 5:return t.abrupt("return",e);case 6:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"signIn",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){var e,n,i,r,s,a,u;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=h.Ni.state.address,t.next=3,this.methods.getNonce(n);case 3:if(i=t.sent,n){t.next=6;break}throw new Error("An address is required to create a SIWE message.");case 6:if(r=v.p1.caipNetworkIdToNumber(null===(e=h.fB.state.caipNetwork)||void 0===e?void 0:e.id)){t.next=9;break}throw new Error("A chainId is required to create a SIWE message.");case 9:return s=this.methods.createMessage({address:n,nonce:i,chainId:r}),t.next=12,h.lZ.signMessage(s);case 12:return a=t.sent,t.next=15,this.methods.verifyMessage({message:s,signature:a});case 15:if(t.sent){t.next=18;break}throw new Error("Error verifying SIWE signature");case 18:return t.next=20,this.methods.getSession();case 20:if(u=t.sent){t.next=23;break}throw new Error("Error verifying SIWE signature");case 23:return this.methods.onSignIn&&this.methods.onSignIn(u),h._4.navigateAfterNetworkSwitch(),t.abrupt("return",u);case 26:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"signOut",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.methods.signOut());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}(),y=n(31085),g=n(61631),_=(0,g.sj)({status:"uninitialized"}),m={state:_,subscribeKey:function(t,e){return(0,y.VW)(_,t,e)},subscribe:function(t){return(0,g.Ld)(_,(function(){return t(_)}))},_getClient:function(){if(!_._client)throw new Error("SIWEController client not set");return _._client},getNonce:function(t){var e=this;return(0,a.Z)((0,o.Z)().mark((function n(){var i,r;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e._getClient(),n.next=3,i.getNonce(t);case 3:return r=n.sent,e.setNonce(r),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))()},getSession:function(){var t=this;return(0,a.Z)((0,o.Z)().mark((function e(){var n,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t._getClient(),e.next=3,n.getSession();case 3:return(i=e.sent)&&(t.setSession(i),t.setStatus("success")),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))()},createMessage:function(t){var e=this._getClient().createMessage(t);return this.setMessage(e),e},verifyMessage:function(t){var e=this;return(0,a.Z)((0,o.Z)().mark((function n(){var i,r;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e._getClient(),n.next=3,i.verifyMessage(t);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))()},signIn:function(){var t=this;return(0,a.Z)((0,o.Z)().mark((function e(){var n,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t._getClient(),e.next=3,n.signIn();case 3:return i=e.sent,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})))()},signOut:function(){var t=this;return(0,a.Z)((0,o.Z)().mark((function e(){var n,i;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t._getClient(),e.next=3,i.signOut();case 3:t.setStatus("ready"),null===(n=i.onSignOut)||void 0===n||n.call(i);case 5:case"end":return e.stop()}}),e)})))()},onSignIn:function(t){var e,n=this._getClient();null===(e=n.onSignIn)||void 0===e||e.call(n,t)},onSignOut:function(){var t,e=this._getClient();null===(t=e.onSignOut)||void 0===t||t.call(e)},setSIWEClient:function(t){_._client=(0,g.iH)(t),_.status="ready",h.hD.setIsSiweEnabled(t.options.enabled)},setNonce:function(t){_.nonce=t},setStatus:function(t){_.status=t},setMessage:function(t){_.message=t},setSession:function(t){_.session=t}},$=n(30168),w=n(60136),A=n(29388),b=n(31598),S=n(93433),k=n(29439),Z=n(37762),E=n(28664),C=globalThis,x=C.ShadowRoot&&(void 0===C.ShadyCSS||C.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,O=Symbol(),P=new WeakMap,U=function(){function t(e,n,i){if((0,l.Z)(this,t),this._$cssResult$=!0,i!==O)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=n}return(0,c.Z)(t,[{key:"styleSheet",get:function(){var t=this.o,e=this.t;if(x&&void 0===t){var n=void 0!==e&&1===e.length;n&&(t=P.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&P.set(e,t))}return t}},{key:"toString",value:function(){return this.cssText}}]),t}(),M=function(t,e){if(x)t.adoptedStyleSheets=e.map((function(t){return t instanceof CSSStyleSheet?t:t.styleSheet}));else{var n,i=(0,Z.Z)(e);try{for(i.s();!(n=i.n()).done;){var r=n.value,s=document.createElement("style"),o=C.litNonce;void 0!==o&&s.setAttribute("nonce",o),s.textContent=r.cssText,t.appendChild(s)}}catch(a){i.e(a)}finally{i.f()}}},N=x?function(t){return t}:function(t){return t instanceof CSSStyleSheet?function(t){var e,n="",i=(0,Z.Z)(t.cssRules);try{for(i.s();!(e=i.n()).done;){n+=e.value.cssText}}catch(r){i.e(r)}finally{i.f()}return function(t){return new U("string"==typeof t?t:t+"",void 0,O)}(n)}(t):t},I=Object.is,R=Object.defineProperty,T=Object.getOwnPropertyDescriptor,H=Object.getOwnPropertyNames,j=Object.getOwnPropertySymbols,W=Object.getPrototypeOf,D=globalThis,z=D.trustedTypes,L=z?z.emptyScript:"",B=D.reactiveElementPolyfillSupport,V=function(t,e){return t},q={toAttribute:function(t,e){switch(e){case Boolean:t=t?L:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute:function(t,e){var n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},K=function(t,e){return!I(t,e)},X={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:K};null!==(i=Symbol.metadata)&&void 0!==i||(Symbol.metadata=Symbol("metadata")),null!==(r=D.litPropertyMetadata)&&void 0!==r||(D.litPropertyMetadata=new WeakMap);var F,G=function(t){(0,w.Z)(n,t);var e=(0,A.Z)(n);function n(){var t;return(0,l.Z)(this,n),(t=e.call(this))._$Ep=void 0,t.isUpdatePending=!1,t.hasUpdated=!1,t._$Em=null,t._$Ev(),t}return(0,c.Z)(n,[{key:"_$Ev",value:function(){var t,e=this;this._$ES=new Promise((function(t){return e.enableUpdating=t})),this._$AL=new Map,this._$E_(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((function(t){return t(e)}))}},{key:"addController",value:function(t){var e,n;(null!==(e=this._$EO)&&void 0!==e?e:this._$EO=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}},{key:"removeController",value:function(t){var e;null===(e=this._$EO)||void 0===e||e.delete(t)}},{key:"_$E_",value:function(){var t,e=new Map,n=this.constructor.elementProperties,i=(0,Z.Z)(n.keys());try{for(i.s();!(t=i.n()).done;){var r=t.value;this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r])}}catch(s){i.e(s)}finally{i.f()}e.size>0&&(this._$Ep=e)}},{key:"createRenderRoot",value:function(){var t,e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return M(e,this.constructor.elementStyles),e}},{key:"connectedCallback",value:function(){var t,e;null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$EO)||void 0===e||e.forEach((function(t){var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}},{key:"enableUpdating",value:function(t){}},{key:"disconnectedCallback",value:function(){var t;null===(t=this._$EO)||void 0===t||t.forEach((function(t){var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}},{key:"attributeChangedCallback",value:function(t,e,n){this._$AK(t,n)}},{key:"_$EC",value:function(t,e){var n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(void 0!==i&&!0===n.reflect){var r,s=(void 0!==(null===(r=n.converter)||void 0===r?void 0:r.toAttribute)?n.converter:q).toAttribute(e,n.type);this._$Em=t,null==s?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}},{key:"_$AK",value:function(t,e){var n=this.constructor,i=n._$Eh.get(t);if(void 0!==i&&this._$Em!==i){var r,s=n.getPropertyOptions(i),o="function"==typeof s.converter?{fromAttribute:s.converter}:void 0!==(null===(r=s.converter)||void 0===r?void 0:r.fromAttribute)?s.converter:q;this._$Em=i,this[i]=o.fromAttribute(e,s.type),this._$Em=null}}},{key:"requestUpdate",value:function(t,e,n){if(void 0!==t){var i,r;if(null!==(i=n)&&void 0!==i||(n=this.constructor.getPropertyOptions(t)),!(null!==(r=n.hasChanged)&&void 0!==r?r:K)(this[t],e))return;this.P(t,e,n)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}},{key:"P",value:function(t,e,n){var i;this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Em!==t&&(null!==(i=this._$Ej)&&void 0!==i?i:this._$Ej=new Set).add(t)}},{key:"_$ET",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){var e;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isUpdatePending=!0,t.prev=1,t.next=4,this._$ES;case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(1),Promise.reject(t.t0);case 9:if(e=this.scheduleUpdate(),t.t1=null!=e,!t.t1){t.next=14;break}return t.next=14,e;case 14:return t.abrupt("return",!this.isUpdatePending);case 15:case"end":return t.stop()}}),t,this,[[1,6]])})));return function(){return t.apply(this,arguments)}}()},{key:"scheduleUpdate",value:function(){return this.performUpdate()}},{key:"performUpdate",value:function(){if(this.isUpdatePending){if(!this.hasUpdated){var t;if(null!==(t=this.renderRoot)&&void 0!==t||(this.renderRoot=this.createRenderRoot()),this._$Ep){var e,n=(0,Z.Z)(this._$Ep);try{for(n.s();!(e=n.n()).done;){var i=(0,k.Z)(e.value,2),r=i[0],s=i[1];this[r]=s}}catch(p){n.e(p)}finally{n.f()}this._$Ep=void 0}var o=this.constructor.elementProperties;if(o.size>0){var a,u=(0,Z.Z)(o);try{for(u.s();!(a=u.n()).done;){var l=(0,k.Z)(a.value,2),c=l[0],h=l[1];!0!==h.wrapped||this._$AL.has(c)||void 0===this[c]||this.P(c,this[c],h)}}catch(p){u.e(p)}finally{u.f()}}}var v=!1,d=this._$AL;try{var f;(v=this.shouldUpdate(d))?(this.willUpdate(d),null!==(f=this._$EO)&&void 0!==f&&f.forEach((function(t){var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(d)):this._$EU()}catch(d){throw v=!1,this._$EU(),d}v&&this._$AE(d)}}},{key:"willUpdate",value:function(t){}},{key:"_$AE",value:function(t){var e;null!==(e=this._$EO)&&void 0!==e&&e.forEach((function(t){var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}},{key:"_$EU",value:function(){this._$AL=new Map,this.isUpdatePending=!1}},{key:"updateComplete",get:function(){return this.getUpdateComplete()}},{key:"getUpdateComplete",value:function(){return this._$ES}},{key:"shouldUpdate",value:function(t){return!0}},{key:"update",value:function(t){var e=this;this._$Ej&&(this._$Ej=this._$Ej.forEach((function(t){return e._$EC(t,e[t])}))),this._$EU()}},{key:"updated",value:function(t){}},{key:"firstUpdated",value:function(t){}}],[{key:"addInitializer",value:function(t){var e;this._$Ei(),(null!==(e=this.l)&&void 0!==e?e:this.l=[]).push(t)}},{key:"observedAttributes",get:function(){return this.finalize(),this._$Eh&&(0,S.Z)(this._$Eh.keys())}},{key:"createProperty",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:X;if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){var n=Symbol(),i=this.getPropertyDescriptor(t,n,e);void 0!==i&&R(this.prototype,t,i)}}},{key:"getPropertyDescriptor",value:function(t,e,n){var i,r=null!==(i=T(this.prototype,t))&&void 0!==i?i:{get:function(){return this[e]},set:function(t){this[e]=t}},s=r.get,o=r.set;return{get:function(){return null===s||void 0===s?void 0:s.call(this)},set:function(e){var i=null===s||void 0===s?void 0:s.call(this);o.call(this,e),this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}},{key:"getPropertyOptions",value:function(t){var e;return null!==(e=this.elementProperties.get(t))&&void 0!==e?e:X}},{key:"_$Ei",value:function(){if(!this.hasOwnProperty(V("elementProperties"))){var t=W(this);t.finalize(),void 0!==t.l&&(this.l=(0,S.Z)(t.l)),this.elementProperties=new Map(t.elementProperties)}}},{key:"finalize",value:function(){if(!this.hasOwnProperty(V("finalized"))){if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){var t,e=this.properties,n=[].concat((0,S.Z)(H(e)),(0,S.Z)(j(e))),i=(0,Z.Z)(n);try{for(i.s();!(t=i.n()).done;){var r=t.value;this.createProperty(r,e[r])}}catch(_){i.e(_)}finally{i.f()}}var s=this[Symbol.metadata];if(null!==s){var o=litPropertyMetadata.get(s);if(void 0!==o){var a,u=(0,Z.Z)(o);try{for(u.s();!(a=u.n()).done;){var l=(0,k.Z)(a.value,2),c=l[0],h=l[1];this.elementProperties.set(c,h)}}catch(_){u.e(_)}finally{u.f()}}}this._$Eh=new Map;var v,d=(0,Z.Z)(this.elementProperties);try{for(d.s();!(v=d.n()).done;){var f=(0,k.Z)(v.value,2),p=f[0],y=f[1],g=this._$Eu(p,y);void 0!==g&&this._$Eh.set(g,p)}}catch(_){d.e(_)}finally{d.f()}this.elementStyles=this.finalizeStyles(this.styles)}}},{key:"finalizeStyles",value:function(t){var e=[];if(Array.isArray(t)){var n,i=new Set(t.flat(1/0).reverse()),r=(0,Z.Z)(i);try{for(r.s();!(n=r.n()).done;){var s=n.value;e.unshift(N(s))}}catch(o){r.e(o)}finally{r.f()}}else void 0!==t&&e.push(N(t));return e}},{key:"_$Eu",value:function(t,e){var n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}}]),n}((0,E.Z)(HTMLElement));G.elementStyles=[],G.shadowRootOptions={mode:"open"},G[V("elementProperties")]=new Map,G[V("finalized")]=new Map,null!==B&&void 0!==B&&B({ReactiveElement:G}),(null!==(s=D.reactiveElementVersions)&&void 0!==s?s:D.reactiveElementVersions=[]).push("2.0.4");var J=globalThis,Q=J.trustedTypes,Y=Q?Q.createPolicy("lit-html",{createHTML:function(t){return t}}):void 0,tt="$lit$",et="lit$".concat(Math.random().toFixed(9).slice(2),"$"),nt="?"+et,it="<".concat(nt,">"),rt=document,st=function(){return rt.createComment("")},ot=function(t){return null===t||"object"!=typeof t&&"function"!=typeof t},at=Array.isArray,ut=function(t){return at(t)||"function"==typeof(null===t||void 0===t?void 0:t[Symbol.iterator])},lt="[ \t\n\f\r]",ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,vt=/>/g,dt=RegExp(">|".concat(lt,"(?:([^\\s\"'>=/]+)(").concat(lt,"*=").concat(lt,"*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)"),"g"),ft=/'/g,pt=/"/g,yt=/^(?:script|style|textarea|title)$/i,gt=function(t){return function(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return{_$litType$:t,strings:e,values:i}}},_t=gt(1),mt=(gt(2),Symbol.for("lit-noChange")),$t=Symbol.for("lit-nothing"),wt=new WeakMap,At=rt.createTreeWalker(rt,129);function bt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==Y?Y.createHTML(e):e}var St=function(t,e){for(var n,i=t.length-1,r=[],s=2===e?"<svg>":"",o=ct,a=0;a<i;a++){for(var u=t[a],l=void 0,c=void 0,h=-1,v=0;v<u.length&&(o.lastIndex=v,null!==(c=o.exec(u)));){var d;v=o.lastIndex,o===ct?"!--"===c[1]?o=ht:void 0!==c[1]?o=vt:void 0!==c[2]?(yt.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=dt):void 0!==c[3]&&(o=dt):o===dt?">"===c[0]?(o=null!==(d=n)&&void 0!==d?d:ct,h=-1):void 0===c[1]?h=-2:(h=o.lastIndex-c[2].length,l=c[1],o=void 0===c[3]?dt:'"'===c[3]?pt:ft):o===pt||o===ft?o=dt:o===ht||o===vt?o=ct:(o=dt,n=void 0)}var f=o===dt&&t[a+1].startsWith("/>")?" ":"";s+=o===ct?u+it:h>=0?(r.push(l),u.slice(0,h)+tt+u.slice(h)+et+f):u+et+(-2===h?a:f)}return[bt(t,s+(t[i]||"<?>")+(2===e?"</svg>":"")),r]},kt=function(){function t(e,n){var i,r=e.strings,s=e._$litType$;(0,l.Z)(this,t),this.parts=[];var o=0,a=0,u=r.length-1,c=this.parts,h=St(r,s),v=(0,k.Z)(h,2),d=v[0],f=v[1];if(this.el=t.createElement(d,n),At.currentNode=this.el.content,2===s){var p=this.el.content.firstChild;p.replaceWith.apply(p,(0,S.Z)(p.childNodes))}for(;null!==(i=At.nextNode())&&c.length<u;){if(1===i.nodeType){if(i.hasAttributes()){var y,g=(0,Z.Z)(i.getAttributeNames());try{for(g.s();!(y=g.n()).done;){var _=y.value;if(_.endsWith(tt)){var m=f[a++],$=i.getAttribute(_).split(et),w=/([.?@])?(.*)/.exec(m);c.push({type:1,index:o,name:w[2],strings:$,ctor:"."===w[1]?Ot:"?"===w[1]?Pt:"@"===w[1]?Ut:xt}),i.removeAttribute(_)}else _.startsWith(et)&&(c.push({type:6,index:o}),i.removeAttribute(_))}}catch(x){g.e(x)}finally{g.f()}}if(yt.test(i.tagName)){var A=i.textContent.split(et),b=A.length-1;if(b>0){i.textContent=Q?Q.emptyScript:"";for(var E=0;E<b;E++)i.append(A[E],st()),At.nextNode(),c.push({type:2,index:++o});i.append(A[b],st())}}}else if(8===i.nodeType)if(i.data===nt)c.push({type:2,index:o});else for(var C=-1;-1!==(C=i.data.indexOf(et,C+1));)c.push({type:7,index:o}),C+=et.length-1;o++}}return(0,c.Z)(t,null,[{key:"createElement",value:function(t,e){var n=rt.createElement("template");return n.innerHTML=t,n}}]),t}();function Zt(t,e){var n,i,r,s,o,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,u=arguments.length>3?arguments[3]:void 0;if(e===mt)return e;var l=void 0!==u?null===(n=a._$Co)||void 0===n?void 0:n[u]:a._$Cl,c=ot(e)?void 0:e._$litDirective$;return(null===(i=l)||void 0===i?void 0:i.constructor)!==c&&(null!==(r=l)&&void 0!==r&&null!==(s=r._$AO)&&void 0!==s&&s.call(r,!1),void 0===c?l=void 0:(l=new c(t))._$AT(t,a,u),void 0!==u?(null!==(o=a._$Co)&&void 0!==o?o:a._$Co=[])[u]=l:a._$Cl=l),void 0!==l&&(e=Zt(t,l._$AS(t,e.values),l,u)),e}var Et=function(){function t(e,n){(0,l.Z)(this,t),this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=n}return(0,c.Z)(t,[{key:"parentNode",get:function(){return this._$AM.parentNode}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"u",value:function(t){var e,n=this._$AD,i=n.el.content,r=n.parts,s=(null!==(e=null===t||void 0===t?void 0:t.creationScope)&&void 0!==e?e:rt).importNode(i,!0);At.currentNode=s;for(var o=At.nextNode(),a=0,u=0,l=r[0];void 0!==l;){var c;if(a===l.index){var h=void 0;2===l.type?h=new Ct(o,o.nextSibling,this,t):1===l.type?h=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(h=new Mt(o,this,t)),this._$AV.push(h),l=r[++u]}a!==(null===(c=l)||void 0===c?void 0:c.index)&&(o=At.nextNode(),a++)}return At.currentNode=rt,s}},{key:"p",value:function(t){var e,n=0,i=(0,Z.Z)(this._$AV);try{for(i.s();!(e=i.n()).done;){var r=e.value;void 0!==r&&(void 0!==r.strings?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}catch(s){i.e(s)}finally{i.f()}}}]),t}(),Ct=function(){function t(e,n,i,r){var s;(0,l.Z)(this,t),this.type=2,this._$AH=$t,this._$AN=void 0,this._$AA=e,this._$AB=n,this._$AM=i,this.options=r,this._$Cv=null===(s=null===r||void 0===r?void 0:r.isConnected)||void 0===s||s}return(0,c.Z)(t,[{key:"_$AU",get:function(){var t,e;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cv}},{key:"parentNode",get:function(){var t,e=this._$AA.parentNode,n=this._$AM;return void 0!==n&&11===(null===(t=e)||void 0===t?void 0:t.nodeType)&&(e=n.parentNode),e}},{key:"startNode",get:function(){return this._$AA}},{key:"endNode",get:function(){return this._$AB}},{key:"_$AI",value:function(t){t=Zt(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this),ot(t)?t===$t||null==t||""===t?(this._$AH!==$t&&this._$AR(),this._$AH=$t):t!==this._$AH&&t!==mt&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):ut(t)?this.k(t):this._(t)}},{key:"S",value:function(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}},{key:"T",value:function(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}},{key:"_",value:function(t){this._$AH!==$t&&ot(this._$AH)?this._$AA.nextSibling.data=t:this.T(rt.createTextNode(t)),this._$AH=t}},{key:"$",value:function(t){var e,n=t.values,i=t._$litType$,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=kt.createElement(bt(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.p(n);else{var s=new Et(r,this),o=s.u(this.options);s.p(n),this.T(o),this._$AH=s}}},{key:"_$AC",value:function(t){var e=wt.get(t.strings);return void 0===e&&wt.set(t.strings,e=new kt(t)),e}},{key:"k",value:function(e){at(this._$AH)||(this._$AH=[],this._$AR());var n,i,r=this._$AH,s=0,o=(0,Z.Z)(e);try{for(o.s();!(i=o.n()).done;){var a=i.value;s===r.length?r.push(n=new t(this.S(st()),this.S(st()),this,this.options)):n=r[s],n._$AI(a),s++}}catch(u){o.e(u)}finally{o.f()}s<r.length&&(this._$AR(n&&n._$AB.nextSibling,s),r.length=s)}},{key:"_$AR",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._$AA.nextSibling,e=arguments.length>1?arguments[1]:void 0;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){var n,i=t.nextSibling;t.remove(),t=i}}},{key:"setConnected",value:function(t){var e;void 0===this._$AM&&(this._$Cv=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}]),t}(),xt=function(){function t(e,n,i,r,s){(0,l.Z)(this,t),this.type=1,this._$AH=$t,this._$AN=void 0,this.element=e,this.name=n,this._$AM=r,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=$t}return(0,c.Z)(t,[{key:"tagName",get:function(){return this.element.tagName}},{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=this.strings,s=!1;if(void 0===r)t=Zt(this,t,e,0),(s=!ot(t)||t!==this._$AH&&t!==mt)&&(this._$AH=t);else{var o,a,u=t;for(t=r[0],o=0;o<r.length-1;o++){var l;(a=Zt(this,u[n+o],e,o))===mt&&(a=this._$AH[o]),s||(s=!ot(a)||a!==this._$AH[o]),a===$t?t=$t:t!==$t&&(t+=(null!==(l=a)&&void 0!==l?l:"")+r[o+1]),this._$AH[o]=a}}s&&!i&&this.j(t)}},{key:"j",value:function(t){t===$t?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!==t&&void 0!==t?t:"")}}]),t}(),Ot=function(t){(0,w.Z)(n,t);var e=(0,A.Z)(n);function n(){var t;return(0,l.Z)(this,n),(t=e.apply(this,arguments)).type=3,t}return(0,c.Z)(n,[{key:"j",value:function(t){this.element[this.name]=t===$t?void 0:t}}]),n}(xt),Pt=function(t){(0,w.Z)(n,t);var e=(0,A.Z)(n);function n(){var t;return(0,l.Z)(this,n),(t=e.apply(this,arguments)).type=4,t}return(0,c.Z)(n,[{key:"j",value:function(t){this.element.toggleAttribute(this.name,!!t&&t!==$t)}}]),n}(xt),Ut=function(t){(0,w.Z)(n,t);var e=(0,A.Z)(n);function n(t,i,r,s,o){var a;return(0,l.Z)(this,n),(a=e.call(this,t,i,r,s,o)).type=5,a}return(0,c.Z)(n,[{key:"_$AI",value:function(t){var e;if((t=null!==(e=Zt(this,t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:this,0))&&void 0!==e?e:$t)!==mt){var n=this._$AH,i=t===$t&&n!==$t||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,r=t!==$t&&(n===$t||i);i&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}}},{key:"handleEvent",value:function(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(n=this.options)||void 0===n?void 0:n.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}]),n}(xt),Mt=function(){function t(e,n,i){(0,l.Z)(this,t),this.element=e,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}return(0,c.Z)(t,[{key:"_$AU",get:function(){return this._$AM._$AU}},{key:"_$AI",value:function(t){Zt(this,t)}}]),t}(),Nt=J.litHtmlPolyfillSupport;null!==Nt&&void 0!==Nt&&Nt(kt,Ct),(null!==(F=J.litHtmlVersions)&&void 0!==F?F:J.litHtmlVersions=[]).push("3.1.3");var It,Rt,Tt=n(97326),Ht=n(11752),jt=n(61120),Wt=function(t){(0,w.Z)(n,t);var e=(0,A.Z)(n);function n(){var t;return(0,l.Z)(this,n),(t=e.apply(this,arguments)).renderOptions={host:(0,Tt.Z)(t)},t._$Do=void 0,t}return(0,c.Z)(n,[{key:"createRenderRoot",value:function(){var t,e,i=(0,Ht.Z)((0,jt.Z)(n.prototype),"createRenderRoot",this).call(this);return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}},{key:"update",value:function(t){var e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),(0,Ht.Z)((0,jt.Z)(n.prototype),"update",this).call(this,t),this._$Do=function(t,e,n){var i,r=null!==(i=null===n||void 0===n?void 0:n.renderBefore)&&void 0!==i?i:e,s=r._$litPart$;if(void 0===s){var o,a=null!==(o=null===n||void 0===n?void 0:n.renderBefore)&&void 0!==o?o:null;r._$litPart$=s=new Ct(e.insertBefore(st(),a),a,void 0,null!==n&&void 0!==n?n:{})}return s._$AI(t),s}(e,this.renderRoot,this.renderOptions)}},{key:"connectedCallback",value:function(){var t;(0,Ht.Z)((0,jt.Z)(n.prototype),"connectedCallback",this).call(this),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}},{key:"disconnectedCallback",value:function(){var t;(0,Ht.Z)((0,jt.Z)(n.prototype),"disconnectedCallback",this).call(this),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}},{key:"render",value:function(){return mt}}]),n}(G);Wt._$litElement$=!0,Wt.finalized=!0,null===(It=globalThis.litElementHydrateSupport)||void 0===It||It.call(globalThis,{LitElement:Wt});var Dt=globalThis.litElementPolyfillSupport;null===Dt||void 0===Dt||Dt({LitElement:Wt});var zt;(null!==(Rt=globalThis.litElementVersions)&&void 0!==Rt?Rt:globalThis.litElementVersions=[]).push("4.0.5");var Lt,Bt=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=1===t.length?t[0]:n.reduce((function(e,n,i){return e+function(t){if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")}(n)+t[i+1]}),t[0]);return new U(r,t,O)}(zt||(zt=(0,$.Z)(["\n  :host {\n    display: flex;\n    justify-content: center;\n    gap: var(--wui-spacing-2xl);\n  }\n\n  wui-visual-thumbnail:nth-child(1) {\n    z-index: 1;\n  }\n"]))),Vt=function(t,e,n,i){var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},qt=function(t){(0,w.Z)(n,t);var e=(0,A.Z)(n);function n(){var t,i;return(0,l.Z)(this,n),(i=e.apply(this,arguments)).dappImageUrl=null===(t=h.hD.state.metadata)||void 0===t?void 0:t.icons,i.walletImageUrl=h.MO.getConnectedWalletImageUrl(),i}return(0,c.Z)(n,[{key:"firstUpdated",value:function(){var t,e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll("wui-visual-thumbnail");null!==e&&void 0!==e&&e[0]&&this.createAnimation(e[0],"translate(18px)"),null!==e&&void 0!==e&&e[1]&&this.createAnimation(e[1],"translate(-18px)")}},{key:"render",value:function(){var t;return _t(Lt||(Lt=(0,$.Z)(["\n      <wui-visual-thumbnail\n        ?borderRadiusFull=","\n        .imageSrc=","\n      ></wui-visual-thumbnail>\n      <wui-visual-thumbnail .imageSrc=","></wui-visual-thumbnail>\n    "])),!0,null===(t=this.dappImageUrl)||void 0===t?void 0:t[0],this.walletImageUrl)}},{key:"createAnimation",value:function(t,e){t.animate([{transform:"translateX(0px)"},{transform:e}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}}]),n}(Wt);qt.styles=Bt,qt=Vt([(0,b.customElement)("w3m-connecting-siwe")],qt);var Kt,Xt=n(1413),Ft={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:K},Gt=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,i=n.kind,r=n.metadata,s=globalThis.litPropertyMetadata.get(r);if(void 0===s&&globalThis.litPropertyMetadata.set(r,s=new Map),s.set(n.name,t),"accessor"===i){var o=n.name;return{set:function(n){var i=e.get.call(this);e.set.call(this,n),this.requestUpdate(o,i,t)},init:function(e){return void 0!==e&&this.P(o,void 0,t),e}}}if("setter"===i){var a=n.name;return function(n){var i=this[a];e.call(this,n),this.requestUpdate(a,i,t)}}throw Error("Unsupported decorator location: "+i)};var Jt=function(t,e,n,i){var r,s=arguments.length,o=s<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(t,e,n,i);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},Qt=function(t){(0,w.Z)(n,t);var e=(0,A.Z)(n);function n(){var t,i;return(0,l.Z)(this,n),(i=e.apply(this,arguments)).dappName=null===(t=h.hD.state.metadata)||void 0===t?void 0:t.name,i.isSigning=!1,i}return(0,c.Z)(n,[{key:"render",value:function(){var t;return _t(Kt||(Kt=(0,$.Z)(['\n      <wui-flex justifyContent="center" .padding=',">\n        <w3m-connecting-siwe></w3m-connecting-siwe>\n      </wui-flex>\n      <wui-flex\n        .padding=",'\n        gap="s"\n        justifyContent="space-between"\n      >\n        <wui-text variant="paragraph-500" align="center" color="fg-100"\n          >'," needs to connect to your wallet</wui-text\n        >\n      </wui-flex>\n      <wui-flex\n        .padding=",'\n        gap="s"\n        justifyContent="space-between"\n      >\n        <wui-text variant="small-400" align="center" color="fg-200"\n          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect\n          you.</wui-text\n        >\n      </wui-flex>\n      <wui-flex .padding=',' gap="s" justifyContent="space-between">\n        <wui-button\n          size="md"\n          ?fullwidth=','\n          variant="shade"\n          @click=','\n          data-testid="w3m-connecting-siwe-cancel"\n        >\n          Cancel\n        </wui-button>\n        <wui-button\n          size="md"\n          ?fullwidth=','\n          variant="fill"\n          @click=',"\n          ?loading=",'\n          data-testid="w3m-connecting-siwe-sign"\n        >\n          ',"\n        </wui-button>\n      </wui-flex>\n    "])),["2xl","0","xxl","0"],["0","4xl","l","4xl"],null!==(t=this.dappName)&&void 0!==t?t:"Dapp",["0","3xl","l","3xl"],["l","xl","xl","xl"],!0,this.onCancel.bind(this),!0,this.onSign.bind(this),this.isSigning,this.isSigning?"Signing...":"Sign")}},{key:"onSign",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){var e;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.isSigning=!0,h.Xs.sendEvent({event:"CLICK_SIGN_SIWE_MESSAGE",type:"track"}),t.prev=2,m.setStatus("loading"),t.next=6,m.signIn();case 6:return e=t.sent,m.setStatus("success"),h.Xs.sendEvent({event:"SIWE_AUTH_SUCCESS",type:"track"}),t.abrupt("return",e);case 12:return t.prev=12,t.t0=t.catch(2),h.KC.showError("Signature declined"),m.setStatus("error"),t.abrupt("return",h.Xs.sendEvent({event:"SIWE_AUTH_ERROR",type:"track"}));case 17:return t.prev=17,this.isSigning=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,this,[[2,12,17,20]])})));return function(){return t.apply(this,arguments)}}()},{key:"onCancel",value:function(){var t=(0,a.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!h.Ni.state.isConnected){t.next=7;break}return t.next=4,h.lZ.disconnect();case 4:h.IN.close(),t.next=8;break;case 7:h.Pc.push("Connect");case 8:h.Xs.sendEvent({event:"CLICK_CANCEL_SIWE",type:"track"});case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()}]),n}(Wt);function Yt(t){return new p(t)}Jt([function(t){return function(t){return function(e,n){return"object"==typeof n?Gt(t,e,n):function(t,e,n){var i=e.hasOwnProperty(n);return e.constructor.createProperty(n,i?(0,Xt.Z)((0,Xt.Z)({},t),{},{wrapped:!0}):t),i?Object.getOwnPropertyDescriptor(e,n):void 0}(t,e,n)}}((0,Xt.Z)((0,Xt.Z)({},t),{},{state:!0,attribute:!1}))}()],Qt.prototype,"isSigning",void 0),Qt=Jt([(0,b.customElement)("w3m-connecting-siwe-view")],Qt)}}]);
//# sourceMappingURL=629.d61cec6c.chunk.js.map