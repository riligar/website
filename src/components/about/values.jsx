import { Box, Title, Text, Container, SimpleGrid, Card, ThemeIcon, rem } from '@mantine/core'
import { IconTarget, IconCode, IconUsers, IconHeart, IconBrain, IconTrendingUp } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

const values = [
    {
        id: 'purpose',
        icon: IconTarget,
        titleKey: 'Purpose-Driven',
        descriptionKey:
            'Every solution we build serves a real purpose. We focus on projects that solve actual problems and deliver measurable value—not just technical complexity for its own sake.',
    },
    {
        id: 'code',
        icon: IconCode,
        titleKey: 'Clean Code Philosophy',
        descriptionKey:
            "We believe in code that's maintainable, scalable, and built to last. No shortcuts, no technical debt—just quality software that stands the test of time.",
    },
    {
        id: 'collaboration',
        icon: IconUsers,
        titleKey: 'Direct Collaboration',
        descriptionKey:
            'You work directly with experienced engineers who care about your success. No layers of project managers—just honest, expert collaboration between technical professionals.',
    },
    {
        id: 'family',
        icon: IconHeart,
        titleKey: 'Family Values',
        descriptionKey:
            'We understand work-life balance because we live it. Our solutions are designed by people who value family time and know that better tools mean more time for what matters.',
    },
    {
        id: 'ai',
        icon: IconBrain,
        titleKey: 'AI Expertise',
        descriptionKey:
            'We study and apply AI to create real business value. From autonomous agents to intelligent integrations, we leverage cutting-edge technology with practical wisdom.',
    },
    {
        id: 'evolution',
        icon: IconTrendingUp,
        titleKey: 'Constant Evolution',
        descriptionKey:
            "We're always learning, improving, and raising our own standards. This commitment to growth means you get solutions that reflect the latest best practices and innovations.",
    },
]

export default function AboutValues() {
    return (
        <Box
            p={80}
            style={{
                background: 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
        >
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    <Trans>Our Values</Trans>
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    <Trans>These principles guide every decision we make and every solution we build.</Trans>
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 2, lg: 3 }}
                    spacing="lg"
                >
                    {values.map(value => (
                        <Card
                            key={value.id}
                            shadow="sm"
                            padding="lg"
                            radius="md"
                            withBorder
                        >
                            <ThemeIcon
                                size={50}
                                radius="md"
                                variant="light"
                                mb="md"
                            >
                                <value.icon style={{ width: rem(26), height: rem(26) }} />
                            </ThemeIcon>

                            <Text
                                fw={600}
                                size="lg"
                                mb="xs"
                            >
                                <Trans>{value.titleKey}</Trans>
                            </Text>

                            <Text
                                size="sm"
                                c="dimmed"
                            >
                                <Trans>{value.descriptionKey}</Trans>
                            </Text>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
