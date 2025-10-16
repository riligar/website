import { Title, Text, Container, Box, Badge, Group } from '@mantine/core'

export default function AboutHero() {
    return (
        <Box
            mt={80}
            mb={80}
        >
            <Container size="md">
                <Group
                    justify="center"
                    mb="md"
                >
                    <Badge
                        variant="filled"
                        size="lg"
                    >
                        About RiLiGar
                    </Badge>
                </Group>

                <Title
                    order={1}
                    ta="center"
                    // size={{ base: 36, sm: 42, md: 52 }}
                    mb="xl"
                    style={{ lineHeight: 1.2 }}
                >
                    Building Technology <br /> with Purpose
                </Title>

                <Text
                    size="xl"
                    c="dimmed"
                    ta="center"
                    maw={800}
                    mx="auto"
                    style={{ lineHeight: 1.6 }}
                >
                    RiLiGar was born from a simple belief: technology should solve real problems and improve lives.
                    We're not chasing trends—we're building solutions that matter.
                </Text>
            </Container>
        </Box>
    )
}
