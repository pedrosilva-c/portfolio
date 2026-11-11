/* ==========================================================================
   DATA.JS — conteúdo do portfólio
   -----------------------------------------------------------------------
   Fonte única do conteúdo renderizado por script.js.
   Regra editorial: só entra aqui o que tem comprovação (código, teste,
   certificado, currículo ou confirmação do próprio Pedro). O que ainda não
   tem evidência aparece com status honesto (WIP, Em documentação, Planejado).
   ========================================================================== */

/* 1. PERFIL ---------------------------------------------------------------- */
const PROFILE_DATA = {
  name: "Pedro Henrique da Silva Pereira",
  shortName: "Pedro Henrique",
  headline: "Suporte e Infraestrutura de TI | Automação e Sistemas",
  email: "contatopedromarketinglab@gmail.com",
  linkedin: "https://www.linkedin.com/in/pedrosilva-sistemas/",
  github: "https://github.com/pedrosilva-c",
  site: "https://pedrosilva-c.github.io/portfolio/",
  resume: "assets/curriculo-pedro-henrique.pdf"
};

/* 2. TECNOLOGIAS -------------------------------------------------------------
   Cada item diz onde foi usado de fato. Níveis qualitativos, sem percentuais. */
const TECH_STATUS_LEVELS = {
  corporativo: { label: "Uso em ambiente corporativo", className: "badge-ok" },
  projeto:     { label: "Uso em projetos próprios",    className: "badge-accent" },
  fundamentos: { label: "Fundamentos (curso concluído)", className: "badge-neutral" },
  estudo:      { label: "Em estudo",                   className: "badge-wip" }
};

const TECH_GROUPS = [
  {
    title: "Infraestrutura e suporte",
    items: [
      { name: "Suporte técnico e hardware", statusKey: "corporativo",
        whereUsed: "Atendimento a usuários, manutenção de computadores, impressoras e periféricos (Transmargoo e laboratórios da AEDB)." },
      { name: "Windows e Windows Server", statusKey: "corporativo",
        whereUsed: "Retomada de um servidor após queda de energia (Transmargoo); laboratório próprio com Windows Server 2019 em VirtualBox." },
      { name: "Active Directory e GPO", statusKey: "corporativo",
        whereUsed: "Participação na gestão de usuários, acessos e permissões; GPOs para padronização de estações e mapeamento de unidades." },
      { name: "Redes: TCP/IP, DHCP, DNS, Wi-Fi", statusKey: "corporativo",
        whereUsed: "Correção de conflito de endereçamento IP, rede Wi-Fi de visitantes isolada da rede interna, cabeamento e crimpagem." },
      { name: "PowerShell", statusKey: "estudo",
        whereUsed: "Scripts de apoio (inventário de estação) e comandos chamados pelo Kaizen Tech. Repositório de scripts em preparação." }
    ]
  },
  {
    title: "Desenvolvimento e automação",
    items: [
      { name: "Python", statusKey: "projeto",
        whereUsed: "Campus AI (PySide6, Playwright), Kaizen Tech (Tkinter, winreg) e backend do TM Telemetria." },
      { name: "FastAPI e SQLite", statusKey: "projeto",
        whereUsed: "API local do TM Telemetria; persistência local do Campus AI." },
      { name: "JavaScript, TypeScript e React", statusKey: "projeto",
        whereUsed: "Inclusão 360°, extensão de navegador do Campus AI e interface do TM Telemetria." },
      { name: "Testes automatizados", statusKey: "projeto",
        whereUsed: "unittest (Campus AI) e pytest (TM Telemetria), executados localmente antes de cada entrega." }
    ]
  },
  {
    title: "Nuvem e segurança",
    items: [
      { name: "AWS", statusKey: "fundamentos",
        whereUsed: "AWS Academy Cloud Foundations (20 h); arquitetura planejada em serviços AWS no projeto BarberFlow." },
      { name: "Cibersegurança", statusKey: "fundamentos",
        whereUsed: "Cisco Networking Academy — Introduction to Cybersecurity." },
      { name: "Microsoft Azure", statusKey: "estudo",
        whereUsed: "Estudo dos fundamentos, sem projeto publicado ainda." }
    ]
  }
];

