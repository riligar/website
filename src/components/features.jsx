import { Badge, Group, Title, Text, SimpleGrid, Box, ThemeIcon, Grid, Paper, useMantineTheme } from '@mantine/core'
import { IconCloudComputing, IconChartBar, IconBrain, IconRobot, IconSparkles, IconShield } from '@tabler/icons-react'

const mockdata = [
    {
        id: 'leads-perdidos',
        title: 'Leads Vazando Pelo Funil?',
        description:
            'Leads de alto valor ignorados ou com follow-up tardio são faturamento jogado fora. Criamos sistemas que garantem atenção imediata onde importa, enquanto a IA cuida do resto.',
        icon: IconRobot,
        highlight: true,
        span: 7,
    },
    {
        id: 'pipeline-cego',
        title: 'Pipeline de Vendas Sem Previsibilidade?',
        description:
            'Decidir no "feel" custa caro. Estabelecemos visibilidade total com dashboards de verdade, expondo exatamente onde o dinheiro está travado no seu fluxo.',
        icon: IconChartBar,
        span: 5,
    },
    {
        id: 'produto-nao-escala',
        title: 'Operação Travando o Crescimento?',
        description:
            'Sistemas legados e processos manuais são o teto do seu lucro. Desenhamos infraestruturas que escalam conforme você cresce, sem surpresas de custo.',
        icon: IconCloudComputing,
        span: 5,
    },
    {
        id: 'dados-manual',
        title: 'Dreno de Tempo em Trabalho Manual?',
        description:
            'Sua equipe deveria estar fechando negócios, não preenchendo planilhas. Automatizamos a extração e processamento de dados para liberar inteligência.',
        icon: IconSparkles,
        span: 7,
    },
    {
        id: 'software-generico',
        title: 'Refém de Softwares Genéricos?',
        description:
            'Tentar encaixar seu negócio único em uma ferramenta de prateleira é receita para o caos. Criamos soluções sob medida para o seu workflow específico.',
        icon: IconBrain,
        span: 6,
    },
    {
        id: 'incerteza-tecnologia',
        title: 'Paralisia por Excesso de Opções?',
        description:
            'A tecnologia certa é aquela que resolve o problema agora. Diagnosticamos sua empresa e entregamos um roadmap pragmático focado em ROI.',
        icon: IconShield,
        span: 6,
    },
]

export default function Features() {
    const theme = useMantineTheme()

    const featuresList = mockdata.map(feature => (
        <Grid.Col
            key={feature.id}
            span={{ base: 12, md: feature.span }}
        >
            <Paper
                p="xl"
                radius="sm"
                bg="gray.0"
                bd={`1px solid ${theme.colors.gray[2]}`}
                style={{ height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}
            >
                {feature.highlight && (
                    <Badge
                        variant="filled"
                        color="dark"
                        size="sm"
                        mb="xl"
                        style={{ alignSelf: 'flex-start' }}
                    >
                        Ponto Crítico
                    </Badge>
                )}
                <ThemeIcon
                    size={50}
                    radius="sm"
                    variant="light"
                    color="gray"
                    mb="xl"
                >
                    <feature.icon
                        size={30}
                        stroke={1.5}
                    />
                </ThemeIcon>
                <Text
                    fz="xl"
                    fw={800}
                    mb="md"
                    style={{ letterSpacing: '-0.02em', color: theme.black }}
                >
                    {feature.title}
                </Text>
                <Text
                    fz="md"
                    c="dimmed"
                    lh={1.6}
                    style={{ flexGrow: 1 }}
                >
                    {feature.description}
                </Text>
            </Paper>
        </Grid.Col>
    ))

    return (
        <Box
            component="section"
            aria-label="Solutions portfolio"
            py={80}
        >
            <Group justify="center">
                <Badge
                    variant="dot"
                    color="gray"
                    size="lg"
                >
                    Problemas Que Resolvemos
                </Badge>
            </Group>

            <Title
                order={2}
                ta="center"
                mt="md"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.04em' }}
            >
                Estes Sintomas Parecem Familiares?
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mt="md"
                maw={800}
                mx="auto"
            >
                A maioria dos negócios está operando abaixo do potencial não por falta de esforço, mas por processos
                inflados. Nosso papel é diagnosticar, simplificar e lucrar.
            </Text>

            <Grid
                gutter="xl"
                mt={60}
            >
                {featuresList}
            </Grid>
        </Box>
    )
}
