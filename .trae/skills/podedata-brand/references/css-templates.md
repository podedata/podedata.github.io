# CSS Templates - PODE Data

Este arquivo contém templates CSS prontos para uso em diferentes contextos.

## Variáveis CSS Completas

```css
:root {
  /* === CORES PRIMÁRIAS === */
  --pd-navy-dark: #0f1729;
  --pd-navy: #1a1f3a;
  --pd-blue: #2563eb;
  --pd-blue-light: #3b82f6;
  --pd-blue-hover: #1d4ed8;
  
  /* === CORES SECUNDÁRIAS === */
  --pd-white: #ffffff;
  --pd-gray-50: #f9fafb;
  --pd-gray-100: #f3f4f6;
  --pd-gray-200: #e5e7eb;
  --pd-gray-300: #d1d5db;
  --pd-gray-400: #9ca3af;
  --pd-gray-500: #6b7280;
  --pd-gray-600: #4b5563;
  --pd-gray-700: #374151;
  --pd-gray-800: #1f2937;
  --pd-gray-900: #111827;
  
  /* === CORES DE ACENTO === */
  --pd-cyan: #06b6d4;
  --pd-sky: #0ea5e9;
  --pd-accent: #60a5fa;
  
  /* === CORES DE STATUS === */
  --pd-success: #10b981;
  --pd-warning: #f59e0b;
  --pd-error: #ef4444;
  --pd-info: #3b82f6;
  
  /* === GRADIENTES === */
  --pd-gradient-primary: linear-gradient(135deg, #1a1f3a 0%, #2563eb 100%);
  --pd-gradient-secondary: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
  --pd-gradient-overlay: linear-gradient(to bottom, rgba(26, 31, 58, 0.95), rgba(37, 99, 235, 0.85));
  --pd-gradient-subtle: linear-gradient(to right, #f8f9fa 0%, #ffffff 100%);
  
  /* === TIPOGRAFIA === */
  --pd-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --pd-font-mono: 'Monaco', 'Courier New', monospace;
  
  /* Tamanhos */
  --pd-text-xs: 0.75rem;    /* 12px */
  --pd-text-sm: 0.875rem;   /* 14px */
  --pd-text-base: 1rem;     /* 16px */
  --pd-text-lg: 1.125rem;   /* 18px */
  --pd-text-xl: 1.25rem;    /* 20px */
  --pd-text-2xl: 1.5rem;    /* 24px */
  --pd-text-3xl: 1.875rem;  /* 30px */
  --pd-text-4xl: 2.25rem;   /* 36px */
  --pd-text-5xl: 3rem;      /* 48px */
  
  /* Pesos */
  --pd-weight-normal: 400;
  --pd-weight-medium: 500;
  --pd-weight-semibold: 600;
  --pd-weight-bold: 700;
  
  /* === ESPAÇAMENTO === */
  --pd-space-1: 0.25rem;   /* 4px */
  --pd-space-2: 0.5rem;    /* 8px */
  --pd-space-3: 0.75rem;   /* 12px */
  --pd-space-4: 1rem;      /* 16px */
  --pd-space-5: 1.25rem;   /* 20px */
  --pd-space-6: 1.5rem;    /* 24px */
  --pd-space-8: 2rem;      /* 32px */
  --pd-space-10: 2.5rem;   /* 40px */
  --pd-space-12: 3rem;     /* 48px */
  --pd-space-16: 4rem;     /* 64px */
  
  /* === BORDAS === */
  --pd-radius-sm: 0.25rem;
  --pd-radius-md: 0.375rem;
  --pd-radius-lg: 0.5rem;
  --pd-radius-xl: 0.75rem;
  --pd-radius-2xl: 1rem;
  --pd-radius-full: 9999px;
  
  /* === SOMBRAS === */
  --pd-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --pd-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --pd-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --pd-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  /* === TRANSIÇÕES === */
  --pd-transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
  --pd-transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
  --pd-transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

## Componentes Base

### Botões

```css
/* Botão Primário */
.pd-btn-primary {
  background: var(--pd-blue);
  color: var(--pd-white);
  padding: var(--pd-space-3) var(--pd-space-6);
  border-radius: var(--pd-radius-md);
  font-weight: var(--pd-weight-semibold);
  border: none;
  cursor: pointer;
  transition: all var(--pd-transition-base);
  font-family: var(--pd-font-family);
  font-size: var(--pd-text-base);
}

