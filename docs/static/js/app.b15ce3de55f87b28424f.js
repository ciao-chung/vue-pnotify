webpackJsonp([0],{"4Dne":function(t,n,s){"use strict";s.d(n,"a",function(){return e});var e=new(s("7+uW").a)},"5LSt":function(t,n,s){t.exports=s("OHNY")},"5Nmc":function(t,n){},AGPT:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("section",[s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-javascript"}},[s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$notify({\n  "),s("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{attrs:{class:"hljs-string"}},[t._v("'Foo'")]),t._v(",\n  "),s("span",{attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),s("span",{attrs:{class:"hljs-string"}},[t._v("'bar...'")]),t._v(",\n  "),s("span",{attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{attrs:{class:"hljs-string"}},[t._v("'fa fa-info'")]),t._v(",\n})\n")])])])}]},i=s("VU/8")(null,e,!1,null,null,null);n.default=i.exports},BEvH:function(t,n){},EKqj:function(t,n,s){"use strict";var e=s("zmEc"),i={methods:{open(){this.$notify("Simple Notify")}},components:{Snippet:s.n(e).a}},a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",[this._v("Base")]),this._v(" "),n("button",{on:{click:this.open}},[this._v("Simple Notify")]),this._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6 col-md-4 col-lg-3"},[n("div",{staticClass:"markdown-container"},[n("Snippet")],1)])])])},staticRenderFns:[]};var o=s("VU/8")(i,a,!1,function(t){s("Kj28")},"data-v-066cd350",null);n.a=o.exports},FIt3:function(t,n){},"FR/M":function(t,n,s){"use strict";var e=s("5LSt"),i={data:()=>({styles:["info","success","warning","error"]}),methods:{open(t){this.$notify({title:"Style Notify",text:t,style:t})}},components:{Snippet:s.n(e).a}},a={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",[s("h1",[t._v("Style")]),t._v(" "),t._l(t.styles,function(n){return s("button",{on:{click:function(s){t.open(n)}}},[t._v("\n    "+t._s(n)+"\n  ")])}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6 col-md-4 col-lg-3"},[s("div",{staticClass:"markdown-container"},[s("Snippet")],1)])])],2)},staticRenderFns:[]};var o=s("VU/8")(i,a,!1,function(t){s("BEvH")},"data-v-633c7b72",null);n.a=o.exports},GV29:function(t,n){},HCX3:function(t,n,s){"use strict";var e=s("R0cx"),i={methods:{open(){this.$notify({title:"Sticky Notify",text:"This is sticky notify",sticky:!0})}},components:{Snippet:s.n(e).a}},a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",[this._v("Sticky")]),this._v(" "),n("button",{on:{click:this.open}},[this._v("Sticky")]),this._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6 col-md-4 col-lg-3"},[n("div",{staticClass:"markdown-container"},[n("Snippet")],1)])])])},staticRenderFns:[]};var o=s("VU/8")(i,a,!1,function(t){s("KyLb")},"data-v-22a75f35",null);n.a=o.exports},JD5p:function(t,n){},JKvD:function(t,n){},K4l6:function(t,n,s){"use strict";var e=s("Vo98"),i={methods:{open(){this.$notify({title:"Foo",text:"bar...",icon:"fa fa-info"})}},components:{Snippet:s.n(e).a}},a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",[this._v("Options")]),this._v(" "),n("button",{on:{click:this.open}},[this._v("Notify")]),this._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-6 col-md-4 col-lg-3"},[n("div",{staticClass:"markdown-container"},[n("Snippet")],1)])])])},staticRenderFns:[]};var o=s("VU/8")(i,a,!1,function(t){s("JKvD")},"data-v-184f5581",null);n.a=o.exports},Kj28:function(t,n){},KyLb:function(t,n){},Ll6O:function(t,n){},M93x:function(t,n,s){"use strict";s("K3J8");var e=s("7+uW"),i=s("Zrlr"),a=s.n(i),o=s("wxAW"),l=s.n(o),c=s("d3pU"),r={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var u=function(t){s("GV29"),s("FIt3"),s("Ll6O"),s("yvrG"),s("hCdQ")},f=s("VU/8")(c.a,r,!1,u,null,null).exports,v=s("4Dne"),p=new(function(){function t(){a()(this,t),this.isInstalled=!1}return l()(t,[{key:"install",value:function(t,n){this.isInstalled||(this.isInstalled=!0,t.component("AwesomeNotify",f),t.prototype.$notify=function(t){v.a.$emit("notify",t)})}}]),t}()),h={data:()=>({blocks:[{label:"Base",name:"base"},{label:"Options",name:"options"},{label:"Style",name:"style"},{label:"Sticky",name:"sticky"}]})},d={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("nav",{staticClass:"navbar navbar-default"},[s("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[s("ul",{staticClass:"nav navbar-nav"},t._l(t.blocks,function(n){return s("li",[s("router-link",{key:n.name,staticClass:"dropdown-item",attrs:{to:{name:"home",query:{block:n.name}}}},[t._v("\n            "+t._s(n.label)+"\n          ")])],1)}))])])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"navbar-header"},[n("a",{staticClass:"navbar-brand"},[this._v("\n        Vue PNotify\n      ")])])}]};var _=s("VU/8")(h,d,!1,function(t){s("ivD/")},"data-v-d956aeec",null).exports;e.a.use(p);var m={name:"App",data:()=>({options:{defaultStyle:"success",animateConfig:{animate:!0,in_class:"flipInX",out_class:"flipOutX"}}}),components:{ComponentNav:_}},y={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("ComponentNav"),this._v(" "),n("router-view",{staticClass:"route-view"}),this._v(" "),n("AwesomeNotify",{attrs:{options:this.options}})],1)},staticRenderFns:[]};var k=s("VU/8")(m,y,!1,function(t){s("5Nmc"),s("U17+"),s("JD5p"),s("ufn1")},"data-v-4936e318",null);n.a=k.exports},NHnr:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(t){var n=s("7+uW"),e=s("M93x"),i=s("eEz7"),a=s("7t+N"),o=s.n(a);n.a.config.productionTip=!1,t||(t=o.a),new n.a({el:"#app",router:i.a,components:{App:e.a},template:"<App/>"})}.call(n,s("7t+N"))},OHNY:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("section",[s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-javascript"}},[s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$notify({\n  "),s("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{attrs:{class:"hljs-string"}},[t._v("'Foo'")]),t._v(",\n  "),s("span",{attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),s("span",{attrs:{class:"hljs-string"}},[t._v("'bar...'")]),t._v(",\n  "),s("span",{attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),s("span",{attrs:{class:"hljs-string"}},[t._v("'fa fa-info'")]),t._v(",\n})\n")])])])}]},i=s("VU/8")(null,e,!1,null,null,null);n.default=i.exports},R0cx:function(t,n,s){t.exports=s("Siwj")},Siwj:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("section",[s("pre",{pre:!0},[s("code",{attrs:{"v-pre":"",class:"language-javascript"}},[s("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$notify({\n  "),s("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),s("span",{attrs:{class:"hljs-string"}},[t._v("'Sticky Notify'")]),t._v(",\n  "),s("span",{attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),s("span",{attrs:{class:"hljs-string"}},[t._v("'This is sticky notify'")]),t._v(",\n  "),s("span",{attrs:{class:"hljs-attr"}},[t._v("sticky")]),t._v(": "),s("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n})\n")])])])}]},i=s("VU/8")(null,e,!1,null,null,null);n.default=i.exports},"U17+":function(t,n){},UGlV:function(t,n,s){"use strict";(function(t){var e=s("q7+D"),i=s("OEdS"),a=s.n(i),o=s("EKqj"),l=s("K4l6"),c=s("FR/M"),r=s("HCX3");n.a={data:()=>({navHeight:50,blocks:[{name:"Base",id:"base"},{name:"Options",id:"options"},{name:"Style",id:"style"},{name:"Sticky",id:"sticky"}]}),mounted(){this.highlightSnippet(),this.scrollToBlock()},updated(){this.highlightSnippet()},methods:{highlightSnippet(){this.$nextTick(()=>{a.a.highlightAll()})},scrollToBlock(){const n=this.$route.query.block;if(!n)return;const s=t(`.block[block="${n}"]`);Object(e.a)("div#app",{duration:1e3,offset:s.offset().top-this.navHeight,a11y:!1})}},watch:{$route(){this.scrollToBlock()}},components:{BaseBlock:o.a,OptionsBlock:l.a,StyleBlock:c.a,StickyBlock:r.a}}}).call(n,s("7t+N"))},Vo98:function(t,n,s){t.exports=s("AGPT")},d3pU:function(t,n,s){"use strict";(function(t){var e=s("AsMD"),i=s.n(e),a=s("KeJz"),o=(s.n(a),s("+MnS")),l=(s.n(o),s("4Dne"));window.PNotify=i.a,n.a={props:{options:{type:Object,default:()=>null}},data:()=>({defaultAnimateConfig:{animate:!0,in_class:"bounceIn",out_class:"bounceOut"}}),created(){i.a.prototype.options.styling="fontawesome",l.a.$on("notify",this.notify)},methods:{createConfig(t){let n={};return t instanceof Object?((n={title:t.title||"",text:t.text||"",type:t.style||"success",icon:t.icon||null,sticky:t.sticky||!1,animate:this.animateConfig}).sticky||(n.delay=t.delay||this.defaultDelay),n):n={title:t||"",type:this.defaultStyle,delay:this.defaultDelay,animate:this.animateConfig}},notify(n){let s=new i.a(this.createConfig(n));this.$nextTick(()=>t("body>div.ui-pnotify").css({"z-index":this.zIndex})),s.get().click(function(){s.remove()})}},computed:{defaultStyle(){return this.options&&this.options.defaultStyle?this.options.defaultStyle:"info"},zIndex(){return this.options&&this.options.zIndex?this.options.zIndex:9e3},defaultDelay(){return this.options&&this.options.defaultDelay?this.options.defaultDelay:8e3},animateConfig(){return this.options&&this.options.animateConfig?this.options.animateConfig:this.defaultAnimateConfig}}}}).call(n,s("7t+N"))},eEz7:function(t,n,s){"use strict";var e=s("7+uW"),i=s("/ocq"),a=s("UGlV"),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",this._l(this.blocks,function(t){return n("div",{key:"block"+t.name,staticClass:"block",attrs:{block:t.id}},[n(t.name+"Block",{tag:"component"})],1)}))},staticRenderFns:[]};var l=function(t){s("twJV")},c=s("VU/8")(a.a,o,!1,l,null,null).exports;e.a.use(i.a);n.a=new i.a({routes:[{path:"/",name:"home",component:c}]})},hCdQ:function(t,n){},hPEk:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("section",[n("pre",{pre:!0},[n("code",{attrs:{"v-pre":"",class:"language-javascript"}},[n("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$notify("),n("span",{attrs:{class:"hljs-string"}},[this._v("'Simple Notify'")]),this._v(")\n")])])])}]},i=s("VU/8")(null,e,!1,null,null,null);n.default=i.exports},"ivD/":function(t,n){},twJV:function(t,n){},ufn1:function(t,n){},yvrG:function(t,n){},zmEc:function(t,n,s){t.exports=s("hPEk")}},["NHnr"]);
//# sourceMappingURL=app.b15ce3de55f87b28424f.js.map