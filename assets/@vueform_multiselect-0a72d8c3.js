import{s as e,v as a,B as l,F as t,$ as u,Z as i,y as r,R as n,Y as s,x as o,a0 as v,E as c,C as d,t as p,g as f,a as g,c as h,w as m,n as b,o as y}from"./chunk-BGPNDDXN-fe77eba9.js";function S(e){return-1!==[null,void 0].indexOf(e)}function O(e,a,l){const{object:t,valueProp:u,mode:i}=p(e),r=f().proxy,n=l.iv,s=e=>t.value||S(e)?e:Array.isArray(e)?e.map((e=>e[u.value])):e[u.value],o=e=>S(e)?"single"===i.value?{}:[]:e;return{update:(e,l=!0)=>{n.value=o(e);const t=s(e);a.emit("change",t,r),l&&(a.emit("input",t),a.emit("update:modelValue",t))}}}function L(e,a){const{value:l,modelValue:t,mode:u,valueProp:i}=p(e),r=g("single"!==u.value?[]:{}),n=t&&void 0!==t.value?t:l,s=h((()=>"single"===u.value?r.value[i.value]:r.value.map((e=>e[i.value])))),o=h((()=>"single"!==u.value?r.value.map((e=>e[i.value])).join(","):r.value[i.value]));return{iv:r,internalValue:r,ev:n,externalValue:n,textValue:o,plainValue:s}}function x(e,a,l){const{regex:t}=p(e),u=f().proxy,i=l.isOpen,r=l.open,n=g(null),s=g(null);return m(n,(e=>{!i.value&&e&&r(),a.emit("search-change",e,u)})),{search:n,input:s,clearSearch:()=>{n.value=""},handleSearchInput:e=>{n.value=e.target.value},handleKeypress:e=>{if(t&&t.value){let a=t.value;"string"==typeof a&&(a=new RegExp(a)),e.key.match(a)||e.preventDefault()}},handlePaste:e=>{if(t&&t.value){let a=(e.clipboardData||window.clipboardData).getData("Text"),l=t.value;"string"==typeof l&&(l=new RegExp(l)),a.split("").every((e=>!!e.match(l)))||e.preventDefault()}a.emit("paste",e,u)}}}function w(e,a,l){const{groupSelect:t,mode:u,groups:i,disabledProp:r}=p(e),n=g(null),s=e=>{void 0===e||null!==e&&e[r.value]||i.value&&e&&e.group&&("single"===u.value||!t.value)||(n.value=e)};return{pointer:n,setPointer:s,clearPointer:()=>{s(null)}}}function k(e,a=!0){return a?String(e).toLowerCase().trim():String(e).toLowerCase().normalize("NFD").trim().replace(new RegExp(/æ/g),"ae").replace(new RegExp(/œ/g),"oe").replace(new RegExp(/ø/g),"o").replace(/\p{Diacritic}/gu,"")}function q(e,a,l){const{options:t,mode:u,trackBy:i,limit:r,hideSelected:n,createTag:s,createOption:o,label:v,appendNewTag:c,appendNewOption:d,multipleLabel:b,object:y,loading:O,delay:L,resolveOnLoad:x,minChars:w,filterResults:q,clearOnSearch:T,clearOnSelect:P,valueProp:_,canDeselect:I,max:E,strict:C,closeOnSelect:B,groups:D,reverse:R,infinite:A,groupOptions:j,groupHideEmpty:M,groupSelect:V,onCreate:$,disabledProp:K,searchStart:N}=p(e),H=f().proxy,F=l.iv,G=l.ev,W=l.search,U=l.clearSearch,z=l.update,X=l.pointer,Y=l.clearPointer,Z=l.focus,J=l.deactivate,Q=l.close,ee=g([]),ae=g([]),le=g(!1),te=g(null),ue=g(A.value&&-1===r.value?10:r.value),ie=h((()=>s.value||o.value||!1)),re=h((()=>void 0!==c.value?c.value:void 0===d.value||d.value)),ne=h((()=>{if(D.value){let e=ae.value||[],a=[];return e.forEach((e=>{Ae(e[j.value]).forEach((l=>{a.push(Object.assign({},l,e[K.value]?{[K.value]:!0}:{}))}))})),a}{let e=Ae(ae.value||[]);return ee.value.length&&(e=e.concat(ee.value)),e}})),se=h((()=>D.value?De((ae.value||[]).map(((e,a)=>{const l=Ae(e[j.value]);return{...e,index:a,group:!0,[j.value]:Re(l,!1).map((a=>Object.assign({},a,e[K.value]?{[K.value]:!0}:{}))),__VISIBLE__:Re(l).map((a=>Object.assign({},a,e[K.value]?{[K.value]:!0}:{})))}}))):[])),oe=h((()=>{let e=ne.value;return R.value&&(e=e.reverse()),ge.value.length&&(e=ge.value.concat(e)),Re(e)})),ve=h((()=>{let e=oe.value;return ue.value>0&&(e=e.slice(0,ue.value)),e})),ce=h((()=>{switch(u.value){case"single":return!S(F.value[_.value]);case"multiple":case"tags":return!S(F.value)&&F.value.length>0}})),de=h((()=>void 0!==b&&void 0!==b.value?b.value(F.value,H):F.value&&F.value.length>1?`${F.value.length} options selected`:"1 option selected")),pe=h((()=>!ne.value.length&&!le.value&&!ge.value.length)),fe=h((()=>ne.value.length>0&&0==ve.value.length&&(W.value&&D.value||!D.value))),ge=h((()=>!1!==ie.value&&W.value?-1!==Ce(W.value)?[]:[{[_.value]:W.value,[v.value]:W.value,[he.value]:W.value,__CREATE__:!0}]:[])),he=h((()=>i.value||v.value)),me=h((()=>{switch(u.value){case"single":return null;case"multiple":case"tags":return[]}})),be=h((()=>O.value||le.value)),ye=e=>{switch("object"!=typeof e&&(e=Ee(e)),u.value){case"single":z(e);break;case"multiple":case"tags":z(F.value.concat(e))}a.emit("select",Oe(e),e,H)},Se=e=>{switch("object"!=typeof e&&(e=Ee(e)),u.value){case"single":xe();break;case"tags":case"multiple":z(Array.isArray(e)?F.value.filter((a=>-1===e.map((e=>e[_.value])).indexOf(a[_.value]))):F.value.filter((a=>a[_.value]!=e[_.value])))}a.emit("deselect",Oe(e),e,H)},Oe=e=>y.value?e:e[_.value],Le=e=>{Se(e)},xe=()=>{a.emit("clear",H),z(me.value)},we=e=>{if(void 0!==e.group)return"single"!==u.value&&(Ie(e[j.value])&&e[j.value].length);switch(u.value){case"single":return!S(F.value)&&F.value[_.value]==e[_.value];case"tags":case"multiple":return!S(F.value)&&-1!==F.value.map((e=>e[_.value])).indexOf(e[_.value])}},ke=e=>!0===e[K.value],qe=()=>!(void 0===E||-1===E.value||!ce.value&&E.value>0)&&F.value.length>=E.value,Te=e=>{switch(e.__CREATE__&&delete(e={...e}).__CREATE__,u.value){case"single":if(e&&we(e))return void(I.value&&Se(e));e&&Pe(e),P.value&&U(),B.value&&(Y(),Q()),e&&ye(e);break;case"multiple":if(e&&we(e))return void Se(e);if(qe())return void a.emit("max",H);e&&(Pe(e),ye(e)),P.value&&U(),n.value&&Y(),B.value&&Q();break;case"tags":if(e&&we(e))return void Se(e);if(qe())return void a.emit("max",H);e&&Pe(e),P.value&&U(),e&&ye(e),n.value&&Y(),B.value&&Q()}B.value||Z()},Pe=e=>{void 0===Ee(e[_.value])&&ie.value&&(a.emit("tag",e[_.value],H),a.emit("option",e[_.value],H),re.value&&Be(e),U())},_e=e=>void 0===e.find((e=>!we(e)&&!e[K.value])),Ie=e=>void 0===e.find((e=>!we(e))),Ee=e=>ne.value[ne.value.map((e=>String(e[_.value]))).indexOf(String(e))],Ce=(e,a=!0)=>ne.value.map((e=>parseInt(e[he.value])==e[he.value]?parseInt(e[he.value]):e[he.value])).indexOf(parseInt(e)==e?parseInt(e):e),Be=e=>{ee.value.push(e)},De=e=>M.value?e.filter((e=>W.value?e.__VISIBLE__.length:e[j.value].length)):e.filter((e=>!W.value||e.__VISIBLE__.length)),Re=(e,a=!0)=>{let l=e;return W.value&&q.value&&(l=l.filter((e=>N.value?k(e[he.value],C.value).startsWith(k(W.value,C.value)):-1!==k(e[he.value],C.value).indexOf(k(W.value,C.value))))),n.value&&a&&(l=l.filter((e=>!(e=>-1!==["tags","multiple"].indexOf(u.value)&&n.value&&we(e))(e)))),l},Ae=e=>{let a=e;var l;return l=a,"[object Object]"===Object.prototype.toString.call(l)&&(a=Object.keys(a).map((e=>{let l=a[e];return{[_.value]:e,[he.value]:l,[v.value]:l}}))),a=a.map((e=>"object"==typeof e?e:{[_.value]:e,[he.value]:e,[v.value]:e})),a},je=()=>{S(G.value)||(F.value=$e(G.value))},Me=e=>(le.value=!0,new Promise(((a,l)=>{t.value(W.value,H).then((a=>{ae.value=a||[],"function"==typeof e&&e(a),le.value=!1})).catch((e=>{console.error(e),ae.value=[],le.value=!1})).finally((()=>{a()}))}))),Ve=()=>{if(ce.value)if("single"===u.value){let e=Ee(F.value[_.value]);if(void 0!==e){let a=e[v.value];F.value[v.value]=a,y.value&&(G.value[v.value]=a)}}else F.value.forEach(((e,a)=>{let l=Ee(F.value[a][_.value]);if(void 0!==l){let e=l[v.value];F.value[a][v.value]=e,y.value&&(G.value[a][v.value]=e)}}))},$e=e=>S(e)?"single"===u.value?{}:[]:y.value?e:"single"===u.value?Ee(e)||{}:e.filter((e=>!!Ee(e))).map((e=>Ee(e))),Ke=()=>{te.value=m(W,(e=>{e.length<w.value||!e&&0!==w.value||(le.value=!0,T.value&&(ae.value=[]),setTimeout((()=>{e==W.value&&t.value(W.value,H).then((a=>{e!=W.value&&W.value||(ae.value=a,X.value=ve.value.filter((e=>!0!==e[K.value]))[0]||null,le.value=!1)})).catch((e=>{console.error(e)}))}),L.value))}),{flush:"sync"})};if("single"!==u.value&&!S(G.value)&&!Array.isArray(G.value))throw new Error(`v-model must be an array when using "${u.value}" mode`);return t&&"function"==typeof t.value?x.value?Me(je):1==y.value&&je():(ae.value=t.value,je()),L.value>-1&&Ke(),m(L,((e,a)=>{te.value&&te.value(),e>=0&&Ke()})),m(G,(e=>{if(S(e))z($e(e),!1);else switch(u.value){case"single":(y.value?e[_.value]!=F.value[_.value]:e!=F.value[_.value])&&z($e(e),!1);break;case"multiple":case"tags":(function(e,a){const l=a.slice().sort();return e.length===a.length&&e.slice().sort().every((function(e,a){return e===l[a]}))})(y.value?e.map((e=>e[_.value])):e,F.value.map((e=>e[_.value])))||z($e(e),!1)}}),{deep:!0}),m(t,((a,l)=>{"function"==typeof e.options?x.value&&(!l||a&&a.toString()!==l.toString())&&Me():(ae.value=e.options,Object.keys(F.value).length||je(),Ve())})),m(v,Ve),{pfo:oe,fo:ve,filteredOptions:ve,hasSelected:ce,multipleLabelText:de,eo:ne,extendedOptions:ne,fg:se,filteredGroups:se,noOptions:pe,noResults:fe,resolving:le,busy:be,offset:ue,select:ye,deselect:Se,remove:Le,selectAll:()=>{"single"!==u.value&&ye(ve.value)},clear:xe,isSelected:we,isDisabled:ke,isMax:qe,getOption:Ee,handleOptionClick:e=>{if(!ke(e))return $&&$.value&&!we(e)&&e.__CREATE__&&(delete(e={...e}).__CREATE__,(e=$.value(e,H))instanceof Promise)?(le.value=!0,void e.then((e=>{le.value=!1,Te(e)}))):void Te(e)},handleGroupClick:e=>{if(!ke(e)&&"single"!==u.value&&V.value){switch(u.value){case"multiple":case"tags":_e(e[j.value])?Se(e[j.value]):ye(e[j.value].filter((e=>-1===F.value.map((e=>e[_.value])).indexOf(e[_.value]))).filter((e=>!e[K.value])).filter(((e,a)=>F.value.length+1+a<=E.value||-1===E.value)))}B.value&&J()}},handleTagRemove:(e,a)=>{0===a.button?Le(e):a.preventDefault()},refreshOptions:e=>{Me(e)},resolveOptions:Me,refreshLabels:Ve}}function T(e,a,l){const{valueProp:t,showOptions:u,searchable:i,groupLabel:r,groups:n,mode:s,groupSelect:o,disabledProp:v}=p(e),c=l.fo,d=l.fg,f=l.handleOptionClick,g=l.handleGroupClick,y=l.search,S=l.pointer,O=l.setPointer,L=l.clearPointer,x=l.multiselect,w=l.isOpen,k=h((()=>c.value.filter((e=>!e[v.value])))),q=h((()=>d.value.filter((e=>!e[v.value])))),T=h((()=>"single"!==s.value&&o.value)),P=h((()=>S.value&&S.value.group)),_=h((()=>V(S.value))),I=h((()=>{const e=P.value?S.value:V(S.value),a=q.value.map((e=>e[r.value])).indexOf(e[r.value]);let l=q.value[a-1];return void 0===l&&(l=C.value),l})),E=h((()=>{let e=q.value.map((e=>e.label)).indexOf(P.value?S.value[r.value]:V(S.value)[r.value])+1;return q.value.length<=e&&(e=0),q.value[e]})),C=h((()=>[...q.value].slice(-1)[0])),B=h((()=>S.value.__VISIBLE__.filter((e=>!e[v.value]))[0])),D=h((()=>{const e=_.value.__VISIBLE__.filter((e=>!e[v.value]));return e[e.map((e=>e[t.value])).indexOf(S.value[t.value])-1]})),R=h((()=>{const e=V(S.value).__VISIBLE__.filter((e=>!e[v.value]));return e[e.map((e=>e[t.value])).indexOf(S.value[t.value])+1]})),A=h((()=>[...I.value.__VISIBLE__.filter((e=>!e[v.value]))].slice(-1)[0])),j=h((()=>[...C.value.__VISIBLE__.filter((e=>!e[v.value]))].slice(-1)[0])),M=()=>{O(k.value[0]||null)},V=e=>q.value.find((a=>-1!==a.__VISIBLE__.map((e=>e[t.value])).indexOf(e[t.value]))),$=()=>{let e=x.value.querySelector("[data-pointed]");if(!e)return;let a=e.parentElement.parentElement;n.value&&(a=P.value?e.parentElement.parentElement.parentElement:e.parentElement.parentElement.parentElement.parentElement),e.offsetTop+e.offsetHeight>a.clientHeight+a.scrollTop&&(a.scrollTop=e.offsetTop+e.offsetHeight-a.clientHeight),e.offsetTop<a.scrollTop&&(a.scrollTop=e.offsetTop)};return m(y,(e=>{i.value&&(e.length&&u.value?M():L())})),m(w,(e=>{if(e){let e=x.value.querySelectorAll("[data-selected]")[0];if(!e)return;let a=e.parentElement.parentElement;b((()=>{a.scrollTop>0||(a.scrollTop=e.offsetTop)}))}})),{pointer:S,canPointGroups:T,isPointed:e=>!(!S.value||!(!e.group&&S.value[t.value]==e[t.value]||void 0!==e.group&&S.value[r.value]==e[r.value]))||void 0,setPointerFirst:M,selectPointer:()=>{S.value&&!0!==S.value[v.value]&&(P.value?g(S.value):f(S.value))},forwardPointer:()=>{if(null===S.value)O((n.value&&T.value?q.value[0]:k.value[0])||null);else if(n.value&&T.value){let e=P.value?B.value:R.value;void 0===e&&(e=E.value),O(e||null)}else{let e=k.value.map((e=>e[t.value])).indexOf(S.value[t.value])+1;k.value.length<=e&&(e=0),O(k.value[e]||null)}b((()=>{$()}))},backwardPointer:()=>{if(null===S.value){let e=k.value[k.value.length-1];n.value&&T.value&&(e=j.value,void 0===e&&(e=C.value)),O(e||null)}else if(n.value&&T.value){let e=P.value?A.value:D.value;void 0===e&&(e=P.value?I.value:_.value),O(e||null)}else{let e=k.value.map((e=>e[t.value])).indexOf(S.value[t.value])-1;e<0&&(e=k.value.length-1),O(k.value[e]||null)}b((()=>{$()}))}}}function P(e,a,l){const{disabled:t}=p(e),u=f().proxy,i=g(!1);return{isOpen:i,open:()=>{i.value||t.value||(i.value=!0,a.emit("open",u))},close:()=>{i.value&&(i.value=!1,a.emit("close",u))}}}function _(e,a,l){const{searchable:t,disabled:u,clearOnBlur:i}=p(e),r=l.input,n=l.open,s=l.close,o=l.clearSearch,v=l.isOpen,c=g(null),d=g(null),f=g(null),m=g(!1),b=g(!1),y=h((()=>t.value||u.value?-1:0)),S=()=>{t.value&&r.value.blur(),d.value.blur()},O=(e=!0)=>{u.value||(m.value=!0,e&&n())},L=()=>{m.value=!1,setTimeout((()=>{m.value||(s(),i.value&&o())}),1)};return{multiselect:c,wrapper:d,tags:f,tabindex:y,isActive:m,mouseClicked:b,blur:S,focus:()=>{t.value&&!u.value&&r.value.focus()},activate:O,deactivate:L,handleFocusIn:e=>{e.target.closest("[data-tags]")&&"INPUT"!==e.target.nodeName||e.target.closest("[data-clear]")||O(b.value)},handleFocusOut:()=>{L()},handleCaretClick:()=>{L(),S()},handleMousedown:e=>{b.value=!0,v.value&&(e.target.isEqualNode(d.value)||e.target.isEqualNode(f.value))?setTimeout((()=>{L()}),0):document.activeElement.isEqualNode(d.value)&&!v.value&&O(),setTimeout((()=>{b.value=!1}),0)}}}function I(e,a,l){const{mode:t,addTagOn:u,openDirection:i,searchable:r,showOptions:n,valueProp:s,groups:o,addOptionOn:v,createTag:c,createOption:d,reverse:g}=p(e),m=f().proxy,b=l.iv,y=l.update,S=l.search,O=l.setPointer,L=l.selectPointer,x=l.backwardPointer,w=l.forwardPointer,k=l.multiselect,q=l.wrapper,T=l.tags,P=l.isOpen,_=l.open,I=l.blur,E=l.fo,C=h((()=>c.value||d.value||!1)),B=h((()=>void 0!==u.value?u.value:void 0!==v.value?v.value:["enter"])),D=()=>{"tags"===t.value&&!n.value&&C.value&&r.value&&!o.value&&O(E.value[E.value.map((e=>e[s.value])).indexOf(S.value)])};return{handleKeydown:e=>{let l,u;switch(a.emit("keydown",e,m),-1!==["ArrowLeft","ArrowRight","Enter"].indexOf(e.key)&&"tags"===t.value&&(l=[...k.value.querySelectorAll("[data-tags] > *")].filter((e=>e!==T.value)),u=l.findIndex((e=>e===document.activeElement))),e.key){case"Backspace":if("single"===t.value)return;if(r.value&&-1===[null,""].indexOf(S.value))return;if(0===b.value.length)return;y([...b.value].slice(0,-1));break;case"Enter":if(e.preventDefault(),229===e.keyCode)return;if(-1!==u&&void 0!==u)return y([...b.value].filter(((e,a)=>a!==u))),void(u===l.length-1&&(l.length-1?l[l.length-2].focus():r.value?T.value.querySelector("input").focus():q.value.focus()));if(-1===B.value.indexOf("enter")&&C.value)return;D(),L();break;case" ":if(!C.value&&!r.value)return e.preventDefault(),D(),void L();if(!C.value)return!1;if(-1===B.value.indexOf("space")&&C.value)return;e.preventDefault(),D(),L();break;case"Tab":case";":case",":if(-1===B.value.indexOf(e.key.toLowerCase())||!C.value)return;D(),L(),e.preventDefault();break;case"Escape":I();break;case"ArrowUp":if(e.preventDefault(),!n.value)return;P.value||_(),x();break;case"ArrowDown":if(e.preventDefault(),!n.value)return;P.value||_(),w();break;case"ArrowLeft":if(r.value&&T.value&&T.value.querySelector("input").selectionStart||e.shiftKey||"tags"!==t.value||!b.value||!b.value.length)return;e.preventDefault(),-1===u?l[l.length-1].focus():u>0&&l[u-1].focus();break;case"ArrowRight":if(-1===u||e.shiftKey||"tags"!==t.value||!b.value||!b.value.length)return;e.preventDefault(),l.length>u+1?l[u+1].focus():r.value?T.value.querySelector("input").focus():r.value||q.value.focus()}},handleKeyup:e=>{a.emit("keyup",e,m)},preparePointer:D}}function E(e,a,l){const{classes:t,disabled:u,openDirection:i,showOptions:r}=p(e),n=l.isOpen,s=l.isPointed,o=l.isSelected,v=l.isDisabled,c=l.isActive,d=l.canPointGroups,f=l.resolving,g=l.fo,m=h((()=>({container:"multiselect",containerDisabled:"is-disabled",containerOpen:"is-open",containerOpenTop:"is-open-top",containerActive:"is-active",wrapper:"multiselect-wrapper",singleLabel:"multiselect-single-label",singleLabelText:"multiselect-single-label-text",multipleLabel:"multiselect-multiple-label",search:"multiselect-search",tags:"multiselect-tags",tag:"multiselect-tag",tagDisabled:"is-disabled",tagRemove:"multiselect-tag-remove",tagRemoveIcon:"multiselect-tag-remove-icon",tagsSearchWrapper:"multiselect-tags-search-wrapper",tagsSearch:"multiselect-tags-search",tagsSearchCopy:"multiselect-tags-search-copy",placeholder:"multiselect-placeholder",caret:"multiselect-caret",caretOpen:"is-open",clear:"multiselect-clear",clearIcon:"multiselect-clear-icon",spinner:"multiselect-spinner",inifinite:"multiselect-inifite",inifiniteSpinner:"multiselect-inifite-spinner",dropdown:"multiselect-dropdown",dropdownTop:"is-top",dropdownHidden:"is-hidden",options:"multiselect-options",optionsTop:"is-top",group:"multiselect-group",groupLabel:"multiselect-group-label",groupLabelPointable:"is-pointable",groupLabelPointed:"is-pointed",groupLabelSelected:"is-selected",groupLabelDisabled:"is-disabled",groupLabelSelectedPointed:"is-selected is-pointed",groupLabelSelectedDisabled:"is-selected is-disabled",groupOptions:"multiselect-group-options",option:"multiselect-option",optionPointed:"is-pointed",optionSelected:"is-selected",optionDisabled:"is-disabled",optionSelectedPointed:"is-selected is-pointed",optionSelectedDisabled:"is-selected is-disabled",noOptions:"multiselect-no-options",noResults:"multiselect-no-results",fakeInput:"multiselect-fake-input",assist:"multiselect-assistive-text",spacer:"multiselect-spacer",...t.value}))),b=h((()=>!!(n.value&&r.value&&(!f.value||f.value&&g.value.length))));return{classList:h((()=>{const e=m.value;return{container:[e.container].concat(u.value?e.containerDisabled:[]).concat(b.value&&"top"===i.value?e.containerOpenTop:[]).concat(b.value&&"top"!==i.value?e.containerOpen:[]).concat(c.value?e.containerActive:[]),wrapper:e.wrapper,spacer:e.spacer,singleLabel:e.singleLabel,singleLabelText:e.singleLabelText,multipleLabel:e.multipleLabel,search:e.search,tags:e.tags,tag:[e.tag].concat(u.value?e.tagDisabled:[]),tagRemove:e.tagRemove,tagRemoveIcon:e.tagRemoveIcon,tagsSearchWrapper:e.tagsSearchWrapper,tagsSearch:e.tagsSearch,tagsSearchCopy:e.tagsSearchCopy,placeholder:e.placeholder,caret:[e.caret].concat(n.value?e.caretOpen:[]),clear:e.clear,clearIcon:e.clearIcon,spinner:e.spinner,inifinite:e.inifinite,inifiniteSpinner:e.inifiniteSpinner,dropdown:[e.dropdown].concat("top"===i.value?e.dropdownTop:[]).concat(n.value&&r.value&&b.value?[]:e.dropdownHidden),options:[e.options].concat("top"===i.value?e.optionsTop:[]),group:e.group,groupLabel:a=>{let l=[e.groupLabel];return s(a)?l.push(o(a)?e.groupLabelSelectedPointed:e.groupLabelPointed):o(a)&&d.value?l.push(v(a)?e.groupLabelSelectedDisabled:e.groupLabelSelected):v(a)&&l.push(e.groupLabelDisabled),d.value&&l.push(e.groupLabelPointable),l},groupOptions:e.groupOptions,option:(a,l)=>{let t=[e.option];return s(a)?t.push(o(a)?e.optionSelectedPointed:e.optionPointed):o(a)?t.push(v(a)?e.optionSelectedDisabled:e.optionSelected):(v(a)||l&&v(l))&&t.push(e.optionDisabled),t},noOptions:e.noOptions,noResults:e.noResults,assist:e.assist,fakeInput:e.fakeInput}})),showDropdown:b}}function C(e,a,l){const{limit:t,infinite:u}=p(e),i=l.isOpen,r=l.offset,n=l.search,s=l.pfo,o=l.eo,v=g(null),c=g(null),d=h((()=>r.value<s.value.length)),f=e=>{const{isIntersecting:a,target:l}=e[0];if(a){const e=l.offsetParent,a=e.scrollTop;r.value+=-1==t.value?10:t.value,b((()=>{e.scrollTop=a}))}},S=()=>{i.value&&r.value<s.value.length?v.value.observe(c.value):!i.value&&v.value&&v.value.disconnect()};return m(i,(()=>{u.value&&S()})),m(n,(()=>{u.value&&(r.value=t.value,S())}),{flush:"post"}),m(o,(()=>{u.value&&S()}),{immediate:!1,flush:"post"}),y((()=>{window&&window.IntersectionObserver&&(v.value=new IntersectionObserver(f))})),{hasMore:d,infiniteLoader:c}}function B(e,a,l){const{placeholder:t,id:u,valueProp:i,label:r,mode:n,groupLabel:s,aria:o,searchable:v}=p(e),c=l.pointer,d=l.iv,f=l.hasSelected,m=l.multipleLabelText,b=g(null),S=h((()=>{let e=[];return u&&u.value&&e.push(u.value),e.push("assist"),e.join("-")})),O=h((()=>{let e=[];return u&&u.value&&e.push(u.value),e.push("multiselect-options"),e.join("-")})),L=h((()=>{let e=[];if(u&&u.value&&e.push(u.value),c.value)return e.push(c.value.group?"multiselect-group":"multiselect-option"),e.push(c.value.group?c.value.index:c.value[i.value]),e.join("-")})),x=h((()=>t.value)),w=h((()=>"single"!==n.value)),k=h((()=>{let e="";return"single"===n.value&&f.value&&(e+=d.value[r.value]),"multiple"===n.value&&f.value&&(e+=m.value),"tags"===n.value&&f.value&&(e+=d.value.map((e=>e[r.value])).join(", ")),e})),q=h((()=>{let e={...o.value};return v.value&&(e["aria-labelledby"]=e["aria-labelledby"]?`${S.value} ${e["aria-labelledby"]}`:S.value,k.value&&e["aria-label"]&&(e["aria-label"]=`${k.value}, ${e["aria-label"]}`)),e}));return y((()=>{if(u&&u.value&&document&&document.querySelector){let e=document.querySelector(`[for="${u.value}"]`);b.value=e?e.innerText:null}})),{arias:q,ariaLabel:k,ariaAssist:S,ariaControls:O,ariaPlaceholder:x,ariaMultiselectable:w,ariaActiveDescendant:L,ariaOptionId:e=>{let a=[];return u&&u.value&&a.push(u.value),a.push("multiselect-option"),a.push(e[i.value]),a.join("-")},ariaOptionLabel:e=>{let a=[];return a.push(e[r.value]),a.join(" ")},ariaGroupId:e=>{let a=[];return u&&u.value&&a.push(u.value),a.push("multiselect-group"),a.push(e.index),a.join("-")},ariaGroupLabel:e=>{let a=[];return a.push(e[s.value]),a.join(" ")},ariaTagLabel:e=>`${e} ❎`}}var D={name:"Multiselect",emits:["paste","open","close","select","deselect","input","search-change","tag","option","update:modelValue","change","clear","keydown","keyup","max"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:void 0},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:void 0},createOption:{type:Boolean,required:!1,default:void 0},appendNewTag:{type:Boolean,required:!1,default:void 0},appendNewOption:{type:Boolean,required:!1,default:void 0},addTagOn:{type:Array,required:!1,default:void 0},addOptionOn:{type:Array,required:!1,default:void 0},caret:{type:Boolean,required:!1,default:!0},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},canClear:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1},classes:{type:Object,required:!1,default:()=>({})},strict:{type:Boolean,required:!1,default:!0},closeOnSelect:{type:Boolean,required:!1,default:!0},autocomplete:{type:String,required:!1},groups:{type:Boolean,required:!1,default:!1},groupLabel:{type:String,required:!1,default:"label"},groupOptions:{type:String,required:!1,default:"options"},groupHideEmpty:{type:Boolean,required:!1,default:!1},groupSelect:{type:Boolean,required:!1,default:!0},inputType:{type:String,required:!1,default:"text"},attrs:{required:!1,type:Object,default:()=>({})},onCreate:{required:!1,type:Function},disabledProp:{type:String,required:!1,default:"disabled"},searchStart:{type:Boolean,required:!1,default:!1},reverse:{type:Boolean,required:!1,default:!1},regex:{type:[Object,String,RegExp],required:!1,default:void 0},rtl:{type:Boolean,required:!1,default:!1},infinite:{type:Boolean,required:!1,default:!1},aria:{required:!1,type:Object,default:()=>({})},clearOnBlur:{required:!1,type:Boolean,default:!0}},setup:(e,a)=>function(e,a,l,t={}){return l.forEach((l=>{l&&(t={...t,...l(e,a,t)})})),t}(e,a,[L,w,P,x,O,_,q,C,T,I,E,B])},R=["id","dir"],A=["tabindex","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable","role"],j=["type","modelValue","value","autocomplete","id","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable"],M=["onKeyup","aria-label"],V=["onClick"],$=["type","modelValue","value","id","autocomplete","aria-controls","aria-placeholder","aria-expanded","aria-activedescendant","aria-multiselectable"],K=["innerHTML"],N=["id"],H=["id","aria-label","aria-selected"],F=["data-pointed","onMouseenter","onClick"],G=["innerHTML"],W=["aria-label"],U=["data-pointed","data-selected","onMouseenter","onClick","id","aria-selected","aria-label"],z=["data-pointed","data-selected","onMouseenter","onClick","id","aria-selected","aria-label"],X=["innerHTML"],Y=["innerHTML"],Z=["value"],J=["name","value"],Q=["name","value"],ee=["id"];D.render=function(p,f,g,h,m,b){return e(),a("div",{ref:"multiselect",class:r(p.classList.container),id:g.searchable?void 0:g.id,dir:g.rtl?"rtl":void 0,onFocusin:f[10]||(f[10]=(...e)=>p.handleFocusIn&&p.handleFocusIn(...e)),onFocusout:f[11]||(f[11]=(...e)=>p.handleFocusOut&&p.handleFocusOut(...e)),onKeyup:f[12]||(f[12]=(...e)=>p.handleKeyup&&p.handleKeyup(...e)),onKeydown:f[13]||(f[13]=(...e)=>p.handleKeydown&&p.handleKeydown(...e))},[l("div",u({class:p.classList.wrapper,onMousedown:f[9]||(f[9]=(...e)=>p.handleMousedown&&p.handleMousedown(...e)),ref:"wrapper",tabindex:p.tabindex,"aria-controls":g.searchable?void 0:p.ariaControls,"aria-placeholder":g.searchable?void 0:p.ariaPlaceholder,"aria-expanded":g.searchable?void 0:p.isOpen,"aria-activedescendant":g.searchable?void 0:p.ariaActiveDescendant,"aria-multiselectable":g.searchable?void 0:p.ariaMultiselectable,role:g.searchable?void 0:"combobox"},g.searchable?{}:p.arias),[t(" Search "),"tags"!==g.mode&&g.searchable&&!g.disabled?(e(),a("input",u({key:0,type:g.inputType,modelValue:p.search,value:p.search,class:p.classList.search,autocomplete:g.autocomplete,id:g.searchable?g.id:void 0,onInput:f[0]||(f[0]=(...e)=>p.handleSearchInput&&p.handleSearchInput(...e)),onKeypress:f[1]||(f[1]=(...e)=>p.handleKeypress&&p.handleKeypress(...e)),onPaste:f[2]||(f[2]=i(((...e)=>p.handlePaste&&p.handlePaste(...e)),["stop"])),ref:"input","aria-controls":p.ariaControls,"aria-placeholder":p.ariaPlaceholder,"aria-expanded":p.isOpen,"aria-activedescendant":p.ariaActiveDescendant,"aria-multiselectable":p.ariaMultiselectable,role:"combobox"},{...g.attrs,...p.arias}),null,16,j)):t("v-if",!0),t(" Tags (with search) "),"tags"==g.mode?(e(),a("div",{key:1,class:r(p.classList.tags),"data-tags":""},[(e(!0),a(n,null,s(p.iv,((u,n,s)=>o(p.$slots,"tag",{option:u,handleTagRemove:p.handleTagRemove,disabled:g.disabled},(()=>[(e(),a("span",{class:r(p.classList.tag),tabindex:"-1",onKeyup:v((e=>p.handleTagRemove(u,e)),["enter"]),key:s,"aria-label":p.ariaTagLabel(u[g.label])},[c(d(u[g.label])+" ",1),g.disabled?t("v-if",!0):(e(),a("span",{key:0,class:r(p.classList.tagRemove),onClick:i((e=>p.handleTagRemove(u,e)),["stop"])},[l("span",{class:r(p.classList.tagRemoveIcon)},null,2)],10,V))],42,M))])))),256)),l("div",{class:r(p.classList.tagsSearchWrapper),ref:"tags"},[t(" Used for measuring search width "),l("span",{class:r(p.classList.tagsSearchCopy)},d(p.search),3),t(" Actual search input "),g.searchable&&!g.disabled?(e(),a("input",u({key:0,type:g.inputType,modelValue:p.search,value:p.search,class:p.classList.tagsSearch,id:g.searchable?g.id:void 0,autocomplete:g.autocomplete,onInput:f[3]||(f[3]=(...e)=>p.handleSearchInput&&p.handleSearchInput(...e)),onKeypress:f[4]||(f[4]=(...e)=>p.handleKeypress&&p.handleKeypress(...e)),onPaste:f[5]||(f[5]=i(((...e)=>p.handlePaste&&p.handlePaste(...e)),["stop"])),ref:"input","aria-controls":p.ariaControls,"aria-placeholder":p.ariaPlaceholder,"aria-expanded":p.isOpen,"aria-activedescendant":p.ariaActiveDescendant,"aria-multiselectable":p.ariaMultiselectable,role:"combobox"},{...g.attrs,...p.arias}),null,16,$)):t("v-if",!0)],2)],2)):t("v-if",!0),t(" Single label "),"single"==g.mode&&p.hasSelected&&!p.search&&p.iv?o(p.$slots,"singlelabel",{key:2,value:p.iv},(()=>[l("div",{class:r(p.classList.singleLabel)},[l("span",{class:r(p.classList.singleLabelText)},d(p.iv[g.label]),3)],2)])):t("v-if",!0),t(" Multiple label "),"multiple"==g.mode&&p.hasSelected&&!p.search?o(p.$slots,"multiplelabel",{key:3,values:p.iv},(()=>[l("div",{class:r(p.classList.multipleLabel),innerHTML:p.multipleLabelText},null,10,K)])):t("v-if",!0),t(" Placeholder "),!g.placeholder||p.hasSelected||p.search?t("v-if",!0):o(p.$slots,"placeholder",{key:4},(()=>[l("div",{class:r(p.classList.placeholder),"aria-hidden":"true"},d(g.placeholder),3)])),t(" Spinner "),g.loading||p.resolving?o(p.$slots,"spinner",{key:5},(()=>[l("span",{class:r(p.classList.spinner),"aria-hidden":"true"},null,2)])):t("v-if",!0),t(" Clear "),p.hasSelected&&!g.disabled&&g.canClear&&!p.busy?o(p.$slots,"clear",{key:6,clear:p.clear},(()=>[l("span",{"aria-hidden":"true",tabindex:"0",role:"button","data-clear":"","aria-roledescription":"❎",class:r(p.classList.clear),onClick:f[6]||(f[6]=(...e)=>p.clear&&p.clear(...e)),onKeyup:f[7]||(f[7]=v(((...e)=>p.clear&&p.clear(...e)),["enter"]))},[l("span",{class:r(p.classList.clearIcon)},null,2)],34)])):t("v-if",!0),t(" Caret "),g.caret&&g.showOptions?o(p.$slots,"caret",{key:7},(()=>[l("span",{class:r(p.classList.caret),onClick:f[8]||(f[8]=(...e)=>p.handleCaretClick&&p.handleCaretClick(...e)),"aria-hidden":"true"},null,2)])):t("v-if",!0)],16,A),t(" Options "),l("div",{class:r(p.classList.dropdown),tabindex:"-1"},[o(p.$slots,"beforelist",{options:p.fo}),l("ul",{class:r(p.classList.options),id:p.ariaControls,role:"listbox"},[g.groups?(e(!0),a(n,{key:0},s(p.fg,((t,u,i)=>(e(),a("li",{class:r(p.classList.group),key:i,id:p.ariaGroupId(t),"aria-label":p.ariaGroupLabel(t),"aria-selected":p.isSelected(t),role:"option"},[l("div",{class:r(p.classList.groupLabel(t)),"data-pointed":p.isPointed(t),onMouseenter:e=>p.setPointer(t,u),onClick:e=>p.handleGroupClick(t)},[o(p.$slots,"grouplabel",{group:t,isSelected:p.isSelected,isPointed:p.isPointed},(()=>[l("span",{innerHTML:t[g.groupLabel]},null,8,G)]))],42,F),l("ul",{class:r(p.classList.groupOptions),"aria-label":p.ariaGroupLabel(t),role:"group"},[(e(!0),a(n,null,s(t.__VISIBLE__,((u,i,n)=>(e(),a("li",{class:r(p.classList.option(u,t)),"data-pointed":p.isPointed(u),"data-selected":p.isSelected(u)||void 0,key:n,onMouseenter:e=>p.setPointer(u),onClick:e=>p.handleOptionClick(u),id:p.ariaOptionId(u),"aria-selected":p.isSelected(u),"aria-label":p.ariaOptionLabel(u),role:"option"},[o(p.$slots,"option",{option:u,isSelected:p.isSelected,isPointed:p.isPointed,search:p.search},(()=>[l("span",null,d(u[g.label]),1)]))],42,U)))),128))],10,W)],10,H)))),128)):(e(!0),a(n,{key:1},s(p.fo,((t,u,i)=>(e(),a("li",{class:r(p.classList.option(t)),"data-pointed":p.isPointed(t),"data-selected":p.isSelected(t)||void 0,key:i,onMouseenter:e=>p.setPointer(t),onClick:e=>p.handleOptionClick(t),id:p.ariaOptionId(t),"aria-selected":p.isSelected(t),"aria-label":p.ariaOptionLabel(t),role:"option"},[o(p.$slots,"option",{option:t,isSelected:p.isSelected,isPointed:p.isPointed,search:p.search},(()=>[l("span",null,d(t[g.label]),1)]))],42,z)))),128))],10,N),p.noOptions?o(p.$slots,"nooptions",{key:0},(()=>[l("div",{class:r(p.classList.noOptions),innerHTML:g.noOptionsText},null,10,X)])):t("v-if",!0),p.noResults?o(p.$slots,"noresults",{key:1},(()=>[l("div",{class:r(p.classList.noResults),innerHTML:g.noResultsText},null,10,Y)])):t("v-if",!0),g.infinite&&p.hasMore?(e(),a("div",{key:2,class:r(p.classList.inifinite),ref:"infiniteLoader"},[o(p.$slots,"infinite",{},(()=>[l("span",{class:r(p.classList.inifiniteSpinner)},null,2)]))],2)):t("v-if",!0),o(p.$slots,"afterlist",{options:p.fo})],2),t(" Hacky input element to show HTML5 required warning "),g.required?(e(),a("input",{key:0,class:r(p.classList.fakeInput),tabindex:"-1",value:p.textValue,required:""},null,10,Z)):t("v-if",!0),t(" Native input support "),g.nativeSupport?(e(),a(n,{key:1},["single"==g.mode?(e(),a("input",{key:0,type:"hidden",name:g.name,value:void 0!==p.plainValue?p.plainValue:""},null,8,J)):(e(!0),a(n,{key:1},s(p.plainValue,((l,t)=>(e(),a("input",{type:"hidden",name:`${g.name}[]`,value:l,key:t},null,8,Q)))),128))],64)):t("v-if",!0),t(" Screen reader assistive text "),g.searchable&&p.hasSelected?(e(),a("div",{key:2,class:r(p.classList.assist),id:p.ariaAssist,"aria-hidden":"true"},d(p.ariaLabel),11,ee)):t("v-if",!0),t(" Create height for empty input "),l("div",{class:r(p.classList.spacer)},null,2)],42,R)},D.__file="src/Multiselect.vue";export{D as default};
