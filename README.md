# Portfólio — Pedro Henrique | Analista de Infraestrutura de TI

Site de portfólio profissional, construído com **HTML5, CSS3 e JavaScript puro**,
mais **Bootstrap 5**, **AOS (Animate on Scroll)** e **Font Awesome**. Tema dark,
inspirado visualmente em Microsoft Learn, Azure Portal, Windows 11, GitHub e VS Code.

---

## 1. Estrutura de pastas

```
portfolio/
├── index.html                 → Página principal (todas as seções)
├── robots.txt                 → Regras de indexação para buscadores
├── sitemap.xml                → Mapa do site para SEO
├── README.md                  → Este arquivo
│
├── css/
│   └── style.css              → Todo o estilo do site (tokens de design, componentes, responsivo)
│
├── js/
│   ├── data.js                → ⭐ CONTEÚDO EDITÁVEL: estatísticas, tecnologias, projetos,
│   │                             laboratórios, roadmap, certificações, blog, dados de contato
│   └── script.js               → Lógica do site (animações, tema, navbar, formulário, etc.)
│
├── assets/
│   ├── images/                 → Ilustrações SVG (hero, favicon, capa OG) + foto real (pedro-henrique.jpg)
│   │   └── curriculo-pedro-henrique.pdf  → ⚠️ Adicione seu currículo real aqui
│   └── icons/                  → Reservado para ícones customizados adicionais
│
├── labs/                       → Uma página HTML por laboratório (LAB-001 a LAB-004)
│   ├── lab-001.html
│   ├── lab-002.html
│   ├── lab-003.html
│   └── lab-004.html
│
└── blog/                       → Posts individuais do Blog Técnico
    ├── post-01.html
    ├── post-02.html
    └── post-03.html
```

---

## 2. O que editar primeiro

| O que mudar | Onde |
|---|---|
| Nome, tecnologias do efeito de digitação, links de contato | `js/data.js` → `PROFILE_DATA` |
| Estatísticas da home (projetos, horas, etc.) | `js/data.js` → `STATS_DATA` |
| Tecnologias: descrição, onde usei, próximo objetivo e nível (sem percentual) | `js/data.js` → `TECH_DATA` e `TECH_STATUS_LEVELS` |
| Experiência profissional (texto + destaques em negrito) | `js/data.js` → `EXPERIENCE_DATA` |
| Cards de projetos (objetivo, problema, solução, resultado, status) | `js/data.js` → `PROJECTS_DATA` |
| Casos Técnicos (problema → contexto → solução → resultado) | `js/data.js` → `CASOS_TECNICOS_DATA` |
| Scripts publicados no GitHub | `js/data.js` → `SCRIPTS_DATA` |
| Laboratórios (lista + cards) | `js/data.js` → `LABS_DATA` (o **conteúdo detalhado** de cada um fica na página correspondente em `/labs/`) |
| Roadmap de carreira | `js/data.js` → `ROADMAP_DATA` |
| Certificações | `js/data.js` → `CERTIFICATIONS_DATA` |
| Posts do blog + categorias do filtro | `js/data.js` → `BLOG_DATA` e `BLOG_CATEGORIES` (o **artigo completo** fica em `/blog/`) |
| "Minha Jornada" (timeline com datas) | `js/data.js` → `JOURNEY_DATA` |

Depois de editar `data.js`, basta salvar e recarregar a página — nenhum outro
arquivo precisa ser tocado para atualizar números ou textos dessas seções.

### Substituir imagens
- `assets/images/pedro-henrique.jpg` → sua foto de perfil (já configurada; troque pelo arquivo se quiser atualizar).
- `assets/images/hero-infra.svg` → ilustração da home; pode manter ou substituir por uma imagem própria.
- `assets/curriculo-pedro-henrique.pdf` → adicione seu currículo em PDF com esse nome (ou ajuste o caminho em `PROFILE_DATA.resume` no `data.js` e no botão "Currículo" do `index.html`).

