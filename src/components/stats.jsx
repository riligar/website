import { Box, Title, Text, Container, SimpleGrid, Paper, rem } from '@mantine/core'
import { Trans } from '@lingui/react/macro'

const stats = [
    {
        value: '40%',
        label: <Trans>Average productivity increase with our Salesforce components</Trans>,
        description: <Trans>Teams work faster when tools fit their workflows</Trans>,
    },
    {
        value: '24/7',
        label: <Trans>AI Agents working continuously for your business</Trans>,
        description: <Trans>Never miss an opportunity or customer inquiry</Trans>,
    },
    {
        value: '2-3 Weeks',
        label: <Trans>To first working prototype</Trans>,
        description: <Trans>Fast iterations mean quick validation and faster ROI</Trans>,
    },
    {
        value: '100%',
        label: <Trans>Clean, maintainable code in every project</Trans>,
        description: <Trans>No technical debt, no messy shortcuts</Trans>,
    },
]

export default function Stats() {
    return (
        <Box
            component="section"
            aria-label="Statistics and impact numbers"
            py={80}
        >
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb={60}
                    size={{ base: 28, sm: 32, md: 36 }}
                >
                    <Trans>Solutions That Deliver Measurable Results</Trans>
                </Title>

                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 4 }}
                    spacing="lg"
                >
                    {stats.map((stat, index) => (
                        <Paper
                            key={index}
                            p="xl"
                            radius="md"
                            style={{
                                border: '1px solid #e9ecef',
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
                            <Text
                                style={{
                                    fontSize: 'clamp(32px, 8vw, 48px)',
                                    lineHeight: 1,
                                }}
                                fw={900}
                                c="blue"
                                mb="xs"
                            >
                                {stat.value}
                            </Text>

                            <Text
                                size="sm"
                                fw={600}
                                mb="xs"
                            >
                                {stat.label}
                            </Text>

                            <Text
                                size="xs"
                                c="dimmed"
                            >
                                {stat.description}
                            </Text>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
