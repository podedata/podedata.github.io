# Documentação Técnica - Rebuild Site Podedata
## Guia Completo de Implementação para IDE com IA

---

## 📋 ÍNDICE

1. [Visão Geral do Projeto](#visão-geral)
2. [Arquitetura e Estrutura de Arquivos](#arquitetura)
3. [Sistema de Design](#sistema-de-design)
4. [Especificações Técnicas por Arquivo](#especificações-técnicas)
5. [Componentes e Padrões](#componentes)
6. [JavaScript e Interatividade](#javascript)
7. [Performance e Otimizações](#performance)
8. [Dark Mode Implementation](#dark-mode)
9. [Responsividade](#responsividade)
10. [SEO e Acessibilidade](#seo-acessibilidade)
11. [Integração com Cases](#integração-cases)
12. [Deployment GitHub Pages](#deployment)

---

## 1. VISÃO GERAL DO PROJETO

### Objetivo
Realizar rebuild completo do site podedata.com.br com foco em:
- UX/UI moderno e profissional
- Performance otimizada (PageSpeed > 90)
- Dark mode nativo
- Mobile-first responsive
- SEO técnico avançado
- Arquitetura de informação clara

### Stack Técnica
```
HTML5 Semântico
├── CSS Moderno (Custom Properties, Grid, Flexbox)
├── Vanilla JavaScript ES6+ (Modular)
├── Lucide Icons (SVG inline)
├── No frameworks pesados (compatibilidade GitHub Pages)
└── Progressive Enhancement
```

### Estrutura de Cores e Identidade

**Paleta Principal:**
```css
:root {
  /* Primary Colors */
  --color-primary: #0A7AFF;
  --color-primary-light: #4DA3FF;
  --color-primary-dark: #0556B3;
  
  /* Secondary Colors */
  --color-secondary: #6C5CE7;
  --color-secondary-light: #9F8FEF;
  --color-secondary-dark: #4A3DB8;
  
  /* Accent Colors */
  --color-accent: #00D9A3;
  --color-accent-light: #33E3B8;
  --color-accent-dark: #00A37A;
  
  /* Neutral Colors (Light Mode) */
  --color-neutral-900: #1A1D29;
  --color-neutral-800: #2D3142;
  --color-neutral-700: #4B5369;
  --color-neutral-600: #6B7280;
  --color-neutral-500: #9CA3AF;
  --color-neutral-400: #D1D5DB;
  --color-neutral-300: #E5E7EB;
  --color-neutral-200: #F3F4F6;
  --color-neutral-100: #F9FAFB;
  --color-neutral-50: #FFFFFF;
  
  /* Semantic Colors */
  --color-success: #00D9A3;
  --color-warning: #FFB800;
  --color-error: #FF4757;
  --color-info: #0A7AFF;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #0A7AFF 0%, #6C5CE7 100%);
  --gradient-accent: linear-gradient(135deg, #00D9A3 0%, #0A7AFF 100%);
  --gradient-hero: linear-gradient(135deg, rgba(10, 122, 255, 0.1) 0%, rgba(108, 92, 231, 0.1) 100%);
}

[data-theme="dark"] {
  /* Dark Mode Overrides */
  --color-neutral-900: #F9FAFB;
  --color-neutral-800: #F3F4F6;
  --color-neutral-700: #E5E7EB;
  --color-neutral-600: #D1D5DB;
  --color-neutral-500: #9CA3AF;
  --color-neutral-400: #6B7280;
  --color-neutral-300: #4B5369;
  --color-neutral-200: #2D3142;
  --color-neutral-100: #1F2235;
  --color-neutral-50: #1A1D29;
  
  /* Background adjustments */
  --bg-primary: #1A1D29;
  --bg-secondary: #1F2235;
  --bg-tertiary: #2D3142;
}
```

### Tipografia
```css
:root {
  /* Font Families */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', sans-serif;
  --font-display: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', 'Courier New', monospace;
  
  /* Font Sizes */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  --text-6xl: 3.75rem;    /* 60px */
  --text-7xl: 4.5rem;     /* 72px */
  
  /* Font Weights */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
}
```

### Spacing System
```css
:root {
  /* Spacing Scale */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
  
  /* Section Spacing */
  --section-padding-y: var(--space-20);
  --section-padding-x: var(--space-6);
  
  /* Container */
  --container-max-width: 1200px;
  --container-padding: var(--space-6);
}
```

---

## 2. ARQUITETURA E ESTRUTURA DE ARQUIVOS

### Estrutura Completa do Projeto

```
podedata.github.io/
│
├── index.html                      # Home page renovada
├── solucoes.html                   # Soluções com cards modernos
├── cases.html                      # Cases/Portfólio (NOVO)
├── processo.html                   # Como Trabalhamos (NOVO)
├── sobre.html                      # Institucional (NOVO)
├── contato.html                    # Formulário moderno
├── CNAME                           # Domínio customizado
├── robots.txt                      # SEO
├── sitemap.xml                     # SEO
├── manifest.json                   # PWA (opcional)
│
├── assets/
│   ├── css/
│   │   ├── design-system.css      # Variáveis, tokens, fundação
│   │   ├── layout.css             # Grid, containers, spacing
│   │   ├── components.css         # Cards, buttons, forms, etc
│   │   ├── utilities.css          # Helpers, classes utilitárias
│   │   ├── animations.css         # Keyframes, transitions
│   │   ├── dark-mode.css          # Estilos específicos dark mode
│   │   └── main.css               # Importa todos os CSS (entry point)
│   │
│   ├── js/
│   │   ├── main.js                # Inicialização principal
│   │   ├── theme-toggle.js        # Dark mode toggle
│   │   ├── navigation.js          # Menu mobile, smooth scroll
│   │   ├── animations.js          # Scroll reveal, counters
│   │   ├── lazy-load.js           # Lazy loading de imagens/iframes
│   │   ├── form-handler.js        # Validação e envio de formulários
│   │   └── cases-loader.js        # Carregamento dinâmico de cases
│   │
│   ├── images/
│   │   ├── logo.svg               # Logo vetorial (dark/light variants)
│   │   ├── favicon.svg            # Favicon moderno
│   │   ├── og-image.jpg           # Open Graph image
│   │   ├── hero/
│   │   │   ├── hero-dashboard.webp
│   │   │   └── hero-dashboard-fallback.jpg
│   │   ├── cases/
│   │   │   ├── case-dre.webp
│   │   │   ├── case-fluxo-caixa.webp
│   │   │   └── case-faturamento.webp
│   │   ├── tech/
│   │   │   ├── powerbi.svg
│   │   │   ├── tableau.svg
│   │   │   ├── python.svg
│   │   │   └── (outros logos de tecnologias)
│   │   └── placeholders/
│   │       └── placeholder-16x9.svg
│   │
│   └── fonts/
│       ├── inter-var.woff2        # Inter Variable Font
│       └── jetbrains-mono.woff2   # JetBrains Mono
│
├── cases/                          # Diretório de cases (já existe)
│   ├── case-1.md                   # Cases em markdown
│   ├── case-2.md
│   └── cases.json                  # Index de cases (NOVO - criar)
│
├── components/                     # Templates reutilizáveis
│   ├── header.html
│   ├── footer.html
│   ├── case-card.html
│   └── service-card.html
│
└── docs/                           # Documentação
    ├── README.md
    ├── STYLE-GUIDE.md
    ├── MAINTENANCE.md
    └── CASES-TEMPLATE.md
```

### Arquivos a DELETAR (código legado)
```
❌ dashboards copy.html
❌ dashboards_NEW.html
❌ index copy.html
❌ threecolumn.html
❌ twocolumn1.html
❌ twocolumn2.html
❌ onecolumn.html
❌ modelos.html
❌ assets/css/main.css (antigo - será substituído)
```

### Arquivos a MANTER e ATUALIZAR
```
✓ CNAME
✓ LICENSE.txt
✓ assets/images/* (otimizar e converter para WebP)
```

---

## 3. SISTEMA DE DESIGN

### 3.1 Arquivo: `assets/css/design-system.css`

**Propósito:** Fundação do design system - tokens, variáveis, estilos base

**Conteúdo Completo:**

```css
/* ==========================================================================
   DESIGN SYSTEM - PODEDATA
   Fundação: Tokens, Variáveis, Estilos Base
   ========================================================================== */

/* --------------------------------------------------------------------------
   CUSTOM PROPERTIES (CSS Variables)
   -------------------------------------------------------------------------- */

:root {
  /* === COLORS === */
  
  /* Primary Colors */
  --color-primary: #0A7AFF;
  --color-primary-rgb: 10, 122, 255;
  --color-primary-light: #4DA3FF;
  --color-primary-dark: #0556B3;
  
  /* Secondary Colors */
  --color-secondary: #6C5CE7;
  --color-secondary-rgb: 108, 92, 231;
  --color-secondary-light: #9F8FEF;
  --color-secondary-dark: #4A3DB8;
  
  /* Accent Colors */
  --color-accent: #00D9A3;
  --color-accent-rgb: 0, 217, 163;
  --color-accent-light: #33E3B8;
  --color-accent-dark: #00A37A;
  
  /* Neutral Colors */
  --color-neutral-900: #1A1D29;
  --color-neutral-800: #2D3142;
  --color-neutral-700: #4B5369;
  --color-neutral-600: #6B7280;
  --color-neutral-500: #9CA3AF;
  --color-neutral-400: #D1D5DB;
  --color-neutral-300: #E5E7EB;
  --color-neutral-200: #F3F4F6;
  --color-neutral-100: #F9FAFB;
  --color-neutral-50: #FFFFFF;
  
  /* Semantic Colors */
  --color-success: #00D9A3;
  --color-warning: #FFB800;
  --color-error: #FF4757;
  --color-info: #0A7AFF;
  
  /* Background Colors */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F9FAFB;
  --bg-tertiary: #F3F4F6;
  --bg-elevated: #FFFFFF;
  
  /* Text Colors */
  --text-primary: var(--color-neutral-900);
  --text-secondary: var(--color-neutral-700);
  --text-tertiary: var(--color-neutral-600);
  --text-inverse: var(--color-neutral-50);
  
  /* Border Colors */
  --border-light: var(--color-neutral-300);
  --border-medium: var(--color-neutral-400);
  --border-dark: var(--color-neutral-600);
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #0A7AFF 0%, #6C5CE7 100%);
  --gradient-accent: linear-gradient(135deg, #00D9A3 0%, #0A7AFF 100%);
  --gradient-hero: linear-gradient(135deg, rgba(10, 122, 255, 0.05) 0%, rgba(108, 92, 231, 0.05) 100%);
  --gradient-dark: linear-gradient(180deg, rgba(26, 29, 41, 0) 0%, rgba(26, 29, 41, 0.8) 100%);
  
  /* === TYPOGRAPHY === */
  
  /* Font Families */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  --font-display: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Font Sizes */
  --text-xs: 0.75rem;     /* 12px */
  --text-sm: 0.875rem;    /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg: 1.125rem;    /* 18px */
  --text-xl: 1.25rem;     /* 20px */
  --text-2xl: 1.5rem;     /* 24px */
  --text-3xl: 1.875rem;   /* 30px */
  --text-4xl: 2.25rem;    /* 36px */
  --text-5xl: 3rem;       /* 48px */
  --text-6xl: 3.75rem;    /* 60px */
  --text-7xl: 4.5rem;     /* 72px */
  
  /* Font Weights */
  --font-light: 300;
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
  
  /* Line Heights */
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;
  
  /* Letter Spacing */
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  
  /* === SPACING === */
  
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
  
  /* === SIZING === */
  
  /* Container */
  --container-max-width: 1200px;
  --container-padding: var(--space-6);
  
  /* Section Spacing */
  --section-padding-y: var(--space-20);
  --section-padding-y-sm: var(--space-12);
  
  /* === BORDERS === */
  
  --border-width: 1px;
  --border-width-thick: 2px;
  
  /* Border Radius */
  --radius-sm: 0.25rem;   /* 4px */
  --radius-md: 0.5rem;    /* 8px */
  --radius-lg: 0.75rem;   /* 12px */
  --radius-xl: 1rem;      /* 16px */
  --radius-2xl: 1.5rem;   /* 24px */
  --radius-full: 9999px;
  
  /* === SHADOWS === */
  
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
  
  /* Colored Shadows */
  --shadow-primary: 0 10px 30px -5px rgba(10, 122, 255, 0.3);
  --shadow-accent: 0 10px 30px -5px rgba(0, 217, 163, 0.3);
  
  /* === TRANSITIONS === */
  
  --transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
  
  /* === Z-INDEX === */
  
  --z-base: 0;
  --z-dropdown: 1000;
  --z-sticky: 1020;
  --z-fixed: 1030;
  --z-modal-backdrop: 1040;
  --z-modal: 1050;
  --z-popover: 1060;
  --z-tooltip: 1070;
}

/* --------------------------------------------------------------------------
   DARK MODE
   -------------------------------------------------------------------------- */

[data-theme="dark"] {
  /* Color Overrides */
  --color-neutral-900: #F9FAFB;
  --color-neutral-800: #F3F4F6;
  --color-neutral-700: #E5E7EB;
  --color-neutral-600: #D1D5DB;
  --color-neutral-500: #9CA3AF;
  --color-neutral-400: #6B7280;
  --color-neutral-300: #4B5369;
  --color-neutral-200: #2D3142;
  --color-neutral-100: #1F2235;
  --color-neutral-50: #1A1D29;
  
  /* Backgrounds */
  --bg-primary: #1A1D29;
  --bg-secondary: #1F2235;
  --bg-tertiary: #2D3142;
  --bg-elevated: #1F2235;
  
  /* Text */
  --text-primary: #F9FAFB;
  --text-secondary: #E5E7EB;
  --text-tertiary: #D1D5DB;
  --text-inverse: #1A1D29;
  
  /* Borders */
  --border-light: #2D3142;
  --border-medium: #4B5369;
  --border-dark: #6B7280;
  
  /* Shadows - Lighter in dark mode */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.6), 0 10px 10px -5px rgba(0, 0, 0, 0.4);
}

/* --------------------------------------------------------------------------
   BASE STYLES
   -------------------------------------------------------------------------- */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: var(--font-normal);
  line-height: var(--leading-relaxed);
  color: var(--text-primary);
  background-color: var(--bg-primary);
  transition: background-color var(--transition-base), color var(--transition-base);
}

/* Typography Base */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-display);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  color: var(--text-primary);
  margin-bottom: var(--space-4);
}

h1 {
  font-size: var(--text-5xl);
  letter-spacing: var(--tracking-tight);
}

h2 {
  font-size: var(--text-4xl);
  letter-spacing: var(--tracking-tight);
}

h3 {
  font-size: var(--text-3xl);
}

h4 {
  font-size: var(--text-2xl);
}

h5 {
  font-size: var(--text-xl);
}

h6 {
  font-size: var(--text-lg);
}

p {
  margin-bottom: var(--space-4);
  color: var(--text-secondary);
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-primary-dark);
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

ul, ol {
  padding-left: var(--space-6);
  margin-bottom: var(--space-4);
}

li {
  margin-bottom: var(--space-2);
  color: var(--text-secondary);
}

code {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background-color: var(--bg-tertiary);
  padding: 0.2em 0.4em;
  border-radius: var(--radius-sm);
}

/* Selection */
::selection {
  background-color: var(--color-primary);
  color: var(--color-neutral-50);
}

/* Focus Styles */
:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* --------------------------------------------------------------------------
   RESPONSIVE TYPOGRAPHY
   -------------------------------------------------------------------------- */

@media (max-width: 768px) {
  :root {
    --text-5xl: 2.5rem;   /* 40px */
    --text-4xl: 2rem;     /* 32px */
    --text-3xl: 1.5rem;   /* 24px */
    --section-padding-y: var(--space-12);
  }
  
  h1 {
    font-size: var(--text-5xl);
  }
  
  h2 {
    font-size: var(--text-4xl);
  }
  
  h3 {
    font-size: var(--text-3xl);
  }
}

@media (max-width: 480px) {
  :root {
    --text-5xl: 2rem;     /* 32px */
    --text-4xl: 1.75rem;  /* 28px */
    --section-padding-y: var(--space-10);
    --container-padding: var(--space-4);
  }
}
```

### 3.2 Arquivo: `assets/css/layout.css`

**Propósito:** Grid system, containers, spacing utilities

```css
/* ==========================================================================
   LAYOUT SYSTEM - PODEDATA
   Grid, Containers, Spacing
   ========================================================================== */

/* --------------------------------------------------------------------------
   CONTAINER
   -------------------------------------------------------------------------- */

.container {
  width: 100%;
  max-width: var(--container-max-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
}

.container-fluid {
  width: 100%;
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
}

.container-narrow {
  max-width: 800px;
}

.container-wide {
  max-width: 1400px;
}

/* --------------------------------------------------------------------------
   GRID SYSTEM
   -------------------------------------------------------------------------- */

.grid {
  display: grid;
  gap: var(--space-6);
}

/* Grid Columns */
.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
.grid-cols-6 { grid-template-columns: repeat(6, 1fr); }
.grid-cols-12 { grid-template-columns: repeat(12, 1fr); }

/* Column Span */
.col-span-1 { grid-column: span 1; }
.col-span-2 { grid-column: span 2; }
.col-span-3 { grid-column: span 3; }
.col-span-4 { grid-column: span 4; }
.col-span-6 { grid-column: span 6; }
.col-span-full { grid-column: 1 / -1; }

/* Grid Gap Variations */
.gap-2 { gap: var(--space-2); }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }
.gap-8 { gap: var(--space-8); }
.gap-12 { gap: var(--space-12); }

/* --------------------------------------------------------------------------
   FLEXBOX UTILITIES
   -------------------------------------------------------------------------- */

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

/* Flex Direction */
.flex-row { flex-direction: row; }
.flex-col { flex-direction: column; }
.flex-row-reverse { flex-direction: row-reverse; }
.flex-col-reverse { flex-direction: column-reverse; }

/* Flex Wrap */
.flex-wrap { flex-wrap: wrap; }
.flex-nowrap { flex-wrap: nowrap; }

/* Justify Content */
.justify-start { justify-content: flex-start; }
.justify-end { justify-content: flex-end; }
.justify-center { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-around { justify-content: space-around; }

/* Align Items */
.items-start { align-items: flex-start; }
.items-end { align-items: flex-end; }
.items-center { align-items: center; }
.items-baseline { align-items: baseline; }
.items-stretch { align-items: stretch; }

/* Gap */
.gap-2 { gap: var(--space-2); }
.gap-4 { gap: var(--space-4); }
.gap-6 { gap: var(--space-6); }

/* --------------------------------------------------------------------------
   SECTION SPACING
   -------------------------------------------------------------------------- */

.section {
  padding-top: var(--section-padding-y);
  padding-bottom: var(--section-padding-y);
}

.section-sm {
  padding-top: var(--section-padding-y-sm);
  padding-bottom: var(--section-padding-y-sm);
}

.section-header {
  text-align: center;
  margin-bottom: var(--space-12);
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.section-header h2 {
  margin-bottom: var(--space-4);
}

.section-header p {
  font-size: var(--text-lg);
  color: var(--text-secondary);
}

/* --------------------------------------------------------------------------
   RESPONSIVE GRID
   -------------------------------------------------------------------------- */

@media (max-width: 1024px) {
  .grid-cols-4 {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .grid-cols-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-cols-2,
  .grid-cols-3,
  .grid-cols-4 {
    grid-template-columns: 1fr;
  }
  
  .col-span-2,
  .col-span-3,
  .col-span-4,
  .col-span-6 {
    grid-column: span 1;
  }
}
```

---

## 4. ESPECIFICAÇÕES TÉCNICAS POR ARQUIVO

### 4.1 index.html (Home Page)

**Estrutura Completa:**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <!-- Meta Tags Básicas -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- SEO Meta Tags -->
    <title>Podedata - Arquitetura de Dados e Business Intelligence | Transforme Dados em Decisões</title>
    <meta name="description" content="Especialistas em Data Engineering, Analytics e BI. Transformamos dados em decisões estratégicas com Power BI, Tableau e soluções personalizadas.">
    <meta name="keywords" content="business intelligence, data engineering, power bi, tableau, analytics, dados, dashboards, data warehouse">
    <meta name="author" content="Podedata">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="https://www.podedata.com.br/">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.podedata.com.br/">
    <meta property="og:title" content="Podedata - Arquitetura de Dados e Business Intelligence">
    <meta property="og:description" content="Transformamos dados em decisões estratégicas. Especialistas em Data Engineering, Analytics e BI.">
    <meta property="og:image" content="https://www.podedata.com.br/assets/images/og-image.jpg">
    <meta property="og:locale" content="pt_BR">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://www.podedata.com.br/">
    <meta name="twitter:title" content="Podedata - Arquitetura de Dados e Business Intelligence">
    <meta name="twitter:description" content="Transformamos dados em decisões estratégicas.">
    <meta name="twitter:image" content="https://www.podedata.com.br/assets/images/og-image.jpg">
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="assets/images/favicon.svg">
    <link rel="alternate icon" href="assets/images/favicon.ico">
    
    <!-- Preconnect para Performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Google Fonts: Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    
    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/main.css">
    
    <!-- Theme Script (Load early to prevent flash) -->
    <script>
        // Carrega tema antes do render
        (function() {
            const theme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', theme);
        })();
    </script>
    
    <!-- Structured Data (Schema.org) -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Podedata",
        "url": "https://www.podedata.com.br",
        "logo": "https://www.podedata.com.br/assets/images/logo.svg",
        "description": "Arquitetura de Dados e Business Intelligence",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "BR"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-47-99197-7935",
            "contactType": "Sales",
            "availableLanguage": "Portuguese"
        },
        "sameAs": [
            "https://www.linkedin.com/company/podedata"
        ]
    }
    </script>
</head>
<body>
    <!-- ============================================================
         HEADER / NAVIGATION
         ============================================================ -->
    <header class="site-header" id="header">
        <div class="container">
            <div class="header-content">
                <!-- Logo -->
                <a href="/" class="logo" aria-label="Podedata - Home">
                    <svg class="logo-icon" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <!-- SVG logo aqui - será definido depois -->
                        <rect width="40" height="40" rx="8" fill="url(#logo-gradient)"/>
                        <defs>
                            <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40">
                                <stop offset="0%" stop-color="var(--color-primary)"/>
                                <stop offset="100%" stop-color="var(--color-secondary)"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <span class="logo-text">PODE Data</span>
                </a>
                
                <!-- Desktop Navigation -->
                <nav class="main-nav" id="main-nav">
                    <a href="/" class="nav-link active">Início</a>
                    <a href="/solucoes" class="nav-link">Soluções</a>
                    <a href="/cases" class="nav-link">Cases</a>
                    <a href="/processo" class="nav-link">Processo</a>
                    <a href="/sobre" class="nav-link">Sobre</a>
                    <a href="/contato" class="btn btn-primary btn-sm">Fale Conosco</a>
                </nav>
                
                <!-- Mobile Menu Toggle + Theme Toggle -->
                <div class="header-actions">
                    <button class="theme-toggle" id="theme-toggle" aria-label="Alternar tema">
                        <svg class="sun-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="10" cy="10" r="4"/>
                            <path d="M10 1v2m0 14v2M19 10h-2M3 10H1m15.07-6.93l-1.41 1.41M5.34 14.66l-1.41 1.41m12.14 0l-1.41-1.41M5.34 5.34L3.93 3.93"/>
                        </svg>
                        <svg class="moon-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17.66 12.34A8 8 0 1 1 7.66 2.34a8 8 0 0 0 10 10z"/>
                        </svg>
                    </button>
                    
                    <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Menu" aria-expanded="false">
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Mobile Navigation -->
        <div class="mobile-nav" id="mobile-nav">
            <div class="mobile-nav-content">
                <a href="/" class="mobile-nav-link">Início</a>
                <a href="/solucoes" class="mobile-nav-link">Soluções</a>
                <a href="/cases" class="mobile-nav-link">Cases</a>
                <a href="/processo" class="mobile-nav-link">Processo</a>
                <a href="/sobre" class="mobile-nav-link">Sobre</a>
                <a href="/contato" class="btn btn-primary btn-block">Fale Conosco</a>
            </div>
        </div>
    </header>

    <!-- ============================================================
         HERO SECTION
         ============================================================ -->
    <section class="hero" id="hero">
        <div class="container">
            <div class="hero-content">
                <!-- Hero Text -->
                <div class="hero-text">
                    <h1 class="hero-headline">
                        Arquitetura de Dados que
                        <span class="gradient-text">Transforma Seu Negócio</span>
                    </h1>
                    <p class="hero-subheadline">
                        Data Engineering, Analytics e Business Intelligence para empresas que querem 
                        decisões estratégicas baseadas em dados reais.
                    </p>
                    
                    <!-- CTAs -->
                    <div class="hero-ctas">
                        <a href="/contato" class="btn btn-primary btn-large">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            Agendar Diagnóstico Gratuito
                        </a>
                        <a href="/cases" class="btn btn-secondary btn-large">
                            Ver Cases
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12l5 5L20 7"/>
                            </svg>
                        </a>
                    </div>
                    
                    <!-- Trust Badge -->
                    <div class="hero-trust">
                        <div class="trust-items">
                            <div class="trust-item">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 0l2.5 5.1L16 6l-4 3.9.9 5.1L8 12.5 3.1 15l.9-5.1L0 6l5.5-.9L8 0z"/>
                                </svg>
                                <span>150+ Dashboards Criados</span>
                            </div>
                            <div class="trust-item">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                                    <path d="M8 0l2.5 5.1L16 6l-4 3.9.9 5.1L8 12.5 3.1 15l.9-5.1L0 6l5.5-.9L8 0z"/>
                                </svg>
                                <span>50+ Empresas Atendidas</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Hero Visual -->
                <div class="hero-visual">
                    <div class="hero-image-wrapper">
                        <picture>
                            <source srcset="assets/images/hero/hero-dashboard.webp" type="image/webp">
                            <img 
                                src="assets/images/hero/hero-dashboard.jpg" 
                                alt="Dashboard de Business Intelligence"
                                class="hero-image"
                                loading="eager"
                                width="600"
                                height="450"
                            >
                        </picture>
                        
                        <!-- Floating Stats Cards (Opcionais - animados) -->
                        <div class="floating-stat floating-stat-1">
                            <div class="stat-icon">📊</div>
                            <div class="stat-content">
                                <div class="stat-value">+80%</div>
                                <div class="stat-label">Eficiência</div>
                            </div>
                        </div>
                        
                        <div class="floating-stat floating-stat-2">
                            <div class="stat-icon">⚡</div>
                            <div class="stat-content">
                                <div class="stat-value">Real-time</div>
                                <div class="stat-label">Dashboards</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Background Elements -->
        <div class="hero-background">
            <div class="hero-gradient"></div>
            <div class="hero-pattern"></div>
        </div>
    </section>

    <!-- ============================================================
         STATS SECTION
         ============================================================ -->
    <section class="stats-section section-sm" id="stats">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">
                        <span class="counter" data-target="150">0</span>
                        <span class="stat-suffix">+</span>
                    </div>
                    <div class="stat-label">Dashboards Criados</div>
                    <div class="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2"/>
                            <path d="M3 9h18M9 21V9"/>
                        </svg>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-number">
                        <span class="counter" data-target="50">0</span>
                        <span class="stat-suffix">+</span>
                    </div>
                    <div class="stat-label">Empresas Atendidas</div>
                    <div class="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                        </svg>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-number">
                        <span class="counter" data-target="99">0</span>
                        <span class="stat-suffix">%</span>
                    </div>
                    <div class="stat-label">Satisfação</div>
                    <div class="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                            <path d="M22 4L12 14.01l-3-3"/>
                        </svg>
                    </div>
                </div>
                
                <div class="stat-card">
                    <div class="stat-number">
                        <span class="counter" data-target="24">0</span>
                        <span class="stat-suffix">h</span>
                    </div>
                    <div class="stat-label">Tempo de Resposta</div>
                    <div class="stat-icon">
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 6v6l4 2"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ============================================================
         PROBLEM/SOLUTION SECTION
         ============================================================ -->
    <section class="problem-solution section" id="problem-solution">
        <div class="container">
            <div class="section-header">
                <h2>Está perdendo oportunidades por não ter visão clara dos seus dados?</h2>
                <p>Transformamos esses desafios em vantagens competitivas</p>
            </div>
            
            <div class="problems-grid grid grid-cols-3">
                <div class="problem-card">
                    <div class="problem-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                            <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
                        </svg>
                    </div>
                    <h3>Dados em Silos Desconectados</h3>
                    <p>Informações espalhadas em planilhas, sistemas e relatórios manuais que não conversam entre si.</p>
                </div>
                
                <div class="problem-card">
                    <div class="problem-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 6v6l4 2"/>
                        </svg>
                    </div>
                    <h3>Decisões Demoradas</h3>
                    <p>Horas ou dias para consolidar informações básicas, perdendo agilidade no mercado.</p>
                </div>
                
                <div class="problem-card">
                    <div class="problem-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                            <circle cx="12" cy="12" r="3"/>
                        </svg>
                    </div>
                    <h3>Falta de Visibilidade</h3>
                    <p>Não saber onde estão os gargalos, oportunidades e riscos do negócio em tempo real.</p>
                </div>
            </div>
            
            <!-- Solution CTA -->
            <div class="solution-cta">
                <div class="solution-content">
                    <h3>Transformamos isso em dados organizados, dashboards automatizados e decisões em tempo real.</h3>
                    <a href="/solucoes" class="btn btn-secondary btn-large">
                        Conheça Nossas Soluções
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14m0 0l-7-7m7 7l-7 7"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- ============================================================
         SERVICES SECTION
         ============================================================ -->
    <section class="services section" id="services">
        <div class="container">
            <div class="section-header">
                <h2>Como Podemos Ajudar</h2>
                <p>Soluções completas de dados, da infraestrutura à visualização</p>
            </div>
            
            <div class="services-grid grid grid-cols-3">
                <!-- Service Card 1 -->
                <article class="service-card">
                    <div class="service-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                        </svg>
                    </div>
                    <h3>Data Engineering & Pipelines</h3>
                    <p>Arquitetura robusta, ETL/ELT, data warehouses e integração de múltiplas fontes de dados.</p>
                    <ul class="service-benefits">
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 10l3 3L18 3"/>
                            </svg>
                            Dados centralizados e organizados
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 10l3 3L18 3"/>
                            </svg>
                            Pipelines automatizados e confiáveis
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 10l3 3L18 3"/>
                            </svg>
                            Infraestrutura escalável
                        </li>
                    </ul>
                    <a href="/solucoes#data-engineering" class="service-link">
                        Saiba mais
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 8h8m0 0l-4-4m4 4l-4 4"/>
                        </svg>
                    </a>
                </article>
                
                <!-- Service Card 2 (Featured) -->
                <article class="service-card service-card-featured">
                    <div class="service-badge">Mais Popular</div>
                    <div class="service-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2"/>
                            <path d="M3 9h18M9 21V9"/>
                        </svg>
                    </div>
                    <h3>Business Intelligence & Dashboards</h3>
                    <p>Dashboards interativos, relatórios automatizados e análises estratégicas em tempo real.</p>
                    <ul class="service-benefits">
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 10l3 3L18 3"/>
                            </svg>
                            Visualizações claras e intuitivas
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 10l3 3L18 3"/>
                            </svg>
                            Atualizações em tempo real
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 10l3 3L18 3"/>
                            </svg>
                            Power BI, Tableau, Metabase
                        </li>
                    </ul>
                    <a href="/solucoes#business-intelligence" class="service-link">
                        Saiba mais
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 8h8m0 0l-4-4m4 4l-4 4"/>
                        </svg>
                    </a>
                </article>
                
                <!-- Service Card 3 -->
                <article class="service-card">
                    <div class="service-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                            <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <h3>Data Strategy & Consulting</h3>
                    <p>Consultoria estratégica para definir roadmap, governança e cultura orientada a dados.</p>
                    <ul class="service-benefits">
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 10l3 3L18 3"/>
                            </svg>
                            Diagnóstico completo
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 10l3 3L18 3"/>
                            </svg>
                            Roadmap personalizado
                        </li>
                        <li>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 10l3 3L18 3"/>
                            </svg>
                            Melhores práticas do mercado
                        </li>
                    </ul>
                    <a href="/solucoes#data-strategy" class="service-link">
                        Saiba mais
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 8h8m0 0l-4-4m4 4l-4 4"/>
                        </svg>
                    </a>
                </article>
            </div>
            
            <!-- View All Services CTA -->
            <div class="services-cta">
                <a href="/solucoes" class="btn btn-secondary">
                    Ver Todas as Soluções
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12h14m0 0l-7-7m7 7l-7 7"/>
                    </svg>
                </a>
            </div>
        </div>
    </section>

    <!-- Continua... (Process, Cases, Tech Stack, Final CTA, Footer) -->
    
    <!-- NOTA PARA IA: Este é um exemplo parcial da estrutura HTML.
         O arquivo completo teria todas as seções conforme descrito na análise.
         Vou continuar com as especificações CSS em seguida. -->
    
</body>
</html>
```

---

## 5. COMPONENTES E PADRÕES

### 5.1 Arquivo: `assets/css/components.css`

**Componentes Principais:**

```css
/* ==========================================================================
   COMPONENTS - PODEDATA
   Cards, Buttons, Forms, Navigation
   ========================================================================== */

/* --------------------------------------------------------------------------
   BUTTONS
   -------------------------------------------------------------------------- */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  font-size: var(--text-base);
  font-weight: var(--font-semibold);
  font-family: var(--font-sans);
  line-height: 1;
  text-decoration: none;
  border: var(--border-width) solid transparent;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-base);
  white-space: nowrap;
}

.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Button Variants */
.btn-primary {
  background: var(--gradient-primary);
  color: var(--color-neutral-50);
  box-shadow: var(--shadow-primary);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-secondary:hover {
  background-color: var(--color-primary);
  color: var(--color-neutral-50);
}

.btn-ghost {
  background-color: transparent;
  color: var(--text-primary);
}

.btn-ghost:hover {
  background-color: var(--bg-tertiary);
}

/* Button Sizes */
.btn-sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
}

.btn-large {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-lg);
}

.btn-block {
  width: 100%;
  display: flex;
}

/* --------------------------------------------------------------------------
   CARDS
   -------------------------------------------------------------------------- */

.card {
  background-color: var(--bg-elevated);
  border: var(--border-width) solid var(--border-light);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  transition: all var(--transition-base);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  border-color: var(--color-primary);
}

/* Service Card */
.service-card {
  position: relative;
  background-color: var(--bg-elevated);
  border: var(--border-width) solid var(--border-light);
  border-radius: var(--radius-2xl);
  padding: var(--space-10);
  transition: all var(--transition-base);
}

.service-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2xl);
  border-color: var(--color-primary);
}

.service-card-featured {
  background: var(--gradient-hero);
  border-color: var(--color-primary);
  border-width: var(--border-width-thick);
}

.service-icon {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--gradient-primary);
  border-radius: var(--radius-xl);
  margin-bottom: var(--space-6);
  color: var(--color-neutral-50);
}

.service-card h3 {
  margin-bottom: var(--space-4);
  font-size: var(--text-2xl);
}

.service-card > p {
  margin-bottom: var(--space-6);
  color: var(--text-secondary);
  line-height: var(--leading-relaxed);
}

.service-benefits {
  list-style: none;
  padding: 0;
  margin-bottom: var(--space-6);
}

.service-benefits li {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
  color: var(--text-secondary);
}

.service-benefits svg {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-success);
}

.service-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-primary);
  font-weight: var(--font-semibold);
  text-decoration: none;
  transition: gap var(--transition-fast);
}

.service-link:hover {
  gap: var(--space-3);
}

.service-badge {
  position: absolute;
  top: var(--space-6);
  right: var(--space-6);
  padding: var(--space-2) var(--space-4);
  background: var(--gradient-accent);
  color: var(--color-neutral-50);
  font-size: var(--text-xs);
  font-weight: var(--font-bold);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  border-radius: var(--radius-full);
}

/* Case Card */
.case-card {
  background-color: var(--bg-elevated);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  transition: all var(--transition-base);
}

.case-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2xl);
}

