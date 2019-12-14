(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{34:function(e){e.exports=JSON.parse('[{"text":"Python","icon":"images/Python.png"},{"text":"Java","icon":"images/Java.jpg"},{"text":"Go","icon":"images/Go.png"},{"text":"JavaScript","icon":"images/JS.png"},{"text":"React","icon":"images/React.png"},{"text":"SQL","icon":"images/SQL.png"},{"text":"NoSQL","icon":"images/NoSQL.png"},{"text":"nodeJS","icon":"images/nodeJS.png"},{"text":"Selenium","icon":"images/Selenium.png"},{"text":"Flask","icon":"images/Flask.png"},{"text":"Git","icon":"images/Git.png"}]')},35:function(e,t,a){e.exports=a.p+"static/media/Headshot.cace8b7b.png"},43:function(e,t,a){e.exports=a(73)},48:function(e,t,a){},49:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e){e.exports=JSON.parse('[{"company":"Intact Financial Corporation","position":"Software Developer II","location":"Toronto, Ontario","image":"images/IFC.png","startDate":"2019-06-10","endDate":"Present","description":"Proposed, developed, and implemented a machine learning solution for locator failures in automation frameworks, such as Selenium, through Python, SciKit-Learn, and Flask. Worked with actuarial and development teams to automate the testing of complex rating systems across multiple products and devices through the combination of UI and API testing frameworks. Followed best practices in documentation and software development through Agile and Scrum methodologies","tags":["Java","JavaScript","Python","Flask","SQL","Selenium","Git"]},{"company":"University of Toronto","position":"Thesis Student: Application of ML Clustering Algorithms for Customer Segmentation and Purchase Prediction","location":"Toronto, Ontario","image":"images/UofT.png","startDate":"2018-09-01","endDate":"2019-05-01","description":"Worked with a Canadian company to address their desire to build a product recommendation engine by applying Machine Learning algorithms on their millions of lines of data. Researched and completed an industry-wide literature review on ML applications in similar fields. Performed extensive data parsing, cleaning, and transformation through SQL and Pandas. Developed a simple and effective K-means clustering solution for customer segmentation using Python and Scikit Learn","tags":["Python","SQL"]},{"company":"Intact Financial Corporation","position":"Java Developer I","location":"Toronto, Ontario","image":"images/IFC.png","startDate":"2017-05-01","endDate":"2018-09-01","description":"Involved in designing and developing a reporting dashboard for all 800 underwriters and underwriting mangers using only self-written front-end and back-end code in combination with UI/UX best practices. Developed a Massive Testing Tool that saved manual testers over 70% of testing time through API validations. Led automated testing of several projects, web applications, and services through the use of Java and Selenium","tags":["Java","JavaScript","Selenium","Git"]}]')},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(15),s=a.n(o),r=a(4),c=a(5),l=a(8),d=a(6),m=a(10),h=a(9),u=(a(48),a(35)),p=a.n(u),f=a(77),g=a(78),v=(a(49),a(14)),b=a.n(v).a.Link,E=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).state={navExpanded:!1},e.closeNav=e.closeNav.bind(Object(m.a)(e)),e.setNavExpanded=e.setNavExpanded.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.closeNav(),window.addEventListener("resize",this.closeNav.bind(this))}},{key:"componentWillUnmount",value:function(){this.closeNav(),window.addEventListener("resize",this.closeNav.bind(this))}},{key:"setNavExpanded",value:function(){this.setState({navExpanded:!this.state.navExpanded})}},{key:"closeNav",value:function(){this.setState({navExpanded:!1})}},{key:"render",value:function(){return i.a.createElement("div",{className:"head ",id:"head"},i.a.createElement(f.a,{variant:"dark",className:"bw-color",fixed:"top",expand:"lg",onToggle:this.setNavExpanded,expanded:this.state.navExpanded},i.a.createElement(b,{to:"base",spy:!0,smooth:!0,duration:500},i.a.createElement(f.a.Brand,{onClick:this.closeNav},"Amr Mahmoud")),i.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),i.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},i.a.createElement(g.a,{justify:!0,className:"ml-auto",onClick:this.closeNav},i.a.createElement(b,{to:"skills",spy:!0,smooth:!0,duration:500},i.a.createElement(g.a.Item,{onClick:this.closeNav},i.a.createElement(g.a.Link,null,"Skills"))),i.a.createElement(b,{to:"experience",spy:!0,smooth:!0,duration:500},i.a.createElement(g.a.Item,{onClick:this.closeNav},i.a.createElement(g.a.Link,null,"Experience"))),i.a.createElement(b,{to:"footer",spy:!0,smooth:!0,duration:500},i.a.createElement(g.a.Item,{onClick:this.closeNav},i.a.createElement(g.a.Link,null,"Education"))),i.a.createElement(b,{to:"footer",spy:!0,smooth:!0,duration:500},i.a.createElement(g.a.Item,{onClick:this.closeNav},i.a.createElement(g.a.Link,null,"Projects"))),i.a.createElement(b,{to:"footer",spy:!0,smooth:!0,duration:500},i.a.createElement(g.a.Item,{onClick:this.closeNav},i.a.createElement(g.a.Link,null,"Contact")))))))}}]),t}(n.Component),k=a(41),y=a.n(k),w=(a(62),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).state={width:800,height:182},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"updateDimensions",value:function(){var e=window.innerWidth-20,t=window.innerHeight+1;this.setState({width:e,height:t})}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"render",value:function(){var e=this.state;e.width,e.height;return i.a.createElement(y.a,Object.assign({},this.state,{className:"static-back",params:{particles:{number:{value:60,density:{enable:!0,value_area:700}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3.5,random:!0,anim:{enable:!1,speed:50,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:100,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:3,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:561.194221302933,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!1}}))}}]),t}(n.Component)),O=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(l.a)(this,Object(d.a)(t).call(this))).state={width:800,height:182},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"updateDimensions",value:function(){var e=window.innerWidth-20,t=window.innerHeight+1,a=e>500?370:270,n=t>600?400:300;this.setState({width:e,height:t,picwidth:a,picheight:n})}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"render",value:function(){return i.a.createElement("div",{id:"base"},i.a.createElement(w,null),i.a.createElement(E,null),i.a.createElement("div",{className:"base",style:{height:this.state.height+"px"}},i.a.createElement("div",{className:"intro-container",style:{height:this.state.height-50+"px"}},i.a.createElement("div",{className:"profile-pic-container centered"},i.a.createElement("img",{src:p.a,className:"profile-pic",alt:"profile-pic",style:{width:this.state.picwidth+"px",height:this.state.picheight+"px"}})),i.a.createElement("div",{className:"intro",style:{width:this.state.width-this.state.picwidth-50+"px"}},i.a.createElement("h2",{className:"title"},"Hi! I'm Amr Mahmoud."),i.a.createElement("h3",{className:"subtitle"},"A programmer, entrepreneur, and everything inbetween."),i.a.createElement("h4",{className:"summary"},"I'm passionate about adding value to companies by solving real world problems.")))))}}]),t}(n.Component),j=(a(63),a(64),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"icon"},i.a.createElement("a",{href:this.props.data.url},i.a.createElement("div",null,i.a.createElement("img",{alt:"Failed to Load",className:"icon-img",width:this.props.dimensions.width,height:this.props.dimensions.height,src:this.props.data.icon}),i.a.createElement("span",{className:"icon-text"},this.props.data.text))))}}]),t}(n.Component)),x=a(75),N=a(76),S=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={width:"100px",height:"100px"};return i.a.createElement("div",{className:"footer"},i.a.createElement("h1",{className:"footer-title"},"Thanks for coming!"),i.a.createElement("h2",{className:"footer-subtitle"},"Be sure to stay connected or contact me below."),i.a.createElement(x.a,{className:"footer-icon-holder justify-content-md-center"},i.a.createElement(N.a,null,i.a.createElement(j,{data:{icon:"images/Email.png",text:"Email",url:"mailto:amrmahmoud.am@hotmail.com?subject=Your Portfolio"},dimensions:e})),i.a.createElement(N.a,null,i.a.createElement(j,{data:{icon:"images/Github.png",text:"Github",url:"https://github.com/AmrMahmoud96"},dimensions:e})),i.a.createElement(N.a,null,i.a.createElement(j,{data:{icon:"images/LinkedIn.png",text:"LinkedIn",url:"https://www.linkedin.com/in/amr-mahmoud-to/"},dimensions:e}))))}}]),t}(n.Component),C=(a(65),a(66),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={selected:!1},a.switchSelected=a.switchSelected.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"switchSelected",value:function(){this.setState((function(e){return{selected:!e.selected}}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{title:"Select a skill to filter the page content!",className:this.state.selected?"selected skills-icon":"skills-icon",onClick:this.props.onClick?function(t){return e.props.onClick(t,e.props.data.text,e.switchSelected)}:null},i.a.createElement("div",null,i.a.createElement("img",{alt:"Failed to Load",className:"skills-icon-img",width:this.props.dimensions.width,height:this.props.dimensions.height,src:this.props.data.icon}),i.a.createElement("span",{className:"skills-icon-text"},this.props.data.text)))}}]),t}(n.Component)),D=a(34),L=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={isToggleOn:!0,selected:"none"},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t={width:"100px",height:"100px"},a=D.map((function(a,n){return i.a.createElement(C,{key:n,onClick:e.props.filterAction,data:a,dimensions:t})}));return i.a.createElement("div",{className:"skills"},i.a.createElement("h1",{className:"section-title",style:{backgroundColor:"black"}},"Skills"),i.a.createElement("div",{className:"skills-container"},a))}}]),t}(n.Component),I=(a(67),a(68),function(e){function t(e){var a;Object(r.a)(this,t),a=Object(l.a)(this,Object(d.a)(t).call(this,e));var n=new Date,i=e.data.endDate.split("-"),o=e.data.endDate;"Present"!=e.data.endDate&&(o=(n=new Date(i[0],i[1]-1,i[2])).toLocaleString("default",{month:"short"})),i=e.data.startDate.split("-");var s=new Date(i[0],i[1]-1,i[2]),c=12*(n.getFullYear()-s.getFullYear());return c+=n.getMonth()-s.getMonth(),c=n.getDay()<s.getDay()?c-1:c,a.state={dateTime:c,start:s.toLocaleString("default",{month:"short"}),end:o},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"experience-content"},i.a.createElement("div",{className:"experience-company-info"},i.a.createElement("img",{alt:"Failed to Load",className:"experience-img",width:this.props.dimensions.width,height:this.props.dimensions.height,src:this.props.data.image}),i.a.createElement("span",null,this.props.data.company)),i.a.createElement("span",null,this.props.data.position),i.a.createElement("p",null,this.props.data.location),i.a.createElement("p",null,this.state.start,"-",this.state.end," (",this.state.dateTime," months)"),i.a.createElement("p",null,this.props.data.description))}}]),t}(n.Component)),F=a(69),P=function(e){function t(e){var a;return Object(r.a)(this,t),a=Object(l.a)(this,Object(d.a)(t).call(this,e)),F=F.sort(a.compare),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"compare",value:function(e,t){return e.startDate<t.startDate?1:t.startDate<e.startDate?-1:0}},{key:"render",value:function(){var e=this,t={width:"200px",height:"200px"},a=F.map((function(a,n){return e.props.checkFilter(a.tags)?i.a.createElement(I,{key:n,data:a,dimensions:t}):null}));return i.a.createElement("div",{className:"experience"},i.a.createElement("h1",{className:"section-title",style:{backgroundColor:"black"}},"Experience"),a)}}]),t}(n.Component),J=(a(70),a(34)),T=function(e){function t(){var e;Object(r.a)(this,t),e=Object(l.a)(this,Object(d.a)(t).call(this));var a=[];return J.forEach((function(e){a.push(e.text)})),e.state={filter:a,fullSkillList:a,filtering:!1},e.filterContent=e.filterContent.bind(Object(m.a)(e)),e.checkFilter=e.checkFilter.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"filterContent",value:function(e,t,a){e.preventDefault();var n,i=this.state.filter,o=this.state.filtering,s=i.indexOf(t);o?s>-1?(i.splice(s,1),void 0!==i&&0!=i.length||(o=!1,i=this.state.fullSkillList)):i.push(t):(i=[t],o=!0),n=i,this.setState((function(e){return{filter:n,filtering:o}})),a()}},{key:"checkFilter",value:function(e){for(var t=this.state.filter,a=0;a<e.length;a++)if(t.indexOf(e[a])>-1)return console.log("here"),!0;return console.log("therer"),!1}},{key:"render",value:function(){return i.a.createElement("div",{className:"origin"},i.a.createElement(v.Element,{id:"base"},i.a.createElement(O,null)),i.a.createElement(v.Element,{id:"skills"},i.a.createElement(L,{filterAction:this.filterContent})),i.a.createElement(v.Element,{id:"experience"},i.a.createElement(P,{filter:this.state.filter,checkFilter:this.checkFilter})),i.a.createElement(v.Element,{id:"footer"},i.a.createElement(S,null)))}}]),t}(n.Component);a(71),a(72);s.a.render(i.a.createElement(T,null),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.18c41828.chunk.js.map