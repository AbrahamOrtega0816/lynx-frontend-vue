import{b as e,W as a,u as s,c as t,s as l,v as i,x as n,H as o,z as r,A as c,B as u,D as d,y as p,a0 as m,Z as g,E as f,F as v,R as h,Y as y,C as k,af as _,d as x,r as b}from"./chunk-BGPNDDXN-506e204f.js";import{b as w,u as C,d as P}from"./VButton.vue_vue_type_style_index_0_lang-554cb71d.js";import{u as $}from"./vue-i18n-f45fb475.js";import{o as B}from"./via-placeholder-24645670.js";import{_ as j}from"./VPlaceholderPage.vue_vue_type_style_index_0_lang-6da7f278.js";import{_ as z}from"./VSwitchBlock.vue_vue_type_style_index_0_lang-55f586b8.js";import{F,a as L,b as V,u as K}from"./VInput.vue_vue_type_script_setup_true_lang-1dabfaa8.js";import{c as q}from"./index-eb8e5433.js";import{b as I,u as W}from"./app-9f11cb31.js";import{u as D}from"./useNotyf-27291476.js";import{u as O}from"./@vueuse_head-f7c23dbc.js";import{u as M}from"./viewWrapper-e9daa8ff.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./darkmode-cad7d60c.js";import"./pinia-6e3f481e.js";const S={class:"v-flex"},G=e({__name:"VFlex",props:{inline:{type:Boolean},flexDirection:{default:"row"},flexWrap:{default:"nowrap"},justifyContent:{default:"normal"},alignItems:{default:"normal"},alignContent:{default:"normal"},rowGap:{default:"normal"},columnGap:{default:"normal"}},setup(e){const o=e;a((e=>({"505254cf":s(r),"099f6015":o.flexDirection,"3e5cf1f4":o.flexWrap,b9dbbdcc:o.justifyContent,d28be4e8:o.alignItems,e9fdd176:o.alignContent,"4bbd0e26":o.rowGap,"76786baf":o.columnGap})));const r=t((()=>o.inline?"inline-flex":"flex"));return(e,a)=>(l(),i("div",S,[n(e.$slots,"default")]))}}),R={class:"pagination-list"},E={key:0},N=[u("span",{class:"pagination-ellipsis"},"…",-1)],Q={key:1},U=[u("span",{class:"pagination-ellipsis"},"…",-1)],A={key:2},T=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"},null,-1),H=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),X=e({__name:"VFlexPagination",props:{itemPerPage:null,totalItems:null,currentPage:{default:1},maxLinksDisplayed:{default:4},noRouter:{type:Boolean},routerQueryKey:{default:"page"}},emits:["update:currentPage"],setup(e,{emit:a}){const _=e,{t:x}=$(),b=w(),C=t((()=>Math.ceil(_.totalItems/_.itemPerPage)||1)),P=t((()=>C.value>_.maxLinksDisplayed+2?_.maxLinksDisplayed+2:C.value)),B=t((()=>{const e=[];let a=_.currentPage-Math.floor(P.value/2),s=a+(P.value-Math.ceil(P.value%2));a<1&&(a=1,s=a+(P.value-1)),s>C.value&&(s=C.value,a=s-(P.value-1));for(let t=a;t<=s;t+=1)t!==a&&t!==s&&e.push(t);return e})),j=t((()=>C.value>1)),z=(e=1)=>{if(_.noRouter)return{};const a=Math.max(1,Math.min(e,C.value)),s={...b.query};return _.routerQueryKey&&(s[_.routerQueryKey]=a<=1?void 0:a),{name:b.name,params:b.params,query:s}},F=(e,s=1)=>{const t=Math.max(1,Math.min(s,C.value));if(a("update:currentPage",t),_.noRouter)return e.preventDefault(),e.stopPropagation(),!1};return(a,t)=>{const _=o("RouterLink"),b=G;return l(),r(b,{role:"navigation",class:"flex-pagination pagination is-rounded","aria-label":"pagination","justify-content":"space-between"},{default:c((()=>[u("ul",R,[n(a.$slots,"before-pagination"),u("li",null,[d(_,{to:z(1),tabindex:"0",class:p(["pagination-link",[1===e.currentPage&&"is-current"]]),"aria-label":s(x)("components.v-flex-pagination.goto-page-title",{page:1}),onKeydown:t[0]||(t[0]=m(g((e=>e.target.click()),["prevent"]),["space"])),onClick:t[1]||(t[1]=e=>F(e,1))},{default:c((()=>[f(" 1 ")])),_:1},8,["to","aria-label","class"])]),s(j)&&(0===s(B).length||s(B)[0]>2)?(l(),i("li",E,N)):v("",!0),(l(!0),i(h,null,y(s(B),(a=>(l(),i("li",{key:a},[d(_,{to:z(a),tabindex:"0",class:p(["pagination-link",[e.currentPage===a&&"is-current"]]),"aria-label":s(x)("components.v-flex-pagination.goto-page-title",{page:a}),"aria-current":e.currentPage===a?"page":void 0,onKeydown:t[2]||(t[2]=m(g((e=>e.target.click()),["prevent"]),["space"])),onClick:e=>F(e,a)},{default:c((()=>[f(k(a),1)])),_:2},1032,["to","aria-label","aria-current","class","onClick"])])))),128)),s(j)&&s(B)[s(B).length-1]<s(C)-1?(l(),i("li",Q,U)):v("",!0),s(j)?(l(),i("li",A,[d(_,{to:z(s(C)),tabindex:"0",class:p(["pagination-link",[e.currentPage===s(C)&&"is-current"]]),"aria-label":s(x)("components.v-flex-pagination.goto-page-title",{page:s(C)}),onKeydown:t[3]||(t[3]=m(g((e=>e.target.click()),["prevent"]),["space"])),onClick:t[4]||(t[4]=e=>F(e,s(C)))},{default:c((()=>[f(k(s(C)),1)])),_:1},8,["to","aria-label","class"])])):v("",!0),n(a.$slots,"after-pagination")]),n(a.$slots,"before-navigation"),d(_,{to:z(e.currentPage-1),tabindex:"0",class:"pagination-previous has-chevron",onKeydown:t[5]||(t[5]=m(g((e=>e.target.click()),["prevent"]),["space"])),onClick:t[6]||(t[6]=a=>F(a,e.currentPage-1))},{default:c((()=>[T])),_:1},8,["to"]),d(_,{to:z(e.currentPage+1),tabindex:"0",class:"pagination-next has-chevron",onKeydown:t[7]||(t[7]=m(g((e=>e.target.click()),["prevent"]),["space"])),onClick:t[8]||(t[8]=a=>F(a,e.currentPage+1))},{default:c((()=>[H])),_:1},8,["to"]),n(a.$slots,"after-navigation")])),_:3})}}}),Y=["value","max"],Z=e({__name:"VProgress",props:{value:{default:void 0},max:{default:100},size:{default:void 0},color:{default:"primary"}},setup(e){const a=e;return(e,s)=>(l(),i("progress",{class:p(["progress",[a.size&&`is-${a.size}`,a.color&&`is-${a.color}`]]),value:a.value,max:a.max},k(a.value?a.value/a.max*100+"%":""),11,Y))}}),J=["data-icon"],ee={key:1,class:"snack-media"},ae=["src"],se={class:"snack-text"},te={class:"snack-action"},le=e({__name:"V-Snack",props:{title:null,icon:{default:void 0},image:{default:void 0},placeholder:{default:"https://via.placeholder.com/50x50"},color:{default:void 0},size:{default:void 0},solid:{type:Boolean},white:{type:Boolean}},setup(e){const a=e;function o(e){e.target.src=a.placeholder}const r=t((()=>a.icon&&-1!==a.icon.indexOf(":")));return(t,c)=>(l(),i("div",{class:p(["snack",[a.white&&"is-white",a.size&&`is-${a.size}`]])},[a.icon?(l(),i("div",{key:0,class:p(["snack-media is-icon",[a.color&&`is-${a.color}`,a.solid&&"is-solid"]])},[s(r)?(l(),i("i",{key:0,"aria-hidden":"true",class:"iconify snack-icon","data-icon":e.icon},null,8,J)):(l(),i("i",{key:1,"aria-hidden":"true",class:p(["snack-icon",a.icon])},null,2))],2)):a.image?(l(),i("div",ee,[u("img",{class:"avatar",src:a.image,alt:"",onErrorOnce:o},null,40,ae)])):v("",!0),u("span",se,[n(t.$slots,"title",{},(()=>[f(k(a.title),1)]))]),u("span",te,[n(t.$slots,"default")])],2))}}),ie=["src"],ne=["data-icon"],oe=e({__name:"VIconWrap",props:{icon:{default:void 0},picture:{default:void 0},color:{default:void 0},size:{default:void 0},dark:{default:"3"},hasLargeIcon:{type:Boolean},hasBackground:{type:Boolean},placeholder:{type:Boolean},darkPrimary:{type:Boolean},darkCardBordered:{type:Boolean}},setup(e){const a=e,o=t((()=>a.icon&&-1!==a.icon.indexOf(":")));return(e,t)=>(l(),i("div",{class:p(["icon-wrap",[a.color&&!a.hasBackground&&`has-text-${a.color}`,a.color&&a.hasBackground&&`has-background-${a.color}`,a.color&&"white"!==a.color&&a.hasBackground&&"has-text-white",a.color&&"white"===a.color&&a.hasBackground&&"has-text-black",a.size&&`is-${a.size}`,a.dark&&!a.hasBackground&&`is-dark-bg-${a.dark}`,a.darkPrimary&&"is-dark-primary",a.darkCardBordered&&"is-dark-card-bordered",a.hasLargeIcon&&"has-large-icon",a.picture&&"has-img",a.placeholder&&"is-placeholder"]])},[a.picture?(l(),i("img",{key:0,src:a.picture,alt:"",onErrorOnce:t[0]||(t[0]=e=>s(B)(32))},null,40,ie)):s(o)?(l(),i("i",{key:1,"aria-hidden":"true",class:"iconify","data-icon":a.icon},null,8,ne)):a.icon?(l(),i("i",{key:2,"aria-hidden":"true",class:p(a.icon)},null,2)):v("",!0),n(e.$slots,"after")],2))}}),re=e({__name:"VPlaceloadAvatar",props:{size:{default:void 0},rounded:{default:"full"},centered:{type:Boolean},disabled:{type:Boolean}},setup(e){const a=e;return(e,s)=>(l(),i("div",{class:p(["placeload-avatar",[!a.disabled&&"loads",a.size&&`is-${a.size}`,a.centered&&"is-centered",a.rounded&&`is-rounded-${a.rounded}`]])},null,2))}}),ce=u("img",{class:"light-image",src:"/assets/search-1-219e85e2.svg",alt:""},null,-1),ue=u("img",{class:"dark-image",src:"/assets/search-1-dark-c79642fd.svg",alt:""},null,-1),de={key:0,class:"columns is-multiline"},pe={class:"card-grid-item"},me={class:"card-grid-item-content mb-2"},ge={class:"mb-2 is-flex is-justify-content-space-between is-align-items-center"},fe={class:"card-grid-item-footer"},ve={class:"is-flex is-justify-content-space-between is-align-items-center"},he={class:"meta"},ye={class:"columns pt-5 px-2 is-flex is-justify-content-space-between is-align-items-center"},ke={class:"title is-6 is-bold my-0"},_e={class:"title is-6 is-bold is-uppercase"},xe={class:"columns px-2"},be=["onClick","onKeydown"],we=["src","alt"],Ce={class:"card-grid-item-content mb-2"},Pe={class:"mb-2 is-flex is-justify-content-space-between"},$e={class:"has-text-primary is-capitalized"},Be={class:"dark-inverted is-capitalized"},je={class:"card-grid-item-footer"},ze={class:"is-flex is-justify-content-space-between is-align-items-center"},Fe=u("div",{class:"meta"},[u("i",{class:"fas fa-star warning-text"}),u("i",{class:"fas fa-star warning-text"}),u("i",{class:"fas fa-star"}),u("i",{class:"fas fa-star"}),u("i",{class:"fas fa-star"})],-1),Le={class:"columns pt-5 px-2 is-flex is-justify-content-space-between is-align-items-center"},Ve={class:"title is-6 is-bold my-0"},Ke={class:"title is-6 is-bold is-uppercase"},qe={class:"columns px-2"},Ie=e({__name:"CoursesCard",props:{courses:null,isLoading:{type:Boolean}},setup(e){const a=C(),t=e=>a.push(`courses/detail/${e}`);return(a,n)=>{var o;const m=j,g=P,f=re,v=oe,x=le,b=Z;return l(),i("div",null,[d(m,{class:p([0!==(null==(o=e.courses)?void 0:o.length)&&"is-hidden"]),title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\r\n          search terms you've entered. Please try different search terms or\r\n          criteria.",larger:""},{image:c((()=>[ce,ue])),_:1},8,["class"]),e.isLoading?(l(),i("div",de,[(l(),i(h,null,y(3,(e=>u("div",{key:e,class:"column is-6-tablet is-4-desktop is-3-fullhd"},[u("div",pe,[d(g,{height:"160px",class:"mb-4",width:"100%",lines:1,centered:""}),u("div",me,[u("div",ge,[u("div",null,[d(g,{width:"150px",lines:1,centered:""})]),u("div",null,[d(f,{size:"small"})])]),d(g,{width:"250px",lines:1})]),u("div",fe,[u("div",ve,[u("div",null,[d(f,{size:"small"})]),u("div",he,[u("div",null,[d(g,{width:"100px",lines:1})])])]),u("div",ye,[u("span",ke,[u("div",null,[d(g,{width:"100px",lines:1})])]),u("span",_e,[u("div",null,[d(g,{width:"100px",lines:1})])])]),u("div",xe,[d(g,{lines:1})])])])]))),64))])):(l(),r(_,{key:1,name:"list",tag:"div",class:"columns is-multiline"},{default:c((()=>[(l(!0),i(h,null,y(e.courses,(e=>{var a;return l(),i("div",{key:e.id,class:"column is-6-tablet is-4-desktop is-3-fullhd"},[u("div",{class:"card-grid-item is-clickable",onClick:a=>t(e.id),onKeydown:a=>t(e.id)},[u("img",{src:e.image,alt:e.name,onErrorOnce:n[0]||(n[0]=e=>s(B)(400,300))},null,40,we),u("div",Ce,[u("div",Pe,[u("h2",$e,k(e.specialities.name)+" - "+k(null==e?void 0:e.lessons)+" Lessons ",1),d(v,{icon:"mdi:heart-multiple",color:e.is_favorite?"danger":"primary"},null,8,["color"])]),u("h3",Be,k(e.name),1)]),u("div",je,[u("div",ze,[d(x,{title:e.category.name,color:"primary",white:"",solid:"",icon:"feather:life-buoy",size:"small"},null,8,["title"]),Fe]),u("div",Le,[u("span",Ve,k(null==e?void 0:e.progress)+"% ",1),u("span",Ke,k(null==(a=null==e?void 0:e.status)?void 0:a.name),1)]),u("div",qe,[d(b,{size:"smaller",value:null==e?void 0:e.progress},null,8,["value"])])])],40,be)])})),128))])),_:1}))])}}}),We={class:"columns is-desktop"},De={class:"column"},Oe=["onInput"],Me={class:"column"},Se={class:"column"},Ge={class:"column"},Re={class:"column"},Ee=e({__name:"CoursesFilters",setup(e){const a=D(),t=x({loader:async()=>F}),{data:n=[],isLoading:r}=I({queryKey:["status"],queryFn:async()=>await q.getCoursesStatus().then((e=>{if(200===e.status)return e.data.status;a.info(`${e.message}`)})).catch((e=>{a.error(`${e.message}`)})),refetchOnWindowFocus:!1}),{data:p=[],isLoading:m}=I({queryKey:["categories"],queryFn:async()=>await q.getCoursesCategories().then((e=>{if(200===e.status)return e.data.categories;a.info(`${e.message}`)})).catch((e=>{a.error(`${e.message}`)})),refetchOnWindowFocus:!1}),{data:g=[],isLoading:f}=I({queryKey:["specialities"],queryFn:async()=>await q.getCoursesSpecialities().then((e=>{if(200===e.status)return e.data.specialities;a.info(`${e.message}`)})).catch((e=>{a.error(`${e.message}`)})),refetchOnWindowFocus:!1});return(e,a)=>{const v=L,h=o("Multiselect"),y=V,k=z;return l(),i("div",We,[u("div",De,[d(s(t),{name:"search"},{default:c((({handleChange:e})=>[d(v,{icon:"feather:search"},{default:c((()=>[u("input",{class:"input custom-text-filter",placeholder:"Search...",onInput:e},null,40,Oe)])),_:2},1024)])),_:1})]),u("div",Me,[d(s(t),{name:"status"},{default:c((({handleChange:e})=>[d(y,null,{default:c((()=>[d(v,null,{default:c((()=>[d(h,{placeholder:"Filter by Status","track-by":"name",label:"name","value-prop":"id",mode:"tags",options:s(n),"max-height":175,searchable:!0,"create-tag":!0,loding:s(r),onChange:e},null,8,["options","loding","onChange"])])),_:2},1024)])),_:2},1024)])),_:1})]),u("div",Se,[d(s(t),{name:"categories"},{default:c((({handleChange:e})=>[d(y,null,{default:c((()=>[d(v,{class:"control-multiselect"},{default:c((()=>[d(h,{placeholder:"Filter by Categories","track-by":"name",label:"name","value-prop":"id",mode:"tags",options:s(p),"max-height":175,fullwidth:"",searchable:!0,"create-tag":!0,loading:s(m),onChange:e},null,8,["options","loading","onChange"])])),_:2},1024)])),_:2},1024)])),_:1})]),u("div",Ge,[d(s(t),{name:"specialities"},{default:c((({handleChange:e})=>[d(y,null,{default:c((()=>[d(v,{class:"control-multiselect"},{default:c((()=>[d(h,{placeholder:"Filter by Specialities","track-by":"name",label:"name","value-prop":"id",mode:"tags",options:s(g),"max-height":175,fullwidth:"",searchable:!0,"create-tag":!0,loading:s(f),onChange:e},null,8,["options","loading","onChange"])])),_:2},1024)])),_:2},1024)])),_:1})]),u("div",Re,[d(s(t),{name:"favorite"},{default:c((({handleChange:e,field:a})=>[d(y,null,{default:c((()=>[d(v,null,{default:c((()=>[d(k,{modelValue:a.value,"onUpdate:modelValue":[e=>a.value=e,e],thin:"",label:"Favorite",color:"primary"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)])),_:1})])])}}}),Ne={class:"card-grid card-grid-v4"},Qe=e({__name:"CoursesList",setup(e){const a=D(),t=b(K({initialValues:{categories:[],status:[],search:"",specialities:[],limit:3,page:1,favorite:!1}})),{user:{user_id:n}}=W(),{data:o,isLoading:c}=I({queryKey:["courses",t.values],queryFn:async()=>await q.getListCourses(n,t.values).then((e=>{if(200===e.status)return e.data;a.info(`${e.message}`)})).catch((e=>{a.error(`${e.message}`)})),refetchOnWindowFocus:!1});return(e,a)=>{var n,p,m;const g=Ee,f=Ie,h=X;return l(),i("div",null,[d(g),u("div",Ne,[d(f,{courses:null==(n=s(o))?void 0:n.courses,"is-loading":s(c)},null,8,["courses","is-loading"]),(null==(p=s(o))?void 0:p.count)>3?(l(),r(h,{key:0,"item-per-page":s(t).values.limit,"total-items":s(o).count,"current-page":null==(m=s(o))?void 0:m.current_page,"onUpdate:currentPage":a[0]||(a[0]=e=>s(t).values.page=e)},null,8,["item-per-page","total-items","current-page"])):v("",!0)])])}}}),Ue={class:"page-content-inner"},Ae=e({__name:"index",setup:e=>(M().setPageTitle("Courses"),O({title:"Courses - Let'z"}),(e,a)=>{const s=Qe;return l(),i("div",Ue,[d(s)])})});export{Ae as default};
