import { Box, Title, Text, Container, SimpleGrid, Paper, ThemeIcon, rem, Badge, Group } from '@mantine/core'
import { IconZoomMoney, IconTrendingDown, IconTrendingUp, IconCrown } from '@tabler/icons-react'

const levels = [
    {
        id: 'eficiencia',
        level: 'Nível 1',
        icon: IconZoomMoney,
        title: 'Eficiência Operacional',
        description: 'Eliminamos tarefas repetitivas e manuais.',
        result: 'Sua equipe ganha horas produtivas de volta.',
        color: 'blue',
    },
    {
        id: 'custos',
        level: 'Nível 2',
        icon: IconTrendingDown,
        title: 'Redução de Custos',
        description: 'Substituímos processos caros por fluxos inteligentes e enxutos.',
        result: 'Margem de lucro maior imediata.',
        color: 'teal',
    },
    {
        id: 'receita',
        level: 'Nível 3',
        icon: IconTrendingUp,
        title: 'Aumento de Receita',
        description: 'Garantimos que nenhum lead seja perdido e que clientes atuais comprem mais.',
        result: 'O sistema se paga e gera lucro.',
        color: 'green',
    },
    {
        id: 'diferenciacao',
        level: 'Nível 4',
        icon: IconCrown,
        title: 'Diferenciação de Mercado',
        description: 'Criamos experiências que seus concorrentes não conseguem copiar.',
        result: 'Você se torna a referência no seu setor.',
        color: 'violet',
    },
]

export default function ImpactLevels() {
    return (
        <Box
            component="section"
            aria-label="Níveis de impacto que entregamos"
            py={80}
        >
            <Container size="xl">
                <Group
                    justify="center"
                    mb="md"
                >
                    <Badge
                        variant="filled"
                        size="lg"
                    >
                        Do Operacional ao Estratégico
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                    size={{ base: 28, sm: 32, md: 36 }}
                >
                    Onde Atuamos na Sua Empresa
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    O valor não está na ferramenta, está no impacto. Trabalhamos em 4 níveis progressivos — cada um mais
                    valioso que o anterior.
                </Text>

                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 4 }}
                    spacing="lg"
                >
                    {levels.map((item, index) => (
                        <Paper
                            key={item.id}
                            p="xl"
                            radius="md"
                            style={{
                                border: '1px solid #e9ecef',
                                position: 'relative',
                                overflow: 'hidden',
                            }}
                        >
                            <Text
                                size="xs"
                                fw={700}
                                c={item.color}
                                tt="uppercase"
                                mb="xs"
                            >
                                {item.level}
                            </Text>

                            <ThemeIcon
                                size={48}
                                radius="md"
                                variant="light"
                                color={item.color}
                                mb="md"
                            >
                                <item.icon
                                    style={{ width: rem(24), height: rem(24) }}
                                    stroke={2}
                                />
                            </ThemeIcon>

                            <Text
                                size="lg"
                                fw={600}
                                mb="xs"
                            >
                                {item.title}
                            </Text>

                            <Text
                                size="sm"
                                c="dimmed"
                                mb="md"
                            >
                                {item.description}
                            </Text>

                            <Text
                                size="sm"
                                fw={500}
                                c={item.color}
                            >
                                → {item.result}
                            </Text>

                            {index < levels.length - 1 && (
                                <Box
                                    style={{
                                        position: 'absolute',
                                        right: -12,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        display: 'none',
                                    }}
                                    visibleFrom="lg"
                                >
                                    <Text
                                        size="24px"
                                        c="dimmed"
                                    >
                                        →
                                    </Text>
                                </Box>
                            )}
                        </Paper>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