.case-thumbnail {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background-color: var(--bg-tertiary);
}

.case-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.case-card:hover .case-thumbnail img {
  transform: scale(1.05);
}

.case-overlay {
  position: absolute;
  inset: 0;
  background: var(--gradient-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.case-card:hover .case-overlay {
  opacity: 1;
}

.case-overlay .view-case {
  color: var(--color-neutral-50);
  font-weight: var(--font-semibold);
  font-size: var(--text-lg);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.case-content {
  padding: var(--space-8);
}

.case-tags {
  display: flex;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.case-tags .tag {
  padding: var(--space-1) var(--space-3);
  background-color: var(--bg-tertiary);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  border-radius: var(--radius-full);
}

.case-content h3 {
  margin-bottom: var(--space-3);
  font-size: var(--text-xl);
}

.case-content p {
  color: var(--text-secondary);
  margin-bottom: var(--space-4);
}

.case-results {
  padding-top: var(--space-4);
  border-top: var(--border-width) solid var(--border-light);
}

.case-results span {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--color-success);
  font-weight: var(--font-medium);
  font-size: var(--text-sm);
}

/* Problem Card */
.problem-card {
  text-align: center;
  padding: var(--space-8);
  background-color: var(--bg-elevated);
  border: var(--border-width) solid var(--border-light);
  border-radius: var(--radius-2xl);
  transition: all var(--transition-base);
}

.problem-card:hover {
  border-color: var(--color-error);
  box-shadow: var(--shadow-lg);
}

.problem-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--space-6);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-tertiary);
  border-radius: var(--radius-xl);
  color: var(--color-error);
}

