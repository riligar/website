import { Box, Title, Text, Container, Card, SimpleGrid, Avatar, Group, Badge } from '@mantine/core'
import { Trans } from '@lingui/react/macro'

export default function AboutTeam() {
    return (
        <Box py={80}>
            <Container size="lg">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    <Trans>The Team</Trans>
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    <Trans>
                        RiLiGar is a family-driven company. We're small by design—focused, dedicated, and personally
                        invested in every project we take on.
                    </Trans>
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 1 }}
                    spacing="xl"
                >
                    <Card
                        shadow="md"
                        padding="xl"
                        radius="md"
                        withBorder
                        style={{ maxWidth: 600, margin: '0 auto', width: '100%' }}
                    >
                        <Group
                            align="flex-start"
                            wrap="nowrap"
                        >
                            <Avatar
                                size={120}
                                radius="md"
                                color="blue"
                                src={'https://avatars.githubusercontent.com/u/349602?v=4'}
                            >
                                CM
                            </Avatar>

                            <Box style={{ flex: 1 }}>
                                <Group
                                    mb="xs"
                                    gap="xs"
                                    wrap="wrap"
                                >
                                    <Text
                                        size="xl"
                                        fw={700}
                                    >
                                        Ciro Cesar Maciel
                                    </Text>
                                    <Badge
                                        variant="light"
                                        size="sm"
                                    >
                                        <Trans>Founder & Lead Engineer</Trans>
                                    </Badge>
                                </Group>

                                <Text
                                    size="sm"
                                    c="dimmed"
                                    mb="md"
                                    style={{ lineHeight: 1.6 }}
                                >
                                    <Trans>
                                        20+ years building enterprise systems, leading technical teams, and solving
                                        complex problems. Specialized in AI, Salesforce development, and scalable
                                        software architecture. Passionate about technology with purpose.
                                    </Trans>
                                </Text>

                                <Group gap="xs">
                                    <Badge
                                        size="sm"
                                        variant="outline"
                                    >
                                        <Trans>AI Engineering</Trans>
                                    </Badge>
                                    <Badge
                                        size="sm"
                                        variant="outline"
                                    >
                                        Salesforce
                                    </Badge>
                                    <Badge
                                        size="sm"
                                        variant="outline"
                                    >
                                        <Trans>SaaS Architecture</Trans>
                                    </Badge>
                                    <Badge
                                        size="sm"
                                        variant="outline"
                                    >
                                        <Trans>Leadership</Trans>
                                    </Badge>
                                </Group>
                            </Box>
                        </Group>
                    </Card>
                </SimpleGrid>

                <Box
                    mt={60}
                    p="xl"
                    style={{
                        background:
                            'linear-gradient(135deg, rgba(34, 139, 230, 0.05) 0%, rgba(58, 134, 255, 0.02) 100%)',
                        borderRadius: '12px',
                        border: '1px solid #e9ecef',
                    }}
                >
                    <Title
                        order={4}
                        ta="center"
                        mb="md"
                    >
                        <Trans>Behind Every Solution</Trans>
                    </Title>

                    <Text
                        c="dimmed"
                        ta="center"
                        maw={800}
                        mx="auto"
                        style={{ lineHeight: 1.8 }}
                    >
                        <Trans>
                            While I lead the technical work, none of this would be possible without the support of my
                            family. <strong>Andréa</strong> and <strong>Edgar</strong> inspire me daily to build
                            technology that creates more time for what matters most. This personal motivation drives us
                            to deliver solutions that genuinely improve lives—not just bottom lines.
                        </Trans>
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}
