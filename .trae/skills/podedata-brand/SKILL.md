---
name: podedata-brand
description: "Aplica a identidade visual e diretrizes de marca da PODE Data em todos os materiais criados. Use sempre que estiver criando apresentações, documentos, sites, aplicativos, dashboards, relatórios, imagens, gráficos ou qualquer conteúdo visual para a PODE Data. Também use quando o usuário mencionar \"seguir o padrão PODE Data\", \"usar a identidade visual\", \"branding da empresa\", ou quando criar qualquer material que represente a empresa."
---

# PODE Data - Identidade Visual e Diretrizes de Marca

## Sobre a Empresa

**Nome:** PODE Data  
**Tagline:** "Transformamos dados em decisões estratégicas"  
**Website:** https://www.podedata.com.br  
**Localização:** Joinville, Santa Catarina, Brasil  
**Contato:** contato@podedata.com.br | (47) 9 9197-7935

### Propósito
Entregar soluções inovadoras e personalizadas em arquitetura de dados e Business Intelligence, unindo especialistas em dados e negócio para transformar informações em insights acionáveis.

### Missão
Capacitar empresas a decidirem melhor por meio do poder dos dados, com uma base sólida e visualizações que aceleram a ação.

### Valores
- **Excelência** em qualidade e experiência
- **Inovação** para manter vantagem competitiva
- **Parceria** com compromisso e proximidade
- **Integridade** em todas as interações

---

## Identidade Visual

### Logo
- **Arquivo principal:** `logo_podeData_Transparente_Sem_Nome_V2.png`
- **URL do logo:** https://www.podedata.com.br/images/logo_podeData_Transparente_Sem_Nome_V2.png
- O logo é usado com fundo transparente
- Versão sem o nome "PODE Data" também está disponível

### Paleta de Cores

#### Cores Primárias
```css
/* Baseado na análise do site oficial */

/* Azul Escuro/Marinho - Cor principal */
--podedata-primary: #1a1f3a;
--podedata-navy: #0f1729;

/* Azul Tecnológico - Acento */
--podedata-blue: #2563eb;
--podedata-blue-light: #3b82f6;

/* Gradientes característicos */
--podedata-gradient-primary: linear-gradient(135deg, #1a1f3a 0%, #2563eb 100%);
--podedata-gradient-overlay: linear-gradient(to bottom, rgba(26, 31, 58, 0.95), rgba(37, 99, 235, 0.85));
```

#### Cores Secundárias
```css
/* Branco e tons claros */
--podedata-white: #ffffff;
--podedata-light-gray: #f8f9fa;
--podedata-gray-100: #f3f4f6;

/* Cinzas para textos e backgrounds */
--podedata-gray-700: #374151;
--podedata-gray-800: #1f2937;
--podedata-gray-900: #111827;
```

#### Cores de Acento
```css
/* Para destacar CTAs e elementos interativos */
--podedata-accent-blue: #60a5fa;
--podedata-accent-cyan: #06b6d4;

/* Estados de hover */
--podedata-hover-blue: #1d4ed8;
```

### Tipografia

#### Fontes Principais
```css
/* Hierarquia tipográfica */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;

/* Títulos */
--heading-font-weight: 700;
--heading-line-height: 1.2;

/* Corpo de texto */
--body-font-weight: 400;
--body-line-height: 1.6;

/* Tamanhos */
--font-size-h1: 3rem;      /* 48px */
--font-size-h2: 2.5rem;    /* 40px */
--font-size-h3: 2rem;      /* 32px */
--font-size-h4: 1.5rem;    /* 24px */
--font-size-body: 1rem;    /* 16px */
--font-size-small: 0.875rem; /* 14px */
```

### Estilo Visual

#### Características do Design
- **Moderno e clean:** Design minimalista com foco em clareza
- **Tecnológico:** Visual contemporâneo que transmite inovação
- **Profissional:** Aparência corporativa confiável
- **Data-driven:** Elementos visuais relacionados a dados e analytics

#### Elementos Visuais
- Uso de ícones simples e modernos (ex: 👥, 🧭, 🎯, 🏆)
- Cards com cantos arredondados
- Sombras sutis para profundidade
- Espaçamento generoso (breathing room)
- Imagens relacionadas a dados, visualizações e tecnologia

---

## Diretrizes de Aplicação

### Documentos e Apresentações

#### PowerPoint/Apresentações
```
Layout de Capa:
- Fundo: Gradiente azul escuro (#1a1f3a → #2563eb)
- Logo: Canto superior esquerdo
- Título: Fonte grande, bold, branco
- Subtítulo/Data: Fonte menor, azul claro ou branco

Slides Internos:
- Fundo: Branco ou cinza muito claro (#f8f9fa)
- Cabeçalho: Azul marinho (#1a1f3a)
- Títulos: Azul escuro, bold
- Texto: Cinza escuro (#374151)
- Destaques: Azul tecnológico (#2563eb)
- Rodapé: Logo pequeno + número da página
```

#### Word/Documentos
```
Cabeçalho:
- Logo PODE Data (esquerda)
- Linha separadora azul (#2563eb)

Tipografia:
- Títulos: Azul escuro (#1a1f3a), bold
- Subtítulos: Azul (#2563eb)
- Corpo: Cinza escuro (#374151)
- Destaques: Azul para palavras-chave

Rodapé:
- Informações de contato
- Número de página
- Site: www.podedata.com.br
```