.problem-card h3 {
  margin-bottom: var(--space-4);
  font-size: var(--text-xl);
}

/* Stat Card */
.stat-card {
  position: relative;
  text-align: center;
  padding: var(--space-10);
  background-color: var(--bg-elevated);
  border: var(--border-width) solid var(--border-light);
  border-radius: var(--radius-2xl);
  overflow: hidden;
  transition: all var(--transition-base);
}

.stat-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--gradient-primary);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.stat-card:hover::before {
  opacity: 1;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.stat-number {
  font-size: var(--text-6xl);
  font-weight: var(--font-extrabold);
  line-height: 1;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--space-4);
}

.stat-suffix {
  font-size: var(--text-4xl);
}

.stat-label {
  font-size: var(--text-lg);
  color: var(--text-secondary);
  font-weight: var(--font-medium);
}

.stat-icon {
  position: absolute;
  bottom: var(--space-6);
  right: var(--space-6);
  opacity: 0.1;
  color: var(--color-primary);
}

/* --------------------------------------------------------------------------
   FORMS
   -------------------------------------------------------------------------- */

.form-group {
  margin-bottom: var(--space-6);
}

.form-label {
  display: block;
  margin-bottom: var(--space-2);
  font-weight: var(--font-medium);
  color: var(--text-primary);
}

