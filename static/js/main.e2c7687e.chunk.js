(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{100:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(12),s=a.n(o),r=a(3),l=a(4),c=a(6),p=a(5),d=a(10),m=a(7),h=(a(59),a(46)),u=a.n(h),g=a(107),f=a(108),v=(a(60),a(15)),b=a.n(v).a.Link,k=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(p.a)(t).call(this))).state={navExpanded:!1,h:0},e.closeNav=e.closeNav.bind(Object(d.a)(e)),e.setNavExpanded=e.setNavExpanded.bind(Object(d.a)(e)),e.setWrapperRef=e.setWrapperRef.bind(Object(d.a)(e)),e.handleClickOutside=e.handleClickOutside.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.closeNav();var e=this.navElement.clientHeight;this.setState({h:e}),window.addEventListener("resize",this.closeNav.bind(this)),document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){this.closeNav(),window.removeEventListener("resize",this.closeNav.bind(this)),document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"setWrapperRef",value:function(e){this.wrapperRef=e}},{key:"handleClickOutside",value:function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.closeNav()}},{key:"setNavExpanded",value:function(){this.setState({navExpanded:!this.state.navExpanded})}},{key:"closeNav",value:function(){this.setState({navExpanded:!1})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"head ",ref:this.setWrapperRef,id:"head"},i.a.createElement(g.a,{width:this.props.width,variant:"dark",className:"bw-color",fixed:"top",expand:"lg",onToggle:this.setNavExpanded,expanded:this.state.navExpanded,ref:function(t){e.navElement=t}},i.a.createElement(b,{to:"base",spy:!0,smooth:!0,duration:500,offset:-this.state.h},i.a.createElement(g.a.Brand,{onClick:this.closeNav},"Amr Mahmoud")),i.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(f.a,{justify:!0,className:"ml-auto",onClick:this.closeNav},i.a.createElement(b,{to:"skills",spy:!0,smooth:!0,duration:500,offset:-this.state.h},i.a.createElement(f.a.Item,{onClick:this.closeNav},i.a.createElement(f.a.Link,null,"Skills"))),i.a.createElement(b,{to:"experience",spy:!0,smooth:!0,duration:500,offset:-this.state.h},i.a.createElement(f.a.Item,{onClick:this.closeNav},i.a.createElement(f.a.Link,null,"Experience"))),i.a.createElement(b,{to:"projects",spy:!0,smooth:!0,duration:500,offset:-this.state.h},i.a.createElement(f.a.Item,{onClick:this.closeNav},i.a.createElement(f.a.Link,null,"Projects"))),i.a.createElement(b,{to:"footer-div",spy:!0,smooth:"easeInOutQuad",duration:500,offset:-this.state.h},i.a.createElement(f.a.Item,{onClick:this.closeNav},i.a.createElement(f.a.Link,null,"Contact")))))))}}]),t}(n.Component),y=a(52),E=a.n(y),w=(a(73),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={width:800,height:182},a.updateDimensions=a.updateDimensions.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"updateDimensions",value:function(){console.log("called");var e=window.innerWidth-20,t=window.innerHeight+1;this.props.stars||(t=window.resizeCanv()),console.log(e,t),this.setState({width:e,height:t})}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"render",value:function(){var e=this.state;e.width,e.height;return i.a.createElement(E.a,Object.assign({},this.state,{className:"static-back",params:this.props.stars?{particles:{number:{value:160,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.6,sync:!1}},line_linked:{enable:!0,distance:78.91476416322726,color:"#ffffff",opacity:.4083101981549727,width:.4734885849793636},move:{enable:!0,speed:2,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"bubble"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!1}:{particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!0,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3.945738208161363,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:500,color:"#ffffff",opacity:.4,width:2},move:{enable:!0,speed:6,direction:"bottom",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:.5}},bubble:{distance:400,size:4,duration:.3,opacity:1,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!1}}))}}]),t}(n.Component)),j=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(c.a)(this,Object(p.a)(t).call(this))).state={width:800,height:182},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"updateDimensions",value:function(){var e=window.innerWidth-20,t=window.innerHeight+1,a=e>500?320:220,n=t>600?400:300;this.setState({width:e,height:t,picwidth:a,picheight:n})}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"render",value:function(){return i.a.createElement("div",{id:"base"},i.a.createElement("div",{className:"canv-background"},i.a.createElement(w,{stars:!0,resize:function(){return null}})),i.a.createElement("div",{className:"base",style:{height:this.state.height+"px"}},i.a.createElement(k,{width:this.state.width+"px"}),i.a.createElement("div",{className:"intro-container",style:{height:this.state.height+"px"}},i.a.createElement("div",{className:"profile-pic-container"},i.a.createElement("div",{className:"profile-pic-div"},i.a.createElement("img",{src:u.a,alt:"profile-pic",className:"profile-pic-img",style:{width:this.state.picwidth+"px"}})),i.a.createElement("span",{style:{fontSize:"31px"}},"Amr Mahmoud"),i.a.createElement("span",null,"Bachelor of Applied Science in Engineering Science "),i.a.createElement("span",null,"Specialization in Math, Stats and Finance"),i.a.createElement("span",null,"Graduated May 2019")))))}}]),t}(n.Component),S=(a(74),a(75),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"icon"},i.a.createElement("a",{href:this.props.data.url,target:"Email"==this.props.data.text?null:"_blank"},i.a.createElement("div",null,i.a.createElement("img",{alt:"Failed to Load",className:"icon-img",width:this.props.dimensions.width,height:this.props.dimensions.height,src:this.props.data.icon}),i.a.createElement("span",{className:"icon-text"},this.props.data.text))))}}]),t}(n.Component)),O=a(104),x=a(105),M=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={width:"100px",height:"100px"};return i.a.createElement("div",{className:"footer"},i.a.createElement("hr",{className:"section-break"}),i.a.createElement("h1",{className:"footer-title"},"Thanks for coming!"),i.a.createElement("h2",{className:"footer-subtitle"},"Be sure to stay connected or contact me below."),i.a.createElement(O.a,{className:"footer-icon-holder justify-content-md-center"},i.a.createElement(x.a,{sm:!0},i.a.createElement(S,{data:{icon:"images/Email.png",text:"Email",url:"mailto:amrmahmoud.am@hotmail.com?subject=Your Portfolio"},dimensions:e})),i.a.createElement(x.a,{sm:!0},i.a.createElement(S,{data:{icon:"images/Github.png",text:"Github",url:"https://github.com/AmrMahmoud96"},dimensions:e})),i.a.createElement(x.a,{sm:!0},i.a.createElement(S,{data:{icon:"images/LinkedIn.png",text:"LinkedIn",url:"https://www.linkedin.com/in/amr-mahmoud-to/"},dimensions:e}))))}}]),t}(n.Component),C=(a(76),a(77),function(e){function t(e){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{title:this.props.tag?this.props.data.text:"Select a skill to filter the page content!",className:this.props.selected?"selected-filters skills-icon":"skills-icon",onClick:this.props.onClick?function(t){return e.props.onClick(t,e.props.data.text)}:null},i.a.createElement("div",null,i.a.createElement("img",{alt:"Failed to Load",className:this.props.tag?"filter-icon-img":"skills-icon-img",width:this.props.dimensions.width,height:this.props.dimensions.height,src:this.props.data.icon}),i.a.createElement("span",{className:this.props.tag?"filter-icon-text":"skills-icon-text"},this.props.data.text)))}}]),t}(n.Component)),N=(a(78),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"tag-container"},i.a.createElement("div",{title:this.props.title,className:this.props.filtericon?"tag-icon filter-icon":"tag-icon",onClick:this.props.onClick?function(t){return e.props.onClick(t,e.props.title)}:null},i.a.createElement("span",{className:"helper"}),i.a.createElement("img",{className:"tag-img",src:this.props.image})))}}]),t}(n.Component)),A=(a(79),a(18)),T=a.n(A),P=a(106),L=function(e){function t(e){var a;return Object(r.a)(this,t),a=Object(c.a)(this,Object(p.a)(t).call(this,e)),T.a.defaultStyles.overlay.backgroundColor="#232121",a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(T.a,{ariaHideApp:!1,style:{content:{display:"flex",flexFlow:"column",padding:"2rem"}},isOpen:this.props.show,onRequestClose:this.props.close},i.a.createElement("div",{className:"modal-header"},i.a.createElement("button",{type:"button",class:"close",onClick:this.props.close,"aria-label":"Close"},i.a.createElement("span",{"aria-hidden":"true"},"X")),i.a.createElement("h3",{class:"modal-title"},"Filter Menu")),i.a.createElement("div",{className:"full-filter-container"},i.a.createElement("h4",{className:"filter-title"},"Currently displaying content for the following:"),i.a.createElement("div",{className:"centerflex"},i.a.createElement("div",{className:"filter-container"},this.props.tags))),i.a.createElement("div",{style:{textAlign:"center",marginTop:"auto"}},i.a.createElement("h4",{style:{marginBottom:"5px"}},"Click icons to remove filters"),i.a.createElement("p",null,"or"),i.a.createElement(P.a,{onClick:this.props.clearAll,variant:"danger",size:"lg"},"Clear All"))))}}]),t}(n.Component),I=a(32),Q=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(p.a)(t).call(this,e))).state={isToggleOn:!0,selected:"none",showModal:!1},a.matchSkill=a.matchSkill.bind(Object(d.a)(a)),a.handleOpenModal=a.handleOpenModal.bind(Object(d.a)(a)),a.handleCloseModal=a.handleCloseModal.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"handleOpenModal",value:function(){this.lockBodyScrolling(),this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.restoreBodyScrolling(),this.setState({showModal:!1})}},{key:"lockBodyScrolling",value:function(){this.bodyScrollPos=document.body.scrollTop||document.documentElement.scrollTop||0,this.appWrapper.style.position="fixed",this.appWrapper.style.top="-".concat(this.bodyScrollPos,"px")}},{key:"restoreBodyScrolling",value:function(){this.appWrapper.style.removeProperty("position"),this.appWrapper.style.removeProperty("top"),document.documentElement.scrollTop=document.body.scrollTop=this.bodyScrollPos}},{key:"componentDidMount",value:function(){this.appWrapper=document.getElementById("root")}},{key:"matchSkill",value:function(e){var t=I.filter((function(t){return t.text==e}));return 1==t.length?t[0].icon:null}},{key:"render",value:function(){var e=this;this.state.showModal&&!this.props.filtering&&this.handleCloseModal();var t={width:"100px",height:"100px"},a=I.map((function(a,n){return i.a.createElement(C,{key:n,tag:!1,selected:e.props.filter.includes(a.text)&&e.props.filtering,onClick:e.props.filterAction,data:a,dimensions:t})})),n=this.props.filter.map((function(t,a){return i.a.createElement(C,{key:a,selected:!1,tag:!0,onClick:e.props.filterAction,data:{text:t,icon:e.matchSkill(t)},dimensions:{width:"70px",height:"70px"}})}));return i.a.createElement("div",{className:"skills"},i.a.createElement("svg",{id:"clouds",xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"none"},i.a.createElement("path",{d:"M-5 100 Q 0 20 5 100 Z M0 100 Q 5 0 10 100 M5 100 Q 10 30 15 100 M10 100 Q 15 10 20 100 M15 100 Q 20 30 25 100 M20 100 Q 25 -10 30 100 M25 100 Q 30 10 35 100 M30 100 Q 35 30 40 100 M35 100 Q 40 10 45 100 M40 100 Q 45 50 50 100 M45 100 Q 50 20 55 100 M50 100 Q 55 40 60 100 M55 100 Q 60 60 65 100 M60 100 Q 65 50 70 100 M65 100 Q 70 20 75 100 M70 100 Q 75 45 80 100 M75 100 Q 80 30 85 100 M80 100 Q 85 20 90 100 M85 100 Q 90 50 95 100 M90 100 Q 95 25 100 100 M95 100 Q 100 15 105 100 Z"})),i.a.createElement("div",{className:"skill-background"},i.a.createElement("h1",{id:"skills",className:"skill-section-title",style:{backgroundColor:"black"}},"Skills"),i.a.createElement("h2",{className:"skills-intro"},"Select any combination of skills to filter the contents of the page."),i.a.createElement("div",{className:"skills-container"},a),i.a.createElement("div",{className:this.props.filtering?"filter-shortcut":"unseen",onClick:this.handleOpenModal},i.a.createElement("img",{src:"images/filter.png"})),i.a.createElement(L,{tags:n,filtering:this.props.filtering,clearAll:this.props.clearAll,show:this.state.showModal&&this.props.filtering,close:this.handleCloseModal})),i.a.createElement("svg",{id:"clouds-flipped",xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"none"},i.a.createElement("path",{d:"M-5 100 Q 0 20 5 100 Z M0 100 Q 5 0 10 100 M5 100 Q 10 30 15 100 M10 100 Q 15 10 20 100 M15 100 Q 20 30 25 100 M20 100 Q 25 -10 30 100 M25 100 Q 30 10 35 100 M30 100 Q 35 30 40 100 M35 100 Q 40 10 45 100 M40 100 Q 45 50 50 100 M45 100 Q 50 20 55 100 M50 100 Q 55 40 60 100 M55 100 Q 60 60 65 100 M60 100 Q 65 50 70 100 M65 100 Q 70 20 75 100 M70 100 Q 75 45 80 100 M75 100 Q 80 30 85 100 M80 100 Q 85 20 90 100 M85 100 Q 90 50 95 100 M90 100 Q 95 25 100 100 M95 100 Q 100 15 105 100 Z"})))}}]),t}(n.Component),D=(a(87),a(88),function(e){function t(e){var a;Object(r.a)(this,t),a=Object(c.a)(this,Object(p.a)(t).call(this,e));var n=new Date,i=e.data.endDate.split("-"),o=e.data.endDate;"Present"!=e.data.endDate&&(o=(n=new Date(i[0],i[1]-1,i[2])).toLocaleString("default",{month:"short",year:"numeric"})),i=e.data.startDate.split("-");var s=new Date(i[0],i[1]-1,i[2]),l=12*(n.getFullYear()-s.getFullYear());return l+=n.getMonth()-s.getMonth(),l=n.getDay()<s.getDay()?l-1:l,a.state={dateTime:l,start:s.toLocaleString("default",{month:"short",year:"numeric"}),end:o},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data.description.split("\n").map((function(e,t){return i.a.createElement("li",{key:t},e)}));return i.a.createElement("div",{className:"experience-content"},i.a.createElement("div",{className:"experience-content-container"},i.a.createElement("div",{className:"experience-company-info"},i.a.createElement("img",{alt:"Failed to Load",className:"experience-img",width:this.props.dimensions.width,height:this.props.dimensions.height,src:this.props.data.image}),i.a.createElement("span",null,this.props.data.position),i.a.createElement("span",null,this.state.start," - ",this.state.end," (",this.state.dateTime," months)"),i.a.createElement("span",null,this.props.data.company),i.a.createElement("span",null,this.props.data.location)),i.a.createElement("div",{className:"experience-description"},i.a.createElement("ul",null,e))))}}]),t}(n.Component)),F=a(89),R=!0,H=function(e){function t(e){var a;return Object(r.a)(this,t),a=Object(c.a)(this,Object(p.a)(t).call(this,e)),F=F.sort(a.compare),a.child=i.a.createRef(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(){this.child.current.updateDimensions()}},{key:"compare",value:function(e,t){return e.startDate<t.startDate?1:t.startDate<e.startDate?-1:0}},{key:"render",value:function(){var e=this;R=!0;var t={width:"200px",height:"200px"},a=F.map((function(a,n){var o=e.props.checkFilter(a.tags);return o&&(R=!1),o?i.a.createElement(D,{key:n,data:a,dimensions:t}):null}));return i.a.createElement("div",{className:"experience",ref:"experience"},i.a.createElement("div",{id:"snow",className:"canv-background"},i.a.createElement(w,{stars:!1,ref:this.child,resize:this.props.resize})),i.a.createElement("h1",{className:"exp-section-title",style:{backgroundColor:"black"}},"Experience"),R?i.a.createElement("h1",{style:{padding:"50px",backgroundColor:"grey",textAlign:"center",color:"white"}},"No content available for the filters selected."):a,i.a.createElement("div",{className:"project-transition"},i.a.createElement("img",{src:"images/trees.png"})),i.a.createElement("div",{id:"projects",className:"exp-end"},i.a.createElement("h1",null,"Projects")))}}]),t}(n.Component),B=(a(90),a(91),a(92),a(93),a(53)),U=function(e){function t(e){var a;return Object(r.a)(this,t),a=Object(c.a)(this,Object(p.a)(t).call(this,e)),T.a.defaultStyles.overlay.backgroundColor="#232121",a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.data.images,t=this.props.data.videos;return i.a.createElement("div",null,i.a.createElement(T.a,{ariaHideApp:!1,style:{content:{display:"flex",flexFlow:"column",padding:"2rem"}},isOpen:this.props.show,onRequestClose:this.props.close},i.a.createElement("div",{className:"modal-header"},i.a.createElement("button",{type:"button",class:"close",onClick:this.props.close,"aria-label":"Close"},i.a.createElement("span",{"aria-hidden":"true"},"X")),i.a.createElement("h1",{class:"modal-title"},this.props.data.title),i.a.createElement("h4",{class:"modal-title"},this.props.date)),i.a.createElement(B.Carousel,{swipeable:!0,useKeyboardArrows:!0,infiniteLoop:!0,dynamicHeight:!0,showThumbs:!(window.innerWidth<=760),showIndicators:!(window.innerWidth<=760)},e&&e.map((function(e,t){return i.a.createElement("div",{key:t,className:"carousel-img-div"},i.a.createElement("img",{src:e.path}),i.a.createElement("p",{className:"legend",style:{background:"#000000b5"}},e.caption))})),t&&t.map((function(e,t){return i.a.createElement("div",{key:t,className:"iframe-div"},i.a.createElement("img",{src:"images/play.png",style:{display:"none"}}),i.a.createElement("iframe",{src:e,frameborder:"0",height:"315",width:"560",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullscreen:!0}))}))),this.props.data.repolink&&i.a.createElement("div",{style:{marginTop:"20px"}},i.a.createElement("a",{href:this.props.data.repolink,target:"_blank"},"Check out the repo here")),this.props.data.url&&i.a.createElement("div",{style:{marginTop:"10px"}},i.a.createElement("a",{href:this.props.data.url,target:"_blank"},"See more")),i.a.createElement("div",{style:{textAlign:"center",marginTop:"20px"}},i.a.createElement(P.a,{onClick:this.props.close,variant:"primary",size:"lg"},"Done"))))}}]),t}(n.Component),z=a(32),W=function(e){function t(e){var a;Object(r.a)(this,t),a=Object(c.a)(this,Object(p.a)(t).call(this,e));var n=e.data.date.split("-"),i=new Date(n[0],n[1]-1,n[2]);return a.state={start:i.toLocaleString("default",{month:"short"}),startLong:i.toLocaleString("default",{month:"long"}),year:n[0],showModal:!1,showProject:!0},a.handleOpenModal=a.handleOpenModal.bind(Object(d.a)(a)),a.handleCloseModal=a.handleCloseModal.bind(Object(d.a)(a)),a.matchSkill=a.matchSkill.bind(Object(d.a)(a)),a.toggleShow=a.toggleShow.bind(Object(d.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"toggleShow",value:function(){this.setState({showProject:!this.state.showProject})}},{key:"handleOpenModal",value:function(){this.lockBodyScrolling(),this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.restoreBodyScrolling(),this.setState({showModal:!1})}},{key:"lockBodyScrolling",value:function(){this.bodyScrollPos=document.body.scrollTop||document.documentElement.scrollTop||0,this.appWrapper.style.position="fixed",this.appWrapper.style.top="-".concat(this.bodyScrollPos,"px")}},{key:"restoreBodyScrolling",value:function(){this.appWrapper.style.removeProperty("position"),this.appWrapper.style.removeProperty("top"),document.documentElement.scrollTop=document.body.scrollTop=this.bodyScrollPos}},{key:"componentDidMount",value:function(){this.appWrapper=document.getElementById("root")}},{key:"matchSkill",value:function(e){var t=z.filter((function(t){return t.text==e}));return 1==t.length?t[0].icon:null}},{key:"render",value:function(){var e=this,t=this.props.data.tags.map((function(t,a){return i.a.createElement(N,{key:a,title:t,filtericon:!1,image:e.matchSkill(t)})}));return i.a.createElement("div",{className:"proj-border-container"},i.a.createElement("h1",{className:"project-main-tag-caption",onClick:this.toggleShow},i.a.createElement("span",null,this.props.data.title," (",this.state.start+" "+this.state.year,")")),this.state.showProject&&i.a.createElement("div",{className:"project-content"},i.a.createElement("div",{className:"project-content-container"},i.a.createElement(U,{height:"200px",date:this.state.start+" "+this.state.year,data:this.props.data,show:this.state.showModal,close:this.handleCloseModal}),i.a.createElement("div",{className:"project-company-info"},i.a.createElement("img",{alt:"Failed to Load",onClick:this.handleOpenModal,className:"project-img",src:this.props.data.mainImage})),i.a.createElement("p",null,this.props.data.description),this.props.data.tags.length>0&&i.a.createElement("div",{className:"border-container"},i.a.createElement("h1",{className:"project-tag-caption"},i.a.createElement("span",null,"Made With")),i.a.createElement("div",{className:"project-tags"},t)))))}}]),t}(n.Component),_=a(98),J=!0,G=function(e){function t(e){var a;return Object(r.a)(this,t),a=Object(c.a)(this,Object(p.a)(t).call(this,e)),_=_.sort(a.compare),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"compare",value:function(e,t){return e.date<t.date?1:t.date<e.date?-1:0}},{key:"render",value:function(){var e=this;J=!0;var t={width:"200px",height:"200px"},a=_.map((function(a,n){var o=e.props.checkFilter(a.tags);return o&&(J=!1),o?i.a.createElement(W,{key:n,data:a,dimensions:t}):null}));return i.a.createElement("div",{className:"project"},i.a.createElement("h1",{className:"proj-section-title",style:{backgroundColor:"black"}}),i.a.createElement("h2",{className:"project-intro"},"Click on a project image to view the full gallery."),J?i.a.createElement("h1",{style:{padding:"50px",backgroundColor:"grey",textAlign:"center",color:"white"}},"No content available for the filters selected."):a)}}]),t}(n.Component),X=(a(99),a(32)),q=function(e){function t(){var e;Object(r.a)(this,t),e=Object(c.a)(this,Object(p.a)(t).call(this));var a=[];return X.forEach((function(e){a.push(e.text)})),e.state={filter:a,fullSkillList:a,filtering:!1},e.filterContent=e.filterContent.bind(Object(d.a)(e)),e.checkFilter=e.checkFilter.bind(Object(d.a)(e)),e.clearAll=e.clearAll.bind(Object(d.a)(e)),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"filterContent",value:function(e,t){e.preventDefault();var a=this.state.filter,n=this.state.filtering,i=a.indexOf(t);n?i>-1?(a.splice(i,1),void 0!==a&&0!=a.length||(n=!1,a=this.state.fullSkillList)):a.push(t):(a=[t],n=!0),this.setState((function(e){return{filter:a,filtering:n}}))}},{key:"clearAll",value:function(){var e=this;this.setState((function(t){return{filter:e.state.fullSkillList,filtering:!1}}))}},{key:"checkFilter",value:function(e){if(!this.state.filtering)return!0;for(var t=this.state.filter,a=0;a<e.length;a++)if(t.indexOf(e[a])>-1)return!0;return!1}},{key:"render",value:function(){return i.a.createElement("div",{className:"origin"},i.a.createElement(v.Element,{id:"base"},i.a.createElement(j,null)),i.a.createElement(v.Element,null,i.a.createElement(Q,{filtering:this.state.filtering,clearAll:this.clearAll,filter:this.state.filter,checkFilter:this.checkFilter,filterAction:this.filterContent})),i.a.createElement(v.Element,{id:"experience"},i.a.createElement(H,{filter:this.state.filter,checkFilter:this.checkFilter})),i.a.createElement(v.Element,null,i.a.createElement(G,{filter:this.state.filter,checkFilter:this.checkFilter})),i.a.createElement(v.Element,{id:"footer-div"},i.a.createElement(M,null)))}}]),t}(n.Component);a(100),a(101);s.a.render(i.a.createElement(q,null),document.getElementById("root"))},32:function(e){e.exports=JSON.parse('[{"text":"Python","icon":"images/Python.png"},{"text":"Java","icon":"images/Java.jpg"},{"text":"Go","icon":"images/Go.png"},{"text":"JavaScript","icon":"images/JS.png"},{"text":"React","icon":"images/React.png"},{"text":"SQL","icon":"images/SQL.png"},{"text":"NoSQL","icon":"images/NoSQL.png"},{"text":"nodeJS","icon":"images/nodeJS.png"},{"text":"Selenium","icon":"images/Selenium.png"},{"text":"Flask","icon":"images/Flask.png"},{"text":"Git","icon":"images/Git.png"},{"text":"Machine Learning","icon":"images/ML.png"},{"text":"Cloud Technologies","icon":"images/Cloud.png"},{"text":"RESTful APIs","icon":"images/API.png"}]')},46:function(e,t,a){e.exports=a.p+"static/media/Headshot.374ec0b3.jpg"},54:function(e,t,a){e.exports=a(102)},59:function(e,t,a){},60:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e){e.exports=JSON.parse('[{"company":"Intact Financial Corporation","position":"Software Developer II","location":"Toronto, Ontario","image":"images/IFC.png","startDate":"2019-06-10","endDate":"Present","description":"Proposed, developed, and implemented a machine learning solution for locator failures in automation frameworks, such as Selenium, through Python, SciKit-Learn, and Flask. \\n Worked with actuarial and development teams to automate the testing of complex rating systems across multiple products and devices through the combination of UI and API testing frameworks. \\n Followed best practices in documentation and software development through Agile and Scrum methodologies","tags":["Java","JavaScript","Python","Flask","SQL","Selenium","Git","RESTful APIs","Machine Learning"]},{"company":"University of Toronto","position":"Thesis Student","location":"Toronto, Ontario","image":"images/UofT.png","startDate":"2018-09-01","endDate":"2019-05-01","description":"Thesis: Application of ML Clustering Algorithms for Customer Segmentation and Purchase Prediction. \\n Worked with a Canadian company to address their desire to build a product recommendation engine by applying Machine Learning algorithms on their millions of lines of data. \\n Researched and completed an industry-wide literature review on ML applications in similar fields. \\n Performed extensive data parsing, cleaning, and transformation through SQL and Pandas. \\n Developed a simple and effective K-means clustering solution for customer segmentation using Python and Scikit Learn","tags":["Python","SQL","Machine Learning"]},{"company":"Intact Financial Corporation","position":"Java Developer I","location":"Toronto, Ontario","image":"images/IFC.png","startDate":"2017-05-01","endDate":"2018-09-01","description":"Involved in designing and developing a reporting dashboard for all 800 underwriters and underwriting mangers using only self-written front-end and back-end code in combination with UI/UX best practices. \\n Developed a Massive Testing Tool that saved manual testers over 70% of testing time through API validations. \\n Led automated testing of several projects, web applications, and services through the use of Java and Selenium","tags":["Java","JavaScript","Selenium","Git","RESTful APIs"]}]')},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},98:function(e){e.exports=JSON.parse('[{"title":"EventLite Co-Founder","repolink":"https://github.com/AmrMahmoud96/Evaquint","mainImage":"images/Evaquint/main.jpg","images":[{"path":"images/Evaquint/wireframes.png","caption":"Initial wireframes chosen for the mobile app. "}],"videos":[],"url":"","date":"2019-11-01","description":"Designed an application in order to address a major event organization problem apparent in local communities. Implemented JWT tokens to validate users and create a robust user management system through Postgres SQL. Vouched for a service-oriented approach to develop a RESTful API back-end that scales with growing numbers of users, events, and vendors. Used Adobe XD to draft wireframes/flows with design choices that focused on simplistic UI and great UX.","tags":["Go","SQL","Git","Cloud Technologies","RESTful APIs"]},{"title":"Capstone: Alpha Factory","repolink":"https://github.com/AmrMahmoud96/Project-Green","mainImage":"images/Capstone/main.png","images":[{"path":"images/Capstone/mainpage.png","caption":"Main page of the Alpha Factory web app."},{"path":"images/Capstone/finalflow.png","caption":"Final wireflows detailing the complex backend."},{"path":"images/Capstone/Tearsheet.png","caption":"Sample tearsheet of portfolio performance produced by the Alpha Factory models."}],"videos":[],"url":"","date":"2018-09-01","description":"Optimally allocate funds to form a portfolio using the risk-parity model that is based on the user\'s financial goals and risk tolerance. Designed and developed a fully functioning robo-advisor web app for the average retail investor. Built the application using Flask and Jinja2 for both front-end and back-end simultaneously. Applied financial models and back-testing functions to produce portfolios based on user goals and risk tolerance. Deployed the final web application to Heroku and ensured production functionality with the MongoDB database.","tags":["Python","Flask","Git","JavaScript","NoSQL","RESTful APIs"]},{"title":"Autonomous Robot","repolink":"","mainImage":"images/AER201/main.png","images":[{"path":"images/AER201/frame.png","caption":"test"},{"path":"images/AER201/kill-button.jpg","caption":"test"},{"path":"images/AER201/Robot1.png","caption":"test"}],"videos":["https://www.youtube.com/embed/BAfB_pdHK6U"],"url":"","date":"2015-09-01","description":"Strategically assigned tasks to be completed within a group through the use of Gantt charts and other planning tools and ensured the completion of project deliverables within expected deadlines. Programmed a PIC16F877 microcontroller using Assembly to take input from multiple different sensors and autonomously accomplish the tasks required of the robot. Integrated the circuits and mechanical subsystems while iteratively improving the robot to exceed project criteria","tags":[]},{"title":"NSBE Hacks: SafeTag","repolink":"https://github.com/AmrMahmoud96/SafeTag","mainImage":"images/NSBEHacks/main.png","images":[{"path":"images/NSBEHacks/presenting.jpeg","caption":"test"},{"path":"images/NSBEHacks/Prize.jpeg","caption":"test"},{"path":"images/NSBEHacks/Prize2.jpg","caption":"test"}],"videos":["https://www.youtube.com/embed/k9_700-KTkY"],"url":"https://devpost.com/software/safetag","date":"2019-01-26","description":"SafeTag is an iOS/Android app that uses AR to create a digital creative space for artists. Created for part of NSBE Hacks 2019, first of its kind. 1st Place Prize Winner","tags":["Git","RESTful APIs","NoSQL","nodeJS"]},{"title":"UofT Hacks: FaceLyft","repolink":"https://github.com/kbop543/FaceLyft","mainImage":"images/UofTHacks/main.png","images":[{"path":"images/UofTHacks/fullpresentationroom.jpg","caption":"test"},{"path":"images/UofTHacks/interac.jpeg","caption":"test"},{"path":"images/UofTHacks/me.jpg","caption":"test"},{"path":"images/UofTHacks/prep.jpg","caption":"test"},{"path":"images/UofTHacks/presentation-hall.jpeg","caption":"test"},{"path":"images/UofTHacks/presenting.jpg","caption":"test"},{"path":"images/UofTHacks/prize.jpeg","caption":"test"},{"path":"images/UofTHacks/team.jpeg","caption":"test"}],"videos":["https://www.youtube.com/embed/nXpSHgAcLX0"],"url":"https://devpost.com/software/facelyft","date":"2019-01-08","description":"FaceLyft is a web app for carpool drivers that provides drivers tools for day-to-day work. Features interact e-transfer through facial recognition, smart car door lock and unlock via device and track vehicle information. Made for UoFT Hacks 2019 36 hour competition. 2nd Place Prize Winner, Best Hack using Interac e-Transfer Open API, Top 10 Prize (Entrepreneurship Hatchery)","tags":["Git","React","RESTful APIs","Machine Learning","NoSQL","nodeJS"]},{"title":"Ryerson Hacks: Arcangel","repolink":"https://github.com/asidique/ArcAngel","mainImage":"images/RUHacks/main.png","images":[{"path":"images/RUHacks/discussion.jpg","caption":"test"},{"path":"images/RUHacks/presenting.jpg","caption":"test"}],"videos":["https://www.youtube.com/embed/-rNsIEmY0nU"],"url":"","date":"2018-03-30","description":"Project created in 36 hours for hackathon hosted by Ryerson University. ArcAngel is an AI that helps give soft diagnosis when given a series of symptoms. Features: Speech-to-text, appointment system, emergency info, RFID login system","tags":["Git","React","RESTful APIs","Machine Learning","nodeJS"]},{"title":"Mission Hack: BlueChain","repolink":"https://github.com/asidique/Project-Blue","mainImage":"images/MissionHack/main.png","images":[],"videos":["https://www.youtube.com/embed/8Y1DPuxwB04"],"url":"","date":"2018-03-01","description":"One of the top 5 project created in a 2 day Hackathon event hosted by Hackworks. BlueChain is an ethereum based marketplace that handles realtime transactions. Features Loyalty Point Incentives, Optional warranty for selling items, ability to search for anything on the blockchain","tags":["Git","React","nodeJS"]},{"title":"Citadel Algorithmic Trading Competition ","repolink":"https://github.com/AmrMahmoud96/Citadel-Algo-Contest","mainImage":"images/Citadel/main.png","images":[],"videos":[],"url":"","date":"2018-11-01","description":"","tags":["Git","Python","RESTful APIs"]},{"title":"UofT Engineering Finance Association Website","repolink":"","mainImage":"images/UTEFA/main.png","images":[{"path":"images/UTEFA/homepage.png","caption":"test"}],"videos":[],"url":"https://www.utefa.com","date":"2018-09-01","description":"","tags":["Git","Cloud Technologies","React","RESTful APIs","NoSQL","nodeJS"]}]')},99:function(e,t,a){}},[[54,1,2]]]);
//# sourceMappingURL=main.e2c7687e.chunk.js.map