(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={contactBtn:"ContactForm_contactBtn__1QKp9",stripes:"ContactForm_stripes__2Gwhm",form_wrapper:"ContactForm_form_wrapper__2e88i",title:"ContactForm_title__3MqSl",input:"ContactForm_input__gm87B",wrap__input:"ContactForm_wrap__input__s-2n_",caption:"ContactForm_caption__3a2ub"}},13:function(t,e,n){t.exports={btn__list:"ContactList_btn__list__3Sn5L"}},14:function(t,e,n){t.exports={app__wrap:"App_app__wrap__2WNuc"}},23:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(2),c=n.n(r),o=n(12),i=n.n(o),s=n(15),l=n(4),u=n(5),m=n(8),p=n(7),d=n(6),_=n(25),h=n(1),b=n.n(h),f={name:"",number:""},j=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state=f,t.handleChacheForm=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(d.a)({},a,r))},t.handleFormSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number,c=t.props.onAdd;t.validateForm()&&(c({id:Object(_.a)(),name:a,number:r}),t.resetForm())},t.validateForm=function(){var e=t.state,n=e.name,a=e.number,r=t.props.onCheckContact;return n&&a?r(n):(alert("Some filed is enpty"),!1)},t.resetForm=function(){return t.setState(f)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)("div",{className:b.a.form_wrapper,children:[Object(a.jsx)("h1",{className:b.a.title,children:"Phonebook"}),Object(a.jsxs)("form",{onSubmit:this.handleFormSubmit,children:[Object(a.jsxs)("div",{className:b.a.wrap__input,children:[Object(a.jsx)("p",{className:b.a.caption,children:"Number"}),Object(a.jsx)("input",{className:b.a.input,type:"text",name:"name",placeholder:"Enter name",required:!0,value:e,onChange:this.handleChacheForm}),Object(a.jsx)("p",{className:b.a.caption,children:"Name"}),Object(a.jsx)("input",{className:b.a.input,type:"tel",name:"number",placeholder:"Enter number",value:n,onChange:this.handleChacheForm,required:!0})]}),Object(a.jsx)("button",{className:b.a.contactBtn,type:"submit",children:"Add Contact"})]})]})}}]),n}(r.Component),C=n(10),v=n(13),O=n.n(v),x=n(11),F=n.n(x),g=function(t){var e=t.id,n=t.name,r=t.number,c=t.onRemove;return Object(a.jsxs)("li",{children:[n,": ",r," ",Object(a.jsx)("button",{className:O.a.btn__list,onClick:function(){return c(e)},children:"delete"})]})},w=function(t){var e=t.contacts,n=t.onRemove;return 0===e.length?null:Object(a.jsx)("ul",{children:e.map((function(t){return Object(a.jsx)(g,Object(C.a)(Object(C.a)({},t),{},{onRemove:n}))}))})};w.protoTypes={contacts:F.a.array.isRequired,ContacListItem:F.a.func.isRequired};var N=w,S=n(3),y=n.n(S),k=function(t){var e=t.filter,n=t.onChange;return Object(a.jsxs)("div",{className:y.a.filter__wrap,children:[Object(a.jsx)("h2",{className:y.a.filtter_title,children:"Contacts"}),Object(a.jsx)("p",{className:y.a.filter__caption,children:"Find contacts by name"}),Object(a.jsx)("input",{className:y.a.filter_input,type:"text",name:"filter",value:e,onChange:function(t){var e=t.target;return n(e.value)},placeholder:"Enter name for Search"})]})},A=n(14),R=n.n(A),q=function(t){Object(m.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.componentDidMount=function(){var e=JSON.parse(localStorage.getItem("userContacts"));e&&t.setState({contacts:e})},t.componentDidUpdate=function(e,n){var a=t.state.contacts;a!==n.contacts&&localStorage.setItem("userContacts",JSON.stringify(a))},t.handleAddContact=function(e){return t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(s.a)(n),[e])}}))},t.handleCheckUContact=function(e){var n=!!t.state.contacts.find((function(t){return t.name===e}));return n&&alert("Contact is already exist"),!n},t.handleRemoveContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleFilterChange=function(e){return t.setState({filter:e})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(a.jsxs)("div",{className:R.a.app__wrap,children:[Object(a.jsx)(j,{onAdd:this.handleAddContact,onCheckContact:this.handleCheckUContact}),Object(a.jsx)(k,{filter:t,onChange:this.handleFilterChange}),Object(a.jsx)(N,{contacts:e,onRemove:this.handleRemoveContact})]})}}]),n}(r.Component);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(q,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={filter__wrap:"Filter_filter__wrap__2bCKH",filtter_title:"Filter_filtter_title__20ZWa",filter_input:"Filter_filter_input__2k0eq",filter__caption:"Filter_filter__caption__1WL5U"}}},[[23,1,2]]]);
//# sourceMappingURL=main.9741f0c8.chunk.js.map