.form-input,
.form-textarea,
.form-select {
  width: 100%;
  padding: var(--space-4);
  font-family: var(--font-sans);
  font-size: var(--text-base);
  color: var(--text-primary);
  background-color: var(--bg-elevated);
  border: var(--border-width) solid var(--border-medium);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.form-input:focus,
.form-textarea:focus,
.form-select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(var(--color-primary-rgb), 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 150px;
}

.form-error {
  color: var(--color-error);
  font-size: var(--text-sm);
  margin-top: var(--space-2);
}

.form-input.is-invalid {
  border-color: var(--color-error);
}

/* --------------------------------------------------------------------------
   GRADIENT TEXT
   -------------------------------------------------------------------------- */

.gradient-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* --------------------------------------------------------------------------
   TECH LOGOS
   -------------------------------------------------------------------------- */

.tech-logos {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-6);
  justify-content: center;
  align-items: center;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-4);
  transition: transform var(--transition-base);
}

.tech-item:hover {
  transform: translateY(-4px);
}

.tech-item img {
  width: 64px;
  height: 64px;
  object-fit: contain;
  filter: grayscale(100%);
  opacity: 0.6;
  transition: all var(--transition-base);
}

.tech-item:hover img {
  filter: grayscale(0%);
  opacity: 1;
}

