import json
import os

presentation_data = {
    'title': 'Centro de Prototipado & STEAM UCEVA',
    'subtitle': 'Unidad Central del Valle del Cauca — Vicerrectoría de Investigaciones y Proyección Social',
    'tagline': 'Laboratorio de Innovación, Fabricación Digital & Realidades Extendidas',
    'impactQuote': 'Transformamos la curiosidad científica, la tecnología aplicada y los retos del entorno en prototipos tangibles de alto impacto regional.',
    'mission': 'Impulsar la innovación abierta, el aprendizaje experimental STEAM y el desarrollo tecnológico de vanguardia, conectando la investigación universitaria con las demandas de la Industria 4.0 y la sociedad.',
    'stats': [
        {'value': '+15', 'label': 'Prototipos & Desarrollos', 'desc': 'XR, IA, IoT y Manufactura'},
        {'value': '4', 'label': 'Líneas & Laboratorios', 'desc': 'Espacios de alta tecnología'},
        {'value': '18', 'label': 'Profesionales & Monitores', 'desc': 'Equipo multidisciplinario'},
        {'value': '98%', 'label': 'Satisfacción & Pertinencia', 'desc': 'Impacto en la comunidad'}
    ],
    'about': 'El Centro de Prototipado surgió en el año 2023 como respuesta a las necesidades tecnológicas de comunidad docente, estudiantil e investigadores de la UCEVA. El Centro adquirió en los últimos años capacidades en desarrollo físico, tecnológico y científico, con un equipo humano interdisciplinario dotado de habilidades para responder a las necesidades de industria 4.0 y 5.0, como lo es la energía renovable, la programación, la robótica, la Inteligencia artificial, las realidades extendidas (Realidad Virtual VR, Realidad Aumentada AR y Realidad Mixta MR), gemelos digitales, aplicaciones móviles, aeronáutica, prototipado físico, modelado 3D, fotogrametría, entre otras.',
    'team_profesionales': [
        {'name': 'Juan Sebastián Correa Fernández', 'role': 'Coordinador del Centro', 'degree': 'Ing Electrónico | Mgtr Instrumentación Física', 'photo': 'assets/team/juan_sebastian_correa.jpg'},
        {'name': 'Juan David Villegas Tamayo', 'role': 'Experto STEM+', 'degree': 'Ing Electrónico | Mgtr Medio Ambiente', 'photo': 'assets/team/juan_david_villegas.jpg'},
        {'name': 'Ingrid Tatiana Bocanegra García', 'role': 'Experta en vocaciones', 'degree': 'ING. Mecatrónica', 'photo': 'assets/team/ingrid_tatiana_bocanegra.jpg'},
        {'name': 'David Tenorio Cruz', 'role': 'Experto en fabricación', 'degree': 'ING Aeronáutico', 'photo': 'assets/team/david_tenorio_cruz.jpg'},
        {'name': 'Alberto José Duque', 'role': 'IA y modelos AA', 'degree': 'Ing biomédico | Estudiante de Mg pedagogía', 'photo': 'assets/team/alberto_jose_duque.jpg'},
        {'name': 'David G. Bustamante Herrera', 'role': 'Especialista en IA', 'degree': 'Ing. Mecatrónico | Mgtr IA', 'photo': 'assets/team/david_bustamante_herrera.jpg'}
    ],
    'team_apoyo': [
        {'name': 'Georleans González Marmolejo', 'role': 'Monitor Centro STEAM', 'degree': 'Estudiante de Ing. Electrónica 9° | UX/UX/Electrónica', 'photo': 'assets/team/georleans_gonzalez.jpg'},
        {'name': 'Michael Andrés Hernández', 'role': 'Estudiante VR/AR/MR', 'degree': 'Ing Sistemas', 'photo': 'assets/team/michael_andres_hernandez.jpg'},
        {'name': 'Alejandro Burbano Vivas', 'role': 'Estudiante practicante VR/AR/MR', 'degree': 'Estudiante ing de sistemas 10°', 'photo': 'assets/team/alejandro_burbano.jpg'},
        {'name': 'María Camila Tigreros Sánchez', 'role': 'Estudiante Voluntaria', 'degree': 'Est de Comunicación Transmedia 3°', 'photo': 'assets/team/maria_camila_tigreros.jpg'},
        {'name': 'Valery Gabriela Guerrero Macías', 'role': 'Estudiante Voluntaria', 'degree': 'Est de Comunicación Transmedia 3°', 'photo': 'assets/team/valery_gabriela_guerrero.jpg'},
        {'name': 'Ana Sofía Guzmán Díaz', 'role': 'Estudiante Voluntaria', 'degree': 'Est de Comunicación Transmedia 3°', 'photo': 'assets/team/ana_sofia_guzman.jpg'},
        {'name': 'Lidier Felipe Sicacha Granado', 'role': 'Estudiante practicante', 'degree': 'Estudiante Ing. de sistemas 10°', 'photo': 'assets/team/lidier_felipe_sicacha.jpg'},
        {'name': 'Eliana López Franco', 'role': 'Estudiante Monitora', 'degree': 'Estudiante Ing. de Electrónica 7°', 'photo': 'assets/team/eliana_lopez_franco.jpg'},
        {'name': 'Samuel Lozano Vásquez', 'role': 'Estudiante Voluntario', 'degree': 'Estudiante de ing. Electrónica 9°', 'photo': 'assets/team/samuel_lozano_vasquez.jpg'},
        {'name': 'Miguel Ángel Peláez Valencia', 'role': 'Estudiante Voluntario', 'degree': 'Estudiante de ing. Electrónica 9°', 'photo': 'assets/team/miguel_angel_pelaez.jpg'},
        {'name': 'Luisa Fernanda Madrigal Suárez', 'role': 'Estudiante Voluntaria', 'degree': 'Est de Comunicación Transmedia 3°', 'photo': 'assets/team/luisa_fernanda_madrigal.jpg'},
        {'name': 'Kelly Johanna Arboleda Grueso', 'role': 'Científica Voluntaria', 'degree': 'Ingeniera Agropecuaria', 'photo': 'assets/team/kelly_johanna_arboleda.jpg'}
    ],
    'equipos': [
        {'title': 'Equipos Educativos', 'category': 'Equipamiento STEAM', 'image': 'assets/project_photos/slide_6_content.jpg', 'full_slide': 'assets/projects/slide_render_6.jpg'},
        {'title': 'Equipos Tecnológicos — Impresión 3D & Escaneo', 'category': 'Fabricación Digital', 'image': 'assets/project_photos/slide_7_content.jpg', 'full_slide': 'assets/projects/slide_render_7.jpg'},
        {'title': 'Equipos Tecnológicos — Realidades Extendidas & Fabricación', 'category': 'Realidades Extendidas', 'image': 'assets/project_photos/slide_8_content.jpg', 'full_slide': 'assets/projects/slide_render_8.jpg'}
    ],
    'impactos': [
        {'title': 'Impactos Regionales & Tecnológicos', 'category': 'Impactos Institucionales', 'image': 'assets/project_photos/slide_9_content.jpg', 'full_slide': 'assets/projects/slide_render_9.jpg'},
        {'title': 'Relacionamientos Externos & Alianzas Estratégicas', 'category': 'Alianzas Interinstitucionales', 'image': 'assets/project_photos/slide_10_content.jpg', 'full_slide': 'assets/projects/slide_render_10.jpg'},
        {'title': 'Proyección Social & Apropiación del Conocimiento', 'category': 'Comunidad & Vocaciones', 'image': 'assets/project_photos/slide_11_content.jpg', 'full_slide': 'assets/projects/slide_render_11.jpg'}
    ],
    'proyectos': [
        {'title': 'Fotogrametría Campus UCEVA', 'category': 'Fotogrametría', 'image': 'assets/project_photos/slide_12_content.jpg', 'full_slide': 'assets/projects/slide_render_12.jpg', 'video': None, 'gif': None},
        {'title': 'Fotogrametría a personas', 'category': 'Fotogrametría', 'image': 'assets/project_photos/slide_13_content.jpg', 'full_slide': 'assets/projects/slide_render_13.jpg', 'video': None, 'gif': None},
        {'title': 'Visualizador para sensibilización: Acoso Callejero', 'category': 'Realidad Virtual (VR)', 'image': 'assets/project_photos/slide_14_content.jpg', 'full_slide': 'assets/projects/slide_render_14.jpg', 'video': 'assets/videos/acoso_callejero_vr.mp4', 'gif': 'assets/gifs/visualizador_acoso_callejero_vr.gif'},
        {'title': 'Simulador VR para sensibilización de información: Museo del dengue', 'category': 'Realidad Virtual (VR)', 'image': 'assets/project_photos/slide_15_content.jpg', 'full_slide': 'assets/projects/slide_render_15.jpg', 'video': 'assets/videos/museo_del_dengue_vr.mp4', 'gif': 'assets/gifs/simulador_museo_del_dengue_vr.gif'},
        {'title': 'Aplicativo WEB AR para divulgación', 'category': 'Realidad Aumentada (AR)', 'image': 'assets/project_photos/slide_16_content.jpg', 'full_slide': 'assets/projects/slide_render_16.jpg', 'video': 'assets/videos/webar_divulgacion.mp4', 'gif': 'assets/gifs/aplicativo_web_ar_divulgacion.gif'},
        {'title': 'Campus UCEVA MR', 'category': 'Realidad Mixta (MR)', 'image': 'assets/project_photos/slide_17_content.jpg', 'full_slide': 'assets/projects/slide_render_17.jpg', 'video': 'assets/videos/campus_uceva_mr_1.mp4', 'gif': 'assets/gifs/campus_uceva_mr_1.gif'},
        {'title': 'Recorrido WEB 360° CENICAFE', 'category': 'Recorridos 360°', 'image': 'assets/project_photos/slide_18_content.jpg', 'full_slide': 'assets/projects/slide_render_18.jpg', 'video': None, 'gif': None},
        {'title': 'Construcción de Aeronaves no tripuladas', 'category': 'Prototipado Aeronáutico', 'image': 'assets/project_photos/slide_19_content.jpg', 'full_slide': 'assets/projects/slide_render_19.jpg', 'video': 'assets/videos/aeronaves_drones.mp4', 'gif': 'assets/gifs/construccion_aeronaves_drones.gif'},
        {'title': 'Diseño y desarrollo de placa electrónicas', 'category': 'Electrónica & IoT', 'image': 'assets/project_photos/slide_20_content.jpg', 'full_slide': 'assets/projects/slide_render_20.jpg', 'video': None, 'gif': None},
        {'title': 'Proyectos IoT + Ciudades Inteligentes: Sistema Meteorológico', 'category': 'Electrónica & IoT', 'image': 'assets/project_photos/slide_21_content.jpg', 'full_slide': 'assets/projects/slide_render_21.jpg', 'video': None, 'gif': None},
        {'title': 'Proyectos IA + Neuromarketing', 'category': 'Inteligencia Artificial', 'image': 'assets/project_photos/slide_22_content.jpg', 'full_slide': 'assets/projects/slide_render_22.jpg', 'video': None, 'gif': None},
        {'title': 'Motion tracker', 'category': 'Inteligencia Artificial', 'image': 'assets/project_photos/slide_23_content.jpg', 'full_slide': 'assets/projects/slide_render_23.jpg', 'video': 'assets/videos/motion_tracker_ia.mp4', 'gif': 'assets/gifs/motion_tracker_ia.gif'},
        {'title': 'Minitrituradora de plástico', 'category': 'Diseño & Fabricación', 'image': 'assets/project_photos/slide_24_content.jpg', 'full_slide': 'assets/projects/slide_render_24.jpg', 'video': None, 'gif': None},
        {'title': 'Soportes y elementos 3D', 'category': 'Diseño & Fabricación', 'image': 'assets/project_photos/slide_25_content.jpg', 'full_slide': 'assets/projects/slide_render_25.jpg', 'video': None, 'gif': None}
    ]
}

