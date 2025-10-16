import { Title, Text, Container, Box, Badge, Group } from '@mantine/core'

export default function ContactHero() {
    return (
        <Box
            mt={80}
            mb={60}
        >
            <Container size="lg">
                <Group
                    justify="center"
                    mb="md"
                >
                    <Badge
                        variant="filled"
                        size="lg"
                    >
                        Get in Touch
                    </Badge>
                </Group>

                <Title
                    order={1}
                    ta="center"
                    // size={{ base: 36, sm: 42, md: 52 }}
                    mb="xl"
                    style={{ lineHeight: 1.2 }}
                >
                    Let's Connect
                </Title>

                <Text
                    size="xl"
                    c="dimmed"
                    ta="center"
                    maw={700}
                    mx="auto"
                    style={{ lineHeight: 1.6 }}
                >
                    Ready to transform your business with purpose-driven technology? Reach out through any of these
                    channels—I'm always happy to discuss new projects and opportunities.
                </Text>
            </Container>
        </Box>
    )
}