.tech-item span {
  font-size: var(--text-sm);
  color: var(--text-tertiary);
  font-weight: var(--font-medium);
}
```

---

## 6. JAVASCRIPT E INTERATIVIDADE

### 6.1 Arquivo: `assets/js/theme-toggle.js`

**Funcionalidade:** Toggle entre Light e Dark Mode

```javascript
/**
 * THEME TOGGLE - PODEDATA
 * Gerencia alternância entre light e dark mode
 */

class ThemeToggle {
    constructor() {
        this.themeToggleBtn = document.getElementById('theme-toggle');
        this.currentTheme = localStorage.getItem('theme') || 'light';
        
        this.init();
    }
    
    init() {
        // Aplica tema inicial
        this.applyTheme(this.currentTheme);
        
        // Event listener no botão
        if (this.themeToggleBtn) {
            this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
        }
        
        // Escuta mudanças de preferência do sistema
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                this.applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }
    
    applyTheme(theme) {
        this.currentTheme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        
        // Atualiza ícones do botão
        if (this.themeToggleBtn) {
            const sunIcon = this.themeToggleBtn.querySelector('.sun-icon');
            const moonIcon = this.themeToggleBtn.querySelector('.moon-icon');
            
            if (theme === 'dark') {
                sunIcon?.classList.add('active');
                moonIcon?.classList.remove('active');
            } else {
                sunIcon?.classList.remove('active');
                moonIcon?.classList.add('active');
            }
        }
        
        // Dispatch custom event para outros scripts
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
    }
}

// Inicializa quando DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new ThemeToggle());
} else {
    new ThemeToggle();
}
```

### 6.2 Arquivo: `assets/js/navigation.js`

**Funcionalidade:** Menu mobile, scroll suave, header scroll

```javascript
/**
 * NAVIGATION - PODEDATA
 * Menu mobile, smooth scroll, sticky header
 */

class Navigation {
    constructor() {
        this.header = document.getElementById('header');
        this.mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        this.mobileNav = document.getElementById('mobile-nav');
        this.mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
        this.navLinks = document.querySelectorAll('a[href^="#"]');
        
        this.lastScroll = 0;
        
        this.init();
    }
    
