(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(5952)}])},5952:function(e,n,s){"use strict";s.r(n),s.d(n,{HomePage:function(){return x},__N_SSG:function(){return u},default:function(){return m}});var t=s(5893),i=(s(7294),s(9008)),l=s(591);function r(){return(0,t.jsx)("div",{className:"content-center content-layout flex flex-col sm:flex-row",children:(0,t.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,t.jsx)("h1",{className:"font-mono text-lg",children:"Hi, I'm Clinton D'Annolfo."}),(0,t.jsx)("p",{children:"I'm the only person in the world with my name."}),(0,t.jsx)("p",{children:"I'm passionate about technology and making a (good) dent on the Universe."}),(0,t.jsx)("p",{children:"I'll do anything to help."})]})})}var c,a=s(9974),o=s(2537);!function(e){e[e.JAN=0]="JAN",e[e.FEB=1]="FEB",e[e.MAR=2]="MAR",e[e.APR=3]="APR",e[e.MAY=4]="MAY",e[e.JUN=5]="JUN",e[e.JUL=6]="JUL",e[e.AUG=7]="AUG",e[e.SEP=8]="SEP",e[e.OCT=9]="OCT",e[e.NOV=10]="NOV",e[e.DEC=11]="DEC"}(c||(c={}));var d=[o.meta],h=(d.reduce((function(e,n){return e.set(n.slug,n),e}),new Map),d.slice(0,6)),u=!0;function x(){return(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(i.default,{children:(0,t.jsx)("title",{children:"Clinton D'Annolfo blog"})}),(0,t.jsx)(r,{}),(0,t.jsxs)("section",{className:"content-layout",children:[(0,t.jsx)("h2",{children:"Blog posts"}),(0,t.jsx)("div",{className:"space-y-4",children:h.length>0?h.map((function(e){return(0,t.jsx)(l.A,{description:e.description,nextPage:e.nextPage,nextPageTitle:e.nextPageTitle,publishDateIso:e.publishDateIso,slug:e.slug,thumbnail:e.thumbnail,title:e.title},e.slug)})):(0,t.jsx)("div",{children:"No posts yet."})})]})]})}var m=x},591:function(e,n,s){"use strict";s.d(n,{A:function(){return d}});var t=s(5893),i=s(1664),l=s.n(i),r=s(7294),c=s(5313),a=s(8420);function o(e){var n=e.publishDateIso,s=r.useMemo((function(){return(0,c.Z)((0,a.Z)(n),"d MMM Y")}),[n]);return(0,t.jsxs)("div",{className:"text-xs",children:[s," - 5 mins"]})}function d(e){var n=e.description,s=e.publishDateIso,i=e.slug,r=e.thumbnail,c=e.title;return(0,t.jsx)(l(),{href:"/blog/"+i,children:(0,t.jsxs)("a",{className:"bg-primary cursor-pointer flex group hover p-4 rounded-lg text-primary hover:shadow",children:[(0,t.jsx)("img",{src:r}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"font-bold group-hover:underline",children:c}),(0,t.jsx)(o,{publishDateIso:s}),(0,t.jsx)("p",{children:n})]})]})})}},9974:function(e,n,s){"use strict";s.d(n,{Z:function(){return b}});var t,i=s(5893),l=s(7294),r=s(2814),c=s(9398),a=s(1664),o=s.n(a),d="theme",h="dark";function u(){var e=l.useCallback((function(){var e=(localStorage.theme===t.DARK||!(d in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?t.DARK:t.LIGHT)===t.DARK?t.LIGHT:t.DARK;e===t.DARK?document.documentElement.classList.contains(h)||document.documentElement.classList.add(h):document.documentElement.classList.remove(h),function(e){localStorage.setItem(d,e)}(e)}),[]);return(0,i.jsxs)("header",{className:"flex justify-between",children:[(0,i.jsx)("div",{className:"flex",children:(0,i.jsx)(o(),{href:"/",children:(0,i.jsx)("a",{className:"animate-pulse dark:hover:bg-gray-700 flex font-bold hover:bg-gray-100 items-center p-4",children:(0,i.jsx)("span",{className:"bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500",children:"Clinton D'Annolfo"})})})}),(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)("span",{className:"cursor-pointer flex p-0.5",children:(0,i.jsx)(r.G,{className:"mr-2 text-lg hidden",icon:c.xiG})}),(0,i.jsx)("div",{className:"p-4",children:(0,i.jsx)("button",{className:"bg-gray-600 dark:bg-white dark:ring-gray-300 focus:border-none focus:outline-none hover:shadow px-2 py-1 rounded focus:ring-2 ring-gray-500 text-white",onClick:e,children:(0,i.jsxs)("span",{className:"dark:text-yellow-300 text-lg",children:[(0,i.jsx)(r.G,{className:"dark:inline hidden",icon:c.enB}),(0,i.jsx)(r.G,{className:"dark:hidden",icon:c.DBF})]})})})]})]})}!function(e){e.DARK="dark",e.LIGHT="light"}(t||(t={}));var x=s(1417),m=s(4184),f=s.n(m);function j(){var e=["m","a","o","b","c","c",".","d","l","e","i","f","a","g","m","h","g","i","@","j","o","k","f","l","l","m","o","n","n","o","n","p","a","q","d","r",".","s","n","t","o","u","t","v","n","w","i","x","l","y","c"].reverse().filter((function(e,n){return n%2===0})).join("");window.location.href="".concat("mailto:").concat(e,"?").concat("subject=Hi","&").concat("body=Hey Clint,")}function g(e){var n=e.className,s=e.href,t=e.icon,l=e.text;return(0,i.jsxs)("a",{className:f()(n,"flex items-center"),href:s,children:[(0,i.jsx)(r.G,{className:"mr-2",height:22,icon:t}),l]})}function p(){return(0,i.jsxs)("footer",{className:"content-layout py-4",children:[(0,i.jsx)("h3",{className:"font-bold pb-2 text-center",children:"Connect with me:"}),(0,i.jsxs)("section",{className:"flex flex-col items-center space-y-4",children:[(0,i.jsx)(g,{className:"md:basis-1/3",href:"https://www.linkedin.com/in/clintondannolfo",icon:x.D9H,text:"LinkedIn"}),(0,i.jsx)(g,{className:"md:basis-1/3",href:"https://twitter.com/ClintonDAnnolfo",icon:x.mdU,text:"Twitter"}),(0,i.jsx)(g,{className:"md:basis-1/3",href:"https://github.com/clintonwoo",icon:x.pUg,text:"GitHub"}),(0,i.jsx)("button",{className:"bg-gray-400 flex-auto p-2 px-4 rounded text-white md:flex-none",onClick:j,children:"\ud83d\udce7 Email"})]})]})}function b(e){var n=e.children,s=e.className;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(u,{}),(0,i.jsx)("main",{className:s,children:n}),(0,i.jsx)(p,{})]})}},2537:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return f},meta:function(){return x}});var t=s(5893),i=s(9008),l=s(5313),r=s(8420),c=s(7294),a=s(9974),o="/_next/static/media/1516937450623.31a1329e.webp",d=s(1664),h=s.n(d);function u(e){var n=e.children,s=e.meta,i=s.nextPage,d=s.nextPageTitle,u=s.publishDateIso,x=s.slug,m=s.title,f=c.useMemo((function(){return(0,l.Z)((0,r.Z)(u),"d MMM Y")}),[u]);return(0,t.jsxs)(a.Z,{className:"content-layout py-4",children:[(0,t.jsxs)("nav",{className:"text-xs",children:[(0,t.jsx)(h(),{href:"/blog",children:"Blog"}),(0,t.jsx)("span",{children:" > "}),(0,t.jsx)(h(),{href:"/blog/".concat(x),children:m})]}),(0,t.jsxs)("section",{className:"py-4",children:[(0,t.jsx)("h1",{className:"font-bold",children:m}),(0,t.jsx)("div",{className:"italic text-xs",children:f})]}),(0,t.jsx)("article",{className:"space-y-1",children:n}),(0,t.jsxs)("section",{className:"flex py-12",children:[(0,t.jsx)("div",{children:(0,t.jsx)("img",{className:"rounded-full w-16",alt:"Author thumbnail",src:o})}),(0,t.jsxs)("div",{className:"p-3 text-sm",children:[(0,t.jsxs)("div",{children:["Post by"," ",(0,t.jsx)("a",{href:"https://twitter.com/ClintonDAnnolfo",children:"Clinton D'Annolfo"})]}),(0,t.jsx)("em",{children:"Making the world better one day at a time."})]})]}),(0,t.jsxs)("section",{className:"flex justify-between py-4 text-base",children:[(0,t.jsx)(h(),{href:"/blog",children:(0,t.jsxs)("a",{children:["\ud83d\udc48",(0,t.jsx)("span",{className:"ml-2",children:"Back to blog"})]})}),i&&(0,t.jsx)(h(),{href:i,children:(0,t.jsxs)("a",{children:[(0,t.jsx)("span",{className:"mr-2",children:d}),"\ud83d\udc49"]})})]})]})}var x={description:"This is the launch of my new blog. I intend to post here when I want to share cool ideas, thoughts and experiences.",publishDateIso:"2022-04-29",slug:"hello-world",title:"Hello world - new blog launch!"},m=function(e){var n=e.children;return(0,t.jsx)(u,{meta:x,children:n})};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=function(){var n=Object.assign({p:"p",code:"code"},e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.default,{children:(0,t.jsx)("title",{children:"Hello World | Clinton D'Annolfo"})}),"\n",(0,t.jsx)(n.p,{children:"This is the launch of my new blog. I intend to post here when I want to share cool ideas, thoughts and experiences."}),"\n",(0,t.jsxs)(n.p,{children:["For all the techies out there - the blog stack is using ",(0,t.jsx)(n.code,{children:"Next.js"})," and ",(0,t.jsx)(n.code,{children:"tailwindcss"})," hosted on Github Pages currently since it's a static site."]}),"\n",(0,t.jsx)(n.p,{children:"I had a blog using Wordpress years ago, which was fine but now it's easier for me to write it myself :)"})]})};return m?(0,t.jsx)(m,Object.assign({},e,{children:(0,t.jsx)(n,{})})):n()}}},function(e){e.O(0,[523,112,953,771,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);