.pd-btn-primary:hover {
  background: var(--pd-blue-hover);
  transform: translateY(-1px);
  box-shadow: var(--pd-shadow-md);
}

/* Botão Secundário */
.pd-btn-secondary {
  background: transparent;
  color: var(--pd-blue);
  padding: var(--pd-space-3) var(--pd-space-6);
  border: 2px solid var(--pd-blue);
  border-radius: var(--pd-radius-md);
  font-weight: var(--pd-weight-semibold);
  cursor: pointer;
  transition: all var(--pd-transition-base);
  font-family: var(--pd-font-family);
}

.pd-btn-secondary:hover {
  background: var(--pd-blue);
  color: var(--pd-white);
  transform: translateY(-1px);
}

/* Botão Outline */
.pd-btn-outline {
  background: var(--pd-white);
  color: var(--pd-gray-700);
  padding: var(--pd-space-3) var(--pd-space-6);
  border: 1px solid var(--pd-gray-300);
  border-radius: var(--pd-radius-md);
  font-weight: var(--pd-weight-medium);
  cursor: pointer;
  transition: all var(--pd-transition-base);
}

.pd-btn-outline:hover {
  border-color: var(--pd-blue);
  color: var(--pd-blue);
}
```

### Cards

```css
/* Card Base */
.pd-card {
  background: var(--pd-white);
  border-radius: var(--pd-radius-lg);
  padding: var(--pd-space-6);
  box-shadow: var(--pd-shadow-sm);
  transition: all var(--pd-transition-base);
  border: 1px solid var(--pd-gray-200);
}

.pd-card:hover {
  box-shadow: var(--pd-shadow-md);
  transform: translateY(-2px);
}

/* Card com Destaque */
.pd-card-highlight {
  background: var(--pd-gradient-primary);
  color: var(--pd-white);
  border-radius: var(--pd-radius-lg);
  padding: var(--pd-space-8);
  box-shadow: var(--pd-shadow-lg);
}

/* Card de KPI */
.pd-kpi-card {
  background: var(--pd-white);
  border-radius: var(--pd-radius-lg);
  padding: var(--pd-space-6);
  box-shadow: var(--pd-shadow-md);
  border-left: 4px solid var(--pd-blue);
}

.pd-kpi-value {
  font-size: var(--pd-text-4xl);
  font-weight: var(--pd-weight-bold);
  color: var(--pd-navy);
  margin: var(--pd-space-2) 0;
}

.pd-kpi-label {
  font-size: var(--pd-text-sm);
  color: var(--pd-gray-600);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
```

### Seções Hero

```css
/* Hero Section */
.pd-hero {
  background: var(--pd-gradient-primary);
  color: var(--pd-white);
  padding: var(--pd-space-16) var(--pd-space-8);
  text-align: center;
  position: relative;
  overflow: hidden;
}

.pd-hero h1 {
  font-size: var(--pd-text-5xl);
  font-weight: var(--pd-weight-bold);
  margin-bottom: var(--pd-space-6);
  line-height: 1.2;
}

.pd-hero p {
  font-size: var(--pd-text-xl);
  max-width: 800px;
  margin: 0 auto var(--pd-space-8);
  opacity: 0.95;
}

/* Hero com Overlay */
.pd-hero-overlay {
  background-image: url('path-to-image.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
}

.pd-hero-overlay::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--pd-gradient-overlay);
}
```

### Headers e Navegação

```css
/* Header */
.pd-header {
  background: var(--pd-white);
  border-bottom: 1px solid var(--pd-gray-200);
  padding: var(--pd-space-4) var(--pd-space-8);
  box-shadow: var(--pd-shadow-sm);
}

/* Header Dark */
.pd-header-dark {
  background: var(--pd-navy);
  color: var(--pd-white);
  padding: var(--pd-space-4) var(--pd-space-8);
  box-shadow: var(--pd-shadow-md);
}

/* Navigation Links */
.pd-nav-link {
  color: var(--pd-gray-700);
  text-decoration: none;
  padding: var(--pd-space-2) var(--pd-space-4);
  font-weight: var(--pd-weight-medium);
  transition: color var(--pd-transition-base);
}

.pd-nav-link:hover {
  color: var(--pd-blue);
}

.pd-nav-link-dark {
  color: var(--pd-white);
  opacity: 0.9;
}