    init() {
        // Mobile menu toggle
        this.mobileMenuToggle?.addEventListener('click', () => this.toggleMobileMenu());
        
        // Fecha menu ao clicar em link
        this.mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });
        
        // Fecha menu ao clicar fora
        document.addEventListener('click', (e) => {
            if (this.mobileNav?.classList.contains('is-open') && 
                !this.mobileNav.contains(e.target) && 
                !this.mobileMenuToggle.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
        
        // Smooth scroll para âncoras
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.smoothScroll(e));
        });
        
        // Sticky header e hide on scroll
        window.addEventListener('scroll', () => this.handleScroll());
    }
    
    toggleMobileMenu() {
        const isOpen = this.mobileNav.classList.toggle('is-open');
        this.mobileMenuToggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    
    closeMobileMenu() {
        this.mobileNav.classList.remove('is-open');
        this.mobileMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    
    smoothScroll(e) {
        const href = e.currentTarget.getAttribute('href');
        
        // Apenas para âncoras na mesma página
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const headerHeight = this.header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }
    
    handleScroll() {
        const currentScroll = window.pageYOffset;
        
        // Adiciona classe quando scrolla
        if (currentScroll > 100) {
            this.header.classList.add('is-scrolled');
        } else {
            this.header.classList.remove('is-scrolled');
        }
        
        // Hide header on scroll down (opcional)
        // Descomente se quiser header que esconde ao scrolar para baixo
        /*
        if (currentScroll > this.lastScroll && currentScroll > 500) {
            this.header.classList.add('is-hidden');
        } else {
            this.header.classList.remove('is-hidden');
        }
        */
        
        this.lastScroll = currentScroll;
    }
}

// Inicializa
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new Navigation());
} else {
    new Navigation();
}
```

### 6.3 Arquivo: `assets/js/animations.js`

**Funcionalidade:** Scroll reveal, counters, floating elements

```javascript
/**
 * ANIMATIONS - PODEDATA
 * Scroll reveal, counters, floating stats
 */

class Animations {
    constructor() {
        this.counters = document.querySelectorAll('.counter');
        this.revealElements = document.querySelectorAll('[data-reveal]');
        this.hasCountedUp = new Set();
        
        this.init();
    }
    
    init() {
        // Intersection Observer para scroll reveal
        this.setupScrollReveal();
        
        // Counter animation
        this.setupCounters();
    }
    
    setupScrollReveal() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    
                    // Opcional: unobserve após revelar
                    // observer.unobserve(entry.target);
                }
            });
        }, options);
        
        // Observa todos os elementos com data-reveal
        this.revealElements.forEach(el => observer.observe(el));
        
        // Também observa cards automaticamente
        document.querySelectorAll('.service-card, .case-card, .problem-card, .stat-card').forEach(el => {
            el.setAttribute('data-reveal', 'true');
            observer.observe(el);
        });
    }
    
    setupCounters() {
        const options = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.hasCountedUp.has(entry.target)) {
                    this.animateCounter(entry.target);
                    this.hasCountedUp.add(entry.target);
                }
            });
        }, options);
        
        this.counters.forEach(counter => observer.observe(counter));
    }
    
    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 segundos
        const step = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };
        
        updateCounter();
    }
}

// Inicializa
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new Animations());
} else {
    new Animations();
}
```

### 6.4 Arquivo: `assets/js/lazy-load.js`

**Funcionalidade:** Lazy loading de imagens e iframes

```javascript
/**
 * LAZY LOAD - PODEDATA
 * Lazy loading de imagens e iframes pesados
 */

class LazyLoader {
    constructor() {
        this.lazyImages = document.querySelectorAll('img[loading="lazy"]');
        this.lazyIframes = document.querySelectorAll('iframe[data-src]');
        
        this.init();
    }
    
    init() {
        // Browser já suporta loading="lazy" nativamente
        // Mas vamos adicionar observer para iframes
        this.setupIframeLoading();
    }
    
    setupIframeLoading() {
        const options = {
            threshold: 0,
            rootMargin: '200px' // Carrega 200px antes de entrar na viewport
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target;
                    const src = iframe.getAttribute('data-src');
                    
                    if (src) {
                        // Mostra loading placeholder
                        iframe.classList.add('is-loading');
                        
                        // Carrega iframe
                        iframe.src = src;
                        iframe.removeAttribute('data-src');
                        
                        // Remove loading quando carregado
                        iframe.addEventListener('load', () => {
                            iframe.classList.remove('is-loading');
                            iframe.classList.add('is-loaded');
                        });
                        
                        observer.unobserve(iframe);
                    }
                }
            });
        }, options);
        
        this.lazyIframes.forEach(iframe => observer.observe(iframe));
    }
}

// Inicializa
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new LazyLoader());
} else {
    new LazyLoader();
}
```

---

## 7. PERFORMANCE E OTIMIZAÇÕES

### 7.1 Otimização de Imagens

**Processo:**

1. **Converter todas as imagens para WebP:**
```bash
# Usando cwebp (instalar: https://developers.google.com/speed/webp/download)
cwebp -q 85 images/hero-dashboard.jpg -o images/hero/hero-dashboard.webp
cwebp -q 85 images/quem_somos.png -o images/quem_somos.webp
```

2. **Implementar Picture element com fallback:**
```html
<picture>
    <source srcset="assets/images/hero/hero-dashboard.webp" type="image/webp">
    <img src="assets/images/hero/hero-dashboard.jpg" alt="Dashboard" loading="lazy">
</picture>
```

3. **Redimensionar imagens para tamanhos adequados:**
- Hero images: max 1920x1080
- Case thumbnails: 800x450
- Logo/icons: vetor SVG quando possível

### 7.2 Critical CSS

**Técnica:** Inline critical CSS no `<head>` para faster First Contentful Paint

```html
<head>
    <!-- Critical CSS inline -->
    <style>
        /* Apenas estilos above-the-fold */
        :root { --color-primary: #0A7AFF; /* variáveis essenciais */ }
        body { font-family: Inter, sans-serif; margin: 0; }
        .site-header { /* estilos do header */ }
        .hero { /* estilos do hero */ }
        /* ... */
    </style>
    
    <!-- CSS completo defer -->
    <link rel="preload" href="assets/css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="assets/css/main.css"></noscript>
</head>
```

### 7.3 JavaScript Defer

```html
<!-- Todos os scripts com defer -->
<script src="assets/js/main.js" defer></script>
<script src="assets/js/theme-toggle.js" defer></script>
<script src="assets/js/navigation.js" defer></script>
<script src="assets/js/animations.js" defer></script>
<script src="assets/js/lazy-load.js" defer></script>
```

### 7.4 Font Loading Strategy

```html
<head>
    <!-- Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- Font com display=swap para evitar FOIT -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
```

---

## 8. DARK MODE IMPLEMENTATION

### 8.1 Arquivo: `assets/css/dark-mode.css`

```css
/* ==========================================================================
   DARK MODE - PODEDATA
   Estilos específicos e ajustes para dark mode
   ========================================================================== */

/* Theme Toggle Button */
.theme-toggle {
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-tertiary);
  border: none;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition-base);
}

.theme-toggle:hover {
  background-color: var(--color-primary);
  color: var(--color-neutral-50);
}

.theme-toggle svg {
  position: absolute;
  transition: all var(--transition-base);
}

.sun-icon,
.moon-icon {
  opacity: 0;
  transform: scale(0) rotate(-90deg);
}

