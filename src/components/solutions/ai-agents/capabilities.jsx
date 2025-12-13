import { Box, Title, Text, Container, SimpleGrid, Card, ThemeIcon, rem } from '@mantine/core'
import {
    IconMessageDots,
    IconBrain,
    IconChartBar,
    IconFileAnalytics,
    IconRobot,
    IconAutomation,
} from '@tabler/icons-react'


const capabilities = [
    {
        id: 'nlu',
        icon: IconMessageDots,
        titleKey: 'Natural Language Understanding',
        descriptionKey:
            'Agents that understand intent, context, and nuance in human language. Handle complex queries, multi-turn conversations, and ambiguous requests with human-like comprehension.',
    },
    {
        id: 'reasoning',
        icon: IconBrain,
        titleKey: 'Reasoning & Planning',
        descriptionKey:
            'Break down complex goals into actionable steps. Our agents use chain-of-thought reasoning to plan sequences of actions, handle edge cases, and adapt when plans need adjustment.',
    },
    {
        id: 'execution',
        icon: IconRobot,
        titleKey: 'Autonomous Execution',
        descriptionKey:
            "Agents don't just suggest—they act. Make API calls, query databases, update records, send notifications, and orchestrate multi-step workflows without human intervention.",
    },
    {
        id: 'rag',
        icon: IconFileAnalytics,
        titleKey: 'Document Processing & RAG',
        descriptionKey:
            'Extract, analyze, and synthesize information from documents, databases, and knowledge bases. Retrieval-Augmented Generation ensures accurate, grounded responses based on your data.',
    },
    {
        id: 'analytics',
        icon: IconChartBar,
        titleKey: 'Data Analysis & Insights',
        descriptionKey:
            'Agents that query databases, run analytics, generate reports, and surface insights. Turn raw data into actionable intelligence automatically.',
    },
    {
        id: 'collaboration',
        icon: IconAutomation,
        titleKey: 'Multi-Agent Collaboration',
        descriptionKey:
            'Complex tasks handled by specialized agent teams. Each agent has specific expertise, they communicate, delegate, and coordinate to solve problems too complex for any single agent.',
    },
]

export default function AIAgentsCapabilities() {
    return (
        <Box
            component="section"
            aria-label="AI Agents capabilities"
            py={80}
        >
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    What Our AI Agents Can Do
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    size="lg"
                    maw={800}
                    mx="auto"
                    mb={60}
                >
                    
                        Beyond simple chatbots—these are intelligent systems that understand, reason, plan, and execute
                        complex tasks autonomously.
                    
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 2, lg: 3 }}
                    spacing="xl"
                >
                    {capabilities.map(capability => (
                        <Card
                            key={capability.id}
                            shadow="sm"
                            radius="md"
                            padding="xl"
                            withBorder
                            style={{ height: '100%' }}
                        >
                            <ThemeIcon
                                size={50}
                                radius="md"
                                variant="light"
                                mb="md"
                            >
                                <capability.icon
                                    style={{ width: rem(28), height: rem(28) }}
                                    stroke={1.5}
                                />
                            </ThemeIcon>
                            <Text
                                fz="lg"
                                fw={600}
                                mb="xs"
                            >
                                {capability.titleKey}
                            </Text>
                            <Text
                                size="sm"
                                c="dimmed"
                            >
                                {capability.descriptionKey}
                            </Text>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
