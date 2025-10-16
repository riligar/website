import { Box, Title, Text, Container, SimpleGrid, Card, ThemeIcon, rem, Badge, Group, List } from '@mantine/core'
import {
    IconBrandPython,
    IconBrandOpenai,
    IconCloud,
    IconDatabase,
    IconBrandAws,
    IconApi,
    IconCheck,
} from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

const techStack = [
    {
        category: 'AI & LLM Frameworks',
        icon: IconBrandOpenai,
        color: 'blue',
        technologies: [
            'OpenAI GPT-4 & GPT-4 Turbo',
            'Anthropic Claude 3 (Opus, Sonnet, Haiku)',
            'LangChain & LangGraph',
            'LlamaIndex for RAG',
            'Semantic Kernel',
            'AutoGen (Multi-agent orchestration)',
        ],
        description:
            'We leverage the most advanced LLMs and agent frameworks to build intelligent systems that understand natural language, reason through complex problems, and take autonomous actions.',
    },
    {
        category: 'Agent Architecture & Tools',
        icon: IconBrandPython,
        color: 'green',
        technologies: [
            'Python (Primary language)',
            'CrewAI for collaborative agents',
            'Haystack for NLP pipelines',
            'Hugging Face Transformers',
            'spaCy for NLP',
            'Custom tool development',
        ],
        description:
            'Our agent architecture is built on robust Python frameworks that enable tool use, memory management, planning, and multi-agent collaboration for complex workflows.',
    },
    {
        category: 'Vector Databases & Memory',
        icon: IconDatabase,
        color: 'violet',
        technologies: [
            'Pinecone (vector search)',
            'Weaviate (semantic search)',
            'ChromaDB',
            'PostgreSQL with pgvector',
            'Redis for caching',
            'MongoDB for document storage',
        ],
        description:
            'Agents need memory to learn and improve. We implement sophisticated vector storage and retrieval systems that give your agents long-term memory and contextual awareness.',
    },
    {
        category: 'Infrastructure & Deployment',
        icon: IconBrandAws,
        color: 'orange',
        technologies: [
            'AWS (Lambda, ECS, SageMaker)',
            'Docker & Kubernetes',
            'FastAPI for APIs',
            'Celery for task queuing',
            'Monitoring with Datadog',
            'CI/CD with GitHub Actions',
        ],
        description:
            'Production-grade infrastructure ensures your agents run reliably, scale automatically, and maintain high availability with proper monitoring and failover mechanisms.',
    },
    {
        category: 'Integration & APIs',
        icon: IconApi,
        color: 'cyan',
        technologies: [
            'RESTful & GraphQL APIs',
            'Webhooks & event-driven architecture',
            'OAuth 2.0 & JWT authentication',
            'Zapier & Make integrations',
            'Salesforce API integration',
            'Custom connector development',
        ],
        description:
            'Our agents seamlessly integrate with your existing tools and workflows through robust API connections, webhooks, and custom integrations.',
    },
    {
        category: 'Observability & Optimization',
        icon: IconCloud,
        color: 'pink',
        technologies: [
            'LangSmith for LLM monitoring',
            'Weights & Biases',
            'Prometheus & Grafana',
            'Custom logging pipelines',
            'A/B testing frameworks',
            'Cost optimization tools',
        ],
        description:
            'We instrument every agent with comprehensive logging, monitoring, and analytics so you can measure performance, optimize costs, and continuously improve results.',
    },
]

export default function AIAgentsTechStack() {
    return (
        <Box
            component="section"
            aria-label="AI Agents tech stack"
            py={80}
            style={{
                background: 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
        >
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    The Technology Behind Our AI Agents
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    size="lg"
                    maw={800}
                    mx="auto"
                    mb={60}
                >
                    We build AI Agents with cutting-edge technologies and battle-tested frameworks. Every technology
                    choice is deliberate, proven in production, and optimized for reliability and performance.
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 2 }}
                    spacing="xl"
                >
                    {techStack.map((stack, index) => (
                        <Card
                            key={index}
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
                                <div>
                                    <Text
                                        fz="lg"
                                        fw={600}
                                    >
                                        {stack.category}
                                    </Text>
                                </div>
                            </Group>

                            <Text
                                size="sm"
                                c="dimmed"
                                mb="md"
                            >
                                {stack.description}
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
                                            {tech}
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
                        Why These Technologies Matter
                    </Title>
                    <Text
                        ta="center"
                        size="lg"
                        maw={900}
                        mx="auto"
                    >
                        We don't chase trends—we use proven technologies that deliver results. With 20+ years of
                        software engineering experience, we know how to architect systems that are maintainable,
                        scalable, and cost-effective. Every agent we build is production-ready from day one, with robust
                        error handling, monitoring, and security built in.
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}