.sun-icon.active,
.moon-icon.active {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

[data-theme="light"] .sun-icon {
  opacity: 0;
  transform: scale(0) rotate(90deg);
}

[data-theme="light"] .moon-icon {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

[data-theme="dark"] .sun-icon {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

[data-theme="dark"] .moon-icon {
  opacity: 0;
  transform: scale(0) rotate(-90deg);
}

/* Dark Mode Specific Adjustments */
[data-theme="dark"] {
  /* Imagens em dark mode - reduzir brilho */
  img:not([data-no-dark-filter]) {
    filter: brightness(0.9) contrast(1.1);
  }
  
  /* Code blocks */
  code {
    background-color: var(--color-neutral-200);
    color: var(--color-neutral-700);
  }
  
  /* Shadows mais suaves */
  .card:hover,
  .service-card:hover,
  .case-card:hover {
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.8);
  }
  
  /* Borders mais visíveis */
  .form-input,
  .form-textarea {
    border-color: var(--border-medium);
  }
}

/* Smooth transition entre temas */
html {
  transition: background-color var(--transition-base);
}

body {
  transition: color var(--transition-base), background-color var(--transition-base);
}
```

---

## 9. RESPONSIVIDADE

### 9.1 Breakpoints Padrão

```css
/* Mobile First Approach */
/* Base styles: 0-479px (mobile) */

/* Small devices */
@media (min-width: 480px) { /* ... */ }

/* Medium devices (tablets) */
@media (min-width: 768px) { /* ... */ }

/* Large devices (desktops) */
@media (min-width: 1024px) { /* ... */ }

/* Extra large devices */
@media (min-width: 1280px) { /* ... */ }
```

### 9.2 Responsive Utilities

```css
/* Display utilities responsivos */
@media (max-width: 767px) {
  .hide-mobile { display: none !important; }
}

@media (min-width: 768px) {
  .hide-desktop { display: none !important; }
}

/* Text alignment */
@media (max-width: 767px) {
  .text-center-mobile { text-align: center; }
}
```

---

## 10. SEO E ACESSIBILIDADE

### 10.1 Structured Data (JSON-LD)

**Incluir em cada página:**

```html
<!-- Organization Schema -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Podedata",
  "url": "https://www.podedata.com.br",
  "logo": "https://www.podedata.com.br/assets/images/logo.svg",
  "description": "Arquitetura de Dados e Business Intelligence",
  "telephone": "+55-47-99197-7935",
  "email": "contato@podedata.com.br",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "BR"
  }
}
</script>

<!-- Breadcrumb Schema (páginas internas) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://www.podedata.com.br"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Soluções",
    "item": "https://www.podedata.com.br/solucoes"
  }]
}
</script>
```

### 10.2 Acessibilidade (WCAG 2.1 AA)

**Checklist:**

- ✅ Contraste mínimo 4.5:1 para texto normal
- ✅ Contraste mínimo 3:1 para texto grande (18px+)
- ✅ Todos os elementos interativos acessíveis por teclado
- ✅ Focus visível em todos os elementos focáveis
- ✅ Landmarks ARIA para navegação
- ✅ Alt text em todas as imagens
- ✅ Labels em todos os form inputs
- ✅ aria-label em botões sem texto

**Exemplo de implementação:**

```html
<!-- Header com landmarks -->
<header role="banner">
  <nav role="navigation" aria-label="Navegação principal">
    <!-- nav content -->
  </nav>
</header>

<!-- Main content -->
<main role="main" id="main-content">
  <!-- content -->
</main>

<!-- Footer -->
<footer role="contentinfo">
  <!-- footer content -->
</footer>

<!-- Skip to content -->
<a href="#main-content" class="skip-to-content">Pular para conteúdo principal</a>
```

### 10.3 robots.txt

```
User-agent: *
Allow: /

Sitemap: https://www.podedata.com.br/sitemap.xml
```

### 10.4 sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.podedata.com.br/</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.podedata.com.br/solucoes</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.podedata.com.br/cases</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.podedata.com.br/processo</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.podedata.com.br/sobre</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>https://www.podedata.com.br/contato</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>0.9</priority>
  </url>
</urlset>
```

---

## 11. INTEGRAÇÃO COM CASES

### 11.1 Arquivo: `cases/cases.json`

**Criar este arquivo para indexar os cases:**

```json
{
  "cases": [
    {
      "id": "dre-gerencial",
      "slug": "dre-gerencial-automatizado",
      "title": "DRE Gerencial Automatizado",
      "excerpt": "Dashboard completo para análise de demonstrativo de resultado com visão horizontal e vertical.",
      "industry": "Financeiro",
      "client": "Indústria de Manufatura - Grande Porte",
      "tool": "Power BI",
      "tools": ["Power BI", "SQL Server", "Python"],
      "thumbnail": "assets/images/cases/case-dre.webp",
      "date": "2024-09",
      "featured": true,
      "results": [
        "80% de redução em tempo de análise",
        "Visibilidade real-time de custos",
        "Decisões 3x mais rápidas"
      ],
      "metrics": {
        "time_saved": "80%",
        "roi": "300%",
        "adoption": "95%"
      },
      "iframe_url": "https://app.powerbi.com/view?r=...",
      "content_file": "cases/dre-gerencial.md"
    },
    {
      "id": "fluxo-caixa",
      "slug": "fluxo-caixa-centro-custo",
      "title": "Fluxo de Caixa por Centro de Custo",
      "excerpt": "Visibilidade completa de entradas e saídas organizadas por departamento.",
      "industry": "Financeiro",
      "client": "Empresa de Serviços - Médio Porte",
      "tool": "Power BI",
      "tools": ["Power BI", "Excel", "Power Query"],
      "thumbnail": "assets/images/cases/case-fluxo-caixa.webp",
      "date": "2024-10",
      "featured": true,
      "results": [
        "Decisões 3x mais rápidas",
        "Redução de 40% em custos ociosos",
        "100% de adoção pela equipe financeira"
      ],
      "iframe_url": "https://app.powerbi.com/view?r=...",
      "content_file": "cases/fluxo-caixa.md"
    },
    {
      "id": "analise-faturamento",
      "slug": "analise-faturamento",
      "title": "Análise de Faturamento",
      "excerpt": "Comparativos mensais e visão estratégica para atingimento de metas.",
      "industry": "Vendas",
      "client": "Distribuidor - Grande Porte",
      "tool": "Power BI",
      "tools": ["Power BI", "SQL", "DAX"],
      "thumbnail": "assets/images/cases/case-faturamento.webp",
      "date": "2024-11",
      "featured": false,
      "results": [
        "ROI em 3 meses",
        "Aumento de 25% em conversão de metas",
        "Insights diários automatizados"
      ],
      "iframe_url": "https://app.powerbi.com/view?r=...",
      "content_file": "cases/analise-faturamento.md"
    }
  ]
}
```

### 11.2 Arquivo: `assets/js/cases-loader.js`

**Carregamento dinâmico de cases:**

```javascript
/**
 * CASES LOADER - PODEDATA
 * Carrega cases dinamicamente do JSON
 */

class CasesLoader {
    constructor() {
        this.casesContainer = document.getElementById('cases-container');
        this.casesData = null;
        
        if (this.casesContainer) {
            this.loadCases();
        }
    }
    
    async loadCases() {
        try {
            const response = await fetch('/cases/cases.json');
            this.casesData = await response.json();
            this.renderCases();
        } catch (error) {
            console.error('Erro ao carregar cases:', error);
            this.showError();
        }
    }
    
    renderCases() {
        const { cases } = this.casesData;
        
        // Filtra apenas featured para home (ou todos se estiver na página cases)
        const casesToShow = this.casesContainer.dataset.showAll === 'true' 
            ? cases 
            : cases.filter(c => c.featured);
        
        const casesHTML = casesToShow.map(caseItem => this.createCaseCard(caseItem)).join('');
        this.casesContainer.innerHTML = casesHTML;
    }
    
    createCaseCard(caseItem) {
        return `
            <article class="case-card" data-reveal="true">
                <div class="case-thumbnail">
                    <picture>
                        <source srcset="${caseItem.thumbnail}" type="image/webp">
                        <img 
                            src="${caseItem.thumbnail.replace('.webp', '.jpg')}" 
                            alt="${caseItem.title}"
                            loading="lazy"
                            width="800"
                            height="450"
                        >
                    </picture>
                    <div class="case-overlay">
                        <span class="view-case">Ver Case Completo →</span>
                    </div>
                </div>
                <div class="case-content">
                    <div class="case-tags">
                        <span class="tag">${caseItem.industry}</span>
                        <span class="tag">${caseItem.tool}</span>
                    </div>
                    <h3>${caseItem.title}</h3>
                    <p>${caseItem.excerpt}</p>
                    <div class="case-results">
                        ${caseItem.results.map(result => 
                            `<span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 8l3 3L13 3"/>
                                </svg>
                                ${result}
                            </span>`
                        ).join('')}
                    </div>
                </div>
            </article>
        `;
    }
    
    showError() {
        this.casesContainer.innerHTML = `
            <div class="error-message">
                <p>Erro ao carregar cases. Por favor, tente novamente mais tarde.</p>
            </div>
        `;
    }
}

// Inicializa
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new CasesLoader());
} else {
    new CasesLoader();
}
```

### 11.3 Template de Case Individual (Markdown)

**Estrutura para cada arquivo .md em `cases/`:**

