import {
    Box,
    Title,
    Text,
    Container,
    Card,
    SimpleGrid,
    ThemeIcon,
    Avatar,
    Group,
    Badge,
    useMantineTheme,
} from '@mantine/core'
import { IconTarget, IconChartBar, IconUsers, IconMessageCircle } from '@tabler/icons-react'

const values = [
    {
        id: 'diagnostico',
        icon: IconTarget,
        title: 'Diagnóstico Primeiro',
        description: 'Sem achismos. Identificamos a raiz do problema antes de gastar um centavo.',
    },
    {
        id: 'resultados',
        icon: IconChartBar,
        title: 'Resultados Mensuráveis',
        description: 'Se não podemos medir, não fazemos. Cada projeto tem KPIs claros desde o dia 1.',
    },
    {
        id: 'parceria',
        icon: IconUsers,
        title: 'Parceria de Verdade',
        description: 'Não somos fornecedores que somem. Crescemos junto com você.',
    },
    {
        id: 'transparencia',
        icon: IconMessageCircle,
        title: 'Transparência Total',
        description: 'Você sempre saberá o que está acontecendo — mesmo quando as notícias não são ideais.',
    },
]

export default function AboutSection() {
    const theme = useMantineTheme()

    return (
        <Box
            component="section"
            id="quem-somos"
            py="xl"
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
                    Quem Somos
                </Badge>
            </Group>

            <Title
                order={2}
                ta="center"
                mb="md"
                size={{ base: 28, sm: 32, md: 36 }}
                c="dark"
            >
                Seu Negócio Merece Crescer — E Sabemos Como
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mb={50}
                maw={700}
                mx="auto"
            >
                Ajudamos empresas a identificar o que realmente está travando seu crescimento — e implementamos soluções
                que geram resultados mensuráveis em semanas, não anos.
            </Text>

            {/* Founder Card */}
            <Card
                radius="md"
                padding="xl"
                mb={50}
                maw={600}
                mx="auto"
                withBorder
                bg="white"
                bd={`1px solid ${theme.colors.gray[2]}`}
            >
                <Group
                    align="flex-start"
                    wrap="nowrap"
                    gap="xl"
                >
                    <Avatar
                        size={80}
                        radius="md"
                        color="gray"
                        src="https://avatars.githubusercontent.com/u/349602?v=4"
                    >
                        CM
                    </Avatar>

                    <Box>
                        <Group
                            mb="xs"
                            gap="xs"
                            wrap="wrap"
                        >
                            <Text
                                size="lg"
                                fw={700}
                            >
                                Ciro Cesar Maciel
                            </Text>
                            <Badge
                                variant="light"
                                color="gray"
                                size="sm"
                            >
                                Fundador
                            </Badge>
                        </Group>

                        <Text
                            size="sm"
                            c="dimmed"
                            mb="md"
                        >
                            Já ajudei dezenas de empresas a reduzir custos operacionais, automatizar processos e
                            desbloquear novos canais de receita. Minha missão é garantir que tecnologia trabalhe para o
                            seu negócio, não contra ele.
                        </Text>

                        <Group gap="xs">
                            <Badge
                                size="sm"
                                variant="outline"
                                color="gray"
                            >
                                15+ Projetos Entregues
                            </Badge>
                            <Badge
                                size="sm"
                                variant="outline"
                                color="gray"
                            >
                                20+ Anos de Experiência
                            </Badge>
                            <Badge
                                size="sm"
                                variant="outline"
                                color="gray"
                            >
                                100% Foco em Resultados
                            </Badge>
                        </Group>
                    </Box>
                </Group>
            </Card>

            {/* Values Grid */}
            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 4 }}
                spacing="lg"
            >
                {values.map(value => (
                    <Card
                        key={value.id}
                        shadow="sm"
                        padding="lg"
                        radius="md"
                        withBorder
                        bg="white"
                        bd={`1px solid ${theme.colors.gray[2]}`}
                    >
                        <ThemeIcon
                            size={40}
                            radius="md"
                            variant="light"
                            color="gray"
                            mb="md"
                        >
                            <value.icon
                                size={24}
                                stroke={1.5}
                            />
                        </ThemeIcon>

                        <Title
                            order={3}
                            size="md"
                            fw={700}
                            mb="sm"
                            c="dark"
                        >
                            {value.title}
                        </Title>

                        <Text
                            size="sm"
                            c="dimmed"
                        >
                            {value.description}
                        </Text>
                    </Card>
                ))}
            </SimpleGrid>
        </Box>
    )
}
