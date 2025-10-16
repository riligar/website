import { Title, Text, Container, Box, Badge, Group, Button, rem, List, ThemeIcon } from '@mantine/core'
import { IconRobot, IconCheck, IconMessageCircle } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

export default function AIAgentsHero() {
    return (
        <Box
            component="section"
            aria-label="AI Agents hero"
            mt={80}
            mb={80}
        >
            <Container size="lg">
                <Group
                    justify="center"
                    mb="md"
                >
                    <Badge
                        variant="filled"
                        size="xl"
                        leftSection={<IconRobot style={{ width: rem(18), height: rem(18) }} />}
                    >
                        <Trans>AI Agents</Trans>
                    </Badge>
                </Group>

                <Title
                    order={1}
                    component="h1"
                    ta="center"
                    mb="xl"
                    style={{ lineHeight: 1.2 }}
                >
                    <Trans>
                        Autonomous AI Agents That Work <br /> While You Focus on Growth
                    </Trans>
                </Title>

                <Text
                    size="xl"
                    c="dimmed"
                    ta="center"
                    maw={900}
                    mx="auto"
                    mb="xl"
                    style={{ lineHeight: 1.6 }}
                >
                    <Trans>
                        Deploy intelligent agents that understand context, make decisions, learn from interactions, and
                        execute tasks autonomously. Available 24/7, scalable instantly, improving continuously.
                    </Trans>
                </Text>

                <List
                    size="lg"
                    spacing="md"
                    center
                    maw={700}
                    mx="auto"
                    mb="xl"
                    icon={
                        <ThemeIcon
                            size={24}
                            radius="xl"
                            variant="light"
                        >
                            <IconCheck style={{ width: rem(16), height: rem(16) }} />
                        </ThemeIcon>
                    }
                >
                    <List.Item>
                        <Text component="span">
                            <Trans>
                                <strong>Autonomous Decision-Making:</strong> Agents that understand context and act
                                independently
                            </Trans>
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text component="span">
                            <Trans>
                                <strong>24/7 Operation:</strong> Never sleep, never take breaks, always consistent
                            </Trans>
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text component="span">
                            <Trans>
                                <strong>Continuous Learning:</strong> Get smarter with every interaction and feedback
                                loop
                            </Trans>
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text component="span">
                            <Trans>
                                <strong>Instant Scalability:</strong> Handle 10 or 10,000 tasks simultaneously without
                                adding headcount
                            </Trans>
                        </Text>
                    </List.Item>
                </List>

                <Group
                    justify="center"
                    mt={40}
                >
                    <Button
                        size="xl"
                        leftSection={<IconMessageCircle style={{ width: rem(24), height: rem(24) }} />}
                    >
                        <Trans>Discuss Your Use Case</Trans>
                    </Button>
                </Group>
            </Container>
        </Box>
    )
}
