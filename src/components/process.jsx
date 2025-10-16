import { Box, Title, Text, Container, SimpleGrid, ThemeIcon, rem, Badge, Group, Button } from '@mantine/core'
import { IconMessageCircle, IconBulb, IconRocket, IconTrendingUp, IconCalendar } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

const whatsappMessage = encodeURIComponent('Olá! Gostaria de iniciar um projeto com a RiLiGar. Podemos conversar?')
const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

const steps = [
    {
        id: 'discovery',
        icon: IconMessageCircle,
        titleKey: 'Discovery Call',
        descriptionKey:
            'We start with a conversation about your challenges and goals. No sales pitch—just experienced engineers understanding your needs.',
        number: '01',
    },
    {
        id: 'design',
        icon: IconBulb,
        titleKey: 'Solution Design',
        descriptionKey:
            'We recommend the best solution (or combination) for your situation. AI Agent? Salesforce component? SaaS platform? We map it out clearly.',
        number: '02',
    },
    {
        id: 'development',
        icon: IconRocket,
        titleKey: 'Rapid Development',
        descriptionKey:
            'Fast iterations with regular demos. You see progress constantly and provide feedback at every step. Many clients see value in 2-3 weeks.',
        number: '03',
    },
    {
        id: 'deploy',
        icon: IconTrendingUp,
        titleKey: 'Deploy & Scale',
        descriptionKey:
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
                        <Trans>Simple Process</Trans>
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                    size={{ base: 28, sm: 32, md: 36 }}
                >
                    <Trans>From Idea to Impact in Weeks, Not Months</Trans>
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    <Trans>
                        Our streamlined process gets you results fast. No bureaucracy, no endless meetings—just focused
                        collaboration between technical experts.
                    </Trans>
                </Text>

                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 4 }}
                    spacing="xl"
                >
                    {steps.map(step => (
                        <Box
                            key={step.id}
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
                                <Trans>{step.titleKey}</Trans>
                            </Text>

                            <Text
                                size="sm"
                                c="dimmed"
                            >
                                <Trans>{step.descriptionKey}</Trans>
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>

                <Group
                    justify="center"
                    mt={60}
                >
                    <Button
                        component="a"
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="lg"
                        leftSection={<IconCalendar style={{ width: rem(20), height: rem(20) }} />}
                    >
                        <Trans>Start Your Project Today</Trans>
                    </Button>
                </Group>
            </Container>
        </Box>
    )
}
