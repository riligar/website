import { Box, Title, Text, Container, SimpleGrid, Paper, ThemeIcon, Badge, Group, useMantineTheme } from '@mantine/core'
import { IconZoomMoney, IconTrendingDown, IconTrendingUp, IconCrown } from '@tabler/icons-react'

const levels = [
    {
        id: 'eficiencia',
        level: 'Nível 1',
        icon: IconZoomMoney,
        title: 'Eficiência Radical',
        description: 'Eliminamos o desperdício manual que drena a energia e o tempo da sua equipe.',
        result: 'Horas de alto valor recuperadas imediatamente.',
    },
    {
        id: 'custos',
        level: 'Nível 2',
        icon: IconTrendingDown,
        title: 'Corte de Custos Inteligente',
        description: 'Substituímos infraestrutura cara e lenta por fluxos enxutos e automatizados.',
        result: 'Margem de lucro protegida e ampliada.',
    },
    {
        id: 'receita',
        level: 'Nível 3',
        icon: IconTrendingUp,
        title: 'Aceleração de Receita',
        description: 'Tapamos os buracos do seu funil de vendas para garantir que nenhum lead seja ignorado.',
        result: 'ROI imediato que se paga em semanas.',
    },
    {
        id: 'diferenciacao',
        level: 'Nível 4',
        icon: IconCrown,
        title: 'Domínio de Mercado',
        description: 'Criamos sistemas operacionais que seus concorrentes simplesmente não conseguem copiar.',
        result: 'Você se torna o novo benchmark do seu setor.',
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
                O Sistema de Evolução RiLiGar
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mb={60}
                maw={700}
                mx="auto"
            >
                O valor não está na tecnologia, está no impacto sistemático. Trabalhamos em 4 níveis progressivos — cada
                estágio construindo a base para o próximo salto de crescimento.
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
