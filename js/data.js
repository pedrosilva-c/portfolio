/* ==========================================================================
   DATA.JS
   -----------------------------------------------------------------------
   Este arquivo centraliza TODO o conteúdo dinâmico do portfólio.
   Para atualizar números, tecnologias, laboratórios, roadmap, certificações
   ou posts do blog, edite apenas os valores abaixo — o restante do site
   é renderizado automaticamente por script.js.
   ========================================================================== */

/* --------------------------------------------------------------------- */
/* 1. ESTATÍSTICAS (seção "Home" / contadores animados)                   */
/* --------------------------------------------------------------------- */
const STATS_DATA = [
  { icon: "fa-solid fa-diagram-project", value: 6, suffix: "+", label: "Projetos" },
  { icon: "fa-solid fa-flask", value: 4, suffix: "", label: "Laboratórios" },
  { icon: "fa-solid fa-wrench", value: 3, suffix: "", label: "Casos técnicos" },
  { icon: "fa-solid fa-layer-group", value: 9, suffix: "", label: "Tecnologias" },
  { icon: "fa-solid fa-clock", value: 420, suffix: "h", label: "Horas estudadas" },
  { icon: "fa-solid fa-graduation-cap", value: 3, suffix: "", label: "Cursos concluídos" },
  { icon: "fa-solid fa-certificate", value: 1, suffix: "", label: "Certificações" }
];

/* --------------------------------------------------------------------- */
/* 2. TECNOLOGIAS                                                         */
/* -----------------------------------------------------------------------
   Níveis expressos de forma qualitativa e verificável — sem percentuais
   genéricos, que não comunicam credibilidade a recrutadores técnicos.
   `statusKey` deve corresponder a uma chave de TECH_STATUS_LEVELS abaixo.
   ========================================================================== */
const TECH_STATUS_LEVELS = {
  pratica:      { icon: "fa-solid fa-circle-check", label: "Experiência prática",              className: "level-pratica" },
  corporativo:  { icon: "fa-solid fa-building",      label: "Utilizado em ambiente corporativo", className: "level-corporativo" },
  desenvolvimento: { icon: "fa-solid fa-book-open",  label: "Em desenvolvimento",                 className: "level-dev" },
  planejado:    { icon: "fa-solid fa-bullseye",      label: "Planejado",                          className: "level-planejado" }
};

