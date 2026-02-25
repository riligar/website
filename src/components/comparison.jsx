import { Box, Title, Text, Container, Grid, Paper, Badge, Group, ThemeIcon, useMantineTheme } from '@mantine/core'
import { IconChartLine, IconSearch, IconUsers, IconRocket, IconX } from '@tabler/icons-react'

const comparisons = [
    {
        id: 'model',
        them: 'Lucro baseado em vender horas e aumentar o escopo.',
        us: 'Foco obsessivo no seu ROI e impacto financeiro direto.',
        icon: IconChartLine,
        span: 7,
    },
    {
        id: 'approach',
        them: 'Execução cega do que foi pedido ("Tiradores de pedido").',
        us: 'Mapeamento profundo e arquitetura anti-caos.',
        icon: IconSearch,
        span: 5,
    },
    {
        id: 'relationship',
        them: 'Relação burocrática e distante de fornecedor/cliente.',
        us: 'Célula de tecnologia dedicada com atuação nível sócio.',
        icon: IconUsers,
        span: 5,
    },
    {
        id: 'transparency',
        them: 'Projetos infinitos e custos ocultos no meio do caminho.',
        us: 'Valor liberado em 21 dias com transparência radical.',
        icon: IconRocket,
        span: 7,
    },
]

export default function Comparison() {
    const theme = useMantineTheme()

    return (
        <Box
            component="section"
            aria-label="Comparação com outras agências"
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
                        RiLiGar vs. Agências de Software
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                    style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.04em' }}
                >
                    Por Que Somos o Oposto do Tradicional?
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={80}
                    maw={700}
                    mx="auto"
                    size="lg"
                >
                    Não faturamos horas. Resolvemos gargalos. Enquanto agências tradicionais lucram com a complexidade e
                    o atraso, a RiLiGar lucra com a sua eficiência.
                </Text>

                <Grid gutter="xl">
                    {comparisons.map(item => (
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
                                <Box
                                    mb="xl"
                                    style={{ flexGrow: 1 }}
                                >
                                    <Group
                                        gap="xs"
                                        mb="xs"
                                    >
                                        <ThemeIcon
                                            size={24}
                                            radius="xl"
                                            variant="transparent"
                                            color="gray.5"
                                        >
                                            <IconX
                                                size={16}
                                                stroke={2}
                                            />
                                        </ThemeIcon>
                                        <Text
                                            size="xs"
                                            fw={700}
                                            c="gray.5"
                                            tt="uppercase"
                                            style={{ letterSpacing: '1px' }}
                                        >
                                            Agências Típicas
                                        </Text>
                                    </Group>
                                    <Text
                                        size="lg"
                                        c="gray.5"
                                        style={{ textDecoration: 'line-through' }}
                                    >
                                        {item.them}
                                    </Text>
                                </Box>

                                <Box style={{ borderTop: `1px solid ${theme.colors.gray[2]}`, paddingTop: '24px' }}>
                                    <Group
                                        gap="sm"
                                        mb="md"
                                    >
                                        <ThemeIcon
                                            size={48}
                                            radius="sm"
                                            variant="light"
                                            color="gray"
                                        >
                                            <item.icon
                                                size={24}
                                                stroke={1.5}
                                            />
                                        </ThemeIcon>
                                        <Text data-zen-subtitle="true">O Padrão RiLiGar</Text>
                                    </Group>
                                    <Text
                                        size="h3"
                                        fw={800}
                                        style={{ letterSpacing: '-0.02em', color: theme.black }}
                                        lh={1.3}
                                    >
                                        {item.us}
                                    </Text>
                                </Box>
                            </Paper>
                        </Grid.Col>
                    ))}
                </Grid>

                <Text
                    size="sm"
                    c="dimmed"
                    ta="center"
                    mt={60}
                    maw={800}
                    mx="auto"
                    lh={1.6}
                    fs="italic"
                >
                    Focamos no que importa: resolver seus problemas eficientemente com soluções que funcionam. Sem
                    burocracia, sem equipes inchadas, sem maximizar horas faturáveis — apenas trabalho honesto e
                    especializado.
                </Text>
            </Container>
        </Box>
    )
}
