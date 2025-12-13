import { Box, Title, Text, Container, Paper, Badge, Group, ThemeIcon, rem, Grid, Divider } from '@mantine/core'
import { IconBulb, IconTarget, IconSearch, IconRocket, IconChartArrows } from '@tabler/icons-react'

const caseData = {
    id: 'ecommerce-estoque',
    industry: 'E-commerce',
    badgeText: 'Estudo de Caso',
    challenge: {
        icon: IconTarget,
        title: 'O Desafio',
        text: 'Cliente de e-commerce com problemas recorrentes de estoque: às vezes faltavam materiais críticos, outras vezes sobrava capital empatado em excesso de inventário.',
    },
    initialRequest: {
        icon: IconBulb,
        title: 'A Pedida Inicial',
        text: '"Queremos uma planilha automática para controlar o estoque."',
    },
    diagnosis: {
        icon: IconSearch,
        title: 'O Diagnóstico RiLiGar',
        text: 'O problema não era a planilha — era a falta de regras claras de reabastecimento, ausência de níveis de autoridade para compras, e vendas prometendo prazos sem verificar inventário.',
    },
    solution: {
        icon: IconRocket,
        title: 'A Solução',
        text: 'Implementamos gatilhos automáticos de compra baseados em dados de uso real, fluxos de aprovação hierárquica para compras grandes, e dashboards dando visibilidade em tempo real para todos.',
    },
    impact: {
        icon: IconChartArrows,
        title: 'O Impacto',
        metrics: [
            { value: 'R$ 100k+', label: 'economizados em estoque parado' },
            { value: 'Zero', label: 'rupturas de vendas críticas' },
            { value: '+15%', label: 'eficiência na produção' },
        ],
    },
}

export default function CaseStudy() {
    const steps = [caseData.challenge, caseData.initialRequest, caseData.diagnosis, caseData.solution]

    return (
        <Box
            id="casos-impacto"
            component="section"
            aria-label="Estudo de caso de transformação"
            py={80}
            style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(249, 250, 251, 1) 100%)',
            }}
        >
            {/* <Container size="lg"> */}
            <Group
                justify="center"
                mb="md"
            >
                <Badge
                    variant="filled"
                    size="lg"
                >
                    {caseData.badgeText}
                </Badge>
            </Group>

            <Title
                order={2}
                ta="center"
                mb="md"
                size={{ base: 28, sm: 32, md: 36 }}
            >
                Da Planilha ao Lucro Real
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mb={60}
                maw={700}
                mx="auto"
            >
                Veja como transformamos uma "demanda de planilha" em uma solução que economizou mais de R$ 100 mil por
                ano.
            </Text>

            <Paper
                p="xl"
                radius="md"
                style={{
                    border: '1px solid #e9ecef',
                }}
            >
                <Grid gutter="xl">
                    <Grid.Col span={{ base: 12, md: 8 }}>
                        {steps.map((step, index) => (
                            <Box
                                key={index}
                                mb={index < steps.length - 1 ? 'xl' : 0}
                            >
                                <Group
                                    gap="sm"
                                    mb="xs"
                                >
                                    <ThemeIcon
                                        size={32}
                                        radius="md"
                                        variant="light"
                                        color="blue"
                                    >
                                        <step.icon
                                            style={{ width: rem(16), height: rem(16) }}
                                            stroke={2}
                                        />
                                    </ThemeIcon>
                                    <Text
                                        fw={600}
                                        size="md"
                                    >
                                        {step.title}
                                    </Text>
                                </Group>
                                <Text
                                    size="sm"
                                    c="dimmed"
                                    pl={44}
                                >
                                    {step.text}
                                </Text>
                                {index < steps.length - 1 && (
                                    <Divider
                                        mt="lg"
                                        variant="dashed"
                                    />
                                )}
                            </Box>
                        ))}
                    </Grid.Col>

                    <Grid.Col span={{ base: 12, md: 4 }}>
                        <Paper
                            p="lg"
                            radius="md"
                            style={{
                                background:
                                    'linear-gradient(135deg, rgba(34, 139, 230, 0.1) 0%, rgba(58, 134, 255, 0.05) 100%)',
                                border: '1px solid rgba(34, 139, 230, 0.2)',
                                height: '100%',
                            }}
                        >
                            <Group
                                gap="sm"
                                mb="lg"
                            >
                                <ThemeIcon
                                    size={32}
                                    radius="md"
                                    variant="filled"
                                    color="blue"
                                >
                                    <caseData.impact.icon
                                        style={{ width: rem(16), height: rem(16) }}
                                        stroke={2}
                                    />
                                </ThemeIcon>
                                <Text
                                    fw={700}
                                    size="lg"
                                >
                                    {caseData.impact.title}
                                </Text>
                            </Group>

                            {caseData.impact.metrics.map((metric, index) => (
                                <Box
                                    key={index}
                                    mb={index < caseData.impact.metrics.length - 1 ? 'md' : 0}
                                >
                                    <Text
                                        size="30px"
                                        fw={900}
                                        c="blue"
                                    >
                                        {metric.value}
                                    </Text>
                                    <Text
                                        size="xs"
                                        c="dimmed"
                                    >
                                        {metric.label}
                                    </Text>
                                </Box>
                            ))}
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Paper>

            <Text
                size="sm"
                c="dimmed"
                ta="center"
                mt="xl"
                fs="italic"
            >
                A maior parte do valor veio do diagnóstico e redesenho de processos — não da implementação técnica.
            </Text>
            {/* </Container> */}
        </Box>
    )
}
