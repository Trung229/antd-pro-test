"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[37],{5966:function(le,W,e){var U=e(97685),i=e(1413),N=e(91),B=e(21770),$=e(8232),L=e(55241),w=e(97435),G=e(67294),O=e(54919),c=e(85893),Q=["fieldProps","proFieldProps"],g=["fieldProps","proFieldProps"],h="text",X=function(r){var n=r.fieldProps,P=r.proFieldProps,p=(0,N.Z)(r,Q);return(0,c.jsx)(O.Z,(0,i.Z)({valueType:h,fieldProps:n,filedConfig:{valueType:h},proFieldProps:P},p))},Y=function(r){var n=(0,B.Z)(r.open||!1,{value:r.open,onChange:r.onOpenChange}),P=(0,U.Z)(n,2),p=P[0],F=P[1];return(0,c.jsx)($.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(j){var y,D=j.getFieldValue(r.name||[]);return(0,c.jsx)(L.Z,(0,i.Z)((0,i.Z)({getPopupContainer:function(t){return t&&t.parentNode?t.parentNode:t},onOpenChange:F,content:(0,c.jsxs)("div",{style:{padding:"4px 0"},children:[(y=r.statusRender)===null||y===void 0?void 0:y.call(r,D),r.strengthText?(0,c.jsx)("div",{style:{marginTop:10},children:(0,c.jsx)("span",{children:r.strengthText})}):null]}),overlayStyle:{width:240},placement:"rightTop"},r.popoverProps),{},{open:p,children:r.children}))}})},J=function(r){var n=r.fieldProps,P=r.proFieldProps,p=(0,N.Z)(r,g),F=(0,G.useState)(!1),I=(0,U.Z)(F,2),j=I[0],y=I[1];return n!=null&&n.statusRender&&p.name?(0,c.jsx)(Y,{name:p.name,statusRender:n==null?void 0:n.statusRender,popoverProps:n==null?void 0:n.popoverProps,strengthText:n==null?void 0:n.strengthText,open:j,onOpenChange:y,children:(0,c.jsx)("div",{children:(0,c.jsx)(O.Z,(0,i.Z)({valueType:"password",fieldProps:(0,i.Z)((0,i.Z)({},(0,w.Z)(n,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(C){var t;n==null||(t=n.onBlur)===null||t===void 0||t.call(n,C),y(!1)},onClick:function(C){var t;n==null||(t=n.onClick)===null||t===void 0||t.call(n,C),y(!0)}}),proFieldProps:P,filedConfig:{valueType:h}},p))})}):(0,c.jsx)(O.Z,(0,i.Z)({valueType:"password",fieldProps:n,proFieldProps:P,filedConfig:{valueType:h}},p))},Z=X;Z.Password=J,Z.displayName="ProFormComponent",W.Z=Z},53805:function(le,W,e){e.r(W),e.d(W,{default:function(){return xe}});var U=e(15009),i=e.n(U),N=e(97857),B=e.n(N),$=e(99289),L=e.n($),w=e(5574),G=e.n(w),O=e(57426),c=e(2618),Q=e(87547),g=e(1413),h=e(67294),X={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},Y=X,J=e(91146),Z=function(a,d){return h.createElement(J.Z,(0,g.Z)((0,g.Z)({},a),{},{ref:d,icon:Y}))};Z.displayName="LockOutlined";var z=h.forwardRef(Z),r=e(91),n=e(10915),P=e(28459),p=e(93967),F=e.n(p),I=e(34994),j=e(4942),y=e(98082),D=function(a){return(0,j.Z)((0,j.Z)({},a.componentCls,{"&-container":{display:"flex",flex:"1",flexDirection:"column",height:"100%",paddingInline:32,paddingBlock:24,overflow:"auto",background:"inherit"},"&-top":{textAlign:"center"},"&-header":{display:"flex",alignItems:"center",justifyContent:"center",height:"44px",lineHeight:"44px",a:{textDecoration:"none"}},"&-title":{position:"relative",insetBlockStart:"2px",color:"@heading-color",fontWeight:"600",fontSize:"33px"},"&-logo":{width:"44px",height:"44px",marginInlineEnd:"16px",verticalAlign:"top",img:{width:"100%"}},"&-desc":{marginBlockStart:"12px",marginBlockEnd:"40px",color:a.colorTextSecondary,fontSize:a.fontSize},"&-main":{minWidth:"328px",maxWidth:"580px",margin:"0 auto","&-other":{marginBlockStart:"24px",lineHeight:"22px",textAlign:"start"}}}),"@media (min-width: @screen-md-min)",(0,j.Z)({},"".concat(a.componentCls,"-container"),{paddingInline:0,paddingBlockStart:32,paddingBlockEnd:24,backgroundRepeat:"no-repeat",backgroundPosition:"center 110px",backgroundSize:"100%"}))};function C(o){return(0,y.Xj)("LoginForm",function(a){var d=(0,g.Z)((0,g.Z)({},a),{},{componentCls:".".concat(o)});return[D(d)]})}var t=e(85893),ie=["logo","message","contentStyle","title","subTitle","actions","children","containerStyle","otherStyle"];function de(o){var a,d=o.logo,K=o.message,k=o.contentStyle,A=o.title,T=o.subTitle,H=o.actions,q=o.children,_=o.containerStyle,S=o.otherStyle,v=(0,r.Z)(o,ie),ee=(0,n.YB)(),te=v.submitter===!1?!1:(0,g.Z)((0,g.Z)({searchConfig:{submitText:ee.getMessage("loginForm.submitText","\u767B\u5F55")}},v.submitter),{},{submitButtonProps:(0,g.Z)({size:"large",style:{width:"100%"}},(a=v.submitter)===null||a===void 0?void 0:a.submitButtonProps),render:function(V,l){var ne,Pe=l.pop();if(typeof(v==null||(ne=v.submitter)===null||ne===void 0?void 0:ne.render)=="function"){var b,re;return v==null||(b=v.submitter)===null||b===void 0||(re=b.render)===null||re===void 0?void 0:re.call(b,V,l)}return Pe}}),se=(0,h.useContext)(P.ZP.ConfigContext),M=se.getPrefixCls("pro-form-login"),m=C(M),x=m.wrapSSR,u=m.hashId,s=function(V){return"".concat(M,"-").concat(V," ").concat(u)},f=(0,h.useMemo)(function(){return d?typeof d=="string"?(0,t.jsx)("img",{src:d}):d:null},[d]);return x((0,t.jsxs)("div",{className:F()(s("container"),u),style:_,children:[(0,t.jsxs)("div",{className:"".concat(s("top")," ").concat(u).trim(),children:[A||f?(0,t.jsxs)("div",{className:"".concat(s("header")),children:[f?(0,t.jsx)("span",{className:s("logo"),children:f}):null,A?(0,t.jsx)("span",{className:s("title"),children:A}):null]}):null,T?(0,t.jsx)("div",{className:s("desc"),children:T}):null]}),(0,t.jsxs)("div",{className:s("main"),style:(0,g.Z)({width:328},k),children:[(0,t.jsxs)(I.A,(0,g.Z)((0,g.Z)({isKeyPressSubmit:!0},v),{},{submitter:te,children:[K,q]})),H?(0,t.jsx)("div",{className:s("main-other"),style:S,children:H}):null]})]}))}var ae=e(5966),R=e(35312),ue=e(38925),oe=e(2453),ce=e(73935),ge=e(67610),ve=e(98257),fe=(0,ve.kc)(function(o){var a=o.token;return{action:{marginLeft:"8px",color:"rgba(0, 0, 0, 0.2)",fontSize:"24px",verticalAlign:"middle",cursor:"pointer",transition:"color 0.3s","&:hover":{color:a.colorPrimaryActive}},lang:{width:42,height:42,lineHeight:"42px",position:"fixed",right:16,borderRadius:a.borderRadius,":hover":{backgroundColor:a.colorBgTextHover}},container:{display:"flex",flexDirection:"column",height:"100vh",overflow:"auto",backgroundImage:"url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",backgroundSize:"100% 100%",".ant-pro-form-login-header":{marginBottom:20},".ant-pro-form-login-container":{justifyContent:"center"}}}}),me=fe,he=function(a){var d=a.content;return(0,t.jsx)(ue.Z,{style:{marginBottom:24},message:d,type:"error",showIcon:!0})},pe=function(){var a=(0,h.useState)({}),d=G()(a,2),K=d[0],k=d[1],A=(0,R.useModel)("@@initialState"),T=A.initialState,H=A.setInitialState,q=me(),_=q.styles,S=(0,R.useIntl)(),v=function(){var M=L()(i()().mark(function m(){var x,u;return i()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,T==null||(x=T.fetchUserInfo)===null||x===void 0?void 0:x.call(T);case 2:u=f.sent,u&&(0,ce.flushSync)(function(){H(function(E){return B()(B()({},E),{},{currentUser:u})})});case 4:case"end":return f.stop()}},m)}));return function(){return M.apply(this,arguments)}}(),ee=function(){var M=L()(i()().mark(function m(x){var u,s,f,E;return i()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,(0,c.x4)(B()({},x));case 3:if(u=l.sent,u.status!=="ok"){l.next=12;break}return s=S.formatMessage({id:"pages.login.success",defaultMessage:"\u767B\u5F55\u6210\u529F\uFF01"}),oe.ZP.success(s),l.next=9,v();case 9:return f=new URL(window.location.href).searchParams,window.location.href=f.get("redirect")||"/",l.abrupt("return");case 12:console.log(u),k(u),l.next=21;break;case 16:l.prev=16,l.t0=l.catch(0),E=S.formatMessage({id:"pages.login.failure",defaultMessage:"\u767B\u5F55\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\uFF01"}),console.log(l.t0),oe.ZP.error(E);case 21:case"end":return l.stop()}},m,null,[[0,16]])}));return function(x){return M.apply(this,arguments)}}(),te=K.status,se=K.type;return(0,t.jsxs)("div",{className:_.container,children:[(0,t.jsx)(R.Helmet,{children:(0,t.jsxs)("title",{children:[S.formatMessage({id:"menu.login",defaultMessage:"\u767B\u5F55\u9875"}),"- ",ge.Z.title]})}),(0,t.jsx)("div",{style:{flex:"1",padding:"32px 0"},children:(0,t.jsxs)(de,{contentStyle:{minWidth:280,maxWidth:"75vw"},logo:(0,t.jsx)("img",{alt:"logo",src:"/logo.svg"}),title:"Malword",subTitle:null,initialValues:{autoLogin:!0},onFinish:function(){var M=L()(i()().mark(function m(x){return i()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,ee(x);case 2:case"end":return s.stop()}},m)}));return function(m){return M.apply(this,arguments)}}(),children:[(0,t.jsx)(ae.Z,{name:"username",fieldProps:{size:"large",prefix:(0,t.jsx)(Q.Z,{})},placeholder:S.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D: admin or user"}),rules:[{required:!0,message:(0,t.jsx)(R.FormattedMessage,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,t.jsx)(ae.Z.Password,{name:"password",fieldProps:{size:"large",prefix:(0,t.jsx)(z,{})},placeholder:S.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"\u5BC6\u7801: 123"}),rules:[{required:!0,message:(0,t.jsx)(R.FormattedMessage,{id:"pages.login.password.required",defaultMessage:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"})}]}),te==="error"&&(0,t.jsx)(he,{content:S.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"\u8D26\u6237\u6216\u5BC6\u7801\u9519\u8BEF(admin/ant.design)"})})]})}),(0,t.jsx)(O.$_,{})]})},xe=pe}}]);
