var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;import{r as s,R as c,q as i,$ as p,a as d}from"./vendor.ba2a0317.js";const u=[40,100,300,1200],m={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},f=()=>Array.from(Array(20),(()=>Array(12).fill([0,"clear"]))),g=()=>{const e=["I","J","L","O","S","T","Z"],t=e[Math.floor(Math.random()*e.length)];return m[t]},y=(e,t,{x:r,y:o})=>{for(let l=0;l<e.tetromino.length;l+=1)for(let a=0;a<e.tetromino[l].length;a+=1)if(!(0===e.tetromino[l][a]||t[l+e.pos.y+o]&&t[l+e.pos.y+o][a+e.pos.x+r]&&"clear"===t[l+e.pos.y+o][a+e.pos.x+r][1]))return!0;return!1};const x=()=>{const[e,s]=c.useState({}),i=c.useCallback((()=>s({pos:{x:4,y:0},tetromino:g().shape,collided:!1})),[]);return{player:e,updatePlayerPos:({x:e,y:c,collided:i})=>{s((s=>{return p=((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&n(e,r,t[r]);if(o)for(var r of o(t))a.call(t,r)&&n(e,r,t[r]);return e})({},s),d={pos:{x:s.pos.x+=e,y:s.pos.y+=c},collided:i},t(p,r(d));var p,d}))},resetPlayer:i,playerRotate:t=>{const r=JSON.parse(JSON.stringify(e));var o;r.tetromino=(o=r.tetromino).map(((e,t)=>o.map((e=>e[t])))).map((e=>e.reverse()));const l=r.pos.x;let a=1;for(;y(r,t,{x:0,y:0});)if(r.pos.x+=a,a=-(a+(a>0?1:-1)),a>r.tetromino[0].length)return void(r.pos.x=l);s(r)}}},b=(e,t)=>{var r,o;const[l,a]=c.useState(f()),[n,s]=c.useState(0);return c.useEffect((()=>{if(!e.pos)return;s(0);const r=r=>{const o=r.map((e=>e.map((e=>"clear"===e[1]?[0,"clear"]:e))));return e.tetromino.forEach(((t,r)=>{t.forEach(((t,l)=>{0!==t&&(o[r+e.pos.y][l+e.pos.x]=[t,""+(e.collided?"merged":"clear")])}))})),e.collided?(t(),(e=>e.reduce(((t,r)=>-1===r.findIndex((e=>0===e[0]))?(s((e=>e+1)),t.unshift(new Array(e[0].length).fill([0,"clear"])),t):(t.push(r),t)),[]))(o)):o};a((e=>r(e)))}),[e.collided,null==(r=e.pos)?void 0:r.x,null==(o=e.pos)?void 0:o.y,e.tetromino]),{stage:l,setStage:a,rowsCleared:n}},h=i.div`
  width: auto;
  background: rgba(${e=>e.color}, 0.8);
  border: ${e=>0===e.type?"0px solid":"4px solid"};
  border-bottom-color: rgba(${e=>e.color}, 0.1);
  border-right-color: rgba(${e=>e.color}, 1);
  border-top-color: rgba(${e=>e.color}, 1);
  border-left-color: rgba(${e=>e.color}, 0.3);
`;var v=c.memo((({type:e})=>c.createElement(h,{type:e,color:m[e].color})));const E=i.div`
  display: grid;
  grid-template-columns: repeat(${12}, 30px);
  grid-template-rows: repeat(${20}, 30px);
  grid-gap: 1px;
  border: 1px solid #777;
  background: #222;
`,S=({stage:e})=>c.createElement(E,null,e.map((e=>e.map(((e,t)=>c.createElement(v,{key:t,type:e[0]})))))),w=i.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 2px solid #777;
  min-height: 20px;
  width: 120px;
  border-radius: 10px;
  color: ${e=>e.gameOver?"red":"#999"};
  background: #000;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`,O=({gameOver:e,text:t})=>c.createElement(w,{gameOver:e},t),$=i.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 20px;
  width: 170px;
  border-radius: 10px;
  border: none;
  color: white;
  background: #111;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`,k=({callback:e})=>c.createElement($,{onClick:e},"Start Game"),I=i.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  outline: none;
`,P=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  margin: 0 auto;

  .display {
    display: flex;
    justify-content: space-between;
    width: 380px;
  }
`,j=()=>{const e=new Audio("/assets/tetris.07bc4ff1.mp4"),[t,r]=c.useState(null),[o,l]=c.useState(!0),[a,n]=c.useState(!1),i=c.useRef(null),{player:p,updatePlayerPos:d,resetPlayer:m,playerRotate:g}=x(),{stage:h,setStage:v,rowsCleared:E}=b(p,m),{score:w,setScore:$,rows:j,setRows:L,level:J,setLevel:R,highScores:A,setHighScores:T}=((e,t)=>{const[r,o]=c.useState(0),[l,a]=c.useState(0),[n,s]=c.useState(1),[i,p]=c.useState([]);return c.useEffect((()=>{if(e>0){const t=u[e-1]*n;o((e=>e+t)),a((t=>t+e))}}),[e,n]),c.useEffect((()=>{if(t){const e=r;if(e>0){const t=[...i,e].sort(((e,t)=>t-e)).slice(0,10);p(t)}}}),[t]),{score:r,setScore:o,rows:l,setRows:a,level:n,setLevel:s,highScores:i,setHighScores:p}})(E,o),C=e=>{y(p,h,{x:e,y:0})||d({x:e,y:0,collided:!1})};return function(e,t){const r=s.exports.useRef(null);s.exports.useEffect((()=>{r.current=e}),[e]),s.exports.useEffect((()=>{if(null!==t){const e=setInterval((function(){r.current&&r.current()}),t);return()=>{clearInterval(e)}}}),[t])}((()=>{j>10*J&&(R((e=>e+1)),r(1e3/J+200)),y(p,h,{x:0,y:1})?(p.pos.y<1&&(console.log("Game over!"),l(!0),r(null),e.pause(),n(!1)),d({x:0,y:0,collided:!0})):d({x:0,y:1,collided:!1})}),t),c.createElement(I,{role:"button",tabIndex:0,onKeyDown:({keyCode:e,repeat:t})=>{if(!o)if(37===e)C(-1);else if(39===e)C(1);else if(40===e){if(t)return;r(30)}else 38===e&&g(h)},onKeyUp:({keyCode:e})=>{o||40===e&&r(1e3/J+200)},ref:i},a&&c.createElement("audio",{src:"/assets/tetris.07bc4ff1.mp4",autoPlay:!0,loop:!0}),c.createElement(P,null,c.createElement("div",{className:"display"},o?c.createElement(c.Fragment,null,c.createElement(O,{gameOver:o,text:"Game Over!"}),c.createElement(k,{callback:()=>{i.current&&i.current.focus(),v(f()),r(1e3),m(),$(0),R(1),L(0),l(!1),e.currentTime=0,e.play(),n(!0)}}),c.createElement(O,{text:`High Score: ${A}`})):c.createElement(c.Fragment,null,c.createElement(O,{text:`Score: ${w}`}),c.createElement(O,{text:`Rows: ${j}`}),c.createElement(O,{text:`Level: ${J}`}))),c.createElement(S,{stage:h})))};const L=p`
  body {
    margin: 0;
    padding: 0;
    background: url(${"/assets/bg.875f3482.jpg"}) #000;
    background-size: cover;
    background-position: center;
  }
`;d.render(c.createElement(c.Fragment,null,c.createElement(L,null),c.createElement(j,null)),document.getElementById("root"));
