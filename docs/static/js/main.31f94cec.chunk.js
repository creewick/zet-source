(window.webpackJsonpzet=window.webpackJsonpzet||[]).push([[0],{4:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(2),o=n.n(i),s=n(3),l=function(e){return e.getElementsByClassName("c1")[0].innerText.includes("\u043c\u043e\u0434\u0443\u043b\u0438")},c=function(e){var t=e.getElementsByTagName("td"),n=t[0].innerText.match(/(\u041c\.\d+\.\d+) (.*)/),r=parseInt(t[1].innerText,10);return{code:n[1],name:n[2],points:r,courses:{required:[],additional:[]}}},u=function(e){var t=e.getElementsByTagName("i")[0].innerText;return t.includes("\u041a\u043e\u043d\u0442\u0440\u043e\u043b\u044c")?null:t.includes("\u041f\u043e \u0432\u044b\u0431\u043e\u0440\u0443")?"additional":"required"},m=function(e){var t=e.getElementsByTagName("td");if(t.length<4)return null;var n=t[0].innerText.match(/(\d+\.\d+\.\d+) (.*)/),r=parseInt(t[1].innerText,10),a=t[2].innerText.split(", "),i=t[3].innerText.split(", ").map(parseInt);return{code:n[1],name:n[2],points:r,types:a,semesters:i}},d=function(e){var t=document.createElement("html");t.innerHTML=e;var n=t.getElementsByClassName("edication-plan")[0].getElementsByTagName("tr"),r={modules:[]},a=null,i=null,o=!0,s=!1,d=void 0;try{for(var h,p=n[Symbol.iterator]();!(o=(h=p.next()).done);o=!0){var f=h.value,v=f.className;if("tr-header"===v&&!l(f))break;if("tr-second-header"===v&&(a=c(f),r.modules.push(a)),"tr-third-header"===v&&(i=u(f)),""===v){var g=m(f);a&&i&&g&&a.courses[i].push(g)}}}catch(w){s=!0,d=w}finally{try{o||null==p.return||p.return()}finally{if(s)throw d}}return r};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(function(){var e=Object(r.useState)({}),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)(function(){fetch("https://raw.githubusercontent.com/creewick/zet/master/src/plan.html").then(function(e){return e.text()}).then(d).then(i)},[]),a.a.createElement("div",{className:"App"},n.modules&&n.modules.map(function(e){return a.a.createElement("h1",null,e.name)}))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[4,1,2]]]);
//# sourceMappingURL=main.31f94cec.chunk.js.map