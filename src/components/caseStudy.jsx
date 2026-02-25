import {
    Box,
    Title,
    Text,
    Container,
    Paper,
    Badge,
    Group,
    ThemeIcon,
    Grid,
    Divider,
    useMantineTheme,
} from '@mantine/core'
import { IconBulb, IconTarget, IconSearch, IconRocket, IconChartArrows } from '@tabler/icons-react'

const caseData = {
    id: 'ecommerce-estoque',
    industry: 'E-commerce',
    badgeText: 'Estudo de Caso',
    challenge: {
        icon: IconTarget,
        title: 'O Dreno de Capital',
        text: 'Uma operação de e-commerce sofrendo com estoque imprevisível: capital parado em excesso de alguns itens e vendas perdidas por falta de outros.',
    },
    initialRequest: {
        icon: IconBulb,
        title: 'A Reação Típica',
        text: '"Precisamos de uma planilha automática para controlar o que entra e sai."',
    },
    diagnosis: {
        icon: IconSearch,
        title: 'O Diagnóstico RiLiGar',
        text: 'O problema não era a ferramenta, era o caos: falta de gatilhos de recompra, zero hierarquia de aprovação e vendas prometendo o que não tinha no galpão.',
    },
    solution: {
        icon: IconRocket,
        title: 'A Intervenção',
        text: 'Redesenho total do protocolo de suprimentos + Dashboards de visibilidade em tempo real. A automação foi apenas o enabler para o novo processo.',
    },
    impact: {
        icon: IconChartArrows,
        title: 'Resultado Real',
        metrics: [
            { value: 'R$ 100k+', label: 'Recuperados em estoque parado' },
            { value: 'Zero', label: 'Rupturas em vendas críticas' },
            { value: '+22%', label: 'Margem operacional na categoria' },
        ],
    },
}

export default function CaseStudy() {
    const theme = useMantineTheme()
    const steps = [caseData.challenge, caseData.initialRequest, caseData.diagnosis, caseData.solution]

    return (
        <Box
            id="casos-impacto"
            component="section"
            aria-label="Estudo de caso de transformation"
            py={80}
            bg="gray.0"
            bd={{ top: `1px solid ${theme.colors.gray[2]}`, bottom: `1px solid ${theme.colors.gray[2]}` }}
        >
            <Group
                justify="center"
                mb="md"
            >
                <Badge
                    variant="dot"
                    color="gray"
                    size="lg"
                >
                    {caseData.badgeText}
                </Badge>
            </Group>

            <Title
                order={2}
                ta="center"
                mb="md"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.04em' }}
            >
                Da "Demanda de Planilha" ao Lucro Real
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mb={60}
                maw={700}
                mx="auto"
                fz="lg"
            >
                Veja como o diagnóstico profundo revelou o problema real por trás de um "pedido de ferramenta" e como
                isso estancou um desperdício de R$ 100 mil/ano.
            </Text>

            <Container size="lg">
                <Grid gutter="xl">
                    {steps.map((step, index) => (
                        <Grid.Col
                            key={index}
                            span={{ base: 12, md: 6 }}
                        >
                            <Paper
                                p="xl"
                                radius="sm"
                                bg="white"
                                bd={`1px solid ${theme.colors.gray[2]}`}
                                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <Group
                                    gap="sm"
                                    mb="xl"
                                >
                                    <ThemeIcon
                                        size={48}
                                        radius="sm"
                                        variant="light"
                                        color="gray"
                                    >
                                        <step.icon
                                            size={24}
                                            stroke={1.5}
                                        />
                                    </ThemeIcon>
                                    <Text
                                        fw={800}
                                        size="h4"
                                        style={{ letterSpacing: '-0.02em', color: theme.black }}
                                    >
                                        {step.title}
                                    </Text>
                                </Group>
                                <Text
                                    size="md"
                                    c="dimmed"
                                    lh={1.6}
                                    style={{ flexGrow: 1 }}
                                >
                                    {step.text}
                                </Text>
                            </Paper>
                        </Grid.Col>
                    ))}

                    <Grid.Col span={{ base: 12 }}>
                        <Paper
                            p="xl"
                            radius="sm"
                            bg="gray.0"
                            bd={`1px solid ${theme.colors.gray[2]}`}
                        >
                            <Group
                                gap="sm"
                                mb="xl"
                                justify="center"
                            >
                                <ThemeIcon
                                    size={48}
                                    radius="sm"
                                    variant="filled"
                                    color="dark"
                                >
                                    <caseData.impact.icon
                                        size={24}
                                        stroke={1.5}
                                    />
                                </ThemeIcon>
                                <Text
                                    fw={800}
                                    size="h3"
                                    style={{ letterSpacing: '-0.02em', color: theme.black }}
                                >
                                    {caseData.impact.title}
                                </Text>
                            </Group>

                            <Grid gutter="xl">
                                {caseData.impact.metrics.map((metric, index) => (
                                    <Grid.Col
                                        key={index}
                                        span={{ base: 12, md: 4 }}
                                        ta="center"
                                    >
                                        <Text
                                            data-zen-metric="true"
                                            mb="sm"
                                        >
                                            {metric.value}
                                        </Text>
                                        <Text data-zen-subtitle="true">{metric.label}</Text>
                                    </Grid.Col>
                                ))}
                            </Grid>
                        </Paper>
                    </Grid.Col>
                </Grid>
            </Container>

            <Text
                size="sm"
                c="dimmed"
                ta="center"
                mt="xl"
                fs="italic"
            >
                A maior parte do valor veio do diagnóstico e redesenho de processos — não da implementação técnica.
            </Text>
        </Box>
    )
}
