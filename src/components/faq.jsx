import { Box, Title, Text, Accordion, Group, Badge, Container, useMantineTheme } from '@mantine/core'

const faqs = [
    {
        id: 'diagnostico',
        question: 'O diagnóstico é realmente necessário? Já sei o que preciso.',
        answer: 'Na maioria das vezes, o que você acredita ser o problema é apenas um sintoma. Construir solução em cima de sintoma é desperdício de capital. O diagnóstico serve para garantir que estamos atacando a raiz do dreno financeiro, não o reflexo dele.',
    },
    {
        id: 'tempo',
        question: 'Quanto tempo demora para ver resultados?',
        answer: 'Trabalhamos em ciclos rápidos. O redesenho e os primeiros enablers tecnológicos costumam ser entregues em menos de 21 dias. Não acreditamos em projetos de 6 meses sem entrega de valor intermediário.',
    },
    {
        id: 'tecnologia',
        question: 'Vocês usam IA em tudo?',
        answer: 'Usamos a ferramenta certa para o problema certo. A IA é excelente para processar volume e reduzir cognição manual, mas o segredo está no redesenho do processo. Automatizar um lixo com IA apenas gera um lixo automatizado mais rápido.',
    },
    {
        id: 'custo',
        question: 'O serviço é caro?',
        answer: 'Caro é ter um dreno invisível de faturamento todo mês. Nossos projetos são estruturados como ativos financeiros: o objetivo é que o ROI pague o investimento em poucos meses de operação otimizada.',
    },
    {
        id: 'integracao',
        question: 'Vão quebrar meus sistemas atuais?',
        answer: 'Pelo contrário. Operamos em níveis. Muitas vezes nossa primeira intervenção é otimizar o que você já tem. Se precisarmos integrar ou substituir, fazemos de forma cirúrgica para garantir continuidade operacional.',
    },
]

export default function Faq() {
    const theme = useMantineTheme()

    return (
        <Box
            id="faq"
            component="section"
            aria-label="Frequently Asked Questions"
            py={80}
            bg="white"
        >
            <Container size="md">
                <Group
                    justify="center"
                    mb="md"
                >
                    <Badge
                        variant="dot"
                        color="gray"
                        size="lg"
                    >
                        Principais Objeções
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                    style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.04em' }}
                >
                    Respostas Diretas para Dúvidas Honestamente Céticas
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                    fz="lg"
                >
                    Não fugimos de perguntas difíceis. Aqui está como pensamos e como operamos.
                </Text>

                <Accordion
                    variant="separated"
                    radius="sm"
                    styles={{
                        item: {
                            backgroundColor: theme.colors.gray[0],
                            border: `1px solid ${theme.colors.gray[2]}`,
                            '&[data-active]': {
                                backgroundColor: theme.white,
                                borderColor: theme.black,
                            },
                        },
                        control: {
                            padding: theme.spacing.xl,
                        },
                        label: {
                            fontWeight: 800,
                            color: theme.black,
                            fontSize: theme.fontSizes.lg,
                            letterSpacing: '-0.01em',
                        },
                        content: {
                            padding: theme.spacing.xl,
                            paddingTop: 0,
                        },
                    }}
                >
                    {faqs.map(item => (
                        <Accordion.Item
                            key={item.id}
                            value={item.id}
                        >
                            <Accordion.Control>{item.question}</Accordion.Control>
                            <Accordion.Panel>
                                <Text
                                    size="md"
                                    c="dimmed"
                                    lh={1.6}
                                >
                                    {item.answer}
                                </Text>
                            </Accordion.Panel>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </Box>
    )
}
