import { Box, Title, Text, Container, SimpleGrid, Paper, rem } from '@mantine/core'
import { IconSpeedboat, IconUsers, IconChartLine, IconThumbUp } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

const metrics = [
    {
        icon: IconSpeedboat,
        value: '40%',
        label: 'Productivity Increase',
        description: 'Teams work faster with custom components and automation',
    },
    {
        icon: IconChartLine,
        value: '95%+',
        label: 'Code Coverage',
        description: 'All Apex code thoroughly tested and production-ready',
    },
    {
        icon: IconUsers,
        value: '100%',
        label: 'User Adoption',
        description: 'Intuitive UX ensures high adoption rates',
    },
    {
        icon: IconThumbUp,
        value: '2-6 weeks',
        label: 'Typical Delivery',
        description: 'Fast iterations with regular demos and feedback',
    },
]

export default function SalesforceResults() {
    return (
        <Box
            component="section"
            aria-label="Salesforce results"
            py={80}
        >
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    The Impact of Custom Salesforce Development
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    size="lg"
                    maw={800}
                    mx="auto"
                    mb={60}
                >
                    Well-built Salesforce customizations deliver measurable results—increased productivity, better data
                    quality, and higher user satisfaction.
                </Text>

                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 4 }}
                    spacing="lg"
                >
                    {metrics.map((metric, index) => (
                        <Paper
                            key={index}
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
                                {metric.label}
                            </Text>
                            <Text
                                size="xs"
                                c="dimmed"
                            >
                                {metric.description}
                            </Text>
                        </Paper>
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
                        Why RiLiGar for Salesforce?
                    </Title>
                    <Text
                        ta="center"
                        size="lg"
                        maw={900}
                        mx="auto"
                    >
                        We bring 20+ years of software engineering expertise to Salesforce development. That means clean
                        code, proper testing, version control, CI/CD, and maintainable solutions—not quick hacks that
                        become tech debt. Your Salesforce org is too important for shortcuts.
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}
