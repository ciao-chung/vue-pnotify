webpackJsonp([0],{"++Y+":function(t,n){},"4Dne":function(t,n,e){"use strict";e.d(n,"a",function(){return s});var s=new(e("7+uW").a)},"5LSt":function(t,n,e){t.exports=e("OHNY")},ACKw:function(t,n){},AGPT:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$notify({\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'Foo'")]),t._v(",\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'bar...'")]),t._v(",\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'fa fa-info'")]),t._v(",\n})\n")])])])}]},i=e("VU/8")(null,s,!1,null,null,null);n.default=i.exports},Dfzr:function(t,n){},EKqj:function(t,n,e){"use strict";var s=e("zmEc"),i={methods:{open(){this.$notify("Simple Notify")}},components:{Snippet:e.n(s).a}},a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",[this._v("Base")]),this._v(" "),n("button",{on:{click:this.open}},[this._v("Simple Notify")]),this._v(" "),n("div",[n("Snippet")],1)])},staticRenderFns:[]};var o=e("VU/8")(i,a,!1,function(t){e("Dfzr")},"data-v-337e6405",null);n.a=o.exports},EyII:function(t,n){},"FR/M":function(t,n,e){"use strict";var s=e("5LSt"),i={data:()=>({styles:["info","success","warning","error"]}),methods:{open(t){this.$notify({title:"Style Notify",text:t,style:t})}},components:{Snippet:e.n(s).a}},a={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._v("Style")]),t._v(" "),t._l(t.styles,function(n){return e("button",{on:{click:function(e){t.open(n)}}},[t._v("\n    "+t._s(n)+"\n  ")])}),t._v(" "),e("div",[e("Snippet")],1)],2)},staticRenderFns:[]};var o=e("VU/8")(i,a,!1,function(t){e("++Y+")},"data-v-4705fdf2",null);n.a=o.exports},HCX3:function(t,n,e){"use strict";var s=e("R0cx"),i={methods:{open(){this.$notify({title:"Sticky Notify",text:"This is sticky notify",sticky:!0})}},components:{Snippet:e.n(s).a}},a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",[this._v("Sticky")]),this._v(" "),n("button",{on:{click:this.open}},[this._v("Sticky")]),this._v(" "),n("div",[n("Snippet")],1)])},staticRenderFns:[]};var o=e("VU/8")(i,a,!1,function(t){e("MYRA")},"data-v-4c13d420",null);n.a=o.exports},J0Bq:function(t,n){},Jm48:function(t,n){},JoCU:function(t,n){},K4l6:function(t,n,e){"use strict";var s=e("Vo98"),i={methods:{open(){this.$notify({title:"Foo",text:"bar...",icon:"fa fa-info"})}},components:{Snippet:e.n(s).a}},a={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",[this._v("Options")]),this._v(" "),n("button",{on:{click:this.open}},[this._v("Notify")]),this._v(" "),n("div",[n("Snippet")],1)])},staticRenderFns:[]};var o=e("VU/8")(i,a,!1,function(t){e("LJAp")},"data-v-6be8b0a8",null);n.a=o.exports},LJAp:function(t,n){},M5Mu:function(t,n){},M93x:function(t,n,e){"use strict";e("K3J8");var s=e("7+uW"),i=e("Zrlr"),a=e.n(i),o=e("wxAW"),l=e.n(o),r=e("d3pU"),c={render:function(){var t=this.$createElement;return(this._self._c||t)("div")},staticRenderFns:[]};var u=function(t){e("anVV"),e("EyII"),e("ACKw"),e("J0Bq"),e("rB8c")},f=e("VU/8")(r.a,c,!1,u,null,null).exports,p=e("4Dne"),v=new(function(){function t(){a()(this,t),this.isInstalled=!1}return l()(t,[{key:"install",value:function(t,n){this.isInstalled||(this.isInstalled=!0,t.component("VuePNotify",f),t.prototype.$notify=function(t){p.a.$emit("notify",t)})}}]),t}()),h={data:()=>({blocks:[{label:"Base",name:"base"},{label:"Options",name:"options"},{label:"Style",name:"style"},{label:"Sticky",name:"sticky"}]})},d={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"navbar navbar-default"},[e("div",{staticClass:"container-fluid"},[t._m(0),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"bs-example-navbar-collapse-1"}},[e("ul",{staticClass:"nav navbar-nav"},t._l(t.blocks,function(n){return e("li",[e("router-link",{key:n.name,staticClass:"dropdown-item",attrs:{to:{name:"home",query:{block:n.name}}}},[t._v("\n            "+t._s(n.label)+"\n          ")])],1)}))])])])},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"navbar-header"},[n("a",{staticClass:"navbar-brand"},[this._v("\n        Vue PNotify\n      ")])])}]};var _=e("VU/8")(h,d,!1,function(t){e("ivD/")},"data-v-d956aeec",null).exports;s.a.use(v);var y={name:"App",data:()=>({options:{defaultStyle:"success",animateConfig:{animate:!0,in_class:"flipInX",out_class:"flipOutX"}}}),components:{ComponentNav:_}},m={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("ComponentNav"),this._v(" "),n("router-view",{staticClass:"route-view"}),this._v(" "),n("VuePNotify",{attrs:{options:this.options}})],1)},staticRenderFns:[]};var k=e("VU/8")(y,m,!1,function(t){e("UXX+"),e("JoCU"),e("M5Mu"),e("O9TV")},"data-v-71974188",null);n.a=k.exports},MYRA:function(t,n){},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(t){var n=e("7+uW"),s=e("M93x"),i=e("eEz7"),a=e("7t+N"),o=e.n(a);n.a.config.productionTip=!1,t||(t=o.a),new n.a({el:"#app",router:i.a,components:{App:s.a},template:"<App/>"})}.call(n,e("7t+N"))},O9TV:function(t,n){},OHNY:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$notify({\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'Foo'")]),t._v(",\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'bar...'")]),t._v(",\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("icon")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'fa fa-info'")]),t._v(",\n})\n")])])])}]},i=e("VU/8")(null,s,!1,null,null,null);n.default=i.exports},R0cx:function(t,n,e){t.exports=e("Siwj")},Siwj:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("pre",{pre:!0},[e("code",{attrs:{"v-pre":"",class:"language-javascript"}},[e("span",{attrs:{class:"hljs-keyword"}},[t._v("this")]),t._v(".$notify({\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'Sticky Notify'")]),t._v(",\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("text")]),t._v(": "),e("span",{attrs:{class:"hljs-string"}},[t._v("'This is sticky notify'")]),t._v(",\n  "),e("span",{attrs:{class:"hljs-attr"}},[t._v("sticky")]),t._v(": "),e("span",{attrs:{class:"hljs-literal"}},[t._v("true")]),t._v(",\n})\n")])])])}]},i=e("VU/8")(null,s,!1,null,null,null);n.default=i.exports},UGlV:function(t,n,e){"use strict";(function(t){var s=e("q7+D"),i=e("OEdS"),a=e.n(i),o=e("EKqj"),l=e("K4l6"),r=e("FR/M"),c=e("HCX3");n.a={data:()=>({navHeight:50,blocks:[{name:"Base",id:"base"},{name:"Options",id:"options"},{name:"Style",id:"style"},{name:"Sticky",id:"sticky"}]}),mounted(){this.highlightSnippet(),this.scrollToBlock()},updated(){this.highlightSnippet()},methods:{highlightSnippet(){this.$nextTick(()=>{a.a.highlightAll()})},scrollToBlock(){const n=this.$route.query.block;if(!n)return;const e=t(`.block[block="${n}"]`);Object(s.a)("div#app",{duration:1e3,offset:e.offset().top-this.navHeight,a11y:!1})}},watch:{$route(){this.scrollToBlock()}},components:{BaseBlock:o.a,OptionsBlock:l.a,StyleBlock:r.a,StickyBlock:c.a}}}).call(n,e("7t+N"))},"UXX+":function(t,n){},Vo98:function(t,n,e){t.exports=e("AGPT")},anVV:function(t,n){},d3pU:function(t,n,e){"use strict";(function(t){var s=e("AsMD"),i=e.n(s),a=e("KeJz"),o=(e.n(a),e("+MnS")),l=(e.n(o),e("4Dne"));window.PNotify=i.a,n.a={props:{options:{type:Object,default:()=>null}},data:()=>({defaultAnimateConfig:{animate:!0,in_class:"bounceIn",out_class:"bounceOut"}}),created(){i.a.prototype.options.styling="fontawesome",l.a.$on("notify",this.notify)},methods:{createConfig(t){let n={};return t instanceof Object?((n={title:t.title||"",text:t.text||"",type:t.style||"success",icon:t.icon||null,hide:1!=t.sticky,animate:this.animateConfig}).hide&&(n.delay=t.delay||this.defaultDelay),n):n={title:t||"",type:this.defaultStyle,delay:this.defaultDelay,animate:this.animateConfig}},notify(n){let e=new i.a(this.createConfig(n));this.$nextTick(()=>t("body>div.ui-pnotify").css({"z-index":this.zIndex})),e.get().click(function(){e.remove()})}},computed:{defaultStyle(){return this.options&&this.options.defaultStyle?this.options.defaultStyle:"info"},zIndex(){return this.options&&this.options.zIndex?this.options.zIndex:9e3},defaultDelay(){return this.options&&this.options.defaultDelay?this.options.defaultDelay:8e3},animateConfig(){return this.options&&this.options.animateConfig?this.options.animateConfig:this.defaultAnimateConfig}}}}).call(n,e("7t+N"))},eEz7:function(t,n,e){"use strict";var s=e("7+uW"),i=e("/ocq"),a=e("UGlV"),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"row"},this._l(this.blocks,function(t){return n("div",{key:"block"+t.name,staticClass:"block col-xs-12 col-sm-12 col-md-6 col-lg-6",attrs:{block:t.id}},[n(t.name+"Block",{tag:"component"})],1)}))},staticRenderFns:[]};var l=function(t){e("Jm48")},r=e("VU/8")(a.a,o,!1,l,null,null).exports;s.a.use(i.a);n.a=new i.a({routes:[{path:"/",name:"home",component:r}]})},hPEk:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("section",[n("pre",{pre:!0},[n("code",{attrs:{"v-pre":"",class:"language-javascript"}},[n("span",{attrs:{class:"hljs-keyword"}},[this._v("this")]),this._v(".$notify("),n("span",{attrs:{class:"hljs-string"}},[this._v("'Simple Notify'")]),this._v(")\n")])])])}]},i=e("VU/8")(null,s,!1,null,null,null);n.default=i.exports},"ivD/":function(t,n){},rB8c:function(t,n){},zmEc:function(t,n,e){t.exports=e("hPEk")}},["NHnr"]);
//# sourceMappingURL=app.d8064bd9c6653b2fd0ef.js.map