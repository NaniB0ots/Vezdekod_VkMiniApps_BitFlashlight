(this.webpackJsonpvezdekod_vk_mini_apps_bit_flashlight=this.webpackJsonpvezdekod_vk_mini_apps_bit_flashlight||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n.n(s),c=n(14),a=n.n(c),l=n(12),o=n.n(l),r=n(7),h=(n(128),n(23)),d=n(24),b=n(26),j=n(25),p=n(6),u=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"init",value:function(){console.log("asd!!"),o.a.send("VKWebAppInit",{}),o.a.send("VKWebAppShowWallPostBox",{message:"Hello!"}).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)})),o.a.send("VKWebAppShowOrderBox",{type:"item",item:"item_id_123"}),o.a.subscribe((function(e){"VKWebAppShowOrderBoxResult"==e.type&&console.log(e.data.status)}))}},{key:"initFlashlight",value:function(){o.a.send("VKWebAppFlashGetInfo").then((function(e){return console.log(e),console.log("\u0414\u043e\u0441\u0442\u0443\u043f \u043f\u043e\u043b\u0443\u0447\u0435\u043d"),o.a.send("VKWebAppFlashSetLevel",{level:1}),!0})).catch((function(e){return console.log(e),!1}))}},{key:"render",value:function(){return this.initFlashlight()&&o.a.send("VKWebAppFlashSetLevel",{level:1}),Object(p.jsx)(r.k,{activePanel:"main",children:Object(p.jsxs)(r.f,{id:"main",children:[Object(p.jsxs)(r.g,{children:["BitFlashlight",Object(p.jsx)(r.h,{status:"Created by NaniB0ots"})]}),Object(p.jsx)(r.d,{children:Object(p.jsx)(r.c,{children:"NaniB0ots"})})]})})}}]),n}(i.a.Component),O=function(){var e=Object(r.m)().viewWidth;return Object(p.jsx)(r.a,{children:Object(p.jsx)(r.b,{children:Object(p.jsx)(r.j,{header:Object(p.jsx)(r.g,{separator:!1}),children:Object(p.jsx)(r.i,{spaced:e>r.l.MOBILE,children:Object(p.jsx)(u,{})})})})})};o.a.send("VKWebAppInit"),a.a.render(Object(p.jsx)(O,{}),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.427b1b59.chunk.js.map