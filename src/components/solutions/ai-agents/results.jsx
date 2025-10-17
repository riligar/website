import { Box, Title, Text, Container, SimpleGrid, Paper, rem } from '@mantine/core'
import { IconClock, IconCoin, IconUsers, IconTrendingUp } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

const metrics = [
    {
        id: 'uptime',
        icon: IconClock,
        value: '24/7',
        labelKey: 'Uptime',
        descriptionKey: 'Agents work continuously without breaks, holidays, or sick days',
    },
    {
        id: 'throughput',
        icon: IconTrendingUp,
        value: '10-100x',
        labelKey: 'Task Throughput',
        descriptionKey: 'Handle exponentially more tasks than manual processes',
    },
    {
        id: 'cost',
        icon: IconCoin,
        value: '60-80%',
        labelKey: 'Cost Reduction',
        descriptionKey: 'Lower operational costs compared to human-only teams',
    },
    {
        id: 'response',
        icon: IconUsers,
        value: '< 3 sec',
        labelKey: 'Response Time',
        descriptionKey: 'Near-instant responses to queries and requests',
    },
]

export default function AIAgentsResults() {
    return (
        <Box
            component="section"
            aria-label="AI Agents results"
            py={80}
        >
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    <Trans>The Business Impact of AI Agents</Trans>
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    size="lg"
                    maw={800}
                    mx="auto"
                    mb={60}
                >
                    <Trans>
                        AI Agents deliver measurable ROI from day one. These aren't projections—these are real results
                        from production deployments.
                    </Trans>
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
                                <Trans>{metric.labelKey}</Trans>
                            </Text>

                            <Text
                                size="xs"
                                c="dimmed"
                            >
                                <Trans>{metric.descriptionKey}</Trans>
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
                        <Trans>Why RiLiGar for AI Agents?</Trans>
                    </Title>
                    <Text
                        ta="center"
                        size="lg"
                        maw={900}
                        mx="auto"
                        mb="md"
                    >
                        <Trans>
                            We're not an AI agency that learned to code. We're experienced software engineers (20+
                            years) who now specialize in AI. That means:
                        </Trans>
                    </Text>
                    <Text
                        ta="center"
                        size="md"
                        maw={900}
                        mx="auto"
                    >
                        <Trans>
                            ✓ Production-ready code from day one &nbsp;|&nbsp; ✓ Proper error handling and monitoring
                            &nbsp;|&nbsp; ✓ Security built in, not bolted on &nbsp;|&nbsp; ✓ Scalable architecture that
                            grows with you &nbsp;|&nbsp; ✓ Clean, maintainable code you can actually understand
                            &nbsp;|&nbsp; ✓ Real engineering, not demos
                        </Trans>
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}
