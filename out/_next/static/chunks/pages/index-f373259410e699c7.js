(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1464:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7238)}])},7238:function(e,t,a){"use strict";a.r(t),a.d(t,{__toc:function(){return L},default:function(){return M}});var s=a(5893),n=a(2673),r=a(2643),i=a(7294),l=a(512),o=a(8388);function cn(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,o.m6)((0,l.W)(t))}let BentoGrid=e=>{let{className:t,children:a}=e;return(0,s.jsx)("div",{className:cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",t),children:a})},BentoGridItem=e=>{let{className:t,title:a,description:n,header:r,icon:i}=e;return(0,s.jsxs)("div",{className:cn("row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",t),children:[r,(0,s.jsxs)("div",{className:"group-hover/bento:translate-x-2 transition duration-200",children:[i,(0,s.jsx)("div",{className:"font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2",children:a}),(0,s.jsx)("div",{className:"font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300",children:n})]})]})};var c=a(7080),d=a(9226),x=a(3168),h=a(4264);function BentoGridComponent(){return(0,s.jsxs)("div",{className:"mx-auto max-w-4xl min-w-0 space-y-2 ",children:[(0,s.jsxs)("div",{className:"mb-8 lg:mb-14",children:[(0,s.jsx)("h2",{className:"scroll-m-20 text-4xl font-bold tracking-tight text-black dark:text-white",children:"Spend less time debugging, more time innovating."}),(0,s.jsx)("p",{className:"text-lg text-zinc-400",children:"From data ingestion to deployment, we've got you covered"})]}),(0,s.jsx)(BentoGrid,{className:"max-w-4xl mx-auto md:auto-rows-[20rem]",children:m.map((e,t)=>(0,s.jsx)(BentoGridItem,{title:e.title,description:e.description,header:e.header,className:e.className,icon:e.icon},t))})]})}let Skeleton=()=>(0,s.jsx)("div",{className:"flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"}),m=[{title:"One single codebase",description:"Just use python!",header:(0,s.jsx)(Skeleton,{}),className:"md:col-span-2",icon:(0,s.jsx)(c.Z,{className:"h-4 w-4 text-neutral-500"})},{title:"To any database",description:"Dive into the transformative power of technology.",header:(0,s.jsx)(Skeleton,{}),className:"md:col-span-1",icon:(0,s.jsx)(d.Z,{className:"h-4 w-4 text-neutral-500"})},{title:"The Power of Communication",description:"Understand the impact of effective communication in our lives.",header:(0,s.jsx)(Skeleton,{}),className:"md:col-span-1",icon:(0,s.jsx)(x.Z,{className:"h-4 w-4 text-neutral-500"})},{title:"Easy intergration",description:"Easly integrate your pipeline into your existing Ops",header:(0,s.jsx)(Skeleton,{}),className:"md:col-span-2",icon:(0,s.jsx)(h.Z,{className:"h-4 w-4 text-neutral-500"})}];var u=a(4849);let AnimatedBeam=e=>{let{className:t,containerRef:a,fromRef:n,toRef:r,curvature:l=0,reverse:o=!1,duration:c=3*Math.random()+4,delay:d=0,pathColor:x="gray",pathWidth:h=2,pathOpacity:m=.2,gradientStartColor:p="#ffaa40",gradientStopColor:f="#9c40ff",startXOffset:g=0,startYOffset:j=0,endXOffset:b=0,endYOffset:w=0}=e,k=(0,i.useId)(),[y,N]=(0,i.useState)(""),[v,R]=(0,i.useState)({width:0,height:0}),C=o?{x1:["90%","-10%"],x2:["100%","0%"],y1:["0%","0%"],y2:["0%","0%"]}:{x1:["10%","110%"],x2:["0%","100%"],y1:["0%","0%"],y2:["0%","0%"]};return(0,i.useEffect)(()=>{let updatePath=()=>{if(a.current&&n.current&&r.current){let e=a.current.getBoundingClientRect(),t=n.current.getBoundingClientRect(),s=r.current.getBoundingClientRect(),i=e.width,o=e.height;R({width:i,height:o});let c=t.left-e.left+t.width/2+g,d=t.top-e.top+t.height/2+j,x=s.left-e.left+s.width/2+b,h=s.top-e.top+s.height/2+w,m=d-l,u="M ".concat(c,",").concat(d," Q ").concat((c+x)/2,",").concat(m," ").concat(x,",").concat(h);N(u)}},e=new ResizeObserver(e=>{for(let t of e)updatePath()});return a.current&&e.observe(a.current),updatePath(),()=>{e.disconnect()}},[a,n,r,l,g,j,b,w]),(0,s.jsxs)("svg",{fill:"none",width:v.width,height:v.height,xmlns:"http://www.w3.org/2000/svg",className:cn("pointer-events-none absolute left-0 top-0 transform-gpu stroke-2",t),viewBox:"0 0 ".concat(v.width," ").concat(v.height),children:[(0,s.jsx)("path",{d:y,stroke:x,strokeWidth:h,strokeOpacity:m,strokeLinecap:"round"}),(0,s.jsx)("path",{d:y,strokeWidth:h,stroke:"url(#".concat(k,")"),strokeOpacity:"1",strokeLinecap:"round"}),(0,s.jsx)("defs",{children:(0,s.jsxs)(u.E.linearGradient,{className:"transform-gpu",id:k,gradientUnits:"userSpaceOnUse",initial:{x1:"0%",x2:"0%",y1:"0%",y2:"0%"},animate:{x1:C.x1,x2:C.x2,y1:C.y1,y2:C.y2},transition:{delay:d,duration:c,ease:[.16,1,.3,1],repeat:1/0,repeatDelay:0},children:[(0,s.jsx)("stop",{stopColor:p,stopOpacity:"0"}),(0,s.jsx)("stop",{stopColor:p}),(0,s.jsx)("stop",{offset:"32.5%",stopColor:f}),(0,s.jsx)("stop",{offset:"100%",stopColor:f,stopOpacity:"0"})]})})]})};var p=a(7226),f=a(3744),g=a(1813),j=a(3725),b=a(7017),w=a(5507),dot_pattern=function(e){let{width:t=16,height:a=16,x:n=0,y:r=0,cx:l=1,cy:o=1,cr:c=1,className:d,...x}=e,h=(0,i.useId)();return(0,s.jsxs)("svg",{"aria-hidden":"true",className:cn("pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80",d),...x,children:[(0,s.jsx)("defs",{children:(0,s.jsx)("pattern",{id:h,width:t,height:a,patternUnits:"userSpaceOnUse",patternContentUnits:"userSpaceOnUse",x:n,y:r,children:(0,s.jsx)("circle",{id:"pattern-circle",cx:o,cy:o,r:c})})}),(0,s.jsx)("rect",{width:"100%",height:"100%",strokeWidth:0,fill:"url(#".concat(h,")")})]})};let k=(0,i.forwardRef)((e,t)=>{let{className:a,children:n}=e;return(0,s.jsx)("div",{ref:t,className:cn("z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",a),children:n})});function AnimatedBeamDemo(){let e=(0,i.useRef)(null),t=(0,i.useRef)(null),a=(0,i.useRef)(null),n=(0,i.useRef)(null),r=(0,i.useRef)(null),l=(0,i.useRef)(null),o=(0,i.useRef)(null),c=(0,i.useRef)(null);return(0,s.jsx)("section",{className:"mx-auto max-w-4xl min-w-0 space-y-2",children:(0,s.jsxs)("div",{className:"relative flex w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg bg-background p-10 md:shadow-xl",ref:e,children:[(0,s.jsxs)("div",{className:"flex h-full w-full flex-row items-stretch justify-between gap-10",children:[(0,s.jsx)("div",{className:"flex flex-col justify-center",children:(0,s.jsx)(k,{ref:c,children:(0,s.jsx)(p.Z,{className:"text-black"})})}),(0,s.jsxs)("div",{className:"flex flex-col justify-center gap-2 text-black",children:[(0,s.jsx)(k,{ref:t,children:(0,s.jsx)(d.Z,{className:"h-6 w-6"})}),(0,s.jsx)(k,{ref:a,children:(0,s.jsx)(f.Z,{className:"h-6 w-6"})}),(0,s.jsx)(k,{ref:n,children:(0,s.jsx)(g.Z,{className:"h-6 w-6"})}),(0,s.jsx)(k,{ref:r,children:(0,s.jsx)(j.Z,{className:"h-6 w-6"})}),(0,s.jsx)(k,{ref:l,children:(0,s.jsx)(b.Z,{className:"h-6 w-6"})})]}),(0,s.jsx)("div",{className:"flex flex-col justify-center text-black",children:(0,s.jsx)(k,{ref:o,className:"h-16 w-16",children:(0,s.jsx)(w.Z,{className:"h-6 w-6"})})})]}),(0,s.jsx)(dot_pattern,{width:20,height:20,cx:1,cy:1,cr:1,className:cn("[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]")}),(0,s.jsx)(AnimatedBeam,{containerRef:e,fromRef:t,toRef:c,duration:3}),(0,s.jsx)(AnimatedBeam,{containerRef:e,fromRef:a,toRef:c,duration:3}),(0,s.jsx)(AnimatedBeam,{containerRef:e,fromRef:n,toRef:c,duration:3}),(0,s.jsx)(AnimatedBeam,{containerRef:e,fromRef:r,toRef:c,duration:3}),(0,s.jsx)(AnimatedBeam,{containerRef:e,fromRef:l,toRef:c,duration:3}),(0,s.jsx)(AnimatedBeam,{containerRef:e,fromRef:t,toRef:o,duration:3}),(0,s.jsx)(AnimatedBeam,{containerRef:e,fromRef:a,toRef:o,duration:3}),(0,s.jsx)(AnimatedBeam,{containerRef:e,fromRef:n,toRef:o,duration:3}),(0,s.jsx)(AnimatedBeam,{containerRef:e,fromRef:r,toRef:o,duration:3}),(0,s.jsx)(AnimatedBeam,{containerRef:e,fromRef:l,toRef:o,duration:3})]})})}var y=a(7184),N=a(343);let v=y.fC,R=i.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(y.ck,{ref:t,className:cn("border-b",a),...n})});R.displayName="AccordionItem";let C=i.forwardRef((e,t)=>{let{className:a,children:n,...r}=e;return(0,s.jsx)(y.h4,{className:"flex",children:(0,s.jsxs)(y.xz,{ref:t,className:cn("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",a),...r,children:[n,(0,s.jsx)(N.Z,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})})});C.displayName=y.xz.displayName;let B=i.forwardRef((e,t)=>{let{className:a,children:n,...r}=e;return(0,s.jsx)(y.VY,{ref:t,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...r,children:(0,s.jsx)("div",{className:cn("pb-4 pt-0",a),children:n})})});function Faq(){return(0,s.jsxs)("div",{className:"mx-auto max-w-4xl min-w-0 space-y-2",children:[(0,s.jsx)("h2",{className:"scroll-m-20 text-4xl font-bold tracking-tight text-black dark:text-white",children:"FAQ"}),(0,s.jsx)("p",{className:"text-lg text-zinc-400",children:"Have another question? Contact me on Twitter or by email."}),(0,s.jsxs)(v,{type:"single",collapsible:!0,className:"w-full",children:[(0,s.jsxs)(R,{value:"item-1",children:[(0,s.jsx)(C,{children:"Is it accessible?"}),(0,s.jsx)(B,{children:"Yes. It adheres to the WAI-ARIA design pattern."})]}),(0,s.jsxs)(R,{value:"item-2",children:[(0,s.jsx)(C,{children:"Is it styled?"}),(0,s.jsx)(B,{children:"Yes. It comes with default styles that matches the other components' aesthetic."})]}),(0,s.jsxs)(R,{value:"item-3",children:[(0,s.jsx)(C,{children:"Is it animated?"}),(0,s.jsx)(B,{children:"Yes. It's animated by default, but you can disable it if you prefer."})]})]})]})}B.displayName=y.VY.displayName;var _=a(2729),z=a(4960),O=a(3487);function _templateObject(){let e=(0,_._)(["\n            radial-gradient(\n              200px circle at ","px ","px,\n              black 0%,\n              transparent 100%\n            )\n          "]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,_._)(["\n            radial-gradient(\n              200px circle at ","px ","px,\n              black 0%,\n              transparent 100%\n            )\n          "]);return _templateObject1=function(){return e},e}let HeroHighlight=e=>{let{children:t,className:a,containerClassName:n}=e,r=(0,z.c)(0),i=(0,z.c)(0);return(0,s.jsxs)("div",{className:cn("relative h-[40rem] flex items-center bg-white dark:bg-black justify-center w-full group",n),onMouseMove:function(e){let{currentTarget:t,clientX:a,clientY:s}=e;if(!t)return;let{left:n,top:l}=t.getBoundingClientRect();r.set(a-n),i.set(s-l)},children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800  pointer-events-none"}),(0,s.jsx)(u.E.div,{className:"pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100",style:{WebkitMaskImage:(0,O.Y)(_templateObject(),r,i),maskImage:(0,O.Y)(_templateObject1(),r,i)}}),(0,s.jsx)("div",{className:cn("relative z-20",a),children:t})]})},Highlight=e=>{let{children:t,className:a}=e;return(0,s.jsx)(u.E.span,{initial:{backgroundSize:"0% 100%"},animate:{backgroundSize:"100% 100%"},transition:{duration:2,ease:"linear",delay:.5},style:{backgroundRepeat:"no-repeat",backgroundPosition:"left center",display:"inline"},className:cn("relative inline-block pb-1   px-1 rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-indigo-500 dark:to-purple-500",a),children:t})};function HoverBorderGradient(e){let{children:t,containerClassName:a,className:n,as:r="button",duration:l=1,clockwise:o=!0,...c}=e,[d,x]=(0,i.useState)(!1),[h,m]=(0,i.useState)("TOP"),rotateDirection=e=>{let t=["TOP","LEFT","BOTTOM","RIGHT"],a=t.indexOf(e),s=o?(a-1+t.length)%t.length:(a+1)%t.length;return t[s]},p={TOP:"radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",LEFT:"radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",BOTTOM:"radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",RIGHT:"radial-gradient(16.2% 41.199999999999996% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"};return(0,i.useEffect)(()=>{if(!d){let e=setInterval(()=>{m(e=>rotateDirection(e))},1e3*l);return()=>clearInterval(e)}},[d]),(0,s.jsxs)(r,{onMouseEnter:e=>{x(!0)},onMouseLeave:()=>x(!1),className:cn("relative flex rounded-full border  content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",a),...c,children:[(0,s.jsx)("div",{className:cn("w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",n),children:t}),(0,s.jsx)(u.E.div,{className:cn("flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"),style:{filter:"blur(2px)",position:"absolute",width:"100%",height:"100%"},initial:{background:p[h]},animate:{background:d?[p[h],"radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)"]:p[h]},transition:{ease:"linear",duration:null!=l?l:1}}),(0,s.jsx)("div",{className:"bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]"})]})}function Hero(){return(0,s.jsx)("div",{className:"mb-10 lg:mb-20",children:(0,s.jsxs)(HeroHighlight,{className:"space-y-12 ",children:[(0,s.jsxs)(u.E.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:[20,-5,0]},transition:{duration:.5,ease:[.4,0,.2,1]},className:"text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto ",children:["With insomnia, nothing's real. Everything is far away. Everything is a"," ",(0,s.jsx)(Highlight,{className:"text-black dark:text-white",children:"copy, of a copy, of a copy."})]}),(0,s.jsx)("div",{className:"mx-40 flex justify-center text-center",children:(0,s.jsx)(HoverBorderGradient,{containerClassName:"rounded-full",as:"button",className:"dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2",children:(0,s.jsx)("span",{children:"Get Started"})})})]})})}function Pricing(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"overflow-hidden",children:(0,s.jsxs)("div",{className:"max-w-4xl py-10 lg:py-14 mx-auto",children:[(0,s.jsx)("div",{className:" mb-8 lg:mb-14",children:(0,s.jsx)("h2",{className:"scroll-m-20 text-4xl font-bold tracking-tight text-black dark:text-white",children:"Solo, agency or team? We’ve got you covered."})}),(0,s.jsxs)("div",{className:"relative  xl:mx-auto",children:[(0,s.jsx)("div",{className:"grid grid-cols-1  gap-6 lg:gap-8",children:(0,s.jsx)("div",{className:"",children:(0,s.jsxs)("div",{className:"z-50 relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",children:[(0,s.jsx)("h3",{className:"text-xl font-bold text-gray-800 dark:text-neutral-200",children:"Professional"}),(0,s.jsx)("div",{className:"text-sm text-gray-500 dark:text-neutral-500",children:"Everything a small team needs."}),(0,s.jsxs)("div",{className:"mt-5",children:[(0,s.jsx)("span",{className:"text-6xl font-bold text-gray-800 dark:text-neutral-200",children:"$18"}),(0,s.jsx)("span",{className:"text-lg font-bold text-gray-800 dark:text-neutral-200",children:".00"}),(0,s.jsx)("span",{className:"ms-3 text-gray-500 dark:text-neutral-500",children:"USD / monthly"})]}),(0,s.jsxs)("div",{className:"mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0",children:[(0,s.jsxs)("ul",{className:"space-y-2 text-sm sm:text-base",children:[(0,s.jsxs)("li",{className:"flex space-x-3",children:[(0,s.jsx)("span",{className:"mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500",children:(0,s.jsx)("svg",{className:"flex-shrink-0 size-3.5",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:(0,s.jsx)("polyline",{points:"20 6 9 17 4 12"})})}),(0,s.jsx)("span",{className:"text-gray-800 dark:text-neutral-200",children:"Up to 10 people"})]}),(0,s.jsxs)("li",{className:"flex space-x-3",children:[(0,s.jsx)("span",{className:"mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500",children:(0,s.jsx)("svg",{className:"flex-shrink-0 size-3.5",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:(0,s.jsx)("polyline",{points:"20 6 9 17 4 12"})})}),(0,s.jsx)("span",{className:"text-gray-800 dark:text-neutral-200",children:"Collect data"})]}),(0,s.jsxs)("li",{className:"flex space-x-3",children:[(0,s.jsx)("span",{className:"mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500",children:(0,s.jsx)("svg",{className:"flex-shrink-0 size-3.5",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:(0,s.jsx)("polyline",{points:"20 6 9 17 4 12"})})}),(0,s.jsx)("span",{className:"text-gray-800 dark:text-neutral-200",children:"Code extensibility"})]})]}),(0,s.jsxs)("ul",{className:"space-y-2 text-sm sm:text-base",children:[(0,s.jsxs)("li",{className:"flex space-x-3",children:[(0,s.jsx)("span",{className:"size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500",children:(0,s.jsxs)("svg",{className:"flex-shrink-0 size-3.5",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M18 6 6 18"}),(0,s.jsx)("path",{d:"m6 6 12 12"})]})}),(0,s.jsx)("span",{className:"text-gray-800 dark:text-neutral-200",children:"Custom reports"})]}),(0,s.jsxs)("li",{className:"flex space-x-3",children:[(0,s.jsx)("span",{className:"size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500",children:(0,s.jsxs)("svg",{className:"flex-shrink-0 size-3.5",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M18 6 6 18"}),(0,s.jsx)("path",{d:"m6 6 12 12"})]})}),(0,s.jsx)("span",{className:"text-gray-800 dark:text-neutral-200",children:"Product support"})]}),(0,s.jsxs)("li",{className:"flex space-x-3",children:[(0,s.jsx)("span",{className:"size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500",children:(0,s.jsxs)("svg",{className:"flex-shrink-0 size-3.5",xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",children:[(0,s.jsx)("path",{d:"M18 6 6 18"}),(0,s.jsx)("path",{d:"m6 6 12 12"})]})}),(0,s.jsx)("span",{className:"text-gray-800 dark:text-neutral-200",children:"Activity reporting"})]})]})]}),(0,s.jsxs)("div",{className:"mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{className:"text-sm text-gray-500 dark:text-neutral-500",children:"Cancel anytime."}),(0,s.jsx)("p",{className:"text-sm text-gray-500 dark:text-neutral-500",children:"No card required."})]}),(0,s.jsxs)("div",{className:"flex justify-end",children:["   ",(0,s.jsx)("a",{type:"button",href:"https://mk18.lemonsqueezy.com/buy/5322a8e0-095e-4346-8e7e-726bf768b22e",className:"py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800",children:"Get Started"})]})]})]})})}),(0,s.jsx)("div",{className:"hidden md:block absolute top-0 end-0 -translate-y-10 translate-x-12",children:(0,s.jsxs)("svg",{className:"w-16 h-auto text-purple-500",width:121,height:135,viewBox:"0 0 121 135",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{d:"M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164",stroke:"currentColor",strokeWidth:10,strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5",stroke:"currentColor",strokeWidth:10,strokeLinecap:"round"}),(0,s.jsx)("path",{d:"M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874",stroke:"currentColor",strokeWidth:10,strokeLinecap:"round"})]})}),(0,s.jsx)("div",{className:"hidden md:block absolute bottom-0 start-0 translate-y-16 -translate-x-16",children:(0,s.jsx)("svg",{className:"w-56 h-auto text-indigo-300",width:347,height:188,viewBox:"0 0 347 188",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,s.jsx)("path",{d:"M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426",stroke:"currentColor",strokeWidth:7,strokeLinecap:"round"})})})]}),(0,s.jsx)("div",{className:"mt-7 text-center",children:(0,s.jsx)("p",{className:"text-xs text-gray-400",children:"Prices in USD. Taxes may apply."})})]})})})}function Welcome(){return(0,s.jsx)("div",{className:"mx-auto max-w-4xl min-w-0 space-y-2",children:(0,s.jsxs)("div",{className:"mb-8 lg:mb-14 ",children:[(0,s.jsx)("h2",{className:"scroll-m-20 mb-4 text-4xl font-bold tracking-tight text-black dark:text-white",children:"Simplify your ML workflow, maximize your impact."}),(0,s.jsx)("p",{className:"text-lg text-zinc-200",children:"Welcome to FAST ML, your ultimate MLOps boilerplate. Streamline your machine learning workflow with our ready-to-use scripts for data handling, modeling, and deployment."}),(0,s.jsx)("p",{className:"text-lg text-zinc-200",children:"Spend more time innovating and less time integrating. FAST ML provides everything you need to quickly turn your ML ideas into reality."})]})})}function Home(){return(0,s.jsxs)("section",{className:"space-y-12 mb-24",children:[(0,s.jsx)(Hero,{}),(0,s.jsxs)("div",{className:"px-6 lg:px-0",children:[(0,s.jsx)(Welcome,{}),(0,s.jsx)(AnimatedBeamDemo,{}),(0,s.jsx)(BentoGridComponent,{}),(0,s.jsx)(Pricing,{}),(0,s.jsx)(Faq,{})]})]})}let L=[];function _createMdxContent(e){return(0,s.jsx)(Home,{})}var M=(0,n.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.a)(),e.components);return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/index.mdx",route:"/",timestamp:171645538e4,title:"Index",headings:L},pageNextRoute:"/"})}},function(e){e.O(0,[673,675,774,888,179],function(){return e(e.s=1464)}),_N_E=e.O()}]);