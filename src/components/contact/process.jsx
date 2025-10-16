import { Box, Title, Text, Container, Timeline, ThemeIcon, rem } from '@mantine/core'
import { IconMessageCircle, IconClipboardCheck, IconChecklist, IconRocket } from '@tabler/icons-react'

export default function ContactProcess() {
    return (
        <Box py={80}>
            <Container size="lg">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    How We'll Work Together
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    From first contact to project launch, here's the simple process we follow to ensure your success.
                </Text>

                <Timeline
                    active={4}
                    bulletSize={50}
                    lineWidth={2}
                >
                    <Timeline.Item
                        bullet={
                            <ThemeIcon
                                size={50}
                                variant="light"
                                radius="xl"
                            >
                                <IconMessageCircle style={{ width: rem(24), height: rem(24) }} />
                            </ThemeIcon>
                        }
                        title="Initial Conversation"
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                            mt={4}
                        >
                            We'll have a free consultation call to discuss your challenges, goals, and vision. I'll ask
                            questions to understand your needs and share initial thoughts on potential solutions.
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon
                                size={50}
                                variant="light"
                                radius="xl"
                            >
                                <IconClipboardCheck style={{ width: rem(24), height: rem(24) }} />
                            </ThemeIcon>
                        }
                        title="Proposal & Planning"
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                            mt={4}
                        >
                            I'll provide a detailed proposal outlining the recommended solution, timeline, and
                            investment. We'll refine the plan together until it perfectly fits your needs and budget.
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon
                                size={50}
                                variant="light"
                                radius="xl"
                            >
                                <IconChecklist style={{ width: rem(24), height: rem(24) }} />
                            </ThemeIcon>
                        }
                        title="Agreement & Kickoff"
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                            mt={4}
                        >
                            Once we agree on the approach, we'll formalize the partnership and schedule a detailed
                            kickoff meeting. This is where we dive deep into requirements and set clear expectations.
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon
                                size={50}
                                variant="light"
                                radius="xl"
                            >
                                <IconRocket style={{ width: rem(24), height: rem(24) }} />
                            </ThemeIcon>
                        }
                        title="Development & Delivery"
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                            mt={4}
                        >
                            I'll start building your solution with regular check-ins and demos. You'll see progress
                            constantly and have opportunities to provide feedback at every stage until launch.
                        </Text>
                    </Timeline.Item>
                </Timeline>
            </Container>
        </Box>
    )
}
