import { Box, Title, Text, Button, Group, Container, rem } from '@mantine/core'
import { IconRocket, IconMail } from '@tabler/icons-react'

export default function CTA() {
    return (
        <Box
            py={80}
            style={{
                background: 'linear-gradient(135deg, rgba(34, 139, 230, 0.1) 0%, rgba(58, 134, 255, 0.05) 100%)',
            }}
        >
            <Container size="md">
                <Title
                    order={2}
                    ta="center"
                    size={{ base: 28, sm: 36, md: 42 }}
                    mb="md"
                >
                    Find the Perfect Solution for Your Business
                </Title>

                <Text
                    size="lg"
                    c="dimmed"
                    ta="center"
                    mb={40}
                    maw={600}
                    mx="auto"
                >
                    Whether you need AI Agents, Salesforce solutions, SaaS platforms, or AI integration—we have the
                    expertise to deliver. Let's explore which solution fits your needs best.
                </Text>

                <Group
                    justify="center"
                    gap="md"
                >
                    <Button
                        size="xl"
                        leftSection={<IconRocket style={{ width: rem(20), height: rem(20) }} />}
                    >
                        Explore Solutions
                    </Button>
                    <Button
                        size="xl"
                        variant="outline"
                        leftSection={<IconMail style={{ width: rem(20), height: rem(20) }} />}
                    >
                        Schedule a Call
                    </Button>
                </Group>

                <Group
                    justify="center"
                    mt={40}
                    gap={50}
                >
                    <Box ta="center">
                        <Text
                            size="xl"
                            fw={700}
                            c="blue"
                        >
                            4+
                        </Text>
                        <Text
                            size="sm"
                            c="dimmed"
                        >
                            Solutions Available
                        </Text>
                    </Box>
                    <Box ta="center">
                        <Text
                            size="xl"
                            fw={700}
                            c="blue"
                        >
                            2-3 Weeks
                        </Text>
                        <Text
                            size="sm"
                            c="dimmed"
                        >
                            To First Results
                        </Text>
                    </Box>
                    <Box ta="center">
                        <Text
                            size="xl"
                            fw={700}
                            c="blue"
                        >
                            24/7
                        </Text>
                        <Text
                            size="sm"
                            c="dimmed"
                        >
                            AI Agents Working
                        </Text>
                    </Box>
                </Group>
            </Container>
        </Box>
    )
}