```markdown
---
id: dre-gerencial
title: DRE Gerencial Automatizado
client: Indústria de Manufatura - Grande Porte
industry: Financeiro
tools:
  - Power BI
  - SQL Server
  - Python
date: 2024-09-15
featured: true
---

# DRE Gerencial Automatizado

## Contexto e Desafio

A empresa enfrentava dificuldades para consolidar demonstrativos de resultado vindos de múltiplos sistemas (ERP, planilhas, sistemas legados). O processo manual consumia 3-4 dias por mês e estava sujeito a erros.

### Principais Problemas:
- Dados em 5 sistemas diferentes não integrados
- Relatórios manuais com alto risco de erro
- Falta de visão comparativa (horizontal/vertical)
- Impossibilidade de análise em tempo real

## Solução Implementada

### 1. Arquitetura de Dados
- Criação de Data Warehouse centralizado
- ETL automatizado com Python + SQL Server
- Integração de 5 fontes de dados

### 2. Modelagem e Desenvolvimento
- Modelagem dimensional (Star Schema)
- Criação de dashboards em Power BI
- Implementação de drill-down por conta contábil

### 3. Features do Dashboard
- Visão geral (DRE consolidado)
- Análise vertical (% sobre receita)
- Análise horizontal (comparativo períodos)
- Drill-down até nível de lançamento

## Resultados e Impacto

### Métricas Quantitativas:
- ✅ **80% de redução** em tempo de análise (3-4 dias → 2-3 horas)
- ✅ **Visibilidade real-time** de custos e despesas
- ✅ **Decisões 3x mais rápidas** com dados atualizados diariamente
- ✅ **100% de adoção** pela diretoria financeira

### Resultados Qualitativos:
- Cultura data-driven fortalecida
- Equipe financeira mais estratégica (menos operacional)
- Identificação proativa de desvios orçamentários

## Tecnologias Utilizadas

- **BI:** Power BI
- **Database:** SQL Server
- **ETL:** Python (Pandas, SQLAlchemy)
- **Orquestração:** Windows Task Scheduler (migração futura para Airflow)

## Depoimento do Cliente

> "O dashboard transformou nossa rotina financeira. Antes gastávamos semanas fechando o mês. Hoje, temos visibilidade diária e conseguimos tomar decisões muito mais rápidas."
> 
> — CFO da Empresa

## Demo Interativa

[Iframe do Power BI aqui]

---

**Interessado em uma solução semelhante?** [Entre em contato](/contato)
```

---

## 12. DEPLOYMENT GITHUB PAGES

### 12.1 Configuração do Repositório

1. **Branch:** `main` (ou `gh-pages`)
2. **Configuração em Settings → Pages:**
   - Source: Deploy from a branch
   - Branch: main / (root)
3. **CNAME file:** deve conter apenas `www.podedata.com.br`

### 12.2 Workflow de Deploy (Opcional - GitHub Actions)

**`.github/workflows/deploy.yml`:**

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
    
    - name: Optimize Images (se quiser automatizar)
      run: |
        # Script para otimizar imagens
        # npm install -g cwebp
        # find . -name "*.jpg" -exec cwebp {} -o {}.webp \;
        echo "Images optimized"
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

### 12.3 Checklist Pré-Deploy

```
✅ Todos os links internos testados
✅ Imagens otimizadas (WebP)
✅ Meta tags e OG tags configurados
✅ Sitemap.xml e robots.txt presentes
✅ CNAME file configurado
✅ Lighthouse audit > 90
✅ Teste em mobile e desktop
✅ Teste em diferentes navegadores
✅ Dark mode funcionando
✅ Forms testados (se aplicável)
✅ Analytics configurado (Google Analytics)
```

---

## 13. RESUMO DE AÇÕES PARA A IA DA IDE

### Prompt Estruturado para IDE com IA:

```
CONTEXTO:
Você é uma IA integrada em uma IDE. Precisa implementar um rebuild completo do site podedata.com.br.

OBJETIVO:
Criar um site moderno, performático, com dark mode, totalmente responsivo e compatível com GitHub Pages.

ARQUITETURA:
- HTML5 semântico
- CSS moderno com variáveis (design system)
- JavaScript vanilla modular
- Lucide Icons (SVG inline)
- Zero frameworks pesados

ESTRUTURA DE ARQUIVOS:
[Seguir a estrutura descrita na seção 2]

SISTEMA DE CORES:
[Usar a paleta descrita na seção 1]

COMPONENTES PRINCIPAIS:
1. Header com navegação + dark mode toggle
2. Hero section impactante
3. Stats section com counters animados
4. Services cards (3 principais)
5. Cases cards (carregados dinamicamente)
6. Process timeline
7. Tech stack logos
8. Footer completo
9. WhatsApp float button

FUNCIONALIDADES JS:
1. Dark mode toggle (persistente em localStorage)
2. Menu mobile responsivo
3. Smooth scroll
4. Lazy loading de imagens e iframes
5. Scroll reveal animations
6. Counter animations
7. Carregamento dinâmico de cases via JSON

PERFORMANCE:
- Imagens WebP com fallback
- Critical CSS inline
- JS com defer
- Lazy loading
- PageSpeed target: > 90

PÁGINAS A CRIAR:
1. index.html (Home) - PRIORIDADE MÁXIMA
2. solucoes.html (Soluções)
3. cases.html (Cases/Portfólio)
4. processo.html (Como Trabalhamos)
5. sobre.html (Institucional)
6. contato.html (Contato com formulário)

ASSETS NECESSÁRIOS:
- Logo SVG (criar placeholder se necessário)
- Ícones: usar Lucide (SVG inline)
- Imagens: placeholders até ter assets reais

CASES:
- Estão em: E:\A_DADOS\00_Pode Data\GitHub\Site\podedata.github.io\cases
- Criar cases.json para indexá-los
- Implementar loader dinâmico

DARK MODE:
- Toggle no header
- Persistir preferência
- Transição suave entre temas
- Ajustar contraste adequadamente

SEO:
- Meta tags completas
- Open Graph
- Structured Data (JSON-LD)
- Sitemap.xml
- robots.txt

ACESSIBILIDADE:
- WCAG 2.1 AA compliance
- Landmarks ARIA
- Alt text em imagens
- Labels em forms
- Focus visível

COMEÇAR POR:
1. Criar estrutura de pastas
2. design-system.css (fundação)
3. layout.css (grid/containers)
4. components.css (cards, buttons)
5. index.html completo (prioridade)
6. Scripts JS modulares
7. Otimizações finais

REFERÊNCIAS:
- Este documento técnico completo
- Análise detalhada do site (analise_podedata.md)
```

---

## 14. CHECKLIST DE IMPLEMENTAÇÃO

### Fase 1: Estrutura Base (Dia 1)
```
□ Criar estrutura de pastas
□ Setup de design-system.css
□ Setup de layout.css
□ Setup de components.css
□ Criar header/footer básicos
```

### Fase 2: Home Page (Dias 2-3)
```
□ Hero section completo
□ Stats section com counters
□ Problem/Solution section
□ Services section (3 cards)
□ Process timeline
□ Cases preview
□ Tech stack
□ Final CTA
□ Footer
```

### Fase 3: JavaScript (Dia 3-4)
```
□ theme-toggle.js
□ navigation.js
□ animations.js
□ lazy-load.js
□ cases-loader.js
□ Integração de tudo em main.js
```

### Fase 4: Páginas Internas (Dias 4-6)
```
□ solucoes.html
□ cases.html
□ processo.html
□ sobre.html
□ contato.html (com formulário)
```

### Fase 5: Integração Cases (Dia 6)
```
□ Criar cases.json
□ Parsear cases .md existentes
□ Implementar visualização individual
□ Lazy load de iframes
```

### Fase 6: Otimizações (Dia 7)
```
□ Converter imagens para WebP
□ Implementar critical CSS
□ Minificar CSS/JS
□ Testes de performance
□ Lighthouse audit
```

### Fase 7: SEO e Deploy (Dia 7-8)
```
□ Meta tags completas
□ Structured data
□ Sitemap.xml
□ robots.txt
□ Testes finais
□ Deploy GitHub Pages
```

---

## 15. CONTATOS E SUPORTE

**Arquivo:** `docs/MAINTENANCE.md`

Incluir instruções de:
- Como adicionar novo case
- Como editar cores (variáveis CSS)
- Como trocar ícones
- Como adicionar nova página
- Como atualizar conteúdo

---

**FIM DA DOCUMENTAÇÃO TÉCNICA**

Este documento fornece todas as especificações necessárias para a IA da IDE implementar o rebuild completo do site Podedata.

A documentação é:
- ✅ Completa e auto-suficiente
- ✅ Estruturada e organizada
- ✅ Pronta para ser processada por IA
- ✅ Com exemplos de código reais
- ✅ Com checklist de implementação
- ✅ Com prioridades claras

**Próximos passos:**
1. Fornecer este documento à IA da IDE
2. IA implementará seguindo as especificações
3. Você revisará e testará progressivamente
4. Ajustes conforme necessário
5. Deploy final
