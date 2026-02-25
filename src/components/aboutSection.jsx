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
import {
    IconTarget,
    IconChartBar,
    IconUsers,
    IconMessageCircle,
    IconSearch,
    IconChartLine,
    IconShield,
} from '@tabler/icons-react'

const values = [
    {
        id: 'diagnostico',
        icon: IconSearch,
        title: 'Diagnóstico Sem Filtro',
        description:
            'Não dizemos o que você quer ouvir. Dizemos o que seu sistema precisa para parar de perder dinheiro.',
    },
    {
        id: 'resultados',
        icon: IconChartLine,
        title: 'Lucro Como Métrica Única',
        description: 'Funcionalidades são vaidade. Sucesso para nós é impacto no seu ROI e margem líquida.',
    },
    {
        id: 'parceria',
        icon: IconUsers,
        title: 'Alinhamento Nível Sócio',
        description: 'Não somos fornecedores distantes. Operamos como sua própria célula de tecnologia estratégica.',
    },
    {
        id: 'transparencia',
        icon: IconShield,
        title: 'Integridade Radical',
        description:
            'Processos abertos, faturamento sem surpresas e honestidade total sobre o que funciona e o que não.',
    },
]

export default function AboutSection() {
    const theme = useMantineTheme()

    return (
        <Box
            id="sobre"
            component="section"
            aria-label="About RiLiGar"
            py={120}
            bg="white"
            style={{
                borderTop: `1px solid ${theme.colors.gray[2]}`,
                borderBottom: `1px solid ${theme.colors.gray[2]}`,
            }}
        >
            <Container size="xl">
                <Group
                    justify="center"
                    mb="md"
                >
                    <Badge
                        variant="dot"
                        color="gray"
                        size="lg"
                    >
                        Nossa Filosofia
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="lg"
                    style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.04em' }}
                >
                    Diagnóstico Primeiro, Código Depois
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={800}
                    mx="auto"
                    fz="lg"
                    lh={1.6}
                >
                    A RiLiGar nasceu para estancar o desperdício tecnológico. Acreditamos que a maioria dos problemas
                    que empresas tentam resolver com "mais software" são, na verdade, problemas de processo mal
                    resolvidos. Nossa missão é trazer clareza operacional e lucro através de sistemas pragmáticos.
                </Text>

                {/* Founder Card */}
                <Card
                    radius="sm"
                    padding="xl"
                    mb={50}
                    maw={600}
                    mx="auto"
                    style={{ backgroundColor: 'transparent' }}
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
                                    variant="dot"
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
                                desbloquear novos canais de receita. Minha missão é garantir que tecnologia trabalhe
                                para o seu negócio, não contra ele.
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
                            padding="xl"
                            radius="sm"
                            style={{ backgroundColor: 'transparent' }}
                        >
                            <ThemeIcon
                                size={40}
                                radius="sm"
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
                                size="h4"
                                fw={800}
                                mb="sm"
                                style={{ letterSpacing: '-0.02em' }}
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
            </Container>
        </Box>
    )
}