### Formulário de contato
O formulário em `#contato` atualmente apenas exibe uma mensagem de confirmação
local (`js/script.js`, função do `contact-form`). Para receber mensagens de verdade
sem back-end próprio, integre um serviço gratuito como **Formspree**, **Web3Forms**
ou **EmailJS**, substituindo o `preventDefault()` pela chamada `fetch()` do serviço escolhido.

---

## 3. Como publicar gratuitamente no GitHub Pages

1. **Crie um repositório no GitHub**
   - Acesse [github.com/new](https://github.com/new).
   - Nome sugerido: `portfolio` (ou o que preferir).
   - Deixe como **público**.

2. **Envie os arquivos do projeto**

   Pelo terminal, dentro da pasta `portfolio/`:
   ```bash
   git init
   git add .
   git commit -m "Primeira versão do portfólio"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/portfolio.git
   git push -u origin main
   ```
   (Ou use o botão **"Add file → Upload files"** direto na interface do GitHub, se preferir não usar linha de comando.)

3. **Ative o GitHub Pages**
   - No repositório, vá em **Settings → Pages**.
   - Em **Source**, selecione a branch `main` e a pasta `/ (root)`.
   - Clique em **Save**.

4. **Acesse seu site**
   - Após alguns minutos, o site estará disponível em:
     `https://SEU-USUARIO.github.io/portfolio/`

5. **Atualize as URLs internas**
   - Troque `seu-usuario` por seu usuário real do GitHub nos seguintes arquivos:
     - `index.html` (meta tags `og:url`, `canonical`, JSON-LD)
     - `robots.txt` e `sitemap.xml`
     - Links de LinkedIn/GitHub/WhatsApp em `js/data.js` → `PROFILE_DATA`

6. **Publicar atualizações futuras**
   ```bash
   git add .
   git commit -m "Atualiza conteúdo do portfólio"
   git push
   ```
   O GitHub Pages atualiza automaticamente o site publicado a cada push na branch configurada.

---

## 4. Boas práticas já aplicadas

- **Performance:** imagens em SVG (leves e nítidas em qualquer resolução), bibliotecas externas carregadas via CDN, sem frameworks pesados.
- **Acessibilidade:** skip link, `aria-label`s, foco visível no teclado, contraste adequado no tema dark e light, respeito a `prefers-reduced-motion`.
- **SEO:** meta tags completas, Open Graph, Twitter Cards, `robots.txt`, `sitemap.xml` e dados estruturados Schema.org (`Person`).
- **Responsividade:** layout testado para desktop, tablet e mobile, com menu off-canvas dedicado para telas pequenas.

## 5. Histórico de revisões

**v2 — Refatoração e elevação de qualidade (mantendo a identidade visual original):**
- Hero reformulado: digitação alternando "Infraestrutura Microsoft, Windows Server, Active Directory, Cloud Computing, PowerShell, Azure", com texto de apresentação mais profissional.
- Título e meta tags otimizados para SEO (`Windows Server • Active Directory • Infraestrutura Microsoft`).
- Seção Tecnologias sem percentuais: níveis qualitativos (Experiência prática / Utilizado em ambiente corporativo / Em desenvolvimento / Planejado) com descrição, onde foi usado e próximo objetivo.
- Experiência reescrita em tom de LinkedIn sênior, com palavras-chave técnicas destacadas.
- Projetos com Objetivo, Problema, Solução, Tecnologias, Resultado e Status.
- Novas seções: **Casos Técnicos** (problemas reais resolvidos) e **Scripts** (vitrine de scripts do GitHub).
- Blog com filtro de categorias interativo.
- Timeline ("Minha Jornada") com datas mais específicas.
- Foto de perfil real adicionada em `/sobre`.
- Ajustes de performance (partículas do Hero pausam fora de vista), responsividade (grade de estatísticas fluida, nav adaptado para 12 itens) e microinterações (botões, ícones, cards).

Bom uso do portfólio — e boa sorte nas oportunidades de Infraestrutura de TI! 🚀
