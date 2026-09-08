import{r as m,j as e,p as f,R as j,a as y}from"./index-C84yFZP5.js";function N({onPrintPdf:i}){const[r,o]=m.useState(!1),[s,t]=m.useState(!1),[c,l]=m.useState("hero-opt2");m.useEffect(()=>{const a=()=>{o(window.scrollY>40);const p=["hero-opt2","about-opt2","lines-opt2","bento-opt2","equipment-opt2","team-opt2","impact-opt2","contact-opt2"],h=window.scrollY+250;for(const x of p){const b=document.getElementById(x);if(b){const g=b.offsetTop,v=b.offsetHeight;if(h>=g&&h<g+v){l(x);break}}}};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]);const n=[{id:"hero-opt2",label:"Inicio"},{id:"about-opt2",label:"Laboratorio"},{id:"lines-opt2",label:"Líneas I+D"},{id:"bento-opt2",label:"Proyectos"},{id:"equipment-opt2",label:"Equipamiento"},{id:"team-opt2",label:"Equipo"},{id:"impact-opt2",label:"Impacto"},{id:"contact-opt2",label:"Contacto"}],d=a=>{t(!1);const p=document.getElementById(a);p&&p.scrollIntoView({behavior:"smooth"})};return e.jsxs("header",{className:`lab-nav-header no-print ${r?"scrolled":""}`,children:[e.jsxs("div",{className:"bento-container lab-nav-inner",children:[e.jsxs("a",{href:"#hero-opt2",className:"lab-brand-link",onClick:a=>{a.preventDefault(),d("hero-opt2")},children:[e.jsxs("div",{className:"lab-brand-logo",children:[e.jsx("span",{className:"logo-bracket",children:"["}),e.jsx("span",{className:"logo-symbol",children:"STEAM"}),e.jsx("span",{className:"logo-bracket",children:"]"})]}),e.jsxs("div",{className:"lab-brand-meta",children:[e.jsx("span",{className:"meta-title",children:"CENTRO DE PROTOTIPADO"}),e.jsx("span",{className:"meta-sub",children:"UCEVA • INNOVATION LAB"})]})]}),e.jsx("nav",{className:"lab-nav-links-desktop",children:n.map(a=>e.jsxs("button",{onClick:()=>d(a.id),className:`lab-nav-link ${c===a.id?"active":""}`,children:[a.label,c===a.id&&e.jsx("span",{className:"active-pip"})]},a.id))}),e.jsxs("div",{className:"lab-nav-actions",children:[e.jsxs("button",{onClick:i,className:"lab-print-btn",title:"Exportar Dossier PDF Editorial",children:[e.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",children:[e.jsx("polyline",{points:"6 9 6 2 18 2 18 9"}),e.jsx("path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"}),e.jsx("rect",{x:"6",y:"14",width:"12",height:"8"})]}),e.jsx("span",{children:"Dossier PDF"})]}),e.jsx("button",{className:"mobile-toggle-btn",onClick:()=>t(!s),"aria-label":"Menú móvil",children:e.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:s?e.jsx("path",{d:"M18 6L6 18M6 6l12 12"}):e.jsx("path",{d:"M4 6h16M4 12h16M4 18h16"})})})]})]}),s&&e.jsxs("div",{className:"lab-mobile-menu",children:[n.map(a=>e.jsx("button",{onClick:()=>d(a.id),className:`lab-mobile-link ${c===a.id?"active":""}`,children:a.label},a.id)),e.jsx("button",{onClick:()=>{t(!1),i()},className:"lab-print-btn",style:{width:"100%",marginTop:"12px"},children:"Imprimir / Guardar en PDF"})]}),e.jsx("style",{children:`
        .lab-nav-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 74px;
          z-index: 1000;
          background: transparent;
          transition: all 0.3s ease;
        }

        .lab-nav-header.scrolled {
          background: rgba(7, 9, 14, 0.92);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
        }

        .lab-nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }

        .lab-brand-link {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .lab-brand-logo {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 1.1rem;
          color: var(--lab-accent-cyan);
          letter-spacing: 0.05em;
          display: flex;
          align-items: center;
        }

        .logo-bracket {
          color: #6366F1;
        }

        .lab-brand-meta {
          display: flex;
          flex-direction: column;
        }

        .meta-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
          color: #FFFFFF;
        }

        .meta-sub {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: #94A3B8;
          letter-spacing: 0.12em;
        }

        .lab-nav-links-desktop {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .lab-nav-link {
          position: relative;
          padding: 8px 14px;
          color: #94A3B8;
          font-size: 0.88rem;
          font-weight: 600;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .lab-nav-link:hover {
          color: #FFFFFF;
        }

        .lab-nav-link.active {
          color: var(--lab-accent-cyan);
        }

        .active-pip {
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 2px;
          background: var(--lab-accent-cyan);
          box-shadow: 0 0 8px var(--lab-accent-cyan);
        }

        .lab-nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .lab-print-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 18px;
          background: rgba(0, 245, 212, 0.1);
          border: 1px solid rgba(0, 245, 212, 0.35);
          border-radius: 30px;
          color: var(--lab-accent-cyan);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .lab-print-btn:hover {
          background: var(--lab-accent-cyan);
          color: #07090E;
          box-shadow: 0 0 20px rgba(0, 245, 212, 0.4);
        }

        .mobile-toggle-btn {
          display: none;
          color: #FFFFFF;
          padding: 6px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          border: none;
        }

        .lab-mobile-menu {
          display: none;
          background: rgba(7, 9, 14, 0.98);
          border-bottom: 1px solid rgba(0, 245, 212, 0.3);
          padding: 20px 24px;
        }

        .lab-mobile-link {
          display: block;
          width: 100%;
          text-align: left;
          padding: 10px 0;
          font-size: 1rem;
          color: #94A3B8;
          font-weight: 600;
          border: none;
          background: none;
        }

        .lab-mobile-link.active {
          color: var(--lab-accent-cyan);
        }

        @media (max-width: 960px) {
          .lab-nav-links-desktop { display: none; }
          .mobile-toggle-btn { display: flex; }
          .lab-mobile-menu { display: block; }
        }
      `})]})}const u=[{title:"Simulador VR: Museo del Dengue",category:"Realidad Virtual & Salud Pública",video:"/assets/opt2_videos/museo_del_dengue_vr.mp4",poster:"/assets/posters/simulador_museo_del_dengue_vr.jpg",badge:"Impacto Comunitario"},{title:"Campus UCEVA Realidad Mixta",category:"Spatial Computing & Hologramas",video:"/assets/opt2_videos/campus_uceva_mr_1.mp4",poster:"/assets/posters/campus_uceva_mr_1.jpg",badge:"Meta Quest 3 Passthrough"},{title:"Aeronaves No Tripuladas / Drones",category:"Hardware & Aviónica Pixhawk",video:"/assets/opt2_videos/drones_aeronautica.mp4",poster:"/assets/posters/construccion_aeronaves_drones.jpg",badge:"Ingeniería Aeroespacial"},{title:"Motion Tracker con IA",category:"Computer Vision & Biomecánica",video:"/assets/opt2_videos/motion_tracker_ia.mp4",poster:"/assets/posters/motion_tracker_ia.jpg",badge:"Deep Learning en Vivo"}];function w({onPrintPdf:i}){const[r,o]=m.useState(0),s=m.useRef(null);m.useEffect(()=>{const l=setInterval(()=>{o(n=>(n+1)%u.length)},6e3);return()=>clearInterval(l)},[]);const t=u[r],c=l=>{const n=document.getElementById(l);n&&n.scrollIntoView({behavior:"smooth"})};return e.jsxs("section",{id:"hero-opt2",className:"hero-opt2-wrap",children:[e.jsxs("div",{className:"telemetry-bar-top no-print",children:[e.jsxs("div",{className:"telemetry-item",children:[e.jsx("span",{className:"telemetry-dot"}),e.jsx("span",{children:"LAB STATUS: ONLINE // PROTO-01"})]}),e.jsx("div",{className:"telemetry-item",children:e.jsx("span",{children:"LAT: 4.0847° N // LON: 76.1954° W (TULUÁ - VALLE)"})})]}),e.jsxs("div",{className:"bento-container hero-opt2-inner",children:[e.jsxs("div",{className:"hero-opt2-content",children:[e.jsxs("div",{className:"lab-badge animate-pulse-cyan",children:[e.jsx("span",{className:"telemetry-dot"}),e.jsx("span",{children:"LABORATORIO DE INNOVACIÓN & PROTOTIPADO"})]}),e.jsxs("h1",{className:"hero-opt2-title",children:["Donde la Ciencia Aplicada ",e.jsx("br",{}),"se convierte en ",e.jsx("span",{className:"lab-text-gradient",children:"Realidad Tangible"})]}),e.jsxs("p",{className:"hero-opt2-lead",children:["Ecosistema tecnológico de la ",e.jsx("strong",{children:"UCEVA"})," dedicado a la investigación de vanguardia, computación espacial, desarrollo de inteligencia artificial y fabricación digital para la ",e.jsx("strong",{children:"Industria 4.0 y 5.0"}),"."]}),e.jsxs("div",{className:"hero-opt2-actions",children:[e.jsxs("button",{onClick:()=>c("bento-opt2"),className:"lab-btn-primary",children:[e.jsx("span",{children:"Explorar Desarrollos"}),e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]})]}),e.jsxs("button",{onClick:()=>c("lines-opt2"),className:"lab-btn-outline",children:[e.jsx("span",{children:"Líneas de Desarrollo"}),e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[e.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),e.jsx("rect",{x:"14",y:"14",width:"7",height:"7"}),e.jsx("rect",{x:"3",y:"14",width:"7",height:"7"})]})]})]}),e.jsxs("div",{className:"hero-metrics-strip",children:[e.jsxs("div",{className:"metric-cell",children:[e.jsx("span",{className:"metric-val lab-text-gradient",children:"14+"}),e.jsx("span",{className:"metric-sub",children:"Proyectos de I+D"})]}),e.jsx("div",{className:"metric-separator"}),e.jsxs("div",{className:"metric-cell",children:[e.jsx("span",{className:"metric-val text-cyan",children:"6"}),e.jsx("span",{className:"metric-sub",children:"Líneas Tecnológicas"})]}),e.jsx("div",{className:"metric-separator"}),e.jsxs("div",{className:"metric-cell",children:[e.jsx("span",{className:"metric-val text-amber",children:"100%"}),e.jsx("span",{className:"metric-sub",children:"Prototipado In-House"})]})]})]}),e.jsx("div",{className:"hero-opt2-portal",children:e.jsxs("div",{className:"portal-frame glass-panel",children:[e.jsx("div",{className:"hud-corner-bracket hud-tl"}),e.jsx("div",{className:"hud-corner-bracket hud-tr"}),e.jsx("div",{className:"hud-corner-bracket hud-bl"}),e.jsx("div",{className:"hud-corner-bracket hud-br"}),e.jsxs("div",{className:"portal-header",children:[e.jsxs("span",{className:"portal-live-tag",children:[e.jsx("span",{className:"telemetry-dot"}),"SHOWCASE EN VIVO"]}),e.jsxs("span",{className:"portal-index",children:[r+1," / ",u.length]})]}),e.jsxs("div",{className:"portal-media-box",children:[e.jsx("video",{ref:s,src:t.video,poster:t.poster,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"portal-video"},t.video),e.jsx("div",{className:"portal-gradient-scrim"})]}),e.jsxs("div",{className:"portal-footer",children:[e.jsx("span",{className:"lab-badge lab-badge-indigo",children:t.badge}),e.jsx("h3",{className:"portal-title",children:t.title}),e.jsx("p",{className:"portal-category",children:t.category}),e.jsx("div",{className:"portal-dots-row",children:u.map((l,n)=>e.jsx("button",{onClick:()=>o(n),className:`portal-dot-btn ${r===n?"active":""}`,"aria-label":`Ver proyecto destacado ${n+1}`},n))})]})]})})]}),e.jsxs("div",{className:"scroll-cue no-print",onClick:()=>c("about-opt2"),children:[e.jsx("div",{className:"mouse-wheel-icon",children:e.jsx("span",{className:"wheel-dot"})}),e.jsx("span",{className:"scroll-cue-text",children:"DESLIZAR PARA EXPLORAR"})]}),e.jsx("style",{children:`
        .hero-opt2-wrap {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          padding-bottom: 70px;
          background: radial-gradient(circle at 70% 30%, rgba(99, 102, 241, 0.12) 0%, transparent 50%),
                      radial-gradient(circle at 20% 80%, rgba(0, 245, 212, 0.08) 0%, transparent 45%),
                      #07090e;
        }

        .telemetry-bar-top {
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          padding: 0 40px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #64748B;
          letter-spacing: 0.1em;
          pointer-events: none;
        }

        .telemetry-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .telemetry-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--lab-accent-cyan);
          box-shadow: 0 0 8px var(--lab-accent-cyan);
        }

        .hero-opt2-inner {
          display: grid;
          grid-template-columns: 1.15fr 0.95fr;
          gap: 50px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-opt2-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .hero-opt2-title {
          font-size: clamp(2.4rem, 5vw, 4rem);
          line-height: 1.12;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .hero-opt2-lead {
          font-size: clamp(1rem, 1.8vw, 1.18rem);
          color: #94A3B8;
          line-height: 1.7;
          max-width: 580px;
        }

        .hero-opt2-lead strong {
          color: #FFFFFF;
        }

        .hero-opt2-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .lab-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #00F5D4 0%, #6366F1 100%);
          color: #07090E;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: var(--lab-radius-md);
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 25px rgba(0, 245, 212, 0.35);
        }

        .lab-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 35px rgba(0, 245, 212, 0.6);
        }

        .lab-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 24px;
          background: rgba(18, 24, 38, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: var(--lab-radius-md);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .lab-btn-outline:hover {
          border-color: var(--lab-accent-cyan);
          background: rgba(0, 245, 212, 0.1);
          color: var(--lab-accent-cyan);
        }

        .hero-metrics-strip {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: 16px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .metric-cell {
          display: flex;
          flex-direction: column;
        }

        .metric-val {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 1;
        }

        .metric-sub {
          font-size: 0.75rem;
          color: #64748B;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 4px;
          font-weight: 600;
        }

        .metric-separator {
          width: 1px;
          height: 32px;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Portal Card (Right) */
        .portal-frame {
          position: relative;
          background: rgba(12, 16, 26, 0.85);
          border: 1px solid rgba(0, 245, 212, 0.3);
          border-radius: var(--lab-radius-xl);
          padding: 24px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8), 0 0 30px rgba(99, 102, 241, 0.2);
        }

        .portal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .portal-live-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--lab-accent-cyan);
        }

        .portal-index {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #64748B;
        }

        .portal-media-box {
          position: relative;
          width: 100%;
          height: 260px;
          border-radius: var(--lab-radius-md);
          overflow: hidden;
          background: #030408;
        }

        .portal-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .portal-gradient-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(7, 9, 14, 0.8) 100%);
          pointer-events: none;
        }

        .portal-footer {
          margin-top: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .portal-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: #FFFFFF;
        }

        .portal-category {
          font-size: 0.88rem;
          color: #94A3B8;
        }

        .portal-dots-row {
          display: flex;
          gap: 8px;
          margin-top: 12px;
        }

        .portal-dot-btn {
          width: 24px;
          height: 4px;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .portal-dot-btn.active {
          width: 40px;
          background: var(--lab-accent-cyan);
          box-shadow: 0 0 8px var(--lab-accent-cyan);
        }

        .scroll-cue {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .scroll-cue:hover {
          opacity: 1;
        }

        .mouse-wheel-icon {
          width: 20px;
          height: 32px;
          border: 2px solid var(--lab-accent-cyan);
          border-radius: 12px;
          position: relative;
        }

        .wheel-dot {
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: var(--lab-accent-cyan);
          animation: scanline 1.8s infinite;
        }

        .scroll-cue-text {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          color: #64748B;
          letter-spacing: 0.15em;
        }

        @media (max-width: 960px) {
          .hero-opt2-inner {
            grid-template-columns: 1fr;
          }
          .telemetry-bar-top {
            display: none;
          }
        }
      `})]})}function k({centerInfo:i}){const r=[{num:"01",title:"Investigación Aplicada & Prototipado Físico",desc:"Transformamos conceptos teóricos en circuitos impresos (PCBs), piezas mecánicas en manufactura aditiva y modelos funcionales listos para validación de campo."},{num:"02",title:"Computación Espacial & Realidades Extendidas",desc:"Desarrollamos entornos de Realidad Virtual inmersiva (VR), Realidad Aumentada (WebAR) y Realidad Mixta (MR) con Spatial Anchors y Passthrough a todo color."},{num:"03",title:"Inteligencia Artificial & Visión por Computador",desc:"Implementamos algoritmos de Deep Learning, estimación de poses cinemáticas (Motion Tracking) y análisis biométrico aplicado a la educación y la industria."},{num:"04",title:"Sostenibilidad & Economía Circular 3D",desc:"Diseñamos maquinaria propia como la minitrituradora de plástico PET/PLA para reintroducir residuos poliméricos en el ciclo de impresión 3D del laboratorio."}];return e.jsxs("section",{id:"about-opt2",className:"about-opt2-wrap",children:[e.jsxs("div",{className:"bento-container",children:[e.jsxs("div",{className:"lab-section-header",children:[e.jsx("span",{className:"lab-section-tag",children:"< MODELO DE INNOVACIÓN Y PROYECCIÓN />"}),e.jsxs("h2",{className:"lab-section-title",children:["El Laboratorio de ",e.jsx("span",{className:"lab-text-gradient",children:"Innovación & Prototipado"})]}),e.jsx("p",{className:"lab-section-sub",children:"Un espacio interdisciplinario creado en la UCEVA para acelerar el desarrollo tecnológico regional y formar el talento del futuro."})]}),e.jsxs("div",{className:"about-opt2-grid",children:[e.jsxs("div",{className:"about-lab-narrative glass-panel",children:[e.jsx("div",{className:"hud-corner-bracket hud-tl"}),e.jsx("div",{className:"hud-corner-bracket hud-tr"}),e.jsx("div",{className:"hud-corner-bracket hud-bl"}),e.jsx("div",{className:"hud-corner-bracket hud-br"}),e.jsxs("div",{className:"narrative-badge-wrap",children:[e.jsx("span",{className:"lab-badge",children:"Fundación 2023 // UCEVA"}),e.jsx("span",{className:"lab-badge lab-badge-indigo",children:"Industria 4.0 & 5.0"})]}),e.jsx("h3",{className:"narrative-heading",children:"Respuesta Tecnológica para la Comunidad Académica & el Sector Productivo"}),e.jsx("p",{className:"narrative-p",children:i.description}),e.jsxs("p",{className:"narrative-p",children:["Nuestro enfoque metodológico une la ",e.jsx("strong",{children:"física experimental"}),", la ",e.jsx("strong",{children:"ingeniería mecatrónica"})," y la ",e.jsx("strong",{children:"comunicación transmedia"})," para diseñar soluciones de alta fidelidad tecnológica orientadas a salud pública, agricultura de precisión y educación inmersiva."]}),e.jsx("div",{className:"narrative-tags-box",children:i.domains.map((o,s)=>e.jsxs("span",{className:"narrative-domain-chip",children:[e.jsx("span",{className:"chip-dot"}),o]},s))})]}),e.jsx("div",{className:"about-principles-list",children:r.map((o,s)=>e.jsxs("div",{className:"principle-item-card glass-panel",children:[e.jsx("span",{className:"principle-num",children:o.num}),e.jsxs("div",{className:"principle-body",children:[e.jsx("h4",{className:"principle-title",children:o.title}),e.jsx("p",{className:"principle-desc",children:o.desc})]})]},s))})]})]}),e.jsx("style",{children:`
        .about-opt2-wrap {
          padding: 100px 0;
          background: linear-gradient(180deg, #07090e 0%, #0c1017 50%, #07090e 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          position: relative;
        }

        .lab-section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .lab-section-tag {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--lab-accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-weight: 700;
          display: block;
          margin-bottom: 12px;
        }

        .lab-section-title {
          font-size: clamp(2rem, 4vw, 3.2rem);
          font-weight: 900;
          margin-bottom: 16px;
        }

        .lab-section-sub {
          max-width: 680px;
          margin: 0 auto;
          color: #94A3B8;
          font-size: 1.05rem;
          line-height: 1.65;
        }

        .about-opt2-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 36px;
        }

        .about-lab-narrative {
          position: relative;
          padding: 40px;
          background: rgba(12, 16, 26, 0.85);
          border: 1px solid rgba(0, 245, 212, 0.25);
          border-radius: var(--lab-radius-xl);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .narrative-badge-wrap {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .narrative-heading {
          font-size: 1.5rem;
          color: #FFFFFF;
          line-height: 1.3;
          margin-top: 6px;
        }

        .narrative-p {
          font-size: 1rem;
          color: #94A3B8;
          line-height: 1.75;
        }

        .narrative-p strong {
          color: #FFFFFF;
        }

        .narrative-tags-box {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 10px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .narrative-domain-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: #CBD5E1;
        }

        .chip-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--lab-accent-cyan);
        }

        .about-principles-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .principle-item-card {
          display: flex;
          gap: 20px;
          padding: 22px 24px;
          background: rgba(14, 18, 30, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: var(--lab-radius-md);
          transition: all 0.25s ease;
        }

        .principle-item-card:hover {
          border-color: rgba(0, 245, 212, 0.35);
          background: rgba(18, 24, 40, 0.85);
          transform: translateX(6px);
        }

        .principle-num {
          font-family: var(--font-mono);
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--lab-accent-cyan);
          line-height: 1;
        }

        .principle-title {
          font-size: 1.05rem;
          color: #FFFFFF;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .principle-desc {
          font-size: 0.88rem;
          color: #94A3B8;
          line-height: 1.55;
        }

        @media (max-width: 960px) {
          .about-opt2-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function F({onFilterCategory:i}){const r=[{id:"XR",title:"Realidades Extendidas (XR)",sub:"VR / WebAR / Realidad Mixta (MR)",count:"4 Proyectos",desc:"Desarrollo de experiencias inmersivas con Meta Quest, Spatial Anchors y WebXR sin instalación previa.",icon:"🥽",techs:["Unity 3D","Unreal Engine","WebXR","Spatial Mapping","C#"],bgGrad:"linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(244, 63, 94, 0.15))"},{id:"3D",title:"Fotogrametría & Gemelos Digitales",sub:"Mapeo de Campus & Avatares 3D",count:"2 Proyectos",desc:"Captura aerofotogramétrica y escaneo multipunto para reconstrucción de infraestructura y humanos digitales.",icon:"🌐",techs:["Agisoft Metashape","Drones DJI","Texturas 8K","Blender"],bgGrad:"linear-gradient(135deg, rgba(0, 245, 212, 0.15), rgba(99, 102, 241, 0.15))"},{id:"IA",title:"Inteligencia Artificial & Visión",sub:"Motion Tracking & Neuromarketing",count:"2 Proyectos",desc:"Modelos de Deep Learning para seguimiento cinemático de articulaciones y análisis biométrico de fijación visual.",icon:"🧠",techs:["Python","OpenCV","MediaPipe","TensorFlow","Eye Tracking"],bgGrad:"linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(244, 63, 94, 0.15))"},{id:"AERO",title:"Aeronáutica & Drones (UAVs)",sub:"Aviónica Pixhawk & Prototipado",count:"1 Proyecto",desc:"Diseño aerodinámico, integración de telemetría de largo alcance y chasis en compuestos de fibra de carbono.",icon:"🛸",techs:["CAD Aeronáutico","Pixhawk","ArduPilot","Telemetría RF"],bgGrad:"linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(0, 245, 212, 0.15))"},{id:"IOT",title:"Electrónica, IoT & Smart Cities",sub:"Placas PCBs & Estación Meteorológica",count:"2 Proyectos",desc:"Ruteo de hardware personalizado, redes de sensores LoRaWAN autónomas alimentadas con energía solar.",icon:"⚡",techs:["KiCad","ESP32","LoRaWAN","SMD Reflow","MQTT Cloud"],bgGrad:"linear-gradient(135deg, rgba(0, 245, 212, 0.15), rgba(245, 158, 11, 0.15))"},{id:"FAB",title:"Diseño & Fabricación Digital",sub:"Minitrituradora & Manufactura 3D",count:"2 Proyectos",desc:"Maquinaria propia para economía circular de polímeros y manufactura aditiva técnica FDM/SLA.",icon:"⚙️",techs:["SolidWorks","CNC Láser/Plasma","Impresión 3D","FEA Analysis"],bgGrad:"linear-gradient(135deg, rgba(244, 63, 94, 0.15), rgba(99, 102, 241, 0.15))"}],o=s=>{i(s);const t=document.getElementById("bento-opt2");t&&t.scrollIntoView({behavior:"smooth"})};return e.jsxs("section",{id:"lines-opt2",className:"lines-opt2-wrap",children:[e.jsxs("div",{className:"bento-container",children:[e.jsxs("div",{className:"lab-section-header",children:[e.jsx("span",{className:"lab-section-tag",children:"< DOMINIOS DE ESPECIALIZACIÓN />"}),e.jsxs("h2",{className:"lab-section-title",children:["Líneas de ",e.jsx("span",{className:"lab-text-gradient",children:"Desarrollo Tecnológico"})]}),e.jsx("p",{className:"lab-section-sub",children:"Explora las capacidades de investigación aplicada y desarrollo experimental del Centro STEAM."})]}),e.jsx("div",{className:"lines-cards-grid",children:r.map(s=>e.jsxs("div",{className:"line-item-tile glass-panel",onClick:()=>o(s.id),children:[e.jsx("div",{className:"hud-corner-bracket hud-tl"}),e.jsx("div",{className:"hud-corner-bracket hud-tr"}),e.jsx("div",{className:"hud-corner-bracket hud-bl"}),e.jsx("div",{className:"hud-corner-bracket hud-br"}),e.jsxs("div",{className:"line-tile-header",children:[e.jsx("div",{className:"line-icon-badge",children:s.icon}),e.jsx("span",{className:"line-count-pill",children:s.count})]}),e.jsxs("div",{className:"line-tile-body",children:[e.jsx("h3",{className:"line-title",children:s.title}),e.jsx("span",{className:"line-sub",children:s.sub}),e.jsx("p",{className:"line-desc",children:s.desc})]}),e.jsxs("div",{className:"line-tile-footer",children:[e.jsx("div",{className:"line-tech-row",children:s.techs.map((t,c)=>e.jsx("span",{className:"line-tech-badge",children:t},c))}),e.jsxs("div",{className:"line-cta-link",children:[e.jsx("span",{children:"Ver Proyectos"}),e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]},s.id))})]}),e.jsx("style",{children:`
        .lines-opt2-wrap {
          padding: 100px 0;
          background: #07090e;
          position: relative;
        }

        .lines-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .line-item-tile {
          position: relative;
          padding: 28px;
          background: rgba(12, 16, 26, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--lab-radius-lg);
          display: flex;
          flex-direction: column;
          gap: 16px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .line-item-tile:hover {
          border-color: var(--lab-accent-cyan);
          background: rgba(16, 22, 36, 0.95);
          transform: translateY(-5px);
          box-shadow: 0 16px 35px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 245, 212, 0.2);
        }

        .line-tile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .line-icon-badge {
          font-size: 1.8rem;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 245, 212, 0.08);
          border: 1px solid rgba(0, 245, 212, 0.25);
          border-radius: var(--lab-radius-md);
        }

        .line-count-pill {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--lab-accent-cyan);
          background: rgba(0, 245, 212, 0.1);
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid rgba(0, 245, 212, 0.2);
        }

        .line-title {
          font-size: 1.25rem;
          color: #FFFFFF;
          font-weight: 800;
          margin-bottom: 4px;
        }

        .line-sub {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #A5B4FC;
          display: block;
          margin-bottom: 8px;
        }

        .line-desc {
          font-size: 0.9rem;
          color: #94A3B8;
          line-height: 1.6;
        }

        .line-tile-footer {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .line-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .line-tech-badge {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: #CBD5E1;
          background: rgba(255, 255, 255, 0.04);
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .line-cta-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--lab-accent-cyan);
        }

        .line-item-tile:hover .line-cta-link svg {
          transform: translateX(4px);
        }

        @media (max-width: 992px) {
          .lines-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .lines-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}const C={"vr-museo-dengue":"/assets/opt2_videos/museo_del_dengue_vr.mp4","mr-campus-uceva":"/assets/opt2_videos/campus_uceva_mr_1.mp4","vr-acoso-callejero":"/assets/opt2_videos/acoso_callejero_vr.mp4","prototipado-aeronaves-drones":"/assets/opt2_videos/drones_aeronautica.mp4","ia-motion-tracker":"/assets/opt2_videos/motion_tracker_ia.mp4","ar-web-divulgacion":"/assets/opt2_videos/web_ar_divulgacion.mp4"};function A({projects:i,selectedCategory:r,onSelectCategory:o,onOpenProject:s}){const[t,c]=m.useState(""),l=[{id:"ALL",label:"Todos los Desarrollos"},{id:"XR",label:"Realidades Extendidas (XR)"},{id:"IA",label:"Inteligencia Artificial"},{id:"3D",label:"Fotogrametría & 3D"},{id:"AERO",label:"Aeronáutica & Drones"},{id:"IOT",label:"Electrónica & IoT"},{id:"FAB",label:"Fabricación Digital"}],n=m.useMemo(()=>i.filter(a=>{let p=!0;r!=="ALL"&&(r==="XR"?p=a.category.includes("VR")||a.category.includes("AR")||a.category.includes("MR")||a.category.includes("Realidad")||a.category.includes("360"):r==="IA"?p=a.category.includes("IA")||a.category.includes("Inteligencia"):r==="3D"?p=a.category.includes("Fotogrametría")||a.category.includes("360"):r==="AERO"?p=a.category.includes("Aeronáutica")||a.category.includes("Drones"):r==="IOT"?p=a.category.includes("IoT")||a.category.includes("Electrónica"):r==="FAB"&&(p=a.category.includes("Diseño")||a.category.includes("Fabricación")));let h=!0;if(t.trim()!==""){const x=t.toLowerCase();h=a.title.toLowerCase().includes(x)||a.fullDesc.toLowerCase().includes(x)||a.shortDesc.toLowerCase().includes(x)||a.role.toLowerCase().includes(x)||a.techStack.some(b=>b.toLowerCase().includes(x))}return p&&h}),[i,r,t]),d=(a,p)=>a===0?"span-featured-hero":a===1?"span-featured-side":a===2||a===3?"span-wide":a===4?"span-featured-hero":a===5?"span-featured-side":"span-standard";return e.jsx("section",{id:"bento-opt2",className:"bento-section",children:e.jsxs("div",{className:"bento-container",children:[e.jsxs("div",{className:"lab-section-header",children:[e.jsx("span",{className:"lab-section-tag",children:"< REPOSITORIO DE DESARROLLOS />"}),e.jsxs("h2",{className:"lab-section-title",children:["Portafolio ",e.jsx("span",{className:"lab-text-gradient",children:"Bento Showcase"})]}),e.jsx("p",{className:"lab-section-sub",children:"Composición interactiva de proyectos y prototipos con integración de video bajo demanda, telemetría y especificaciones de ingeniería."})]}),e.jsxs("div",{className:"bento-filter-ribbon no-print",children:[e.jsx("div",{className:"bento-filters-group",children:l.map(a=>e.jsx("button",{onClick:()=>o(a.id),className:`bento-filter-pill ${r===a.id?"active":""}`,children:e.jsx("span",{children:a.label})},a.id))}),e.jsxs("div",{className:"bento-search-box",children:[e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"bento-search-icon",children:[e.jsx("circle",{cx:"11",cy:"11",r:"8"}),e.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),e.jsx("input",{type:"text",placeholder:"Buscar en el repositorio...",value:t,onChange:a=>c(a.target.value),className:"bento-search-input"})]})]}),e.jsx("div",{className:"bento-grid",children:n.map((a,p)=>{const h=C[a.id],x=d(p);return e.jsxs("div",{className:`bento-card ${x}`,onClick:()=>s(a),children:[e.jsx("div",{className:"hud-corner-bracket hud-tl"}),e.jsx("div",{className:"hud-corner-bracket hud-tr"}),e.jsx("div",{className:"hud-corner-bracket hud-bl"}),e.jsx("div",{className:"hud-corner-bracket hud-br"}),e.jsxs("div",{className:"bento-media-container",children:[h?e.jsx("video",{src:h,poster:a.previewImage||a.gallery[0],autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",loading:"lazy"}):e.jsx("img",{src:a.previewImage||a.gallery[0],alt:a.title,loading:"lazy",onError:b=>{b.target.src="/assets/projects/slide_render_1.jpg"}}),e.jsx("div",{className:"bento-media-overlay-gradient"}),e.jsxs("div",{className:"bento-card-top-tags",children:[e.jsx("span",{className:"lab-badge",children:a.category}),h&&e.jsxs("span",{className:"bento-video-badge",children:[e.jsx("span",{className:"bento-video-beacon"}),"VIDEO ACTIVO"]})]})]}),e.jsxs("div",{className:"bento-card-content",children:[e.jsx("span",{className:"bento-tag-category",children:a.tag}),e.jsx("h3",{className:"bento-card-title",children:a.title}),e.jsx("p",{className:"bento-card-desc",children:a.shortDesc}),e.jsx("div",{className:"bento-tech-pills-row",children:a.techStack.slice(0,4).map((b,g)=>e.jsx("span",{className:"bento-tech-pill",children:b},g))}),e.jsxs("div",{className:"bento-card-action-bar",children:[e.jsx("span",{children:"Explorar Dossier Técnico"}),e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[e.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),e.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]},a.id)})})]})})}const E={"vr-museo-dengue":"/assets/opt2_videos/museo_del_dengue_vr.mp4","mr-campus-uceva":"/assets/opt2_videos/campus_uceva_mr_1.mp4","vr-acoso-callejero":"/assets/opt2_videos/acoso_callejero_vr.mp4","prototipado-aeronaves-drones":"/assets/opt2_videos/drones_aeronautica.mp4","ia-motion-tracker":"/assets/opt2_videos/motion_tracker_ia.mp4","ar-web-divulgacion":"/assets/opt2_videos/web_ar_divulgacion.mp4"};function D({project:i,onClose:r}){const[o,s]=m.useState(0);if(m.useEffect(()=>{const n=d=>{d.key==="Escape"&&r()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"}},[r]),!i)return null;const t=E[i.id],c=[];t&&c.push({type:"video",src:t,poster:i.previewImage,title:"Demostración en Video"}),i.gallery&&i.gallery.length>0&&i.gallery.forEach((n,d)=>{c.push({type:"image",src:n,title:`Captura ${d+1}`})});const l=c[o]||c[0];return e.jsxs("div",{className:"drawer-backdrop",onClick:r,children:[e.jsxs("div",{className:"drawer-panel",onClick:n=>n.stopPropagation(),children:[e.jsx("div",{className:"hud-corner-bracket hud-tl"}),e.jsx("div",{className:"hud-corner-bracket hud-tr"}),e.jsx("div",{className:"hud-corner-bracket hud-bl"}),e.jsx("div",{className:"hud-corner-bracket hud-br"}),e.jsxs("div",{className:"drawer-header-row",children:[e.jsxs("div",{className:"drawer-header-tags",children:[e.jsx("span",{className:"lab-badge",children:i.category}),e.jsx("span",{className:"lab-badge lab-badge-indigo",children:i.tag}),e.jsxs("span",{className:"drawer-slide-pill",children:["Slide ",i.slide]})]}),e.jsx("button",{onClick:r,className:"drawer-close-btn","aria-label":"Cerrar vista expandida",children:e.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[e.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),e.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),e.jsx("h2",{className:"drawer-project-title",children:i.title}),e.jsxs("div",{className:"drawer-content-grid",children:[e.jsxs("div",{className:"drawer-media-column",children:[e.jsx("div",{className:"drawer-main-media-viewport",children:(l==null?void 0:l.type)==="video"?e.jsxs("div",{className:"drawer-video-wrap",children:[e.jsx("video",{src:l.src,poster:l.poster,controls:!0,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,className:"drawer-media-video"}),e.jsxs("div",{className:"drawer-video-indicator",children:[e.jsx("span",{className:"telemetry-dot"}),e.jsx("span",{children:"CLIP DE VIDEO EN ALTA DEFINICIÓN"})]})]}):e.jsx("img",{src:(l==null?void 0:l.src)||i.previewImage,alt:i.title,className:"drawer-media-img",onError:n=>{n.target.src="/assets/projects/slide_render_1.jpg"}})}),c.length>1&&e.jsx("div",{className:"drawer-thumbs-strip",children:c.map((n,d)=>e.jsxs("button",{onClick:()=>s(d),className:`drawer-thumb-btn ${o===d?"active":""}`,children:[n.type==="video"?e.jsx("div",{className:"thumb-video-tag",children:"VIDEO"}):null,e.jsx("img",{src:n.src,alt:"",className:"thumb-img",onError:a=>{a.target.src="/assets/projects/slide_render_1.jpg"}})]},d))})]}),e.jsxs("div",{className:"drawer-info-column",children:[e.jsxs("div",{className:"drawer-info-block",children:[e.jsx("h4",{className:"drawer-info-subtitle",children:"Resumen del Desarrollo"}),e.jsx("p",{className:"drawer-info-desc",children:i.fullDesc})]}),e.jsxs("div",{className:"drawer-info-block",children:[e.jsx("h4",{className:"drawer-info-subtitle",children:"Rol & Aporte en el Proyecto"}),e.jsxs("div",{className:"drawer-role-card",children:[e.jsx("div",{className:"role-bolt",children:"⚡"}),e.jsx("p",{className:"role-text",children:i.role})]})]}),i.metrics&&Object.keys(i.metrics).length>0&&e.jsxs("div",{className:"drawer-info-block",children:[e.jsx("h4",{className:"drawer-info-subtitle",children:"Métricas & Especificaciones Clave"}),e.jsx("div",{className:"drawer-metrics-list",children:Object.entries(i.metrics).map(([n,d],a)=>e.jsxs("div",{className:"drawer-metric-entry",children:[e.jsxs("span",{className:"metric-entry-label",children:[n.toUpperCase(),":"]}),e.jsx("span",{className:"metric-entry-val",children:d})]},a))})]}),e.jsxs("div",{className:"drawer-info-block",children:[e.jsx("h4",{className:"drawer-info-subtitle",children:"Tecnologías & Herramientas"}),e.jsx("div",{className:"drawer-tech-pills",children:i.techStack.map((n,d)=>e.jsx("span",{className:"drawer-tech-badge",children:n},d))})]})]})]})]}),e.jsx("style",{children:`
        .drawer-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 18px;
        }

        .drawer-header-tags {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .drawer-slide-pill {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #94A3B8;
          background: rgba(255, 255, 255, 0.06);
          padding: 4px 10px;
          border-radius: 6px;
        }

        .drawer-close-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: #CBD5E1;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .drawer-close-btn:hover {
          background: rgba(244, 63, 94, 0.2);
          border-color: #F43F5E;
          color: #FFFFFF;
          transform: rotate(90deg);
        }

        .drawer-project-title {
          font-size: clamp(1.6rem, 3.5vw, 2.3rem);
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 28px;
          line-height: 1.25;
        }

        .drawer-content-grid {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 36px;
        }

        .drawer-main-media-viewport {
          position: relative;
          width: 100%;
          height: 360px;
          background: #030408;
          border-radius: var(--lab-radius-md);
          overflow: hidden;
          border: 1px solid rgba(0, 245, 212, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .drawer-video-wrap {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .drawer-media-video,
        .drawer-media-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          background: #030408;
        }

        .drawer-video-indicator {
          position: absolute;
          bottom: 12px;
          left: 12px;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          background: rgba(0, 0, 0, 0.85);
          border: 1px solid var(--lab-accent-cyan);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--lab-accent-cyan);
        }

        .drawer-thumbs-strip {
          display: flex;
          gap: 10px;
          margin-top: 14px;
          overflow-x: auto;
          padding-bottom: 6px;
        }

        .drawer-thumb-btn {
          position: relative;
          width: 76px;
          height: 54px;
          border-radius: 6px;
          overflow: hidden;
          background: #000;
          border: 2px solid rgba(255, 255, 255, 0.12);
          cursor: pointer;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .drawer-thumb-btn.active {
          border-color: var(--lab-accent-cyan);
          box-shadow: 0 0 12px var(--lab-accent-cyan);
        }

        .thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumb-video-tag {
          position: absolute;
          top: 2px;
          right: 2px;
          font-family: var(--font-mono);
          font-size: 0.55rem;
          font-weight: 800;
          background: var(--lab-accent-cyan);
          color: #000;
          padding: 1px 4px;
          border-radius: 2px;
          z-index: 2;
        }

        .drawer-info-column {
          display: flex;
          flex-direction: column;
          gap: 22px;
        }

        .drawer-info-subtitle {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--lab-accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .drawer-info-desc {
          font-size: 0.95rem;
          color: #CBD5E1;
          line-height: 1.7;
        }

        .drawer-role-card {
          display: flex;
          gap: 12px;
          padding: 14px 16px;
          background: rgba(0, 245, 212, 0.05);
          border: 1px solid rgba(0, 245, 212, 0.2);
          border-radius: var(--lab-radius-sm);
        }

        .role-bolt {
          font-size: 1.1rem;
        }

        .role-text {
          font-size: 0.92rem;
          color: #FFFFFF;
          line-height: 1.55;
        }

        .drawer-metrics-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .drawer-metric-entry {
          display: flex;
          gap: 8px;
          padding: 8px 12px;
          background: rgba(18, 24, 38, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 6px;
          font-size: 0.88rem;
        }

        .metric-entry-label {
          font-family: var(--font-mono);
          color: #A5B4FC;
          font-weight: 700;
          font-size: 0.78rem;
        }

        .metric-entry-val {
          color: #F8FAFC;
        }

        .drawer-tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .drawer-tech-badge {
          padding: 5px 12px;
          background: rgba(99, 102, 241, 0.12);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 20px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: #E0E7FF;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .drawer-content-grid {
            grid-template-columns: 1fr;
          }
          .drawer-main-media-viewport {
            height: 280px;
          }
        }
      `})]})}function I(){const i=[{title:"Granja de Manufactura Aditiva & CNC",span:"span-8",category:"Fabricación Digital",icon:"⚙️",items:["Impresoras 3D FDM de alta velocidad para PLA, PETG, ABS y fibra de carbono","Impresoras de resina SLA/MSLA de ultra-alta resolución milimétrica","Cortadora & Grabadora Láser CO2 CNC de alta precisión","Fresadora CNC de aislamiento de pistas para prototipado rápido de PCBs","Minitrituradora y planta de reciclaje de polímeros para filamento"]},{title:"Laboratorio de Realidades Extendidas",span:"span-4",category:"Spatial Computing",icon:"🥽",items:["Cascos Meta Quest 2 & Meta Quest 3","Tracking manual óptico sin mandos","Cámaras 360° HDR 8K para tours inmersivos","Estaciones de cómputo GPU RTX para render en Unity y Unreal Engine"]},{title:"Plataformas Aeronáuticas & Captura Espacial",span:"span-4",category:"Drones & Sensores",icon:"🛸",items:["Drones DJI para fotogrametría aérea y mapeo de alta resolución","UAVs de desarrollo propio con aviónica Pixhawk y ArduPilot","Escáneres 3D ópticos portátiles para digitalización volumétrica"]},{title:"Estación de Electrónica, IoT & Smart Cities",span:"span-8",category:"Hardware Embebido",icon:"⚡",items:["Estaciones de soldadura por reflujo y montaje superficial SMD","Osciloscopios digitales con analizador lógico de protocolos (I2C, SPI, CAN)","Nodos sensores LoRaWAN, ESP32 y gateways para telemetría ambiental solar","Kits de robótica educativa y brazos robóticos programables"]}];return e.jsxs("section",{id:"equipment-opt2",className:"equipment-opt2-wrap",children:[e.jsxs("div",{className:"bento-container",children:[e.jsxs("div",{className:"lab-section-header",children:[e.jsx("span",{className:"lab-section-tag",children:"< INFRAESTRUCTURA DE LABORATORIO />"}),e.jsxs("h2",{className:"lab-section-title",children:["Equipamiento & ",e.jsx("span",{className:"lab-text-gradient",children:"Capacidades Técnicas"})]}),e.jsx("p",{className:"lab-section-sub",children:"Infraestructura tecnológica instalada en la UCEVA para la experimentación, validación de prototipos y formación avanzada."})]}),e.jsx("div",{className:"equipment-bento-grid",children:i.map((r,o)=>e.jsxs("div",{className:`equipment-bento-card glass-panel ${r.span}`,children:[e.jsx("div",{className:"hud-corner-bracket hud-tl"}),e.jsx("div",{className:"hud-corner-bracket hud-tr"}),e.jsx("div",{className:"hud-corner-bracket hud-bl"}),e.jsx("div",{className:"hud-corner-bracket hud-br"}),e.jsxs("div",{className:"eq-card-header",children:[e.jsx("span",{className:"eq-icon-box",children:r.icon}),e.jsx("span",{className:"lab-badge",children:r.category})]}),e.jsx("h3",{className:"eq-card-title",children:r.title}),e.jsx("ul",{className:"eq-items-list",children:r.items.map((s,t)=>e.jsxs("li",{children:[e.jsx("span",{className:"eq-check",children:"✓"}),e.jsx("span",{children:s})]},t))})]},o))})]}),e.jsx("style",{children:`
        .equipment-opt2-wrap {
          padding: 100px 0;
          background: #07090e;
          position: relative;
        }

        .equipment-bento-grid {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          gap: 24px;
        }

        .equipment-bento-card {
          position: relative;
          padding: 32px;
          background: rgba(12, 16, 26, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--lab-radius-lg);
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: all 0.3s ease;
        }

        .equipment-bento-card:hover {
          border-color: var(--lab-accent-cyan);
          transform: translateY(-4px);
          box-shadow: 0 16px 35px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 245, 212, 0.2);
        }

        .equipment-bento-card.span-8 {
          grid-column: span 8;
        }

        .equipment-bento-card.span-4 {
          grid-column: span 4;
        }

        .eq-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .eq-icon-box {
          font-size: 1.8rem;
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 245, 212, 0.08);
          border: 1px solid rgba(0, 245, 212, 0.25);
          border-radius: var(--lab-radius-md);
        }

        .eq-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #FFFFFF;
        }

        .eq-items-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 6px;
        }

        .eq-items-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 0.92rem;
          color: #CBD5E1;
          line-height: 1.5;
        }

        .eq-check {
          color: var(--lab-accent-cyan);
          font-weight: 900;
          margin-top: 1px;
        }

        @media (max-width: 960px) {
          .equipment-bento-card.span-8,
          .equipment-bento-card.span-4 {
            grid-column: span 12;
          }
        }
      `})]})}function z({team:i}){return e.jsxs("section",{id:"team-opt2",className:"team-opt2-wrap",children:[e.jsxs("div",{className:"bento-container",children:[e.jsxs("div",{className:"lab-section-header",children:[e.jsx("span",{className:"lab-section-tag",children:"< EQUIPO CIENTÍFICO & DE DESARROLLO />"}),e.jsxs("h2",{className:"lab-section-title",children:["Investigadores & ",e.jsx("span",{className:"lab-text-gradient",children:"Equipo del Laboratorio"})]}),e.jsx("p",{className:"lab-section-sub",children:"Científicos, ingenieros especialistas y monitores de semillero que lideran las iniciativas del Centro STEAM UCEVA."})]}),e.jsx("div",{className:"team-opt2-grid",children:i.professionals.map((r,o)=>e.jsxs("div",{className:"researcher-card glass-panel",children:[e.jsx("div",{className:"hud-corner-bracket hud-tl"}),e.jsx("div",{className:"hud-corner-bracket hud-tr"}),e.jsx("div",{className:"hud-corner-bracket hud-bl"}),e.jsx("div",{className:"hud-corner-bracket hud-br"}),e.jsxs("div",{className:"researcher-avatar-wrap",children:[e.jsx("img",{src:r.avatar,alt:r.name,className:"researcher-img",onError:s=>{s.target.style.display="none",s.target.parentElement.classList.add("avatar-fallback-on")}}),e.jsx("div",{className:"researcher-avatar-fallback",children:e.jsx("span",{children:r.name.split(" ").map(s=>s[0]).slice(0,2).join("")})})]}),e.jsxs("div",{className:"researcher-body",children:[e.jsx("span",{className:"researcher-role-badge",children:r.role}),e.jsx("h3",{className:"researcher-name",children:r.name}),e.jsx("div",{className:"researcher-degrees-box",children:r.degrees.map((s,t)=>e.jsx("span",{className:"degree-tag",children:s},t))}),e.jsx("p",{className:"researcher-focus",children:r.focus})]})]},o))}),e.jsxs("div",{className:"monitors-bento-panel glass-panel",children:[e.jsxs("div",{className:"monitors-header",children:[e.jsx("span",{className:"lab-badge lab-badge-indigo",children:"Semillero de Investigación & Apoyo"}),e.jsx("h3",{className:"monitors-title",children:"Monitores, Practicantes & Voluntarios Transmedia"}),e.jsx("p",{className:"monitors-sub",children:"Estudiantes destacados de Ingeniería de Sistemas, Electrónica y Comunicación que participan activamente en los desarrollos."})]}),e.jsx("div",{className:"monitors-grid",children:i.support.map((r,o)=>e.jsxs("div",{className:"monitor-chip",children:[e.jsx("div",{className:"monitor-indicator"}),e.jsxs("div",{children:[e.jsx("h4",{className:"monitor-name",children:r.name}),e.jsxs("p",{className:"monitor-role",children:[r.role," • ",r.degree]})]})]},o))})]})]}),e.jsx("style",{children:`
        .team-opt2-wrap {
          padding: 100px 0;
          background: #07090e;
          position: relative;
        }

        .team-opt2-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 48px;
        }

        .researcher-card {
          position: relative;
          padding: 30px 24px;
          background: rgba(12, 16, 26, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--lab-radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 16px;
          transition: all 0.3s ease;
        }

        .researcher-card:hover {
          border-color: var(--lab-accent-cyan);
          transform: translateY(-5px);
          box-shadow: 0 16px 35px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 245, 212, 0.2);
        }

        .researcher-avatar-wrap {
          position: relative;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          border: 2px solid var(--lab-accent-cyan);
          overflow: hidden;
          background: #030408;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .researcher-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .researcher-avatar-fallback {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--lab-accent-cyan);
          background: #0d1424;
        }

        .researcher-role-badge {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--lab-accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: block;
        }

        .researcher-name {
          font-size: 1.2rem;
          color: #FFFFFF;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .researcher-degrees-box {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 6px;
          margin-bottom: 10px;
        }

        .degree-tag {
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: #A5B4FC;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.25);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .researcher-focus {
          font-size: 0.88rem;
          color: #94A3B8;
          line-height: 1.55;
        }

        .monitors-bento-panel {
          padding: 36px 40px;
          background: rgba(12, 16, 26, 0.85);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: var(--lab-radius-xl);
        }

        .monitors-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .monitors-title {
          font-size: 1.45rem;
          color: #FFFFFF;
          margin-top: 10px;
          margin-bottom: 6px;
        }

        .monitors-sub {
          color: #94A3B8;
          font-size: 0.92rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .monitors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .monitor-chip {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(18, 24, 38, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: var(--lab-radius-sm);
        }

        .monitor-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #6366F1;
          box-shadow: 0 0 6px #6366F1;
          flex-shrink: 0;
        }

        .monitor-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: #FFFFFF;
        }

        .monitor-role {
          font-size: 0.76rem;
          color: #94A3B8;
        }

        @media (max-width: 960px) {
          .team-opt2-grid { grid-template-columns: repeat(2, 1fr); }
          .monitors-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .team-opt2-grid { grid-template-columns: 1fr; }
          .monitors-grid { grid-template-columns: 1fr; }
          .monitors-bento-panel { padding: 24px 20px; }
        }
      `})]})}function S(){const i=[{tag:"Salud Pública & VR",title:"Simulador Museo del Dengue VR",desc:"Estrategia de inmersión para la prevención epidemiológica del mosquito transmisor, implementada en colegios oficiales y comunidades del Valle del Cauca.",img:"/assets/projects/slide_render_9.jpg",metrics:["+1,200 Estudiantes sensibilizados","Validado por docentes del área de ciencias","Interacción 3D en cascos Meta Quest"]},{tag:"Alianza Agroindustrial",title:"Recorrido Científico CENICAFÉ 360°",desc:"Digitalización inmersiva de laboratorios y estaciones de investigación de café para divulgación a nivel nacional mediante WebXR interactivo.",img:"/assets/projects/slide_render_10.jpg",metrics:["Fotografía panorámica HDR 12K","Puntos interactivos de video y datos","Acceso universal desde navegadores"]},{tag:"Proyección Social",title:"Apropiación Social STEAM+",desc:"Capacitación práctica en robótica, impresión 3D y pensamiento computacional para estudiantes de educación media de la región.",img:"/assets/projects/slide_render_11.jpg",metrics:["Talleres prácticos de fabricación","Fomento de vocaciones científicas","Reducción de la brecha digital"]}];return e.jsxs("section",{id:"impact-opt2",className:"impact-opt2-wrap",children:[e.jsxs("div",{className:"bento-container",children:[e.jsxs("div",{className:"lab-section-header",children:[e.jsx("span",{className:"lab-section-tag",children:"< CASOS DE IMPACTO & TRANSFERENCIA />"}),e.jsxs("h2",{className:"lab-section-title",children:["Transferencia ",e.jsx("span",{className:"lab-text-gradient",children:"Científica & Social"})]}),e.jsx("p",{className:"lab-section-sub",children:"Resultados tangibles generados por el Centro STEAM en beneficio de la comunidad educativa y el sector productivo."})]}),e.jsx("div",{className:"cases-bento-grid",children:i.map((r,o)=>e.jsxs("div",{className:"case-study-card glass-panel",children:[e.jsx("div",{className:"hud-corner-bracket hud-tl"}),e.jsx("div",{className:"hud-corner-bracket hud-tr"}),e.jsx("div",{className:"hud-corner-bracket hud-bl"}),e.jsx("div",{className:"hud-corner-bracket hud-br"}),e.jsxs("div",{className:"case-img-box",children:[e.jsx("img",{src:r.img,alt:r.title,className:"case-img",onError:s=>{s.target.src="/assets/projects/slide_render_1.jpg"}}),e.jsx("span",{className:"case-tag-pill",children:r.tag})]}),e.jsxs("div",{className:"case-content",children:[e.jsx("h3",{className:"case-title",children:r.title}),e.jsx("p",{className:"case-desc",children:r.desc}),e.jsx("div",{className:"case-metrics-list",children:r.metrics.map((s,t)=>e.jsxs("div",{className:"case-metric-item",children:[e.jsx("span",{className:"metric-bullet",children:"◆"}),e.jsx("span",{children:s})]},t))})]})]},o))})]}),e.jsx("style",{children:`
        .impact-opt2-wrap {
          padding: 100px 0;
          background: #07090e;
          position: relative;
        }

        .cases-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .case-study-card {
          position: relative;
          background: rgba(12, 16, 26, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--lab-radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .case-study-card:hover {
          border-color: var(--lab-accent-cyan);
          transform: translateY(-5px);
          box-shadow: 0 16px 35px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 245, 212, 0.2);
        }

        .case-img-box {
          position: relative;
          width: 100%;
          height: 220px;
          background: #030408;
          overflow: hidden;
        }

        .case-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .case-study-card:hover .case-img {
          transform: scale(1.05);
        }

        .case-tag-pill {
          position: absolute;
          top: 14px;
          left: 14px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--lab-accent-cyan);
          background: rgba(7, 9, 14, 0.85);
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid rgba(0, 245, 212, 0.3);
          backdrop-filter: blur(8px);
        }

        .case-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .case-title {
          font-size: 1.25rem;
          color: #FFFFFF;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .case-desc {
          font-size: 0.9rem;
          color: #94A3B8;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .case-metrics-list {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .case-metric-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.84rem;
          color: #CBD5E1;
        }

        .metric-bullet {
          color: var(--lab-accent-cyan);
          font-size: 0.7rem;
        }

        @media (max-width: 960px) {
          .cases-bento-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function R({onPrintPdf:i}){const[r,o]=m.useState({name:"",email:"",org:"",message:""}),[s,t]=m.useState(!1),c=l=>{l.preventDefault(),!(!r.name||!r.email||!r.message)&&(t(!0),setTimeout(()=>{t(!1),o({name:"",email:"",org:"",message:""})},5e3))};return e.jsxs("section",{id:"contact-opt2",className:"contact-opt2-wrap",children:[e.jsxs("div",{className:"bento-container",children:[e.jsxs("div",{className:"lab-section-header",children:[e.jsx("span",{className:"lab-section-tag",children:"< COOPERACIÓN & TRANSFERENCIA TECNOLÓGICA />"}),e.jsxs("h2",{className:"lab-section-title",children:["Alianzas, Proyectos & ",e.jsx("span",{className:"lab-text-gradient",children:"Contacto"})]}),e.jsx("p",{className:"lab-section-sub",children:"Inicia un proyecto de investigación aplicada, desarrollo de Realidad Virtual o prototipado 3D con nuestro equipo."})]}),e.jsxs("div",{className:"contact-opt2-grid",children:[e.jsxs("div",{className:"contact-opt2-info",children:[e.jsxs("div",{className:"info-tile glass-panel",children:[e.jsx("div",{className:"hud-corner-bracket hud-tl"}),e.jsx("div",{className:"hud-corner-bracket hud-tr"}),e.jsx("div",{className:"hud-corner-bracket hud-bl"}),e.jsx("div",{className:"hud-corner-bracket hud-br"}),e.jsx("span",{className:"info-tile-icon",children:"🏛️"}),e.jsxs("div",{children:[e.jsx("h4",{className:"info-tile-title",children:"Centro de Prototipado & STEAM"}),e.jsxs("p",{className:"info-tile-desc",children:["Unidad Central del Valle del Cauca (UCEVA)",e.jsx("br",{}),"Cra. 27 A # 48-144, Tuluá, Valle del Cauca, Colombia"]})]})]}),e.jsxs("div",{className:"info-tile glass-panel",children:[e.jsx("div",{className:"hud-corner-bracket hud-tl"}),e.jsx("div",{className:"hud-corner-bracket hud-tr"}),e.jsx("div",{className:"hud-corner-bracket hud-bl"}),e.jsx("div",{className:"hud-corner-bracket hud-br"}),e.jsx("span",{className:"info-tile-icon",children:"📧"}),e.jsxs("div",{children:[e.jsx("h4",{className:"info-tile-title",children:"Correo Institucional"}),e.jsx("p",{className:"info-tile-desc",children:e.jsx("a",{href:"mailto:centrosteam@uceva.edu.co",style:{color:"var(--lab-accent-cyan)",textDecoration:"underline"},children:"centrosteam@uceva.edu.co"})}),e.jsx("span",{className:"info-tile-sub",children:"Línea de Prototipado & Proyectos I+D+i"})]})]}),e.jsxs("div",{className:"info-tile glass-panel",children:[e.jsx("div",{className:"hud-corner-bracket hud-tl"}),e.jsx("div",{className:"hud-corner-bracket hud-tr"}),e.jsx("div",{className:"hud-corner-bracket hud-bl"}),e.jsx("div",{className:"hud-corner-bracket hud-br"}),e.jsx("span",{className:"info-tile-icon",children:"📑"}),e.jsxs("div",{children:[e.jsx("h4",{className:"info-tile-title",children:"Dossier Completo en PDF"}),e.jsx("p",{className:"info-tile-desc",children:"Genera la versión editorial completa para comités de evaluación institucional o alianzas estratégicas."}),e.jsx("button",{onClick:i,className:"lab-btn-primary",style:{marginTop:"12px",padding:"10px 20px",fontSize:"0.85rem"},children:e.jsx("span",{children:"Exportar Dossier PDF"})})]})]})]}),e.jsxs("div",{className:"contact-opt2-form-panel glass-panel no-print",children:[e.jsx("div",{className:"hud-corner-bracket hud-tl"}),e.jsx("div",{className:"hud-corner-bracket hud-tr"}),e.jsx("div",{className:"hud-corner-bracket hud-bl"}),e.jsx("div",{className:"hud-corner-bracket hud-br"}),e.jsx("h3",{className:"form-panel-title",children:"Canal Directo con el Laboratorio"}),s?e.jsxs("div",{className:"form-success-box",children:[e.jsx("span",{style:{fontSize:"2.2rem"},children:"✨"}),e.jsx("h4",{children:"¡Mensaje Registrado con Éxito!"}),e.jsx("p",{children:"Nos comunicaremos con tu entidad para coordinar la iniciativa técnica."})]}):e.jsxs("form",{onSubmit:c,className:"lab-form",children:[e.jsxs("div",{className:"form-field",children:[e.jsx("label",{className:"field-label",children:"Nombre y Apellido *"}),e.jsx("input",{type:"text",required:!0,placeholder:"Ej. Ing. Carlos Mendoza",value:r.name,onChange:l=>o({...r,name:l.target.value}),className:"field-input"})]}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{className:"field-label",children:"Correo Electrónico *"}),e.jsx("input",{type:"email",required:!0,placeholder:"Ej. investigacion@empresa.com",value:r.email,onChange:l=>o({...r,email:l.target.value}),className:"field-input"})]}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{className:"field-label",children:"Entidad o Institución"}),e.jsx("input",{type:"text",placeholder:"Ej. Universidad / Empresa / Centro de Investigación",value:r.org,onChange:l=>o({...r,org:l.target.value}),className:"field-input"})]}),e.jsxs("div",{className:"form-field",children:[e.jsx("label",{className:"field-label",children:"Propuesta o Requerimiento Técnico *"}),e.jsx("textarea",{required:!0,rows:"4",placeholder:"Describe la necesidad tecnológica, proyecto de grado o alianza...",value:r.message,onChange:l=>o({...r,message:l.target.value}),className:"field-textarea"})]}),e.jsxs("button",{type:"submit",className:"lab-btn-primary",style:{width:"100%",marginTop:"6px"},children:[e.jsx("span",{children:"Enviar al Laboratorio"}),e.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",children:[e.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),e.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})]})]})]})]})]}),e.jsx("style",{children:`
        .contact-opt2-wrap {
          padding: 100px 0;
          background: #07090e;
          position: relative;
        }

        .contact-opt2-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 36px;
        }

        .contact-opt2-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .info-tile {
          position: relative;
          padding: 24px;
          background: rgba(12, 16, 26, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--lab-radius-md);
          display: flex;
          gap: 18px;
          align-items: flex-start;
        }

        .info-tile-icon {
          font-size: 1.8rem;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 245, 212, 0.08);
          border: 1px solid rgba(0, 245, 212, 0.25);
          border-radius: var(--lab-radius-sm);
          flex-shrink: 0;
        }

        .info-tile-title {
          font-size: 1.1rem;
          color: #FFFFFF;
          font-weight: 800;
          margin-bottom: 6px;
        }

        .info-tile-desc {
          font-size: 0.92rem;
          color: #94A3B8;
          line-height: 1.6;
        }

        .info-tile-sub {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #6366F1;
          display: block;
          margin-top: 4px;
        }

        .contact-opt2-form-panel {
          position: relative;
          padding: 36px;
          background: rgba(12, 16, 26, 0.92);
          border: 1px solid rgba(0, 245, 212, 0.3);
          border-radius: var(--lab-radius-xl);
        }

        .form-panel-title {
          font-size: 1.4rem;
          color: #FFFFFF;
          font-weight: 800;
          margin-bottom: 24px;
        }

        .lab-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .field-label {
          font-family: var(--font-mono);
          font-size: 0.76rem;
          color: var(--lab-accent-cyan);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 700;
        }

        .field-input, .field-textarea {
          width: 100%;
          padding: 12px 16px;
          background: rgba(18, 24, 38, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: var(--lab-radius-sm);
          color: #FFFFFF;
          font-family: inherit;
          font-size: 0.92rem;
          outline: none;
          transition: all 0.2s ease;
        }

        .field-input:focus, .field-textarea:focus {
          border-color: var(--lab-accent-cyan);
          box-shadow: 0 0 15px rgba(0, 245, 212, 0.25);
        }

        .form-success-box {
          padding: 40px;
          text-align: center;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.3);
          border-radius: var(--lab-radius-md);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .form-success-box h4 {
          font-size: 1.3rem;
          color: #10B981;
        }

        .form-success-box p {
          color: #94A3B8;
        }

        @media (max-width: 900px) {
          .contact-opt2-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function P(){const i=()=>{window.scrollTo({top:0,behavior:"smooth"})};return e.jsxs("footer",{className:"footer-opt2-wrap no-print",children:[e.jsxs("div",{className:"bento-container",children:[e.jsxs("div",{className:"footer-opt2-top",children:[e.jsxs("div",{className:"footer-opt2-brand",children:[e.jsx("span",{className:"brand-badge",children:"[STEAM LAB // UCEVA]"}),e.jsx("h3",{className:"footer-opt2-title",children:"Centro de Prototipado & Innovación Tecnológica"}),e.jsx("p",{className:"footer-opt2-desc",children:"Unidad Central del Valle del Cauca. Formando a la nueva generación de ingenieros e investigadores en Industria 4.0, Realidades Extendidas y Fabricación Digital."})]}),e.jsxs("div",{className:"footer-opt2-links-grid",children:[e.jsxs("div",{className:"footer-opt2-col",children:[e.jsx("h5",{className:"col-heading",children:"Módulos"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#hero-opt2",children:"Inicio"})}),e.jsx("li",{children:e.jsx("a",{href:"#about-opt2",children:"El Laboratorio"})}),e.jsx("li",{children:e.jsx("a",{href:"#lines-opt2",children:"Líneas I+D"})}),e.jsx("li",{children:e.jsx("a",{href:"#bento-opt2",children:"Portafolio Bento"})}),e.jsx("li",{children:e.jsx("a",{href:"#equipment-opt2",children:"Equipamiento"})}),e.jsx("li",{children:e.jsx("a",{href:"#team-opt2",children:"Investigadores"})})]})]}),e.jsxs("div",{className:"footer-opt2-col",children:[e.jsx("h5",{className:"col-heading",children:"Tecnologías"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("span",{children:"Spatial Computing (XR)"})}),e.jsx("li",{children:e.jsx("span",{children:"Fotogrametría Aérea 3D"})}),e.jsx("li",{children:e.jsx("span",{children:"Computer Vision & IA"})}),e.jsx("li",{children:e.jsx("span",{children:"Aviónica Pixhawk UAV"})}),e.jsx("li",{children:e.jsx("span",{children:"Hardware Custom PCB"})})]})]})]}),e.jsx("div",{className:"footer-opt2-top-btn-col",children:e.jsx("button",{onClick:i,className:"lab-btn-outline",style:{fontSize:"0.85rem"},children:e.jsx("span",{children:"↑ Subir al Inicio"})})})]}),e.jsxs("div",{className:"footer-opt2-bottom",children:[e.jsxs("p",{children:["© ",new Date().getFullYear()," UCEVA — Centro STEAM & Prototipado. Todos los derechos reservados."]}),e.jsxs("div",{className:"footer-opt2-pills",children:[e.jsx("span",{className:"f-pill",children:"Lab Bento Edition"}),e.jsx("span",{className:"f-pill",children:"Zero-Backend"}),e.jsx("span",{className:"f-pill",children:"A4/Letter PDF Ready"})]})]})]}),e.jsx("style",{children:`
        .footer-opt2-wrap {
          background: #04060a;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 60px 0 30px;
          position: relative;
        }

        .footer-opt2-top {
          display: grid;
          grid-template-columns: 2fr 2fr 1fr;
          gap: 40px;
          margin-bottom: 48px;
        }

        .brand-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: var(--lab-accent-cyan);
          letter-spacing: 0.1em;
          display: block;
          margin-bottom: 8px;
        }

        .footer-opt2-title {
          font-size: 1.25rem;
          color: #FFFFFF;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .footer-opt2-desc {
          font-size: 0.9rem;
          color: #94A3B8;
          line-height: 1.65;
          max-width: 420px;
        }

        .footer-opt2-links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .col-heading {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: #A5B4FC;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 14px;
          font-weight: 700;
        }

        .footer-opt2-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-opt2-col ul li a,
        .footer-opt2-col ul li span {
          color: #94A3B8;
          font-size: 0.88rem;
          transition: color 0.2s;
        }

        .footer-opt2-col ul li a:hover {
          color: var(--lab-accent-cyan);
        }

        .footer-opt2-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-size: 0.84rem;
          color: #64748B;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-opt2-pills {
          display: flex;
          gap: 8px;
        }

        .f-pill {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          background: rgba(255, 255, 255, 0.04);
          padding: 2px 8px;
          border-radius: 4px;
          color: #94A3B8;
        }

        @media (max-width: 900px) {
          .footer-opt2-top {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function T({onPrintPdf:i}){const[r,o]=m.useState(null),[s,t]=m.useState("ALL");return e.jsxs("div",{className:"theme-option2",children:[e.jsx("div",{className:"print-dossier-header print-only",children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"2px solid #00F5D4",paddingBottom:"12px",marginBottom:"24px"},children:[e.jsxs("div",{children:[e.jsx("h1",{style:{fontSize:"18pt",margin:0,color:"#FFFFFF"},children:"CENTRO DE PROTOTIPADO & STEAM UCEVA"}),e.jsx("p",{style:{fontSize:"9.5pt",color:"#00F5D4",margin:"4px 0 0 0",textTransform:"uppercase",letterSpacing:"2px"},children:"DOSSIER TÉCNICO DE INVESTIGACIÓN & DESARROLLO (INDUSTRIA 4.0 & 5.0)"})]}),e.jsxs("div",{style:{textAlign:"right",fontSize:"9pt",color:"#94A3B8"},children:[e.jsx("span",{children:"Unidad Central del Valle del Cauca"}),e.jsx("br",{}),e.jsx("span",{children:"Tuluá, Colombia"})]})]})}),e.jsx(N,{onPrintPdf:i}),e.jsxs("main",{children:[e.jsx(w,{onPrintPdf:i}),e.jsx(k,{centerInfo:f.centerInfo}),e.jsx(F,{onFilterCategory:c=>t(c)}),e.jsx(A,{projects:f.projects,selectedCategory:s,onSelectCategory:c=>t(c),onOpenProject:c=>o(c)}),e.jsx(I,{}),e.jsx(z,{team:f.team}),e.jsx(S,{}),e.jsx(R,{onPrintPdf:i})]}),e.jsx(P,{}),r&&e.jsx(D,{project:r,onClose:()=>o(null)})]})}function O(){const i=()=>{window.print()};return e.jsx(T,{onPrintPdf:i})}j.createRoot(document.getElementById("root-opt2")).render(e.jsx(y.StrictMode,{children:e.jsx(O,{})}));
