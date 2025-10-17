import { Box, Title, Text, Container, SimpleGrid, Card, ThemeIcon, rem, List, Group } from '@mantine/core'
import {
    IconBrandOpenai,
    IconBrandPython,
    IconApi,
    IconDatabase,
    IconCloudComputing,
    IconCheck,
} from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

const techStack = [
    {
        id: 'tech1',
        categoryKey: 'AI Models & APIs',
        icon: IconBrandOpenai,
        color: 'blue',
        technologies: [
            'OpenAI API (GPT-4)',
            'Anthropic Claude',
            'Google Gemini',
            'Hugging Face models',
            'Custom fine-tuning',
        ],
        description: 'We work with the best AI models and can fine-tune them for your specific use cases and data.',
    },
    {
        id: 'tech2',
        categoryKey: 'NLP & Text Processing',
        icon: IconBrandPython,
        color: 'yellow',
        technologies: ['LangChain', 'LlamaIndex', 'spaCy', 'Sentence transformers', 'Custom embeddings'],
        descriptionKey:
            'Extract meaning from text, documents, and conversations. Semantic search, classification, and summarization.',
    },
    {
        id: 'tech3',
        categoryKey: 'Integration Layer',
        icon: IconApi,
        color: 'green',
        technologies: ['RESTful APIs', 'GraphQL', 'Webhooks', 'Message queues', 'Event-driven architecture'],
        description: 'Clean API design that integrates seamlessly with your existing systems and workflows.',
    },
    {
        id: 'tech4',
        categoryKey: 'Data & Vector Storage',
        icon: IconDatabase,
        color: 'violet',
        technologies: ['Pinecone', 'Weaviate', 'PostgreSQL + pgvector', 'Redis', 'ETL pipelines'],
        description: 'Efficient storage and retrieval of embeddings, documents, and AI-generated content.',
    },
    {
        id: 'tech5',
        categoryKey: 'Deployment',
        icon: IconCloudComputing,
        color: 'orange',
        technologies: ['Docker containers', 'Kubernetes', 'AWS Lambda', 'FastAPI', 'Monitoring & logging'],
        description: 'Production-grade AI services with proper monitoring, error handling, and scalability.',
    },
]

export default function AIIntegrationTechStack() {
    return (
        <Box
            component="section"
            aria-label="AI Integration tech stack"
            py={80}
            style={{ background: 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(255, 255, 255, 0) 100%)' }}
        >
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    <Trans>AI Integration Technology Stack</Trans>
                </Title>
                <Text
                    c="dimmed"
                    ta="center"
                    size="lg"
                    maw={800}
                    mx="auto"
                    mb={60}
                >
                    <Trans>We integrate AI using proven frameworks and best practices. Reliable, secure, and built to scale.</Trans>
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 2, lg: 3 }}
                    spacing="xl"
                >
                    {techStack.map(stack => (
                        <Card
                            key={stack.id}
                            shadow="md"
                            radius="md"
                            padding="xl"
                            withBorder
                        >
                            <Group mb="md">
                                <ThemeIcon
                                    size={50}
                                    radius="md"
                                    variant="light"
                                    color={stack.color}
                                >
                                    <stack.icon
                                        style={{ width: rem(30), height: rem(30) }}
                                        stroke={1.5}
                                    />
                                </ThemeIcon>
                                <Text
                                    fz="lg"
                                    fw={600}
                                >
                    <Trans>{stack.category}</Trans>
                </Text>
                            </Group>
                            <Text
                                size="sm"
                                c="dimmed"
                                mb="md"
                            >
                    <Trans>{stack.description}</Trans>
                </Text>
                            <List
                                size="sm"
                                spacing="xs"
                                icon={
                                    <ThemeIcon
                                        size={18}
                                        radius="xl"
                                        variant="light"
                                        color={stack.color}
                                    >
                                        <IconCheck
                                            style={{ width: rem(12), height: rem(12) }}
                                            stroke={2}
                                        />
                                    </ThemeIcon>
                                }
                            >
                                {stack.technologies.map((tech, idx) => (
                                    <List.Item key={idx}>
                                        <Text
                                            size="sm"
                                            fw={500}
                                        >
                                            <Trans>{tech}</Trans>
                                        </Text>
                                    </List.Item>
                                ))}
                            </List>
                        </Card>
                    ))}
                </SimpleGrid>

                <Box
                    mt={60}
                    p="xl"
                    style={{
                        background:
                            'linear-gradient(135deg, rgba(34, 139, 230, 0.1) 0%, rgba(58, 134, 255, 0.05) 100%)',
                        borderRadius: '12px',
                    }}
                >
                    <Title
                        order={3}
                        ta="center"
                        mb="md"
                    >
                    <Trans>Integration Without Disruption</Trans>
                </Title>
                    <Text
                        ta="center"
                        size="lg"
                        maw={900}
                        mx="auto"
                    >
                    <Trans>We integrate AI capabilities into your existing systems without requiring major rewrites. API-first design, proper authentication, and robust error handling ensure your systems stay reliable while gaining AI superpowers.</Trans>
                </Text>
                </Box>
            </Container>
        </Box>
    )
}
