import { Box, Title, Text, Container, SimpleGrid, Paper, rem } from '@mantine/core'
import { IconBolt, IconClock, IconChartLine, IconShieldCheck } from '@tabler/icons-react'


const metrics = [
    { id: 'automation', icon: IconBolt, value: '90%', labelKey: 'Automation Rate', descriptionKey: 'Tasks automated with AI integration' },
    { id: 'integration', icon: IconClock, value: '3-5 weeks', labelKey: 'Integration Time', descriptionKey: 'From concept to production' },
    { id: 'productivity', icon: IconChartLine, value: '5-10x', labelKey: 'Productivity Gain', descriptionKey: 'Process efficiency improvement' },
    { id: 'secure', icon: IconShieldCheck, value: '100%', labelKey: 'Secure', descriptionKey: 'Enterprise-grade security' },
]

export default function AIIntegrationResults() {
    return (
        <Box
            component="section"
            aria-label="AI Integration results"
            py={80}
        >
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    The Impact of AI Integration
                </Title>
                <Text
                    c="dimmed"
                    ta="center"
                    size="lg"
                    maw={800}
                    mx="auto"
                    mb={60}
                >
                    Add AI capabilities to existing systems without disruption—delivering measurable improvements fast.
                </Text>

                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 4 }}
                    spacing="lg"
                >
                    {metrics.map(metric => (
                        <Paper
                            key={metric.id}
                            shadow="md"
                            radius="md"
                            p="xl"
                            withBorder
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: rem(220),
                                textAlign: 'center',
                                transition: 'transform 0.2s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-5px)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)'
                            }}
                        >
                            <metric.icon
                                style={{ width: rem(40), height: rem(40), marginBottom: rem(10) }}
                                stroke={1.5}
                                color="#228be6"
                            />
                            <Text
                                size="xl"
                                fw={700}
                                c="blue"
                                mb="xs"
                            >
                                {metric.value}
                            </Text>
                            <Text
                                size="sm"
                                fw={600}
                                mb="xs"
                            >
                                {metric.labelKey}
                            </Text>
                            <Text
                                size="xs"
                                c="dimmed"
                            >
                                {metric.descriptionKey}
                            </Text>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
