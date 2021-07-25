(this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]=this["webpackJsonpsd-0x-project-react-context-hooks-starwars-datatable-filters"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),l=n(7),u=n.n(l),c=(n(14),Object(r.createContext)()),i=function(){var e=Object(r.useContext)(c).handleNameInput;return a.a.createElement("label",{htmlFor:"filterName"},"Name:",a.a.createElement("input",{type:"text",name:"filterName",id:"filterName",onChange:e,"data-testid":"name-filter"}))},o=function(){var e=Object(r.useContext)(c),t=e.saveFilter,n=e.returnAlreadyUsedFilter;Object(r.useEffect)((function(){}),[]);var l=function(e){return e.map((function(e){return a.a.createElement("option",{key:e,value:e},e)}))},u=["population","orbital_period","diameter","rotation_period","surface_water"].filter((function(e){return n(e)})),i=Object(r.createRef)(),o=Object(r.createRef)(),m=Object(r.createRef)();return a.a.createElement("div",null,a.a.createElement("label",{htmlFor:"column-filter"},"Column:",a.a.createElement("select",{name:"column-filter",id:"column-filter",ref:i,"data-testid":"column-filter"},l(u))),a.a.createElement("label",{htmlFor:"comparison-filter"},"Comparison:",a.a.createElement("select",{name:"comparison-filter",id:"comparison-filter",ref:o,"data-testid":"comparison-filter"},l(["maior que","menor que","igual a"]))),a.a.createElement("label",{htmlFor:"value-filter"},"Value:",a.a.createElement("input",{type:"number",name:"value-filter",id:"value-filter",ref:m,"data-testid":"value-filter"})),a.a.createElement("button",{type:"button","data-testid":"button-filter",onClick:function(){return t(i.current.value,o.current.value,m.current.value)}},"Add filter"))},m=function(){return a.a.createElement("div",null,a.a.createElement(i,null),a.a.createElement(o,null))},f=function(){var e=Object(r.useContext)(c),t=e.filters.filterNumber,n=e.removeFilterNumber;return a.a.createElement("div",null,t&&t.map((function(e,t){var r=e.column,l=e.comparison,u=e.value;return a.a.createElement("div",{key:r,"data-testid":"filter"},"".concat(r," ").concat(l," ").concat(u),a.a.createElement("button",{type:"button",onClick:function(){return n(t)}},"X"))})))},s=function(){var e=Object(r.useContext)(c),t=e.data,n=e.filteringByName,l=e.returnFromFilter;return a.a.createElement("tbody",null,t&&t.filter((function(e){return n(e)})).filter((function(e){return l(e)})).map((function(e){var t=e.name,n=e.rotation_period,r=e.orbital_period,l=e.diameter,u=e.climate,c=e.gravity,i=e.terrain,o=e.surface_water,m=e.population,f=e.films,s=e.created,d=e.edited,E=e.url;return a.a.createElement("tr",{key:t},a.a.createElement("td",null,t),a.a.createElement("td",null,n),a.a.createElement("td",null,r),a.a.createElement("td",null,l),a.a.createElement("td",null,u),a.a.createElement("td",null,c),a.a.createElement("td",null,i),a.a.createElement("td",null,o),a.a.createElement("td",null,m),a.a.createElement("td",null,f),a.a.createElement("td",null,s),a.a.createElement("td",null,d),a.a.createElement("td",null,E))})))},d=function(){return a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Rotation period"),a.a.createElement("th",null,"Orbital period"),a.a.createElement("th",null,"Diameter"),a.a.createElement("th",null,"Climate"),a.a.createElement("th",null,"Gravity"),a.a.createElement("th",null,"Terrain"),a.a.createElement("th",null,"Surface water"),a.a.createElement("th",null,"Population"),a.a.createElement("th",null,"Films"),a.a.createElement("th",null,"Created"),a.a.createElement("th",null,"Edited"),a.a.createElement("th",null,"Url")))},E=function(){return a.a.createElement("table",null,a.a.createElement(d,null),a.a.createElement(s,null))},p=n(5),b=n(4),v=n.n(b),h=n(8),j=n(3),O=function(e){var t=e.children,n=Object(r.useState)([]),l=Object(j.a)(n,2),u=l[0],i=l[1],o=Object(r.useState)(""),m=Object(j.a)(o,2),f=m[0],s=m[1],d=Object(r.useState)([]),E=Object(j.a)(d,2),b=E[0],O=E[1],y=function(){var e=Object(h.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://swapi-trybe.herokuapp.com/api/planets/",e.next=3,fetch("https://swapi-trybe.herokuapp.com/api/planets/").then((function(e){return e.json()})).then((function(e){return e.results}));case 3:t=e.sent,i(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){y()}),[]);var N={data:u,filters:{filterName:f,filterNumber:b},setFilterName:s,handleNameInput:function(e){var t=e.target;s(t.value)},saveFilter:function(e,t,n){O([].concat(Object(p.a)(b),[{column:e,comparison:t,value:Number(n)}]))},filteringByName:function(e){return f?e.name.toLowerCase().includes(f.toLowerCase()):e},returnFromFilter:function(e){if(0===b.length)return e;var t=b[b.length-1],n=t.column,r=t.comparison,a=t.value,l=Number(e[n]);switch(r){case"maior que":return l>a;case"menor que":return l<a;case"igual a":return l===a;default:return e}},returnAlreadyUsedFilter:function(e){return!b.reduce((function(e,t){return[].concat(Object(p.a)(e),[t.column])}),[]).includes(e)},removeFilterNumber:function(e){O(b.filter((function(t,n){return n!==e})))}};return a.a.createElement(c.Provider,{value:N},t)};var y=function(){return a.a.createElement(O,null,a.a.createElement(m,null),a.a.createElement(f,null),a.a.createElement(E,null))};u.a.render(a.a.createElement(y,null),document.getElementById("root"))},9:function(e,t,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.bae8bf38.chunk.js.map