.pd-nav-link-dark:hover {
  opacity: 1;
  color: var(--pd-accent);
}
```

### Formulários

```css
/* Input Field */
.pd-input {
  width: 100%;
  padding: var(--pd-space-3) var(--pd-space-4);
  border: 1px solid var(--pd-gray-300);
  border-radius: var(--pd-radius-md);
  font-size: var(--pd-text-base);
  font-family: var(--pd-font-family);
  transition: all var(--pd-transition-base);
}

.pd-input:focus {
  outline: none;
  border-color: var(--pd-blue);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

/* Label */
.pd-label {
  display: block;
  font-size: var(--pd-text-sm);
  font-weight: var(--pd-weight-medium);
  color: var(--pd-gray-700);
  margin-bottom: var(--pd-space-2);
}

/* Select */
.pd-select {
  width: 100%;
  padding: var(--pd-space-3) var(--pd-space-4);
  border: 1px solid var(--pd-gray-300);
  border-radius: var(--pd-radius-md);
  background: var(--pd-white);
  font-size: var(--pd-text-base);
  cursor: pointer;
}
```

## Dashboards e Visualizações

### Container de Dashboard

```css
.pd-dashboard {
  background: var(--pd-gray-50);
  min-height: 100vh;
  padding: var(--pd-space-8);
}

.pd-dashboard-header {
  background: var(--pd-navy);
  color: var(--pd-white);
  padding: var(--pd-space-6) var(--pd-space-8);
  margin: calc(-1 * var(--pd-space-8)) calc(-1 * var(--pd-space-8)) var(--pd-space-8);
  box-shadow: var(--pd-shadow-md);
}

.pd-dashboard-title {
  font-size: var(--pd-text-3xl);
  font-weight: var(--pd-weight-bold);
  margin: 0;
}

.pd-dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--pd-space-6);
  margin-top: var(--pd-space-6);
}
```

### Gráficos

```css
/* Container de Gráfico */
.pd-chart-container {
  background: var(--pd-white);
  border-radius: var(--pd-radius-lg);
  padding: var(--pd-space-6);
  box-shadow: var(--pd-shadow-sm);
}

.pd-chart-title {
  font-size: var(--pd-text-lg);
  font-weight: var(--pd-weight-semibold);
  color: var(--pd-navy);
  margin-bottom: var(--pd-space-4);
}

.pd-chart-subtitle {
  font-size: var(--pd-text-sm);
  color: var(--pd-gray-600);
  margin-bottom: var(--pd-space-4);
}
```

## Utilitários

```css
/* Textos */
.pd-text-primary { color: var(--pd-navy); }
.pd-text-secondary { color: var(--pd-gray-600); }
.pd-text-accent { color: var(--pd-blue); }
.pd-text-white { color: var(--pd-white); }

/* Backgrounds */
.pd-bg-primary { background: var(--pd-navy); }
.pd-bg-accent { background: var(--pd-blue); }
.pd-bg-light { background: var(--pd-gray-50); }
.pd-bg-white { background: var(--pd-white); }
.pd-bg-gradient { background: var(--pd-gradient-primary); }

/* Espaçamento */
.pd-p-4 { padding: var(--pd-space-4); }
.pd-p-6 { padding: var(--pd-space-6); }
.pd-p-8 { padding: var(--pd-space-8); }
.pd-m-4 { margin: var(--pd-space-4); }
.pd-m-6 { margin: var(--pd-space-6); }
.pd-m-8 { margin: var(--pd-space-8); }

/* Flexbox */
.pd-flex { display: flex; }
.pd-flex-center { 
  display: flex; 
  align-items: center; 
  justify-content: center; 
}
.pd-flex-between { 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
}

/* Grid */
.pd-grid { display: grid; }
.pd-grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.pd-grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.pd-grid-cols-4 { grid-template-columns: repeat(4, 1fr); }
```

---

## Paleta de Cores para Gráficos

### Série de Dados (usar nesta ordem)

```javascript
const podeDataChartColors = [
  '#2563eb', // Azul principal
  '#06b6d4', // Cyan
  '#60a5fa', // Azul claro
  '#0ea5e9', // Sky
  '#1d4ed8', // Azul escuro
  '#3b82f6', // Azul médio
];

// Para status
const statusColors = {
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
  neutral: '#6b7280'
};
```

### Gradientes para Background de Gráficos

```javascript
const chartGradients = {
  primary: 'linear-gradient(180deg, rgba(37, 99, 235, 0.1) 0%, rgba(37, 99, 235, 0) 100%)',
  secondary: 'linear-gradient(180deg, rgba(6, 182, 212, 0.1) 0%, rgba(6, 182, 212, 0) 100%)',
};
```
