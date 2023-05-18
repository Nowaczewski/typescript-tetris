var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,n=(r,t,o)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[t]=o;import{r as s,R as c,q as i,$ as p,a as d}from"./vendor.ba2a0317.js";const u=[40,100,300,1200],m={0:{shape:[[0]],color:"0, 0, 0"},I:{shape:[[0,"I",0,0],[0,"I",0,0],[0,"I",0,0],[0,"I",0,0]],color:"80, 227, 230"},J:{shape:[[0,"J",0],[0,"J",0],["J","J",0]],color:"36, 95, 223"},L:{shape:[[0,"L",0],[0,"L",0],[0,"L","L"]],color:"223, 173, 36"},O:{shape:[["O","O"],["O","O"]],color:"223, 217, 36"},S:{shape:[[0,"S","S"],["S","S",0],[0,0,0]],color:"48, 211, 56"},T:{shape:[[0,0,0],["T","T","T"],[0,"T",0]],color:"132, 61, 198"},Z:{shape:[["Z","Z",0],[0,"Z","Z"],[0,0,0]],color:"227, 78, 78"}},f=()=>Array.from(Array(20),(()=>Array(12).fill([0,"clear"]))),g=()=>{const e=["I","J","L","O","S","T","Z"],r=e[Math.floor(Math.random()*e.length)];return m[r]},y=(e,r,{x:t,y:o})=>{for(let l=0;l<e.tetromino.length;l+=1)for(let a=0;a<e.tetromino[l].length;a+=1)if(!(0===e.tetromino[l][a]||r[l+e.pos.y+o]&&r[l+e.pos.y+o][a+e.pos.x+t]&&"clear"===r[l+e.pos.y+o][a+e.pos.x+t][1]))return!0;return!1};const x=()=>{const[e,s]=c.useState({}),i=c.useCallback((()=>s({pos:{x:4,y:0},tetromino:g().shape,collided:!1})),[]);return{player:e,updatePlayerPos:({x:e,y:c,collided:i})=>{s((s=>{return p=((e,r)=>{for(var t in r||(r={}))l.call(r,t)&&n(e,t,r[t]);if(o)for(var t of o(r))a.call(r,t)&&n(e,t,r[t]);return e})({},s),d={pos:{x:s.pos.x+=e,y:s.pos.y+=c},collided:i},r(p,t(d));var p,d}))},resetPlayer:i,playerRotate:r=>{const t=JSON.parse(JSON.stringify(e));var o;t.tetromino=(o=t.tetromino).map(((e,r)=>o.map((e=>e[r])))).map((e=>e.reverse()));const l=t.pos.x;let a=1;for(;y(t,r,{x:0,y:0});)if(t.pos.x+=a,a=-(a+(a>0?1:-1)),a>t.tetromino[0].length)return void(t.pos.x=l);s(t)}}},b=(e,r)=>{var t,o;const[l,a]=c.useState(f()),[n,s]=c.useState(0);return c.useEffect((()=>{if(!e.pos)return;s(0);const t=t=>{const o=t.map((e=>e.map((e=>"clear"===e[1]?[0,"clear"]:e))));return e.tetromino.forEach(((r,t)=>{r.forEach(((r,l)=>{0!==r&&(o[t+e.pos.y][l+e.pos.x]=[r,""+(e.collided?"merged":"clear")])}))})),e.collided?(r(),(e=>e.reduce(((r,t)=>-1===t.findIndex((e=>0===e[0]))?(s((e=>e+1)),r.unshift(new Array(e[0].length).fill([0,"clear"])),r):(r.push(t),r)),[]))(o)):o};a((e=>t(e)))}),[e.collided,null==(t=e.pos)?void 0:t.x,null==(o=e.pos)?void 0:o.y,e.tetromino]),{stage:l,setStage:a,rowsCleared:n}},h=i.div`
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
`,S=({stage:e})=>c.createElement(E,null,e.map((e=>e.map(((e,r)=>c.createElement(v,{key:r,type:e[0]})))))),w=i.div`
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
`,O=({gameOver:e,text:r})=>c.createElement(w,{gameOver:e},r),$=i.button`
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
`,j=()=>{const[e,r]=c.useState(null),[t,o]=c.useState(!0),l=c.useRef(null),{player:a,updatePlayerPos:n,resetPlayer:i,playerRotate:p}=x(),{stage:d,setStage:m,rowsCleared:g}=b(a,i),{score:h,setScore:v,rows:E,setRows:w,level:$,setLevel:j,highScores:L,setHighScores:J}=((e,r)=>{const[t,o]=c.useState(0),[l,a]=c.useState(0),[n,s]=c.useState(1),[i,p]=c.useState([]);return c.useEffect((()=>{if(e>0){const r=u[e-1]*n;o((e=>e+r)),a((r=>r+e))}}),[e,n]),c.useEffect((()=>{if(r){const e=t;if(e>0){const r=[...i,e].sort(((e,r)=>r-e)).slice(0,10);p(r)}}}),[r]),{score:t,setScore:o,rows:l,setRows:a,level:n,setLevel:s,highScores:i,setHighScores:p}})(g,t),R=e=>{y(a,d,{x:e,y:0})||n({x:e,y:0,collided:!1})};return function(e,r){const t=s.exports.useRef(null);s.exports.useEffect((()=>{t.current=e}),[e]),s.exports.useEffect((()=>{if(null!==r){const e=setInterval((function(){t.current&&t.current()}),r);return()=>{clearInterval(e)}}}),[r])}((()=>{E>10*$&&(j((e=>e+1)),r(1e3/$+200)),y(a,d,{x:0,y:1})?(a.pos.y<1&&(console.log("Game over!"),o(!0),r(null)),n({x:0,y:0,collided:!0})):n({x:0,y:1,collided:!1})}),e),c.createElement(I,{role:"button",tabIndex:0,onKeyDown:({keyCode:e,repeat:o})=>{if(!t)if(37===e)R(-1);else if(39===e)R(1);else if(40===e){if(o)return;r(30)}else 38===e&&p(d)},onKeyUp:({keyCode:e})=>{t||40===e&&r(1e3/$+200)},ref:l},c.createElement(P,null,c.createElement("div",{className:"display"},t?c.createElement(c.Fragment,null,c.createElement(O,{gameOver:t,text:"Game Over!"}),c.createElement(k,{callback:()=>{l.current&&l.current.focus(),m(f()),r(1e3),i(),v(0),j(1),w(0),o(!1)}}),c.createElement(O,{text:`High Score: ${L}`})):c.createElement(c.Fragment,null,c.createElement(O,{text:`Score: ${h}`}),c.createElement(O,{text:`Rows: ${E}`}),c.createElement(O,{text:`Level: ${$}`}))),c.createElement(S,{stage:d})))};const L=p`
  body {
    margin: 0;
    padding: 0;
    background: url(${"/assets/bg.875f3482.jpg"}) #000;
    background-size: cover;
    background-position: center;
  }
`;d.render(c.createElement(c.Fragment,null,c.createElement(L,null),c.createElement(j,null)),document.getElementById("root"));
