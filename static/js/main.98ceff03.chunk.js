(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{135:function(e,t,a){e.exports=a(265)},140:function(e,t,a){},162:function(e,t,a){},167:function(e,t){},169:function(e,t){},207:function(e,t){},208:function(e,t){},265:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(128),r=a.n(o),i=(a(140),a(22)),s=a(14),c=a(23),u=a(24),d=a(26),m=a(5),h=a(27),g=a(25),p=new(a(275).a)(JSON.parse(localStorage.getItem("token")));function v(e){localStorage.setItem("token",JSON.stringify(e)),p.next(e)}var E=a(19),b=a.n(E),f=a(50),w=a.n(f),k=(a(80),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={token:"",profile:{},email:"",password:"",login:!1,register:!1,error:"none",errorMessage:""},a.onLogin=a.onLogin.bind(Object(m.a)(a)),a.handleMailChange=a.handleMailChange.bind(Object(m.a)(a)),a.handlePassChange=a.handlePassChange.bind(Object(m.a)(a)),a.toRegister=a.toRegister.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onLogin",value:function(e){var t=this;e.preventDefault(),b.a.post("http://3.120.96.16:3002/auth",{email:this.state.email,password:this.state.password}).then((function(e){t.setState({error:"none",errorMessage:""}),v(e.data.token),console.log(e),setTimeout(function(){this.setState({token:e.data.token,login:!0})}.bind(t),1e3)})).catch((function(e){var a=e.toString().split(" "),n=a[a.length-1];"400"===n&&t.setState({error:"inline",errorMessage:"Incorrect input (400)"}),"401"===n&&t.setState({error:"inline",errorMessage:"Account does not exist (401)"})}))}},{key:"handleMailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePassChange",value:function(e){this.setState({password:e.target.value})}},{key:"toRegister",value:function(){this.setState({register:!0})}},{key:"render",value:function(){var e={display:this.state.error,color:"#e64848",fontWeight:"bold"};return this.state.login?l.a.createElement(h.a,{to:"/todos"}):this.state.register?l.a.createElement(h.a,{to:"/register"}):l.a.createElement("div",{className:"Login"},l.a.createElement(g.a,null,l.a.createElement("title",null,"Login")),l.a.createElement("header",{className:"loginHeader"},l.a.createElement("div",{className:"inner-header flex"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"Login"),l.a.createElement("br",null),l.a.createElement("p",{style:e},this.state.errorMessage),l.a.createElement("form",{onSubmit:this.onLogin},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"text",value:this.state.email,onChange:this.handleMailChange,name:"user",required:!0}),l.a.createElement("br",null),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handlePassChange,name:"pass",autoComplete:"on",onSubmit:this.onLogin,required:!0}),l.a.createElement("br",null),l.a.createElement("p",{id:"register-link",onClick:this.toRegister},"Don't have an account?"),l.a.createElement("div",{className:"button-container",onClick:this.onLogin},l.a.createElement("div",{className:"button"},l.a.createElement("div",{tabIndex:"0",onKeyDown:this.onLogin,className:"icon"},l.a.createElement("i",null," ",l.a.createElement(w.a,null)," ")))),l.a.createElement("button",{type:"submit",style:{visibility:"hidden"}})))),l.a.createElement("div",null,l.a.createElement("svg",{className:"waves",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none",shapeRendering:"auto"},l.a.createElement("defs",null,l.a.createElement("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})),l.a.createElement("g",{className:"parallax"},l.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"0",fill:"rgba(248,205,218,0.7)"}),l.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"3",fill:"rgba(248,205,218,0.5)"}),l.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"5",fill:"rgba(248,205,218,0.3)"}),l.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"7",fill:"#F8CDDA"}))))))}}]),t}(l.a.Component)),y=(a(162),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={token:"",profile:{},email:"",password:"",repeat:"",register:!1,login:!1,error:"none",errorMessage:""},a.onRegister=a.onRegister.bind(Object(m.a)(a)),a.handleMailChange=a.handleMailChange.bind(Object(m.a)(a)),a.handlePassChange=a.handlePassChange.bind(Object(m.a)(a)),a.handleRepeatChange=a.handleRepeatChange.bind(Object(m.a)(a)),a.toLogin=a.toLogin.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"onRegister",value:function(e){var t=this;e.preventDefault(),this.state.repeat===this.state.password?b.a.post("http://3.120.96.16:3002/register",{email:this.state.email,password:this.state.password}).then((function(e){return b.a.post("http://3.120.96.16:3002/auth",{email:t.state.email,password:t.state.password})})).then((function(e){t.setState({error:"none",errorMessage:""}),v(e.data.token),console.log(e),setTimeout(function(){this.setState({token:e.data.token,register:!0})}.bind(t),1e3)})).catch((function(e){var a=e.toString().split(" ");"400"===a[a.length-1]&&t.setState({error:"inline",errorMessage:"Incorrect input (400)"})})):this.setState({errorMessage:"Password does not match."})}},{key:"handleMailChange",value:function(e){this.setState({email:e.target.value})}},{key:"handlePassChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleRepeatChange",value:function(e){this.setState({repeat:e.target.value})}},{key:"toLogin",value:function(){this.setState({login:!0})}},{key:"render",value:function(){var e={display:this.state.error,color:"#e64848",fontWeight:"bold"};return this.state.register?l.a.createElement(h.a,{to:"/todos"}):this.state.login?l.a.createElement(h.a,{to:"/login"}):l.a.createElement("div",{className:"Register"},l.a.createElement(g.a,null,l.a.createElement("title",null,"Register")),l.a.createElement("header",{className:"registerHeader"},l.a.createElement("div",{className:"inner-header flex"},l.a.createElement("div",{className:"wrapper"},l.a.createElement("h1",null,"Register"),l.a.createElement("br",null),l.a.createElement("p",{style:e},this.state.errorMessage),l.a.createElement("form",{onSubmit:this.onRegister},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"text",value:this.state.email,onChange:this.handleMailChange,name:"user",required:!0}),l.a.createElement("br",null),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handlePassChange,name:"pass",autoComplete:"on",required:!0}),l.a.createElement("br",null),l.a.createElement("label",null,"Repeat password:"),l.a.createElement("input",{type:"password",value:this.state.repeat,onChange:this.handleRepeatChange,name:"repeatpass",autoComplete:"on",required:!0}),l.a.createElement("br",null),l.a.createElement("p",{id:"login-link",onClick:this.toLogin},"Already have an account?"),l.a.createElement("div",{className:"button-container",onClick:this.onRegister},l.a.createElement("div",{className:"button"},l.a.createElement("div",{tabIndex:"0",onKeyDown:this.onLogin,className:"icon"},l.a.createElement("i",null," ",l.a.createElement(w.a,null)," ")))),l.a.createElement("button",{type:"submit",style:{visibility:"hidden"}})))),l.a.createElement("div",null,l.a.createElement("svg",{className:"waves",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none",shapeRendering:"auto"},l.a.createElement("defs",null,l.a.createElement("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})),l.a.createElement("g",{className:"parallax"},l.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"0",fill:"rgba(248,205,218,0.7)"}),l.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"3",fill:"rgba(248,205,218,0.5)"}),l.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"5",fill:"rgba(248,205,218,0.3)"}),l.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"7",fill:"#F8CDDA"}))))))}}]),t}(l.a.Component)),x=a(132),C=a.n(x),S=a(133),O=a.n(S),j=(a(82),a(163)),N=(new Date).toLocaleDateString("SV-se",{weekday:"long",year:"numeric",month:"long",day:"numeric"}),R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={email:"",input:"",todos:[],new_todo:{content:"",id:""},date:N,error:"hidden",login:!1,register:!1,token:""},a.getTodos=a.getTodos.bind(Object(m.a)(a)),a.onTodoChange=a.onTodoChange.bind(Object(m.a)(a)),a.onAdd=a.onAdd.bind(Object(m.a)(a)),a.onDelete=a.onDelete.bind(Object(m.a)(a)),a.toRegister=a.toRegister.bind(Object(m.a)(a)),a.toLogin=a.toLogin.bind(Object(m.a)(a)),a.onLogout=a.onLogout.bind(Object(m.a)(a)),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getTodos(),console.log(this.state.date)}},{key:"getTodos",value:function(){var e=this;this.subscription=p.subscribe((function(t){if(t){console.log(t),e.setState({token:t});var a=j.decode(t);console.log(a),a&&e.setState({email:a.email}),b.a.get("http://3.120.96.16:3002/todos",{headers:{Authorization:"Bearer "+t}}).then((function(t){e.setState({todos:t.data.todos}),console.log(t.data.todos)}))}else e.state.token||(alert("Please login to use the app."),e.setState({login:!0}))}))}},{key:"onTodoChange",value:function(e){this.setState({input:e.target.value})}},{key:"onAdd",value:function(e){var t=this;e.preventDefault(),this.subscription=p.subscribe((function(e){b.a.post("http://3.120.96.16:3002/todos",{content:t.state.input},{headers:{Authorization:"Bearer "+e}}).then((function(e){t.setState({input:"",error:"hidden"});var a=Object.assign({},t.state);a.new_todo.content=e.data.todo.content,a.new_todo.id=e.data.todo.id,t.setState(a),console.log(t.state.new_todo);var n=t.state.todos.concat(t.state.new_todo);t.setState({todos:n}),t.setState({new_todo:{content:"",id:""}}),console.log(t.state.todos)})).catch((function(e){console.log(e),t.setState({error:"visible"})}))}))}},{key:"onDelete",value:function(e){var t=this;e.preventDefault(),console.log(e.target);var a=e.target.parentElement.parentElement.id;console.log(a),b.a.delete("http://3.120.96.16:3002/todos/".concat(a),{headers:{Authorization:"Bearer "+p.value}}).then((function(e){t.getTodos(),console.log(e)})).catch((function(e){console.log(e)}))}},{key:"toRegister",value:function(){this.setState({register:!0})}},{key:"toLogin",value:function(){this.setState({login:!0})}},{key:"onLogout",value:function(e){e.preventDefault(),v(""),this.setState({login:!0})}},{key:"componentWillUnmount",value:function(){this.subscription.unsubscribe()}},{key:"render",value:function(){var e=this;return this.state.login?l.a.createElement(h.a,{to:"/login"}):l.a.createElement("div",{className:"Todos"},l.a.createElement(g.a,null,l.a.createElement("title",null,"Todos")),l.a.createElement("header",{className:"todoHeader"},l.a.createElement("div",{className:"inner-header flex"},l.a.createElement("h1",null,"Welcome ",this.state.email)),l.a.createElement("div",{className:"links"}),l.a.createElement("p",{id:"signout",onClick:this.onLogout},"Sign out"),l.a.createElement("div",null,l.a.createElement("svg",{className:"waves",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",viewBox:"0 24 150 28",preserveAspectRatio:"none",shapeRendering:"auto"},l.a.createElement("defs",null,l.a.createElement("path",{id:"gentle-wave",d:"M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"})),l.a.createElement("g",{className:"parallax"},l.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"0",fill:"rgba(248,205,218,0.7)"}),l.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"3",fill:"rgba(248,205,218,0.5)"}),l.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"5",fill:"rgba(248,205,218,0.3)"}),l.a.createElement("use",{xlinkHref:"#gentle-wave",x:"48",y:"7",fill:"#F8CDDA"}))))),l.a.createElement("main",null,l.a.createElement("div",null,l.a.createElement("div",{className:"todo"},l.a.createElement("div",{className:"cardtop"},l.a.createElement("form",{onSubmit:this.onAdd},l.a.createElement("div",{className:"topcontent"},l.a.createElement("p",{id:"new"}," Add new todo item: "),l.a.createElement("input",{type:"text",value:this.state.input,onChange:this.onTodoChange,style:"visible"===this.state.error?{border:"1px solid #f79ac3"}:{border:"none"}}),l.a.createElement("p",{id:"error",style:{visibility:this.state.error}},"Invalid input"),l.a.createElement("div",{className:"button-container",onClick:this.onAdd},l.a.createElement("div",{className:"button"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",null,l.a.createElement(C.a,null)," ")))),l.a.createElement("p",{id:"datetext"},this.state.date)))),l.a.createElement("div",{className:"cardbottom"},l.a.createElement("ul",null,this.state.todos.map((function(t){return l.a.createElement("li",{id:t.id,key:t.id},t.content,l.a.createElement("button",{id:t.id,onClick:e.onDelete},l.a.createElement(O.a,null)),l.a.createElement("hr",null))}))))))))}}]),t}(l.a.Component),L=a(39),M=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e;return"/"===window.location.pathname&&(e=l.a.createElement(h.a,{to:"/login"})),l.a.createElement(g.b,null,l.a.createElement(L.a,null,e,l.a.createElement(h.b,{path:"/login",component:k}),l.a.createElement(h.b,{path:"/register",component:y}),l.a.createElement(h.b,{path:"/todos",component:R})))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},80:function(e,t,a){},82:function(e,t,a){}},[[135,1,2]]]);
//# sourceMappingURL=main.98ceff03.chunk.js.map