(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{283:function(e,t,n){"use strict";n.r(t);var a=n(290),l=n(305),o=n(306),s=n(425),i=n(307),c=n(424),r=n(291),u=n(286),d=n.n(u),p=n(287),b=n(423),m=function(e){function t(){var e,n;Object(o.a)(this,t);for(var c=arguments.length,u=new Array(c),b=0;b<c;b++)u[b]=arguments[b];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(u)))).state={widgetsActive:!0,modulesActive:!0,not_installed:!0,installed:!0,updated:!0,search:""},n.componentDidMount=function(){n.getData()},n.onChange=function(e,t){var o=n.state.filters,s={};"undefined"!=typeof n.state[t]&&(s[t]=e),n.setState(Object(l.a)({},s,{filters:Object(l.a)({},o,Object(a.a)({},t,e))}),n.getData)},n.clearFilters=function(){n.setState({widgetsActive:!0,modulesActive:!0,not_installed:!0,installed:!0,updated:!0,nothingShown:!1,search:""},n.getData)},n.uploadLicence=function(){},n.installAll=function(){},n.updateAll=function(){},n.getParsedGETParamsForExtensions=function(e){var t=n.state,a=t.installed,l=t.not_installed,o=t.updated,s=t.search,i="",c=!1;s&&(i+="&search="+s),a&&l&&o?e(i,c):(o||(i+="&updated=false"),a&&!l?i+="&installed=true":!a&&l?i+="&installed=false":a||l||(c=!0),e(i,c))},n.getData=function(){var e=n.props.getAxiosData;n.getParsedGETParamsForExtensions(function(t,a){n.setState({nothingShown:a}),a||e({url:"./api/internal.php?object=centreon_module&action=list".concat(t),propKey:"extensions"})})},n.toggleExtensionsDetails=function(e){console.log(e)},n.render=function(){var e=n.props.remoteData,t=n.state,a=t.modulesActive,l=t.widgetsActive,o=t.not_installed,s=t.installed,i=t.updated,c=t.search,u=t.nothingShown;return d.a.createElement("div",null,d.a.createElement(p.TopFilters,{fullText:{label:"Search:",value:c,filterKey:"search"},onChange:n.onChange.bind(Object(r.a)(Object(r.a)(n))),switchers:[[{customClass:"container__col-md-4 container__col-xs-4",switcherTitle:"Status:",switcherStatus:"Not installed",value:o,filterKey:"not_installed"},{customClass:"container__col-md-4 container__col-xs-4",switcherStatus:"Installed",value:s,filterKey:"installed"},{customClass:"container__col-md-4 container__col-xs-4",switcherStatus:"Update",value:i,filterKey:"updated"}],[{customClass:"container__col-sm-3 container__col-xs-4",switcherTitle:"Type:",switcherStatus:"Module",value:a,filterKey:"modulesActive"},{customClass:"container__col-sm-3 container__col-xs-4",switcherStatus:"Widget",value:l,filterKey:"widgetsActive"},{button:!0,label:"Clear Filters",color:"black",buttonType:"bordered",onClick:n.clearFilters.bind(Object(r.a)(Object(r.a)(n)))}]]}),d.a.createElement(p.Wrapper,null,d.a.createElement(p.Button,{label:"Update all",buttonType:"regular",customClass:"mr-2",color:"orange",onClick:n.updateAll.bind(Object(r.a)(Object(r.a)(n)))}),d.a.createElement(p.Button,{label:"Install all",buttonType:"regular",customClass:"mr-2",color:"green",onClick:n.installAll.bind(Object(r.a)(Object(r.a)(n)))}),d.a.createElement(p.Button,{label:"Upload licence",buttonType:"regular",color:"blue",onClick:n.uploadLicence.bind(Object(r.a)(Object(r.a)(n)))})),e.extensions&&!u?d.a.createElement(d.a.Fragment,null,e.extensions.result.module&&a?d.a.createElement(p.ExtensionsHolder,{onCardClicked:function(e){console.log("fasdf",e)},titleIcon:"object",title:"Modules",entities:e.extensions.result.module.entities}):null,e.extensions.result.widget&&l?d.a.createElement(p.ExtensionsHolder,{onCardClicked:function(e){console.log("fasdf",e)},titleIcon:"puzzle",title:"Widgets",entities:e.extensions.result.widget.entities}):null):null)},n}return Object(c.a)(t,e),t}(u.Component),f={getAxiosData:function(e){return Object(l.a)({type:"@axios/GET_DATA"},e)}};t.default=Object(b.a)(function(e){return{remoteData:e.remoteData}},f)(m)}}]);