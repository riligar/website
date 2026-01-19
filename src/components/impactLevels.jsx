import { Box, Title, Text, Container, SimpleGrid, Paper, ThemeIcon, Badge, Group, useMantineTheme } from '@mantine/core'
import { IconZoomMoney, IconTrendingDown, IconTrendingUp, IconCrown } from '@tabler/icons-react'

const levels = [
    {
        id: 'eficiencia',
        level: 'Nível 1',
        icon: IconZoomMoney,
        title: 'Eficiência Operacional',
        description: 'Eliminamos tarefas repetitivas e manuais.',
        result: 'Sua equipe ganha horas produtivas de volta.',
    },
    {
        id: 'custos',
        level: 'Nível 2',
        icon: IconTrendingDown,
        title: 'Redução de Custos',
        description: 'Substituímos processos caros por fluxos inteligentes e enxutos.',
        result: 'Margem de lucro maior imediata.',
    },
    {
        id: 'receita',
        level: 'Nível 3',
        icon: IconTrendingUp,
        title: 'Aumento de Receita',
        description: 'Garantimos que nenhum lead seja perdido e que clientes atuais comprem mais.',
        result: 'O sistema se paga e gera lucro.',
    },
    {
        id: 'diferenciacao',
        level: 'Nível 4',
        icon: IconCrown,
        title: 'Diferenciação de Mercado',
        description: 'CriExperiences que seus concorrentes não conseguem copiar.',
        result: 'Você se torna a referência no seu setor.',
    },
]

export default function ImpactLevels() {
    const theme = useMantineTheme()

    return (
        <Box
            component="section"
            aria-label="Níveis de impacto que entregamos"
            py={80}
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
                        bg="white"
                        bd={`1px solid ${theme.colors.gray[2]}`}
                        pos="relative"
                        style={{ overflow: 'hidden' }}
                    >
                        <Text
                            size="xs"
                            fw={700}
                            c="dimmed"
                            tt="uppercase"
                            mb="xs"
                        >
                            {item.level}
                        </Text>

                        <ThemeIcon
                            size={48}
                            radius="md"
                            variant="light"
                            color="gray"
                            mb="md"
                        >
                            <item.icon
                                size={24}
                                stroke={1.5}
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
                            fw={600}
                            c="dark"
                        >
                            → {item.result}
                        </Text>
                    </Paper>
                ))}
            </SimpleGrid>
        </Box>
    )
}
