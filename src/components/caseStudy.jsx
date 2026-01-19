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
                    variant="light"
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
                size={{ base: 28, sm: 32, md: 36 }}
                c="dark"
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
                <Paper
                    p="xl"
                    radius="md"
                    bg="white"
                    bd={`1px solid ${theme.colors.gray[2]}`}
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
                                            color="gray"
                                        >
                                            <step.icon
                                                size={16}
                                                stroke={1.5}
                                            />
                                        </ThemeIcon>
                                        <Text
                                            fw={700}
                                            size="md"
                                            c="dark"
                                        >
                                            {step.title}
                                        </Text>
                                    </Group>
                                    <Text
                                        size="sm"
                                        c="dimmed"
                                        pl={44}
                                        lh={1.6}
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
                                p="xl"
                                radius="md"
                                bg="gray.1"
                                h="100%"
                                bd={`1px solid ${theme.colors.gray[2]}`}
                            >
                                <Group
                                    gap="sm"
                                    mb="xl"
                                >
                                    <ThemeIcon
                                        size={32}
                                        radius="md"
                                        variant="filled"
                                        color="dark"
                                    >
                                        <caseData.impact.icon
                                            size={16}
                                            stroke={1.5}
                                        />
                                    </ThemeIcon>
                                    <Text
                                        fw={800}
                                        size="lg"
                                        c="dark"
                                    >
                                        {caseData.impact.title}
                                    </Text>
                                </Group>

                                {caseData.impact.metrics.map((metric, index) => (
                                    <Box
                                        key={index}
                                        mb={index < caseData.impact.metrics.length - 1 ? 'lg' : 0}
                                    >
                                        <Text
                                            fz={32}
                                            fw={900}
                                            c="dark"
                                            lh={1}
                                        >
                                            {metric.value}
                                        </Text>
                                        <Text
                                            fz="xs"
                                            c="dimmed"
                                            tt="uppercase"
                                            fw={700}
                                            mt={4}
                                        >
                                            {metric.label}
                                        </Text>
                                    </Box>
                                ))}
                            </Paper>
                        </Grid.Col>
                    </Grid>
                </Paper>
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