### Dashboards e Visualizações

#### Paleta para Gráficos
```css
/* Ordem preferencial para séries de dados */
1. #2563eb  /* Azul principal */
2. #06b6d4  /* Cyan */
3. #60a5fa  /* Azul claro */
4. #1d4ed8  /* Azul escuro */
5. #0ea5e9  /* Sky blue */
6. #3b82f6  /* Azul médio */

/* Para gráficos de status */
Positivo/Sucesso: #10b981  /* Verde */
Neutro: #6b7280           /* Cinza */
Negativo/Alerta: #f59e0b  /* Laranja */
Crítico: #ef4444          /* Vermelho */
```

#### Layout de Dashboards
- **Background:** Branco (#ffffff) ou cinza muito claro (#f8f9fa)
- **Cabeçalho:** Azul marinho com logo PODE Data
- **Cards:** Fundo branco, borda sutil, sombra suave
- **Títulos de seções:** Azul escuro (#1a1f3a)
- **KPIs destacados:** Azul tecnológico (#2563eb)

### Web e Digital

#### Componentes UI
```css
/* Botões */
.btn-primary {
  background: #2563eb;
  color: white;
  border-radius: 0.375rem;
}

.btn-primary:hover {
  background: #1d4ed8;
}

.btn-secondary {
  background: transparent;
  color: #2563eb;
  border: 2px solid #2563eb;
}

/* Cards */
.card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  padding: 1.5rem;
}

/* Seções com destaque */
.hero-section {
  background: linear-gradient(135deg, #1a1f3a 0%, #2563eb 100%);
  color: white;
  padding: 4rem 2rem;
}
```

---

## Tom de Comunicação

### Voz da Marca
- **Profissional mas acessível:** Expertise sem ser intimidador
- **Orientado a resultados:** Foco em valor e impacto
- **Colaborativo:** Parceria, não apenas fornecedor
- **Inovador:** Tecnologia de ponta aplicada aos negócios

### Exemplos de Frases-Chave
- "Transformamos dados em decisões estratégicas"
- "Insights acionáveis"
- "Soluções sob medida"
- "Capacitar empresas a decidirem melhor"
- "Base sólida e visualizações que aceleram a ação"
- "Do dado à ação"

### Áreas de Atuação
- Business Intelligence (BI)
- Engenharia de Dados
- Analytics
- Arquitetura de Dados
- Visualização de Dados
- Data Science

---

## Aplicações e Produtos

### Produtos Próprios
- **EvoDB:** https://evobi.axetecnologia.com.br/
- **IA Sales:** https://ia.sales.axetecnologia.com.br/

### Tipos de Entregáveis
- Dashboards executivos
- Relatórios analíticos
- Arquiteturas de dados
- Pipelines de ETL/ELT
- Modelos preditivos
- Visualizações interativas

---

## Checklist de Aplicação

Ao criar qualquer material para PODE Data, verifique:

### ✅ Visual
- [ ] Logo PODE Data incluído adequadamente
- [ ] Paleta de cores respeitada (azuis primários)
- [ ] Tipografia consistente (sans-serif, hierarquia clara)
- [ ] Layout limpo e moderno
- [ ] Espaçamento adequado

### ✅ Conteúdo
- [ ] Tom profissional e orientado a resultados
- [ ] Foco em valor e impacto para o cliente
- [ ] Terminologia técnica apropriada
- [ ] Informações de contato corretas
- [ ] Website mencionado quando relevante

### ✅ Técnico
- [ ] Design responsivo (se aplicável)
- [ ] Acessibilidade considerada
- [ ] Qualidade de imagens adequada
- [ ] Consistência com padrões web modernos

---

## Exemplos de Uso

### Quando criar uma apresentação:
```
Use o gradiente azul marinho → azul tecnológico na capa, 
logo no canto superior esquerdo, títulos em branco bold,
slides internos com fundo branco/cinza claro e 
elementos em azul para destacar dados importantes.
```

### Quando criar um dashboard:
```
Background claro, cabeçalho azul marinho com logo,
cards brancos com sombra sutil, gráficos usando a 
paleta azul (primário: #2563eb), KPIs em destaque
com azul tecnológico, texto em cinza escuro legível.
```

### Quando criar um documento:
```
Cabeçalho com logo e linha azul, títulos em azul escuro,
corpo de texto em cinza escuro, destaques em azul,
rodapé com contatos e site, layout limpo e profissional.
```

---

## Notas Importantes

1. **Consistência é fundamental:** Mantenha a identidade visual uniforme em todos os materiais
2. **Adaptação com respeito:** Ajuste conforme necessário mas preserve os elementos-chave
3. **Foco em dados:** Toda comunicação deve refletir expertise em dados e analytics
4. **Profissionalismo:** O visual deve sempre transmitir confiabilidade e excelência
5. **Modernidade:** Mantenha o design atualizado com tendências contemporâneas

---

**Versão:** 1.0  
**Última atualização:** Abril 2026  
**Responsável:** PODE Data - Arquitetura de Dados e Business Intelligence