const TECH_DATA = [
  {
    name: "Windows Server",
    icon: "fa-brands fa-windows",
    statusKey: "corporativo",
    description: "Administração de servidores Windows Server em ambiente de produção, incluindo papéis de rede, armazenamento e manutenção preventiva.",
    whereUsed: "Ambiente corporativo (TransMargoo) e laboratórios próprios (LAB-001, LAB-002).",
    nextGoal: "Aprofundar em Failover Clustering e Hyper-V."
  },
  {
    name: "Active Directory",
    icon: "fa-solid fa-sitemap",
    statusKey: "corporativo",
    description: "Criação e organização de usuários, grupos, OUs e delegação de permissões em um domínio corporativo real.",
    whereUsed: "Ambiente corporativo (TransMargoo) e laboratório LAB-001.",
    nextGoal: "Estudar Active Directory Certificate Services (AD CS)."
  },
  {
    name: "GPO, DNS & DHCP",
    icon: "fa-solid fa-network-wired",
    statusKey: "corporativo",
    description: "Configuração de políticas de grupo, zonas de resolução de nomes e escopos de rede para padronizar o ambiente.",
    whereUsed: "Suporte diário N1/N2 e laboratórios LAB-001 e LAB-003.",
    nextGoal: "Automatizar auditoria de GPOs aplicadas por OU."
  },
  {
    name: "PowerShell",
    icon: "fa-solid fa-terminal",
    statusKey: "desenvolvimento",
    description: "Criação de scripts para automatizar tarefas repetitivas de administração, como criação em lote de usuários.",
    whereUsed: "Estudo individual e laboratório LAB-004 (em construção).",
    nextGoal: "Certificação focada em automação com PowerShell para administradores."
  },
  {
    name: "Microsoft Azure",
    icon: "fa-brands fa-microsoft",
    statusKey: "desenvolvimento",
    description: "Fundamentos de identidade, assinaturas, grupos de recursos e provisionamento de máquinas virtuais na nuvem Microsoft.",
    whereUsed: "Estudo dirigido para a certificação AZ-900.",
    nextGoal: "Concluir AZ-900 e avançar para AZ-104 (Azure Administrator)."
  },
  {
    name: "Linux",
    icon: "fa-brands fa-linux",
    statusKey: "desenvolvimento",
    description: "Primeiros contatos com linha de comando, permissões e gerenciamento de serviços em sistemas Linux.",
    whereUsed: "Estudo individual, diversificando além do ecossistema Windows.",
    nextGoal: "Praticar administração de serviços via systemd e SSH hardening."
  },
  {
    name: "Docker",
    icon: "fa-brands fa-docker",
    statusKey: "planejado",
    description: "Containerização de aplicações e serviços como base para arquiteturas modernas de infraestrutura.",
    whereUsed: "Ainda não aplicado — próxima etapa do roadmap técnico.",
    nextGoal: "Primeiro laboratório prático com Docker e Docker Compose."
  },
  {
    name: "Python",
    icon: "fa-brands fa-python",
    statusKey: "planejado",
    description: "Linguagem de apoio para automação de tarefas de infraestrutura e integração com APIs de nuvem.",
    whereUsed: "Ainda não aplicado — planejado para 2027 no roadmap técnico.",
    nextGoal: "Automatizar rotinas simples de infraestrutura com scripts Python."
  },
  {
    name: "AWS",
    icon: "fa-brands fa-aws",
    statusKey: "planejado",
    description: "Fundamentos de computação em nuvem na Amazon Web Services, para complementar a base já construída em Azure.",
    whereUsed: "Ainda não aplicado — planejado para 2027 no roadmap técnico.",
    nextGoal: "Certificação AWS Cloud Practitioner."
  }
];

/* --------------------------------------------------------------------- */
/* 3. EXPERIÊNCIA PROFISSIONAL (timeline)                                 */
/* -----------------------------------------------------------------------
   Tom de descrição inspirado em perfis sênior de LinkedIn: contexto do
   cargo em primeiro parágrafo, seguido de responsabilidades objetivas com
   as tecnologias-chave destacadas via <strong> para leitura rápida (F-pattern).
   ========================================================================== */
const EXPERIENCE_DATA = [
  {
    company: "TransMargoo",
    role: "Jovem Aprendiz de TI",
    period: "Fev 2025 — Atual",
    current: true,
    summary: "Atuação prática em infraestrutura corporativa, unindo suporte técnico de primeira e segunda linha à administração direta de identidade e acesso em ambiente <strong>Windows Server</strong>.",
    activities: [
      "Suporte técnico <strong>N1 e N2</strong> a usuários, estações de trabalho e periféricos de rede",
      "Administração de <strong>Active Directory</strong>: criação de usuários, grupos de segurança e organização de <strong>OUs</strong>",
      "Definição e manutenção de <strong>permissões</strong> de acesso alinhadas a políticas de <strong>GPO</strong>",
      "Suporte e manutenção contínua da infraestrutura <strong>Windows Server</strong>, incluindo serviços de <strong>DNS</strong> e <strong>DHCP</strong>",
      "Manutenção preventiva e corretiva de <strong>hardware</strong> e <strong>software</strong>, reduzindo tempo de indisponibilidade",
      "Apoio na gestão de regras de <strong>firewall</strong> em conjunto com a equipe de segurança",
      "Documentação técnica de procedimentos e chamados, contribuindo para a base de conhecimento da equipe"
    ]
  }
];

/* --------------------------------------------------------------------- */
/* 4. PROJETOS                                                            */
/* -----------------------------------------------------------------------
   Estrutura: objective, problem, solution, tech, result, status.
   Cada card renderiza um resumo; o modal ("Ver detalhes") exibe o
   conjunto completo dos campos abaixo.
   ========================================================================== */
