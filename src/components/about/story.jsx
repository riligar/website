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
                        Hi, I'm <strong>Ciro Cesar Maciel</strong>, founder of RiLiGar.
                    </Text>

                    <Text
                        c="dimmed"
                        mb="md"
                        style={{ lineHeight: 1.8 }}
                    >
                        I've been passionate about technology for over two decades. My journey started early—building
                        systems for large corporations, solving complex problems, and leading technical teams through
                        critical moments.
                    </Text>

                    <Text
                        c="dimmed"
                        mb="md"
                        style={{ lineHeight: 1.8 }}
                    >
                        But in <strong>2024</strong>, something shifted. I decided I wanted to direct my energy toward
                        projects that truly made sense—not just technically impressive, but meaningful. Projects that
                        could improve daily life, increase productivity, and bring more balance.
                    </Text>

                    <Text
                        c="dimmed"
                        mb="md"
                        style={{ lineHeight: 1.8 }}
                    >
                        With the support of my wife, <strong>Andréa</strong>, and my son, <strong>Edgar</strong>, I
                        transformed lines of code into solutions with direct impact on our routine. What started as
                        tools for our family gradually became my purpose.
                    </Text>

                    <Text
                        c="dimmed"
                        style={{ lineHeight: 1.8 }}
                    >
                        Today, RiLiGar combines my experience in enterprise software development with cutting-edge AI
                        capabilities. We study, apply, and deploy <strong>AI Agents</strong>, build powerful
                        <strong> Salesforce solutions</strong>, create <strong>scalable SaaS platforms</strong>, and
                        integrate AI into existing systems—all with one goal:{' '}
                        <em>helping businesses evolve with technology that works</em>.
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
                        title="20+ Years in Technology"
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                        >
                            Built systems for major corporations, led technical teams, and solved complex problems at
                            scale. Gained deep expertise in software architecture, development processes, and team
                            leadership.
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
                        title="The 2024 Decision"
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                        >
                            Decided to focus on projects with real purpose. Started developing tools that increase
                            productivity and bring more balance to daily life—beginning with our own family's needs.
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
                        title="Family-Driven Innovation"
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                        >
                            With Andréa and Edgar's support, transformed code into impactful solutions. What we built
                            for ourselves became tools that could help others.
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
                        title="RiLiGar Today"
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                        >
                            Now delivering enterprise-grade solutions: AI Agents, Salesforce components, SaaS platforms,
                            and AI integration services. Helping businesses evolve with less noise, more clarity, and
                            consistent results.
                        </Text>
                    </Timeline.Item>
                </Timeline>
            </Container>
        </Box>
    )
}
