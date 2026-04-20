# Exemplos Práticos - PODE Data

Este arquivo contém exemplos de código completos para diferentes tipos de entregáveis.

## 1. Dashboard HTML Completo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - PODE Data</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f8f9fa;
            color: #374151;
        }

        .header {
            background: linear-gradient(135deg, #1a1f3a 0%, #2563eb 100%);
            color: white;
            padding: 2rem 3rem;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .header-content {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: 700;
        }

        .header-title {
            font-size: 1.875rem;
            font-weight: 700;
            margin-bottom: 0.5rem;
        }

        .dashboard-container {
            max-width: 1400px;
            margin: 2rem auto;
            padding: 0 2rem;
        }

        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .metric-card {
            background: white;
            border-radius: 0.75rem;
            padding: 1.5rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            border-left: 4px solid #2563eb;
            transition: all 0.2s;
        }

        .metric-card:hover {
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            transform: translateY(-2px);
        }

        .metric-label {
            font-size: 0.875rem;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 0.5rem;
        }

        .metric-value {
            font-size: 2.25rem;
            font-weight: 700;
            color: #1a1f3a;
            margin-bottom: 0.5rem;
        }

        .metric-change {
            font-size: 0.875rem;
            color: #10b981;
        }

        .metric-change.negative {
            color: #ef4444;
        }

        .chart-container {
            background: white;
            border-radius: 0.75rem;
            padding: 2rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
            margin-bottom: 1.5rem;
        }

        .chart-title {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1a1f3a;
            margin-bottom: 1rem;
        }

        .footer {
            text-align: center;
            padding: 2rem;
            color: #6b7280;
            font-size: 0.875rem;
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="header-content">
            <div class="logo">PODE Data</div>
            <div>
                <h1 class="header-title">Dashboard Executivo</h1>
                <p>Atualizado em tempo real</p>
            </div>
        </div>
    </header>

    <div class="dashboard-container">
        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-label">Receita Total</div>
                <div class="metric-value">R$ 2,4M</div>
                <div class="metric-change">↑ 12,5% vs mês anterior</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Novos Clientes</div>
                <div class="metric-value">143</div>
                <div class="metric-change">↑ 8,3% vs mês anterior</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Taxa de Conversão</div>
                <div class="metric-value">24,8%</div>
                <div class="metric-change negative">↓ 2,1% vs mês anterior</div>
            </div>
            <div class="metric-card">
                <div class="metric-label">Ticket Médio</div>
                <div class="metric-value">R$ 16.783</div>
                <div class="metric-change">↑ 5,7% vs mês anterior</div>
            </div>
        </div>

        <div class="chart-container">
            <h2 class="chart-title">Evolução de Vendas</h2>
            <div id="chart" style="height: 300px; display: flex; align-items: center; justify-content: center; color: #9ca3af;">
                [Gráfico de linha seria inserido aqui com biblioteca como Chart.js ou Recharts]
            </div>
        </div>

        <div class="chart-container">
            <h2 class="chart-title">Distribuição por Categoria</h2>
            <div id="pie-chart" style="height: 300px; display: flex; align-items: center; justify-content: center; color: #9ca3af;">
                [Gráfico de pizza seria inserido aqui]
            </div>
        </div>
    </div>

    <footer class="footer">
        <p>© 2026 PODE Data - Transformando dados em decisões estratégicas</p>
        <p>www.podedata.com.br | contato@podedata.com.br</p>
    </footer>
</body>
</html>
```

## 2. Apresentação PowerPoint (Estrutura CSS)

```css
/* Slide de Capa */
.slide-cover {
    background: linear-gradient(135deg, #1a1f3a 0%, #2563eb 100%);
    color: white;
    padding: 4rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.slide-cover .logo {
    position: absolute;
    top: 2rem;
    left: 2rem;
    width: 150px;
}

.slide-cover h1 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
}

.slide-cover .subtitle {
    font-size: 1.5rem;
    opacity: 0.9;
    margin-bottom: 3rem;
}

.slide-cover .metadata {
    font-size: 1rem;
    opacity: 0.8;
    margin-top: auto;
}

/* Slide Interno */
.slide-content {
    background: white;
    padding: 3rem;
    height: 100vh;
    display: flex;
    flex-direction: column;
}

.slide-content .header {
    background: #1a1f3a;
    color: white;
    padding: 1.5rem;
    margin: -3rem -3rem 2rem -3rem;
}

.slide-content .header h2 {
    font-size: 2rem;
    font-weight: 600;
}

.slide-content .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.slide-content .footer {
    margin-top: auto;
    padding-top: 2rem;
    border-top: 2px solid #2563eb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #6b7280;
}

/* Lista com marcadores personalizados */
.slide-content ul {
    list-style: none;
    padding-left: 0;
}

.slide-content li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    color: #374151;
}

.slide-content li::before {
    content: '▸';
    color: #2563eb;
    font-size: 1.5rem;
    position: absolute;
    left: 0;
}

/* Gráfico no slide */
.slide-chart {
    background: #f8f9fa;
    border-radius: 0.75rem;
    padding: 2rem;
    margin: 2rem 0;
}
```

## 3. Email Marketing / Newsletter

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Newsletter PODE Data</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8f9fa;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td align="center" style="padding: 40px 20px;">
                <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                    
                    <!-- Header -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #1a1f3a 0%, #2563eb 100%); padding: 40px 40px; color: white;">
                            <h1 style="margin: 0 0 10px 0; font-size: 28px; font-weight: 700;">PODE Data Insights</h1>
                            <p style="margin: 0; font-size: 16px; opacity: 0.9;">Transformando dados em decisões estratégicas</p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px;">
                            <h2 style="color: #1a1f3a; font-size: 24px; margin: 0 0 20px 0;">Olá, [Nome]!</h2>
                            
                            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                                Nesta edição, trazemos insights poderosos sobre como empresas líderes estão utilizando dados para impulsionar seus negócios.
                            </p>
                            
                            <!-- Featured Article -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8f9fa; border-radius: 8px; padding: 24px; margin: 30px 0;">
                                <tr>
                                    <td>
                                        <h3 style="color: #2563eb; font-size: 20px; margin: 0 0 12px 0;">📊 Artigo em Destaque</h3>
                                        <h4 style="color: #1a1f3a; font-size: 18px; margin: 0 0 12px 0;">5 Métricas Essenciais para seu Dashboard Executivo</h4>
                                        <p style="color: #6b7280; font-size: 14px; line-height: 1.5; margin: 0 0 16px 0;">
                                            Descubra quais indicadores realmente importam para tomada de decisão...
                                        </p>
                                        <a href="#" style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600;">Ler Mais</a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- CTA Button -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin: 30px 0;">
                                <tr>
                                    <td align="center">
                                        <a href="https://www.podedata.com.br" style="display: inline-block; background-color: #2563eb; color: white; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px;">Agende uma Conversa</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #1a1f3a; color: white; padding: 30px 40px; text-align: center;">
                            <p style="margin: 0 0 10px 0; font-size: 14px;">
                                <strong>PODE Data</strong><br>
                                Arquitetura de Dados e Business Intelligence
                            </p>
                            <p style="margin: 0 0 15px 0; font-size: 14px; opacity: 0.8;">
                                📧 contato@podedata.com.br | 📱 (47) 9 9197-7935<br>
                                🌐 www.podedata.com.br
                            </p>
                            <p style="margin: 0; font-size: 12px; opacity: 0.6;">
                                © 2026 PODE Data. Todos os direitos reservados.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
```

## 4. React Component para Dashboard

```jsx
import React from 'react';

const PodeDataDashboard = () => {
  const metrics = [
    { label: 'Receita Total', value: 'R$ 2,4M', change: '+12,5%', positive: true },
    { label: 'Novos Clientes', value: '143', change: '+8,3%', positive: true },
    { label: 'Taxa de Conversão', value: '24,8%', change: '-2,1%', positive: false },
    { label: 'Ticket Médio', value: 'R$ 16.783', change: '+5,7%', positive: true },
  ];

  return (
    <div style={{ 
      background: '#f8f9fa', 
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        background: 'linear-gradient(135deg, #1a1f3a 0%, #2563eb 100%)',
        color: 'white',
        padding: '2rem 3rem',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '0.5rem' }}>
            Dashboard Executivo
          </h1>
          <p style={{ opacity: 0.9 }}>PODE Data - Insights em Tempo Real</p>
        </div>
      </header>

      {/* Content */}
      <main style={{ maxWidth: '1400px', margin: '2rem auto', padding: '0 2rem' }}>
        {/* Metrics Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {metrics.map((metric, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '0.75rem',
              padding: '1.5rem',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
              borderLeft: '4px solid #2563eb',
              transition: 'all 0.2s'
            }}>
              <div style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '0.5rem'
              }}>
                {metric.label}
              </div>
              <div style={{
                fontSize: '2.25rem',
                fontWeight: '700',
                color: '#1a1f3a',
                marginBottom: '0.5rem'
              }}>
                {metric.value}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: metric.positive ? '#10b981' : '#ef4444'
              }}>
                {metric.positive ? '↑' : '↓'} {metric.change} vs mês anterior
              </div>
            </div>
          ))}
        </div>

        {/* Chart Container */}
        <div style={{
          background: 'white',
          borderRadius: '0.75rem',
          padding: '2rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: '600',
            color: '#1a1f3a',
            marginBottom: '1rem'
          }}>
            Evolução de Vendas
          </h2>
          <div style={{ 
            height: '300px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: '#9ca3af'
          }}>
            [Gráfico seria inserido aqui]
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '2rem',
        color: '#6b7280',
        fontSize: '0.875rem'
      }}>
        <p>© 2026 PODE Data - Transformando dados em decisões estratégicas</p>
        <p>www.podedata.com.br | contato@podedata.com.br</p>
      </footer>
    </div>
  );
};

export default PodeDataDashboard;
```

## 5. Template de Documento Word (HTML para conversão)

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        @page {
            margin: 2.5cm;
        }
        
        body {
            font-family: 'Calibri', sans-serif;
            color: #374151;
            line-height: 1.6;
        }
        
        .header {
            border-bottom: 3px solid #2563eb;
            padding-bottom: 1rem;
            margin-bottom: 2rem;
        }
        
        .logo-area {
            color: #1a1f3a;
            font-size: 24px;
            font-weight: bold;
        }
        
        h1 {
            color: #1a1f3a;
            font-size: 28px;
            font-weight: 700;
            margin: 2rem 0 1rem 0;
        }
        
        h2 {
            color: #2563eb;
            font-size: 22px;
            font-weight: 600;
            margin: 1.5rem 0 0.75rem 0;
            border-left: 4px solid #2563eb;
            padding-left: 1rem;
        }
        
        h3 {
            color: #1a1f3a;
            font-size: 18px;
            font-weight: 600;
            margin: 1rem 0 0.5rem 0;
        }
        
        .highlight {
            background-color: #e0f2fe;
            padding: 0.25rem 0.5rem;
            border-radius: 3px;
            color: #1a1f3a;
            font-weight: 600;
        }
        
        .info-box {
            background-color: #f8f9fa;
            border-left: 4px solid #2563eb;
            padding: 1rem 1.5rem;
            margin: 1rem 0;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 1rem 0;
        }
        
        th {
            background-color: #1a1f3a;
            color: white;
            padding: 0.75rem;
            text-align: left;
        }
        
        td {
            border: 1px solid #e5e7eb;
            padding: 0.75rem;
        }
        
        .footer {
            margin-top: 3rem;
            padding-top: 1rem;
            border-top: 2px solid #2563eb;
            font-size: 12px;
            color: #6b7280;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo-area">PODE Data</div>
        <div style="font-size: 14px; color: #6b7280; margin-top: 0.5rem;">
            Arquitetura de Dados e Business Intelligence
        </div>
    </div>
    
    <h1>Proposta Comercial</h1>
    
    <div class="info-box">
        <strong>Cliente:</strong> [Nome do Cliente]<br>
        <strong>Data:</strong> [Data]<br>
        <strong>Validade:</strong> 30 dias
    </div>
    
    <h2>1. Resumo Executivo</h2>
    <p>
        A PODE Data apresenta proposta para <span class="highlight">implementação de solução de Business Intelligence</span> 
        focada em transformar dados em decisões estratégicas...
    </p>
    
    <h2>2. Escopo do Projeto</h2>
    <p>O projeto contempla as seguintes etapas:</p>
    
    <table>
        <thead>
            <tr>
                <th>Fase</th>
                <th>Descrição</th>
                <th>Prazo</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Discovery</td>
                <td>Levantamento de requisitos e análise</td>
                <td>2 semanas</td>
            </tr>
            <tr>
                <td>Arquitetura</td>
                <td>Desenho da solução e modelagem</td>
                <td>3 semanas</td>
            </tr>
            <tr>
                <td>Implementação</td>
                <td>Desenvolvimento e integração</td>
                <td>6 semanas</td>
            </tr>
            <tr>
                <td>Entrega</td>
                <td>Homologação e treinamento</td>
                <td>2 semanas</td>
            </tr>
        </tbody>
    </table>
    
    <div class="footer">
        <strong>PODE Data</strong> | www.podedata.com.br<br>
        contato@podedata.com.br | (47) 9 9197-7935<br>
        © 2026 PODE Data. Todos os direitos reservados.
    </div>
</body>
</html>
```

---

## Notas de Implementação

### Para Dashboards:
- Use Chart.js, Recharts ou Plotly para gráficos interativos
- Mantenha a paleta de cores consistente (#2563eb como cor principal)
- Adicione hover effects sutis para melhor UX

### Para Apresentações:
- Exporte usando bibliotins como `reveal.js` ou ferramentas de automação do PowerPoint
- Mantenha slides visuais com pouco texto
- Use gráficos e ícones para comunicar ideias

### Para Documentos:
- Converta HTML para DOCX usando bibliotecas como `python-docx` ou `mammoth`
- Mantenha hierarquia visual clara com cores da marca
- Use tabelas para organizar informações complexas

### Para Emails:
- Teste em diferentes clientes de email (Gmail, Outlook, Apple Mail)
- Use tabelas para layout (melhor compatibilidade)
- Mantenha largura máxima de 600px para boa visualização em mobile