const PROJECTS_DATA = [
  {
    id: "proj-windows-server",
    title: "Infraestrutura Windows Server",
    icon: "fa-solid fa-server",
    description: "Implantação de um ambiente Windows Server completo, incluindo papéis de rede essenciais para uma pequena infraestrutura corporativa.",
    tech: ["Windows Server 2022", "DNS", "DHCP", "File Server"],
    objective: "Simular a implantação de um servidor corporativo do zero, configurando papéis essenciais de rede.",
    problem: "Uma infraestrutura recém-criada não possuía resolução de nomes, distribuição automática de IPs nem local centralizado de arquivos.",
    solution: "Instalação e configuração dos papéis de DNS, DHCP e File Server no Windows Server, com escopos e zonas planejados para evitar conflitos e permissões NTFS estruturadas por departamento.",
    result: "Ambiente funcional com resolução de nomes, distribuição de IPs e compartilhamento de arquivos operando de forma estável.",
    status: "Concluído"
  },
  {
    id: "proj-active-directory",
    title: "Active Directory Corporativo",
    icon: "fa-solid fa-sitemap",
    description: "Estruturação de um domínio Active Directory com unidades organizacionais, grupos de segurança e delegação de permissões.",
    tech: ["Active Directory", "DNS", "OU", "GPO"],
    objective: "Organizar uma estrutura de domínio hierárquica que reflita departamentos reais de uma empresa.",
    problem: "Sem uma hierarquia de OUs bem definida, a aplicação de políticas e a delegação de permissões se tornam confusas e difíceis de auditar.",
    solution: "Planejamento de uma árvore de OUs por tipo de objeto e departamento, com grupos de segurança específicos e delegação granular de controle administrativo.",
    result: "Estrutura organizacional replicável, com controle centralizado de usuários, grupos e permissões.",
    status: "Concluído"
  },
  {
    id: "proj-powershell",
    title: "Automação com PowerShell",
    icon: "fa-solid fa-terminal",
    description: "Scripts para automatizar tarefas repetitivas de administração, como criação em massa de usuários a partir de planilhas CSV.",
    tech: ["PowerShell", "CSV", "Active Directory Module"],
    objective: "Reduzir o tempo gasto em tarefas manuais e repetitivas de administração de usuários.",
    problem: "A criação manual de dezenas de contas de usuário, uma a uma, consumia tempo excessivo e aumentava o risco de erro humano.",
    solution: "Script em PowerShell que lê um arquivo CSV com os dados dos novos colaboradores e cria as contas automaticamente na OU correta, com tratamento de exceções e log de execução.",
    result: "Script funcional capaz de criar dezenas de contas de usuário em segundos, com log de execução.",
    status: "Concluído"
  },
  {
    id: "proj-azure",
    title: "Fundamentos de Microsoft Azure",
    icon: "fa-brands fa-microsoft",
    description: "Estudos práticos e laboratórios iniciais na nuvem Microsoft Azure, com foco em identidade e recursos básicos.",
    tech: ["Azure Portal", "Azure AD", "Máquinas Virtuais"],
    objective: "Construir uma base sólida para a certificação AZ-900 e futura atuação como Cloud Engineer.",
    problem: "Boa parte do conhecimento em infraestrutura local (on-premises) não se traduz automaticamente para a nuvem sem entender seus conceitos fundamentais.",
    solution: "Estudo estruturado e laboratórios práticos cobrindo assinaturas, grupos de recursos, identidade e provisionamento de máquinas virtuais no Azure.",
    result: "Primeiros recursos provisionados na nuvem e entendimento consolidado dos conceitos fundamentais do Azure.",
    status: "Em andamento"
  },
  {
    id: "proj-linux",
    title: "Introdução a Servidores Linux",
    icon: "fa-brands fa-linux",
    description: "Primeiros contatos com administração de sistemas Linux, linha de comando e gerenciamento de serviços.",
    tech: ["Linux", "Bash", "SSH"],
    objective: "Diversificar conhecimento em sistemas operacionais além do ecossistema Windows.",
    problem: "Grande parte da infraestrutura de nuvem e de automação moderna depende de conhecimento sólido em Linux, ecossistema pouco explorado até então.",
    solution: "Prática de linha de comando, gerenciamento de permissões e serviços via SSH em ambiente de laboratório.",
    result: "Familiaridade inicial com comandos essenciais, permissões e gerenciamento de pacotes.",
    status: "Em andamento"
  },
  {
    id: "proj-docker",
    title: "Contêineres com Docker",
    icon: "fa-brands fa-docker",
    description: "Projeto planejado para estudo de containerização de aplicações e serviços de infraestrutura.",
    tech: ["Docker", "Docker Compose"],
    objective: "Entender o funcionamento de contêineres como base para arquiteturas modernas de infraestrutura.",
    problem: "Arquiteturas modernas de infraestrutura dependem cada vez mais de contêineres, tema ainda não coberto na trajetória atual.",
    solution: "Laboratório planejado para configurar aplicações containerizadas com Docker e orquestração básica via Docker Compose.",
    result: "Projeto a ser iniciado como próxima etapa do roadmap de estudos.",
    status: "Planejado"
  }
];

