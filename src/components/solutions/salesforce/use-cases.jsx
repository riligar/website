import { Box, Title, Text, Container, Card, SimpleGrid, Badge, List, ThemeIcon, rem } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

const useCases = [
    {
        title: 'Sales Pipeline Enhancement',
        industry: 'Sales Teams',
        description:
            'Custom components for lead scoring, opportunity tracking, and forecasting. Automate lead routing, follow-ups, and reporting. Give sales reps the tools they need to close faster.',
        results: [
            '30% faster lead response time',
            'Real-time pipeline visibility',
            'Automated task creation',
            '25% increase in close rates',
        ],
    },
    {
        title: 'Service Console Customization',
        industry: 'Customer Support',
        description:
            'Build custom case management interfaces, knowledge base integrations, and omnichannel routing. Empower support teams with context-rich information and automated workflows.',
        results: [
            '40% faster case resolution',
            'Unified customer view',
            'Automated case routing',
            'Integrated knowledge base',
        ],
    },
    {
        title: 'Marketing Automation Integration',
        industry: 'Marketing',
        description:
            'Sync Salesforce with marketing platforms like HubSpot, Marketo, or Mailchimp. Track campaign performance, lead scoring, and attribution all within Salesforce.',
        results: [
            'Real-time lead scoring',
            'Campaign ROI tracking',
            'Automated nurture flows',
            'Attribution reporting',
        ],
    },
    {
        title: 'Custom Data Dashboards',
        industry: 'Executive / Analytics',
        description:
            'Build interactive Lightning dashboards with custom visualizations. Real-time KPIs, drill-down capabilities, and mobile-responsive design for executives on the go.',
        results: ['Real-time business metrics', 'Mobile-friendly', 'Custom visualizations', 'Export capabilities'],
    },
]

export default function SalesforceUseCases() {
    return (
        <Box
            component="section"
            aria-label="Salesforce use cases"
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
                    Real-World Salesforce Projects
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    size="lg"
                    maw={800}
                    mx="auto"
                    mb={60}
                >
                    These are examples of Salesforce customizations we've built for clients—each delivering measurable
                    business value.
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
