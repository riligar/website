import { Box, Title, Text, Container, Card, SimpleGrid, Badge, List, ThemeIcon, rem } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

const useCases = [
    {
        title: 'Customer Support Agent',
        industry: 'All Industries',
        description:
            'Handle customer inquiries 24/7 with context-aware responses. Resolve common issues, escalate complex cases, update tickets, and provide consistent, high-quality support at scale.',
        results: [
            '70-85% of tier-1 queries fully resolved by agent',
            'Average response time under 3 seconds',
            '90%+ customer satisfaction scores',
            '60% reduction in support costs',
        ],
    },
    {
        title: 'Sales Intelligence Agent',
        industry: 'B2B Sales',
        description:
            'Research prospects, qualify leads, update CRM, schedule meetings, and provide sales reps with context before every call. Never let a hot lead go cold again.',
        results: [
            '3x increase in qualified lead pipeline',
            '50% reduction in manual research time',
            'Automatic CRM updates (Salesforce, HubSpot)',
            'Real-time competitive intelligence',
        ],
    },
    {
        title: 'Document Processing Agent',
        industry: 'Legal, Finance, Healthcare',
        description:
            'Extract, classify, and analyze information from contracts, invoices, medical records, and forms. Route documents, flag anomalies, and ensure compliance automatically.',
        results: [
            '95%+ extraction accuracy',
            '90% reduction in manual data entry',
            'Real-time compliance checking',
            'Audit trails for every action',
        ],
    },
    {
        title: 'Internal Knowledge Agent',
        industry: 'Enterprise',
        description:
            'Answer employee questions by searching across wikis, docs, Slack, emails, and databases. Onboard new hires faster, reduce repetitive questions, and surface institutional knowledge.',
        results: [
            '40% reduction in "how do I..." questions',
            'Onboarding time cut by 50%',
            'Search across all company knowledge',
            'Continuous learning from interactions',
        ],
    },
    {
        title: 'Data Analysis Agent',
        industry: 'All Industries',
        description:
            'Query databases, generate reports, create visualizations, and surface insights from data. Democratize data access—let anyone ask questions in natural language.',
        results: [
            'Non-technical users can query data',
            'Reports generated in seconds, not hours',
            'Automated anomaly detection',
            'Natural language to SQL',
        ],
    },
    {
        title: 'Workflow Orchestration Agent',
        industry: 'Operations',
        description:
            'Coordinate multi-step business processes across systems. Monitor for triggers, execute actions, handle errors, and ensure workflows complete successfully.',
        results: [
            '80% reduction in manual handoffs',
            'Near-zero error rates',
            'Real-time status monitoring',
            'Automatic error recovery',
        ],
    },
]

export default function AIAgentsUseCases() {
    return (
        <Box
            component="section"
            aria-label="AI Agents use cases"
            py={80}
            style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(249, 250, 251, 1) 100%)',
            }}
        >
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    Real-World AI Agent Applications
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    size="lg"
                    maw={800}
                    mx="auto"
                    mb={60}
                >
                    These aren't theoretical—they're production systems we've built and deployed. Each use case shows
                    measurable business impact.
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 2 }}
                    spacing="xl"
                >
                    {useCases.map((useCase, index) => (
                        <Card
                            key={index}
                            shadow="md"
                            radius="md"
                            padding="xl"
                            withBorder
                        >
                            <Badge
                                variant="light"
                                size="sm"
                                mb="sm"
                            >
                                {useCase.industry}
                            </Badge>
                            <Title
                                order={3}
                                size="h4"
                                mb="xs"
                            >
                                {useCase.title}
                            </Title>
                            <Text
                                size="sm"
                                c="dimmed"
                                mb="md"
                            >
                                {useCase.description}
                            </Text>

                            <Text
                                size="sm"
                                fw={600}
                                mb="xs"
                            >
                                Typical Results:
                            </Text>
                            <List
                                size="sm"
                                spacing="xs"
                                icon={
                                    <ThemeIcon
                                        size={18}
                                        radius="xl"
                                        variant="light"
                                        color="green"
                                    >
                                        <IconCheck
                                            style={{ width: rem(12), height: rem(12) }}
                                            stroke={2}
                                        />
                                    </ThemeIcon>
                                }
                            >
                                {useCase.results.map((result, idx) => (
                                    <List.Item key={idx}>
                                        <Text size="sm">{result}</Text>
                                    </List.Item>
                                ))}
                            </List>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