/* --------------------------------------------------------------------- */
/* 4.1 CASOS TÉCNICOS                                                     */
/* -----------------------------------------------------------------------
   Problemas reais de suporte/infraestrutura resolvidos no dia a dia,
   descritos no formato Problema → Contexto → Solução → Resultado,
   com as tecnologias envolvidas. Formato pensado para recrutadores
   técnicos avaliarem raciocínio de troubleshooting, não só teoria.
   ========================================================================== */
const CASOS_TECNICOS_DATA = [
  {
    id: "caso-gpo-lentidao",
    title: "Lentidão no logon causada por GPOs conflitantes",
    problem: "Usuários de uma OU específica relatavam logon extremamente lento, levando mais de 3 minutos até a área de trabalho carregar.",
    context: "A OU acumulava GPOs criadas por diferentes responsáveis ao longo do tempo, sem revisão de sobreposição ou de scripts de logon.",
    solution: "Uso do Group Policy Results (gpresult /h) para mapear todas as políticas aplicadas, identificação de duas GPOs com mapeamentos de rede duplicados e um script de logon obsoleto, e consolidação em uma única política otimizada.",
    result: "Tempo de logon reduzido de ~3 minutos para menos de 30 segundos, sem alteração de comportamento esperado para o usuário.",
    tech: ["GPO", "Active Directory", "gpresult"]
  },
  {
    id: "caso-dhcp-conflito-ip",
    title: "Conflito de IP após expansão do parque de máquinas",
    problem: "Estações de trabalho começaram a apresentar erros intermitentes de rede após a entrada de novos equipamentos no escritório.",
    context: "O escopo DHCP configurado originalmente não previa o crescimento do número de dispositivos, gerando sobreposição com IPs reservados manualmente.",
    solution: "Auditoria do escopo DHCP, identificação de reservas estáticas conflitantes, ampliação da faixa de endereços disponíveis e padronização do uso de reservas por endereço MAC.",
    result: "Eliminação total dos conflitos de IP reportados, com margem de crescimento planejada para os próximos 12 meses.",
    tech: ["DHCP", "DNS", "Redes"]
  },
  {
    id: "caso-permissao-ntfs",
    title: "Acesso indevido a pasta financeira compartilhada",
    problem: "Um usuário de outro departamento conseguiu acessar arquivos da pasta compartilhada do setor financeiro.",
    context: "As permissões de compartilhamento (nível de rede) estavam mais abertas do que as permissões NTFS, e um grupo de segurança havia sido adicionado incorretamente à pasta.",
    solution: "Revisão completa das permissões NTFS e de compartilhamento da pasta, remoção do grupo incorreto, e padronização do processo de concessão de acesso via grupos de segurança específicos por departamento.",
    result: "Acesso restrito corretamente ao grupo do financeiro, com processo documentado para evitar recorrência.",
    tech: ["NTFS", "Active Directory", "File Server"]
  }
];

/* --------------------------------------------------------------------- */
/* 4.2 SCRIPTS (GITHUB)                                                   */
/* -----------------------------------------------------------------------
   Vitrine de scripts publicados no GitHub. Cada item aponta para o
   repositório real — atualize a URL assim que publicar o script.
   ========================================================================== */
