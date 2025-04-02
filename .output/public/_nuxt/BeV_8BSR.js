import{f as v,r as i,C as _,c as k,a as e,b as s,D as w,w as m,x as d,d as p,E as B,q as N,e as U,o as V,z as C,G}from"./oqaamrP9.js";import{_ as T}from"./BgNR3wsS.js";const E={class:"min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4"},F={class:"w-full max-w-md"},S={class:"text-center mb-8"},$={class:"flex items-center justify-center gap-3 mb-4"},j={class:"relative"},q={class:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 relative overflow-hidden"},I={class:"space-y-[25px]"},M={class:"text-center text-sm text-gray-600 dark:text-gray-400"},R={class:"mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"},z={class:"grid grid-cols-2 gap-6"},D={class:"flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-3"},H={class:"flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-3"},L={class:"flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-3"},O={class:"flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-3"},J=v({__name:"forgot-password",setup(P){const r=i({email:""}),x=_({}),n=i(""),l=i(!1),u=()=>(x.email="",n.value="",/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r.value.email)?!0:(x.email="Email không hợp lệ",!1)),c=async()=>{var o;if(u()){l.value=!0,n.value="";try{await $fetch("/api/auth/forgot-password",{method:"POST",body:r.value}),G("/login")}catch(t){n.value=((o=t.data)==null?void 0:o.message)||"Có lỗi xảy ra, vui lòng thử lại"}finally{l.value=!1}}};return(o,t)=>{const a=C,g=T,f=B("UFormGroup"),y=N,h=U;return V(),k("div",E,[e("div",F,[e("div",S,[e("div",$,[e("div",j,[s(a,{name:"i-heroicons-banknotes",class:"w-12 h-12 text-primary-500"}),t[1]||(t[1]=e("div",{class:"absolute -inset-1 bg-primary-500 rounded-full animate-ping opacity-20"},null,-1))]),t[2]||(t[2]=e("span",{class:"text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-700 text-transparent bg-clip-text"}," TechFinance ",-1))]),t[3]||(t[3]=e("h1",{class:"text-3xl font-bold text-gray-800 dark:text-white mb-2"},"Quên mật khẩu",-1)),t[4]||(t[4]=e("p",{class:"text-gray-600 dark:text-gray-400"},"Nhập email của bạn để đặt lại mật khẩu",-1))]),e("div",q,[t[13]||(t[13]=e("div",{class:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-600 rounded-bl-full opacity-10 transform rotate-12"},null,-1)),t[14]||(t[14]=e("div",{class:"absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary-500 to-primary-600 rounded-tr-full opacity-10 transform -rotate-12"},null,-1)),e("form",{onSubmit:w(c,["prevent"]),class:"space-y-8 relative"},[e("div",I,[s(f,{label:"Email",name:"email",class:"mb-0"},{default:m(()=>[s(g,{modelValue:d(r).email,"onUpdate:modelValue":t[0]||(t[0]=b=>d(r).email=b),type:"email",placeholder:"Nhập email",autocomplete:"email",required:"",class:"w-full h-[32px] text-base"},null,8,["modelValue"])]),_:1})]),s(y,{type:"submit",color:"primary",block:"",loading:d(l),class:"h-[32px] text-base font-medium mt-4"},{default:m(()=>t[5]||(t[5]=[p(" Gửi yêu cầu ")])),_:1},8,["loading"]),e("div",M,[t[7]||(t[7]=p(" Đã nhớ mật khẩu? ")),s(h,{to:"/login",class:"text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors duration-200"},{default:m(()=>t[6]||(t[6]=[p(" Đăng nhập ")])),_:1})])],32),e("div",R,[t[12]||(t[12]=e("h3",{class:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-6"},"Tính năng nổi bật:",-1)),e("div",z,[e("div",D,[s(a,{name:"i-heroicons-shield-check",class:"w-5 h-5 text-green-500 flex-shrink-0"}),t[8]||(t[8]=e("span",null,"Bảo mật tối đa",-1))]),e("div",H,[s(a,{name:"i-heroicons-bolt",class:"w-5 h-5 text-yellow-500 flex-shrink-0"}),t[9]||(t[9]=e("span",null,"Giao dịch nhanh chóng",-1))]),e("div",L,[s(a,{name:"i-heroicons-clock",class:"w-5 h-5 text-blue-500 flex-shrink-0"}),t[10]||(t[10]=e("span",null,"Hỗ trợ 24/7",-1))]),e("div",O,[s(a,{name:"i-heroicons-chart-bar",class:"w-5 h-5 text-purple-500 flex-shrink-0"}),t[11]||(t[11]=e("span",null,"Báo cáo chi tiết",-1))])])])])])])}}});export{J as default};
