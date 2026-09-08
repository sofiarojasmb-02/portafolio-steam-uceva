import{r as x,j as e,p as w,R as P,a as M}from"./index-C84yFZP5.js";function L({onPrintPdf:i}){const[s,o]=x.useState(!1),[n,l]=x.useState(!1),[d,c]=x.useState("hero");x.useEffect(()=>{const r=()=>{o(window.scrollY>40);const t=["hero","about","projects","capabilities","team","impact","contact"],f=window.scrollY+200;for(const h of t){const b=document.getElementById(h);if(b){const v=b.offsetTop,y=b.offsetHeight;if(f>=v&&f<v+y){c(h);break}}}};return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]);const m=[{id:"hero",label:"Inicio"},{id:"about",label:"El Centro"},{id:"projects",label:"Proyectos"},{id:"capabilities",label:"Equipos"},{id:"team",label:"Equipo"},{id:"impact",label:"Impacto"},{id:"contact",label:"Contacto"}],a=r=>{l(!1);const t=document.getElementById(r);t&&t.scrollIntoView({behavior:"smooth"})};return e.jsxs("header",{className:`navbar-header no-print ${s?"scrolled":""}`,children:[e.jsxs("div",{className:"container nav-inner",children:[e.jsxs("a",{href:"#hero",className:"nav-brand",onClick:r=>{r.preventDefault(),a("hero")},children:[e.jsxs("div",{className:"brand-icon-hex",children:[e.jsx("svg",{viewBox:"0 0 100 100",className:"hex-svg",children:e.jsx("polygon",{points:"50 3, 93 25, 93 75, 50 97, 7 75, 7 25",fill:"none",stroke:"currentColor",strokeWidth:"6"})}),e.jsx("span",{className:"brand-letter",children:"U"})]}),e.jsxs("div",{className:"brand-text",children:[e.jsx("span",{className:"brand-main",children:"CENTRO STEAM"}),e.jsx("span",{className:"brand-sub",children:"UCEVA • PROTOTIPADO"})]})]}),e.jsx("nav",{className:"nav-links-desktop",children:m.map(r=>e.jsxs("button",{onClick:()=>a(r.id),className:`nav-link-btn ${d===r.id?"active":""}`,children:[r.label,d===r.id&&e.jsx("span",{className:"nav-link-indicator"})]},r.id))}),e.jsxs("div",{className:"nav-actions",children:[e.jsxs("button",{onClick:i,className:"btn-cyber-print",title:"Generar y guardar dossier completo en PDF",children:[e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"6 9 6 2 18 2 18 9"}),e.jsx("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),e.jsx("rect",{x:"6",y:"14",width:"12",height:"8"})]}),e.jsx("span",{children:"Dossier PDF"})]}),e.jsx("button",{className:"mobile-menu-btn",onClick:()=>l(!n),"aria-label":"Abrir menú",children:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:n?e.jsx("path",{d:"M18 6L6 18M6 6l12 12"}):e.jsx("path",{d:"M4 6h16M4 12h16M4 18h16"})})})]})]}),n&&e.jsx("div",{className:"mobile-menu-drawer fade-in-up",children:e.jsxs("div",{className:"mobile-links",children:[m.map(r=>e.jsx("button",{onClick:()=>a(r.id),className:`mobile-link-item ${d===r.id?"active":""}`,children:r.label},r.id)),e.jsx("button",{onClick:()=>{l(!1),i()},className:"btn-cyber-print mobile-print-btn",children:"Imprimir / Guardar en PDF"})]})}),e.jsx("style",{children:`
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--nav-height);
          z-index: 1000;
          transition: all var(--transition-normal);
          background: transparent;
        }

        .navbar-header.scrolled {
          background: var(--bg-glass-heavy);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #ffffff;
        }

        .brand-icon-hex {
          position: relative;
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--neon-cyan);
          filter: drop-shadow(0 0 8px rgba(0, 240, 255, 0.6));
        }

        .hex-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          animation: floatSlow 6s ease-in-out infinite;
        }

        .brand-letter {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 1.1rem;
          color: #ffffff;
          position: relative;
          z-index: 2;
        }

        .brand-text {
          display: flex;
          flex-direction: column;
        }

        .brand-main {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.05rem;
          letter-spacing: 0.05em;
          background: linear-gradient(90deg, #ffffff, var(--neon-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .brand-sub {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: var(--neon-magenta);
          letter-spacing: 0.15em;
          font-weight: 600;
        }

        .nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav-link-btn {
          position: relative;
          padding: 8px 14px;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .nav-link-btn:hover {
          color: #ffffff;
          background: rgba(0, 240, 255, 0.08);
        }

        .nav-link-btn.active {
          color: var(--neon-cyan);
          font-weight: 600;
        }

        .nav-link-indicator {
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 2px;
          background: var(--neon-cyan);
          box-shadow: 0 0 8px var(--neon-cyan);
          border-radius: 2px;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mobile-menu-btn {
          display: none;
          color: #ffffff;
          padding: 6px;
          border-radius: var(--radius-sm);
          background: rgba(255, 255, 255, 0.05);
        }

        .mobile-menu-drawer {
          display: none;
          background: var(--bg-glass-heavy);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--border-active);
          padding: 20px 24px;
        }

        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .mobile-link-item {
          text-align: left;
          padding: 10px 14px;
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-secondary);
          border-radius: var(--radius-sm);
        }

        .mobile-link-item.active,
        .mobile-link-item:hover {
          color: var(--neon-cyan);
          background: rgba(0, 240, 255, 0.1);
        }

        .mobile-print-btn {
          margin-top: 10px;
          width: 100%;
        }

        @media (max-width: 900px) {
          .nav-links-desktop {
            display: none;
          }
          .mobile-menu-btn {
            display: flex;
          }
          .mobile-menu-drawer {
            display: block;
          }
        }
      `})]})}const S=["Realidades Extendidas (VR / AR / MR)","Inteligencia Artificial & Modelos AA","Gemelos Digitales & Fotogrametría 3D","Aeronáutica & Drones No Tripulados","Diseño & Fabricación Digital 3D","IoT & Ciudades Inteligentes"];function V({onPrintPdf:i}){const[s,o]=x.useState(0),[n,l]=x.useState(""),[d,c]=x.useState(!1),m=x.useRef(null);x.useEffect(()=>{const r=S[s],f=setTimeout(()=>{d?(l(r.substring(0,n.length-1)),n===""&&(c(!1),o(h=>(h+1)%S.length))):(l(r.substring(0,n.length+1)),n===r&&setTimeout(()=>c(!0),2e3))},d?40:80);return()=>clearTimeout(f)},[n,d,s]),x.useEffect(()=>{const r=m.current;if(!r)return;const t=r.getContext("2d");let f,h=r.width=r.parentElement.offsetWidth,b=r.height=r.parentElement.offsetHeight;const v=()=>{r&&(h=r.width=r.parentElement.offsetWidth,b=r.height=r.parentElement.offsetHeight)};window.addEventListener("resize",v);const y=Math.min(65,Math.floor(h/20)),j=[];for(let u=0;u<y;u++)j.push({x:Math.random()*h,y:Math.random()*b,vx:(Math.random()-.5)*.8,vy:(Math.random()-.5)*.8,radius:Math.random()*2+1,color:Math.random()>.5?"#00f0ff":Math.random()>.5?"#9d00ff":"#ff007f"});let z=-1e3,I=-1e3;const D=u=>{const g=r.getBoundingClientRect();z=u.clientX-g.left,I=u.clientY-g.top};r.addEventListener("mousemove",D);const R=()=>{t.clearRect(0,0,h,b),t.strokeStyle="rgba(0, 240, 255, 0.03)",t.lineWidth=1;const u=40;for(let g=0;g<h;g+=u)t.beginPath(),t.moveTo(g,0),t.lineTo(g,b),t.stroke();for(let g=0;g<b;g+=u)t.beginPath(),t.moveTo(0,g),t.lineTo(h,g),t.stroke();for(let g=0;g<j.length;g++){const p=j[g];p.x+=p.vx,p.y+=p.vy,(p.x<0||p.x>h)&&(p.vx*=-1),(p.y<0||p.y>b)&&(p.vy*=-1);const k=z-p.x,C=I-p.y,A=Math.sqrt(k*k+C*C);A<120&&(p.x-=k/A*2,p.y-=C/A*2),t.beginPath(),t.arc(p.x,p.y,p.radius,0,Math.PI*2),t.fillStyle=p.color,t.shadowBlur=8,t.shadowColor=p.color,t.fill(),t.shadowBlur=0;for(let E=g+1;E<j.length;E++){const N=j[E],T=Math.hypot(p.x-N.x,p.y-N.y);T<110&&(t.beginPath(),t.moveTo(p.x,p.y),t.lineTo(N.x,N.y),t.strokeStyle=`rgba(0, 240, 255, ${.2*(1-T/110)})`,t.lineWidth=.8,t.stroke())}}f=requestAnimationFrame(R)};return R(),()=>{window.removeEventListener("resize",v),r.removeEventListener("mousemove",D),cancelAnimationFrame(f)}},[]);const a=r=>{const t=document.getElementById(r);t&&t.scrollIntoView({behavior:"smooth"})};return e.jsxs("section",{id:"hero",className:"hero-section",children:[e.jsx("canvas",{ref:m,className:"hero-canvas"}),e.jsx("div",{className:"glow-orb orb-cyan"}),e.jsx("div",{className:"glow-orb orb-magenta"}),e.jsxs("div",{className:"container hero-container",children:[e.jsx("div",{className:"hero-badge-wrap",children:e.jsxs("div",{className:"badge badge-cyan animate-pulse-cyan",children:[e.jsx("span",{className:"live-dot"}),e.jsx("span",{children:"INDUSTRIA 4.0 & 5.0 • UCEVA"})]})}),e.jsxs("h1",{className:"hero-title",children:["Centro de Prototipado ",e.jsx("br",{}),e.jsx("span",{className:"text-gradient",children:"& STEAM UCEVA"})]}),e.jsxs("div",{className:"hero-typewriter-box",children:[e.jsx("span",{className:"typewriter-prefix",children:"> Especialidad: "}),e.jsx("span",{className:"typewriter-text",children:n}),e.jsx("span",{className:"typewriter-cursor"})]}),e.jsxs("p",{className:"hero-desc",children:["Ecosistema de investigación aplicada, fabricación digital y tecnologías inmersivas de la ",e.jsx("strong",{children:"Unidad Central del Valle del Cauca"}),". Transformamos retos de la comunidad académica y el sector productivo en soluciones tangibles de vanguardia."]}),e.jsxs("div",{className:"hero-cta-group",children:[e.jsxs("button",{onClick:()=>a("projects"),className:"btn-cyber-primary",children:[e.jsx("span",{children:"Explorar Proyectos"}),e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]})]}),e.jsxs("button",{onClick:()=>a("capabilities"),className:"btn-cyber-secondary",children:[e.jsx("span",{children:"Ver Equipamiento"}),e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),e.jsx("polyline",{points:"2 17 12 22 22 17"}),e.jsx("polyline",{points:"2 12 12 17 22 12"})]})]}),e.jsxs("button",{onClick:i,className:"btn-cyber-print no-print",children:[e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"6 9 6 2 18 2 18 9"}),e.jsx("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),e.jsx("rect",{x:"6",y:"14",width:"12",height:"8"})]}),e.jsx("span",{children:"Dossier PDF"})]})]}),e.jsxs("div",{className:"hero-stats-grid glass-panel",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("span",{className:"stat-number text-gradient",children:"14+"}),e.jsx("span",{className:"stat-label",children:"Proyectos de I+D Extraídos"})]}),e.jsx("div",{className:"stat-divider"}),e.jsxs("div",{className:"stat-card",children:[e.jsx("span",{className:"stat-number text-cyan",children:"8"}),e.jsx("span",{className:"stat-label",children:"Líneas Tecnológicas 4.0/5.0"})]}),e.jsx("div",{className:"stat-divider"}),e.jsxs("div",{className:"stat-card",children:[e.jsx("span",{className:"stat-number text-magenta",children:"18+"}),e.jsx("span",{className:"stat-label",children:"Ingenieros, Monitores & Red"})]}),e.jsx("div",{className:"stat-divider"}),e.jsxs("div",{className:"stat-card",children:[e.jsx("span",{className:"stat-number text-gradient-warm",children:"100%"}),e.jsx("span",{className:"stat-label",children:"Prototipado In-House UCEVA"})]})]})]}),e.jsx("style",{children:`
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: calc(var(--nav-height) + 40px);
          padding-bottom: 60px;
          overflow: hidden;
        }

        .hero-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: auto;
          z-index: 0;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          pointer-events: none;
          z-index: 1;
        }

        .orb-cyan {
          top: 15%;
          left: 10%;
          width: 350px;
          height: 350px;
          background: rgba(0, 240, 255, 0.12);
        }

        .orb-magenta {
          bottom: 20%;
          right: 10%;
          width: 400px;
          height: 400px;
          background: rgba(157, 0, 255, 0.14);
        }

        .hero-badge-wrap {
          margin-bottom: 24px;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background-color: var(--neon-cyan);
          border-radius: 50%;
          box-shadow: 0 0 10px var(--neon-cyan);
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.4rem);
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
        }

        .hero-typewriter-box {
          display: inline-flex;
          align-items: center;
          background: rgba(10, 18, 42, 0.7);
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-radius: 30px;
          padding: 8px 22px;
          margin-bottom: 24px;
          font-family: var(--font-mono);
          font-size: clamp(0.85rem, 2vw, 1.1rem);
          backdrop-filter: blur(12px);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.15);
        }

        .typewriter-prefix {
          color: var(--neon-magenta);
          font-weight: 700;
          margin-right: 8px;
        }

        .typewriter-text {
          color: #ffffff;
          font-weight: 600;
        }

        .hero-desc {
          max-width: 780px;
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 38px;
        }

        .hero-desc strong {
          color: #ffffff;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 56px;
        }

        .hero-stats-grid {
          width: 100%;
          max-width: 1060px;
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          padding: 24px 32px;
          background: rgba(10, 16, 38, 0.75);
          border: 1px solid rgba(0, 240, 255, 0.2);
        }

        .stat-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }

        .stat-number {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 900;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .stat-divider {
          width: 1px;
          height: 42px;
          background: linear-gradient(180deg, transparent, rgba(0, 240, 255, 0.3), transparent);
        }

        @media (max-width: 820px) {
          .hero-stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            padding: 20px;
          }
          .stat-divider {
            display: none;
          }
        }
      `})]})}function F({centerInfo:i}){const s=[{title:"Realidades Extendidas (XR)",desc:"Simuladores inmersivos VR, aplicaciones WebAR de divulgación y hologramas en Realidad Mixta (MR) con Spatial Computing.",icon:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),e.jsx("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),e.jsx("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"})]}),color:"cyan"},{title:"Inteligencia Artificial & Visión",desc:"Modelos de Machine Learning, Computer Vision, reconocimiento cinemático (Motion Tracking) y análisis biométrico de Neuromarketing.",icon:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"3"}),e.jsx("path",{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"})]}),color:"magenta"},{title:"Gemelos Digitales & Fotogrametría",desc:"Digitalización aerofotogramétrica milimétrica de infraestructuras complejas y escaneo de avatares humanos 3D de alta definición.",icon:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),e.jsx("polyline",{points:"2 17 12 22 22 17"}),e.jsx("polyline",{points:"2 12 12 17 22 12"})]}),color:"purple"},{title:"Aeronáutica & Drones",desc:"Ingeniería, ensamble de aviónica Pixhawk, prototipado de chasis en compuestos y telemetría autónoma para UAVs.",icon:e.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"})}),color:"orange"},{title:"Fabricación Digital & Reciclaje 3D",desc:"Impresión 3D FDM/SLA técnica, mecanizado CNC, corte láser y maquinaria de triturado para economía circular del plástico.",icon:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("polyline",{points:"16 18 22 12 16 6"}),e.jsx("polyline",{points:"8 6 2 12 8 18"})]}),color:"green"},{title:"IoT, Hardware & Ciudades Inteligentes",desc:"Diseño y fabricación propia de placas de circuito impreso (PCBs), redes LoRaWAN y estaciones meteorológicas autónomas solares.",icon:e.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("rect",{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"}),e.jsx("rect",{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"}),e.jsx("line",{x1:"6",y1:"6",x2:"6.01",y2:"6"}),e.jsx("line",{x1:"6",y1:"18",x2:"6.01",y2:"18"})]}),color:"cyan"}];return e.jsxs("section",{id:"about",className:"about-section",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("span",{className:"section-subtitle",children:"< GESTIÓN DE INNOVACIÓN & PROTOTIPADO />"}),e.jsxs("h2",{className:"section-title",children:["Acerca del ",e.jsx("span",{className:"text-gradient",children:"Centro STEAM UCEVA"})]}),e.jsx("p",{className:"section-desc",children:"Surgido en el año 2023 como el motor de transferencia tecnológica e innovación abierta de la Unidad Central del Valle del Cauca."})]}),e.jsxs("div",{className:"about-grid",children:[e.jsxs("div",{className:"about-main-panel glass-panel scan-line-overlay",children:[e.jsx("div",{className:"panel-badge-top",children:e.jsx("span",{className:"badge badge-purple",children:"Trayectoria 2023 – Presente"})}),e.jsxs("h3",{className:"about-panel-title",children:["Respuesta Tecnológica para la ",e.jsx("span",{className:"text-cyan",children:"Industria 4.0 & 5.0"})]}),e.jsx("p",{className:"about-text",children:i.description}),e.jsx("p",{className:"about-text",children:"Integramos la física aplicada, la instrumentación electrónica, la pedagogía STEAM+ y la computación espacial para crear soluciones con alto impacto comunitario, ambiental y académico en el Valle del Cauca y Colombia."}),e.jsx("div",{className:"about-tags-list",children:i.domains.map((o,n)=>e.jsxs("span",{className:"domain-pill",children:[e.jsx("span",{className:"pill-dot"}),o]},n))})]}),e.jsx("div",{className:"about-pillars-grid",children:s.map((o,n)=>e.jsxs("div",{className:`pillar-card glass-panel pillar-${o.color}`,children:[e.jsx("div",{className:`pillar-icon-box icon-${o.color}`,children:o.icon}),e.jsx("h4",{className:"pillar-title",children:o.title}),e.jsx("p",{className:"pillar-desc",children:o.desc})]},n))})]})]}),e.jsx("style",{children:`
        .about-section {
          background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%);
          border-top: 1px solid var(--border-subtle);
          border-bottom: 1px solid var(--border-subtle);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }

        .about-main-panel {
          padding: 36px 40px;
          background: linear-gradient(135deg, rgba(14, 21, 46, 0.9) 0%, rgba(8, 13, 30, 0.95) 100%);
          border: 1px solid rgba(0, 240, 255, 0.3);
        }

        .panel-badge-top {
          margin-bottom: 18px;
        }

        .about-panel-title {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          margin-bottom: 20px;
          line-height: 1.25;
        }

        .about-text {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 16px;
        }

        .about-tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .domain-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(0, 240, 255, 0.05);
          border: 1px solid rgba(0, 240, 255, 0.2);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: #d1e2ff;
        }

        .pill-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--neon-cyan);
          box-shadow: 0 0 6px var(--neon-cyan);
        }

        .about-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .pillar-card {
          padding: 24px;
          background: var(--bg-card);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pillar-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
        }

        .icon-cyan {
          background: rgba(0, 240, 255, 0.12);
          color: var(--neon-cyan);
          border: 1px solid rgba(0, 240, 255, 0.3);
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.2);
        }

        .icon-magenta {
          background: rgba(255, 0, 127, 0.12);
          color: var(--neon-magenta);
          border: 1px solid rgba(255, 0, 127, 0.3);
          box-shadow: 0 0 15px rgba(255, 0, 127, 0.2);
        }

        .icon-purple {
          background: rgba(157, 0, 255, 0.12);
          color: var(--neon-purple);
          border: 1px solid rgba(157, 0, 255, 0.3);
          box-shadow: 0 0 15px rgba(157, 0, 255, 0.2);
        }

        .icon-orange {
          background: rgba(255, 85, 0, 0.12);
          color: var(--neon-orange);
          border: 1px solid rgba(255, 85, 0, 0.3);
          box-shadow: 0 0 15px rgba(255, 85, 0, 0.2);
        }

        .icon-green {
          background: rgba(0, 255, 136, 0.12);
          color: var(--neon-green);
          border: 1px solid rgba(0, 255, 136, 0.3);
          box-shadow: 0 0 15px rgba(0, 255, 136, 0.2);
        }

        .pillar-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
        }

        .pillar-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 992px) {
          .about-pillars-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .about-pillars-grid {
            grid-template-columns: 1fr;
          }
          .about-main-panel {
            padding: 24px 20px;
          }
        }
      `})]})}function O({project:i,onSelect:s}){const[o,n]=x.useState(!1),[l,d]=x.useState(!1),c=a=>a.includes("VR")||a.includes("Virtual")?"badge-magenta":a.includes("AR")||a.includes("Aumentada")?"badge-cyan":a.includes("MR")||a.includes("Mixta")?"badge-purple":a.includes("IA")||a.includes("Inteligencia")?"badge-warm":a.includes("Fotogrametría")?"badge-cyan":a.includes("Aeronáutica")||a.includes("Drones")?"badge-warm":"badge-green",m=!!i.gif;return e.jsxs("div",{className:"project-card glass-panel scan-line-overlay",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onClick:()=>s(i),children:[e.jsxs("div",{className:"card-media-wrapper",children:[e.jsx("div",{className:"card-media-inner",children:m&&o?e.jsx("img",{src:i.gif,alt:i.title,className:"card-img gif-media",loading:"lazy"}):e.jsx("img",{src:l?"/assets/projects/slide_render_1.jpg":i.previewImage||i.gallery[0],alt:i.title,className:"card-img poster-media",onError:()=>d(!0),loading:"lazy"})}),e.jsxs("div",{className:"media-overlay-top",children:[e.jsx("span",{className:`badge ${c(i.category)}`,children:i.category}),m&&e.jsxs("span",{className:"live-demo-tag",children:[e.jsx("span",{className:"pulse-dot"}),"DEMO VIVO"]})]}),e.jsxs("div",{className:"slide-tag-badge",children:["Slide ",i.slide]})]}),e.jsxs("div",{className:"card-content",children:[e.jsx("div",{className:"card-tag-row",children:e.jsx("span",{className:"project-tag-pill",children:i.tag})}),e.jsx("h3",{className:"card-title",children:i.title}),e.jsx("p",{className:"card-desc",children:i.shortDesc}),e.jsxs("div",{className:"card-tech-stack",children:[i.techStack.slice(0,3).map((a,r)=>e.jsx("span",{className:"tech-badge",children:a},r)),i.techStack.length>3&&e.jsxs("span",{className:"tech-badge more-badge",children:["+",i.techStack.length-3]})]}),e.jsxs("div",{className:"card-footer-action",children:[e.jsx("span",{className:"action-text",children:"Ver Proyecto & Galería"}),e.jsx("div",{className:"action-icon",children:e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]})})]})]}),e.jsx("style",{children:`
        .project-card {
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: rgba(11, 17, 38, 0.85);
          border: 1px solid rgba(0, 240, 255, 0.18);
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .project-card:hover {
          border-color: var(--neon-cyan);
          box-shadow: 0 12px 35px -8px rgba(0, 240, 255, 0.28), 0 0 15px rgba(157, 0, 255, 0.15);
          transform: translateY(-6px);
        }

        .card-media-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          background: #050814;
          overflow: hidden;
        }

        .card-media-inner {
          width: 100%;
          height: 100%;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .card-img {
          transform: scale(1.05);
        }

        .media-overlay-top {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 2;
          pointer-events: none;
        }

        .live-demo-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: rgba(0, 0, 0, 0.75);
          border: 1px solid var(--neon-magenta);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--neon-magenta);
          backdrop-filter: blur(8px);
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--neon-magenta);
          box-shadow: 0 0 8px var(--neon-magenta);
          animation: blinkCursor 1s infinite;
        }

        .slide-tag-badge {
          position: absolute;
          bottom: 10px;
          right: 12px;
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          padding: 3px 8px;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #94a3b8;
          backdrop-filter: blur(6px);
        }

        .card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 12px;
        }

        .card-tag-row {
          display: flex;
          align-items: center;
        }

        .project-tag-pill {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--neon-cyan);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
          min-height: 2.7rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          margin-bottom: auto;
        }

        .card-tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 8px;
        }

        .tech-badge {
          padding: 4px 10px;
          background: rgba(0, 240, 255, 0.06);
          border: 1px solid rgba(0, 240, 255, 0.16);
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #b8cde8;
        }

        .tech-badge.more-badge {
          background: rgba(157, 0, 255, 0.1);
          border-color: rgba(157, 0, 255, 0.3);
          color: #d8b4fe;
        }

        .card-footer-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 16px;
          margin-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--neon-cyan);
          font-size: 0.88rem;
          font-weight: 600;
          transition: color var(--transition-fast);
        }

        .action-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid rgba(0, 240, 255, 0.2);
          transition: all var(--transition-normal);
        }

        .project-card:hover .action-icon {
          background: var(--neon-cyan);
          color: #000;
          transform: translateX(4px);
        }
      `})]})}function B({projects:i,onSelectProject:s}){const[o,n]=x.useState("ALL"),[l,d]=x.useState(""),c=[{id:"ALL",label:"Todos los Proyectos"},{id:"VR",label:"Realidad Virtual (VR)"},{id:"AR",label:"Realidad Aumentada (AR)"},{id:"MR",label:"Realidad Mixta (MR)"},{id:"IA",label:"Inteligencia Artificial"},{id:"Fotogrametría",label:"Fotogrametría & 3D"},{id:"Aeronáutica",label:"Aeronáutica & Drones"},{id:"IoT",label:"Electrónica & IoT"},{id:"Diseño",label:"Fabricación Digital"}],m=x.useMemo(()=>i.filter(a=>{let r=!0;o!=="ALL"&&(o==="VR"?r=a.category.includes("VR")||a.category.includes("Virtual"):o==="AR"?r=a.category.includes("AR")||a.category.includes("Aumentada"):o==="MR"?r=a.category.includes("MR")||a.category.includes("Mixta"):o==="IA"?r=a.category.includes("IA")||a.category.includes("Inteligencia"):o==="Fotogrametría"?r=a.category.includes("Fotogrametría"):o==="Aeronáutica"?r=a.category.includes("Aeronáutica")||a.category.includes("Drones"):o==="IoT"?r=a.category.includes("IoT")||a.category.includes("Electrónica"):o==="Diseño"&&(r=a.category.includes("Diseño")||a.category.includes("Fabricación")));let t=!0;if(l.trim()!==""){const f=l.toLowerCase(),h=a.title.toLowerCase().includes(f),b=a.fullDesc.toLowerCase().includes(f)||a.shortDesc.toLowerCase().includes(f),v=a.techStack.some(j=>j.toLowerCase().includes(f)),y=a.role.toLowerCase().includes(f);t=h||b||v||y}return r&&t}),[i,o,l]);return e.jsxs("section",{id:"projects",className:"projects-section",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("span",{className:"section-subtitle",children:"< PORTAFOLIO DE I+D+i />"}),e.jsxs("h2",{className:"section-title",children:["Desarrollos & ",e.jsx("span",{className:"text-gradient",children:"Proyectos Tecnológicos"})]}),e.jsx("p",{className:"section-desc",children:"Soluciones interactivas, hardware de precisión, gemelos digitales y sistemas de IA creados por investigadores y estudiantes de la UCEVA."})]}),e.jsxs("div",{className:"filter-controls-wrap no-print",children:[e.jsx("div",{className:"filter-tabs-scroll",children:e.jsx("div",{className:"filter-tabs",children:c.map(a=>e.jsx("button",{onClick:()=>n(a.id),className:`filter-btn ${o===a.id?"active":""}`,children:a.label},a.id))})}),e.jsxs("div",{className:"filter-search-row",children:[e.jsxs("div",{className:"search-input-box",children:[e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"search-icon",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),e.jsx("input",{type:"text",placeholder:"Buscar por tecnología, rol o palabra clave (ej. Unity, Drones, IoT, IA)...",value:l,onChange:a=>d(a.target.value),className:"search-input"}),l&&e.jsx("button",{onClick:()=>d(""),className:"clear-search-btn",children:"✕"})]}),e.jsx("div",{className:"projects-counter-badge",children:e.jsxs("span",{children:["Mostrando: ",e.jsx("strong",{children:m.length})," de ",i.length," proyectos"]})})]})]}),m.length>0?e.jsx("div",{className:"projects-grid",children:m.map(a=>e.jsx(O,{project:a,onSelect:s},a.id))}):e.jsxs("div",{className:"no-results-panel glass-panel",children:[e.jsx("div",{className:"no-results-icon",children:"🔍"}),e.jsx("h3",{children:"No se encontraron proyectos con ese criterio"}),e.jsx("p",{children:"Intenta con otros términos de búsqueda o selecciona otra categoría."}),e.jsx("button",{onClick:()=>{n("ALL"),d("")},className:"btn-cyber-secondary",children:"Restablecer Filtros"})]})]}),e.jsx("style",{children:`
        .projects-section {
          background-color: var(--bg-primary);
          position: relative;
        }

        .filter-controls-wrap {
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .filter-tabs-scroll {
          overflow-x: auto;
          padding-bottom: 8px;
          scrollbar-width: thin;
        }

        .filter-tabs {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: max-content;
        }

        .filter-btn {
          padding: 8px 18px;
          background: rgba(14, 21, 46, 0.7);
          border: 1px solid rgba(0, 240, 255, 0.2);
          border-radius: 30px;
          color: var(--text-secondary);
          font-size: 0.85rem;
          font-weight: 600;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .filter-btn:hover {
          color: #ffffff;
          border-color: var(--neon-cyan);
          background: rgba(0, 240, 255, 0.1);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.25), rgba(157, 0, 255, 0.25));
          border-color: var(--neon-cyan);
          color: var(--neon-cyan);
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);
        }

        .filter-search-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }

        .search-input-box {
          position: relative;
          flex: 1;
          min-width: 280px;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          color: var(--neon-cyan);
          pointer-events: none;
        }

        .search-input {
          width: 100%;
          padding: 12px 42px 12px 44px;
          background: rgba(14, 21, 46, 0.8);
          border: 1px solid rgba(0, 240, 255, 0.2);
          border-radius: var(--radius-md);
          color: #ffffff;
          font-family: inherit;
          font-size: 0.92rem;
          outline: none;
          transition: border-color var(--transition-fast);
        }

        .search-input:focus {
          border-color: var(--neon-cyan);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.25);
        }

        .clear-search-btn {
          position: absolute;
          right: 14px;
          color: var(--text-muted);
          font-size: 1rem;
          padding: 4px;
        }

        .clear-search-btn:hover {
          color: #ffffff;
        }

        .projects-counter-badge {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-secondary);
          background: rgba(10, 16, 38, 0.6);
          padding: 8px 16px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .projects-counter-badge strong {
          color: var(--neon-cyan);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .no-results-panel {
          text-align: center;
          padding: 60px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .no-results-icon {
          font-size: 3rem;
        }

        .no-results-panel h3 {
          font-size: 1.4rem;
        }

        .no-results-panel p {
          color: var(--text-secondary);
          max-width: 400px;
        }
      `})]})}function U({project:i,onClose:s}){const[o,n]=x.useState(0),[l,d]=x.useState(!!(i!=null&&i.gif));if(x.useEffect(()=>{const a=r=>{r.key==="Escape"&&s()};return window.addEventListener("keydown",a),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow="auto"}},[s]),!i)return null;const c=[];i.gif&&c.push({type:"gif",src:i.gif,label:"Demo Animado (GIF)"}),i.gallery&&i.gallery.length>0&&i.gallery.forEach((a,r)=>{c.push({type:"image",src:a,label:`Imagen ${r+1}`})});const m=c[o]||c[0];return e.jsxs("div",{className:"modal-overlay",onClick:s,children:[e.jsxs("div",{className:"modal-content glass-panel modal-enter",onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"modal-header",children:[e.jsxs("div",{className:"modal-header-meta",children:[e.jsx("span",{className:"badge badge-cyan",children:i.category}),e.jsx("span",{className:"badge badge-purple",children:i.tag}),e.jsxs("span",{className:"slide-num-pill",children:["Slide ",i.slide]})]}),e.jsx("button",{className:"modal-close-btn",onClick:s,"aria-label":"Cerrar modal",children:e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),e.jsx("h2",{className:"modal-title",children:i.title}),e.jsxs("div",{className:"modal-body-grid",children:[e.jsxs("div",{className:"modal-media-col",children:[e.jsx("div",{className:"modal-media-main-box",children:(m==null?void 0:m.type)==="gif"?e.jsxs("div",{className:"gif-player-wrapper",children:[e.jsx("img",{src:m.src,alt:i.title,className:"modal-display-media"}),e.jsxs("div",{className:"gif-live-badge",children:[e.jsx("span",{className:"live-dot-pulse"}),"DEMO VIVO EN LOOP"]})]}):e.jsx("img",{src:(m==null?void 0:m.src)||i.previewImage,alt:i.title,className:"modal-display-media",onError:a=>{a.target.src="/assets/projects/slide_render_1.jpg"}})}),c.length>1&&e.jsx("div",{className:"modal-thumbs-row",children:c.map((a,r)=>e.jsxs("button",{onClick:()=>n(r),className:`thumb-btn ${o===r?"active":""}`,children:[e.jsx("img",{src:a.src,alt:`Miniatura ${r}`,className:"thumb-img",onError:t=>{t.target.src="/assets/projects/slide_render_1.jpg"}}),a.type==="gif"&&e.jsx("span",{className:"thumb-gif-tag",children:"GIF"})]},r))})]}),e.jsxs("div",{className:"modal-details-col",children:[e.jsxs("div",{className:"detail-section",children:[e.jsx("h4",{className:"detail-subtitle",children:"Descripción del Desarrollo"}),e.jsx("p",{className:"detail-text",children:i.fullDesc})]}),e.jsxs("div",{className:"detail-section",children:[e.jsx("h4",{className:"detail-subtitle",children:"Rol & Aporte en el Proyecto"}),e.jsxs("div",{className:"role-box",children:[e.jsx("div",{className:"role-icon",children:"⚡"}),e.jsx("p",{className:"role-text",children:i.role})]})]}),i.metrics&&Object.keys(i.metrics).length>0&&e.jsxs("div",{className:"detail-section",children:[e.jsx("h4",{className:"detail-subtitle",children:"Especificaciones & Métricas Clave"}),e.jsx("div",{className:"metrics-tags-grid",children:Object.entries(i.metrics).map(([a,r],t)=>e.jsxs("div",{className:"metric-chip",children:[e.jsxs("span",{className:"metric-key",children:[a.toUpperCase(),":"]}),e.jsx("span",{className:"metric-val",children:r})]},t))})]}),e.jsxs("div",{className:"detail-section",children:[e.jsx("h4",{className:"detail-subtitle",children:"Stack Tecnológico Empleado"}),e.jsx("div",{className:"modal-tech-pills",children:i.techStack.map((a,r)=>e.jsx("span",{className:"tech-pill-modal",children:a},r))})]})]})]})]}),e.jsx("style",{children:`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(4, 7, 17, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 24px;
        }

        .modal-content {
          width: 100%;
          max-width: 960px;
          max-height: 88vh;
          overflow-y: auto;
          background: rgba(10, 16, 38, 0.95);
          border: 1px solid rgba(0, 240, 255, 0.4);
          box-shadow: 0 0 50px rgba(0, 240, 255, 0.25), 0 20px 40px rgba(0, 0, 0, 0.8);
          padding: 32px;
          border-radius: var(--radius-xl);
        }

        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .modal-header-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .slide-num-pill {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #94a3b8;
          background: rgba(255, 255, 255, 0.08);
          padding: 4px 10px;
          border-radius: 6px;
        }

        .modal-close-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.06);
          color: var(--text-secondary);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all var(--transition-fast);
        }

        .modal-close-btn:hover {
          color: #ffffff;
          background: rgba(255, 0, 127, 0.3);
          border-color: var(--neon-magenta);
          box-shadow: 0 0 15px rgba(255, 0, 127, 0.5);
          transform: rotate(90deg);
        }

        .modal-title {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 24px;
        }

        .modal-body-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 32px;
        }

        .modal-media-main-box {
          position: relative;
          width: 100%;
          height: 320px;
          background: #03060f;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid rgba(0, 240, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-display-media {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #03060f;
        }

        .gif-player-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .gif-live-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid var(--neon-cyan);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--neon-cyan);
          backdrop-filter: blur(8px);
        }

        .live-dot-pulse {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--neon-cyan);
          box-shadow: 0 0 8px var(--neon-cyan);
          animation: blinkCursor 0.8s infinite;
        }

        .modal-thumbs-row {
          display: flex;
          gap: 10px;
          margin-top: 14px;
          overflow-x: auto;
          padding-bottom: 6px;
        }

        .thumb-btn {
          position: relative;
          width: 68px;
          height: 50px;
          border-radius: 6px;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.15);
          background: #000;
          flex-shrink: 0;
          transition: all var(--transition-fast);
        }

        .thumb-btn.active {
          border-color: var(--neon-cyan);
          box-shadow: 0 0 10px var(--neon-cyan);
        }

        .thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumb-gif-tag {
          position: absolute;
          top: 2px;
          right: 2px;
          font-size: 0.55rem;
          background: var(--neon-magenta);
          color: #fff;
          padding: 1px 3px;
          border-radius: 3px;
          font-weight: 800;
        }

        .modal-details-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .detail-subtitle {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--neon-cyan);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .detail-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.65;
        }

        .role-box {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 12px 16px;
          background: rgba(0, 240, 255, 0.05);
          border: 1px solid rgba(0, 240, 255, 0.2);
          border-radius: var(--radius-sm);
        }

        .role-icon {
          font-size: 1.1rem;
        }

        .role-text {
          font-size: 0.9rem;
          color: #e2e8f0;
          line-height: 1.5;
        }

        .metrics-tags-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .metric-chip {
          display: flex;
          gap: 8px;
          font-size: 0.85rem;
          background: rgba(14, 21, 46, 0.6);
          padding: 6px 12px;
          border-radius: 6px;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .metric-key {
          font-family: var(--font-mono);
          color: var(--neon-magenta);
          font-weight: 700;
          font-size: 0.75rem;
        }

        .metric-val {
          color: #f1f5f9;
        }

        .modal-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-pill-modal {
          padding: 6px 14px;
          background: rgba(157, 0, 255, 0.12);
          border: 1px solid rgba(157, 0, 255, 0.35);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: #e9d5ff;
          font-weight: 600;
        }
      `})]})}function W({equipment:i}){const[s,o]=x.useState(0),n=[{id:"xr",name:"Realidades Extendidas (XR)",icon:"🥽",description:"Infraestructura inmersiva de computación espacial para desarrollo en VR, AR y Realidad Mixta.",items:[{name:"Cascos Meta Quest 2 & Meta Quest 3",desc:"Visores standalone con procesador Snapdragon XR2 y cámaras de passthrough a color de alta fidelidad."},{name:"Sistemas de Spatial Anchors & Hand Tracking",desc:"Sensores ópticos para tracking manual sin mandos y anclaje persistente de objetos holográficos."},{name:"Cámaras 360° HDR 8K & Audio Espacial",desc:"Captura inmersiva para recorridos virtuales interactivos y audio binaural 360°."},{name:"Estaciones Gráficas de Render GPU RTX",desc:"Equipos de cómputo de alto rendimiento para compilación en Unity 3D y Unreal Engine."}]},{id:"fabricacion",name:"Fabricación Digital 3D & CNC",icon:"⚙️",description:"Maquinaria de manufactura aditiva y sustractiva para prototipado rápido y economía circular.",items:[{name:"Granja de Impresoras 3D FDM",desc:"Fabricación rápida en polímeros técnicos: PLA, PETG, ABS, TPU flexible y filamento con fibra de carbono."},{name:"Impresoras 3D de Resina SLA / MSLA",desc:"Impresión de fotopolímeros de ultra-alta resolución con precisión milimétrica para detalles anatómicos y micro-piezas."},{name:"Cortadora & Grabadora Láser CO2 CNC",desc:"Corte y grabado de precisión en acrílicos, maderas, MDF y materiales compuestos de ingeniería."},{name:"Fresadora CNC para PCBs & Metales Blandos",desc:"Ruteo y aislamiento de pistas electrónicas en placas de cobre y mecanizado de aluminio."},{name:"Minitrituradora & Extrusora de Plástico Reciclado",desc:"Planta piloto para triturado de botellas PET y deshechos plásticos para su reextrusión en filamento 3D."}]},{id:"aero",name:"Aeronáutica & Captura Espacial",icon:"🛰️",description:"Plataformas de vuelo autónomo, teledetección y sensores de escaneo tridimensional.",items:[{name:"Drones DJI para Fotogrametría Aérea",desc:"Aeronaves con posicionamiento RTK/GPS para levantamiento topográfico y ortomosaicos de alta resolución."},{name:"UAVs de Investigación con Pixhawk",desc:"Aeronaves de ala fija y multirotores personalizados con aviónica de código abierto y telemetría de largo alcance."},{name:"Escáneres 3D Ópticos & Láser",desc:"Digitalización volumétrica portátil para ingeniería inversa y creación de modelos digitales de personas y piezas."}]},{id:"electronica",name:"Electrónica, IoT & Robótica",icon:"⚡",description:"Laboratorio de instrumentación física, desarrollo de microcontroladores y prototipado de PCBs.",items:[{name:"Estaciones de Soldadura SMD & Reflujo",desc:"Equipos profesionales con control PID de temperatura y microscopios para ensamble de componentes miniatura."},{name:"Osciloscopios Digitales & Analizadores Lógicos",desc:"Instrumentación de diagnóstico para buses I2C, SPI, UART, CAN y señales de alta frecuencia."},{name:"Módulos IoT ESP32, LoRaWAN & Zigbee",desc:"Microcontroladores conectados de bajo consumo para nodos sensores y redes de ciudades inteligentes."},{name:"Kits de Robótica Educativa & Brazos Programables",desc:"Herramientas de aprendizaje activo para capacitación STEAM+ y robótica colaborativa."}]}];return e.jsxs("section",{id:"capabilities",className:"capabilities-section",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("span",{className:"section-subtitle",children:"< INFRAESTRUCTURA & CAPACIDAD TÉCNICA />"}),e.jsxs("h2",{className:"section-title",children:["Equipamiento ",e.jsx("span",{className:"text-gradient",children:"Educativo & Tecnológico"})]}),e.jsx("p",{className:"section-desc",children:"Laboratorios dotados con tecnología de punta para la formación, experimentación y desarrollo ágil de prototipos de la UCEVA."})]}),e.jsx("div",{className:"capabilities-tabs-bar no-print",children:n.map((l,d)=>e.jsxs("button",{onClick:()=>o(d),className:`cap-tab-btn ${s===d?"active":""}`,children:[e.jsx("span",{className:"cap-tab-icon",children:l.icon}),e.jsx("span",{children:l.name})]},l.id))}),e.jsxs("div",{className:"capability-active-display glass-panel",children:[e.jsxs("div",{className:"cap-display-header",children:[e.jsx("div",{className:"cap-header-icon",children:n[s].icon}),e.jsxs("div",{children:[e.jsx("h3",{className:"cap-display-title",children:n[s].name}),e.jsx("p",{className:"cap-display-desc",children:n[s].description})]})]}),e.jsx("div",{className:"cap-items-grid",children:n[s].items.map((l,d)=>e.jsxs("div",{className:"cap-item-card",children:[e.jsxs("div",{className:"item-badge-hex",children:["0",d+1]}),e.jsxs("div",{className:"item-info",children:[e.jsx("h4",{className:"item-name",children:l.name}),e.jsx("p",{className:"item-desc",children:l.desc})]})]},d))})]}),e.jsx("div",{className:"print-only",children:n.map((l,d)=>e.jsxs("div",{className:"glass-panel",style:{marginBottom:"20px",padding:"20px"},children:[e.jsx("h3",{children:l.name}),e.jsx("p",{children:l.description}),e.jsx("ul",{children:l.items.map((c,m)=>e.jsxs("li",{children:[e.jsxs("strong",{children:[c.name,":"]})," ",c.desc]},m))})]},d))})]}),e.jsx("style",{children:`
        .capabilities-section {
          background-color: var(--bg-secondary);
          position: relative;
        }

        .capabilities-tabs-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .cap-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: rgba(14, 21, 46, 0.7);
          border: 1px solid rgba(0, 240, 255, 0.2);
          border-radius: var(--radius-md);
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.95rem;
          transition: all var(--transition-normal);
        }

        .cap-tab-btn:hover {
          color: #ffffff;
          border-color: var(--neon-cyan);
          background: rgba(0, 240, 255, 0.1);
          transform: translateY(-2px);
        }

        .cap-tab-btn.active {
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(157, 0, 255, 0.2));
          border-color: var(--neon-cyan);
          color: var(--neon-cyan);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
        }

        .cap-tab-icon {
          font-size: 1.2rem;
        }

        .capability-active-display {
          padding: 40px;
          background: rgba(10, 16, 38, 0.9);
          border: 1px solid rgba(0, 240, 255, 0.3);
        }

        .cap-display-header {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-bottom: 28px;
          margin-bottom: 32px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .cap-header-icon {
          font-size: 2.5rem;
          width: 68px;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-radius: var(--radius-md);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
        }

        .cap-display-title {
          font-size: 1.6rem;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .cap-display-desc {
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .cap-items-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .cap-item-card {
          display: flex;
          gap: 16px;
          padding: 20px;
          background: rgba(14, 21, 46, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-md);
          transition: all var(--transition-normal);
        }

        .cap-item-card:hover {
          background: rgba(20, 30, 65, 0.8);
          border-color: rgba(0, 240, 255, 0.3);
          transform: translateX(4px);
        }

        .item-badge-hex {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--neon-cyan);
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid rgba(0, 240, 255, 0.3);
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .item-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .item-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.55;
        }

        @media (max-width: 768px) {
          .cap-items-grid {
            grid-template-columns: 1fr;
          }
          .capability-active-display {
            padding: 24px 20px;
          }
        }
      `})]})}function q({team:i}){return e.jsxs("section",{id:"team",className:"team-section",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("span",{className:"section-subtitle",children:"< TALENTO HUMANO INTERDISCIPLINARIO />"}),e.jsxs("h2",{className:"section-title",children:["Equipo de ",e.jsx("span",{className:"text-gradient",children:"Investigadores & Expertos"})]}),e.jsx("p",{className:"section-desc",children:"Profesionales altamente capacitados en ingeniería electrónica, física aplicada, aeronáutica, IA y realidades extendidas."})]}),e.jsx("div",{className:"team-grid",children:i.professionals.map((s,o)=>e.jsxs("div",{className:"team-card glass-panel scan-line-overlay",children:[e.jsxs("div",{className:"member-avatar-box",children:[s.avatar?e.jsx("img",{src:s.avatar,alt:s.name,className:"member-avatar-img",onError:n=>{n.target.style.display="none",n.target.parentElement.classList.add("avatar-fallback-active")}}):null,e.jsx("div",{className:"avatar-fallback",children:e.jsx("span",{className:"fallback-initials",children:s.name.split(" ").map(n=>n[0]).slice(0,2).join("")})}),e.jsx("div",{className:"avatar-border-glow"})]}),e.jsxs("div",{className:"member-info",children:[e.jsx("span",{className:"member-role-tag",children:s.role}),e.jsx("h3",{className:"member-name",children:s.name}),e.jsx("div",{className:"member-degrees",children:s.degrees.map((n,l)=>e.jsx("span",{className:"degree-pill",children:n},l))}),e.jsx("p",{className:"member-focus",children:s.focus})]})]},o))}),e.jsxs("div",{className:"support-team-box glass-panel",children:[e.jsxs("div",{className:"support-header",children:[e.jsx("span",{className:"badge badge-magenta",children:"Semillero & Monitores"}),e.jsx("h3",{className:"support-title",children:"Equipo de Apoyo, Practicantes & Voluntarios"}),e.jsx("p",{className:"support-subtitle",children:"Estudiantes destacados de Ingeniería Electrónica, Sistemas y Comunicación Transmedia que impulsan el desarrollo diario de proyectos."})]}),e.jsx("div",{className:"support-grid",children:i.support.map((s,o)=>e.jsxs("div",{className:"support-chip",children:[e.jsx("div",{className:"support-dot"}),e.jsxs("div",{className:"support-text-wrap",children:[e.jsx("span",{className:"support-name",children:s.name}),e.jsxs("span",{className:"support-role",children:[s.role," • ",s.degree]})]})]},o))})]})]}),e.jsx("style",{children:`
        .team-section {
          background-color: var(--bg-primary);
          position: relative;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 56px;
        }

        .team-card {
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          border-radius: var(--radius-lg);
          background: rgba(11, 17, 40, 0.8);
          border: 1px solid rgba(0, 240, 255, 0.2);
          transition: all var(--transition-normal);
        }

        .team-card:hover {
          border-color: var(--neon-cyan);
          box-shadow: 0 10px 30px rgba(0, 240, 255, 0.25);
          transform: translateY(-6px);
        }

        .member-avatar-box {
          position: relative;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .member-avatar-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          position: relative;
          z-index: 2;
          border: 2px solid var(--neon-cyan);
        }

        .avatar-fallback {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, #0e1e4a, #200f38);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          border: 2px solid var(--neon-cyan);
        }

        .fallback-initials {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.6rem;
          color: var(--neon-cyan);
        }

        .avatar-border-glow {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--neon-cyan), var(--neon-purple), var(--neon-magenta));
          opacity: 0.6;
          filter: blur(6px);
          z-index: 0;
        }

        .member-role-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--neon-cyan);
          letter-spacing: 0.08em;
          margin-bottom: 6px;
          display: block;
        }

        .member-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .member-degrees {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 6px;
          margin-bottom: 14px;
        }

        .degree-pill {
          padding: 3px 8px;
          background: rgba(157, 0, 255, 0.1);
          border: 1px solid rgba(157, 0, 255, 0.25);
          border-radius: 4px;
          font-size: 0.72rem;
          color: #d8b4fe;
        }

        .member-focus {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .support-team-box {
          padding: 36px 40px;
          background: rgba(10, 16, 38, 0.85);
          border: 1px solid rgba(255, 0, 127, 0.3);
        }

        .support-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .support-title {
          font-size: 1.5rem;
          color: #ffffff;
          margin-top: 10px;
          margin-bottom: 8px;
        }

        .support-subtitle {
          color: var(--text-secondary);
          font-size: 0.95rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .support-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .support-chip {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(14, 21, 46, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--radius-sm);
        }

        .support-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--neon-magenta);
          box-shadow: 0 0 6px var(--neon-magenta);
          flex-shrink: 0;
        }

        .support-text-wrap {
          display: flex;
          flex-direction: column;
        }

        .support-name {
          font-size: 0.92rem;
          font-weight: 600;
          color: #ffffff;
        }

        .support-role {
          font-size: 0.76rem;
          color: var(--text-secondary);
        }

        @media (max-width: 992px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .support-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
          .support-grid {
            grid-template-columns: 1fr;
          }
          .support-team-box {
            padding: 24px 18px;
          }
        }
      `})]})}function H(){const i=[{badge:"Salud Pública & VR",title:"Museo del Dengue VR en Colegios & Comunidades",desc:"Estrategia pedagógica inmersiva donde más de un millar de niños y jóvenes interactúan con el ciclo biológico del mosquito Aedes aegypti y aprenden medidas efectivas de erradicación de criaderos.",image:"/assets/projects/slide_render_9.jpg",points:["Transferencia en escuelas públicas","Validación pedagógica con docentes","Sensibilización preventiva comunitaria"]},{badge:"Alianzas Estratégicas",title:"Relacionamiento con CENICAFÉ & Entidades Regionales",desc:"Desarrollo de recorridos interactivos 360° y visualización científica de laboratorios de investigación cafetera de primer nivel, fortaleciendo los lazos entre la academia y los centros de I+D nacionales.",image:"/assets/projects/slide_render_10.jpg",points:["Divulgación científica nacional","Plataformas WebXR de acceso abierto","Cooperación interinstitucional"]},{badge:"Proyección Social",title:"Fomento de Vocaciones Científicas STEAM+",desc:"Apertura de los laboratorios del Centro de Prototipado para talleres prácticos de robótica, impresión 3D y realidades extendidas para jóvenes del Valle del Cauca, cerrando la brecha digital.",image:"/assets/projects/slide_render_11.jpg",points:["Talleres prácticos hands-on","Participación en ferias de innovación","Inclusión de género en tecnología"]}];return e.jsxs("section",{id:"impact",className:"impact-section",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("span",{className:"section-subtitle",children:"< APROPIACIÓN SOCIAL DEL CONOCIMIENTO />"}),e.jsxs("h2",{className:"section-title",children:["Impacto, Proyección & ",e.jsx("span",{className:"text-gradient",children:"Alianzas"})]}),e.jsx("p",{className:"section-desc",children:"Tecnología puesta al servicio de la salud pública, la educación regional y la transferencia científica."})]}),e.jsx("div",{className:"impacts-grid",children:i.map((s,o)=>e.jsxs("div",{className:"impact-card glass-panel scan-line-overlay",children:[e.jsxs("div",{className:"impact-img-box",children:[e.jsx("img",{src:s.image,alt:s.title,className:"impact-img",onError:n=>{n.target.src="/assets/projects/slide_render_1.jpg"},loading:"lazy"}),e.jsx("div",{className:"impact-overlay-badge",children:e.jsx("span",{className:"badge badge-cyan",children:s.badge})})]}),e.jsxs("div",{className:"impact-content",children:[e.jsx("h3",{className:"impact-title",children:s.title}),e.jsx("p",{className:"impact-desc",children:s.desc}),e.jsx("ul",{className:"impact-points",children:s.points.map((n,l)=>e.jsxs("li",{children:[e.jsx("span",{className:"point-icon",children:"✓"}),e.jsx("span",{children:n})]},l))})]})]},o))})]}),e.jsx("style",{children:`
        .impact-section {
          background-color: var(--bg-secondary);
          position: relative;
        }

        .impacts-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .impact-card {
          display: flex;
          flex-direction: column;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: rgba(11, 17, 40, 0.85);
          border: 1px solid rgba(0, 240, 255, 0.2);
        }

        .impact-img-box {
          position: relative;
          width: 100%;
          height: 200px;
          background: #030612;
          overflow: hidden;
        }

        .impact-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .impact-card:hover .impact-img {
          transform: scale(1.05);
        }

        .impact-overlay-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          z-index: 2;
        }

        .impact-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .impact-title {
          font-size: 1.2rem;
          color: #ffffff;
          line-height: 1.35;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .impact-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .impact-points {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .impact-points li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          color: #cbd5e1;
        }

        .point-icon {
          color: var(--neon-cyan);
          font-weight: 800;
        }

        @media (max-width: 992px) {
          .impacts-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function G({onPrintPdf:i}){const[s,o]=x.useState({name:"",email:"",subject:"",message:""}),[n,l]=x.useState(!1),d=c=>{c.preventDefault(),!(!s.name||!s.email||!s.message)&&(l(!0),setTimeout(()=>{l(!1),o({name:"",email:"",subject:"",message:""})},5e3))};return e.jsxs("section",{id:"contact",className:"contact-section",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"section-header",children:[e.jsx("span",{className:"section-subtitle",children:"< CONEXIÓN & TRANSFERENCIA />"}),e.jsxs("h2",{className:"section-title",children:["Contacto & ",e.jsx("span",{className:"text-gradient",children:"Alianzas de I+D"})]}),e.jsx("p",{className:"section-desc",children:"¿Interesado en desarrollar proyectos de Realidad Virtual, IA, Drones o Prototipado 3D con nosotros? Escríbenos directamente."})]}),e.jsxs("div",{className:"contact-grid",children:[e.jsxs("div",{className:"contact-info-col",children:[e.jsxs("div",{className:"contact-info-card glass-panel",children:[e.jsx("div",{className:"info-icon-box",children:"📍"}),e.jsxs("div",{children:[e.jsx("h4",{className:"info-card-title",children:"Ubicación del Centro"}),e.jsxs("p",{className:"info-card-text",children:["Unidad Central del Valle del Cauca (UCEVA)",e.jsx("br",{}),"Campus Universitario — Cra. 27 A # 48-144",e.jsx("br",{}),"Tuluá, Valle del Cauca, Colombia"]})]})]}),e.jsxs("div",{className:"contact-info-card glass-panel",children:[e.jsx("div",{className:"info-icon-box",children:"📧"}),e.jsxs("div",{children:[e.jsx("h4",{className:"info-card-title",children:"Canal Institucional"}),e.jsx("p",{className:"info-card-text",children:e.jsx("a",{href:"mailto:centrosteam@uceva.edu.co",className:"contact-link",children:"centrosteam@uceva.edu.co"})}),e.jsx("p",{className:"info-card-sub",children:"Investigación & Prototipado Tecnológico"})]})]}),e.jsxs("div",{className:"contact-info-card glass-panel",children:[e.jsx("div",{className:"info-icon-box",children:"📄"}),e.jsxs("div",{children:[e.jsx("h4",{className:"info-card-title",children:"Dossier Institucional"}),e.jsx("p",{className:"info-card-text",children:"Descarga la versión completa del portafolio en PDF lista para imprimir y presentar a comités de investigación."}),e.jsxs("button",{onClick:i,className:"btn-cyber-print",style:{marginTop:"12px"},children:[e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:[e.jsx("polyline",{points:"6 9 6 2 18 2 18 9"}),e.jsx("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),e.jsx("rect",{x:"6",y:"14",width:"12",height:"8"})]}),e.jsx("span",{children:"Generar Dossier PDF"})]})]})]})]}),e.jsxs("div",{className:"contact-form-panel glass-panel no-print",children:[e.jsx("h3",{className:"form-panel-title",children:"Enviar Mensaje al Centro"}),n?e.jsxs("div",{className:"success-banner fade-in-up",children:[e.jsx("div",{className:"success-icon",children:"✨"}),e.jsx("h4",{children:"¡Mensaje Enviado con Éxito!"}),e.jsx("p",{children:"El equipo del Centro de Prototipado & STEAM UCEVA se pondrá en contacto a la brevedad."})]}):e.jsxs("form",{onSubmit:d,className:"contact-form",children:[e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Nombre Completo *"}),e.jsx("input",{type:"text",required:!0,placeholder:"Ej. Juan Pérez",value:s.name,onChange:c=>o({...s,name:c.target.value}),className:"form-input"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Correo Electrónico *"}),e.jsx("input",{type:"email",required:!0,placeholder:"Ej. contacto@entidad.com",value:s.email,onChange:c=>o({...s,email:c.target.value}),className:"form-input"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Área de Interés / Asunto"}),e.jsx("input",{type:"text",placeholder:"Ej. Alianza Realidad Virtual / Proyecto Drones / Prototipado 3D",value:s.subject,onChange:c=>o({...s,subject:c.target.value}),className:"form-input"})]}),e.jsxs("div",{className:"form-group",children:[e.jsx("label",{className:"form-label",children:"Mensaje o Propuesta *"}),e.jsx("textarea",{required:!0,rows:"4",placeholder:"Describe tu requerimiento o iniciativa de colaboración...",value:s.message,onChange:c=>o({...s,message:c.target.value}),className:"form-textarea"})]}),e.jsxs("button",{type:"submit",className:"btn-cyber-primary",style:{width:"100%",marginTop:"8px"},children:[e.jsx("span",{children:"Enviar Mensaje"}),e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[e.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),e.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})]})]})]})]})]}),e.jsx("style",{children:`
        .contact-section {
          background-color: var(--bg-primary);
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 36px;
        }

        .contact-info-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-info-card {
          display: flex;
          gap: 20px;
          padding: 24px;
          background: rgba(11, 17, 40, 0.85);
          border: 1px solid rgba(0, 240, 255, 0.2);
        }

        .info-icon-box {
          font-size: 1.8rem;
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-radius: var(--radius-md);
          flex-shrink: 0;
        }

        .info-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 6px;
        }

        .info-card-text {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .info-card-sub {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--neon-cyan);
          margin-top: 4px;
        }

        .contact-link {
          color: var(--neon-cyan);
          text-decoration: underline;
        }

        .contact-link:hover {
          color: #ffffff;
        }

        .contact-form-panel {
          padding: 36px;
          background: rgba(10, 16, 38, 0.92);
          border: 1px solid rgba(0, 240, 255, 0.3);
        }

        .form-panel-title {
          font-size: 1.4rem;
          color: #ffffff;
          margin-bottom: 24px;
          font-weight: 700;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--neon-cyan);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 600;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 12px 16px;
          background: rgba(14, 21, 46, 0.8);
          border: 1px solid rgba(0, 240, 255, 0.2);
          border-radius: var(--radius-sm);
          color: #ffffff;
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
          transition: all var(--transition-fast);
        }

        .form-input:focus, .form-textarea:focus {
          border-color: var(--neon-cyan);
          box-shadow: 0 0 15px rgba(0, 240, 255, 0.3);
        }

        .success-banner {
          padding: 32px;
          text-align: center;
          background: rgba(0, 255, 136, 0.08);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: var(--radius-md);
        }

        .success-icon {
          font-size: 2.5rem;
          margin-bottom: 12px;
        }

        .success-banner h4 {
          font-size: 1.3rem;
          color: var(--neon-green);
          margin-bottom: 8px;
        }

        .success-banner p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function _(){const i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("footer",{className:"footer-section no-print",children:[e.jsxs("div",{className:"container",children:[e.jsxs("div",{className:"footer-grid",children:[e.jsxs("div",{className:"footer-brand-col",children:[e.jsxs("div",{className:"footer-brand",children:[e.jsx("div",{className:"brand-icon-hex-small",children:e.jsx("span",{children:"U"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"footer-brand-title",children:"CENTRO STEAM UCEVA"}),e.jsx("p",{className:"footer-brand-sub",children:"Centro de Prototipado & Nuevas Tecnologías"})]})]}),e.jsx("p",{className:"footer-brand-desc",children:"Impulsando la investigación aplicada, el modelado 3D, la computación espacial y la robótica para la transformación educativa y social de Colombia."})]}),e.jsxs("div",{className:"footer-links-col",children:[e.jsx("h5",{className:"footer-col-title",children:"Secciones"}),e.jsxs("ul",{className:"footer-links-list",children:[e.jsx("li",{children:e.jsx("a",{href:"#hero",children:"Inicio"})}),e.jsx("li",{children:e.jsx("a",{href:"#about",children:"Acerca del Centro"})}),e.jsx("li",{children:e.jsx("a",{href:"#projects",children:"Proyectos de I+D"})}),e.jsx("li",{children:e.jsx("a",{href:"#capabilities",children:"Equipamiento"})}),e.jsx("li",{children:e.jsx("a",{href:"#team",children:"Equipo de Expertos"})}),e.jsx("li",{children:e.jsx("a",{href:"#impact",children:"Impacto Social"})})]})]}),e.jsxs("div",{className:"footer-links-col",children:[e.jsx("h5",{className:"footer-col-title",children:"Líneas de Innovación"}),e.jsxs("ul",{className:"footer-links-list",children:[e.jsx("li",{children:e.jsx("span",{children:"Realidades Extendidas (VR/AR/MR)"})}),e.jsx("li",{children:e.jsx("span",{children:"Inteligencia Artificial & AA"})}),e.jsx("li",{children:e.jsx("span",{children:"Drones & Aeronáutica Pixhawk"})}),e.jsx("li",{children:e.jsx("span",{children:"IoT & Smart Cities LoRaWAN"})}),e.jsx("li",{children:e.jsx("span",{children:"Manufactura Aditiva & CNC"})})]})]}),e.jsx("div",{className:"footer-top-col",children:e.jsxs("button",{onClick:i,className:"btn-back-to-top","aria-label":"Volver arriba",children:[e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),e.jsx("polyline",{points:"5 12 12 5 19 12"})]}),e.jsx("span",{children:"Subir al Inicio"})]})})]}),e.jsxs("div",{className:"footer-bottom-bar",children:[e.jsxs("p",{className:"footer-copyright",children:["© ",new Date().getFullYear()," ",e.jsx("strong",{children:"Unidad Central del Valle del Cauca (UCEVA)"})," — Centro de Prototipado & STEAM. Todos los derechos reservados."]}),e.jsxs("div",{className:"footer-tech-meta",children:[e.jsx("span",{className:"tech-badge-footer",children:"React 18"}),e.jsx("span",{className:"tech-badge-footer",children:"Dark Tech 4.0"}),e.jsx("span",{className:"tech-badge-footer",children:"WebXR Ready"})]})]})]}),e.jsx("style",{children:`
        .footer-section {
          background-color: #02040a;
          border-top: 1px solid rgba(0, 240, 255, 0.2);
          padding: 60px 0 30px;
          position: relative;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1.2fr 1fr;
          gap: 40px;
          margin-bottom: 48px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .brand-icon-hex-small {
          width: 32px;
          height: 32px;
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid var(--neon-cyan);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--neon-cyan);
          font-weight: 900;
          font-family: var(--font-display);
        }

        .footer-brand-title {
          font-size: 1.1rem;
          color: #ffffff;
          font-weight: 800;
        }

        .footer-brand-sub {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--neon-cyan);
        }

        .footer-brand-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.65;
          max-width: 380px;
        }

        .footer-col-title {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          color: var(--neon-magenta);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .footer-links-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links-list li a, .footer-links-list li span {
          color: var(--text-secondary);
          font-size: 0.88rem;
          transition: color var(--transition-fast);
        }

        .footer-links-list li a:hover {
          color: var(--neon-cyan);
        }

        .btn-back-to-top {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: rgba(14, 21, 46, 0.8);
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-radius: var(--radius-md);
          color: #ffffff;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all var(--transition-normal);
        }

        .btn-back-to-top:hover {
          background: rgba(0, 240, 255, 0.15);
          border-color: var(--neon-cyan);
          box-shadow: 0 0 20px rgba(0, 240, 255, 0.3);
          transform: translateY(-3px);
        }

        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-copyright {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-tech-meta {
          display: flex;
          gap: 8px;
        }

        .tech-badge-footer {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #64748b;
          background: rgba(255, 255, 255, 0.04);
          padding: 3px 8px;
          border-radius: 4px;
        }

        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 550px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function X(){const[i,s]=x.useState(null),o=()=>{window.print()};return e.jsxs("div",{className:"portfolio-app",children:[e.jsx("div",{className:"print-dossier-header print-only",children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsx("div",{className:"brand-title",children:"CENTRO DE PROTOTIPADO & STEAM"}),e.jsx("div",{className:"brand-sub",children:"Unidad Central del Valle del Cauca (UCEVA) — Portafolio Tecnológico e Innovación"})]}),e.jsxs("div",{style:{textAlign:"right",fontSize:"9pt",color:"#94a3b8"},children:[e.jsx("span",{children:"Industria 4.0 & 5.0"}),e.jsx("br",{}),e.jsx("span",{children:"Año: 2023 – Presente"})]})]})}),e.jsx(L,{onPrintPdf:o}),e.jsxs("main",{children:[e.jsx(V,{onPrintPdf:o}),e.jsx(F,{centerInfo:w.centerInfo}),e.jsx(B,{projects:w.projects,onSelectProject:n=>s(n)}),e.jsx(W,{equipment:w.equipment}),e.jsx(q,{team:w.team}),e.jsx(H,{}),e.jsx(G,{onPrintPdf:o})]}),e.jsx(_,{}),i&&e.jsx(U,{project:i,onClose:()=>s(null)})]})}P.createRoot(document.getElementById("root")).render(e.jsx(M.StrictMode,{children:e.jsx(X,{})}));