const SCRIPTS_DATA = [
  {
    name: "New-ADUsersFromCSV",
    icon: "fa-solid fa-terminal",
    description: "Script PowerShell que lê um arquivo CSV e cria usuários em massa no Active Directory, já posicionando cada um na OU correta.",
    objective: "Eliminar a criação manual e repetitiva de contas de usuário.",
    tech: ["PowerShell", "Active Directory Module", "CSV"],
    github: "https://github.com/seu-usuario/new-adusers-from-csv"
  },
  {
    name: "Get-InactiveComputers",
    icon: "fa-solid fa-desktop",
    description: "Script que varre o Active Directory em busca de computadores inativos há mais de X dias, gerando um relatório para limpeza do domínio.",
    objective: "Facilitar a auditoria e higienização periódica de objetos de computador no AD.",
    tech: ["PowerShell", "Active Directory"],
    github: "https://github.com/seu-usuario/get-inactive-computers"
  },
  {
    name: "Backup-DHCPScope",
    icon: "fa-solid fa-network-wired",
    description: "Automação de backup periódico da configuração de escopos DHCP, com exportação para armazenamento externo.",
    objective: "Garantir recuperação rápida da configuração de rede em caso de falha do servidor.",
    tech: ["PowerShell", "DHCP", "Automação"],
    github: "https://github.com/seu-usuario/backup-dhcp-scope"
  }
];

/* --------------------------------------------------------------------- */
/* 5. LABORATÓRIOS (cada um possui página própria em /labs/)              */
/* --------------------------------------------------------------------- */
const LABS_DATA = [
  {
    id: "lab-001",
    code: "LAB-001",
    title: "Implantação de Domínio Active Directory",
    description: "Criação de um domínio do zero, com configuração de DNS, DHCP, unidades organizacionais, usuários, grupos e permissões.",
    tech: ["Active Directory", "DNS", "DHCP", "OU", "Usuários", "Grupos", "Permissões"],
    status: "Concluído",
    date: "Jan 2026",
    page: "labs/lab-001.html"
  },
  {
    id: "lab-002",
    code: "LAB-002",
    title: "File Server e Compartilhamentos NTFS",
    description: "Configuração de um servidor de arquivos corporativo com compartilhamentos de rede e permissões NTFS granulares.",
    tech: ["Windows Server", "File Server", "Compartilhamentos", "NTFS"],
    status: "Concluído",
    date: "Fev 2026",
    page: "labs/lab-002.html"
  },
  {
    id: "lab-003",
    code: "LAB-003",
    title: "Políticas de Grupo (GPO) e Mapeamento Automático",
    description: "Criação de GPOs para mapeamento automático de unidades de rede no logon dos usuários e aplicação de políticas de segurança.",
    tech: ["GPO", "Mapeamento de Unidades", "Políticas de Logon"],
    status: "Em andamento",
    date: "Mar 2026",
    page: "labs/lab-003.html"
  },
  {
    id: "lab-004",
    code: "LAB-004",
    title: "Automação de Usuários via PowerShell",
    description: "Script em PowerShell para leitura de arquivo CSV e criação automatizada de usuários no Active Directory.",
    tech: ["PowerShell", "CSV", "Automação"],
    status: "Planejado",
    date: "Prev. Abr 2026",
    page: "labs/lab-004.html"
  }
];

/* --------------------------------------------------------------------- */
/* 6. ROADMAP DE CARREIRA                                                  */
/* --------------------------------------------------------------------- */
const ROADMAP_DATA = [
  {
    year: "2026",
    items: ["Certificação AZ-900", "PowerShell avançado", "Windows Server avançado"],
    progress: 35
  },
  {
    year: "2027",
    items: ["Certificação AZ-104", "Administração Linux", "Docker", "Python para automação", "Fundamentos AWS"],
    progress: 10
  },
  {
    year: "2028",
    items: ["Terraform (IaC)", "Kubernetes", "Atuação como Cloud Engineer"],
    progress: 0
  }
];

