import { Box, Title, Text, Container, Timeline, ThemeIcon, rem } from '@mantine/core'
import { IconMessageCircle, IconClipboardCheck, IconChecklist, IconRocket } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

export default function ContactProcess() {
    return (
        <Box py={80}>
            <Container size="lg">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    <Trans>How We'll Work Together</Trans>
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    <Trans>
                        From first contact to project launch, here's the simple process we follow to ensure your
                        success.
                    </Trans>
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
                        title={<Trans>Initial Conversation</Trans>}
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                            mt={4}
                        >
                            <Trans>
                                We'll have a free consultation call to discuss your challenges, goals, and vision. I'll
                                ask questions to understand your needs and share initial thoughts on potential
                                solutions.
                            </Trans>
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
                        title={<Trans>Proposal & Planning</Trans>}
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                            mt={4}
                        >
                            <Trans>
                                I'll provide a detailed proposal outlining the recommended solution, timeline, and
                                investment. We'll refine the plan together until it perfectly fits your needs and
                                budget.
                            </Trans>
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
                        title={<Trans>Agreement & Kickoff</Trans>}
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                            mt={4}
                        >
                            <Trans>
                                Once we agree on the approach, we'll formalize the partnership and schedule a detailed
                                kickoff meeting. This is where we dive deep into requirements and set clear
                                expectations.
                            </Trans>
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
                        title={<Trans>Development & Delivery</Trans>}
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                            mt={4}
                        >
                            <Trans>
                                I'll start building your solution with regular check-ins and demos. You'll see progress
                                constantly and have opportunities to provide feedback at every stage until launch.
                            </Trans>
                        </Text>
                    </Timeline.Item>
                </Timeline>
            </Container>
        </Box>
    )
}
