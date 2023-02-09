import{b as e,s as a,v as s,x as l,y as n,u as i,c as o,B as t,a0 as r,Z as c,w as d,C as u,a1 as p,a4 as v,i as g,H as m,D as f,A as h,E as b,a as y,h as k,T as _,F as w,R as x,K as C,r as O,z as B,a5 as K,a6 as V,a3 as $,a7 as I,G as S}from"./chunk-BGPNDDXN-fe77eba9.js";import{u as j}from"./viewWrapper-da3b5ec5.js";import{_ as P}from"./_plugin-vue_export-helper-1b428a4d.js";import{u as A}from"./vue-i18n-6dab7f86.js";import{d as D,u as L,e as M,o as E}from"./darkmode-5af2451c.js";import{_ as N}from"./AnimatedLogo.vue_vue_type_script_setup_true_lang-9c70eb43.js";import{b as T,_ as R}from"./VButton.vue_vue_type_style_index_0_lang-e550d92e.js";import{_ as U}from"./VAvatar.vue_vue_type_style_index_0_lang-ed40ac8e.js";import{o as z}from"./via-placeholder-24645670.js";const W=e({__name:"VViewWrapper",props:{topNav:{type:Boolean},full:{type:Boolean}},setup(e){const o=e,t=j();return(e,r)=>(a(),s("div",{class:n(["view-wrapper",[o.topNav&&"has-top-nav",o.full&&"view-wrapper-full",i(t).isPushed&&"is-pushed-full",i(t).isPushedBlock&&"is-pushed-block"]])},[l(e.$slots,"default")],2))}}),X={class:"page-content-wrapper"};const G=P({},[["render",function(e,n){return a(),s("div",X,[l(e.$slots,"default")])}]]),H={class:"page-content"};const F=P({},[["render",function(e,n){return a(),s("div",H,[l(e.$slots,"default")])}]]),J=D("panels",(()=>{const e=L("active-panel","none");return{active:e,setActive:function(a){e.value=a},close:function(){e.value="none"}}})),Z={class:"toolbar ml-auto"},q={class:"toolbar-link"},Q=["checked"],Y=t("span",null,null,-1),ee=["src"],ae=e({__name:"Toolbar",setup(e){const n=M(),{locale:d}=A(),u=J(),p=o((()=>{switch(d.value){case"fr":return"/images/icons/flags/france.svg";case"es":return"/images/icons/flags/spain.svg";case"es-MX":return"/images/icons/flags/mexico.svg";case"de":return"/images/icons/flags/germany.svg";case"zh-CN":return"/images/icons/flags/china.svg";default:return"/images/icons/flags/united-states-of-america.svg"}}));return(e,o)=>(a(),s("div",Z,[t("div",q,[t("label",{tabindex:"0",class:"dark-mode ml-auto",onKeydown:o[1]||(o[1]=r(c((e=>e.target.click()),["prevent"]),["space"]))},[t("input",{"data-cy":"dark-mode-toggle",type:"checkbox",checked:!i(n).isDark,onChange:o[0]||(o[0]=(...e)=>i(n).onChange&&i(n).onChange(...e))},null,40,Q),Y],32)]),t("a",{tabindex:"0",class:"toolbar-link right-panel-trigger",onKeydown:o[2]||(o[2]=r(c((e=>i(u).setActive("languages")),["prevent"]),["space"])),onClick:o[3]||(o[3]=e=>i(u).setActive("languages"))},[t("img",{src:i(p),alt:""},null,8,ee)],32),l(e.$slots,"default")]))}}),se={class:"right-panel"},le={class:"right-panel-head"},ne=[t("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1)],ie={class:"right-panel-body has-slimscroll"},oe={class:"languages-boxes"},te={class:"language-box"},re={class:"language-option"},ce=t("div",{class:"language-option-inner"},[t("img",{src:"/lynx-frontend-vue/images/icons/flags/united-states-of-america.svg",alt:""}),t("div",{class:"indicator"},[t("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),de={class:"language-box"},ue={class:"language-option"},pe=t("div",{class:"language-option-inner"},[t("img",{src:"/lynx-frontend-vue/images/icons/flags/france.svg",alt:""}),t("div",{class:"indicator"},[t("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),ve={class:"language-box"},ge={class:"language-option"},me=t("div",{class:"language-option-inner"},[t("img",{src:"/lynx-frontend-vue/images/icons/flags/spain.svg",alt:""}),t("div",{class:"indicator"},[t("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),fe={class:"language-box"},he={class:"language-option"},be=t("div",{class:"language-option-inner"},[t("img",{src:"/lynx-frontend-vue/images/icons/flags/germany.svg",alt:""}),t("div",{class:"indicator"},[t("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),ye={class:"language-box"},ke={class:"language-option"},_e=t("div",{class:"language-option-inner"},[t("img",{src:"/lynx-frontend-vue/images/icons/flags/mexico.svg",alt:""}),t("div",{class:"indicator"},[t("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),we={class:"language-box"},xe={class:"language-option"},Ce=t("div",{class:"language-option-inner"},[t("img",{src:"/lynx-frontend-vue/images/icons/flags/china.svg",alt:""}),t("div",{class:"indicator"},[t("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})])],-1),Oe=t("div",{class:"img-wrap has-text-centered"},[t("img",{class:"light-image",src:"/lynx-frontend-vue/assets/languages-d0ee3ed8.svg",alt:""}),t("img",{class:"dark-image",src:"/lynx-frontend-vue/assets/languages-dark-0bc1fd2d.svg",alt:""})],-1),Be=e({__name:"LanguagesPanel",setup(e){const l=J(),{locale:o,t:m}=A(),f=L("locale","en");return d(o,(()=>{f.value=o.value})),(e,d)=>(a(),s("div",{id:"languages-panel",class:n([["languages"===i(l).active&&"is-active"],"right-panel-wrapper is-languages"])},[t("div",{class:"panel-overlay",tabindex:"0",onKeydown:d[0]||(d[0]=r(c((e=>i(l).close()),["prevent"]),["space"])),onClick:d[1]||(d[1]=e=>i(l).close())},null,32),t("div",se,[t("div",le,[t("h3",null,u(i(m)("select-language")),1),t("a",{class:"close-panel",tabindex:"0",onKeydown:d[2]||(d[2]=r(c((e=>i(l).close()),["prevent"]),["space"])),onClick:d[3]||(d[3]=e=>i(l).close())},ne,32)]),t("div",ie,[t("div",oe,[t("div",te,[t("div",re,[p(t("input",{"onUpdate:modelValue":d[4]||(d[4]=e=>g(o)?o.value=e:null),type:"radio",name:"language_selection",value:"en",checked:""},null,512),[[v,i(o)]]),ce])]),t("div",de,[t("div",ue,[p(t("input",{"onUpdate:modelValue":d[5]||(d[5]=e=>g(o)?o.value=e:null),type:"radio",name:"language_selection",value:"fr"},null,512),[[v,i(o)]]),pe])]),t("div",ve,[t("div",ge,[p(t("input",{"onUpdate:modelValue":d[6]||(d[6]=e=>g(o)?o.value=e:null),type:"radio",name:"language_selection",value:"es"},null,512),[[v,i(o)]]),me])]),t("div",fe,[t("div",he,[p(t("input",{"onUpdate:modelValue":d[7]||(d[7]=e=>g(o)?o.value=e:null),type:"radio",name:"language_selection",value:"de"},null,512),[[v,i(o)]]),be])]),t("div",ye,[t("div",ke,[p(t("input",{"onUpdate:modelValue":d[8]||(d[8]=e=>g(o)?o.value=e:null),type:"radio",name:"language_selection",value:"es-MX"},null,512),[[v,i(o)]]),_e])]),t("div",we,[t("div",xe,[p(t("input",{"onUpdate:modelValue":d[9]||(d[9]=e=>g(o)?o.value=e:null),type:"radio",name:"language_selection",value:"zh-CN"},null,512),[[v,i(o)]]),Ce])])]),Oe])])],2))}}),Ke={class:"sidebar-panel is-generic"},Ve={class:"subpanel-header"},$e=t("h3",{class:"no-mb"},"Courses",-1),Ie=[t("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1)],Se={class:"inner","data-simplebar":""},je=t("i",{"aria-hidden":"true",class:"iconify sidebar-svg p","data-icon":"fluent-mdl2:publish-course"},null,-1),Pe=e({__name:"DashboardsSubsidebar",emits:["close"],setup:(e,{emit:l})=>(e,n)=>{const i=m("RouterLink");return a(),s("div",Ke,[t("div",Ve,[$e,t("div",{class:"panel-close",tabindex:"0",onKeydown:n[0]||(n[0]=r(c((e=>l("close")),["prevent"]),["space"])),onClick:n[1]||(n[1]=e=>l("close"))},Ie,32)]),t("div",Se,[t("ul",null,[t("li",null,[f(i,{to:"app"},{default:h((()=>[je,b(" Courses ")])),_:1})])])])])}}),Ae={class:"sidebar-brand"},De={class:"sidebar-inner"},Le=t("div",{class:"naver"},null,-1),Me={class:"icon-menu has-slimscroll"},Ee={class:"bottom-menu"},Ne=e({__name:"Sidebar",props:{theme:{default:"default"},isOpen:{type:Boolean}},setup(e){const r=e,c=o((()=>{switch(r.theme){case"color":return"is-colored";case"labels":return"has-labels";case"labels-hover":return"has-labels has-hover-labels";case"float":return r.isOpen?"is-float is-bordered":"is-float";case"curved":return r.isOpen?"":"is-curved";case"color-curved":return r.isOpen?"is-colored":"is-colored is-curved";default:return""}}));return(e,o)=>{const r=N,d=m("RouterLink");return a(),s("div",{class:n(["main-sidebar",[i(c)]])},[t("div",Ae,[f(d,{to:"/"},{default:h((()=>[f(r,{width:"36px"})])),_:1})]),t("div",De,[Le,t("ul",Me,[l(e.$slots,"links")]),t("ul",Ee,[l(e.$slots,"bottom-links")])])],2)}}}),Te=P(e({props:{open:{type:[Boolean,String],default:void 0},collapseId:{type:String,default:void 0}},emits:["update:open"],setup(e,{slots:a,emit:s}){var l;const n=T(),o=y(!1),t=(null==(l=a.default)?void 0:l.call(a))??[],r=n.name;t.forEach((e=>{var a,s;(null==(s=null==(a=e.props)?void 0:a.to)?void 0:s.name)&&r===e.props.to.name&&(o.value=!0)}));const c=y(Boolean(o.value||"string"==typeof e.collapseId&&e.open===e.collapseId||void 0===e.collapseId&&!0===e.open));function u(){"string"==typeof e.collapseId?e.collapseId===e.open?s("update:open"):s("update:open",e.collapseId):c.value=!c.value}return d((()=>e.open),(a=>{c.value=Boolean("string"==typeof e.collapseId&&i(a)===e.collapseId||void 0===e.collapseId&&!0===i(a))})),()=>{var e,s;const l=null==(e=a.header)?void 0:e.call(a),n=((null==(s=a.default)?void 0:s.call(a))??[]).map((e=>k("li",{},e))),i=k("a",{tabindex:0,class:"parent-link",onClick:e=>{e.preventDefault(),u()},onKeydown(e){"Space"===e.code&&(e.preventDefault(),e.stopPropagation(),u())}},l),o=k("div",{class:"collapse-wrap"},i),t=c.value?k("ul",{},n):void 0;return k("li",{class:["collapse-links has-children",c.value&&"active"]},[o,k(_,{name:"collapse-links-transition",mode:"out-in",class:"collapse-content"},{default:()=>t})])}}}),[["__scopeId","data-v-1cdf2104"]]),Re={},Ue={class:"mobile-subsidebar"},ze={class:"inner"},We=t("div",{class:"sidebar-title"},[t("h3",null,"Dashboards")],-1),Xe={class:"submenu","data-simplebar":""},Ge=t("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),He=t("i",{"aria-hidden":"true",class:"lnil lnil-home"},null,-1),Fe=t("span",null,"Home",-1);const Je=P(Re,[["render",function(e,l){const n=m("RouterLink"),i=Te;return a(),s("div",Ue,[t("div",ze,[We,t("ul",Xe,[f(i,null,{header:h((()=>[b(" Personal "),Ge])),default:h((()=>[f(n,{to:"app",class:"is-submenu"},{default:h((()=>[He,Fe])),_:1})])),_:1})])])])}]]),Ze={class:"inner"},qe={class:"icon-side-menu"},Qe=t("li",null,[t("a",{"aria-label":"Back to homepage",href:"/"},[t("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:activity"})])],-1),Ye={class:"bottom-icon-side-menu"},ea=e({__name:"MobileSidebar",props:{isOpen:{type:Boolean}},emits:["toggle"],setup(e,{emit:i}){const o=e;return(e,d)=>(a(),s(x,null,[t("div",{class:n([[o.isOpen&&"is-active"],"mobile-main-sidebar"])},[t("div",Ze,[t("ul",qe,[l(e.$slots,"links",{},(()=>[Qe]))]),t("ul",Ye,[l(e.$slots,"bottom-links")])])],2),o.isOpen?(a(),s("div",{key:0,class:"mobile-overlay",tabindex:"0",onKeydown:d[0]||(d[0]=r(c((e=>i("toggle")),["prevent"]),["space"])),onClick:d[1]||(d[1]=e=>i("toggle"))},null,32)):w("",!0)],64))}}),aa={class:"navbar mobile-navbar is-hidden-desktop is-hidden-tablet","aria-label":"main navigation"},sa={class:"container"},la={class:"navbar-brand"},na={class:"brand-start"},ia=[t("span",null,null,-1),t("span",null,null,-1),t("span",null,null,-1)],oa=e({__name:"MobileNavbar",props:{isOpen:{type:Boolean}},emits:["toggle"],setup(e,{emit:i}){const o=e;return(e,d)=>(a(),s("nav",aa,[t("div",sa,[t("div",la,[t("div",na,[t("div",{class:n(["navbar-burger",[o.isOpen&&"is-active"]]),tabindex:"0",onKeydown:d[0]||(d[0]=r(c((e=>i("toggle")),["prevent"]),["space"])),onClick:d[1]||(d[1]=e=>i("toggle"))},ia,34)]),l(e.$slots,"brand")])])]))}}),ta=["data-icon"],ra=e({__name:"VIcon",props:{icon:null},setup(e){const l=e,t=o((()=>l.icon&&-1!==l.icon.indexOf(":")));return(e,o)=>(a(),s("span",{key:l.icon},[i(t)?(a(),s("i",{key:0,"aria-hidden":"true",class:"iconify","data-icon":l.icon},null,8,ta)):(a(),s("i",{key:1,"aria-hidden":"true",class:n(l.icon)},null,2))]))}});function ca(e,a={clickOutside:!0}){const s=y(!1);a.clickOutside&&E(e,(()=>{s.value=!1}));return C((()=>{e.value&&(s.value?e.value.classList.add("is-active"):e.value.classList.remove("is-active"))})),O({isOpen:s,open:()=>{s.value=!0},close:()=>{s.value=!1},toggle:()=>{s.value=!s.value}})}const da={key:0},ua={class:"dropdown-menu",role:"menu"},pa=e({__name:"VDropdown",props:{title:{default:void 0},color:{default:void 0},icon:{default:void 0},up:{type:Boolean},right:{type:Boolean},modern:{type:Boolean},spaced:{type:Boolean},options:{default:void 0},classes:{default:void 0}},setup(e,{expose:o}){const d=e,p=y(),v=ca(p,d.options);return o({...v}),(e,o)=>{var g,m,h,b;const y=ra;return a(),s("div",{ref_key:"dropdownElement",ref:p,class:n([[d.right&&"is-right",d.up&&"is-up",d.icon&&"is-dots",d.modern&&"is-modern",d.spaced&&"is-spaced",..."string"==typeof(null==(g=d.classes)?void 0:g.wrapper)?[null==(m=d.classes)?void 0:m.wrapper]:(null==(h=d.classes)?void 0:h.wrapper)??""],"dropdown"])},[l(e.$slots,"button",K(V(i(v))),(()=>[d.icon?(a(),s("a",{key:0,tabindex:"0",class:"is-trigger dropdown-trigger","aria-label":"View more actions",onKeydown:o[0]||(o[0]=r(c(((...e)=>i(v).toggle&&i(v).toggle(...e)),["prevent"]),["space"])),onClick:o[1]||(o[1]=(...e)=>i(v).toggle&&i(v).toggle(...e))},[f(y,{icon:d.icon},null,8,["icon"])],32)):(a(),s("a",{key:1,tabindex:"0",class:n(["is-trigger button dropdown-trigger",[d.color&&`is-${d.color}`]]),onKeydown:o[2]||(o[2]=r(c(((...e)=>i(v).toggle&&i(v).toggle(...e)),["prevent"]),["space"])),onClick:o[3]||(o[3]=(...e)=>i(v).toggle&&i(v).toggle(...e))},[d.title?(a(),s("span",da,u(d.title),1)):w("",!0),t("span",{class:n([!d.modern&&"base-caret",d.modern&&"base-caret"])},[i(v).isOpen?(a(),B(y,{key:1,icon:"fa:angle-up"})):(a(),B(y,{key:0,icon:"fa:angle-down"}))],2)],34))])),t("div",ua,[t("div",{class:n(["dropdown-content",null==(b=d.classes)?void 0:b.content])},[l(e.$slots,"content",K(V(i(v))))],2)])],2)}}}),va={},ga=["onKeydown","onClick"],ma={class:"dropdown-head"},fa=t("div",{class:"meta"},[t("span",null,"Erik Kovalsky"),t("span",null,"Product Manager")],-1),ha=t("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[t("div",{class:"icon"},[t("i",{"aria-hidden":"true",class:"lnil lnil-user-alt"})]),t("div",{class:"meta"},[t("span",null,"Profile"),t("span",null,"View your profile")])],-1),ba=t("hr",{class:"dropdown-divider"},null,-1),ya=t("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[t("div",{class:"icon"},[t("i",{"aria-hidden":"true",class:"lnil lnil-briefcase"})]),t("div",{class:"meta"},[t("span",null,"Projects"),t("span",null,"All my projects")])],-1),ka=t("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[t("div",{class:"icon"},[t("i",{"aria-hidden":"true",class:"lnil lnil-users-alt"})]),t("div",{class:"meta"},[t("span",null,"Team"),t("span",null,"Manage your team")])],-1),_a=t("hr",{class:"dropdown-divider"},null,-1),wa=t("a",{href:"#",role:"menuitem",class:"dropdown-item is-media"},[t("div",{class:"icon"},[t("i",{"aria-hidden":"true",class:"lnil lnil-cog"})]),t("div",{class:"meta"},[t("span",null,"Settings"),t("span",null,"Account settings")])],-1),xa=t("hr",{class:"dropdown-divider"},null,-1),Ca={class:"dropdown-item is-button"};const Oa=P(va,[["render",function(e,s){const l=U,n=R,i=pa;return a(),B(i,{right:"",spaced:"",class:"user-dropdown profile-dropdown"},{button:h((({toggle:e})=>[t("a",{tabindex:"0",class:"is-trigger dropdown-trigger","aria-haspopup":"true",onKeydown:r(c(e,["prevent"]),["space"]),onClick:e},[f(l,{picture:"/images/avatars/svg/vuero-1.svg"})],40,ga)])),content:h((()=>[t("div",ma,[f(l,{size:"large",picture:"/images/avatars/svg/vuero-1.svg"}),fa]),ha,ba,ya,ka,_a,wa,xa,t("div",Ca,[f(n,{class:"logout-button",icon:"feather:log-out",color:"primary",role:"menuitem",raised:"",fullwidth:""},{default:h((()=>[b(" Logout ")])),_:1})])])),_:1})}]]),Ba=[t("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:bell"},null,-1),t("span",{class:"new-indicator pulsate"},null,-1)],Ka={class:"navbar-dropdown is-boxed is-right"},Va=$('<div class="heading"><div class="heading-left"><h6 class="heading-title">Notifications</h6></div><div class="heading-right"><a class="notification-link" href="#">See all</a></div></div>',1),$a={class:"inner has-slimscroll"},Ia={class:"notification-list"},Sa={class:"notification-item"},ja={class:"img-left"},Pa=t("div",{class:"user-content"},[t("p",{class:"user-info"},[t("span",{class:"name"},"Alice C."),b(" left a comment. ")]),t("p",{class:"time"},"1 hour ago")],-1),Aa={class:"notification-item"},Da={class:"img-left"},La=t("div",{class:"user-content"},[t("p",{class:"user-info"},[t("span",{class:"name"},"Joshua S."),b(" uploaded a file. ")]),t("p",{class:"time"},"2 hours ago")],-1),Ma={class:"notification-item"},Ea={class:"img-left"},Na=t("div",{class:"user-content"},[t("p",{class:"user-info"},[t("span",{class:"name"},"Tara S."),b(" sent you a message. ")]),t("p",{class:"time"},"2 hours ago")],-1),Ta={class:"notification-item"},Ra={class:"img-left"},Ua=t("div",{class:"user-content"},[t("p",{class:"user-info"},[t("span",{class:"name"},"Melany W."),b(" left a comment. ")]),t("p",{class:"time"},"3 hours ago")],-1),za=e({__name:"NotificationsMobileDropdown",setup(e){const l=y(),n=ca(l);return(e,o)=>(a(),s("div",{ref_key:"dropdownElement",ref:l,class:"navbar-item has-dropdown is-notification is-hidden-tablet is-hidden-desktop"},[t("a",{class:"navbar-link is-arrowless",tabindex:"0",onKeydown:o[0]||(o[0]=r(c(((...e)=>i(n).toggle&&i(n).toggle(...e)),["prevent"]),["space"])),onClick:o[1]||(o[1]=(...e)=>i(n).toggle&&i(n).toggle(...e))},Ba,32),t("div",Ka,[Va,t("div",$a,[t("ul",Ia,[t("li",null,[t("a",Sa,[t("div",ja,[t("img",{class:"user-photo",alt:"",src:"/lynx-frontend-vue/images/avatars/svg/vuero-4.svg",onErrorOnce:o[2]||(o[2]=e=>i(z)(150))},null,32)]),Pa])]),t("li",null,[t("a",Aa,[t("div",Da,[t("img",{class:"user-photo",alt:"",src:"/lynx-frontend-vue/images/avatars/svg/vuero-2.svg",onErrorOnce:o[3]||(o[3]=e=>i(z)(150))},null,32)]),La])]),t("li",null,[t("a",Ma,[t("div",Ea,[t("img",{class:"user-photo",alt:"",src:"/lynx-frontend-vue/images/avatars/svg/vuero-5.svg",onErrorOnce:o[4]||(o[4]=e=>i(z)(150))},null,32)]),Na])]),t("li",null,[t("a",Ta,[t("div",Ra,[t("img",{class:"user-photo",alt:"",src:"/lynx-frontend-vue/images/avatars/svg/vuero-9.svg",onErrorOnce:o[5]||(o[5]=e=>i(z)(150))},null,32)]),Ua])])])])])],512))}}),Wa={class:"sidebar-layout"},Xa=t("div",{class:"app-overlay"},null,-1),Ga={class:"brand-end"},Ha=t("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:home"},null,-1),Fa=t("li",null,[t("a",{href:"#"},[t("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:settings"})])],-1),Ja=[t("i",{"aria-hidden":"true",class:"iconify sidebar-svg","data-icon":"fluent-mdl2:publish-course"},null,-1)],Za={class:"page-title has-text-centered"},qa={class:"menu-toggle has-chevron"},Qa=[t("span",{class:"rotate"},[t("i",{"aria-hidden":"true",class:"icon-line-top"}),t("i",{"aria-hidden":"true",class:"icon-line-center"}),t("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1)],Ya={class:"title-wrap"},es={class:"title is-4"},as=e({__name:"AppLayout",props:{theme:{default:"labels-hover"},defaultSidebar:{default:"Courses"},closeOnChange:{type:Boolean},openOnMounted:{type:Boolean},nowrap:{type:Boolean}},setup(e){const o=e,p=j(),v=T(),g=y(!1),b=y(o.openOnMounted),k=y(o.defaultSidebar);function x(e){e===k.value?b.value=!b.value:(b.value=!0,k.value=e)}return I((()=>{p.setPushed(b.value??!1)})),d((()=>v.fullPath),(()=>{g.value=!1,o.closeOnChange&&b.value&&(b.value=!1)})),(e,d)=>{const v=N,y=m("RouterLink"),C=za,O=Oa,K=oa,V=ea,$=Je,I=Ne,S=Pe,j=Be,P=ae,A=F,D=G,L=W;return a(),s("div",Wa,[Xa,f(K,{"is-open":i(g),onToggle:d[0]||(d[0]=e=>g.value=!i(g))},{brand:h((()=>[f(y,{to:"/",class:"navbar-item is-brand"},{default:h((()=>[f(v,{width:"38px",height:"38px"})])),_:1}),t("div",Ga,[f(C),f(O)])])),_:1},8,["is-open"]),f(V,{"is-open":i(g),onToggle:d[1]||(d[1]=e=>g.value=!i(g))},{links:h((()=>[t("li",null,[f(y,{to:"app"},{default:h((()=>[Ha])),_:1})])])),"bottom-links":h((()=>[Fa])),_:1},8,["is-open"]),f(_,{name:"slide-x"},{default:h((()=>[i(g)&&"courses"===i(k)?(a(),B($,{key:0})):w("",!0)])),_:1}),f(I,{theme:o.theme,"is-open":i(b)},{links:h((()=>[t("li",null,[t("a",{class:n(["courses"===i(k)&&"is-active"]),"data-content":"Courses",tabindex:"0",onKeydown:d[2]||(d[2]=r(c((e=>x("courses")),["prevent"]),["space"])),onClick:d[3]||(d[3]=e=>x("courses"))},Ja,34)])])),"bottom-links":h((()=>[t("li",null,[f(O,{up:""})])])),_:1},8,["theme","is-open"]),f(_,{name:"slide-x"},{default:h((()=>[i(b)&&"courses"===i(k)?(a(),B(S,{key:0,onClose:d[4]||(d[4]=e=>b.value=!1)})):w("",!0)])),_:1}),f(j),f(L,null,{default:h((()=>[f(D,null,{default:h((()=>[o.nowrap?l(e.$slots,"default",{key:0}):(a(),B(A,{key:1,class:"is-relative"},{default:h((()=>[t("div",Za,[t("div",{class:"vuero-hamburger nav-trigger push-resize",tabindex:"0",onKeydown:d[5]||(d[5]=r(c((e=>b.value=!i(b)),["prevent"]),["space"])),onClick:d[6]||(d[6]=e=>b.value=!i(b))},[t("span",qa,[t("span",{class:n([[i(b)&&"active"],"icon-box-toggle"])},Qa,2)])],32),t("div",Ya,[t("h1",es,u(i(p).pageTitle),1)]),f(P,{class:"desktop-toolbar"})]),l(e.$slots,"default")])),_:3}))])),_:3})])),_:3})])}}}),ss={},ls={};"function"==typeof ss&&ss(ls);const ns=P(ls,[["render",function(e,s){const l=m("RouterView"),n=as;return a(),B(n,null,{default:h((()=>[f(l,null,{default:h((({Component:e})=>[f(_,{name:"fade-fast",mode:"out-in"},{default:h((()=>[(a(),B(S(e)))])),_:2},1024)])),_:1})])),_:1})}]]);export{ns as default};
