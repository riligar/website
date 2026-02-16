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
            'Auth é a maneira mais fácil de adicionar autenticação e gerenciamento de usuários aos seus aplicativos.',
        image: 'https://myauth.click/images/opengraph.webp',
        tags: ['Web', 'autenticação', 'gerenciamento', 'usuários', 'segurança'],
    },
    {
        id: 'https://myblogs.click/',
        title: 'Blogs',
        description: 'Blogs é a maneira mais fácil de criar e gerenciar seus blogs.',
        image: 'https://myblogs.click/images/opengraph.webp',
        tags: ['Web', 'blogs', 'gerenciamento', 'usuários', 'segurança'],
    },
    {
        id: 'https://myflows.click/',
        title: 'Flows',
        description:
            'O Flows é a central de comando da sua operação. Capture sinais dos seus clientes e reaja instantaneamente — sem TI ou infraestruturas complexas.',
        image: 'https://myflows.click/open-graph.webp',
        tags: ['Web', 'fluxos', 'automação', 'workflows', 'produtividade'],
    },
    {
        id: 'https://myfeeds.click/',
        title: 'Feeds',
        description:
            'O Feeds é o primeiro orquestrador de Onipresença Digital. Escreva uma única ideia e deixe nossa engenharia híbrida distribuir sua voz em todos os lugares, enquanto você foca no que realmente importa: seu negócio.',
        image: 'https://myfeeds.click/images/opengraph.webp',
        tags: ['Web', 'feeds', 'orquestrador', 'onipresença', 'digital'],
    },
    {
        id: 'https://s3-explorer.ciromaciel.click/',
        title: 'S3 Explorer',
        description:
            'Explorer para arquivos no S3 com suporte a múltiplos idiomas e vozes naturais. Converta qualquer texto em áudio de alta qualidade instantaneamente.',
        image: 'https://s3-explorer.ciromaciel.click/images/opengraph.jpg',
        tags: ['Web', 'BI', 'S3', 'AWS'],
    },
    {
        id: 'https://web-to-ai.ciromaciel.click/',
        title: 'Web to AI',
        description:
            'A tarefa de extrair e limpar conteúdo de sites para treinar modelos de IA sempre foi um processo manual e demorado, cheio de ruídos como anúncios, menus e scripts. Para resolver essa dor, desenvolvi o Web to AI, uma ferramenta que personifica minha filosofia de desenvolvimento: criar soluções de alta performance, com custo zero e código enxuto.',
        image: 'https://web-to-ai.ciromaciel.click/images/opengraph.jpg',
        tags: ['Web', 'WhatsApp', 'IA', 'LLM', 'API'],
    },
    // {
    //     id: 'https://bookmarks.ciromaciel.click/',
    //     title: 'Bookmarks',
    //     description:
    //         'Transforme sua experiência de navegação com Bookmarks. Organize seus links de maneira inteligente e liberte-se da confusão digital. Experimente agora e descubra como Bookmarks pode simplificar sua vida online!',
    //     image: 'https://bookmarks.ciromaciel.click/pt-BR/opengraph-image-s0b55b?673f97125d969340',
    //     tags: ['Web', 'organização', 'links', 'bookmark'],
    // },
]

function SolutionCard({ solution, reversed }) {
    const theme = useMantineTheme()

    const content = (
        <Stack
            gap="sm"
            style={{ flex: 1 }}
        >
            <Title
                order={3}
                size="h3"
                fw={800}
                c="dark"
            >
                {solution.title}
            </Title>
            <Text
                fz="sm"
                c="dimmed"
                lh={1.6}
            >
                {solution.description}
            </Text>
            <Group
                gap="xs"
                mt="xs"
            >
                {solution.tags.map(tag => (
                    <Badge
                        key={tag}
                        variant="light"
                        color="gray"
                        size="sm"
                    >
                        {tag}
                    </Badge>
                ))}
            </Group>
            <Button
                component="a"
                href={solution.id}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
                mt="md"
                w="fit-content"
                rightSection={
                    <IconExternalLink
                        size={16}
                        stroke={1.5}
                    />
                }
            >
                Conhecer Solução
            </Button>
        </Stack>
    )

    const image = (
        <Box style={{ flex: 1 }}>
            <Image
                src={solution.image}
                alt={solution.title}
                radius="md"
                style={{
                    filter: 'grayscale(0.1)',
                }}
                bd={`1px solid ${theme.colors.gray[2]}`}
                fallbackSrc="https://placehold.co/400x300?text=Solução"
            />
        </Box>
    )

    return (
        <Box
            p={{ base: 'md', md: 'xl' }}
            bg="white"
            radius="md"
            bd={`1px solid ${theme.colors.gray[2]}`}
        >
            <Flex
                direction={{ base: 'column', md: reversed ? 'row-reverse' : 'row' }}
                gap={{ base: 'lg', md: 'xl' }}
                align="center"
            >
                {reversed ? (
                    <>
                        {image}
                        {content}
                    </>
                ) : (
                    <>
                        {content}
                        {image}
                    </>
                )}
            </Flex>
        </Box>
    )
}

