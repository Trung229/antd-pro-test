"use strict";(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[596],{46401:function(Wt,O,e){e.r(O),e.d(O,{default:function(){return Ft}});var et=e(97857),S=e.n(et),L=e(35312),nt=e(15009),F=e.n(nt),lt=e(99289),rt=e.n(lt);function it(r){return I.apply(this,arguments)}function I(){return I=rt()(F()().mark(function r(t){return F()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,L.request)("/api/fake_list",{params:t}));case 1:case"end":return n.stop()}},r)})),I.apply(this,arguments)}var b=e(2487),R=e(4393),ot=e(25093),B=e(8232),st=e(71230),M=e(15746),ct=e(96365),dt=e(14726),mt=e(9783),x=e.n(mt),vt=e(13769),E=e.n(vt),ht=e(93967),z=e.n(ht),f=e(67294),k=e(98257),gt=(0,k.kc)(function(r){var t=r.token;return{standardFormRow:{display:"flex",width:"100%",marginBottom:"16px",paddingBottom:"16px",borderBottom:"1px dashed ".concat(t.colorSplit),".ant-form-item, .ant-legacy-form-item":{marginRight:"24px"},".ant-form-item-label, .ant-legacy-form-item-label":{label:{marginRight:"0",color:t.colorText}},".ant-form-item-label, .ant-legacy-form-item-label, .ant-form-item-control, .ant-legacy-form-item-control":{padding:"0",lineHeight:"32px"}},label:{flex:"0 0 auto",marginRight:"24px",color:t.colorTextHeading,fontSize:t.fontSize,textAlign:"right","& > span":{display:"inline-block",height:"32px",lineHeight:"32px","&::after":{content:"'\uFF1A'"}}},content:{flex:"1 1 0",".ant-form-item, .ant-legacy-form-item":{"&:last-child":{display:"block",marginRight:"0"}}},standardFormRowLast:{marginBottom:"0",paddingBottom:"0",border:"none"},standardFormRowBlock:{".ant-form-item, .ant-legacy-form-item, div.ant-form-item-control-wrapper, div.ant-legacy-form-item-control-wrapper":{display:"block"}},standardFormRowGrid:{".ant-form-item, .ant-legacy-form-item, div.ant-form-item-control-wrapper, div.ant-legacy-form-item-control-wrapper":{display:"block"},".ant-form-item-label, .ant-legacy-form-item-label":{float:"left"}}}}),ut=gt,a=e(85893),xt=["title","children","last","block","grid"],pt=function(t){var i=t.title,n=t.children,c=t.last,o=t.block,m=t.grid,v=E()(t,xt),u=ut(),l=u.styles,s=z()(l.standardFormRow,x()(x()(x()({},l.standardFormRowBlock,o),l.standardFormRowLast,c),l.standardFormRowGrid,m));return(0,a.jsxs)("div",S()(S()({className:s},v),{},{children:[i&&(0,a.jsx)("div",{className:l.label,children:(0,a.jsx)("span",{children:i})}),(0,a.jsx)("div",{className:l.content,children:n})]}))},P=pt,ft=(0,k.kc)(function(r){var t=r.token;return{card:{".ant-card-meta-title":{marginBottom:"4px","& > a":{display:"inline-block",maxWidth:"100%",color:t.colorTextHeading}},".ant-card-meta-description":{height:"44px",overflow:"hidden",lineHeight:"22px"},"&:hover":{".ant-card-meta-title > a":{color:t.colorPrimary}}},cardItemContent:{display:"flex",height:"20px",marginTop:"16px",marginBottom:"-4px",lineHeight:"20px","& > span":{flex:"1",color:t.colorTextSecondary,fontSize:"12px"}},avatarList:{flex:"0 1 auto"},cardList:{marginTop:"24px"},coverCardList:{".ant-list .ant-list-item-content-single":{maxWidth:"100%"}}}}),yt=ft,St=e(83062),N=e(7134),Tt=(0,k.kc)(function(r){var t=r.token;return{avatarList:{display:"inline-block",ul:{display:"inline-block",marginLeft:"8px",fontSize:"0"}},avatarItem:{display:"inline-block",width:t.controlHeight,height:t.controlHeight,marginLeft:"-8px",fontSize:t.fontSize,".ant-avatar":{border:"1px solid ".concat(t.colorBorder)}},avatarItemLarge:{width:t.controlHeightLG,height:t.controlHeightLG},avatarItemSmall:{width:t.controlHeightSM,height:t.controlHeightSM},avatarItemMini:{width:"20px",height:"20px",".ant-avatar":{width:"20px",height:"20px",lineHeight:"20px",".ant-avatar-string":{fontSize:"12px",lineHeight:"18px"}}}}}),$=Tt,jt=["children","size","maxLength","excessItemsStyle"],G=function(t,i){return z()(i.avatarItem,x()(x()(x()({},i.avatarItemLarge,t==="large"),i.avatarItemSmall,t==="small"),i.avatarItemMini,t==="mini"))},Ct=function(t){var i=t.src,n=t.size,c=t.tips,o=t.onClick,m=o===void 0?function(){}:o,v=$(),u=v.styles,l=G(n,u);return(0,a.jsx)("li",{className:l,onClick:m,children:c?(0,a.jsx)(St.Z,{title:c,children:(0,a.jsx)(N.C,{src:i,size:n,style:{cursor:"pointer"}})}):(0,a.jsx)(N.C,{src:i,size:n})})},V=function(t){var i=t.children,n=t.size,c=t.maxLength,o=c===void 0?5:c,m=t.excessItemsStyle,v=E()(t,jt),u=$(),l=u.styles,s=f.Children.count(i),d=o>=s?s:o,j=f.Children.toArray(i),C=j.slice(0,d).map(function(H){return f.cloneElement(H,{size:n})});if(d<s){var A=G(n,l);C.push((0,a.jsx)("li",{className:A,children:(0,a.jsx)(N.C,{size:n,style:m,children:"+".concat(s-o)})},"exceed"))}return(0,a.jsx)("div",S()(S()({},v),{},{className:l.avatarList,children:(0,a.jsxs)("ul",{children:[" ",C," "]})}))};V.Item=Ct;var W=V,At=e(19632),Lt=e.n(At),kt=e(5574),D=e.n(kt),It=e(64029),Rt=e(34804),zt=e(66309),Nt=e(56790),Ht=(0,k.kc)(function(r){var t=r.token;return{tagSelect:{position:"relative",maxHeight:"32px",marginLeft:"-8px",overflow:"hidden",lineHeight:"32px",transition:"all 0.3s",userSelect:"none",".ant-tag":{marginRight:"24px",padding:"0 8px",fontSize:t.fontSize}},trigger:{position:"absolute",top:"0",right:"0","span.anticon":{fontSize:"12px"}},expanded:{maxHeight:"200px",transition:"all 0.3s"},hasExpandTag:{paddingRight:"50px"}}}),Zt=Ht,w=zt.Z.CheckableTag,K=function(t){var i=t.children,n=t.checked,c=t.onChange,o=t.value;return(0,a.jsx)(w,{checked:!!n,onChange:function(v){return c&&c(o,v)},children:i},o)};K.isTagSelectOption=!0;var U=function(t){var i=Zt(),n=i.styles,c=t.children,o=t.hideCheckAll,m=o===void 0?!1:o,v=t.className,u=t.style,l=t.expandable,s=t.actionsText,d=s===void 0?{}:s,j=(0,f.useState)(!1),C=D()(j,2),A=C[0],H=C[1],bt=(0,Nt.C8)(t.defaultValue||[],{value:t.value,defaultValue:t.defaultValue,onChange:t.onChange}),Q=D()(bt,2),T=Q[0],X=Q[1],Y=function(g){return g&&g.type&&(g.type.isTagSelectOption||g.type.displayName==="TagSelectOption")},q=function(){var g=f.Children.toArray(c),y=g.filter(function(p){return Y(p)}).map(function(p){return p.props.value});return y||[]},Bt=function(g){var y=[];g&&(y=q()),X(y)},Mt=function(g,y){var p=Lt()(T||[]),Z=p.indexOf(g);y&&Z===-1?p.push(g):!y&&Z>-1&&p.splice(Z,1),X(p)},Et=q().length===(T==null?void 0:T.length),_=d.expandText,Pt=_===void 0?"\u5C55\u5F00":_,tt=d.collapseText,$t=tt===void 0?"\u6536\u8D77":tt,at=d.selectAllText,Gt=at===void 0?"\u5168\u90E8":at,Vt=z()(n.tagSelect,v,x()(x()({},n.hasExpandTag,l),n.expanded,A));return(0,a.jsxs)("div",{className:Vt,style:u,children:[m?null:(0,a.jsx)(w,{checked:Et,onChange:Bt,children:Gt},"tag-select-__all__"),c&&f.Children.map(c,function(h){return Y(h)?f.cloneElement(h,{key:"tag-select-".concat(h.props.value),value:h.props.value,checked:T&&T.indexOf(h.props.value)>-1,onChange:Mt}):h}),l&&(0,a.jsx)("a",{className:n.trigger,onClick:function(){H(!A)},children:A?(0,a.jsxs)(a.Fragment,{children:[$t," ",(0,a.jsx)(It.Z,{})]}):(0,a.jsxs)(a.Fragment,{children:[Pt,(0,a.jsx)(Rt.Z,{})]})})]})};U.Option=K;var J=U,Dt=Array.from({length:12}).map(function(r,t){return{value:"cat".concat(t+1),label:"\u7C7B\u76EE".concat(t+1)}}),Ot=Array.from({length:120}).map(function(r,t){return{value:"cat".concat(t+1),label:"Category".concat(t+1)}});function Ft(){var r=(0,L.useRequest)(function(l){return console.log("form data",l),it({count:8})}),t=r.data,i=r.loading,n=r.run,c=yt(),o=c.styles,m=(t==null?void 0:t.list)||[],v=m&&(0,a.jsx)(b.Z,{rowKey:"id",loading:i,grid:{gutter:16,xs:1,sm:2,md:3,lg:3,xl:4,xxl:4},dataSource:m,renderItem:function(s){return(0,a.jsx)(b.Z.Item,{onClick:function(){L.history.push("/manga/manga-detail/".concat(s.id))},children:(0,a.jsxs)(R.Z,{className:o.card,hoverable:!0,cover:(0,a.jsx)("img",{alt:s.title,src:s.cover}),children:[(0,a.jsx)(R.Z.Meta,{title:(0,a.jsx)("a",{children:s.title}),description:(0,a.jsx)(ot.Z.Paragraph,{ellipsis:{rows:2},children:s.subDescription})}),(0,a.jsx)("div",{className:o.cardItemContent,children:(0,a.jsx)("div",{className:o.avatarList,children:(0,a.jsx)(W,{size:"small",children:s.members.map(function(d,j){return(0,a.jsx)(W.Item,{src:d.avatar,tips:d.name},"".concat(s.id,"-").concat(j))})})})})]})})}}),u={wrapperCol:{xs:{span:24},sm:{span:16}}};return(0,a.jsxs)("div",{className:o.coverCardList,children:[(0,a.jsx)(R.Z,{bordered:!1,children:(0,a.jsxs)(B.Z,{layout:"inline",onValuesChange:function(s,d){n(d)},children:[(0,a.jsx)(P,{title:"Manga",block:!0,style:{paddingBottom:11},children:(0,a.jsx)(J,{expandable:!0,actionsText:{selectAllText:"Select All",expandText:"Expand",collapseText:"Collapse"},children:Ot.map(function(l){return(0,a.jsx)(J.Option,{value:l.value,children:l.label},l.value)})})}),(0,a.jsx)(P,{title:"Search",grid:!0,last:!0,children:(0,a.jsxs)(st.Z,{gutter:16,style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)(M.Z,{lg:8,md:10,sm:10,xs:24,children:(0,a.jsx)(B.Z.Item,S()(S()({},u),{},{label:"name",name:"author",children:(0,a.jsx)(ct.Z,{placeholder:"name",style:{maxWidth:200,width:"100%"}})}))}),(0,a.jsx)(M.Z,{children:(0,a.jsx)(dt.ZP,{type:"primary",onClick:function(){L.history.push("/manga/manga-create")},children:"Add manga"})})]})})]})}),(0,a.jsx)("div",{className:o.cardList,children:v})]})}}}]);