data_json = json.dumps(presentation_data, ensure_ascii=False)

html_template = """<!DOCTYPE html>
<html lang="es" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>Centro de Prototipado & STEAM UCEVA | Portafolio Tecnológico</title>
  <meta name="description" content="Portafolio tecnológico institucional del Centro de Prototipado y STEAM de la Unidad Central del Valle del Cauca (UCEVA).">
  <link rel="icon" type="image/png" href="assets/branding/logo_uceva.png">
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
  
  <!-- Three.js & Anime.js CDN -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.2/anime.min.js"></script>
  
  <!-- React 18 & ReactDOM -->
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  
  <style>
    /* ==========================================================================
       VARIABLES DE COLOR - MODO OSCURO (Dark Tech Institucional UCEVA)
       ========================================================================== */
    :root, [data-theme="dark"] {
      --theme-name: 'dark';
      --uceva-green-dark: #0f5a00;
      --uceva-green-primary: #1e780f;
      --uceva-green-medium: #227a14;
      --uceva-green-bright: #70b41f;
      --uceva-green-lime: #87d825;
      --uceva-green-neon: #00ff88;
      --uceva-teal: #00b4a0;
      
      --bg-primary: #020704;
      --bg-secondary: #051208;
      --bg-card: rgba(8, 25, 14, 0.82);
      --bg-card-hover: rgba(14, 38, 22, 0.94);
      --bg-glass: rgba(6, 18, 10, 0.88);
      
      --grad-primary: linear-gradient(135deg, #70b41f 0%, #227a14 50%, #00ff88 100%);
      --grad-lime-teal: linear-gradient(135deg, #87d825 0%, #00b4a0 100%);
      --grad-dark-glow: radial-gradient(circle at 50% 15%, rgba(112, 180, 31, 0.22), transparent 70%);
      
      --text-main: #f0f7f2;
      --text-secondary: #a3c4ab;
      --text-muted: #5e8268;
      
      --font-sans: 'Inter', system-ui, -apple-system, sans-serif;
      --font-display: 'Outfit', var(--font-sans);
      --font-mono: 'JetBrains Mono', monospace;
      
      --border-subtle: rgba(112, 180, 31, 0.22);
      --border-active: rgba(112, 180, 31, 0.65);
      --shadow-glow: 0 0 25px rgba(112, 180, 31, 0.25);
      
      --container-max: 1240px;
      --radius-sm: 8px;
      --radius-md: 14px;
      --radius-lg: 20px;
      
      --canvas-opacity: 0.75;
      --toggle-btn-bg: rgba(8, 25, 14, 0.85);
    }

    /* ==========================================================================
       VARIABLES DE COLOR - MODO CLARO (Light Tech Institucional UCEVA)
       ========================================================================== */
    [data-theme="light"] {
      --theme-name: 'light';
      --uceva-green-dark: #072900;
      --uceva-green-primary: #155e09;
      --uceva-green-medium: #1e780f;
      --uceva-green-bright: #2f8805;
      --uceva-green-lime: #429806;
      --uceva-green-neon: #16a34a;
      --uceva-teal: #0d9488;
      
      --bg-primary: #f4f8f5;
      --bg-secondary: #e9f2eb;
      --bg-card: rgba(255, 255, 255, 0.92);
      --bg-card-hover: #ffffff;
      --bg-glass: rgba(255, 255, 255, 0.9);
      
      --grad-primary: linear-gradient(135deg, #1e780f 0%, #3f9408 50%, #155e09 100%);
      --grad-lime-teal: linear-gradient(135deg, #1e780f 0%, #0d9488 100%);
      --grad-dark-glow: radial-gradient(circle at 50% 15%, rgba(112, 180, 31, 0.12), transparent 70%);
      
      --text-main: #0c1f10;
      --text-secondary: #214328;
      --text-muted: #53755b;
      
      --border-subtle: rgba(30, 120, 15, 0.2);
      --border-active: rgba(30, 120, 15, 0.6);
      --shadow-glow: 0 4px 20px rgba(30, 120, 15, 0.15);
      
      --canvas-opacity: 0.35;
      --toggle-btn-bg: rgba(255, 255, 255, 0.9);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      font-size: 16px;
      overflow-x: hidden;
      width: 100%;
    }

    body {
      background-color: var(--bg-primary);
      color: var(--text-main);
      font-family: var(--font-sans);
      line-height: 1.6;
      overflow-x: hidden;
      width: 100%;
      min-height: 100vh;
      transition: background-color 0.3s ease, color 0.3s ease;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      position: relative;
    }

    /* 3D Background Canvas (Three.js InstancedMesh) */
    #three-bg-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 0;
      opacity: var(--canvas-opacity);
      transition: opacity 0.4s ease;
    }

    .app-content {
      position: relative;
      z-index: 1;
    }

    /* Container */
    .container {
      width: 100%;
      max-width: var(--container-max);
      margin: 0 auto;
      padding: 0 20px;
    }

    @media (max-width: 640px) {
      .container {
        padding: 0 16px;
      }
    }

    /* Typography */
    h1, h2, h3, h4 {
      font-family: var(--font-display);
      font-weight: 700;
      line-height: 1.25;
      color: var(--text-main);
      transition: color 0.3s ease;
    }

    [data-theme="dark"] h1,
    [data-theme="dark"] h2,
    [data-theme="dark"] h3,
    [data-theme="dark"] h4 {
      color: #ffffff;
    }

    [data-theme="light"] h1,
    [data-theme="light"] h2,
    [data-theme="light"] h3,
    [data-theme="light"] h4 {
      color: #0b2e12;
    }

    .text-gradient {
      background: var(--grad-primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }

    /* Navbar Institutional Header */
    .navbar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: var(--bg-glass);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border-bottom: 2px solid var(--uceva-green-primary);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      transition: background 0.3s ease, border-color 0.3s ease;
    }

    .nav-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 76px;
      gap: 14px;
    }

    .brand-group {
      display: flex;
      align-items: center;
      gap: 14px;
      text-decoration: none;
    }

    .inst-logo-badge {
      background: #ffffff;
      padding: 6px 12px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      box-shadow: 0 0 15px rgba(112, 180, 31, 0.25);
      transition: transform 0.25s ease;
      cursor: pointer;
    }

    .inst-logo-badge img {
      height: 38px;
      width: auto;
      display: block;
    }

    .vps-logo-badge {
      display: flex;
      align-items: center;
    }

    .vps-logo-badge img {
      height: 34px;
      width: auto;
      display: block;
      filter: drop-shadow(0 0 6px rgba(0, 255, 136, 0.3));
    }

    .brand-divider {
      width: 1px;
      height: 32px;
      background: rgba(112, 180, 31, 0.3);
    }

    .brand-title-box {
      display: flex;
      flex-direction: column;
    }

    .brand-title-box h1 {
      font-size: 1.05rem;
      font-weight: 800;
      letter-spacing: -0.01em;
      white-space: nowrap;
    }

    .brand-title-box span {
      font-size: 0.7rem;
      color: var(--uceva-green-bright);
      font-family: var(--font-mono);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    @media (max-width: 680px) {
      .brand-divider, .vps-logo-badge, .brand-title-box span {
        display: none;
      }
      .inst-logo-badge img {
        height: 30px;
      }
      .brand-title-box h1 {
        font-size: 0.88rem;
      }
    }

    /* Desktop Navigation Links */
    .nav-actions {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 14px;
      list-style: none;
    }

    .nav-links a {
      color: var(--text-secondary);
      text-decoration: none;
      font-size: 0.88rem;
      font-weight: 600;
      transition: all 0.2s ease;
      padding: 6px 10px;
      border-radius: 6px;
    }

    .nav-links a:hover {
      color: var(--uceva-green-bright);
      background: rgba(112, 180, 31, 0.1);
    }

    /* Theme Toggle Button (Light/Dark Switcher) */
    .theme-toggle-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 14px;
      border-radius: 999px;
      background: var(--toggle-btn-bg);
      border: 1px solid var(--border-subtle);
      color: var(--text-main);
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.25s ease;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .theme-toggle-btn:hover {
      border-color: var(--uceva-green-bright);
      color: var(--uceva-green-bright);
      box-shadow: 0 0 15px rgba(112, 180, 31, 0.3);
    }

    .theme-icon-box {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      line-height: 1;
    }

    /* Mobile Hamburger Menu */
    .mobile-menu-btn {
      display: none;
      background: var(--toggle-btn-bg);
      border: 1px solid var(--border-subtle);
      border-radius: 8px;
      padding: 8px 12px;
      color: var(--uceva-green-bright);
      font-size: 1.3rem;
      cursor: pointer;
      line-height: 1;
    }

    .mobile-nav-drawer {
      display: none;
      position: fixed;
      top: 76px;
      left: 0;
      width: 100%;
      background: var(--bg-primary);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 2px solid var(--uceva-green-primary);
      padding: 16px 20px 24px;
      flex-direction: column;
      gap: 10px;
      z-index: 99;
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.3);
    }

    .mobile-nav-drawer.open {
      display: flex;
    }

    .mobile-nav-drawer a {
      color: var(--text-main);
      text-decoration: none;
      font-size: 1rem;
      font-weight: 600;
      padding: 12px 16px;
      border-radius: 8px;
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
    }

    .mobile-nav-drawer a:hover {
      color: var(--uceva-green-bright);
      border-color: var(--uceva-green-bright);
    }

    @media (max-width: 1024px) {
      .nav-links {
        display: none;
      }
      .mobile-menu-btn {
        display: block;
      }
    }

    /* Section Styles */
    section {
      padding: 60px 0;
      position: relative;
    }

    @media (max-width: 640px) {
      section {
        padding: 40px 0;
      }
    }

    .section-header {
      margin-bottom: 32px;
      text-align: center;
    }

    .section-tag {
      display: inline-block;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--uceva-green-bright);
      background: rgba(112, 180, 31, 0.12);
      border: 1px solid rgba(112, 180, 31, 0.35);
      padding: 4px 14px;
      border-radius: 999px;
      margin-bottom: 12px;
    }

    .section-title {
      font-size: clamp(1.6rem, 3.8vw, 2.4rem);
      margin-bottom: 10px;
    }

    /* Hero Section */
    .hero-section {
      padding: clamp(50px, 8vw, 90px) 0 40px;
      text-align: center;
      background: var(--grad-dark-glow);
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 16px;
      border-radius: 999px;
      background: rgba(112, 180, 31, 0.12);
      border: 1px solid rgba(112, 180, 31, 0.35);
      color: var(--uceva-green-bright);
      font-size: 0.8rem;
      font-weight: 600;
      font-family: var(--font-mono);
      margin-bottom: 18px;
    }

    .hero-title {
      font-size: clamp(2rem, 6vw, 3.6rem);
      letter-spacing: -0.02em;
      margin-bottom: 14px;
      font-weight: 800;
    }

    .hero-subtitle {
      font-size: clamp(1.05rem, 2.2vw, 1.35rem);
      color: var(--text-secondary);
      max-width: 820px;
      margin: 0 auto 26px;
      font-weight: 500;
      line-height: 1.5;
    }

    .hero-buttons {
      display: flex;
      justify-content: center;
      gap: 14px;
      flex-wrap: wrap;
      margin-bottom: 45px;
    }

    /* Interactive Animated Buttons */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 26px;
      border-radius: var(--radius-md);
      font-weight: 700;
      font-size: 0.95rem;
      text-decoration: none;
      cursor: pointer;
      min-height: 48px;
      transform-origin: center center;
      will-change: transform, box-shadow;
      user-select: none;
    }

    @media (max-width: 480px) {
      .hero-buttons .btn {
        width: 100%;
      }
    }

    .btn-primary {
      background: var(--grad-primary);
      color: #ffffff;
      box-shadow: 0 4px 20px rgba(34, 122, 20, 0.4);
      border: none;
    }

    [data-theme="dark"] .btn-primary {
      color: #020704;
      box-shadow: 0 0 25px rgba(112, 180, 31, 0.4);
    }

    .btn-secondary {
      background: var(--bg-card);
      color: var(--text-main);
      border: 1px solid var(--border-subtle);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    }

    /* Stats Grid */
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      max-width: 1060px;
      margin: 0 auto;
    }

    @media (max-width: 860px) {
      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .stats-grid {
        grid-template-columns: 1fr;
        gap: 12px;
      }
    }

    .stat-card {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 20px 16px;
      text-align: center;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
      transition: border-color 0.25s ease, background 0.3s ease;
    }

    .stat-value {
      font-size: clamp(2rem, 4vw, 2.6rem);
      font-weight: 800;
      font-family: var(--font-display);
      color: var(--uceva-green-bright);
      line-height: 1.1;
      margin-bottom: 6px;
    }

    .stat-label {
      font-size: 0.9rem;
      font-weight: 700;
      margin-bottom: 4px;
    }

    .stat-desc {
      font-size: 0.76rem;
      color: var(--text-muted);
    }

    /* Quotes & Impact Banner */
    .impact-banner {
      background: linear-gradient(135deg, rgba(34, 122, 20, 0.15) 0%, rgba(112, 180, 31, 0.18) 100%);
      border: 1px solid rgba(112, 180, 31, 0.3);
      border-radius: var(--radius-lg);
      padding: clamp(24px, 4vw, 40px);
      margin-bottom: 40px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: background 0.3s ease;
    }

    .impact-quote {
      font-size: clamp(1.1rem, 2.4vw, 1.4rem);
      font-weight: 600;
      font-style: italic;
      line-height: 1.6;
      margin-bottom: 16px;
    }

    .impact-mission {
      font-size: clamp(0.92rem, 1.8vw, 1.05rem);
      color: var(--text-secondary);
      max-width: 900px;
      margin: 0 auto;
      line-height: 1.7;
    }

    /* About Section */
    .about-card {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-lg);
      padding: clamp(22px, 4vw, 38px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
      max-width: 960px;
      margin: 0 auto;
      transition: background 0.3s ease;
    }

    .about-card p {
      font-size: clamp(0.98rem, 1.8vw, 1.15rem);
      line-height: 1.85;
      color: var(--text-secondary);
      text-align: justify;
    }

    /* Category Filter Tabs (Swipeable on Mobile) */
    .filter-container {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 12px;
      margin-bottom: 24px;
      scrollbar-width: thin;
      scrollbar-color: var(--uceva-green-bright) transparent;
      -webkit-overflow-scrolling: touch;
    }

    .filter-container::-webkit-scrollbar {
      height: 4px;
    }

    .filter-container::-webkit-scrollbar-thumb {
      background: var(--uceva-green-bright);
      border-radius: 4px;
    }

    .filter-btn {
      white-space: nowrap;
      padding: 8px 18px;
      border-radius: 999px;
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      color: var(--text-secondary);
      font-size: 0.84rem;
      font-weight: 600;
      cursor: pointer;
      flex-shrink: 0;
      transform-origin: center center;
      will-change: transform;
      user-select: none;
    }

    .filter-btn.active {
      background: var(--uceva-green-bright);
      color: #ffffff;
      border-color: var(--uceva-green-bright);
      box-shadow: 0 0 15px rgba(112, 180, 31, 0.4);
    }

    [data-theme="dark"] .filter-btn.active {
      color: #020704;
    }

    /* Responsive Cards Grid */
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 22px;
    }

    @media (max-width: 640px) {
      .cards-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }

    /* Card Item */
    .card-item {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
      transition: border-color 0.25s ease, background 0.3s ease, transform 0.25s ease;
    }

    .card-item:hover {
      border-color: var(--border-active);
      transform: translateY(-4px);
      box-shadow: var(--shadow-glow);
    }

    .card-media-wrapper {
      position: relative;
      width: 100%;
      padding-top: 56.25%; /* 16:9 Aspect Ratio */
      background: #030a05;
      overflow: hidden;
    }

    .card-media-wrapper img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    .card-item:hover .card-media-wrapper img {
      transform: scale(1.03);
    }

    .card-body {
      padding: 18px;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .card-category {
      font-size: 0.74rem;
      font-family: var(--font-mono);
      color: var(--uceva-green-bright);
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom: 6px;
    }

    .card-title {
      font-size: 1.1rem;
      margin-bottom: 14px;
      line-height: 1.35;
    }

    .card-action-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      width: 100%;
      padding: 10px 14px;
      border-radius: var(--radius-sm);
      background: rgba(112, 180, 31, 0.12);
      border: 1px solid rgba(112, 180, 31, 0.3);
      color: var(--uceva-green-bright);
      font-size: 0.86rem;
      font-weight: 700;
      cursor: pointer;
      min-height: 44px;
      transform-origin: center center;
      will-change: transform;
      user-select: none;
    }

    /* Team Grid */
    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 20px;
    }

    @media (max-width: 640px) {
      .team-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }
    }

    .team-card {
      background: var(--bg-card);
      border: 1px solid var(--border-subtle);
      border-radius: var(--radius-md);
      padding: 22px 18px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
      transition: border-color 0.25s ease, background 0.3s ease, transform 0.25s ease;
    }

    .team-card:hover {
      border-color: var(--border-active);
      transform: translateY(-3px);
      box-shadow: var(--shadow-glow);
    }

    .team-avatar-box {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      border: 3px solid var(--uceva-green-bright);
      overflow: hidden;
      margin-bottom: 14px;
      background: #0b1a10;
      box-shadow: 0 0 20px rgba(112, 180, 31, 0.25);
      flex-shrink: 0;
    }

    .team-avatar-box img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .team-name {
      font-size: 1.05rem;
      margin-bottom: 6px;
      font-weight: 700;
    }

    .team-role {
      display: inline-block;
      font-size: 0.75rem;
      font-family: var(--font-mono);
      color: var(--uceva-green-bright);
      background: rgba(112, 180, 31, 0.1);
      border: 1px solid rgba(112, 180, 31, 0.25);
      padding: 3px 10px;
      border-radius: 999px;
      margin-bottom: 8px;
      max-width: 100%;
      font-weight: 600;
    }

    .team-degree {
      font-size: 0.84rem;
      color: var(--text-secondary);
      line-height: 1.4;
    }

    /* Modal for Interactive Videos/Images */
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(2, 7, 4, 0.85);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 16px;
    }

    .modal-content {
      background: var(--bg-secondary);
      border: 1px solid var(--border-active);
      border-radius: var(--radius-lg);
      max-width: 880px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 0 50px rgba(112, 180, 31, 0.35);
      position: relative;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px 22px;
      border-bottom: 1px solid var(--border-subtle);
    }

    .modal-title {
      font-size: 1.2rem;
      padding-right: 16px;
    }

    .modal-close-btn {
      background: none;
      border: none;
      color: var(--text-secondary);
      font-size: 1.6rem;
      cursor: pointer;
      line-height: 1;
      padding: 6px 10px;
      border-radius: 6px;
      transform-origin: center center;
    }

    .modal-close-btn:hover {
      color: var(--uceva-green-bright);
      background: rgba(112, 180, 31, 0.15);
    }

    .modal-body {
      padding: 20px;
    }

    .modal-media-box {
      width: 100%;
      background: #000000;
      border-radius: var(--radius-sm);
      overflow: hidden;
    }

    .modal-media-box video, .modal-media-box img {
      width: 100%;
      max-height: 520px;
      display: block;
      object-fit: contain;
    }

    /* Footer */
    footer {
      border-top: 2px solid var(--uceva-green-primary);
      padding: 40px 0;
      text-align: center;
      background: var(--bg-primary);
      color: var(--text-muted);
      font-size: 0.88rem;
    }

    .footer-logos {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      margin-bottom: 18px;
    }

    .footer-logos img {
      height: 36px;
      width: auto;
      background: #ffffff;
      padding: 4px 8px;
      border-radius: 6px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    }
  </style>
</head>
<body>
  <!-- Three.js Interactive InstancedMesh Canvas -->
  <canvas id="three-bg-canvas"></canvas>

  <div id="root" class="app-content"></div>

  <script>
    /* ==========================================================================
       THREE.JS INSTANCED MESHES + ANIME.JS 3D BACKGROUND
       Crea una red interactiva de mallas instanciadas que reaccionan al mouse y a los botones
       ========================================================================== */
    (function initThreeBackground() {
      const canvas = document.getElementById('three-bg-canvas');
      if (!canvas || !window.THREE) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 45;

      const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Light setup
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0x70b41f, 1.2);
      dirLight.position.set(20, 30, 20);
      scene.add(dirLight);

      const pointLight = new THREE.PointLight(0x00ff88, 1.5, 100);
      pointLight.position.set(-20, -20, 10);
      scene.add(pointLight);

      // Instanced Mesh Creation
      const count = 100;
      const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
      const material = new THREE.MeshStandardMaterial({
        color: 0x70b41f,
        roughness: 0.35,
        metalness: 0.75,
        transparent: true,
        opacity: 0.8
      });

      const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
      scene.add(instancedMesh);

      const dummy = new THREE.Object3D();
      const nodeData = [];

      for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 80;
        const y = (Math.random() - 0.5) * 60;
        const z = (Math.random() - 0.5) * 40 - 10;
        const rotX = Math.random() * Math.PI;
        const rotY = Math.random() * Math.PI;
        const scale = 0.5 + Math.random() * 0.9;
        const speed = 0.002 + Math.random() * 0.004;

        nodeData.push({ x, y, z, rotX, rotY, scale, speed, baseScale: scale });

        dummy.position.set(x, y, z);
        dummy.rotation.set(rotX, rotY, 0);
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
      }
      instancedMesh.instanceMatrix.needsUpdate = true;

      // Mouse parallax tracking
      let mouseX = 0, mouseY = 0;
      window.addEventListener('mousemove', (ev) => {
        mouseX = (ev.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (ev.clientY / window.innerHeight - 0.5) * 2;
      }, { passive: true });

      // Resize
      window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      // Render Loop
      let clock = new THREE.Clock();
      function animateThree() {
        requestAnimationFrame(animateThree);
        const delta = clock.getDelta();
        const time = clock.getElapsedTime();

        camera.position.x += (mouseX * 6 - camera.position.x) * 0.04;
        camera.position.y += (-mouseY * 6 - camera.position.y) * 0.04;
        camera.lookAt(scene.position);

        for (let i = 0; i < count; i++) {
          const n = nodeData[i];
          n.rotX += n.speed * 2.5;
          n.rotY += n.speed * 2.0;
          const waveY = n.y + Math.sin(time + i) * 1.5;

          dummy.position.set(n.x, waveY, n.z);
          dummy.rotation.set(n.rotX, n.rotY, 0);
          dummy.scale.set(n.scale, n.scale, n.scale);
          dummy.updateMatrix();
          instancedMesh.setMatrixAt(i, dummy.matrix);
        }
        instancedMesh.instanceMatrix.needsUpdate = true;

        renderer.render(scene, camera);
      }
      animateThree();

      // Export a trigger pulse for button interactions
      window.pulseThreeInstances = function(intensity = 1.3) {
        if (!window.anime) return;
        const randIndex = Math.floor(Math.random() * (count - 10));
        const sampleNodes = nodeData.slice(randIndex, randIndex + 10);
        anime({
          targets: sampleNodes,
          scale: [
            { value: (el) => el.baseScale * intensity, duration: 300, easing: 'easeOutQuad' },
            { value: (el) => el.baseScale, duration: 600, easing: 'easeOutElastic(1, .5)' }
          ]
        });
      };
    })();

    /* ==========================================================================
       ANIME.JS INTERACTIVE BUTTON SYSTEM
       Efectos elásticos magnéticos, micro-movimientos y ondas en todos los botones
       ========================================================================== */
    window.btnHoverAnim = function(el) {
      if (!window.anime || !el) return;
      anime.remove(el);
      anime({
        targets: el,
        scale: 1.05,
        translateY: -3,
        duration: 350,
        easing: 'easeOutElastic(1, 0.6)'
      });
      if (window.pulseThreeInstances) {
        window.pulseThreeInstances(1.25);
      }
    };

    window.btnLeaveAnim = function(el) {
      if (!window.anime || !el) return;
      anime.remove(el);
      anime({
        targets: el,
        scale: 1,
        translateY: 0,
        duration: 300,
        easing: 'easeOutQuad'
      });
    };

    window.btnClickAnim = function(el) {
      if (!window.anime || !el) return;
      anime.remove(el);
      anime({
        targets: el,
        scale: [
          { value: 0.94, duration: 100, easing: 'easeOutQuad' },
          { value: 1.04, duration: 250, easing: 'easeOutElastic(1, 0.5)' },
          { value: 1, duration: 200, easing: 'easeOutQuad' }
        ]
      });
      if (window.pulseThreeInstances) {
        window.pulseThreeInstances(1.5);
      }
    };

    /* ==========================================================================
       REACT APPLICATION
       ========================================================================== */
    (function() {
      const e = React.createElement;
      const useState = React.useState;
      const useEffect = React.useEffect;

      const DATA = __DATA_PLACEHOLDER__;

      function Navbar(props) {
        const [mobileOpen, setMobileOpen] = useState(false);

        function toggle() {
          setMobileOpen(!mobileOpen);
        }

        function close() {
          setMobileOpen(false);
        }

        function handleThemeClick(ev) {
          window.btnClickAnim(ev.currentTarget);
          props.onToggleTheme();
        }

        return e('header', { className: 'navbar' },
          e('div', { className: 'container' },
            e('div', { className: 'nav-inner' },
              e('div', { className: 'brand-group' },
                e('div', {
                  className: 'inst-logo-badge',
                  onMouseEnter: (ev) => window.btnHoverAnim(ev.currentTarget),
                  onMouseLeave: (ev) => window.btnLeaveAnim(ev.currentTarget)
                },
                  e('img', { src: 'assets/branding/logo_uceva.png', alt: 'Logo UCEVA' })
                ),
                e('div', { className: 'vps-logo-badge' },
                  e('img', { src: 'assets/branding/logo_vps.png', alt: 'Logo VIPS' })
                ),
                e('div', { className: 'brand-divider' }),
                e('div', { className: 'brand-title-box' },
                  e('h1', null, 'Centro de Prototipado & STEAM'),
                  e('span', null, 'Unidad Central del Valle del Cauca')
                )
              ),
              e('div', { className: 'nav-actions' },
                e('nav', null,
                  e('ul', { className: 'nav-links' },
                    e('li', null, e('a', { href: '#acerca' }, 'Acerca del Centro')),
                    e('li', null, e('a', { href: '#proyectos' }, 'Proyectos')),
                    e('li', null, e('a', { href: '#equipos' }, 'Equipos')),
                    e('li', null, e('a', { href: '#impactos' }, 'Impactos')),
                    e('li', null, e('a', { href: '#equipo' }, 'Equipo'))
                  )
                ),
                e('button', {
                  className: 'theme-toggle-btn',
                  onClick: handleThemeClick,
                  onMouseEnter: (ev) => window.btnHoverAnim(ev.currentTarget),
                  onMouseLeave: (ev) => window.btnLeaveAnim(ev.currentTarget),
                  'aria-label': 'Alternar Modo Claro y Oscuro'
                },
                  e('span', { className: 'theme-icon-box' }, props.theme === 'dark' ? '☀️' : '🌙'),
                  e('span', { style: { display: window.innerWidth < 480 ? 'none' : 'inline' } },
                    props.theme === 'dark' ? 'Modo Claro' : 'Modo Oscuro'
                  )
                ),
                e('button', { className: 'mobile-menu-btn', onClick: toggle, 'aria-label': 'Menú' },
                  mobileOpen ? '✕' : '☰'
                )
              )
            )
          ),
          e('div', { className: 'mobile-nav-drawer' + (mobileOpen ? ' open' : '') },
            e('a', { href: '#acerca', onClick: close }, 'Acerca del Centro'),
            e('a', { href: '#proyectos', onClick: close }, 'Proyectos'),
            e('a', { href: '#equipos', onClick: close }, 'Equipos'),
            e('a', { href: '#impactos', onClick: close }, 'Impactos'),
            e('a', { href: '#equipo', onClick: close }, 'Equipo')
          )
        );
      }

      function Hero() {
        return e('section', { className: 'hero-section' },
          e('div', { className: 'container' },
            e('div', { className: 'hero-badge' }, '⚡ Innovación • Prototipado • Industria 4.0 & 5.0'),
            e('h1', { className: 'hero-title' },
              'Centro de Prototipado & ',
              e('span', { className: 'text-gradient' }, 'STEAM')
            ),
            e('p', { className: 'hero-subtitle' }, DATA.subtitle),
            e('div', { className: 'hero-buttons' },
              e('a', {
                href: '#proyectos',
                className: 'btn btn-primary',
                onMouseEnter: (ev) => window.btnHoverAnim(ev.currentTarget),
                onMouseLeave: (ev) => window.btnLeaveAnim(ev.currentTarget),
                onClick: (ev) => window.btnClickAnim(ev.currentTarget)
              }, 'Explorar Proyectos'),
              e('a', {
                href: '#equipo',
                className: 'btn btn-secondary',
                onMouseEnter: (ev) => window.btnHoverAnim(ev.currentTarget),
                onMouseLeave: (ev) => window.btnLeaveAnim(ev.currentTarget),
                onClick: (ev) => window.btnClickAnim(ev.currentTarget)
              }, 'Equipo de Trabajo')
            ),
            e('div', { className: 'stats-grid' },
              DATA.stats.map(function(st, idx) {
                return e('div', { key: idx, className: 'stat-card' },
                  e('div', { className: 'stat-value' }, st.value),
                  e('div', { className: 'stat-label' }, st.label),
                  e('div', { className: 'stat-desc' }, st.desc)
                );
              })
            )
          )
        );
      }

      function About() {
        return e('section', { id: 'acerca' },
          e('div', { className: 'container' },
            e('div', { className: 'impact-banner' },
              e('p', { className: 'impact-quote' }, '“' + DATA.impactQuote + '”'),
              e('p', { className: 'impact-mission' }, DATA.mission)
            ),
            e('div', { className: 'section-header' },
              e('span', { className: 'section-tag' }, 'Reseña Institucional'),
              e('h2', { className: 'section-title' }, 'Acerca del ', e('span', { className: 'text-gradient' }, 'Centro'))
            ),
            e('div', { className: 'about-card' },
              e('p', null, DATA.about)
            )
          )
        );
      }

      function Proyectos(props) {
        const [filter, setFilter] = useState('TODOS');
        const categories = [
          'TODOS',
          'Realidad Virtual (VR)',
          'Realidad Aumentada (AR)',
          'Realidad Mixta (MR)',
          'Recorridos 360°',
          'Fotogrametría',
          'Prototipado Aeronáutico',
          'Electrónica & IoT',
          'Inteligencia Artificial',
          'Diseño & Fabricación'
        ];

        const filtered = filter === 'TODOS' ? DATA.proyectos : DATA.proyectos.filter(function(p) {
          return p.category === filter;
        });

        function handleFilterClick(cat, ev) {
          window.btnClickAnim(ev.currentTarget);
          setFilter(cat);
        }

        return e('section', { id: 'proyectos' },
          e('div', { className: 'container' },
            e('div', { className: 'section-header' },
              e('span', { className: 'section-tag' }, 'Portafolio de Innovación'),
              e('h2', { className: 'section-title' }, 'Proyectos de ', e('span', { className: 'text-gradient' }, 'Desarrollo'))
            ),
            e('div', { className: 'filter-container' },
              categories.map(function(cat, idx) {
                return e('button', {
                  key: idx,
                  className: 'filter-btn' + (filter === cat ? ' active' : ''),
                  onClick: (ev) => handleFilterClick(cat, ev),
                  onMouseEnter: (ev) => window.btnHoverAnim(ev.currentTarget),
                  onMouseLeave: (ev) => window.btnLeaveAnim(ev.currentTarget)
                }, cat);
              })
            ),
            e('div', { className: 'cards-grid' },
              filtered.map(function(proj, idx) {
                return e('div', { key: idx, className: 'card-item' },
                  e('div', { className: 'card-media-wrapper' },
                    e('img', { src: proj.image, alt: proj.title, loading: 'lazy' })
                  ),
                  e('div', { className: 'card-body' },
                    e('div', null,
                      e('div', { className: 'card-category' }, proj.category),
                      e('h3', { className: 'card-title' }, proj.title)
                    ),
                    (proj.video || proj.gif) ? e('button', {
                      className: 'card-action-btn',
                      onMouseEnter: (ev) => window.btnHoverAnim(ev.currentTarget),
                      onMouseLeave: (ev) => window.btnLeaveAnim(ev.currentTarget),
                      onClick: (ev) => { window.btnClickAnim(ev.currentTarget); props.onOpenModal(proj); }
                    }, '▶ Ver Video / Interactivo') : e('button', {
                      className: 'card-action-btn',
                      onMouseEnter: (ev) => window.btnHoverAnim(ev.currentTarget),
                      onMouseLeave: (ev) => window.btnLeaveAnim(ev.currentTarget),
                      onClick: (ev) => { window.btnClickAnim(ev.currentTarget); props.onOpenModal(proj); }
                    }, '🔍 Ver Lámina Completa')
                  )
                );
              })
            )
          )
        );
      }

      function Equipos(props) {
        return e('section', { id: 'equipos', style: { background: 'var(--bg-secondary)' } },
          e('div', { className: 'container' },
            e('div', { className: 'section-header' },
              e('span', { className: 'section-tag' }, 'Infraestructura & Capacidad'),
              e('h2', { className: 'section-title' }, 'Equipamiento ', e('span', { className: 'text-gradient' }, 'Educativo y Tecnológico'))
            ),
            e('div', { className: 'cards-grid' },
              DATA.equipos.map(function(eq, idx) {
                return e('div', { key: idx, className: 'card-item' },
                  e('div', { className: 'card-media-wrapper' },
                    e('img', { src: eq.image, alt: eq.title, loading: 'lazy' })
                  ),
                  e('div', { className: 'card-body' },
                    e('div', { className: 'card-category' }, eq.category),
                    e('h3', { className: 'card-title' }, eq.title),
                    e('button', {
                      className: 'card-action-btn',
                      onMouseEnter: (ev) => window.btnHoverAnim(ev.currentTarget),
                      onMouseLeave: (ev) => window.btnLeaveAnim(ev.currentTarget),
                      onClick: (ev) => { window.btnClickAnim(ev.currentTarget); props.onOpenModal(eq); }
                    }, '🔍 Ver Lámina')
                  )
                );
              })
            )
          )
        );
      }

      function Impactos(props) {
        return e('section', { id: 'impactos' },
          e('div', { className: 'container' },
            e('div', { className: 'section-header' },
              e('span', { className: 'section-tag' }, 'Alcance Social & Externo'),
              e('h2', { className: 'section-title' }, 'Impactos, Relacionamientos & ', e('span', { className: 'text-gradient' }, 'Proyección'))
            ),
            e('div', { className: 'cards-grid' },
              DATA.impactos.map(function(imp, idx) {
                return e('div', { key: idx, className: 'card-item' },
                  e('div', { className: 'card-media-wrapper' },
                    e('img', { src: imp.image, alt: imp.title, loading: 'lazy' })
                  ),
                  e('div', { className: 'card-body' },
                    e('div', { className: 'card-category' }, imp.category),
                    e('h3', { className: 'card-title' }, imp.title),
                    e('button', {
                      className: 'card-action-btn',
                      onMouseEnter: (ev) => window.btnHoverAnim(ev.currentTarget),
                      onMouseLeave: (ev) => window.btnLeaveAnim(ev.currentTarget),
                      onClick: (ev) => { window.btnClickAnim(ev.currentTarget); props.onOpenModal(imp); }
                    }, '🔍 Ver Lámina')
                  )
                );
              })
            )
          )
        );
      }

      function Equipo() {
        return e('section', { id: 'equipo', style: { background: 'var(--bg-secondary)' } },
          e('div', { className: 'container' },
            e('div', { className: 'section-header' },
              e('span', { className: 'section-tag' }, 'Talento Humano'),
              e('h2', { className: 'section-title' }, 'Equipo de ', e('span', { className: 'text-gradient' }, 'Profesionales & Apoyo'))
            ),

            e('div', { style: { marginBottom: '40px' } },
              e('h3', { style: { fontSize: '1.25rem', marginBottom: '20px', color: 'var(--uceva-green-bright)', borderLeft: '3px solid var(--uceva-green-bright)', paddingLeft: '12px' } }, 'Equipo de Profesionales'),
              e('div', { className: 'team-grid' },
                DATA.team_profesionales.map(function(m, idx) {
                  return e('div', { key: idx, className: 'team-card' },
                    e('div', { className: 'team-avatar-box' },
                      e('img', { src: m.photo, alt: m.name, loading: 'lazy' })
                    ),
                    e('h4', { className: 'team-name' }, m.name),
                    e('span', { className: 'team-role' }, m.role),
                    e('p', { className: 'team-degree' }, m.degree)
                  );
                })
              )
            ),

            e('div', null,
              e('h3', { style: { fontSize: '1.25rem', marginBottom: '20px', color: 'var(--uceva-green-bright)', borderLeft: '3px solid var(--uceva-green-bright)', paddingLeft: '12px' } }, 'Equipo de Apoyo, Monitores & Practicantes'),
              e('div', { className: 'team-grid' },
                DATA.team_apoyo.map(function(m, idx) {
                  return e('div', { key: idx, className: 'team-card' },
                    e('div', { className: 'team-avatar-box' },
                      e('img', { src: m.photo, alt: m.name, loading: 'lazy' })
                    ),
                    e('h4', { className: 'team-name' }, m.name),
                    e('span', { className: 'team-role' }, m.role),
                    e('p', { className: 'team-degree' }, m.degree)
                  );
                })
              )
            )
          )
        );
      }

      function Modal(props) {
        const item = props.item;
        if (!item) return null;

        return e('div', { className: 'modal-overlay', onClick: props.onClose },
          e('div', { className: 'modal-content', onClick: function(ev) { ev.stopPropagation(); } },
            e('div', { className: 'modal-header' },
              e('h3', { className: 'modal-title' }, item.title),
              e('button', {
                className: 'modal-close-btn',
                onClick: props.onClose,
                onMouseEnter: (ev) => window.btnHoverAnim(ev.currentTarget),
                onMouseLeave: (ev) => window.btnLeaveAnim(ev.currentTarget)
              }, '✕')
            ),
            e('div', { className: 'modal-body' },
              item.video ? e('div', { className: 'modal-media-box' },
                e('video', {
                  src: item.video,
                  controls: true,
                  autoPlay: true,
                  playsInline: true,
                  style: { width: '100%', borderRadius: '8px' }
                })
              ) : e('div', { className: 'modal-media-box' },
                e('img', { src: item.full_slide || item.image, alt: item.title, style: { width: '100%', borderRadius: '8px' } })
              )
            )
          )
        );
      }

      function Footer() {
        return e('footer', null,
          e('div', { className: 'container' },
            e('div', { className: 'footer-logos' },
              e('img', { src: 'assets/branding/logo_uceva.png', alt: 'UCEVA' }),
              e('img', { src: 'assets/branding/logo_vps.png', alt: 'VIPS' })
            ),
            e('p', { className: 'footer-title', style: { fontWeight: 700, fontSize: '1.05rem', marginBottom: '6px' } }, 'Centro de Prototipado & STEAM'),
            e('p', null, 'Unidad Central del Valle del Cauca (UCEVA) — Vicerrectoría de Investigaciones y Proyección Social'),
            e('p', { style: { fontSize: '0.8rem', marginTop: '10px', color: 'var(--text-muted)' } }, 'Tuluá, Valle del Cauca, Colombia')
          )
        );
      }

      function App() {
        const [theme, setTheme] = useState(function() {
          return localStorage.getItem('uceva_portfolio_theme') || 'dark';
        });
        const [modalItem, setModalItem] = useState(null);

        useEffect(function() {
          document.documentElement.setAttribute('data-theme', theme);
          localStorage.setItem('uceva_portfolio_theme', theme);
        }, [theme]);

        function toggleTheme() {
          setTheme(function(prev) {
            return prev === 'dark' ? 'light' : 'dark';
          });
        }

        return e('div', null,
          e(Navbar, { theme: theme, onToggleTheme: toggleTheme }),
          e('main', null,
            e(Hero),
            e(About),
            e(Proyectos, { onOpenModal: function(it) { setModalItem(it); } }),
            e(Equipos, { onOpenModal: function(it) { setModalItem(it); } }),
            e(Impactos, { onOpenModal: function(it) { setModalItem(it); } }),
            e(Equipo)
          ),
          e(Footer),
          e(Modal, { item: modalItem, onClose: function() { setModalItem(null); } })
        );
      }

      ReactDOM.createRoot(document.getElementById('root')).render(e(App));
    })();
  </script>
</body>
</html>
"""

final_html = html_template.replace('__DATA_PLACEHOLDER__', data_json)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

with open('dist/index.html', 'w', encoding='utf-8') as f:
    f.write(final_html)

print("SUCCESS: Portfolio updated with Three.js InstancedMesh background, Anime.js button interactivity, and Light/Dark Mode toggle!")