function SolutionsHero() {
    const whatsappMessage = encodeURIComponent(
        'Olá! Tenho interesse em conhecer as soluções da RiLiGar. Gostaria de agendar uma conversa de diagnóstico.'
    )
    const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

    return (
        <Box
            component="section"
            aria-label="Soluções Hero"
            mt={80}
            mb={80}
        >
            <Grid
                align="center"
                gutter={60}
            >
                <Grid.Col
                    span={{ base: 12, sm: 6, md: 7 }}
                    order={{ base: 2, sm: 2, md: 1 }}
                >
                    <Title
                        order={1}
                        size={40}
                        lh={1.1}
                        fw={900}
                        c="dark"
                    >
                        Sistemas Que Pagam a Si Mesmos.
                    </Title>
                    <Text
                        size="xl"
                        c="dimmed"
                        mt="xl"
                        lh={1.6}
                    >
                        Não focamos em funcionalidades isoladas. Construímos ativos operacionais que atacam gargalos
                        específicos, aumentam seu ROI e preparam seu negócio para a escala sem caos.
                    </Text>

                    <List
                        mt={40}
                        spacing="sm"
                        size="md"
                        icon={
                            <ThemeIcon
                                size={28}
                                radius="xl"
                                variant="light"
                                color="gray"
                            >
                                <IconCheck
                                    size={16}
                                    stroke={1.5}
                                />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <Text
                                fw={700}
                                component="span"
                                c="dark"
                            >
                                Diagnóstico Antes de Tudo
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                            >
                                Identificamos onde está o problema antes de propor qualquer solução
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text
                                fw={700}
                                component="span"
                                c="dark"
                            >
                                Resultados Mensuráveis
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                            >
                                Não vendemos tecnologia — vendemos ROI comprovado e impacto real
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text
                                fw={700}
                                component="span"
                                c="dark"
                            >
                                Soluções Sob Medida
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                            >
                                Cada negócio é único — e a solução também precisa ser
                            </Text>
                        </List.Item>
                    </List>

                    <Flex
                        direction={{ base: 'column', sm: 'row' }}
                        mt={50}
                        gap="md"
                    >
                        <Button
                            onClick={() => {
                                // Se já está na home, faz scroll direto
                                if (window.location.pathname === '/') {
                                    const element = document.getElementById('contato')
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                    }
                                } else {
                                    // Navega para home com hash
                                    window.location.href = '/#contato'
                                }
                            }}
                            size="lg"
                            leftSection={
                                <IconRocket
                                    size={20}
                                    stroke={1.5}
                                />
                            }
                            w={{ base: '100%', sm: 'auto' }}
                        >
                            Quero um Diagnóstico
                        </Button>
                        {/* <Button
                            component="a"
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="lg"
                            variant="outline"
                            leftSection={
                                <IconMessageCircle
                                    size={20}
                                    stroke={1.5}
                                />
                            }
                            w={{ base: '100%', sm: 'auto' }}
                        >
                            Falar no WhatsApp
                        </Button> */}
                    </Flex>
                </Grid.Col>

                <Grid.Col
                    span={{ base: 12, sm: 6, md: 5 }}
                    order={{ base: 1, sm: 1, md: 2 }}
                >
                    <Box
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <Image
                            src="/images/solutions-hero.webp"
                            alt="Soluções RiLiGar"
                            radius="lg"
                            w="100%"
                            h="100%"
                            fit="cover"
                            fallbackSrc="https://placehold.co/500x400?text=Soluções"
                        />
                    </Box>
                </Grid.Col>
            </Grid>
        </Box>
    )
}

export default function Solutions() {
    return (
        <Box
            bg="white"
            py={80}
            id="solucoes-page"
        >
            <Container size="xl">
                {/* Hero Section - Similar ao da Home */}
                <SolutionsHero />

                {/* Solutions Cards - Layout Original */}
                <Box
                    component="section"
                    id="solucoes"
                    aria-label="Nossas Soluções"
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
                            Nossas Soluções
                        </Badge>
                    </Group>

                    <Title
                        order={2}
                        ta="center"
                        mb="md"
                        size={{ base: 28, sm: 32, md: 36 }}
                        c="dark"
                    >
                        Transformação Real Para Seu Negócio
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
                        Não aplicamos fórmulas prontas. Primeiro diagnosticamos, depois criamos soluções que geram
                        impacto mensurável — não apenas economia de tempo, mas aumento de receita e vantagens
                        competitivas.
                    </Text>

                    <Stack
                        gap="xl"
                        maw={1000}
                        mx="auto"
                    >
                        {solutions.map((solution, index) => (
                            <SolutionCard
                                key={solution.id}
                                solution={solution}
                                reversed={index % 2 === 1}
                            />
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    )
}
