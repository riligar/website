import { Title, Text, Container, Box, Badge, Group } from '@mantine/core'
import { Trans } from '@lingui/react/macro'

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
                        <Trans>About RiLiGar</Trans>
                    </Badge>
                </Group>

                <Title
                    order={1}
                    ta="center"
                    mb="xl"
                    style={{ lineHeight: 1.2 }}
                >
                    <Trans>
                        Building Technology <br /> with Purpose
                    </Trans>
                </Title>

                <Text
                    size="xl"
                    c="dimmed"
                    ta="center"
                    maw={800}
                    mx="auto"
                    style={{ lineHeight: 1.6 }}
                >
                    <Trans>
                        RiLiGar was born from a simple belief: technology should solve real problems and improve lives.
                        We're not chasing trends—we're building solutions that matter.
                    </Trans>
                </Text>
            </Container>
        </Box>
    )
}