/* 3. EXPERIÊNCIA ------------------------------------------------------------- */
const EXPERIENCE_DATA = [
  {
    company: "Transmargoo Turismo e Fretamento",
    role: "Jovem Aprendiz — equipe de TI",
    period: "abr/2026 — atual",
    current: true,
    summary: "Suporte e infraestrutura em ambiente corporativo, com equipe interna e prestadores terceirizados.",
    activities: [
      "Atendimento a usuários e manutenção de computadores Windows, impressoras, softwares e conectividade; diagnóstico e solução de incidentes de hardware e rede.",
      "Participação na gestão de usuários, acessos e permissões no Active Directory; configuração de GPOs para padronização de estações, restrições e mapeamento de unidades de rede.",
      "Restabelecimento do funcionamento de um servidor Windows Server após queda de energia, apoiando a retomada dos sistemas internos.",
      "Correção de conflito de endereçamento IP entre roteador e gateway; configuração de Wi-Fi para visitantes com isolamento da rede interna.",
      "Diagnóstico de placa-mãe com defeito e reaproveitamento de componentes.",
      "Colaboração com a área de telemetria, registros operacionais e evolução do site corporativo junto à equipe de desenvolvimento terceirizada."
    ]
  },
  {
    company: "Faculdade Dom Bosco (AEDB) — laboratórios de informática",
    role: "Estagiário de Suporte Técnico",
    period: "fev/2025 — abr/2026",
    current: false,
    summary: "Suporte técnico aos laboratórios e setores da instituição.",
    activities: [
      "Atendimento N1 presencial a alunos, professores e colaboradores.",
      "Manutenção preventiva e corretiva de computadores: formatação, instalação de Windows, drivers, softwares, impressoras e periféricos.",
      "Instalação, organização e crimpagem de cabos de rede.",
      "Preparação de estações de trabalho para novos usuários e para as atividades acadêmicas.",
      "Planilhas de controle de ativos e inventário.",
      "Participação na implantação de um laboratório de informática: instalação, organização e configuração dos equipamentos."
    ]
  }
];

/* 4. PROJETOS ----------------------------------------------------------------
   status: "Funcional" | "WIP" | "Concluído" | "Interno" | "Especificação"
   repo: URL do repositório público ou null enquanto não for publicado.       */
