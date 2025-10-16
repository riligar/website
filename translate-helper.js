const fs = require('fs')

const translations = {
    // Header & Nav
    Home: { es: 'Inicio', pt: 'Início' },
    Solutions: { es: 'Soluciones', pt: 'Soluções' },
    'About Us': { es: 'Sobre Nosotros', pt: 'Sobre Nós' },
    Contact: { es: 'Contacto', pt: 'Contato' },
    Blog: { es: 'Blog', pt: 'Blog' },
    'Our Services': { es: 'Nuestros Servicios', pt: 'Nossos Serviços' },
    'Ready to get started?': { es: '¿Listo para comenzar?', pt: 'Pronto para começar?' },
    'Discover the perfect solution for your business': {
        es: 'Descubra la solución perfecta para su negocio',
        pt: 'Descubra a solução perfeita para o seu negócio',
    },
    'Start a Project': { es: 'Iniciar un Proyecto', pt: 'Iniciar um Projeto' },
    Navigation: { es: 'Navegación', pt: 'Navegação' },

    // Solutions
    'AI Agents': { es: 'Agentes IA', pt: 'Agentes IA' },
    'Salesforce Solutions': { es: 'Soluciones Salesforce', pt: 'Soluções Salesforce' },
    'SaaS Platforms': { es: 'Plataformas SaaS', pt: 'Plataformas SaaS' },
    'AI Integration': { es: 'Integración IA', pt: 'Integração IA' },
    'AI Integration Services': { es: 'Servicios de Integración IA', pt: 'Serviços de Integração IA' },
    'Custom Development': { es: 'Desarrollo Personalizado', pt: 'Desenvolvimento Personalizado' },
    'Consulting & Strategy': { es: 'Consultoría y Estrategia', pt: 'Consultoria e Estratégia' },

    // Hero Section
    'Solutions That Transform <br /> Your Business': {
        es: 'Soluciones que Transforman <br /> Tu Negocio',
        pt: 'Soluções que Transformam <br /> Seu Negócio',
    },
    'We deliver powerful solutions tailored to your needs. From Salesforce components to intelligent AI Agents, scalable SaaS platforms, and advanced AI integrations—every solution is designed to solve real problems and drive measurable results.':
        {
            es: 'Ofrecemos soluciones poderosas adaptadas a tus necesidades. Desde componentes Salesforce hasta Agentes IA inteligentes, plataformas SaaS escalables e integraciones IA avanzadas: cada solución está diseñada para resolver problemas reales y generar resultados medibles.',
            pt: 'Entregamos soluções poderosas adaptadas às suas necessidades. Desde componentes Salesforce até Agentes IA inteligentes, plataformas SaaS escaláveis e integrações IA avançadas—cada solução é projetada para resolver problemas reais e gerar resultados mensuráveis.',
        },
    'Intelligent autonomous agents that work 24/7, automating tasks, making decisions, and delivering insights': {
        es: 'Agentes autónomos inteligentes que trabajan 24/7, automatizando tareas, tomando decisiones y entregando información',
        pt: 'Agentes autônomos inteligentes que trabalham 24/7, automatizando tarefas, tomando decisões e fornecendo insights',
    },
    'Custom components and integrations that supercharge your CRM and boost team productivity': {
        es: 'Componentes personalizados e integraciones que potencian tu CRM y aumentan la productividad del equipo',
        pt: 'Componentes personalizados e integrações que turbina seu CRM e aumentam a produtividade da equipe',
    },
    'SaaS & AI Integration': { es: 'SaaS e Integración IA', pt: 'SaaS e Integração IA' },
    'High-performance platforms with AI capabilities that scale with your business growth': {
        es: 'Plataformas de alto rendimiento con capacidades de IA que escalan con el crecimiento de tu negocio',
        pt: 'Plataformas de alto desempenho com capacidades de IA que escalam com o crescimento do seu negócio',
    },
    'Explore Solutions': { es: 'Explorar Soluciones', pt: 'Explorar Soluções' },
    'Talk to Us': { es: 'Hablar con Nosotros', pt: 'Falar Conosco' },

    // Features
    'Solutions That Deliver Results': { es: 'Soluciones que Generan Resultados', pt: 'Soluções que Geram Resultados' },
    'Our Solutions Portfolio': { es: 'Nuestro Portafolio de Soluciones', pt: 'Nosso Portfólio de Soluções' },
    'Each solution is crafted to address specific business challenges. We combine cutting-edge technology with clean, maintainable code to deliver tools that are powerful, reliable, and built to last. From AI Agents that work autonomously to Salesforce components that boost productivity—we have the solutions you need to thrive.':
        {
            es: 'Cada solución está diseñada para abordar desafíos empresariales específicos. Combinamos tecnología de vanguardia con código limpio y mantenible para entregar herramientas poderosas, confiables y construidas para durar. Desde Agentes IA que trabajan autónomamente hasta componentes Salesforce que aumentan la productividad: tenemos las soluciones que necesitas para prosperar.',
            pt: 'Cada solução é criada para enfrentar desafios empresariais específicos. Combinamos tecnologia de ponta com código limpo e sustentável para entregar ferramentas poderosas, confiáveis e construídas para durar. Desde Agentes IA que trabalham autonomamente até componentes Salesforce que aumentam a produtividade—temos as soluções que você precisa para prosperar.',
        },
    'Featured Solution': { es: 'Solución Destacada', pt: 'Solução Destaque' },

    // Stats
    'Solutions That Deliver Measurable Results': {
        es: 'Soluciones que Generan Resultados Medibles',
        pt: 'Soluções que Geram Resultados Mensuráveis',
    },
    'Average productivity increase with our Salesforce components': {
        es: 'Aumento promedio de productividad con nuestros componentes Salesforce',
        pt: 'Aumento médio de produtividade com nossos componentes Salesforce',
    },
    'Teams work faster when tools fit their workflows': {
        es: 'Los equipos trabajan más rápido cuando las herramientas se ajustan a sus flujos de trabajo',
        pt: 'As equipes trabalham mais rápido quando as ferramentas se ajustam aos seus fluxos de trabalho',
    },
    'AI Agents working continuously for your business': {
        es: 'Agentes IA trabajando continuamente para tu negocio',
        pt: 'Agentes IA trabalhando continuamente para o seu negócio',
    },
    'Never miss an opportunity or customer inquiry': {
        es: 'Nunca pierdas una oportunidad o consulta de cliente',
        pt: 'Nunca perca uma oportunidade ou consulta de cliente',
    },
    'To first working prototype': { es: 'Para primer prototipo funcional', pt: 'Para primeiro protótipo funcional' },
    'Fast iterations mean quick validation and faster ROI': {
        es: 'Iteraciones rápidas significan validación rápida y ROI más rápido',
        pt: 'Iterações rápidas significam validação rápida e ROI mais rápido',
    },
    'Clean, maintainable code in every project': {
        es: 'Código limpio y mantenible en cada proyecto',
        pt: 'Código limpo e sustentável em todo projeto',
    },
    'No technical debt, no messy shortcuts': {
        es: 'Sin deuda técnica, sin atajos desordenados',
        pt: 'Sem dívida técnica, sem atalhos bagunçados',
    },

    // CTA
    'Find the Perfect Solution for Your Business': {
        es: 'Encuentra la Solución Perfecta para Tu Negocio',
        pt: 'Encontre a Solução Perfeita para o Seu Negócio',
    },
    "Whether you need AI Agents, Salesforce solutions, SaaS platforms, or AI integration—we have the expertise to deliver. Let's explore which solution fits your needs best.":
        {
            es: 'Ya sea que necesites Agentes IA, soluciones Salesforce, plataformas SaaS o integración IA, tenemos la experiencia para entregar. Exploremos qué solución se adapta mejor a tus necesidades.',
            pt: 'Seja você precisando de Agentes IA, soluções Salesforce, plataformas SaaS ou integração IA—temos a expertise para entregar. Vamos explorar qual solução se encaixa melhor nas suas necessidades.',
        },
    'Schedule a Call': { es: 'Agendar una Llamada', pt: 'Agendar uma Chamada' },
    'Solutions Available': { es: 'Soluciones Disponibles', pt: 'Soluções Disponíveis' },
    'To First Results': { es: 'Para Primeros Resultados', pt: 'Para Primeiros Resultados' },
    'AI Agents Working': { es: 'Agentes IA Trabajando', pt: 'Agentes IA Trabalhando' },

    // Header descriptions
    'Intelligent autonomous agents that automate tasks and make decisions for your business': {
        es: 'Agentes autónomos inteligentes que automatizan tareas y toman decisiones para tu negocio',
        pt: 'Agentes autônomos inteligentes que automatizam tarefas e tomam decisões para o seu negócio',
    },
    'Custom components, integrations, and automations for your Salesforce platform': {
        es: 'Componentes personalizados, integraciones y automatizaciones para tu plataforma Salesforce',
        pt: 'Componentes personalizados, integrações e automatizações para a sua plataforma Salesforce',
    },
    'End-to-end SaaS development with modern, scalable architecture': {
        es: 'Desarrollo SaaS de principio a fin con arquitectura moderna y escalable',
        pt: 'Desenvolvimento SaaS de ponta a ponta com arquitetura moderna e escalável',
    },
    'Add AI capabilities to your existing systems and workflows': {
        es: 'Agrega capacidades de IA a tus sistemas y flujos de trabajo existentes',
        pt: 'Adicione capacidades de IA aos seus sistemas e fluxos de trabalho existentes',
    },

    // Features descriptions
    'Deploy intelligent autonomous agents that work continuously for your business. From customer service to data analysis, our AI agents handle complex tasks, make informed decisions, and learn from interactions—all while you focus on growth.':
        {
            es: 'Despliega agentes autónomos inteligentes que trabajan continuamente para tu negocio. Desde servicio al cliente hasta análisis de datos, nuestros agentes IA manejan tareas complejas, toman decisiones informadas y aprenden de las interacciones, todo mientras te enfocas en el crecimiento.',
            pt: 'Implante agentes autônomos inteligentes que trabalham continuamente para o seu negócio. Desde atendimento ao cliente até análise de dados, nossos agentes IA lidam com tarefas complexas, tomam decisões informadas e aprendem com as interações—tudo enquanto você foca no crescimento.',
        },
    'Custom Lightning Web Components, integrations, and automations for Salesforce. Component libraries that enhance your CRM capabilities and streamline your sales, service, and marketing workflows.':
        {
            es: 'Componentes Lightning Web personalizados, integraciones y automatizaciones para Salesforce. Bibliotecas de componentes que mejoran las capacidades de tu CRM y optimizan tus flujos de trabajo de ventas, servicio y marketing.',
            pt: 'Lightning Web Components personalizados, integrações e automatizações para Salesforce. Bibliotecas de componentes que aprimoram as capacidades do seu CRM e otimizam seus fluxos de trabalho de vendas, serviço e marketing.',
        },
    'End-to-end SaaS solutions built with modern architecture. From MVP to enterprise-scale, we deliver lightweight, high-performance applications that are easy to maintain and cost-effective to run.':
        {
            es: 'Soluciones SaaS de principio a fin construidas con arquitectura moderna. Desde MVP hasta escala empresarial, entregamos aplicaciones ligeras y de alto rendimiento que son fáciles de mantener y rentables de ejecutar.',
            pt: 'Soluções SaaS de ponta a ponta construídas com arquitetura moderna. Desde MVP até escala empresarial, entregamos aplicativos leves e de alto desempenho que são fáceis de manter e econômicos de executar.',
        },
    'Integrate cutting-edge AI capabilities into your existing systems. Natural language processing, machine learning models, predictive analytics, and intelligent automation—tailored to your specific use cases.':
        {
            es: 'Integra capacidades de IA de vanguardia en tus sistemas existentes. Procesamiento de lenguaje natural, modelos de machine learning, análisis predictivo y automatización inteligente, adaptados a tus casos de uso específicos.',
            pt: 'Integre capacidades de IA de ponta em seus sistemas existentes. Processamento de linguagem natural, modelos de machine learning, análise preditiva e automação inteligente—adaptados aos seus casos de uso específicos.',
        },
    'Bespoke solutions designed around your unique business requirements. Clean, maintainable code that scales with your needs and stands the test of time.':
        {
            es: 'Soluciones personalizadas diseñadas en torno a tus requisitos empresariales únicos. Código limpio y mantenible que escala con tus necesidades y resiste el paso del tiempo.',
            pt: 'Soluções personalizadas projetadas em torno das suas necessidades empresariais únicas. Código limpo e sustentável que escala com suas necessidades e resiste ao teste do tempo.',
        },
    'Technical guidance and strategic planning for your technology initiatives. We help you make informed decisions about architecture, tooling, and implementation approaches.':
        {
            es: 'Orientación técnica y planificación estratégica para tus iniciativas tecnológicas. Te ayudamos a tomar decisiones informadas sobre arquitectura, herramientas y enfoques de implementación.',
            pt: 'Orientação técnica e planejamento estratégico para suas iniciativas tecnológicas. Ajudamos você a tomar decisões informadas sobre arquitetura, ferramentas e abordagens de implementação.',
        },

    // Footer
    'Delivering powerful solutions: AI Agents, Salesforce, SaaS platforms, and AI integration services.': {
        es: 'Ofreciendo soluciones poderosas: Agentes IA, Salesforce, plataformas SaaS y servicios de integración IA.',
        pt: 'Entregando soluções poderosas: Agentes IA, Salesforce, plataformas SaaS e serviços de integração IA.',
    },
    '© {0} RiLiGar. All rights reserved. Built with excellence.': {
        es: '© {0} RiLiGar. Todos los derechos reservados. Construido con excelencia.',
        pt: '© {0} RiLiGar. Todos os direitos reservados. Construído com excelência.',
    },
    Instagram: { es: 'Instagram', pt: 'Instagram' },
    LinkedIn: { es: 'LinkedIn', pt: 'LinkedIn' },
    YouTube: { es: 'YouTube', pt: 'YouTube' },
}

// Função para processar arquivo PO
function translatePO(lang) {
    const enFile = fs.readFileSync('src/locales/en/messages.po', 'utf8')
    let targetFile = fs.readFileSync(`src/locales/${lang}/messages.po`, 'utf8')

    for (const [en, trans] of Object.entries(translations)) {
        if (trans[lang]) {
            // Escapa caracteres especiais para regex
            const escapedEn = en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
            const regex = new RegExp(`msgid "${escapedEn}"\\nmsgstr ""`, 'g')
            targetFile = targetFile.replace(regex, `msgid "${en}"\nmsgstr "${trans[lang]}"`)
        }
    }

    fs.writeFileSync(`src/locales/${lang}/messages.po`, targetFile)
    console.log(`✅ Translated ${lang} file`)
}

translatePO('es')
translatePO('pt')
console.log('🎉 Translation complete!')
