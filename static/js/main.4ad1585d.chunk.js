(this.webpackJsonpvezdekod_vk_mini_apps_bit_flashlight=this.webpackJsonpvezdekod_vk_mini_apps_bit_flashlight||[]).push([[0],{126:function(e,t,c){},128:function(e,t,c){"use strict";c.r(t);var n,s=c(0),a=c.n(s),h=c(14),i=c.n(h),o=c(13),l=c.n(o),r=c(7),b=(c(125),c(23)),d=c(24),u=c(26),k=c(25),j=(c(126),c(5)),x=function(e){Object(u.a)(c,e);var t=Object(k.a)(c);function c(e){var n;return Object(b.a)(this,c),(n=t.call(this,e)).state={is_available:123,checkboxList:[!0,!0,!0,!0,!0,!0,!0,!0],is_started:!1},n.initFlashlight(),n}return Object(d.a)(c,[{key:"initFlashlight",value:function(){var e=this;console.log("\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0430..."),l.a.send("VKWebAppFlashGetInfo").then((function(t){return console.log(t),console.log("\u0414\u043e\u0441\u0442\u0443\u043f \u043f\u043e\u043b\u0443\u0447\u0435\u043d"),e.state.is_available=t.is_available,!0})).catch((function(e){return console.log(e),!1}))}},{key:"handleChangeChk",value:function(e){this.state.checkboxList[e]=!this.state.checkboxList[e]}},{key:"start_dance",value:function(){var e=this;console.log("\u041d\u0430\u0447\u0430\u043b\u0438!");var t=0;n=setInterval((function(){e.state.checkboxList[t]?(l.a.send("VKWebAppFlashSetLevel",{level:1}),console.log("\u0424\u043e\u043d\u0430\u0440\u044c ".concat(t," \u0432\u043a\u043b\u044e\u0447\u0435\u043d"))):(l.a.send("VKWebAppFlashSetLevel",{level:0}),console.log("\u0424\u043e\u043d\u0430\u0440\u044c ".concat(t," \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d"))),8===++t&&(t=0)}),1e3)}},{key:"handleStartButton",value:function(e){this.setState({checkboxList:this.state.checkboxList,is_started:!e}),e?(clearInterval(n),console.log("\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e!"),l.a.send("VKWebAppFlashSetLevel",{level:0}),console.log("\u0424\u043e\u043d\u0430\u0440\u044c \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d")):this.start_dance()}},{key:"render",value:function(){var e=this;return Object(j.jsx)(r.l,{activePanel:"main",children:Object(j.jsxs)(r.g,{id:"main",children:[Object(j.jsxs)(r.h,{children:["BitFlashlight",Object(j.jsx)(r.i,{status:"Created by NaniB0ots"})]}),Object(j.jsxs)(r.e,{children:[Object(j.jsx)(r.d,{children:Object(j.jsxs)("div",{className:"checkboxItems",children:[Object(j.jsx)("input",{className:"checkbox",type:"checkbox",defaultChecked:this.state.checkboxList[0],onChange:function(){return e.handleChangeChk(0)}}),Object(j.jsx)("input",{className:"checkbox",type:"checkbox",defaultChecked:this.state.checkboxList[1],onChange:function(){return e.handleChangeChk(1)}}),Object(j.jsx)("input",{className:"checkbox",type:"checkbox",defaultChecked:this.state.checkboxList[2],onChange:function(){return e.handleChangeChk(2)}}),Object(j.jsx)("input",{className:"checkbox",type:"checkbox",defaultChecked:this.state.checkboxList[3],onChange:function(){return e.handleChangeChk(3)}}),Object(j.jsx)("input",{className:"checkbox",type:"checkbox",defaultChecked:this.state.checkboxList[4],onChange:function(){return e.handleChangeChk(4)}}),Object(j.jsx)("input",{className:"checkbox",type:"checkbox",defaultChecked:this.state.checkboxList[5],onChange:function(){return e.handleChangeChk(5)}}),Object(j.jsx)("input",{className:"checkbox",type:"checkbox",defaultChecked:this.state.checkboxList[6],onChange:function(){return e.handleChangeChk(6)}}),Object(j.jsx)("input",{className:"checkbox",type:"checkbox",defaultChecked:this.state.checkboxList[7],onChange:function(){return e.handleChangeChk(7)}})]})}),Object(j.jsx)(r.d,{children:this.state.is_started?Object(j.jsx)(r.c,{className:"startButton",onClick:function(){return e.handleStartButton(e.state.is_started)},mode:"destructive",size:"l",children:"\u0421\u0442\u043e\u043f"}):Object(j.jsx)(r.c,{className:"startButton",onClick:function(){return e.handleStartButton(e.state.is_started)},mode:"commerce",size:"l",children:"\u0421\u0442\u0430\u0440\u0442"})})]})]})})}}]),c}(a.a.Component),p=function(){var e=Object(r.n)().viewWidth;return Object(j.jsx)(r.a,{children:Object(j.jsx)(r.b,{children:Object(j.jsx)(r.k,{header:Object(j.jsx)(r.h,{separator:!1}),children:Object(j.jsx)(r.j,{spaced:e>r.m.MOBILE,children:Object(j.jsx)(x,{})})})})})};l.a.send("VKWebAppInit"),i.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.4ad1585d.chunk.js.map