const PROJECTS_DATA = [
  {
    id: "campus-ai",
    title: "Campus AI",
    kind: "Desenvolvimento · Automação",
    status: "WIP",
    summary: "Assistente acadêmico para Windows que organiza materiais, atividades e prazos do Moodle em notas locais do Obsidian.",
    problem: "Acompanhar várias disciplinas no AVA exige abrir cada página para descobrir o que mudou e o que vence.",
    built: [
      "Interface desktop em PySide6 com modo de demonstração (dados fictícios).",
      "Leitura de uma disciplina autorizada por navegador dedicado (Playwright), com login manual do aluno e sem envios.",
      "Extensão de navegador \"Companion\" em JavaScript, comunicando com o app local.",
      "Integração Gmail somente leitura (OAuth, escopo gmail.readonly) e histórico local em SQLite.",
      "Escrita de notas Markdown no Obsidian preservando edições manuais."
    ],
    tests: "566 testes Python (unittest) e 97 testes da extensão (node:test) passando; a suíte roda isolada dos dados reais e falha se algum dado real mudar.",
    limits: "Ainda não validado de ponta a ponta com contas reais; leitura limitada a uma disciplina piloto. Não é um aplicativo oficial da instituição.",
    tech: ["Python", "PySide6", "Playwright", "SQLite", "Gmail API", "JavaScript"],
    repo: "https://github.com/pedrosilva-c/campus-ai"
  },
  {
    id: "kaizen-tech",
    title: "Kaizen Tech",
    kind: "Suporte · Automação Windows",
    status: "Funcional",
    summary: "Ferramenta de manutenção rápida para técnicos: diagnóstico da máquina, ações de limpeza e ajuste com confirmação, e relatório do atendimento em PDF.",
    problem: "Atendimentos de manutenção repetem as mesmas verificações manuais e raramente deixam um registro para o cliente.",
    built: [
      "Painel de informações do sistema (SO, CPU, RAM, disco).",
      "Ponto de restauração antes das alterações e confirmação nas ações destrutivas.",
      "Limpeza de temporários, cache de navegadores e lixeira; verificação de disco somente leitura.",
      "Verificação de atualizações pendentes, programas de inicialização e plano de energia.",
      "Backup rápido de Desktop, Documentos e Imagens; relatório do atendimento em PDF."
    ],
    tests: "13 testes automatizados das funções auxiliares e da limpeza segura (inclusive contra junções que apontam para fora da pasta); ações de manutenção validadas manualmente em máquina própria.",
    limits: "Exige privilégio de administrador e altera configurações do Windows (registro, plano de energia). Use apenas em máquinas sob sua responsabilidade.",
    tech: ["Python", "Tkinter", "winreg", "PowerShell", "PyInstaller"],
    repo: "https://github.com/pedrosilva-c/kaizen-tech"
  },
  {
    id: "tm-telemetria",
    title: "TM Telemetria",
    kind: "Sistema interno · Relatórios",
    status: "Interno",
    summary: "Sistema local de análise operacional da frota: importação de planilhas, conferência de dados e relatórios em PDF e XLSX.",
    problem: "Relatórios operacionais montados à mão a partir de planilhas exportadas, sem conferência sistemática dos dados.",
    built: [
      "Importação de planilhas CSV/XLSX com conferência e reversão de importações.",
      "Análise de ocorrências e de consumo/ociosidade da frota.",
      "Geração de relatórios em PDF e XLSX, com histórico."
    ],
    tests: "Suíte automatizada no backend (pytest) executada a cada alteração.",
    limits: "Projeto da empresa: código, regras e dados não são públicos. Uma demonstração independente, com dados 100% fictícios, está em planejamento.",
    tech: ["Python", "FastAPI", "React", "TypeScript", "SQLite"],
    repo: null
  },
  {
    id: "inclusao-360",
    title: "Inclusão 360°",
    kind: "Acadêmico · Acessibilidade web",
    status: "Concluído",
    summary: "Site demonstrativo de acessibilidade digital: o visitante experimenta recursos e corrige um portal com problemas de acessibilidade.",
    problem: "Explicar acessibilidade digital de forma prática para quem nunca usou tecnologias assistivas.",
    built: [
      "Ajustes de tamanho de texto, contraste, leitura simples e redução de distrações.",
      "Leitura em voz alta (Web Speech API) e integração com o VLibras.",
      "Desafio interativo de correção de um portal fictício e apresentação guiada em quatro etapas."
    ],
    tests: "27 verificações de interface em Chromium, incluindo ausência de rolagem horizontal de 320 a 1440 px.",
    limits: "Não é uma auditoria WCAG; faltam testes com leitores de tela e com pessoas com deficiência.",
    tech: ["HTML", "CSS", "JavaScript", "Web Speech API", "VLibras"],
    repo: "https://github.com/pedrosilva-c/inclusao-360",
    demo: "https://pedrosilva-c.github.io/inclusao-360/",
    note: "Projeto individual."
  },
  {
    id: "barberflow",
    title: "BarberFlow",
    kind: "Acadêmico · Projeto Integrador em grupo",
    status: "Especificação",
    summary: "Especificação de uma aplicação web de agendamento para barbearias de pequeno porte, com arquitetura planejada em serviços AWS.",
    problem: "Pequenas barbearias organizam a agenda por mensagens e anotações, sem um sistema próprio.",
    built: [
      "Doze requisitos funcionais, oito não funcionais e regras de negócio.",
      "Diagramas de casos de uso e de classes (Astah).",
      "Arquitetura planejada em serviços AWS, com módulo de avaliações em Firebase."
    ],
    tests: "Não se aplica: entrega de especificação. A agenda própria ainda não foi implementada.",
    limits: "Trabalho de um grupo de sete integrantes; a autoria é coletiva.",
    tech: ["UML", "Astah", "AWS (planejado)", "Firebase"],
    repo: null,
    note: "Projeto em grupo — créditos de todos os integrantes no repositório."
  }
];

