(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)s=r[d],n[s]&&p.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(i=!1)}i&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},o=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/class/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"01e3":function(t,e,a){"use strict";var i=a("9e32"),n=a.n(i);n.a},"30eb":function(t,e,a){"use strict";var i=a("e83f"),n=a.n(i);n.a},"4ee2":function(t,e,a){},"4f37":function(t,e,a){"use strict";var i=a("b999"),n=a.n(i);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("19de");var i=a("234f"),n=(a("9cb7"),a("66fd")),o=(a("be39"),a("efa0")),s=(a("f908"),a("b528")),r=(a("93ac"),a("bb33")),c=(a("ab71"),a("58e6")),l=(a("2994"),a("2bdd")),u=(a("4d48"),a("d1e1")),d=(a("81e6"),a("9ffb")),p=(a("e7e5"),a("d399")),f=(a("5246"),a("6b41")),m=(a("c3a6"),a("ad06")),g=(a("537a"),a("ac28")),h=(a("a52c"),a("2ed4")),v=(a("7844"),a("5596")),b=(a("4b0a"),a("2bb1")),_=(a("66b9"),a("b650")),y=(a("da3c"),a("0b33")),w=(a("bda7"),a("5e46")),k=(a("be7f"),a("565f")),j=(a("0653"),a("34e9")),$=(a("66cf"),a("343b")),x=(a("cadf"),a("551c"),a("097d"),a("2b0e")),C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("keep-alive",[t.$route.meta.keepAlive?a("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():a("router-view"),a("router-view",{attrs:{name:"footerbar"}})],1)},L=[],I={},O=I,P=a("2877"),S=Object(P["a"])(O,C,L,!1,null,null,null);S.options.__file="App.vue";var T=S.exports,U=a("8c4f"),E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{staticClass:"head",attrs:{title:"首页"}},[a("van-icon",{attrs:{slot:"left",name:"search"},on:{click:function(e){t.$router.push("/Error")}},slot:"left"}),a("van-icon",{attrs:{slot:"right"},on:{click:function(e){t.$router.push("/Mine")}},slot:"right"},[t._v(t._s("{}"===JSON.stringify(t.userInfo)?"未登录":t.userInfo.userName))])],1),a("van-swipe",{staticClass:"homeswipe",attrs:{autoplay:3e3}},t._l(t.imgAll,function(t,e){return a("van-swipe-item",{key:e,staticClass:"homeswipe-index"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgSrc,expression:"item.imgSrc"}]})])}),1),a("div",{staticClass:"hot"},[a("p",{staticClass:"hot-title"},[t._v("热门商品")]),a("swiper",{staticClass:"hot-price",attrs:{options:t.swiperOption}},t._l(t.bookprice,function(e,i){return a("swiper-slide",{key:i,staticClass:"hot-price-index"},[a("img",{attrs:{src:e.img,alt:""}}),a("p",{staticClass:"hot-price-index-read"},[t._v(t._s(e.reading))]),a("p",{staticClass:"hot-price-index-time"},[t._v("发行时间：\n            "),a("br"),t._v(" "+t._s(e.bytime))])])}),1)],1),t._m(0)],1)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"recommend"},[a("p",{staticClass:"hot-title"},[t._v("推荐商品")]),a("hr"),a("ul",{staticClass:"recommend-all"})])}],F=a("cebc"),z=(a("dfa4"),a("7212")),H=a("bc3a"),D=a.n(H),M="http://www.haoluweb.com/",N="http://localhost:3000/",V={getVarietyItem:M+"getVarietyItem",registUser:N+"user/registUser",loginUser:N+"user/loginUser",getTypes:N+"type/getTypes",getProductsByType:N+"product/getProductsByType",getDetail:N+"product/getDetail",addcar:N+"cart/addcar",getCar:N+"cart/getCar",cutdata:N+"cart/cutdata"},q=V,B=a("2f62"),J={data:function(){return{imgAll:[{name:"img1",imgSrc:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1548921502641&di=0fed944b7bd2821d67c483f2a2f12ccc&imgtype=0&src=http%3A%2F%2Fwww.hflz.com%2FuploadFiles%2Fimages%2F20151130%2Fcce1ba19da5b469e8323bf7addd37664%2F635844735406285628.jpg"},{name:"img2",imgSrc:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1766804843,2428109724&fm=26&gp=0.jpg"},{name:"img3",imgSrc:"http://pic35.photophoto.cn/20150620/0017031079860457_b.jpg"},{name:"img4",imgSrc:"http://img.zcool.cn/community/01d3f9554213660000019ae9b70ccc.jpg"}],bookprice:[{title:"1984",catalog:"外国文学 小说 经典名著 ",tags:"世界名著 好书推荐 文学经典 科幻小说 讽喻小说 ",img:"http://apis.juhe.cn/goodbook/img/4dad281446fea4764dd078d7d6998c7a.jpg",reading:"21218人阅读",bytime:"2014年8月14日"},{title:"王子与贫儿",catalog:"儿童文学 经典名著 ",tags:"儿童文学经典作品 好书排行榜 童话小说 美国文学 讽刺小说 ",img:"http://apis.juhe.cn/goodbook/img/d9b6fb6c7b51a4959754de6a739dbec0.jpg",reading:"34045人阅读",bytime:"2014年7月30日"},{title:"长袜子皮皮",catalog:"儿童文学 经典名著 ",tags:"世界经典童话 儿童文学经典作品 外国文学经典 童书推荐 童年 ",img:"http://apis.juhe.cn/goodbook/img/53f6916b8b9b9cd0ab84e21f67e5dea3.jpg",reading:"4016人阅读",bytime:"2013年6月1日"},{title:"月亮和六便士",catalog:"外国文学 小说 经典名著 ",tags:"世界名著 好书 理想与现实 经典小说推荐 英国文学 ",img:"http://apis.juhe.cn/goodbook/img/724e8fb36260f71dc8c245edbcebb1c0.jpg",reading:"4824人阅读",bytime:"2013年6月13日"},{title:"霍乱时期的爱情",catalog:"外国文学 小说 经典名著 ",tags:"外国文学经典 拉美文学 经典好书推荐 经典爱情小说 诺贝尔文学奖 ",img:"http://apis.juhe.cn/goodbook/img/d539d14fe2e9450bb58164d4866819eb.jpg",reading:"5620人阅读",bytime:"2013年4月24日"},{title:"京华烟云",catalog:"中国文学 小说 经典名著 ",tags:"中国文学名著 中国近代历史 值得看的好书 小说推荐 经典好书推荐 ",img:"http://apis.juhe.cn/goodbook/img/8de57bb8f82c0f31035d25e48644f3dd.jpg",reading:"3754人阅读",bytime:"2013年4月12日"}],VarietyItem:[],swiperOption:{silderPerView:3}}},components:{swiper:z["swiper"],swiperSlide:z["swiperSlide"]},created:function(){var t=this,e=q.getVarietyItem;D.a.get(e).then(function(e){t.VarietyItem=e.data})},computed:Object(F["a"])({},Object(B["c"])(["userInfo"])),methods:{}},R=J,G=(a("4f37"),Object(P["a"])(R,E,A,!1,null,"7c5e45d4",null));G.options.__file="Home.vue";var K=G.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{attrs:{title:"商品类别"}}),a("div",{staticClass:"category"},[a("van-row",[a("van-col",{staticClass:"nav",attrs:{span:"6"}},[a("ul",t._l(t.types,function(e,i){return a("li",{key:i,class:{active:t.active==i},on:{click:function(a){t.selectCategory(e.typeId,i)}}},[t._v(t._s(e.typeName))])}),0)]),a("van-col",{staticClass:"container",attrs:{span:"18"}},[a("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[a("van-list",{staticClass:"content",attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},t._l(t.productList,function(e,i){return a("div",{key:i,staticClass:"content-item",on:{click:function(a){t.goDetail(e._id)}}},[a("img",{attrs:{src:e.img,alt:""}}),a("p",{staticClass:"content-item-name"},[t._v(t._s(e.name))]),a("p",[t._v("￥"+t._s(e.price))])])}),0)],1)],1)],1)],1)],1)},W=[],Y={data:function(){return{types:[],active:0,productList:[],typeId:1,start:0,limit:10,finished:!1,isLoading:!1}},created:function(){var t=this;D()({url:q.getTypes}).then(function(e){t.types=e.data,t.selectCategory(t.typeId,t.active)}).catch(function(e){console.log(e),t.$toast.fail("获取失败")})},methods:{selectCategory:function(t,e){this.active=e,this.typeId=t,this.productList=[],this.getProductList()},getProductList:function(){var t=this;D()({url:q.getProductsByType,method:"get",params:{typeId:this.typeId,start:this.productList.length,limit:this.limit}}).then(function(e){0!=e.data.length?t.productList=t.productList.concat(e.data):t.finished=!0,t.isLoading=!1}).catch(function(e){t.$toast.fail("获取失败")})},onLoad:function(){var t=this;setTimeout(function(){t.getProductList()},2e3)},onRefresh:function(){var t=this;setTimeout(function(){t.productList=[],t.getProductList()},2e3)},goDetail:function(t){this.$router.push("/detail/".concat(t))}}},X=Y,Z=(a("d0e3"),Object(P["a"])(X,Q,W,!1,null,"a05c72ee",null));Z.options.__file="Class.vue";var tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{staticClass:"header",attrs:{title:"购物车"}}),a("div",{staticClass:"card"},t._l(t.pruductList,function(e,i){return a("van-card",{key:i,attrs:{price:e.price,desc:e.company,title:e.name,thumb:e.img}},[a("div",{attrs:{slot:"footer"},slot:"footer"},[a("van-button",{attrs:{size:"small"},on:{click:function(a){t.cut(e._id,i)}}},[t._v("删除")])],1)])}),1),a("van-submit-bar",{staticClass:"submit-bar",attrs:{price:t.totalPrice,"button-text":"提交订单"},on:{submit:t.onSubmit}})],1)},at=[],it=a("5d73"),nt=a.n(it),ot=a("f499"),st=a.n(ot),rt={data:function(){return{pruductList:[]}},computed:Object(F["a"])({},Object(B["c"])(["userInfo"]),{totalPrice:function(){return 10*this.pruductList.reduce(function(t,e){return t+=e.price,t},0)*10}}),created:function(){var t=this;"{}"===st()(this.userInfo)?(this.$toast.fail("请先登录"),setTimeout(function(){t.$router.push("/mine")},1e3)):D()({url:q.getCar,method:"get",params:{userId:this.userInfo._id}}).then(function(e){var a=!0,i=!1,n=void 0;try{for(var o,s=nt()(e.data);!(a=(o=s.next()).done);a=!0){var r=o.value;t.pruductList.push(r.productId)}}catch(c){i=!0,n=c}finally{try{a||null==s.return||s.return()}finally{if(i)throw n}}}).catch(function(t){console.log(t)})},methods:{onSubmit:function(){this.$toast.fail("对不起，我们不卖")},cut:function(t,e){var a=this;D()({url:q.cutdata,method:"post",data:{id:t}}).then(function(t){a.pruductList.splice(e,1)}).catch(function(t){a.$toast.fail("删除失败")})}}},ct=rt,lt=(a("01e3"),Object(P["a"])(ct,et,at,!1,null,"69acb4c8",null));lt.options.__file="ShopCar.vue";var ut=lt.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-tabs",[a("van-tab",{attrs:{title:"登陆"}},[a("van-cell-group",[a("van-field",{attrs:{label:"用户名",required:"",clearable:"",placeholder:"请输入用户名"},model:{value:t.loginUsername,callback:function(e){t.loginUsername=e},expression:"loginUsername"}}),a("van-field",{attrs:{label:"密码",type:"password",required:"",clearable:"",placeholder:"请输入密码"},model:{value:t.loginPassword,callback:function(e){t.loginPassword=e},expression:"loginPassword"}})],1),a("div",[a("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.loginHandler}},[t._v("登陆")])],1)],1),a("van-tab",{attrs:{title:"注册"}},[a("van-cell-group",[a("van-field",{attrs:{label:"用户名",required:"",clearable:"",placeholder:"请输入用户名"},model:{value:t.registUsername,callback:function(e){t.registUsername=e},expression:"registUsername"}}),a("van-field",{attrs:{label:"密码",type:"password",required:"",clearable:"",placeholder:"请输入密码"},model:{value:t.registPassword,callback:function(e){t.registPassword=e},expression:"registPassword"}})],1),a("div",[a("van-button",{attrs:{type:"primary",size:"large"},on:{click:t.registHandler}},[t._v("注册")])],1)],1)],1)],1)},pt=[],ft=a("795b"),mt=a.n(ft),gt={data:function(){return{loginUsername:"",loginPassword:"",registUsername:"",registPassword:""}},methods:Object(F["a"])({},Object(B["b"])(["loginAction"]),{registHandler:function(){var t=this;D()({url:q.registUser,method:"post",data:{userName:this.registUsername,password:this.registPassword}}).then(function(e){200==e.data.code?(t.$toast.success("注册成功"),t.registUsername=t.registPassword=""):t.$toast.fail("注册失败")}).catch(function(){t.$toast.fail("注册失败")})},loginHandler:function(){var t=this;D()({url:q.loginUser,method:"post",data:{userName:this.loginUsername,password:this.loginPassword}}).then(function(e){200==e.data.code&&new mt.a(function(t){setTimeout(function(){t()},1e3)}).then(function(){t.$toast.success("登录成功"),t.loginAction(e.data.userInfo),t.$router.go(-1)}).catch(function(){t.$toast.fail("保存登录状态失败")})}).catch(function(){t.$toast.fail("登录失败")})}})},ht=gt,vt=Object(P["a"])(ht,dt,pt,!1,null,"28d1003e",null);vt.options.__file="Mine.vue";var bt=vt.exports,_t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-nav-bar",{attrs:{title:"商品详情","left-text":"返回"},on:{"click-left":function(e){t.$router.go(-1)}}}),a("img",{staticClass:"detail-img",attrs:{src:t.detail.img,alt:""}}),a("div",{staticClass:"detail"},[a("p",{staticClass:"detail-name"},[t._v(t._s(t.detail.name))]),a("p",{staticClass:"detail-price"},[t._v("￥"+t._s(t.detail.price))]),a("p",[t._v("公司："+t._s(t.detail.company))]),a("p",[t._v("产地："+t._s(t.detail.city))])]),a("van-goods-action",[a("van-goods-action-mini-btn",{attrs:{icon:"chat-o",text:"客服"},on:{click:t.talk}}),a("van-goods-action-mini-btn",{attrs:{icon:"cart-o",text:"购物车"},on:{click:t.goShopcar}}),a("van-goods-action-big-btn",{attrs:{text:"加入购物车"},on:{click:t.addShopcar}}),a("van-goods-action-big-btn",{attrs:{primary:"",text:"立即购买"},on:{click:t.buy}})],1)],1)},yt=[],wt={data:function(){return{detail:{}}},created:function(){var t=this;D()({url:q.getDetail,method:"get",params:{id:this.$route.params.id}}).then(function(e){t.detail=e.data}).catch(function(t){})},computed:Object(F["a"])({},Object(B["c"])(["userInfo"])),methods:{addShopcar:function(){var t=this;"{}"===st()(this.userInfo)?(this.$toast.fail("请先登录"),setTimeout(function(){t.$router.push("/mine")},1e3)):D()({url:q.addcar,method:"post",data:{productId:this.detail._id,userId:this.userInfo._id}}).then(function(e){200==e.data.code&&t.$toast.success(e.data.message)}).catch(function(t){console.log(t)})},talk:function(){this.$toast.fail("对不起，我们没钱请客服")},goShopcar:function(){this.$router.push("/shopcar")},buy:function(){this.$toast.fail("对不起，我们不卖")}}},kt=wt,jt=(a("bb8b"),Object(P["a"])(kt,_t,yt,!1,null,"fe15aa90",null));jt.options.__file="Detail.vue";var $t=jt.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-tabbar",{staticClass:"foot-bar",on:{change:t.change},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tabbar-item",{attrs:{icon:"wap-home",to:"/"}},[t._v("首页")]),a("van-tabbar-item",{attrs:{icon:"ellipsis",to:"/class"}},[t._v("分类")]),a("van-tabbar-item",{attrs:{icon:"shopping-cart-o",to:"/shopcar"}},[t._v("购物车")]),a("van-tabbar-item",{attrs:{icon:"user-o",to:"/mine"}},[t._v("我的")])],1)],1)},Ct=[],Lt=a("e814"),It=a.n(Lt),Ot={data:function(){return{active:0}},created:function(){this.active=It()(localStorage.getItem("active"))},methods:{change:function(t){localStorage.setItem("active",t)}}},Pt=Ot,St=(a("30eb"),Object(P["a"])(Pt,xt,Ct,!1,null,null,null));St.options.__file="FooterBar.vue";var Tt=St.exports,Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{on:{click:t.back}},[a("img",{attrs:{src:t.img.url,alt:""}})])},Et=[],At={data:function(){return{img:{url:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2299622565,1544540595&fm=26&gp=0.jpg"}}},methods:{back:function(){this.$router.go(-1)}}},Ft=At,zt=(a("ed39"),Object(P["a"])(Ft,Ut,Et,!1,null,null,null));zt.options.__file="Error.vue";var Ht=zt.exports;x["a"].use(U["a"]);var Dt=new U["a"]({mode:"history",routes:[{path:"/",name:"home",components:{default:K,footerbar:Tt},meta:{keepAlive:!0}},{path:"/class",name:"class",components:{default:tt,footerbar:Tt},meta:{keepAlive:!0}},{path:"/shopcar",name:"shopcar",components:{default:ut,footerbar:Tt},meta:{keepAlive:!1}},{path:"/mine",name:"mine",components:{default:bt,footerbar:Tt},meta:{keepAlive:!1}},{path:"/detail/:id",name:"detail",component:$t},{path:"*",component:Ht}]});x["a"].use(B["a"]);var Mt=new B["a"].Store({state:{userInfo:{}},getters:{},mutations:{changeLogin:function(t,e){t.userInfo=e}},actions:{loginAction:function(t,e){var a=t.commit;a("changeLogin",e)}}});a("4ee2");(function(t){var e,a=t.document,i=a.documentElement;function n(){var t=i.getBoundingClientRect().width,e=t/6.4;i.style.fontSize=e+"px"}t.addEventListener("resize",function(){clearTimeout(e),e=setTimeout(n,10)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(e),e=setTimeout(n,10))},!1),n()})(window),x["a"].config.productionTip=!1,x["a"].use(i["a"]).use(n["a"]).use(o["a"]).use(s["a"]).use(r["a"]).use(c["a"]).use(l["a"]).use(u["a"]).use(d["a"]).use(p["a"]).use(f["a"]).use(m["a"]).use(g["a"]).use(h["a"]).use($["a"]).use(v["a"]).use(b["a"]).use(_["a"]).use(y["a"]).use(w["a"]).use(k["a"]).use(j["a"]).use($["a"]),new x["a"]({router:Dt,store:Mt,render:function(t){return t(T)}}).$mount("#app")},"7a29":function(t,e,a){},"8d9e":function(t,e,a){},"9e32":function(t,e,a){},b999:function(t,e,a){},bb8b:function(t,e,a){"use strict";var i=a("d1a9"),n=a.n(i);n.a},d0e3:function(t,e,a){"use strict";var i=a("7a29"),n=a.n(i);n.a},d1a9:function(t,e,a){},e83f:function(t,e,a){},ed39:function(t,e,a){"use strict";var i=a("8d9e"),n=a.n(i);n.a}});
//# sourceMappingURL=app.1e97cd0a.js.map