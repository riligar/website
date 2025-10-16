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
                    Ready to Transform Your Business?
                </Title>

                <Text
                    size="lg"
                    c="dimmed"
                    ta="center"
                    mb={40}
                    maw={600}
                    mx="auto"
                >
                    Let's discuss how RiLiGar can help you build powerful, efficient solutions that drive real growth.
                    No pressure, just honest conversation between technical experts.
                </Text>

                <Group
                    justify="center"
                    gap="md"
                >
                    <Button
                        size="xl"
                        leftSection={<IconRocket style={{ width: rem(20), height: rem(20) }} />}
                    >
                        Start Your Project
                    </Button>
                    <Button
                        size="xl"
                        variant="outline"
                        leftSection={<IconMail style={{ width: rem(20), height: rem(20) }} />}
                    >
                        Contact Us
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
                            100%
                        </Text>
                        <Text
                            size="sm"
                            c="dimmed"
                        >
                            Client Satisfaction
                        </Text>
                    </Box>
                    <Box ta="center">
                        <Text
                            size="xl"
                            fw={700}
                            c="blue"
                        >
                            Fast
                        </Text>
                        <Text
                            size="sm"
                            c="dimmed"
                        >
                            Response Time
                        </Text>
                    </Box>
                    <Box ta="center">
                        <Text
                            size="xl"
                            fw={700}
                            c="blue"
                        >
                            Clean
                        </Text>
                        <Text
                            size="sm"
                            c="dimmed"
                        >
                            Code Quality
                        </Text>
                    </Box>
                </Group>
            </Container>
        </Box>
    )
}
