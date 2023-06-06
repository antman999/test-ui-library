import{j as e}from"./jsx-runtime-6eef64cc.js";import{B as o}from"./Button-81b2bc85.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const n=({user:s,onLogin:u,onLogout:p,onCreateAccount:g})=>e.jsx("header",{children:e.jsxs("div",{className:"storybook-header",children:[e.jsxs("div",{children:[e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:e.jsxs("g",{fill:"none",fillRule:"evenodd",children:[e.jsx("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),e.jsx("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),e.jsx("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),e.jsx("h1",{children:"Acme"})]}),e.jsx("div",{children:s?e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"welcome",children:["Welcome, ",e.jsx("b",{children:s.name}),"!"]}),e.jsx(o,{size:"small",onClick:p,label:"Log out"})]}):e.jsxs(e.Fragment,{children:[e.jsx(o,{size:"small",onClick:u,label:"Log in"}),e.jsx(o,{primary:!0,size:"small",onClick:g,label:"Sign up"})]})})]})});try{n.displayName="Header",n.__docgenInfo={description:"",displayName:"Header",props:{user:{defaultValue:null,description:"",name:"user",required:!1,type:{name:"User"}},onLogin:{defaultValue:null,description:"",name:"onLogin",required:!0,type:{name:"() => void"}},onLogout:{defaultValue:null,description:"",name:"onLogout",required:!0,type:{name:"() => void"}},onCreateAccount:{defaultValue:null,description:"",name:"onCreateAccount",required:!0,type:{name:"() => void"}}}}}catch{}const v={title:"meridian-ui/Layout/Header",component:n,tags:["autodocs"],parameters:{layout:"fullscreen"}},r={args:{user:{name:"Jane Doe"}}},a={};var l,t,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var d,c,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const y=["LoggedIn","LoggedOut"];export{r as LoggedIn,a as LoggedOut,y as __namedExportsOrder,v as default};
//# sourceMappingURL=Header.stories-e66959b7.js.map