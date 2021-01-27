(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-collapse/uni-collapse"],{4907:function(n,t,e){},6905:function(n,t,e){"use strict";e.r(t);var u=e("bb91"),a=e("a72e");for(var c in a)"default"!==c&&function(n){e.d(t,n,(function(){return a[n]}))}(c);e("9225");var r,o=e("f0c5"),i=Object(o["a"])(a["default"],u["b"],u["c"],!1,null,"506c0e2e",null,!1,u["a"],r);t["default"]=i.exports},9225:function(n,t,e){"use strict";var u=e("4907"),a=e.n(u);a.a},a72e:function(n,t,e){"use strict";e.r(t);var u=e("b7fb"),a=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,(function(){return u[n]}))}(c);t["default"]=a.a},b7fb:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"UniCollapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach((function(t,e){t.isOpen&&n.push(t.nameSync)})),this.$emit("change",n)}}};t.default=u},bb91:function(n,t,e){"use strict";var u;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return u}));var a=function(){var n=this,t=n.$createElement;n._self._c},c=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6905"))
        })
    },
    [['components/uni-collapse/uni-collapse-create-component']]
]);
