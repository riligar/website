import { Title, Text, Container, Box, Badge, Group } from '@mantine/core'
import { Trans } from '@lingui/react/macro'

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
                        <Trans>Get in Touch</Trans>
                    </Badge>
                </Group>

                <Title
                    order={1}
                    ta="center"
                    mb="xl"
                    style={{ lineHeight: 1.2 }}
                >
                    <Trans>Let's Connect</Trans>
                </Title>

                <Text
                    size="xl"
                    c="dimmed"
                    ta="center"
                    maw={700}
                    mx="auto"
                    style={{ lineHeight: 1.6 }}
                >
                    <Trans>
                        Ready to transform your business with purpose-driven technology? Reach out through any of these
                        channels—I'm always happy to discuss new projects and opportunities.
                    </Trans>
                </Text>
            </Container>
        </Box>
    )
}