/* 5. CASOS TÉCNICOS ------------------------------------------------------------
   Ocorrências reais de suporte, descritas sem nomes, setores identificáveis,
   endereços ou detalhes internos do ambiente.                                    */
const CASOS_TECNICOS_DATA = [
  {
    title: "Logon lento causado por GPOs sobrepostas",
    problem: "Usuários de uma OU levavam cerca de 3 minutos para chegar à área de trabalho após o logon.",
    context: "A OU acumulava GPOs criadas por responsáveis diferentes ao longo do tempo, sem revisão de sobreposição nem dos scripts de logon.",
    solution: "Mapeamento das políticas aplicadas com gpresult /h; identificadas duas GPOs com mapeamentos de rede duplicados e um script de logon obsoleto, consolidados em uma única política.",
    result: "Logon passou a levar menos de 30 segundos, sem mudança no comportamento esperado para o usuário.",
    tech: ["GPO", "Active Directory", "gpresult"]
  },
  {
    title: "Conflito de IP após a entrada de novos equipamentos",
    problem: "Estações passaram a ter falhas de rede intermitentes depois que novos equipamentos foram ligados.",
    context: "O escopo DHCP não previa o crescimento do parque e se sobrepunha a endereços fixados manualmente.",
    solution: "Auditoria do escopo, remoção das sobreposições com reservas estáticas, ampliação da faixa disponível e padronização das reservas por endereço MAC.",
    result: "Os conflitos relatados deixaram de ocorrer e a faixa passou a ter margem para crescimento.",
    tech: ["DHCP", "DNS", "Redes"]
  },
  {
    title: "Acesso indevido a uma pasta compartilhada restrita",
    problem: "Um usuário de outro setor conseguia abrir arquivos de uma pasta compartilhada restrita.",
    context: "As permissões de compartilhamento estavam mais abertas que as NTFS, e um grupo de segurança havia sido adicionado à pasta por engano.",
    solution: "Revisão das permissões de compartilhamento e NTFS, remoção do grupo incorreto e padronização da concessão de acesso por grupos de segurança específicos.",
    result: "Acesso restrito ao grupo correto, com o procedimento documentado para evitar recorrência.",
    tech: ["NTFS", "Active Directory", "File Server"]
  }
];

/* 6. LABORATÓRIOS -------------------------------------------------------------- */
const LABS_DATA = [
  {
    code: "LAB-001",
    title: "Domínio Active Directory em VirtualBox",
    description: "Ambiente com um controlador de domínio e duas estações em rede interna isolada. Evidências e passo a passo em documentação.",
    env: "SERVER-DC (Windows Server 2019) · CLIENTE01 e CLIENTE02 (Windows 10) · rede interna \"labrede\"",
    status: "Em documentação",
    date: "mai/2026",
    page: "labs/lab-001.html"
  },
  {
    code: "LAB-002",
    title: "File Server e permissões NTFS",
    description: "Roteiro de compartilhamentos por departamento com permissões por grupo de segurança.",
    status: "Planejado",
    date: "—",
    page: "labs/lab-002.html"
  },
  {
    code: "LAB-003",
    title: "GPO e mapeamento automático de unidades",
    description: "Roteiro de GPOs de mapeamento de unidades e políticas de segurança por OU.",
    status: "Planejado",
    date: "—",
    page: "labs/lab-003.html"
  },
  {
    code: "LAB-004",
    title: "Criação de usuários via PowerShell",
    description: "Roteiro de script que cria contas no AD a partir de um CSV, com log de execução.",
    status: "Planejado",
    date: "—",
    page: "labs/lab-004.html"
  }
];

/* 7. CERTIFICAÇÕES --------------------------------------------------------------
   verifyUrl: link público de verificação, quando existir.                        */
const CERTIFICATIONS_DATA = [
  {
    name: "AWS Academy Graduate — Cloud Foundations",
    issuer: "AWS Academy",
    detail: "Training Badge · 20 h · nov/2026",
    verifyUrl: "https://www.credly.com/go/B36iQJ1m"
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    detail: "abr/2026",
    verifyUrl: null
  },
  {
    name: "Fundamentos de Redes",
    issuer: "Cisco Networking Academy",
    detail: "",
    verifyUrl: null
  }
];
