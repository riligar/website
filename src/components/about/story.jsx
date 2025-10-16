import { Box, Title, Text, Container, Paper, Timeline, rem, ThemeIcon } from '@mantine/core'
import { IconRocket, IconBulb, IconHeart, IconTrendingUp } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

export default function AboutStory() {
    return (
        <Box pb={80}>
            <Container size="lg">
                <Title
                    order={2}
                    ta="center"
                    mb="xl"
                >
                    <Trans>Our Story</Trans>
                </Title>

                <Paper
                    p="xl"
                    radius="md"
                    withBorder
                    mb={60}
                >
                    <Text
                        size="lg"
                        mb="md"
                    >
                        <Trans>
                            Hi, I'm <strong>Ciro Cesar Maciel</strong>, founder of RiLiGar.
                        </Trans>
                    </Text>

                    <Text
                        c="dimmed"
                        mb="md"
                        style={{ lineHeight: 1.8 }}
                    >
                        <Trans>
                            I've been passionate about technology for over two decades. My journey started
                            early—building systems for large corporations, solving complex problems, and leading
                            technical teams through critical moments.
                        </Trans>
                    </Text>

                    <Text
                        c="dimmed"
                        mb="md"
                        style={{ lineHeight: 1.8 }}
                    >
                        <Trans>
                            But in <strong>2024</strong>, something shifted. I decided I wanted to direct my energy
                            toward projects that truly made sense—not just technically impressive, but meaningful.
                            Projects that could improve daily life, increase productivity, and bring more balance.
                        </Trans>
                    </Text>

                    <Text
                        c="dimmed"
                        mb="md"
                        style={{ lineHeight: 1.8 }}
                    >
                        <Trans>
                            With the support of my wife, <strong>Andréa</strong>, and my son, <strong>Edgar</strong>, I
                            transformed lines of code into solutions with direct impact on our routine. What started as
                            tools for our family gradually became my purpose.
                        </Trans>
                    </Text>

                    <Text
                        c="dimmed"
                        style={{ lineHeight: 1.8 }}
                    >
                        <Trans>
                            Today, RiLiGar combines my experience in enterprise software development with cutting-edge
                            AI capabilities. We study, apply, and deploy <strong>AI Agents</strong>, build powerful
                            <strong> Salesforce solutions</strong>, create <strong>scalable SaaS platforms</strong>, and
                            integrate AI into existing systems—all with one goal:{' '}
                            <em>helping businesses evolve with technology that works</em>.
                        </Trans>
                    </Text>
                </Paper>

                <Title
                    order={3}
                    ta="center"
                    mb={40}
                >
                    <Trans>The Journey</Trans>
                </Title>

                <Timeline
                    active={4}
                    bulletSize={40}
                    lineWidth={2}
                >
                    <Timeline.Item
                        bullet={
                            <ThemeIcon
                                size={40}
                                variant="light"
                                radius="xl"
                            >
                                <IconRocket style={{ width: rem(20), height: rem(20) }} />
                            </ThemeIcon>
                        }
                        title={<Trans>20+ Years in Technology</Trans>}
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                        >
                            <Trans>
                                Built systems for major corporations, led technical teams, and solved complex problems
                                at scale. Gained deep expertise in software architecture, development processes, and
                                team leadership.
                            </Trans>
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon
                                size={40}
                                variant="light"
                                radius="xl"
                            >
                                <IconBulb style={{ width: rem(20), height: rem(20) }} />
                            </ThemeIcon>
                        }
                        title={<Trans>The 2024 Decision</Trans>}
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                        >
                            <Trans>
                                Decided to focus on projects with real purpose. Started developing tools that increase
                                productivity and bring more balance to daily life—beginning with our own family's needs.
                            </Trans>
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon
                                size={40}
                                variant="light"
                                radius="xl"
                            >
                                <IconHeart style={{ width: rem(20), height: rem(20) }} />
                            </ThemeIcon>
                        }
                        title={<Trans>Family-Driven Innovation</Trans>}
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                        >
                            <Trans>
                                With Andréa and Edgar's support, transformed code into impactful solutions. What we
                                built for ourselves became tools that could help others.
                            </Trans>
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon
                                size={40}
                                variant="light"
                                radius="xl"
                            >
                                <IconTrendingUp style={{ width: rem(20), height: rem(20) }} />
                            </ThemeIcon>
                        }
                        title={<Trans>RiLiGar Today</Trans>}
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                        >
                            <Trans>
                                Now delivering enterprise-grade solutions: AI Agents, Salesforce components, SaaS
                                platforms, and AI integration services. Helping businesses evolve with less noise, more
                                clarity, and consistent results.
                            </Trans>
                        </Text>
                    </Timeline.Item>
                </Timeline>
            </Container>
        </Box>
    )
}
