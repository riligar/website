import {
    Badge,
    Group,
    Title,
    Text,
    Box,
    Image,
    Stack,
    Flex,
    Grid,
    List,
    ThemeIcon,
    Button,
    useMantineTheme,
    Container,
} from '@mantine/core'
import { IconCheck, IconRocket, IconMessageCircle, IconExternalLink } from '@tabler/icons-react'

const solutions = [
    {
        id: 'https://myauth.click/',
        title: 'Auth',
        description:
            'A maneira mais simples de adicionar autenticação robusta e gerenciamento de usuários aos seus aplicativos.',
        tags: ['Web', 'Autenticação', 'Segurança'],
        span: 7,
    },
    {
        id: 'https://mypages.click/',
        title: 'Pages',
        description: 'Coloque sua oferta no ar instantaneamente com performance extrema e design premium.',
        tags: ['Web', 'Landing Pages', 'Conversão'],
        span: 5,
    },
    {
        id: 'https://myblogs.click/',
        title: 'Blogs',
        description: 'Gestão de conteúdo simplificada para escalar a atração orgânica do seu negócio.',
        tags: ['CMS', 'Conteúdo', 'SEO'],
        span: 5,
    },
    {
        id: 'https://myflows.click/',
        title: 'Flows',
        description:
            'O hub central da sua operação. Capture sinais e automatize reações instantâneas, sem precisar de infraestrutura complexa.',
        tags: ['Automação', 'Workflows', 'Produtividade'],
        span: 7,
    },
    {
        id: 'https://myfeeds.click/',
        title: 'Feeds',
        description:
            'Nosso orquestrador de onipresença. Escreva uma vez, distribua em todos os canais e domine o seu espaço de atenção enquanto ganha tempo.',
        tags: ['Distribuição', 'Marketing', 'Omnichannel'],
        span: 12,
    },
]

function SolutionsHero() {
    return (
        <Box
            component="section"
            aria-label="Soluções Hero"
            mt={{ base: 40, md: 120 }}
            mb={{ base: 40, md: 120 }}
            style={{ textAlign: 'center' }}
        >
            <Grid
                align="center"
                gutter="xl"
            >
                <Grid.Col
                    span={12}
                    order={1}
                >
                    <Text
                        data-zen-subtitle="true"
                        mb="xl"
                    >
                        Nossos Produtos
                    </Text>
                    <Title
                        order={1}
                        component="h1"
                        style={{
                            fontSize: 'clamp(40px, 6vw, 72px)',
                            lineHeight: 1,
                            textWrap: 'balance',
                            letterSpacing: '-0.04em',
                        }}
                        mx="auto"
                        maw={900}
                    >
                        Sistemas Que Pagam a Si Mesmos.
                    </Title>
                    <Text
                        size="xl"
                        c="gray.6"
                        mt="xl"
                        mx="auto"
                        maw={700}
                        style={{ fontWeight: 500, lineHeight: 1.6 }}
                    >
                        Não focamos em funcionalidades isoladas. Construímos ativos operacionais que atacam gargalos
                        específicos, aumentam seu ROI e preparam seu negócio para a escala sem caos.
                    </Text>

                    <Group
                        mt={60}
                        gap="lg"
                        justify="center"
                    >
                        <Button
                            onClick={() => {
                                if (window.location.pathname === '/') {
                                    const element = document.getElementById('contato')
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                    }
                                } else {
                                    window.location.href = '/#contato'
                                }
                            }}
                            size="xl"
                            color="dark"
                            radius="sm"
                            leftSection={
                                <IconRocket
                                    size={20}
                                    stroke={2}
                                />
                            }
                        >
                            Quero um Diagnóstico
                        </Button>
                    </Group>
                </Grid.Col>
            </Grid>
        </Box>
    )
}

export default function Solutions() {
    const theme = useMantineTheme()

    return (
        <Box
            bg="white"
            id="solucoes-page"
        >
            <Container size="xl">
                {/* Hero Section */}
                <SolutionsHero />
            </Container>

            <Box
                component="section"
                id="solucoes"
                aria-label="Nossas Soluções"
                py={120}
                style={{
                    borderTop: `1px solid ${theme.colors.gray[2]}`,
                    // borderBottom: `1px solid ${theme.colors.gray[2]}`,
                }}
                bg="gray.0"
            >
                <Container size="lg">
                    <Group
                        justify="center"
                        mb="md"
                    >
                        <Badge
                            variant="dot"
                            color="dark"
                            size="lg"
                        >
                            Ecossistema
                        </Badge>
                    </Group>

                    <Title
                        order={2}
                        ta="center"
                        mb="md"
                        style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.04em' }}
                    >
                        Transformação Real Para Seu Negócio
                    </Title>

                    <Text
                        c="dimmed"
                        ta="center"
                        mb={80}
                        maw={800}
                        mx="auto"
                        fz="lg"
                        lh={1.6}
                    >
                        Não aplicamos fórmulas prontas. Primeiro diagnosticamos, depois criamos soluções que geram
                        impacto mensurável — não apenas economia de tempo, mas aumento de receita e vantagens
                        competitivas.
                    </Text>

                    <Grid gutter="xl">
                        {solutions.map(item => (
                            <Grid.Col
                                key={item.id}
                                span={{ base: 12, md: item.span }}
                            >
                                <Box
                                    p="xl"
                                    bg="white"
                                    bd={`1px solid ${theme.colors.gray[2]}`}
                                    style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <Title
                                        order={3}
                                        size="h2"
                                        fw={800}
                                        mb="md"
                                        style={{ letterSpacing: '-0.02em', color: theme.black }}
                                    >
                                        {item.title}
                                    </Title>

                                    <Text
                                        size="md"
                                        c="dimmed"
                                        lh={1.6}
                                        mb="xl"
                                        style={{ flexGrow: 1 }}
                                    >
                                        {item.description}
                                    </Text>

                                    <Box mb="xl">
                                        <Group gap="xs">
                                            {item.tags.map(tag => (
                                                <Badge
                                                    key={tag}
                                                    variant="light"
                                                    color="gray"
                                                    size="sm"
                                                    radius="sm"
                                                >
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </Group>
                                    </Box>

                                    <Button
                                        component="a"
                                        href={item.id}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="default"
                                        size="md"
                                        radius="sm"
                                        w="fit-content"
                                        rightSection={
                                            <IconExternalLink
                                                size={16}
                                                stroke={1.5}
                                            />
                                        }
                                        style={{
                                            borderTop: `1px solid ${theme.colors.gray[2]}`,
                                            width: '100%',
                                            justifyContent: 'space-between',
                                            border: 'none',
                                            borderTop: `1px solid ${theme.colors.gray[2]}`,
                                            paddingTop: '16px',
                                            marginTop: 'auto',
                                        }}
                                    >
                                        Conhecer a Ferramenta
                                    </Button>
                                </Box>
                            </Grid.Col>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </Box>
    )
}
