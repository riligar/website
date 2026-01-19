import { Box, Title, Text, Accordion, useMantineTheme } from '@mantine/core'

const faq = [
    {
        id: 'diferenca',
        question: 'Qual a diferença entre a RiLiGar e uma agência de automação tradicional?',
        answer: `A maioria das agências começa perguntando "o que você quer automatizar?" — nós perguntamos "o que está impedindo seu negócio de atingir seus objetivos?". Essa diferença é fundamental.
      <br/>
      <br/>
      Não vendemos ferramentas ou tecnologias. Diagnosticamos problemas de negócio, redesenhamos processos para serem mais eficazes, e só então escolhemos a tecnologia certa para habilitar a solução. Muitas vezes, um processo ruim automatizado ainda é um processo ruim — só mais rápido.
      <br/>
      <br/>
      O resultado é impacto real: aumento de receita, redução de custos, vantagens competitivas que seus concorrentes não conseguem replicar facilmente.`,
    },
    {
        id: 'diagnostico',
        question: 'Como funciona o diagnóstico profundo?',
        answer: `Começamos com uma conversa de 30 minutos para entender seu negócio — não uma reunião de vendas, mas uma sessão de diagnóstico. Fazemos perguntas que vão além do óbvio: onde o tempo está sendo gasto? Quais decisões são tomadas com base em achismo? O que acontece quando algo dá errado?
      <br/>
      <br/>
      A partir daí, mapeamos seus processos, identificamos gargalos que você talvez não saiba que existem, e quantificamos o impacto financeiro de cada problema. Só depois de entender profundamente a situação é que propomos soluções.
      <br/>
      <br/>
      Muitas vezes, o problema real é diferente do que o cliente inicialmente imagina. Um escritório de advocacia achava que precisava automatizar entrada de leads — descobrimos que o problema era o processo de qualificação inteiro.`,
    },
    {
        id: 'redesenho',
        question: 'Por que redesenhar processos antes de automatizar?',
        answer: `Imagine automatizar um processo de inventário que está fundamentalmente quebrado — você vai fazer besteira mais rápido. Vimos isso acontecer: uma rede de casas de repouso queria automatizar planilhas de estoque, mas descobrimos que não tinham protocolos de recompra, decisões eram ad-hoc, e vendas prometiam entregas sem checar estoque.
      <br/>
      <br/>
      A automação seria inútil sem primeiro redesenhar o processo. Depois de estabelecer pontos de recompra claros, níveis de aprovação, e visibilidade completa — aí sim a automação fez sentido. O resultado: $100K economizados por ano.
      <br/>
      <br/>
      A tecnologia é sempre o último passo, nunca o primeiro.`,
    },
    {
        id: 'impacto',
        question: 'Como vocês medem o sucesso de um projeto?',
        answer: `Não medimos sucesso por linhas de código, funcionalidades entregues ou horas trabalhadas. Medimos por impacto de negócio: aumento de receita, redução de custos, vantagens competitivas criadas.
      <br/>
      <br/>
      Antes de começar qualquer projeto, definimos métricas claras de sucesso junto com você. Pode ser: "reduzir tempo de processamento de leads de 4 horas para 4 minutos", "eliminar $50K em desperdício de inventário", ou "aumentar conversão de leads em 25%".
      <br/>
      <br/>
      Acompanhamos essas métricas durante e depois da implementação. Se a solução não está gerando o impacto esperado, ajustamos até funcionar.`,
    },
    {
        id: 'prazo',
        question: 'Quanto tempo leva para ver resultados?',
        answer: `Depende da complexidade, mas nossa abordagem é mostrar valor rapidamente. Muitos clientes começam a ver resultados em 2-3 semanas, mesmo que a solução completa leve mais tempo.
      <br/>
      <br/>
      Trabalhamos em ciclos iterativos: diagnosticamos, implementamos uma parte, medimos resultados, ajustamos, e repetimos. Isso significa que você não precisa esperar meses para saber se a abordagem está funcionando.
      <br/>
      <br/>
      Para projetos maiores, priorizamos os "quick wins" — mudanças que geram impacto imediato enquanto trabalhamos nas transformações mais profundas.`,
    },
    {
        id: 'investimento',
        question: 'Qual o investimento típico?',
        answer: `O investimento varia conforme a complexidade do problema e o tamanho da transformação. Mas a pergunta certa não é "quanto custa?" — é "qual o retorno esperado?"
      <br/>
      <br/>
      Se uma solução de $30K gera $100K em economia ou receita adicional por ano, o payback é de 4 meses. Trabalhamos para que cada projeto tenha um ROI claro e mensurável.
      <br/>
      <br/>
      Oferecemos modelos flexíveis: projetos com escopo fixo, engajamentos contínuos, ou parcerias de transformação de longo prazo. Na conversa inicial, discutimos seu orçamento e encontramos a melhor abordagem.`,
    },
    {
        id: 'parceria',
        question: 'O que significa "parceria de transformação"?',
        answer: `Não somos fornecedores que entregam um projeto e desaparecem. Somos parceiros no sucesso do seu negócio. Isso significa:
      <br/>
      <br/>
      → Acompanhamos resultados depois da implementação<br/>
      → Ajustamos soluções conforme seu negócio evolui<br/>
      → Identificamos novas oportunidades de melhoria<br/>
      → Estamos disponíveis quando você precisa de orientação
      <br/>
      <br/>
      Muitos clientes trabalham conosco continuamente por anos, não porque são obrigados, mas porque veem valor constante na parceria.`,
    },
    {
        id: 'ai',
        question: 'Vocês usam IA? Como?',
        answer: `Sim, usamos IA quando faz sentido — mas IA é um meio, não um fim. Não vendemos "IA" como produto; usamos tecnologias de IA (incluindo agentes autônomos, processamento de linguagem natural, e automação inteligente) como ferramentas para resolver problemas de negócio.
      <br/>
      <br/>
      Por exemplo: para um escritório de contabilidade, usamos IA para analisar comunicações com clientes e identificar padrões de insatisfação. Mas a solução não era "implementar IA" — era melhorar a comunicação com clientes. A IA foi só o enabler.
      <br/>
      <br/>
      Não recomendamos IA se uma planilha bem-feita resolve o problema. A tecnologia certa é aquela que resolve seu problema de forma sustentável.`,
    },
    {
        id: 'seguranca',
        question: 'Como garantem a segurança e qualidade?',
        answer: `Segurança e qualidade são inegociáveis. Todo código passa por revisão rigorosa, testes automatizados, e segue melhores práticas de desenvolvimento.
      <br/>
      <br/>
      Para segurança: criptografia de dados sensíveis, controles de acesso granulares, auditorias regulares, e conformidade com padrões do setor. Seus dados ficam protegidos.
      <br/>
      <br/>
      Para qualidade: código limpo, documentado, e construído para durar. Você não está comprando uma solução que vai precisar ser refeita em 2 anos — está investindo em um ativo de qualidade que evolui com seu negócio.`,
    },
    {
        id: 'comecar',
        question: 'Como começo?',
        answer: `Simples: agende uma conversa de diagnóstico. Em 30 minutos, vamos:
      <br/>
      <br/>
      → Entender seus principais desafios<br/>
      → Identificar onde pode haver valor escondido<br/>
      → Discutir possíveis abordagens<br/>
      → Definir próximos passos (se fizer sentido)
      <br/>
      <br/>
      Sem compromisso, sem pressão de vendas. Se não formos o fit certo, vamos dizer — e talvez possamos indicar quem seja. Clique em "Agendar Diagnóstico" ou mande uma mensagem pelo WhatsApp.`,
    },
]

export default function Faq() {
    return (
        <Box
            component="section"
            aria-label="Frequently asked questions"
            py={80}
        >
            <Title
                order={2}
                ta="center"
                size={{ base: 28, sm: 32, md: 36 }}
                c="dark"
                mb="md"
            >
                Perguntas Frequentes
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mb={50}
                maw={700}
                mx="auto"
                fz="lg"
            >
                Tudo o que você precisa saber sobre trabalhar com a RiLiGar
            </Text>

            <Accordion
                variant="separated"
                radius="md"
            >
                {faq.map(item => (
                    <Accordion.Item
                        key={item.id}
                        value={item.id}
                    >
                        <Accordion.Control>
                            <Text
                                fw={600}
                                c="dark"
                            >
                                {item.question}
                            </Text>
                        </Accordion.Control>
                        <Accordion.Panel>
                            <Text
                                size="sm"
                                c="dimmed"
                                lh={1.6}
                                dangerouslySetInnerHTML={{ __html: item.answer }}
                            />
                        </Accordion.Panel>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Box>
    )
}
