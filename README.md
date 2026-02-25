# AuditContas - Análise Contabilística (Angola)

Este é o repositório do **AuditContas**, uma plataforma de análise contabilística inteligente adaptada ao PGC Angolano (Decreto 82/01).

## 🚀 Como Replicar no GitHub e Vercel

### 1. GitHub
1. Crie um novo repositório no seu GitHub.
2. Inicialize o git localmente (se ainda não o fez):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
3. Adicione o seu repositório remoto e faça o push:
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPO.git
   git branch -M main
   git push -u origin main
   ```

### 2. Vercel (Hobby Plan)
1. Aceda a [vercel.com](https://vercel.com) e faça login com o seu GitHub.
2. Clique em **"Add New"** > **"Project"**.
3. Importe o repositório que acabou de criar.
4. **Configurações para Vercel Hobby**:
   - **Framework Preset**: Vite (detectado automaticamente).
   - **Build Command**: `npm run build`.
   - **Output Directory**: `dist`.
   - **Environment Variables**:
     - `GEMINI_API_KEY`: Sua chave da API do Google Gemini.
5. Clique em **Deploy**.

> [!TIP]
> O plano **Vercel Hobby** tem um limite de execução de 10 segundos para funções serverless. Como este aplicativo é uma SPA (Single Page Application), ele funcionará perfeitamente e com alta performance.

## 🛠️ Tecnologias Utilizadas
- **React 19** + **TypeScript**
- **Vite** (Build Tool)
- **Tailwind CSS** (Styling)
- **Framer Motion** (Animações)
- **Lucide React** (Ícones)
- **Recharts** (Gráficos)

## 📁 Estrutura do Projeto
- `/src/components`: Componentes da interface (Dashboard, Diário, Razão, etc.)
- `/src/types`: Definições de tipos e dados do PGC.
- `vercel.json`: Configuração para roteamento SPA no Vercel.

## ⚖️ Licença
Privado / AuditContas