/* --------------------------------------------------------------------- */
/* 7. CERTIFICAÇÕES                                                       */
/* --------------------------------------------------------------------- */
const CERTIFICATIONS_DATA = [
  { name: "Fundamentos de Redes", vendor: "Cisco", status: "Concluída", icon: "fa-solid fa-network-wired" },
  { name: "AZ-900: Azure Fundamentals", vendor: "Microsoft", status: "Em andamento", icon: "fa-brands fa-microsoft" },
  { name: "AZ-104: Azure Administrator", vendor: "Microsoft", status: "Planejada", icon: "fa-brands fa-microsoft" },
  { name: "CCNA", vendor: "Cisco", status: "Planejada", icon: "fa-solid fa-router" },
  { name: "AWS Cloud Practitioner", vendor: "AWS", status: "Planejada", icon: "fa-brands fa-aws" },
  { name: "Linux Essentials", vendor: "Linux Professional Institute", status: "Planejada", icon: "fa-brands fa-linux" },
  { name: "PowerShell for Sysadmins", vendor: "Microsoft", status: "Planejada", icon: "fa-solid fa-terminal" },
  { name: "Docker Fundamentals", vendor: "Docker", status: "Planejada", icon: "fa-brands fa-docker" }
];

/* --------------------------------------------------------------------- */
/* 8. BLOG TÉCNICO                                                        */
/* --------------------------------------------------------------------- */
const BLOG_DATA = [
  {
    title: "Como estruturar unidades organizacionais no Active Directory",
    category: "Infraestrutura",
    icon: "fa-solid fa-sitemap",
    summary: "Boas práticas para planejar uma hierarquia de OUs que facilite a delegação de permissões e a aplicação de GPOs.",
    readTime: "6 min",
    date: "10 Mar 2026",
    page: "blog/post-01.html"
  },
  {
    title: "DHCP e DNS: a dupla que sustenta a rede corporativa",
    category: "Redes",
    icon: "fa-solid fa-network-wired",
    summary: "Entenda como esses dois serviços trabalham juntos para manter dispositivos conectados e endereçáveis na rede.",
    readTime: "5 min",
    date: "22 Mar 2026",
    page: "blog/post-02.html"
  },
  {
    title: "Primeiros passos com Microsoft Azure para quem vem do Windows Server",
    category: "Azure",
    icon: "fa-brands fa-microsoft",
    summary: "Um guia prático para administradores Windows que estão migrando o conhecimento para a nuvem Microsoft.",
    readTime: "7 min",
    date: "02 Abr 2026",
    page: "blog/post-03.html"
  }
];

/* Categorias disponíveis para o filtro do Blog Técnico (seção #blog).
   Mantidas como lista fixa para preservar a ordem de exibição mesmo se
   nenhum post de uma categoria existir ainda. */
const BLOG_CATEGORIES = ["Todos", "Infraestrutura", "Windows Server", "Azure", "PowerShell", "Cloud", "Redes"];

/* --------------------------------------------------------------------- */
/* 9. JORNADA (seção "Minha Jornada")                                     */
/* --------------------------------------------------------------------- */
const JOURNEY_DATA = [
  { year: "Out 2024", label: "Primeiro contato com Infraestrutura" },
  { year: "Fev 2025", label: "Entrada na TransMargoo (Jovem Aprendiz)" },
  { year: "Mai 2025", label: "Windows Server" },
  { year: "Ago 2025", label: "Active Directory" },
  { year: "Jan 2026", label: "GPO, DNS & DHCP" },
  { year: "Mar 2026", label: "PowerShell" },
  { year: "2026", label: "Microsoft Azure (AZ-900)" },
  { year: "2027", label: "Cloud (AZ-104 · Linux · Docker)" },
  { year: "2028", label: "Cloud Engineer" }
];

/* --------------------------------------------------------------------- */
/* 10. DADOS PESSOAIS / CONTATO                                           */
/* --------------------------------------------------------------------- */
const PROFILE_DATA = {
  name: "Pedro Henrique",
  // Efeito de digitação do Hero — alterna exatamente o foco técnico do perfil.
  roles: [
    "Infraestrutura Microsoft",
    "Windows Server",
    "Active Directory",
    "Cloud Computing",
    "PowerShell",
    "Azure"
  ],
  linkedin: "https://www.linkedin.com/in/seu-usuario",
  github: "https://github.com/seu-usuario",
  email: "seuemail@exemplo.com",
  whatsapp: "https://wa.me/5500000000000",
  resume: "assets/curriculo-pedro-henrique.pdf"
};
