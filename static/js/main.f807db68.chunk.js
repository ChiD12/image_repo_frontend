(this.webpackJsonpimage_repo_frontend=this.webpackJsonpimage_repo_frontend||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var c={};a.r(c),a.d(c,"Home",(function(){return C})),a.d(c,"ImageClicked",(function(){return w}));var n=a(0),o=a.n(n),l=a(10),i=a.n(l),r=(a(77),a(12)),s=(a(78),a(44)),d=a(26),u=a.n(d),j=a(136),b=a(138),m=a(144),g=a(133),p=a(145),h="http://localhost:5000",f=Object(g.a)((function(e){return Object(p.a)({root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden"},gridList:{width:1200}})})),O=a(5),x="".concat(h,"/all"),v="".concat(h,"/images/"),C=function(e){var t=Object(n.useState)(null),a=Object(r.a)(t,2),c=(a[0],a[1],Object(n.useState)(!1)),o=Object(r.a)(c,2),l=(o[0],o[1],Object(n.useState)([])),i=Object(r.a)(l,2),d=i[0],g=i[1],p=f(),h=Object(n.useState)(500),C=Object(r.a)(h,2);C[0],C[1];console.log(e);Object(n.useEffect)((function(){u.a.get(x,{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){console.log(e.data),g(e.data.items)})).catch((function(e){console.log(e)}))}),[]);return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:p.root,children:Object(O.jsx)(j.a,{cellHeight:300,className:p.gridList,cols:3,children:d.map((function(t,a){return Object(O.jsx)(m.a,Object(s.a)(Object(s.a)({in:!0},{timeout:100*(a+1)}),{},{children:Object(O.jsx)(b.a,{onClick:function(){e.clickImage(t.name)},children:Object(O.jsx)("img",{src:v+t.name})},t.id)}))}))})})})},y=("".concat(h,"/all"),"".concat(h,"/images/")),w=function(e){var t=Object(n.useState)(null),a=Object(r.a)(t,2),c=(a[0],a[1],Object(n.useState)(!1)),o=Object(r.a)(c,2),l=(o[0],o[1],Object(n.useState)([])),i=Object(r.a)(l,2),s=i[0],d=i[1],g=f();console.log(e);var p="".concat(h,"/getSimilarImages/").concat(e.imageClicked);console.log(p);Object(n.useEffect)((function(){u.a.get(p,{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){console.log(e.data),d(e.data.items)})).catch((function(e){console.log(e)}))}),[e.imageClicked]);return Object(O.jsxs)("div",{className:"selected",children:[Object(O.jsx)("p",{children:"Similar Images to Selected Image"}),Object(O.jsx)("div",{className:g.root,children:Object(O.jsxs)(j.a,{cellHeight:400,className:g.gridList,cols:3,children:[Object(O.jsx)(b.a,{cols:3,children:Object(O.jsx)("img",{src:y+e.imageClicked})},"main"),s.map((function(t,a){return Object(O.jsx)(m.a,{in:!0,timeout:200*(a+1),children:Object(O.jsx)(b.a,{onClick:function(){e.clickImage(t.name)},children:Object(O.jsx)("img",{src:y+t.name})},t.id)})}))]})})]})},I=a(139),k=a(142),S=a(140),N=("".concat(h,"/all"),"".concat(h,"/images/"),Object(g.a)((function(e){return Object(p.a)({paper:{backgroundColor:"#282C34",borderRadius:"4px",boxShadow:"0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",padding:e.spacing(2,4,3),width:"700px",height:"400px",fontFamily:"Roboto",color:"gray"},title:{fontSize:14},textfield:{color:"#F8FCFF,"},input:{color:"white"},root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",borderRadius:3,border:0,color:"white",height:48,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"},label:{textTransform:"capitalize"}})}))),F=function(e){var t=N(),a=Object(n.useState)(""),c=Object(r.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(!1),s=Object(r.a)(i,2),d=s[0],j=s[1],b=Object(n.useRef)(null),m=function(t,a,c){u.a.post(t,a,c).then((function(t){j(!1),e.clickImage(t.data.items[0].name),e.handleClose()})).catch((function(e){console.log(e),j(!0)}))},g=function(e){console.log(e.target.value),l(e.target.value)};return Object(O.jsxs)(I.a,{className:t.paper,children:[Object(O.jsx)("p",{className:"modalTitle",children:"Upload your image"}),Object(O.jsx)("p",{className:"modalText",children:"Wtih a URL"}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){var e="".concat(h,"/createImage");m(e,o,{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"text/plain"}})}()},children:[d?Object(O.jsx)(k.a,{error:!0,id:"standard-full-width",label:"URL",style:{margin:8},placeholder:"www.image.com/image.jpg",helperText:"Enter URL of Image you wish you upload",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},InputProps:{className:t.input},value:o,onInput:g}):d?void 0:Object(O.jsx)(k.a,{id:"standard-full-width",label:"URL",style:{margin:8},placeholder:"www.image.com/image.jpg",helperText:"Enter URL of Image you wish you upload",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},InputProps:{className:t.input},value:o,onInput:g}),Object(O.jsx)(S.a,{type:"submit",classes:{root:t.root,label:t.label},children:"Submit"})]}),Object(O.jsx)("p",{className:"modalText",children:"Or Upload the file"}),Object(O.jsx)("input",{type:"file",id:"file",ref:b,style:{display:"none"},onChange:function(e){if(console.log("***submited"),null!==b.current){console.log(b.current.files);var t=e.currentTarget.files;Array.from(t).forEach((function(t){try{!function(e){var t="".concat(h,"/createImage"),a=e.type;if("image"!=a.split("/")[0])throw"Is not an Image";m(t,e,{headers:{"Access-Control-Allow-Origin":"*","Content-Type":a}})}(t)}catch(a){e.target.value=null,alert("file was not an image")}}))}}}),Object(O.jsx)(S.a,{onClick:function(){null!==b.current&&(b.current.click(),console.log(b.current.files),console.log("buttonclick"))},classes:{root:t.root,label:t.label},children:"Open file upload window"})]})},L=a(143),A=a(141),R=a(61),T=a.n(R),E=a(43),U=a.n(E),H=Object(g.a)((function(e){return Object(p.a)({root:{"& > *":{margin:e.spacing(1)},margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed"},extendedIcon:{marginRight:e.spacing(1)},modal:{display:"flex",alignItems:"center",justifyContent:"center"}})}));console.log(c);var P=function(){var e=H(),t=Object(n.useState)({value:"Home"}),a=Object(r.a)(t,2),l=a[0],i=a[1],s=Object(n.useState)(""),d=Object(r.a)(s,2),u=d[0],j=d[1],b=o.a.useState(!1),m=Object(r.a)(b,2),g=m[0],p=m[1],h=function(){p(!1)},f=function(e){j(e),i({value:"ImageClicked"})};return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)("p",{className:"title",children:"Image Repository"}),function(e){var t;return t=c[e],Object(O.jsx)(t,{clickImage:f,imageClicked:u})}(l.value),Object(O.jsxs)("div",{className:e.root,children:[Object(O.jsx)(A.a,{color:"primary","aria-label":"add",onClick:function(){p(!0)},children:Object(O.jsx)(T.a,{})}),"Home"===l.value?Object(O.jsx)(A.a,{color:"secondary","aria-label":"home",disabled:!0,children:Object(O.jsx)(U.a,{})}):"ImageClicked"===l.value?Object(O.jsx)(A.a,{color:"secondary","aria-label":"home",onClick:function(){j(""),i({value:"Home"})},children:Object(O.jsx)(U.a,{})}):void 0]}),Object(O.jsx)(L.a,{open:g,onClose:h,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",className:e.modal,children:Object(O.jsx)(F,{handleClose:h,clickImage:f})})]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,146)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),c(e),n(e),o(e),l(e)}))};i.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root")),B()},77:function(e,t,a){},78:function(e,t,a){}},[[102,1,2]]]);
//# sourceMappingURL=main.f807db68.chunk.js.map