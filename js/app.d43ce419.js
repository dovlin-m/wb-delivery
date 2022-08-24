(function(){"use strict";var t={2313:function(t,e,a){var s=a(144),r=a(998),i=function(){var t=this,e=t._self._c;return e(r.Z,{style:{background:t.backgroundMain},attrs:{dark:""}},[e("DeliveryMain")],1)},n=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-0 ml-6 mr-6 pt-8"},[e("h1",{staticClass:"headline white--text"},[t._v("Доставки")]),e("p",{staticClass:"body-1 grey--text darken-1 mt-2"},[t._v(' Как только выкуп оплачен, он моментально появится в доставках. Дальше мы отслеживаем его статус. "Доставлен" - можно забирать с пункта выдачи. ')]),e("TabAndCard")],1)},d=[],c=a(579),l=a(626),u=a(3595),f=a(8356),g=a(3736),m=a(1475),p=function(){var t=this,e=t._self._c;return e(c.Z,{attrs:{elevation:0}},[t.small?e(f.Z,{staticClass:"rounded-0",attrs:{vertical:"","background-color":"#1D1625",color:"#6A65FF",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(m.Z,{attrs:{color:"#6A65FF"}}),t._l(t.items,(function(a){return e(l.Z,{key:a},[t._v(" "+t._s(a)+" ")])}))],2):e(f.Z,{staticClass:"rounded-0",attrs:{"background-color":"#1D1625",color:"#6A65FF",dark:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(m.Z,{attrs:{color:"#6A65FF"}}),t._l(t.items,(function(a){return e(l.Z,{key:a},[t._v(" "+t._s(a)+" ")])}))],2),e(g.Z,{staticClass:"rounded-0",model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(u.Z,[e("ProductCard",{attrs:{cardProduct:t.readyToBeIssued}})],1),e(u.Z,[e("ProductCard",{attrs:{cardProduct:t.onTheWay}})],1),e(u.Z,[e("ProductCard",{attrs:{cardProduct:t.received}})],1),e(u.Z,[e("ProductCard",{attrs:{cardProduct:t.canceled}})],1)],1)],1)},h=[],v=a(8895),b=a(266),x=a(7215),w=a(5495),y=a(1713),P=function(){var t=this,e=t._self._c;return e(y.Z,{staticClass:"pt-8",style:{background:t.backgroundMain},attrs:{dark:"",justify:"center"}},t._l(t.cardProduct,(function(s,r){return e(b.Z,{key:r,staticClass:"d-flex align-content-space-between",attrs:{cols:"auto","align-self":"stretch"}},[e(c.Z,{staticClass:"pa-4",style:{background:t.backgroundProduct},attrs:{color:"#6A65FF",elevation:0,"max-width":"360"}},[e("div",{staticClass:"d-flex justify-space-between align-start"},[e("p",{staticClass:"grey--text darken-1 subtitle-2 mb-4 text-truncate"},[t._v(" Заказ: "),e("br"),e("span",{staticClass:"white--text"},[t._v(" "+t._s(s.order)+" ")])]),e(v.Z,{staticClass:"pa-0 rounded-circle",style:{background:t.backgroundProduct},attrs:{elevation:0,"min-width":"36"}},[e("img",{attrs:{src:a(680)}})])],1),e("div",{staticClass:"d-flex mb-3"},[e(w.Z,{attrs:{alt:"product.image",src:a(352),height:"64","max-width":"64"}}),e("div",{style:{lineHeight:t.lineHeight}},[e("p",{staticClass:"ml-3 mb-0 pb-0 font-weight-regular white--text subtitle-2 overflow-hidden",style:{maxHeight:t.height}},[t._v(" "+t._s(s.name)+" ")]),e("a",{staticClass:"ml-3 caption"},[t._v(" "+t._s(s.article)+" ")])])],1),e("div",{staticClass:"d-inline-block align-center pt-1 pb-1 pl-2 pr-2 rounded",style:{background:t.onBackground(s.statusText)}},[e("p",{staticClass:"text-uppercase white--text ma-0"},[t._v(" "+t._s(s.statusText)+" ")])]),e(x.Z,{staticClass:"mt-5"},[e("div",{staticClass:"d-inline-flex align-center"},[e("img",{attrs:{src:a(9403)}}),e("p",{staticClass:"pl-2 pr-8 ma-0 d-inline-block white--text"},[t._v(t._s(s.date))])]),e("div",{staticClass:"d-inline-flex align-center"},[e("img",{attrs:{src:a(1189)}}),e("p",{staticClass:"pl-2 ma-0 d-inline-block white--text"},[t._v(t._s(s.time))])])]),e("div",[e("p",{staticClass:"grey--text darken-1 subtitle-2 mb-2 mt-5"},[t._v(" Получатель: ")]),e("p",{staticClass:"white--text mt-2"},[t._v(t._s(s.recipient))])]),e("div",{staticClass:"mb-16"},[e("p",{staticClass:"grey--text darken-1 subtitle-2 mb-2 mt-5"},[t._v(" Адрес: ")]),e("p",{staticClass:"white--text mt-2"},[t._v(t._s(s.address))])]),e(v.Z,{staticClass:"ma-0",style:{position:"absolute",right:"auto",bottom:"16px"},attrs:{width:"90%",outlined:"",color:"#6A65FF"}},[t._v(" Получение по QR-Коду ")])],1)],1)})),1)},k=[],C={name:"ProductCard",props:{cardProduct:{type:Array,required:!0}},data:()=>({readyToBeIssued:[],onTheWay:[],received:[],canceled:[],backgroundMain:"#1D1625",backgroundProduct:"#232633",backgroundStatusPath:"#F7981C",backgroundStatusRefund:"#B71C1C",backgroundStatusReady:"#388E3C",lineHeight:"15px",height:"45px"}),methods:{onBackground(t){return"В пути на пункт выдачи"===t?this.backgroundStatusPath:"Возврат"===t?this.backgroundStatusRefund:"Готов к выдаче"===t?this.backgroundStatusReady:void 0}}},_=C,T=a(1001),S=(0,T.Z)(_,P,k,!1,null,null,null),Z=S.exports,F={name:"TabAndCard",components:{ProductCard:Z},data:()=>({readyToBeIssued:[{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"Готов к выдаче",tabStatus:"Готов к выдаче",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"Готов к выдаче",tabStatus:"Готов к выдаче",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"Готов к выдаче",tabStatus:"Готов к выдаче",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"Готов к выдаче",tabStatus:"Готов к выдаче",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"Готов к выдаче",tabStatus:"Готов к выдаче",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"Готов к выдаче",tabStatus:"Готов к выдаче",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"Готов к выдаче",tabStatus:"Готов к выдаче",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"Готов к выдаче",tabStatus:"Готов к выдаче",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"Готов к выдаче",tabStatus:"Готов к выдаче",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"Готов к выдаче",tabStatus:"Готов к выдаче",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"}],onTheWay:[{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"В пути на пункт выдачи",tabStatus:"В пути",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"В пути на пункт выдачи",tabStatus:"В пути",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"В пути на пункт выдачи",tabStatus:"В пути",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"В пути на пункт выдачи",tabStatus:"В пути",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"В пути на пункт выдачи",tabStatus:"В пути",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"В пути на пункт выдачи",tabStatus:"В пути",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"В пути на пункт выдачи",tabStatus:"В пути",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"65f884gre4s556w984fe8g4g84",name:"Набор садового инструмента, 3 предмета: рыхлитель, 2 совка, пластиковые ручки",article:"Арт. 485452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"В пути на пункт выдачи",tabStatus:"В пути",date:"12 июня 2022",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"}],received:[],canceled:[{order:"s12h312jh123f2v312v",name:"Бад",article:"Арт. 325452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"Возврат",tabStatus:"Отмененные",date:"10 сентября 2021",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"sefsdf33fe4ferf",name:"Патчи гидроленты",article:"Арт. 196452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"Возврат",tabStatus:"Отмененные",date:"03 сентября 2021",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, Тверская ул 15"},{order:"s12h312jh123f2v312v",name:"Бад",article:"Арт. 325452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"Возврат",tabStatus:"Отмененные",date:"10 сентября 2021",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, м. Пушкинская, Дегярный переулок, д. 10с2"},{order:"sefsdf33fe4ferf",name:"Патчи гидроленты",article:"Арт. 196452965",image:"http://localhost:8080/img/Product.f4af605f.svg",statusText:"Возврат",tabStatus:"Отмененные",date:"03 сентября 2021",time:"19:17",recipient:"Алексей Никитин +796*****2251",address:"г. Москва, Тверская ул 15"}],tab:null,small:!1,items:["Готовы к выдаче","В пути","Полученные","Отмененные"],backgroundMain:"#1D1625"}),created(){window.addEventListener("resize",this.onResize),this.onResize()},destroyed(){window.removeEventListener("resize",this.onResize)},methods:{onResize(){this.small=window.innerWidth<=600}}},O=F,j=(0,T.Z)(O,p,h,!1,null,null,null),A=j.exports,M={name:"DeliveryMain",components:{TabAndCard:A},data:()=>({})},R=M,D=(0,T.Z)(R,o,d,!1,null,null,null),z=D.exports,B={name:"App",components:{DeliveryMain:z},data:()=>({backgroundMain:"#1D1625"})},E=B,H=(0,T.Z)(E,i,n,!1,null,null,null),W=H.exports,I=a(8864);s.ZP.use(I.Z);var q=new I.Z({});s.ZP.config.productionTip=!1,new s.ZP({vuetify:q,render:t=>t(W)}).$mount("#app")},9403:function(t,e,a){t.exports=a.p+"img/Calendar.7a51dc11.svg"},352:function(t,e,a){t.exports=a.p+"img/Product.9e6547ed.svg"},680:function(t,e,a){t.exports=a.p+"img/share-iphone.52962192.svg"},1189:function(t,e,a){t.exports=a.p+"img/time-square.7a7a98ef.svg"}},e={};function a(s){var r=e[s];if(void 0!==r)return r.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,s,r,i){if(!s){var n=1/0;for(l=0;l<t.length;l++){s=t[l][0],r=t[l][1],i=t[l][2];for(var o=!0,d=0;d<s.length;d++)(!1&i||n>=i)&&Object.keys(a.O).every((function(t){return a.O[t](s[d])}))?s.splice(d--,1):(o=!1,i<n&&(n=i));if(o){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[s,r,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/wb-delivery/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,i,n=s[0],o=s[1],d=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(r in o)a.o(o,r)&&(a.m[r]=o[r]);if(d)var l=d(a)}for(e&&e(s);c<n.length;c++)i=n[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(l)},s=self["webpackChunkwb_delivery"]=self["webpackChunkwb_delivery"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(2313)}));s=a.O(s)})();
//# sourceMappingURL=app.d43ce419.js.map