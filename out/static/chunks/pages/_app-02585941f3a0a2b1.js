(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(15)}])},9749:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(6495).Z,a=n(2648).Z,o=n(1598).Z,r=n(7273).Z,s=o(n(7294)),l=a(n(3121)),c=n(2675),u=n(139),d=n(8730);n(7238);var f=a(n(9824));let g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function m(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,n,a,o,r,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===n&&r(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let s=!1,l=!1;a.current(i({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>s,isPropagationStopped:()=>l,persist:()=>{},preventDefault:()=>{s=!0,t.preventDefault()},stopPropagation:()=>{l=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}let x=s.forwardRef((e,t)=>{var{imgAttributes:n,heightInt:a,widthInt:o,qualityInt:l,className:c,imgStyle:u,blurStyle:d,isLazy:f,fill:g,placeholder:p,loading:m,srcString:x,config:v,unoptimized:_,loader:b,onLoadRef:j,onLoadingCompleteRef:w,setBlurComplete:y,setShowAltText:A,onLoad:k,onError:z}=e,E=r(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=f?"lazy":m,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},E,n,{width:o,height:a,decoding:"async","data-nimg":g?"fill":"1",className:c,loading:m,style:i({},u,d),ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(z&&(e.src=e.src),e.complete&&h(e,x,p,j,w,y,_))},[x,p,j,w,y,z,_,t]),onLoad:e=>{let t=e.currentTarget;h(t,x,p,j,w,y,_)},onError:e=>{A(!0),"blur"===p&&y(!0),z&&z(e)}})))}),v=s.forwardRef((e,t)=>{let n,a;var o,{src:h,sizes:v,unoptimized:_=!1,priority:b=!1,loading:j,className:w,quality:y,width:A,height:k,fill:z,style:E,onLoad:C,onLoadingComplete:S,placeholder:N="empty",blurDataURL:O,layout:I,objectFit:P,objectPosition:R,lazyBoundary:M,lazyRoot:B}=e,W=r(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let L=s.useContext(d.ImageConfigContext),T=s.useMemo(()=>{let e=g||L||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return i({},e,{allSizes:t,deviceSizes:n})},[L]),G=W,H=G.loader||f.default;delete G.loader;let D="__next_img_default"in H;if(D){if("custom"===T.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let F=H;H=e=>{let{config:t}=e,n=r(e,["config"]);return F(n)}}if(I){"fill"===I&&(z=!0);let U={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[I];U&&(E=i({},E,U));let Z={responsive:"100vw",fill:"100vw"}[I];Z&&!v&&(v=Z)}let q="",V=m(A),J=m(k);if("object"==typeof(o=h)&&(p(o)||void 0!==o.src)){let K=p(h)?h.default:h;if(!K.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(K)));if(!K.height||!K.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(K)));if(n=K.blurWidth,a=K.blurHeight,O=O||K.blurDataURL,q=K.src,!z){if(V||J){if(V&&!J){let Y=V/K.width;J=Math.round(K.height*Y)}else if(!V&&J){let Q=J/K.height;V=Math.round(K.width*Q)}}else V=K.width,J=K.height}}let X=!b&&("lazy"===j||void 0===j);((h="string"==typeof h?h:q).startsWith("data:")||h.startsWith("blob:"))&&(_=!0,X=!1),T.unoptimized&&(_=!0),D&&h.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(_=!0);let[$,ee]=s.useState(!1),[et,en]=s.useState(!1),ei=m(y),ea=Object.assign(z?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:P,objectPosition:R}:{},et?{}:{color:"transparent"},E),eo="blur"===N&&O&&!$?{backgroundSize:ea.objectFit||"cover",backgroundPosition:ea.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:V,heightInt:J,blurWidth:n,blurHeight:a,blurDataURL:O}),'")')}:{},er=function(e){let{config:t,src:n,unoptimized:i,width:a,quality:o,sizes:r,loader:s}=e;if(i)return{src:n,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,n){let{deviceSizes:i,allSizes:a}=e;if(n){let o=/(^|\s)(1?\d?\d)vw/g,r=[];for(let s;s=o.exec(n);s)r.push(parseInt(s[2]));if(r.length){let l=.01*Math.min(...r);return{widths:a.filter(e=>e>=i[0]*l),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:i,kind:"w"};let c=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:c,kind:"x"}}(t,a,r),u=l.length-1;return{sizes:r||"w"!==c?r:"100vw",srcSet:l.map((e,i)=>"".concat(s({config:t,src:n,quality:o,width:e})," ").concat("w"===c?e:i+1).concat(c)).join(", "),src:s({config:t,src:n,quality:o,width:l[u]})}}({config:T,src:h,unoptimized:_,width:V,quality:ei,sizes:v,loader:H}),es=h,el={imageSrcSet:er.srcSet,imageSizes:er.sizes,crossOrigin:G.crossOrigin},ec=s.useRef(C);s.useEffect(()=>{ec.current=C},[C]);let eu=s.useRef(S);s.useEffect(()=>{eu.current=S},[S]);let ed=i({isLazy:X,imgAttributes:er,heightInt:J,widthInt:V,qualityInt:ei,className:w,imgStyle:ea,blurStyle:eo,loading:j,config:T,fill:z,unoptimized:_,placeholder:N,loader:H,srcString:es,onLoadRef:ec,onLoadingCompleteRef:eu,setBlurComplete:ee,setShowAltText:en},G);return s.default.createElement(s.default.Fragment,null,s.default.createElement(x,Object.assign({},ed,{ref:t})),b?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+er.src+er.srcSet+er.sizes,rel:"preload",as:"image",href:er.srcSet?void 0:er.src},el))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:n,blurWidth:i,blurHeight:a,blurDataURL:o}=e,r=i||t,s=a||n,l=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return r&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(r," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(i&&a?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(o,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function n(e){let{config:t,src:n,width:i,quality:a}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n.__next_img_default=!0,t.default=n},15:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var i=n(5893);n(4280),n(6913);var a=n(9008),o=n.n(a),r=n(8027),s=n.n(r),l=n(7294),c=n(5675),u=n.n(c),d=n(1665),f=n.n(d),g=n(2377),p=n.n(g);function m(){return(0,i.jsx)("div",{className:p().footer,children:(0,i.jsx)("span",{className:p().caption,children:"Copyright \xa9 2019 - 2023 Muhammet Sarıoğlu"})})}var h={src:"/_next/static/media/logo.db229509.png",height:142,width:250,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEWH0OeG0OeG0OeH0Od5zOaEz+aG0OeG0Oe+4u309PLC4+2G0Ob69fKK1u2jAAAADXRSTlMBWW+HI5F4RzWchxmIwTvZogAAAAlwSFlzAAALEwAACxMBAJqcGAAAACtJREFUeJxj4OBkZWQAAU4ediYwg4uLmZWFg5uBgYWFlZkNIsjIyMTGzAgADncAlko9NrkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:5};function x(){let[e,t]=(0,l.useState)(!1),n=e?f()["is-unfolded"]:"",a=e=>{e.preventDefault();let n=window.document.getElementById(e.currentTarget.href.split("#")[1]);if(n){var i=0,a=n.getBoundingClientRect().top;window.innerWidth<1024&&(i=185.8,t(!1));var o=a-i;window.scrollBy({top:o,behavior:"smooth"})}};return(0,i.jsxs)("div",{className:f().container,children:[(0,i.jsxs)("div",{className:f()["navbar-brand"],children:[(0,i.jsx)(u(),{src:h,alt:"logo",className:f()["brand-image"],priority:!0}),(0,i.jsx)("a",{onClick:()=>t(!e),className:f()["navbar-burger"]})]}),(0,i.jsx)("div",{className:"".concat(f()["navbar-menu"]," ").concat(n),children:(0,i.jsxs)("ul",{className:"".concat(f()["navbar-items"]),children:[(0,i.jsx)("li",{className:"".concat(f()["navbar-item"]),"data-to-scrollspy-id":"home",children:(0,i.jsx)("a",{href:"#home",onClick:e=>a(e),children:"Home"})}),(0,i.jsx)("li",{className:"".concat(f()["navbar-item"]),"data-to-scrollspy-id":"about",children:(0,i.jsx)("a",{href:"#about",onClick:e=>a(e),children:"About"})}),(0,i.jsx)("li",{className:"".concat(f()["navbar-item"]),children:(0,i.jsx)("a",{href:"#projects",onClick:e=>a(e),children:"Projects"})})]})}),(0,i.jsx)("div",{className:"".concat(f()["navbar-footer"]),children:(0,i.jsx)(m,{})})]})}function v(e){let{children:t}=e;return(0,i.jsxs)("div",{className:s().container,children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("meta",{charSet:"utf-8"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("title",{children:"Portfolio of Muhammet Sarıoğlu"}),(0,i.jsx)("meta",{name:"description",content:"".concat("An online portfolio of Muhammet Sarıoğlu")}),(0,i.jsx)("link",{rel:"icon",href:"icons/favicon.ico"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"icons/apple-icon-57x57.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"icons/apple-icon-60x60.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"icons/apple-icon-72x72.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"icons/apple-icon-76x76.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"icons/apple-icon-114x114.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"icons/apple-icon-120x120.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"icons/apple-icon-144x144.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"icons/apple-icon-152x152.png"}),(0,i.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"icons/apple-icon-180x180.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"icons/android-icon-192x192.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"icons/favicon-32x32.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"icons/favicon-96x96.png"}),(0,i.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"icons/favicon-16x16.png"}),(0,i.jsx)("link",{rel:"manifest",href:"icons/manifest.json"}),(0,i.jsx)("meta",{name:"msapplication-TileColor",content:"#081b3d"}),(0,i.jsx)("meta",{name:"msapplication-TileImage",content:"icons/ms-icon-144x144.png"}),(0,i.jsx)("meta",{name:"theme-color",content:"#081b3d"})]}),(0,i.jsx)("nav",{className:s().navbar,role:"navigation","aria-label":"main navigation",children:(0,i.jsx)(x,{})}),(0,i.jsx)("main",{className:s().main,children:t}),(0,i.jsx)("footer",{className:s().footer,children:(0,i.jsx)(m,{})})]})}var _=function(e){let{Component:t,pageProps:n}=e;return(0,i.jsx)(v,{children:(0,i.jsx)(t,{...n})})}},4280:function(){},2377:function(e){e.exports={footer:"footer_footer__m_pHb",caption:"footer_caption__MxEss"}},8027:function(e){e.exports={"primary-text":"layout_primary-text__Wq58N","secondary-text":"layout_secondary-text__HHczg","light-text":"layout_light-text__Hc4eo","dark-text":"layout_dark-text__zE3LV",container:"layout_container__ONNwY",navbar:"layout_navbar__dBMX4",main:"layout_main__PQuuL",footer:"layout_footer__YxWQc"}},1665:function(e){e.exports={"primary-text":"navigation_primary-text__pWKS9","secondary-text":"navigation_secondary-text__51ImQ","light-text":"navigation_light-text__teMCZ","dark-text":"navigation_dark-text__80ymL",container:"navigation_container__YMN84","navbar-brand":"navigation_navbar-brand__0wKqo","brand-image":"navigation_brand-image__188Q5","navbar-menu":"navigation_navbar-menu__HOnXM","navbar-items":"navigation_navbar-items__zhLBq","is-unfolded":"navigation_is-unfolded__HFk_W","navbar-footer":"navigation_navbar-footer__OPOGn","navbar-burger":"navigation_navbar-burger__ttDHP","navbar-item":"navigation_navbar-item__yGIk3","active-item":"navigation_active-item__HPyTC"}},6913:function(){},9008:function(e,t,n){e.exports=n(3121)},5675:function(e,t,n){e.exports=n(9749)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(880)}),_N_E=e.O()}]);