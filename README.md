# Portfólio — Pedro Henrique da Silva Pereira

**Suporte e Infraestrutura de TI | Automação e Sistemas**

Site: https://pedrosilva-c.github.io/portfolio/

Portfólio estático com experiência profissional, projetos, casos técnicos, laboratórios e certificações.
O conteúdo segue uma regra editorial simples: só entra o que tem comprovação, e o que está incompleto
aparece com status honesto (WIP, Em documentação, Planejado).

## Estrutura

```
index.html            página principal (marcação das seções)
js/data.js            todo o conteúdo: experiência, projetos, casos, labs, tecnologias, certificações
js/script.js          renderização a partir de data.js, tema, menu mobile e formulário (mailto)
css/style.css         estilos e tokens de design (tema claro e escuro)
labs/                 páginas dos laboratórios
blog/                 notas de estudo não listadas (noindex), mantidas com aviso de uso de IA
assets/               currículo público (sem telefone), foto, favicon e imagem de compartilhamento
_source/              fontes do currículo e da imagem Open Graph (ignorado pelo GitHub Pages)
```

Para atualizar o conteúdo, edite apenas `js/data.js`.

## Executar localmente

```bash
python -m http.server 8080
# abra http://localhost:8080
```

## Regerar currículo e imagem de compartilhamento

Com o Microsoft Edge (ou Chrome) instalado, a partir da raiz do repositório:

```powershell
$edge = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
& $edge --headless=new --no-pdf-header-footer --virtual-time-budget=5000 `
  --print-to-pdf="$PWD\assets\curriculo-pedro-henrique.pdf" "file:///$PWD/_source/curriculo.html"
& $edge --headless=new --hide-scrollbars --window-size=1200,630 --virtual-time-budget=5000 `
  --screenshot="$PWD\assets\images\og-cover.png" "file:///$PWD/_source/og-cover.html"
```

## Tecnologias

HTML, CSS e JavaScript sem frameworks. Fontes Inter e JetBrains Mono (Google Fonts). Hospedado no GitHub Pages.

## Contato

- E-mail: contatopedromarketinglab@gmail.com
- LinkedIn: https://www.linkedin.com/in/pedrosilva-sistemas/
- GitHub: https://github.com/pedrosilva-c
