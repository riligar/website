import { Box, Title, Text, Container, SimpleGrid, Paper, rem } from '@mantine/core'

const stats = [
    {
        value: '40%',
        label: 'Average productivity increase with our Salesforce components',
        description: 'Teams work faster when tools fit their workflows',
    },
    {
        value: '24/7',
        label: 'AI Agents working continuously for your business',
        description: 'Never miss an opportunity or customer inquiry',
    },
    {
        value: '2-3 Weeks',
        label: 'To first working prototype',
        description: 'Fast iterations mean quick validation and faster ROI',
    },
    {
        value: '100%',
        label: 'Clean, maintainable code in every project',
        description: 'No technical debt, no messy shortcuts',
    },
]

export default function Stats() {
    return (
        <Box py={80}>
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb={60}
                >
                    Solutions That Deliver Measurable Results
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
                                size="48px"
                                fw={900}
                                c="blue"
                                mb="xs"
                                style={{ lineHeight: 1 }}
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
