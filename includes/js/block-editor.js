!function(e){var t={};function n(r){if(t[r])return t[r].exports;var l=t[r]={i:r,l:!1,exports:{}};return e[r].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(r,l,function(t){return e[t]}.bind(null,l));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){var r=n(3),l=n(4),a=n(5);e.exports=function(e,t){return r(e)||l(e,t)||a()}},function(e,t,n){"use strict";n.r(t);var r=n(1),l=n.n(r),a=n(0),o=wp.plugins.registerPlugin,c=wp.editPost.PluginDocumentSettingPanel,u=wp.components,i=(u.Spinner,u.PanelRow),s=u.SelectControl,f=wp.element.useState,p=wp.compose.withState,b=wp.apiFetch;o("bogo-language-panel",{render:function(){var e=Object.assign({},wp.data.select("core/editor").getCurrentPost(),bogo.currentPost),t=f(e.translations),n=l()(t,2),r=n[0],o=n[1],u=p({locale:""})((function(t){var n=t.locale,c=t.setState,u=[{label:"Add Translation",value:""}];Object.entries(r).forEach((function(e){var t=l()(e,2),n=t[0];t[1].postId||u.push({label:m(n),value:n})}));return u.length<=1||"auto-draft"==e.status?Object(a.createElement)(a.Fragment,null):Object(a.createElement)(i,null,Object(a.createElement)("span",null),Object(a.createElement)(s,{value:n,options:u,onChange:function(t){!function(t){c({locale:t}),b({path:"/bogo/v1/posts/"+e.id+"/translations/"+t,method:"POST"}).then((function(e){var n=Object.assign({},r);n[t]={postId:e[t].id,postTitle:e[t].title.rendered,editLink:e[t].edit_link},o(n)}))}(t)}}))}));return Object(a.createElement)(c,{name:"bogo-language-panel",title:"Language",className:"bogo-language-panel"},Object(a.createElement)((function(){return Object(a.createElement)(i,null,Object(a.createElement)("span",null,"Language"),Object(a.createElement)("div",null,m(e.locale)))}),null),Object(a.createElement)((function(){var e=[];Object.entries(r).forEach((function(t){var n=l()(t,2),r=n[0],o=n[1];o.editLink&&o.postTitle&&e.push(Object(a.createElement)("li",{key:r},Object(a.createElement)("a",{href:o.editLink,target:"_blank",rel:"noopener noreferrer"},o.postTitle),Object(a.createElement)("span",{className:"screen-reader-text"},"(opens in a new window)"),Object(a.createElement)("br",null),Object(a.createElement)("em",null,m(r))))}));return Object(a.createElement)(i,null,Object(a.createElement)("span",null,"Translations"),Object(a.createElement)((function(e){return e.listItems.length?Object(a.createElement)("ul",null,e.listItems):Object(a.createElement)("em",null,"None")}),{listItems:e}))}),null),Object(a.createElement)(u,null))},icon:"translation"});var m=function(e){return bogo.availableLanguages[e]?bogo.availableLanguages[e]:e}},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,l=!1,a=void 0;try{for(var o,c=e[Symbol.iterator]();!(r=(o=c.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){l=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(l)throw a}}return n}}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}]);