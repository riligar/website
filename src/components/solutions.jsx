import { Badge, Group, Title, Text, Box, Image, Stack, Flex, Grid, List, ThemeIcon, Button, rem } from '@mantine/core'
import { IconCheck, IconRocket, IconMessageCircle, IconExternalLink } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'

const solutions = [
    {
        id: 'https://myauth.click/',
        title: 'Auth',
        description:
            'Auth é a maneira mais fácil de adicionar autenticação e gerenciamento de usuários aos seus aplicativos.',
        image: 'https://myauth.click/images/open-graph.jpg',
        tags: ['Web', 'autenticação', 'gerenciamento', 'usuários', 'segurança'],
    },
    {
        id: 'https://text-to-speech.ciromaciel.click/',
        title: 'Text to Speech',
        description:
            'Aplicação de texto para fala com suporte a múltiplos idiomas e vozes naturais. Converta qualquer texto em áudio de alta qualidade instantaneamente.',
        image: 'https://text-to-speech.ciromaciel.click/images/opengraph.jpg',
        tags: ['Web', 'IA', 'Áudio', 'LLM', 'API', 'vozes'],
    },
    {
        id: 'https://passwords.ciromaciel.click/',
        title: 'Password Manager',
        description:
            'Gerenciador de senhas com criptografia avançada e sincronização em tempo real. Proteja suas credenciais com segurança e facilidade.',
        image: 'https://passwords.ciromaciel.click/images/opengraph.jpg',
        tags: ['Web', 'criptografia', 'sincronização', 'senhas', 'segurança'],
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
    {
        id: 'https://bookmarks.ciromaciel.click/',
        title: 'Bookmarks',
        description:
            'Transforme sua experiência de navegação com Bookmarks. Organize seus links de maneira inteligente e liberte-se da confusão digital. Experimente agora e descubra como Bookmarks pode simplificar sua vida online!',
        image: 'https://bookmarks.ciromaciel.click/pt-BR/opengraph-image-s0b55b?673f97125d969340',
        tags: ['Web', 'organização', 'links', 'bookmark'],
    },
    {
        id: 'https://myblogs.click/',
        title: 'Blogs',
        description:
            'Blogs é uma ferramenta versátil e indispensável que ajuda a organizar e gerenciar informações de maneira eficiente, facilitando a comunicação, o planejamento e a sua expressão criativa em diversas áreas da vida pessoal e profissional.',
        image: 'image/blogs-opengraph.jpg',
        tags: ['Web', 'organização', 'links', 'blog'],
    },
]

function SolutionCard({ solution, reversed }) {
    const content = (
        <Stack
            gap="sm"
            style={{ flex: 1 }}
        >
            <Text
                fz="xl"
                fw={700}
            >
                {solution.title}
            </Text>
            <Text
                fz="sm"
                c="dimmed"
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
                        color="blue"
                        size="sm"
                        radius="sm"
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
                variant="light"
                size="sm"
                mt="md"
                rightSection={<IconExternalLink style={{ width: rem(16), height: rem(16) }} />}
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
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
                fallbackSrc="https://placehold.co/400x300?text=Solução"
            />
        </Box>
    )

    return (
        <Box
            p={{ base: 'md', md: 'xl' }}
            style={{
                background: 'var(--mantine-color-gray-0)',
                borderRadius: 'var(--mantine-radius-lg)',
                border: '1px solid var(--mantine-color-gray-2)',
            }}
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
            <Grid align="center">
                <Grid.Col
                    span={{ base: 12, sm: 6, md: 7 }}
                    order={{ base: 2, sm: 2, md: 1 }}
                >
                    <Title
                        order={1}
                        component="h1"
                        style={{ lineHeight: 1.2 }}
                    >
                        Seu Negócio Precisa de{' '}
                        <Text
                            component="span"
                            inherit
                            c="red"
                        >
                            um Novo Ponto de Vista
                        </Text>{' '}
                        para Alavancar
                    </Title>
                    <Text
                        size="lg"
                        c="dimmed"
                        mt="xl"
                    >
                        Processos manuais, sistemas desconectados, retrabalho constante, oportunidades perdidas — tudo
                        isso custa caro. A maioria dos empresários não percebe porque está ocupado demais "apagando
                        incêndios".
                    </Text>

                    <List
                        mt={40}
                        spacing="lg"
                        size="md"
                        icon={
                            <ThemeIcon
                                size={24}
                                radius="xl"
                                variant="light"
                            >
                                <IconCheck
                                    style={{ width: rem(14), height: rem(14) }}
                                    stroke={2}
                                />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <Text
                                fw={600}
                                component="span"
                            >
                                Diagnóstico Antes de Tudo
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                Identificamos onde está o problema antes de propor qualquer solução
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text
                                fw={600}
                                component="span"
                            >
                                Resultados Mensuráveis
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                Não vendemos tecnologia — vendemos ROI comprovado e impacto real
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text
                                fw={600}
                                component="span"
                            >
                                Soluções Sob Medida
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                Cada negócio é único — e a solução também precisa ser
                            </Text>
                        </List.Item>
                    </List>

                    <Group
                        mt={40}
                        gap="md"
                        style={{ flexWrap: 'wrap' }}
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
                            leftSection={<IconRocket style={{ width: rem(20), height: rem(20) }} />}
                            style={{ flex: '1 1 auto', minWidth: '200px' }}
                        >
                            Quero um Diagnóstico
                        </Button>
                        <Button
                            component="a"
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="lg"
                            variant="outline"
                            leftSection={<IconMessageCircle style={{ width: rem(20), height: rem(20) }} />}
                            style={{ flex: '1 1 auto', minWidth: '200px' }}
                        >
                            Falar no WhatsApp
                        </Button>
                    </Group>
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
                            src="/image/solutions-hero.svg"
                            alt="Soluções RiLiGar"
                            style={{
                                width: '100%',
                                maxWidth: '500px',
                                height: 'auto',
                            }}
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
        <>
            {/* Hero Section - Similar ao da Home */}
            <SolutionsHero />

            {/* Solutions Cards - Layout Original */}
            <Box
                component="section"
                id="solucoes"
                aria-label="Nossas Soluções"
                py="xl"
                mb={80}
            >
                <Group justify="center">
                    <Badge
                        variant="filled"
                        size="lg"
                    >
                        Nossas Soluções
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mt="sm"
                    size={{ base: 28, sm: 32, md: 36 }}
                >
                    Transformação Real Para Seu Negócio
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mt="md"
                    maw={800}
                    mx="auto"
                    mb={50}
                >
                    Não aplicamos fórmulas prontas. Primeiro diagnosticamos, depois criamos soluções que geram impacto
                    mensurável — não apenas economia de tempo, mas aumento de receita e vantagens competitivas.
                </Text>

                <Stack
                    gap="lg"
                    maw={900}
                    mx="auto"
                    // px="md"
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
        </>
    )
}
