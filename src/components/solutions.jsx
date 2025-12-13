import { Badge, Group, Title, Text, Box, Image, Stack, Flex } from '@mantine/core'

const projects = [
    {
        id: 'text-to-speech',
        title: 'Text to Speech',
        description: 'Aplicação de texto para fala com suporte a múltiplos idiomas e vozes naturais.',
        image: 'https://text-to-speech.ciromaciel.click/images/opengraph.jpg',
        tags: ['Web', 'API'],
    },
    {
        id: 'automation-hub',
        title: 'Automation Hub',
        description: 'Central de automações inteligentes para otimizar processos repetitivos do seu negócio.',
        image: 'https://text-to-speech.ciromaciel.click/images/opengraph.jpg',
        tags: ['Web', 'Integração'],
    },
    {
        id: 'analytics-dashboard',
        title: 'Analytics Dashboard',
        description: 'Dashboards em tempo real para visualização de métricas críticas e tomada de decisão.',
        image: 'https://text-to-speech.ciromaciel.click/images/opengraph.jpg',
        tags: ['Web', 'BI'],
    },
    {
        id: 'chatbot-ai',
        title: 'Chatbot AI',
        description: 'Assistentes virtuais inteligentes para atendimento e qualificação de leads 24/7.',
        image: 'https://text-to-speech.ciromaciel.click/images/opengraph.jpg',
        tags: ['Web', 'WhatsApp'],
    },
    {
        id: 'data-pipeline',
        title: 'Data Pipeline',
        description: 'Pipelines de dados automatizados para extração, transformação e carregamento de informações.',
        image: 'https://text-to-speech.ciromaciel.click/images/opengraph.jpg',
        tags: ['API', 'Dados'],
    },
    {
        id: 'custom-platform',
        title: 'Plataforma Sob Medida',
        description: 'Desenvolvimento de plataformas personalizadas que se adaptam perfeitamente ao seu workflow.',
        image: 'https://text-to-speech.ciromaciel.click/images/opengraph.jpg',
        tags: ['Web', 'Mobile'],
    },
]

function ProjectCard({ project, reversed }) {
    const content = (
        <Stack
            gap="sm"
            style={{ flex: 1 }}
        >
            <Text
                fz="xl"
                fw={700}
            >
                {project.title}
            </Text>
            <Text
                fz="sm"
                c="dimmed"
            >
                {project.description}
            </Text>
            <Group
                gap="xs"
                mt="xs"
            >
                {project.tags.map(tag => (
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
        </Stack>
    )

    const image = (
        <Box style={{ flex: 1 }}>
            <Image
                src={project.image}
                alt={project.title}
                radius="md"
                style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
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

export default function Solutions() {
    return (
        <Box
            component="section"
            id="portfolio"
            aria-label="Portfolio de projetos"
            py="xl"
        >
            <Group justify="center">
                <Badge
                    variant="filled"
                    size="lg"
                >
                    Nosso Portfólio
                </Badge>
            </Group>

            <Title
                order={2}
                ta="center"
                mt="sm"
                size={{ base: 28, sm: 32, md: 36 }}
            >
                Comprovação de Conhecimento
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mt="md"
                maw={800}
                mx="auto"
                mb={50}
            >
                Projetos reais que demonstram nossa expertise em desenvolvimento e automação. Cada projeto reflete nossa
                capacidade de entregar soluções de alta qualidade.
            </Text>

            <Stack
                gap="lg"
                maw={900}
                mx="auto"
                px="md"
            >
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        reversed={index % 2 === 1}
                    />
                ))}
            </Stack>
        </Box>
    )
}
