import { Box, Title, Text, Container, SimpleGrid, Paper, rem } from '@mantine/core'
import { IconRocket, IconCoin, IconGauge, IconShield } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

const metrics = [
    { icon: IconRocket, value: '8-16 weeks', label: 'MVP Delivery', description: 'Launch your SaaS product fast' },
    { icon: IconGauge, value: '< 2 sec', label: 'Load Time', description: 'Lightning-fast performance' },
    { icon: IconCoin, value: '40-60%', label: 'Lower Infra Cost', description: 'Optimized cloud resources' },
    { icon: IconShield, value: '99.9%', label: 'Uptime', description: 'Reliable, production-grade' },
]

export default function SaaSResults() {
    return (
        <Box
            component="section"
            aria-label="SaaS results"
            py={80}
        >
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    Why Choose RiLiGar for SaaS?
                </Title>
                <Text
                    c="dimmed"
                    ta="center"
                    size="lg"
                    maw={800}
                    mx="auto"
                    mb={60}
                >
                    Fast delivery, clean code, scalable architecture, and cost-effective infrastructure—all from
                    experienced engineers.
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
            </Container>
        </Box>
    )
}
