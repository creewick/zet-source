(window.webpackJsonpzet=window.webpackJsonpzet||[]).push([[0],{15:function(e,r,t){e.exports=t(25)},17:function(e,r,t){},25:function(e,r,t){"use strict";t.r(r);t(16),t(17);var s=t(1),o=t.n(s),n=t(12),m=t.n(n),d=t(8),a=t(27),i=t(6),u=t(7),c=[1,2,3,4,5,6,7,8].map(function(e){return i.filter(function(r){return r.semester===e})}),l=i.filter(function(e){return e.required}),p=function(e){return i.filter(function(r){return e.includes(r.code)}).map(function(e){return e.points}).reduce(function(e,r){return e+r},0)},f=function(e){return function(e){return i.filter(function(r){return e.includes(r.code)&&r.required}).map(function(e){return e.points}).reduce(function(e,r){return e+r},0)}(e)/u.maxPoints*100},q=function(e){return function(e){return p(e)/u.maxPoints*100}(e)-f(e)};var E=t(26),v=Object(s.createContext)({});function x(){var e=Object(s.useContext)(v),r=e.get,t=Object(s.useMemo)(function(){return p(r)},[e]),n=Object(s.useMemo)(function(){return f(r)},[e]),m=Object(s.useMemo)(function(){return q(r)},[e]),d=Object(s.useMemo)(function(){return n+m},[e]);return o.a.createElement("header",{className:"sticky-top"},o.a.createElement(E.a,{multi:!0,className:"rounded-0"},o.a.createElement(E.a,{bar:!0,color:"danger",value:n}),o.a.createElement(E.a,{bar:!0,color:"warning",value:m})),o.a.createElement(E.a,{multi:!0,className:"mt-n3 text-center"},o.a.createElement(E.a,{bar:!0,color:"transparent",value:d,className:"text-right font-weight-bold pr-1"},t," / ",u.maxPoints)))}var b=t(14),h=t(28),g=t(3),N=t.n(g);function w(e){var r=e.course,t=Object(s.useContext)(v),n=t.get,m=t.set,d=N()("d-flex","p-2",{"bg-light":!n.includes(r.code),shadow:!n.includes(r.code),"shadow-sm":n.includes(r.code)});return o.a.createElement("div",{key:r.code},o.a.createElement(h.a,{type:"checkbox",id:r.code,checked:n.includes(r.code),onChange:function(){return e=r.code,void(n.includes(e)?m(n.filter(function(r){return r!==e})):m([].concat(Object(b.a)(n),[e])));var e},className:"d-none"}),o.a.createElement("label",{htmlFor:r.code,className:d},o.a.createElement("div",{className:"d-flex flex-column pr-3"},o.a.createElement("h3",{className:"m-0 text-center"},r.points),o.a.createElement("p",{className:"m-0"},"\u0417\u0415\u0422")),o.a.createElement("div",{className:"d-flex flex-column"},o.a.createElement("p",{className:"m-0 text-primary"},r.name),o.a.createElement("p",{className:"m-0 text-secondary"},"\u041c\u043e\u0434\u0443\u043b\u044c ",r.mod))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(o.a.createElement(function(){var e=function(e,r){var t=Object(s.useState)(localStorage[e]?JSON.parse(localStorage[e]):r),o=Object(d.a)(t,2),n=o[0],m=o[1];return localStorage[e]||(localStorage[e]=JSON.stringify(n)),[n,function(r){localStorage[e]=JSON.stringify(r),m(r)}]}("selected",l.map(function(e){return e.code})),r=Object(d.a)(e,2),t=r[0],n=r[1];return o.a.createElement("div",{className:"App"},o.a.createElement(v.Provider,{value:{get:t,set:n}},o.a.createElement(x,null),o.a.createElement(a.a,null,o.a.createElement("h2",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u0443\u0440\u0441\u043e\u0432"),c&&c.map(function(e,r){return o.a.createElement("div",{key:r},o.a.createElement("h3",{className:"mt-5"},"\u0421\u0435\u043c\u0435\u0441\u0442\u0440 ",r+1),o.a.createElement("div",{className:"d-flex flex-column flex-md-row"},e.some(function(e){return e.required})&&o.a.createElement("div",{className:"p-2 col"},o.a.createElement("h5",null,"\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435"),e.filter(function(e){return e.required}).map(function(e){return o.a.createElement(w,{course:e})})),e.some(function(e){return!e.required})&&o.a.createElement("div",{className:"p-2 col"},o.a.createElement("h5",null,"\u0421\u043f\u0435\u0446. \u043a\u0443\u0440\u0441\u044b"),e.filter(function(e){return!e.required}).map(function(e){return o.a.createElement(w,{course:e})}))))}))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports=JSON.parse('[{"mod":"1.1","code":"1.1.2.1","name":"\u0418\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0439 \u044f\u0437\u044b\u043a","points":3,"semester":1,"required":true},{"mod":"1.1","code":"1.1.2.2","name":"\u0418\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0439 \u044f\u0437\u044b\u043a","points":3,"semester":2,"required":true},{"mod":"1.1","code":"1.1.2.3","name":"\u0418\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0439 \u044f\u0437\u044b\u043a","points":3,"semester":3,"required":true},{"mod":"1.1","code":"1.1.2.4","name":"\u0418\u043d\u043e\u0441\u0442\u0440\u0430\u043d\u043d\u044b\u0439 \u044f\u0437\u044b\u043a","points":3,"semester":4,"required":true},{"mod":"1.1","code":"1.1.3.2","name":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a \u0438 \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430 \u0440\u0435\u0447\u0438","points":2,"semester":2,"required":true},{"mod":"1.2","code":"1.2.2.1","name":"\u0418\u0441\u0442\u043e\u0440\u0438\u044f","points":3,"semester":1,"required":true},{"mod":"1.2","code":"1.2.3.2","name":"\u0424\u0438\u043b\u043e\u0441\u043e\u0444\u0438\u044f","points":3,"semester":2,"required":true},{"mod":"1.3","code":"1.3.2.4","name":"\u041f\u0440\u0430\u0432\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435","points":3,"semester":4,"required":true},{"mod":"1.3","code":"1.3.3.3","name":"\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0442\u0435\u043e\u0440\u0438\u044f","points":3,"semester":3,"required":true},{"mod":"1.4","code":"1.4.2.3","name":"\u041e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435","points":3.5,"semester":3,"required":true},{"mod":"1.4","code":"1.4.2.4","name":"\u041e\u0431\u044a\u0435\u043a\u0442\u043d\u043e-\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435","points":3.5,"semester":4,"required":true},{"mod":"1.4","code":"1.4.3.1","name":"\u042f\u0437\u044b\u043a\u0438 \u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f","points":6,"semester":1,"required":true},{"mod":"1.4","code":"1.4.3.2","name":"\u042f\u0437\u044b\u043a\u0438 \u0438 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f","points":6,"semester":2,"required":true},{"mod":"1.5","code":"1.5.2.4","name":"\u0414\u0438\u0444\u0444\u0435\u0440\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f","points":4,"semester":4,"required":true},{"mod":"1.5","code":"1.5.3.1","name":"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u043d\u0430\u043b\u0438\u0437","points":6,"semester":1,"required":true},{"mod":"1.5","code":"1.5.3.2","name":"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u043d\u0430\u043b\u0438\u0437","points":6,"semester":2,"required":true},{"mod":"1.5","code":"1.5.4.5","name":"\u0422\u0435\u043e\u0440\u0438\u044f \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430","points":3.5,"semester":5,"required":true},{"mod":"1.5","code":"1.5.4.6","name":"\u0422\u0435\u043e\u0440\u0438\u044f \u0432\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430","points":3.5,"semester":6,"required":true},{"mod":"1.5","code":"1.5.5.3","name":"\u041a\u0440\u0430\u0442\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u043b\u044b \u0438 \u0440\u044f\u0434\u044b","points":6,"semester":3,"required":true},{"mod":"1.6","code":"1.6.2.4","name":"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043b\u043e\u0433\u0438\u043a\u0430","points":4,"semester":4,"required":true},{"mod":"1.6","code":"1.6.3.4","name":"\u0422\u0435\u043e\u0440\u0438\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u043e\u0432","points":2,"semester":4,"required":true},{"mod":"1.6","code":"1.6.4.5","name":"\u0422\u0435\u043e\u0440\u0438\u044f \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432","points":3,"semester":5,"required":true},{"mod":"1.6","code":"1.6.5.4","name":"\u041a\u043e\u043c\u0431\u0438\u043d\u0430\u0442\u043e\u0440\u043d\u044b\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b","points":3.5,"semester":4,"required":true},{"mod":"1.6","code":"1.6.5.5","name":"\u041a\u043e\u043c\u0431\u0438\u043d\u0430\u0442\u043e\u0440\u043d\u044b\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b","points":3.5,"semester":5,"required":true},{"mod":"1.7","code":"1.7.2.1","name":"\u0410\u043b\u0433\u0435\u0431\u0440\u0430 \u0438 \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u044f","points":6,"semester":1,"required":true},{"mod":"1.7","code":"1.7.2.2","name":"\u0410\u043b\u0433\u0435\u0431\u0440\u0430 \u0438 \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u044f","points":6,"semester":2,"required":true},{"mod":"1.7","code":"1.7.3.3","name":"\u0414\u0438\u0441\u043a\u0440\u0435\u0442\u043d\u0430\u044f \u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430","points":6,"semester":3,"required":true},{"mod":"1.8","code":"1.8.2.3","name":"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u042d\u0412\u041c","points":2,"semester":3,"required":true},{"mod":"1.8","code":"1.8.3.5","name":"\u0411\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445","points":4,"semester":5,"required":true},{"mod":"1.8","code":"1.8.4.3","name":"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u044b\u0435 \u0441\u0435\u0442\u0438","points":3,"semester":3,"required":true},{"mod":"1.8","code":"1.8.5.1","name":"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b","points":4,"semester":1,"required":true},{"mod":"1.8","code":"1.8.6.4","name":"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u044b \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442","points":4,"semester":4,"required":true},{"mod":"1.8","code":"1.8.7.1","name":"\u0421\u043a\u0440\u0438\u043f\u0442\u044b","points":2,"semester":1,"required":true},{"mod":"1.8","code":"1.8.8.4","name":"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0435 \u0438 \u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435","points":3,"semester":4,"required":true},{"mod":"1.8","code":"1.8.9.2","name":"\u042f\u0437\u044b\u043a\u0438 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432","points":3,"semester":2,"required":true},{"mod":"1.8","code":"1.8.9.3","name":"\u042f\u0437\u044b\u043a\u0438 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432","points":3,"semester":3,"required":true},{"mod":"1.9","code":"1.9.2.6","name":"\u0424\u0438\u0437\u0438\u043a\u0430","points":3,"semester":6,"required":true},{"mod":"1.9","code":"1.9.2.7","name":"\u0424\u0438\u0437\u0438\u043a\u0430","points":3,"semester":7,"required":true},{"mod":"1.10","code":"1.10.2.8","name":"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c \u0436\u0438\u0437\u043d\u0435\u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438","points":2,"semester":8,"required":true},{"mod":"1.11","code":"1.11.1.6","name":"\u041b\u0438\u043d\u0433\u0432\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u0441\u043d\u043e\u0432\u044b \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u043a\u0438","points":3,"semester":6,"required":false},{"mod":"1.11","code":"1.11.1.7","name":"\u041b\u0438\u043d\u0433\u0432\u0438\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043e\u0441\u043d\u043e\u0432\u044b \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u043a\u0438","points":3,"semester":7,"required":false},{"mod":"1.12","code":"1.12.2.5","name":"\u041c\u0430\u0442\u0440\u043e\u0438\u0434\u044b \u0438 \u0433\u0440\u0430\u0444\u044b","points":2,"semester":5,"required":false},{"mod":"1.12","code":"1.12.2.6","name":"\u041c\u0430\u0442\u0440\u043e\u0438\u0434\u044b \u0438 \u0433\u0440\u0430\u0444\u044b","points":2,"semester":6,"required":false},{"mod":"1.13","code":"1.13.2.6","name":"\u0422\u0435\u043e\u0440\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0439 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0433\u043e","points":3,"semester":6,"required":false},{"mod":"1.13","code":"1.13.3.5","name":"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0430\u043d\u0430\u043b\u0438\u0437","points":3,"semester":5,"required":false},{"mod":"1.14","code":"1.14.2.7","name":"\u041a\u043e\u043c\u0431\u0438\u043d\u0430\u0442\u043e\u0440\u0438\u043a\u0430 \u0441\u043b\u043e\u0432","points":2,"semester":7,"required":false},{"mod":"1.14","code":"1.14.3.8","name":"\u041a\u043e\u043c\u0431\u0438\u043d\u0430\u0442\u043e\u0440\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b \u0441\u0436\u0430\u0442\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445","points":2,"semester":8,"required":false},{"mod":"1.14","code":"1.14.4.6","name":"\u0421\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b","points":2,"semester":6,"required":false},{"mod":"1.15","code":"1.15.1.7","name":"\u0418\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b","points":3,"semester":7,"required":false},{"mod":"1.16","code":"1.16.1.5","name":"WEB \u0438 DHTML","points":3,"semester":5,"required":false},{"mod":"1.17","code":"1.17.1.5","name":"Air Lab","points":3,"semester":5,"required":false},{"mod":"1.17","code":"1.17.2.6","name":"Air Lab","points":3,"semester":6,"required":false},{"mod":"1.18","code":"1.18.1.7","name":"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 1","points":3,"semester":7,"required":false},{"mod":"1.18","code":"1.18.2.8","name":"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442 2","points":3,"semester":8,"required":false},{"mod":"1.19","code":"1.19.1.5","name":"\u041d\u0430\u0443\u0447\u043d\u043e\u0435 \u043c\u044b\u0448\u043b\u0435\u043d\u0438\u0435","points":3,"semester":5,"required":false},{"mod":"1.20","code":"1.20.1.0","name":"\u0418\u043d\u0436\u0438\u043d\u0438\u0440\u0438\u043d\u0433 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f","points":0,"semester":0,"required":false},{"mod":"1.20","code":"1.20.2.6","name":"\u041f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043e\u0432","points":2,"semester":6,"required":false},{"mod":"1.20","code":"1.20.3.7","name":"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f","points":2,"semester":7,"required":false},{"mod":"1.20","code":"1.20.4.8","name":"\u041c\u0435\u043d\u0435\u0434\u0436\u043c\u0435\u043d\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438","points":2,"semester":8,"required":false},{"mod":"1.21","code":"1.21.2.6","name":"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u043f\u043e \u0441\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u043e\u043c\u0443 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044e","points":3,"semester":6,"required":false},{"mod":"1.21","code":"1.21.3.5","name":"\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b","points":3,"semester":5,"required":false},{"mod":"1.22","code":"1.22.2.7","name":"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u043e\u0432 \u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440 \u0434\u0430\u043d\u043d\u044b\u0445","points":3,"semester":7,"required":false},{"mod":"1.22","code":"1.22.3.8","name":"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430","points":3,"semester":8,"required":false},{"mod":"1.23","code":"1.23.2.6","name":"\u041c\u0435\u0442\u043e\u0434\u044b \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439","points":4,"semester":6,"required":false},{"mod":"1.23","code":"1.23.3.7","name":"\u0420\u0430\u0441\u043f\u043e\u0437\u043d\u0430\u0432\u0430\u043d\u0438\u0435 \u043e\u0431\u0440\u0430\u0437\u043e\u0432","points":2,"semester":7,"required":false},{"mod":"1.24","code":"1.24.1.5","name":"\u0420\u0430\u0437\u043d\u043e\u0441\u0442\u043d\u044b\u0435 \u0443\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f","points":3,"semester":5,"required":false},{"mod":"1.25","code":"1.25.2.5","name":"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u044b \u0438 \u043b\u043e\u0433\u0438\u043a\u0430 \u043d\u0430 \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0445 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044f\u0445","points":2,"semester":5,"required":false},{"mod":"1.25","code":"1.25.3.6","name":"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u044b \u0438 \u043b\u043e\u0433\u0438\u043a\u0430 \u043d\u0430 \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u044b\u0445 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044f\u0445","points":2,"semester":6,"required":false},{"mod":"1.26","code":"1.26.2.7","name":"\u0411\u0438\u043e\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0442\u0438\u043a\u0430","points":2,"semester":7,"required":false},{"mod":"1.26","code":"1.26.3.8","name":"\u041c\u043e\u043b\u0435\u043a\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f","points":2,"semester":8,"required":false},{"mod":"1.27","code":"1.27.2.6","name":"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b \u043a\u043e\u0440\u0440\u0435\u043a\u0446\u0438\u0438 \u0434\u0432\u0438\u0436\u0435\u043d\u0438\u0439","points":2,"semester":6,"required":false},{"mod":"1.27","code":"1.27.3.7","name":"\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c","points":2,"semester":7,"required":false},{"mod":"1.27","code":"1.27.4.8","name":"\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0440\u0435\u043d\u0438\u0435","points":2,"semester":8,"required":false},{"mod":"1.28","code":"1.28.1.7","name":"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u043e\u0432","points":4,"semester":7,"required":false},{"mod":"1.29","code":"1.29.1.5","name":"\u041e\u0441\u043d\u043e\u0432\u044b \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u043e\u0439 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438","points":6,"semester":5,"required":false},{"mod":"1.30","code":"1.30.1.7","name":"\u0427\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b","points":3.5,"semester":7,"required":false},{"mod":"1.30","code":"1.30.1.8","name":"\u0427\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0435 \u043c\u0435\u0442\u043e\u0434\u044b","points":3.5,"semester":8,"required":false},{"mod":"1.31","code":"1.31.1.6","name":"\u041f\u0440\u0430\u043a\u0442\u0438\u043a\u0443\u043c \u043f\u043e \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u043e\u0439 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438","points":6,"semester":6,"required":false},{"mod":"1.32","code":"1.32.1.7","name":"\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430","points":5,"semester":7,"required":false},{"mod":"1.33","code":"1.33.1.6","name":"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u043d\u0430\u044f \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u044f \u0438 \u0433\u0440\u0430\u0444\u0438\u043a\u0430","points":4,"semester":6,"required":false},{"mod":"1.34","code":"1.34.2.6","name":"\u0410\u043f\u043f\u0430\u0440\u0430\u0442\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430 \u0432\u044b\u0447\u0438\u0441\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u0442\u0435\u0445\u043d\u0438\u043a\u0438","points":3,"semester":6,"required":false},{"mod":"1.34","code":"1.34.3.5","name":"\u0410\u0441\u0441\u0435\u043c\u0431\u043b\u0435\u0440","points":3,"semester":5,"required":false},{"mod":"1.35","code":"1.35.1.7","name":"\u041f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0430\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043d\u0430 Java","points":3,"semester":7,"required":false},{"mod":"1.36","code":"1.36.1.8","name":"\u041f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u0430\u044f web-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430","points":3,"semester":8,"required":false},{"mod":"1.37","code":"1.37.1.6","name":"\u0421\u0435\u0440\u0432\u0438\u0441\u044b. \u0412\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439","points":3,"semester":6,"required":false},{"mod":"1.38","code":"1.38.1.6","name":"\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430","points":2,"semester":6,"required":true},{"mod":"1.38","code":"1.38.2.1","name":"\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430","points":0,"semester":1,"required":true},{"mod":"1.38","code":"1.38.2.2","name":"\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430","points":0,"semester":2,"required":true},{"mod":"1.38","code":"1.38.2.3","name":"\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430","points":0,"semester":3,"required":true},{"mod":"1.38","code":"1.38.2.4","name":"\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430","points":0,"semester":4,"required":true},{"mod":"1.38","code":"1.38.2.5","name":"\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u0430\u044f \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043a\u0443\u043b\u044c\u0442\u0443\u0440\u0430","points":0,"semester":5,"required":true},{"mod":"1.39","code":"1.39.1.5","name":"\u042f\u0437\u044b\u043a Perl","points":3,"semester":5,"required":false},{"mod":"1.40","code":"1.40.1.5","name":"IoT (Samsung)","points":3,"semester":5,"required":false},{"mod":"1.41","code":"1.41.1.6","name":"\u041c\u0430\u0448\u0438\u043d\u043d\u043e\u0435 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0438 \u044f\u0437\u044b\u043a Python","points":3,"semester":6,"required":false},{"mod":"1.42","code":"1.42.1.5","name":"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u043d\u044b\u0435 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438","points":3,"semester":5,"required":false},{"mod":"1.42","code":"1.42.1.6","name":"\u0412\u0435\u0440\u043e\u044f\u0442\u043d\u043e\u0441\u0442\u043d\u044b\u0435 \u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u043c\u043e\u0434\u0435\u043b\u0438","points":3,"semester":6,"required":false},{"mod":"1.43","code":"1.43.1.6","name":"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c","points":3,"semester":6,"required":false},{"mod":"1.44","code":"1.44.1.6","name":"\u0422\u0435\u043e\u0440\u0438\u044f \u0438\u0433\u0440","points":3,"semester":6,"required":false},{"mod":"1.45","code":"1.45.1.6","name":"\u0428\u043a\u043e\u043b\u0430 \u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u043e\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 (\u041a\u043e\u043d\u0442\u0443\u0440)","points":3,"semester":6,"required":false},{"mod":"1.46","code":"1.46.2.5","name":"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u0430\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u043e\u0434 android","points":2,"semester":5,"required":false},{"mod":"1.46","code":"1.46.3.5","name":"\u041e\u0441\u043d\u043e\u0432\u044b \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0434\u043b\u044f iOS","points":2,"semester":5,"required":false},{"mod":"1.47","code":"1.47.1.6","name":"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0430\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b","points":3,"semester":6,"required":false},{"mod":"1.48","code":"1.48.1.5","name":"\u041e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0441 \u043f\u043e\u0434\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u0435\u043c \u0438 \u043d\u0435\u0439\u0440\u043e\u043d\u043d\u044b\u0435 \u0441\u0435\u0442\u0438","points":3,"semester":5,"required":false},{"mod":"1.49","code":"1.49.1.6","name":"\u041c\u043d\u043e\u0433\u043e\u043f\u043e\u0442\u043e\u0447\u043d\u043e\u0435 \u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0430 c#","points":3,"semester":6,"required":false},{"mod":"1.50","code":"1.50.1.7","name":"\u0410\u043b\u0433\u043e\u0440\u0438\u0442\u043c\u044b \u0438\u0433\u0440\u0430\u044e\u0449\u0438\u0435 \u0432 \u0438\u0433\u0440\u044b","points":3,"semester":7,"required":false},{"mod":"1.51","code":"1.51.2.5","name":"\u0412\u0451\u0440\u0441\u0442\u043a\u0430 \u043e\u0442 \u042f\u043d\u0434\u0435\u043a\u0441","points":3,"semester":5,"required":false},{"mod":"1.51","code":"1.51.3.5","name":"JS \u043e\u0442 \u042f\u043d\u0434\u0435\u043a\u0441","points":3,"semester":5,"required":false},{"mod":"1.52","code":"1.52.2.6","name":"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439","points":2,"semester":6,"required":false},{"mod":"1.53","code":"1.53.1.7","name":"\u041c\u0430\u0439\u043d\u043e\u0440 1","points":3,"semester":7,"required":false},{"mod":"1.53","code":"1.53.2.7","name":"\u041c\u0430\u0439\u043d\u043e\u0440 2","points":3,"semester":7,"required":false}]')},7:function(e){e.exports=JSON.parse('{"maxPoints":240}')}},[[15,1,2]]]);
//# sourceMappingURL=main.1ced9e05.chunk.js.map