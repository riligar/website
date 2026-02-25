import { Box, Title, Text, Container, Grid, Paper, ThemeIcon, Badge, Group, useMantineTheme } from '@mantine/core'
import { IconZoomMoney, IconTrendingDown, IconTrendingUp, IconCrown } from '@tabler/icons-react'

const levels = [
    {
        id: 'eficiencia',
        level: 'Nível 1',
        icon: IconZoomMoney,
        title: 'Eficiência Radical',
        description: 'Eliminamos o desperdício manual que drena a energia e o tempo da sua equipe.',
        result: 'Horas de alto valor recuperadas imediatamente.',
        span: 7,
    },
    {
        id: 'custos',
        level: 'Nível 2',
        icon: IconTrendingDown,
        title: 'Corte de Custos Inteligente',
        description: 'Substituímos infraestrutura cara e lenta por fluxos enxutos e automatizados.',
        result: 'Margem de lucro protegida e ampliada.',
        span: 5,
    },
    {
        id: 'receita',
        level: 'Nível 3',
        icon: IconTrendingUp,
        title: 'Aceleração de Receita',
        description: 'Tapamos os buracos do seu funil de vendas para garantir que nenhum lead seja ignorado.',
        result: 'ROI imediato que se paga em semanas.',
        span: 5,
    },
    {
        id: 'diferenciacao',
        level: 'Nível 4',
        icon: IconCrown,
        title: 'Domínio de Mercado',
        description: 'Criamos sistemas operacionais que seus concorrentes simplesmente não conseguem copiar.',
        result: 'Você se torna o novo benchmark do seu setor.',
        span: 7,
    },
]

export default function ImpactLevels() {
    const theme = useMantineTheme()

    return (
        <Box
            component="section"
            aria-label="Níveis de impacto que entregamos"
            py={120}
            bg="white"
            style={{
                borderTop: `1px solid ${theme.colors.gray[2]}`,
                borderBottom: `1px solid ${theme.colors.gray[2]}`,
            }}
        >
            <Container size="lg">
                <Group
                    justify="center"
                    mb="md"
                >
                    <Badge
                        variant="dot"
                        color="gray"
                        size="lg"
                    >
                        Do Operacional ao Estratégico
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                    style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.04em' }}
                >
                    O Sistema de Evolução RiLiGar
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={80}
                    maw={700}
                    mx="auto"
                    size="lg"
                >
                    O valor não está na tecnologia, está no impacto sistemático. Trabalhamos em 4 níveis progressivos —
                    cada estágio construindo a base para o próximo salto de crescimento.
                </Text>

                <Grid gutter="xl">
                    {levels.map(item => (
                        <Grid.Col
                            key={item.id}
                            span={{ base: 12, md: item.span }}
                        >
                            <Paper
                                p="xl"
                                radius="sm"
                                bg="gray.0"
                                bd={`1px solid ${theme.colors.gray[2]}`}
                                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <Text
                                    data-zen-subtitle="true"
                                    mb="lg"
                                >
                                    {item.level}
                                </Text>

                                <ThemeIcon
                                    size={48}
                                    radius="sm"
                                    variant="light"
                                    color="gray"
                                    mb="xl"
                                >
                                    <item.icon
                                        size={24}
                                        stroke={1.5}
                                    />
                                </ThemeIcon>

                                <Title
                                    order={3}
                                    size="h3"
                                    fw={800}
                                    mb="md"
                                    style={{ letterSpacing: '-0.02em', color: theme.black }}
                                >
                                    {item.title}
                                </Title>

                                <Text
                                    size="md"
                                    c="dimmed"
                                    mb="xl"
                                    style={{ flexGrow: 1 }}
                                    lh={1.6}
                                >
                                    {item.description}
                                </Text>

                                <Text
                                    size="md"
                                    fw={700}
                                    c="dark"
                                    style={{ borderTop: `1px solid ${theme.colors.gray[2]}`, paddingTop: '16px' }}
                                >
                                    → {item.result}
                                </Text>
                            </Paper>
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}
