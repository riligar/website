import { Box, Title, Text, Container, Paper, Group, Button, rem } from '@mantine/core'
import { IconMail, IconMessageCircle } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

export default function ContactForm() {
    return (
        <Box
            py={80}
            style={{
                background: 'linear-gradient(135deg, rgba(34, 139, 230, 0.1) 0%, rgba(58, 134, 255, 0.05) 100%)',
            }}
        >
            <Container size="md">
                <Paper
                    shadow="md"
                    p="xl"
                    radius="md"
                    withBorder
                    style={{ backgroundColor: 'white' }}
                >
                    <Title
                        order={2}
                        ta="center"
                        mb="md"
                    >
                        <Trans>Prefer Direct Contact?</Trans>
                    </Title>

                    <Text
                        size="lg"
                        c="dimmed"
                        ta="center"
                        mb={40}
                        maw={600}
                        mx="auto"
                    >
                        <Trans>
                            For business inquiries, project discussions, or partnership opportunities, feel free to
                            reach out directly via email or LinkedIn message.
                        </Trans>
                    </Text>

                    <Group
                        justify="center"
                        gap="md"
                    >
                        <Button
                            size="lg"
                            variant="outline"
                            leftSection={<IconMessageCircle style={{ width: rem(20), height: rem(20) }} />}
                            component="a"
                            href="https://www.linkedin.com/in/ciromaciel/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Trans>Message on LinkedIn</Trans>
                        </Button>
                    </Group>

                    <Text
                        size="sm"
                        c="dimmed"
                        ta="center"
                        mt="xl"
                    >
                        <Trans>I typically respond within 24 hours. Looking forward to hearing from you!</Trans>
                    </Text>
                </Paper>

                <Box
                    mt={40}
                    p="lg"
                    style={{
                        background: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: '8px',
                        textAlign: 'center',
                    }}
                >
                    <Text
                        size="md"
                        fw={600}
                        mb="xs"
                    >
                        <Trans>Based in Brazil 🇧🇷 | Working with Clients Worldwide 🌎</Trans>
                    </Text>
                    <Text
                        size="sm"
                        c="dimmed"
                    >
                        <Trans>Remote-first approach • Flexible time zones • Clear communication</Trans>
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}
