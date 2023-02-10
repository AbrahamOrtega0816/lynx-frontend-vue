import{_ as s}from"./VPlaceholderPage.vue_vue_type_style_index_0_lang-6da7f278.js";import{d as e,b as a}from"./VButton.vue_vue_type_style_index_0_lang-554cb71d.js";import{b as i,a as l,e as t,ag as n,s as o,v as r,B as c,u as d,y as u,R as m,Y as v,a0 as p,Z as f,C as g,F as h,D as y,z as _,A as x}from"./chunk-BGPNDDXN-506e204f.js";import{tns as k}from"./tiny-slider_src_tiny-slider-ce375c8a.js";import{b as w,u as j}from"./app-9f11cb31.js";import{u as b}from"./useNotyf-27291476.js";import{l as C,c as D}from"./index-eb8e5433.js";import{s as B}from"./sleep-fd7a5d8b.js";import{u as L}from"./@vueuse_head-f7c23dbc.js";import{u as W}from"./viewWrapper-e9daa8ff.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./darkmode-cad7d60c.js";import"./pinia-6e3f481e.js";import"./vue-i18n-f45fb475.js";const F={class:"lesson-delivery-dashboard"},q={class:"left"},z={class:"left-body"},G={class:"lessons"},K=c("div",{class:"lessons-toolbar"},[c("div",{class:"left"},[c("h3",null,"Lessons")])],-1),P=[c("i",{"aria-hidden":"true",class:"fas fa-angle-left"},null,-1)],$=[c("i",{"aria-hidden":"true",class:"fas fa-angle-right"},null,-1)],A=["onKeydown","onClick"],E={class:"colums"},N=c("div",{class:"columm is-flex is-justify-content-center"},[c("div",{class:"lesson-pill-icon"},[c("i",{"aria-hidden":"true",class:"iconify","data-icon":"mdi:book-open-page-variant"})])],-1),I={class:"columm"},O={class:"is-capitalize text"},T={key:1,class:"columns is-multiline"},V={class:"card-grid-item"},H=c("img",{class:"light-image",src:"/assets/search-4-66fa8833.svg",alt:""},null,-1),M=c("img",{class:"dark-image",src:"/assets/search-4-dark-9a71a7e6.svg",alt:""},null,-1),R=i({__name:"CoursesLessonsGroup",props:{id:{default:0}},async setup(a){let i,j;const{id:D}=a;let L;const W=l(),R=l(),S=l(),X=b(),Y=s=>{const e=s.indexCached,a=s.index;s.slideItems[e].classList.remove("active"),s.slideItems[a].classList.add("active")},Z=s=>{L&&L.goTo(s)};t((()=>{L&&(L.events.off("indexChanged",Y),L.destroy())}));const J=async()=>await C.getLessonsGroups(D).then((s=>{if(200===s.status)return s.data.groups_lessons;X.info(`${s.message}`)})).catch((s=>{X.error(`${s.message}`)})),{data:Q=[],isLoading:U}=([i,j]=n((async()=>w({queryKey:["lessonsGroup"],queryFn:J,refetchOnWindowFocus:!1,async onSuccess(){await B(100),(async()=>{var s;W.value&&R.value&&S.value&&(L=k({container:W.value,controls:!0,nav:!1,mouseDrag:!1,nextButton:R.value,prevButton:S.value,fixedWidth:150,swipeAngle:!1,items:1,center:!1,loop:!0}),null==(s=null==L?void 0:L.events)||s.on("indexChanged",Y),await B(100),ss.value=!0)})()}}))),i=await i,j(),i),ss=l(!1);return(a,i)=>{var l,t;const n=e,k=s;return o(),r("div",F,[c("div",q,[c("div",z,[c("div",G,[K,(null==(l=d(Q))?void 0:l.length)>0&&!d(U)?(o(),r("div",{key:0,class:u([{"hide-lesson-pills":!d(ss)},"lesson-pills"])},[c("div",{ref_key:"prevButtonElement",ref:S,class:"slick-custom is-prev slick-arrow"},P,512),c("div",{ref_key:"nextButtonElement",ref:R,class:"slick-custom is-next slick-arrow"},$,512),c("div",{ref_key:"sliderElement",ref:W,class:"lesson-pills-inner pill-carousel"},[(o(!0),r(m,null,v(d(Q),((s,e)=>(o(),r("div",{key:s.id,class:"lesson-pill",tabindex:"0",onKeydown:p(f((s=>Z(e)),["prevent"]),["space"]),onClick:s=>Z(e)},[c("div",E,[N,c("div",I,[c("span",O,g(null==s?void 0:s.name),1)])])],40,A)))),128))],512)],2)):h("",!0),d(U)?(o(),r("div",T,[(o(),r(m,null,v(3,(s=>c("div",{key:s,class:"column is-6-tablet is-4-desktop is-3-fullhd"},[c("div",V,[y(n,{height:"160px",class:"mb-4",width:"100%",lines:1,centered:""})])]))),64))])):h("",!0),d(U)?h("",!0):(o(),_(k,{key:2,class:u([0!==(null==(t=d(Q))?void 0:t.length)&&"is-hidden"]),title:"We are sorry, at this moment we do not have lessons for this course.",subtitle:"We are working to provide you with more content, and keep learning.",small:""},{image:x((()=>[H,M])),_:1},8,["class"]))])])])])}}}),S={class:"lifestyle-dashboard lifestyle-dashboard-v4"},X={class:"columns is-multiline"},Y={class:"column is-12"},Z={class:"illustration-header-2"},J=c("div",{class:"header-image"},[c("img",{src:"/assets/reading-1fd02afe.svg",alt:""})],-1),Q={class:"header-meta"},U={class:"pt-3 is-capitalize"},ss={class:"pt-3"},es=i({__name:"CoursesDescription",setup(s){const e=b(),{user:{name:a}}=j(),{data:i,isLoading:l}=w({queryKey:["course-detail"],queryFn:async()=>await D.getCourseDetail(9).then((s=>{if(200===s.status)return s.data;e.info(`${s.message}`)})).catch((s=>{e.error(`${s.message}`)})),refetchOnWindowFocus:!1});return(s,e)=>{var l,t;return o(),r("div",S,[c("div",X,[c("div",Y,[c("div",Z,[J,c("div",Q,[c("h3",null,"Hello, "+g(d(a)),1),c("h3",U,g(null==(l=d(i))?void 0:l.name),1),c("p",ss,g(null==(t=d(i))?void 0:t.description),1)])])])])])}}}),as={class:"columns is-multiline"},is={class:"column is-7"},ls={class:"column is-5"},ts=c("div",{class:"column"},"xxxxxx",-1),ns=i({__name:"CoursesDetailMain",setup(s){const e=a(),{id:i}=e.params;return(s,e)=>{const a=es,l=R;return o(),r("div",as,[c("div",is,[y(a,{id:d(i)},null,8,["id"])]),c("div",ls,[y(l,{id:d(i)},null,8,["id"])]),ts])}}}),os={class:"page-content-inner"},rs=i({__name:"[id]",setup:s=>(W().setPageTitle("Courses Detail"),L({title:"Courses Detail - Let'z"}),(s,e)=>{const a=ns;return o(),r("div",os,[y(a)])})});export{rs as default};
