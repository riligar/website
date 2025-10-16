import { Box, Title, Text, Container, SimpleGrid, ThemeIcon, rem, Badge, Group, Button } from '@mantine/core'
import { IconMessageCircle, IconBulb, IconRocket, IconTrendingUp, IconCalendar } from '@tabler/icons-react'

const steps = [
    {
        icon: IconMessageCircle,
        title: 'Discovery Call',
        description:
            'We start with a conversation about your challenges and goals. No sales pitch—just experienced engineers understanding your needs.',
        number: '01',
    },
    {
        icon: IconBulb,
        title: 'Solution Design',
        description:
            'We recommend the best solution (or combination) for your situation. AI Agent? Salesforce component? SaaS platform? We map it out clearly.',
        number: '02',
    },
    {
        icon: IconRocket,
        title: 'Rapid Development',
        description:
            'Fast iterations with regular demos. You see progress constantly and provide feedback at every step. Many clients see value in 2-3 weeks.',
        number: '03',
    },
    {
        icon: IconTrendingUp,
        title: 'Deploy & Scale',
        description:
            'Launch your solution with confidence. We provide training, documentation, and ongoing support as you grow and scale.',
        number: '04',
    },
]

export default function Process() {
    return (
        <Box
            component="section"
            aria-label="Our development process"
            py={80}
            style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(249, 250, 251, 1) 100%)',
            }}
        >
            <Container size="xl">
                <Group
                    justify="center"
                    mb="md"
                >
                    <Badge
                        variant="filled"
                        size="lg"
                    >
                        Simple Process
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                    size={{ base: 28, sm: 32, md: 36 }}
                >
                    From Idea to Impact in Weeks, Not Months
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    Our streamlined process gets you results fast. No bureaucracy, no endless meetings—just focused
                    collaboration between technical experts.
                </Text>

                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 4 }}
                    spacing="xl"
                >
                    {steps.map((step, index) => (
                        <Box
                            key={index}
                            style={{ position: 'relative' }}
                        >
                            <Text
                                size="64px"
                                fw={900}
                                style={{
                                    position: 'absolute',
                                    top: -20,
                                    left: 0,
                                    opacity: 0.1,
                                    lineHeight: 1,
                                }}
                            >
                                {step.number}
                            </Text>

                            <ThemeIcon
                                size={60}
                                radius="md"
                                variant="light"
                                mb="md"
                                style={{ position: 'relative', zIndex: 1 }}
                            >
                                <step.icon
                                    style={{ width: rem(30), height: rem(30) }}
                                    stroke={2}
                                />
                            </ThemeIcon>

                            <Text
                                size="lg"
                                fw={600}
                                mb="xs"
                            >
                                {step.title}
                            </Text>

                            <Text
                                size="sm"
                                c="dimmed"
                            >
                                {step.description}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>

                <Group
                    justify="center"
                    mt={60}
                >
                    <Button
                        size="lg"
                        leftSection={<IconCalendar style={{ width: rem(20), height: rem(20) }} />}
                    >
                        Start Your Project Today
                    </Button>
                </Group>
            </Container>
        </Box>
    )
}
