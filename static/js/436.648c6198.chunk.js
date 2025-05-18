"use strict";(self.webpackChunkfirstproject=self.webpackChunkfirstproject||[]).push([[436],{1244:(r,e,t)=>{t.d(e,{A:()=>f});var a=t(5043),i=t(8387),n=t(1807),o=t(2620),s=t(8301),l=t(4799),c=t(9857),d=t(6061);function u(r){return(0,d.Ay)("MuiCard",r)}(0,c.A)("MuiCard",["root"]);var m=t(579);const p=(0,o.Ay)(l.A,{name:"MuiCard",slot:"Root",overridesResolver:(r,e)=>e.root})({overflow:"hidden"}),f=a.forwardRef((function(r,e){const t=(0,s.b)({props:r,name:"MuiCard"}),{className:a,raised:o=!1,...l}=t,c={...t,raised:o},d=(r=>{const{classes:e}=r;return(0,n.A)({root:["root"]},u,e)})(c);return(0,m.jsx)(p,{className:(0,i.A)(d.root,a),elevation:o?8:void 0,ref:e,ownerState:c,...l})}))},6020:(r,e,t)=>{t.d(e,{A:()=>N});var a=t(5043),i=t(8387),n=t(1807),o=t(9826),s=t(51),l=t(3290),c=t(2620),d=t(1612),u=t(4412),m=t(8301),p=t(7194),f=t(9857),b=t(6061);function g(r){return(0,b.Ay)("MuiLinearProgress",r)}(0,f.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var v=t(579);const h=l.i7`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,k="string"!==typeof h?l.AH`
        animation: ${h} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,y=l.i7`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,A="string"!==typeof y?l.AH`
        animation: ${y} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,C=l.i7`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,S="string"!==typeof C?l.AH`
        animation: ${C} 3s infinite linear;
      `:null,_=(r,e)=>r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?(0,o.a)(r.palette[e].main,.62):(0,o.e$)(r.palette[e].main,.5),x=(0,c.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.root,e[`color${(0,p.A)(t.color)}`],e[t.variant]]}})((0,d.A)((r=>{let{theme:e}=r;return{position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(e.palette).filter((0,u.A)()).map((r=>{let[t]=r;return{props:{color:t},style:{backgroundColor:_(e,t)}}})),{props:r=>{let{ownerState:e}=r;return"inherit"===e.color&&"buffer"!==e.variant},style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}}))),j=(0,c.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,p.A)(t.color)}`]]}})((0,d.A)((r=>{let{theme:e}=r;return{position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(e.palette).filter((0,u.A)()).map((r=>{let[t]=r;const a=_(e,t);return{props:{color:t},style:{backgroundImage:`radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`}}}))]}})),S||{animation:`${C} 3s infinite linear`}),w=(0,c.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e.bar1,e[`barColor${(0,p.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})((0,d.A)((r=>{let{theme:e}=r;return{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(e.palette).filter((0,u.A)()).map((r=>{let[t]=r;return{props:{color:t},style:{backgroundColor:(e.vars||e).palette[t].main}}})),{props:{variant:"determinate"},style:{transition:"transform .4s linear"}},{props:{variant:"buffer"},style:{zIndex:1,transition:"transform .4s linear"}},{props:r=>{let{ownerState:e}=r;return"indeterminate"===e.variant||"query"===e.variant},style:{width:"auto"}},{props:r=>{let{ownerState:e}=r;return"indeterminate"===e.variant||"query"===e.variant},style:k||{animation:`${h} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}}))),$=(0,c.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{const{ownerState:t}=r;return[e.bar,e.bar2,e[`barColor${(0,p.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})((0,d.A)((r=>{let{theme:e}=r;return{width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(e.palette).filter((0,u.A)()).map((r=>{let[t]=r;return{props:{color:t},style:{"--LinearProgressBar2-barColor":(e.vars||e).palette[t].main}}})),{props:r=>{let{ownerState:e}=r;return"buffer"!==e.variant&&"inherit"!==e.color},style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:r=>{let{ownerState:e}=r;return"buffer"!==e.variant&&"inherit"===e.color},style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(e.palette).filter((0,u.A)()).map((r=>{let[t]=r;return{props:{color:t,variant:"buffer"},style:{backgroundColor:_(e,t),transition:"transform .4s linear"}}})),{props:r=>{let{ownerState:e}=r;return"indeterminate"===e.variant||"query"===e.variant},style:{width:"auto"}},{props:r=>{let{ownerState:e}=r;return"indeterminate"===e.variant||"query"===e.variant},style:A||{animation:`${y} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}}))),N=a.forwardRef((function(r,e){const t=(0,m.b)({props:r,name:"MuiLinearProgress"}),{className:a,color:o="primary",value:l,valueBuffer:c,variant:d="indeterminate",...u}=t,f={...t,color:o,variant:d},b=(r=>{const{classes:e,variant:t,color:a}=r,i={root:["root",`color${(0,p.A)(a)}`,t],dashed:["dashed",`dashedColor${(0,p.A)(a)}`],bar1:["bar","bar1",`barColor${(0,p.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","bar2","buffer"!==t&&`barColor${(0,p.A)(a)}`,"buffer"===t&&`color${(0,p.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,n.A)(i,g,e)})(f),h=(0,s.I)(),k={},y={bar1:{},bar2:{}};if("determinate"===d||"buffer"===d)if(void 0!==l){k["aria-valuenow"]=Math.round(l),k["aria-valuemin"]=0,k["aria-valuemax"]=100;let r=l-100;h&&(r=-r),y.bar1.transform=`translateX(${r}%)`}else 0;if("buffer"===d)if(void 0!==c){let r=(c||0)-100;h&&(r=-r),y.bar2.transform=`translateX(${r}%)`}else 0;return(0,v.jsxs)(x,{className:(0,i.A)(b.root,a),ownerState:f,role:"progressbar",...k,ref:e,...u,children:["buffer"===d?(0,v.jsx)(j,{className:b.dashed,ownerState:f}):null,(0,v.jsx)(w,{className:b.bar1,ownerState:f,style:y.bar1}),"determinate"===d?null:(0,v.jsx)($,{className:b.bar2,ownerState:f,style:y.bar2})]})}))},8009:(r,e,t)=>{t.r(e),t.d(e,{default:()=>f});var a=t(3969),i=t(5895),n=t(1244),o=t(6020);const s={container:"Skills_container__gbYD+",header:"Skills_header__HRlkG",title:"Skills_title__ueQyb",subtitle:"Skills_subtitle__O48ex",skillsGrid:"Skills_skillsGrid__LM5SO",skillCard:"Skills_skillCard__EI0sL",skillImage:"Skills_skillImage__M8Mme",skillContent:"Skills_skillContent__mO8Vd",skillTitle:"Skills_skillTitle__j9lnt",skillList:"Skills_skillList__qB-Hq",skillItem:"Skills_skillItem__D1ste",progressContainer:"Skills_progressContainer__AHh3d"},l=t.p+"static/media/car.1fed4fe891f4227965d2.jpg",c=t.p+"static/media/language.cf4d5c973724f596f107.jpg",d=t.p+"static/media/skill.830851674489f1fb9abd.jpg",u=t.p+"static/media/communication.b20a7c7ac1bc7d0093b7.jpg";var m=t(579);const p=[{title:"Driving Skills",image:l,items:["Licensed to drive cars, motorcycles, and heavy vehicles","Strong understanding of traffic rules & road safety"],progress:85,color:"error"},{title:"Language Skills",image:c,items:["Fluent in Urdu","Proficient in English","Basic understanding of French & German"],progress:75,color:"warning"},{title:"Computing Skills",image:d,items:["Proficient in Python, Java, JavaScript","Strong problem-solving & algorithmic skills","Knowledge of database management (SQL, MongoDB)"],progress:90,color:"success"},{title:"Communication Skills",image:u,items:["Confident in public speaking & presentations","Excellent at team collaboration & leadership"],progress:80,color:"info"}];function f(){return(0,m.jsxs)(a.A,{className:s.container,children:[(0,m.jsxs)(a.A,{className:s.header,children:[(0,m.jsx)(i.A,{variant:"h2",className:s.title,children:"My Skills"}),(0,m.jsx)(i.A,{variant:"body1",className:s.subtitle,children:"Here are some of my key skills in different areas"})]}),(0,m.jsx)(a.A,{className:s.skillsGrid,children:p.map(((r,e)=>(0,m.jsxs)(n.A,{className:s.skillCard,children:[(0,m.jsx)("img",{src:r.image,alt:r.title,className:s.skillImage,onError:e=>{e.target.src="/default-skill.jpg",console.error(`Failed to load ${r.title} image`)}}),(0,m.jsxs)(a.A,{className:s.skillContent,children:[(0,m.jsx)(i.A,{variant:"h5",className:s.skillTitle,children:r.title}),(0,m.jsx)("ul",{className:s.skillList,children:r.items.map(((r,e)=>(0,m.jsx)("li",{className:s.skillItem,children:r},e)))}),(0,m.jsxs)(a.A,{className:s.progressContainer,children:[(0,m.jsx)(o.A,{variant:"determinate",value:r.progress,color:r.color,sx:{height:10,borderRadius:5}}),(0,m.jsxs)(i.A,{variant:"body2",textAlign:"center",mt:1,children:[r.progress,"%"]})]})]})]},e)))})]})}}}]);
//# sourceMappingURL=436.648c6198.chunk.js.map