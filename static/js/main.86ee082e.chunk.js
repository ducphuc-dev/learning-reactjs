(this["webpackJsonpfirst-react-app"]=this["webpackJsonpfirst-react-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(9),i=a.n(l),c=(a(15),a(7)),s=a(1),r=a(3),m=a(4),d=a(2),u=a(6),p=a(5),b=(a(16),a(17),a(18),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).description=e.title,n}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.onDeleteJob,n=e.onToggleJobComplete;return o.a.createElement("li",{className:!0===this.props.item.isCompleted?"completed":""},o.a.createElement("div",{className:"form-check"}," ",o.a.createElement("label",{className:"form-check-label"}," ",o.a.createElement("input",{className:"checkbox",type:"checkbox",checked:t.isCompleted,onChange:n})," ",t.title," ",o.a.createElement("i",{className:"input-helper"}))," ")," ",o.a.createElement("i",{className:"remove mdi mdi-close-circle-outline",onClick:a}))}}]),a}(n.Component)),h=["What do you need to do today?","What next you want to do?","Type your job!"],v=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={placeholderForInput:0,valueInput:"",listItems:[{title:"For what reason would it be advisable.",isCompleted:!1},{title:"For what reason would it be advisable for me to think.",isCompleted:!0},{title:"It be advisable for me to think about business content?",isCompleted:!1},{title:"Print Statements all",isCompleted:!1},{title:"Call Rampbo",isCompleted:!0},{title:"Print bills",isCompleted:!1}]},n.refNewJobItem=o.a.createRef(),n.createNewJobItem=n.createNewJobItem.bind(Object(d.a)(n)),n.onTypeJob=n.onTypeJob.bind(Object(d.a)(n)),n.onChangeTypeJob=n.onChangeTypeJob.bind(Object(d.a)(n)),setInterval((function(){n.setState({placeholderForInput:n.getPlaceholderInput(n.state.placeholderForInput)})}),2e3),n}return Object(m.a)(a,[{key:"getPlaceholderInput",value:function(e){switch(e){case h.length-1:return 0;default:return e+1}}},{key:"toggleComplete",value:function(e){var t=e.isCompleted,a=this.state.listItems,n=a.indexOf(e);this.setState({listItems:[].concat(Object(s.a)(a.slice(0,n)),[Object(c.a)(Object(c.a)({},e),{},{isCompleted:!t})],Object(s.a)(a.slice(n+1)))})}},{key:"createNewJobItem",value:function(){var e=this.refNewJobItem.current.value;if(e.trim()){var t=this.state.listItems;this.setState({listItems:[].concat(Object(s.a)(t),[{title:e,isCompleted:!1}])})}else alert("Job can not be empty")}},{key:"onChangeTypeJob",value:function(e){this.setState({valueInput:e.target.value})}},{key:"onTypeJob",value:function(e){var t=e.target.value;if(13===e.keyCode){if(t.trim()){var a=this.state.listItems;this.setState({listItems:[].concat(Object(s.a)(a),[{title:t,isCompleted:!1}])})}else alert("Job can not be empty");this.setState({valueInput:""})}}},{key:"deleteJob",value:function(e){var t=this.state.listItems,a=t.indexOf(e);this.setState({listItems:[].concat(Object(s.a)(t.slice(0,a)),Object(s.a)(t.slice(a+1)))})}},{key:"render",value:function(){var e=this,t=this.state.placeholderForInput,a=this.state,n=a.listItems,l=a.valueInput;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"page-content page-container",id:"page-content"},o.a.createElement("div",{className:"padding"},o.a.createElement("div",{className:"container d-flex justify-content-center"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"card px-3"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h2",{className:"card-title my-3"},"Awesome Todo list"),o.a.createElement("div",{className:"add-items d-flex"},o.a.createElement("input",{type:"text",value:l,onChange:this.onChangeTypeJob,className:"form-control todo-list-input",onKeyUp:this.onTypeJob,ref:this.refNewJobItem,placeholder:h[t]}),o.a.createElement("button",{className:"add btn btn-primary font-weight-bold todo-list-add-btn",onClick:this.createNewJobItem},"Add")),o.a.createElement("div",{className:"list-wrapper"},o.a.createElement("ul",{className:"d-flex flex-column-reverse todo-list"},n.length>0&&n.map((function(t,a){return o.a.createElement(b,{item:t,key:a,onDeleteJob:function(){return e.deleteJob(t)},onToggleJobComplete:function(){return e.toggleComplete(t)}})})),0===n.length&&o.a.createElement("div",{className:"App"},o.a.createElement("p",{className:"alert alert-info"},"You have not job yet")))))))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.86ee082e.chunk.js.map