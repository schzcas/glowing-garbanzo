(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8SuK":function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),l=a("EGbG"),r=a("bsBw"),i=a("NNgJ"),c=a.n(i),o=a("LvDl"),d=a.n(o),u=a("3Z9Z"),m=a("JI6e");var g=function(e){var t,a;function i(t){var a;return(a=e.call(this,t)||this).postList=d.a.cloneDeep(t.list),a.resultList=!!t.result&&t.result,a.state={visiblePosts:[],fullList:!1},a}a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=i.prototype;return o.componentDidMount=function(){this.loadMore()},o.componentWillReceiveProps=function(e){var t=this;this.postList=d.a.cloneDeep(e.list),this.setState({visiblePosts:[],fullList:!1},(function(){return t.loadMore()}))},o.loadMore=function(){var e=this.state.visiblePosts.length;this.setState({visiblePosts:this.postList.allMarkdownRemark.edges.slice(0,e+6),fullList:e==this.postList.allMarkdownRemark.edges.length})},o.render=function(){var e=this;return s.a.createElement(n.Fragment,null,this.state.visiblePosts.map((function(t,a){var i=t.node,c=i.frontmatter,o=c.title,d=c.date,u=c.description,m=c.contentType,g=c.tags,p=c.featuredImage,f=c.type,h=i.fields.slug;return s.a.createElement(n.Fragment,{key:a},s.a.createElement(l.a,{key:h,title:o,date:d,excerpt:u||i.excerpt,contentType:m,tags:g,featuredImage:p?p.childImageSharp.fluid.src:null,type:f,link:h,extended:0==a&&!e.resultList,mobile:e.props.mobile}),4!=a||e.resultList?"":s.a.createElement(r.a,null))})),this.state.fullList?"":s.a.createElement(u.a,{className:"justify-content-center"},s.a.createElement(m.a,{xs:10,sm:10,md:10,lg:12},s.a.createElement("div",{className:c.a.loadPosts,onClick:function(){return e.loadMore()}},"Cargar más"))))},i}(n.Component);t.a=g},A9jJ:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"group":[{"fieldValue":"ai"},{"fieldValue":"aprendizaje estadístico"},{"fieldValue":"business intelligence"},{"fieldValue":"ciencia de datos"},{"fieldValue":"culture"},{"fieldValue":"data product"},{"fieldValue":"data science"},{"fieldValue":"garbanzos"},{"fieldValue":"machine learning"},{"fieldValue":"programming"}]}}}')},GQwe:function(e,t,a){"use strict";a("Z2Ku"),a("L9s1");var n=a("A9jJ"),s=a("q1tI"),l=a.n(s),r=a("3Z9Z"),i=a("JI6e"),c=a("xFxi"),o=a.n(c),d=function(e){return l.a.createElement("button",{className:[e.active?o.a.activeTag:"",o.a.tag].join(" ")},e.title,e.active?l.a.createElement("label",{className:o.a.deleteTag},l.a.createElement("small",null,"✕")):l.a.createElement("label",{className:o.a.addTag},l.a.createElement("small",null,"✕")))};t.a=function(e){var t=n.data.allMarkdownRemark.group.map((function(t){return{title:t.fieldValue,active:!!e.selectedTags&&e.selectedTags.includes(t.fieldValue)}})),a=Object(s.useState)({selectedTags:e.selectedTags?e.selectedTags:[],visibleTags:e.mobile?t.slice(0,5):t.slice(0,10)}),c=a[0],u=a[1];return l.a.createElement("div",null,l.a.createElement(r.a,{className:"justify-content-md-center"},l.a.createElement(i.a,{className:"d-flex justify-content-center",sm:10,md:10,lg:10,xl:10},l.a.createElement("div",{className:o.a.extendedInputContainer},l.a.createElement("input",{className:[o.a.extendedSearchbar,e.mobile?o.a.searchbarMobile:""].join(" "),type:"text",placeholder:e.mobile?"Buscar":"¿Qué quieres aprender el día de hoy?",onKeyUp:e.onKeyUp})))),l.a.createElement(r.a,{className:"justify-content-center"},l.a.createElement("small",null,"Filtrar por etiqueta")),l.a.createElement(r.a,{className:"justify-content-center"},l.a.createElement(i.a,{className:"d-flex justify-content-center",lg:7,xl:7},l.a.createElement("div",{className:o.a.tags},c.visibleTags.map((function(t){return l.a.createElement("div",{className:o.a.tagContainer,onClick:function(){return function(t){var a=c.selectedTags;a.includes(t)?a=a.filter((function(e){return e!==t})):a.push(t);var n=c.visibleTags.map((function(e){return{title:e.title,active:a.includes(e.title)}}));u({selectedTags:a,visibleTags:n}),e.onTagSelected&&e.onTagSelected(a),console.log(c)}(t.title)},key:t.title},l.a.createElement(d,{title:t.title,active:t.active}))}))))),l.a.createElement(r.a,{className:["justify-content-center",o.a.moreTags,e.mobile?o.a.moreTagsMobile:""].join(" ")},c.visibleTags.length<t.length?l.a.createElement("small",{onClick:function(){u({selectedTags:c.selectedTags,visibleTags:t})}},"Ver todas las etiquetas"):""))}},NNgJ:function(e,t,a){e.exports={loadPosts:"post-list-module--load-posts--17m4n"}},WAzz:function(e,t,a){"use strict";a.r(t),a.d(t,"resultPageQuery",(function(){return b}));a("91GP"),a("OG14");var n=a("q1tI"),s=a.n(n),l=a("vNi9"),r=a("7vrA"),i=a("3Z9Z"),c=a("JI6e"),o=a("GQwe"),d=a("xqHg"),u=a("LvDl"),m=a.n(u),g=a("8SuK"),p=a("YGJC"),f=a("H8eV");var h=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).tagSelectHandler=function(e){e.length>0?a.setState({selectedTags:e},(function(){return a.filterByTags()})):a.setState({selectedTags:e},(function(){return a.search()}))},a.state={filteredData:new d.b(m.a.cloneDeep(t.data)),query:t.location.state?t.location.state.searchTerm.toLowerCase():"",selectedTags:t.location.state?t.location.state.tags:[]},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var u=n.prototype;return u.componentDidMount=function(){this.search()},u.searchInputHandler=function(e){var t=this,a=e.target;this.setState({query:a.value},(function(){return t.search()}))},u.search=function(){var e=this;if(this.state.query.trim()||0!=this.state.selectedTags.length){var t=new d.b(m.a.cloneDeep(this.props.data)),a=t.allMarkdownRemark.edges||[];a=new p.a(a,{keys:["node.excerpt","node.frontmatter.title","node.frontmatter.tags","node.frontmatter.contentType"]}).search(this.state.query).map((function(e){return e.item})),t.allMarkdownRemark.edges=a,this.setState({filteredData:t},(function(){return e.state.selectedTags.length>0?e.filterByTags():""}))}else this.setState({filteredData:new d.b(m.a.cloneDeep(this.props.data))})},u.filterByTags=function(){var e,t=this,a=((e=this.state.query.trim()?Object.assign({},this.state.filteredData):new d.b(m.a.cloneDeep(this.props.data))).allMarkdownRemark.edges||[]).filter((function(e){var a=e.node.frontmatter.tags;return m.a.intersection(a,t.state.selectedTags).length>0}));e.allMarkdownRemark.edges=a,this.setState({filteredData:e})},u.render=function(){var e=this.state.filteredData.allMarkdownRemark.edges.length,t=e+" "+(e>1?"publicaciones":"publicación")+" encontrada"+(e>1?"s":"")+" para "+(this.state.query.trim()?'"'+this.state.query+'"':"tu búsqueda");return s.a.createElement(l.a,null,s.a.createElement(f.a,{title:"Resultados de búsqueda"}),s.a.createElement(r.a,{fluid:!0},s.a.createElement(o.a,{selectedTags:this.state.selectedTags,onTagSelected:this.tagSelectHandler,onKeyUp:this.searchInputHandler.bind(this),value:this.state.query,mobile:!0}),s.a.createElement(i.a,{className:"justify-content-center"},s.a.createElement(c.a,{lg:10,className:"d-none d-lg-block"},s.a.createElement("p",{className:"headline-1",style:{margin:"5vh 0 5vh 0"}},t)),s.a.createElement(c.a,{xs:10,sm:10,md:10,className:"d-block d-lg-none"},s.a.createElement("p",{className:"headline-2",style:{margin:"5vh 0 5vh 0"}},t)),s.a.createElement(c.a,{lg:10,xl:10,className:"d-none d-lg-block"},s.a.createElement(g.a,{result:!0,list:this.state.filteredData})),s.a.createElement(c.a,{xs:12,sm:12,className:"d-block d-lg-none p-0"},s.a.createElement(g.a,{mobile:!0,result:!0,list:this.state.filteredData})))))},n}(n.Component);t.default=h;var b="1064463960"},xFxi:function(e,t,a){e.exports={extendedInputContainer:"extended-searchbar-module--extended-input-container--1R9Ou",extendedSearchbar:"extended-searchbar-module--extended-searchbar--cb_S8",searchbarMobile:"extended-searchbar-module--searchbar-mobile--2aJWB",tags:"extended-searchbar-module--tags--1gRRM",tagContainer:"extended-searchbar-module--tag-container--2riFW",tag:"extended-searchbar-module--tag--1tj7o",activeTag:"extended-searchbar-module--active-tag--16fIM",deleteTag:"extended-searchbar-module--delete-tag--2O1x1",addTag:"extended-searchbar-module--add-tag--32CbX",moreTags:"extended-searchbar-module--more-tags--3blrs",moreTagsMobile:"extended-searchbar-module--more-tags-mobile--1vali"}}}]);
//# sourceMappingURL=component---src-pages-search-result-tsx-3f489c0a984b8ea88371.js.map