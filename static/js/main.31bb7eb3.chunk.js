(this["webpackJsonprq-machine"]=this["webpackJsonprq-machine"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(6),r=n.n(a),u=n(2),l=n(14),i=c.a.createContext();var d=n(7),m=n(8);function s(){var e=Object(o.useContext)(i),t=e.randomQuote,n=e.author,a=e.changeQuote;return c.a.createElement("body",null,c.a.createElement("div",{id:"quote-box"},c.a.createElement("q",{id:"text"},t),c.a.createElement("p",{id:"author"},"- "+n),c.a.createElement("div",{className:"btns-wrapper"},c.a.createElement("a",{id:"tweet-quote",href:"twitter.com/intent/tweet"},c.a.createElement(d.a,{id:"icon",icon:m.a})),c.a.createElement("button",{onClick:a,id:"new-quote"},"New Quote"))))}n(21);r.a.render(c.a.createElement((function(e){var t=e.children,n=Object(o.useState)([]),a=Object(u.a)(n,2),r=a[0],d=a[1],m=Object(o.useState)(0),s=Object(u.a)(m,2),b=s[0],h=s[1],f=Object(o.useState)("Whatever the mind of man can conceive and believe, it can achieve."),E=Object(u.a)(f,2),g=E[0],v=E[1],y=Object(o.useState)("Napoleon Hill"),j=Object(u.a)(y,2),p=j[0],q=j[1];return Object(o.useEffect)((function(){fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json").then((function(e){return e.json()})).then((function(e){return d(e.quotes)}))}),[]),c.a.createElement(i.Provider,{value:{randomQuote:g,author:p,changeQuote:function(){var e=Math.floor(Math.random()*r.length+0);h(e);var t=r[b].quote;v(t);var n=r[b].author;q(n);var o=l();document.getElementById("root").style.backgroundColor=o,document.getElementById("root").style.color=o,document.getElementById("root").style.transition="background-color 1s, color 1s",document.getElementById("new-quote").style.backgroundColor=o,document.getElementById("new-quote").style.transition="background-color 1s",document.getElementById("icon").style.color=o,document.getElementById("icon").style.transition="color 1s"}}},t)}),null,c.a.createElement((function(){return c.a.createElement(s,null)}),null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(22)}},[[9,1,2]]]);
//# sourceMappingURL=main.31bb7eb3.chunk.js.map