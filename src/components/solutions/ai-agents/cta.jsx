import { Box, Title, Text, Button, Group, Container, rem } from '@mantine/core'
import { IconRocket, IconCalendar } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

export default function AIAgentsCTA() {
    const whatsappMessage = encodeURIComponent(
        "Hi! I'm interested in deploying AI Agents for my business. I'd like to discuss specific use cases and see how autonomous agents could help us scale."
    )
    const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

    return (
        <Box
            component="section"
            aria-label="AI Agents CTA"
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
                    <Trans>Ready to Deploy AI Agents?</Trans>
                </Title>

                <Text
                    size="lg"
                    c="dimmed"
                    ta="center"
                    mb={40}
                    maw={700}
                    mx="auto"
                >
                    <Trans>
                        Let's discuss your specific use case. We'll explore how AI Agents can automate tasks, reduce
                        costs, and scale your operations—with measurable ROI.
                    </Trans>
                </Text>

                <Group
                    justify="center"
                    gap="md"
                >
                    <Button
                        component="a"
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="xl"
                        leftSection={<IconRocket style={{ width: rem(24), height: rem(24) }} />}
                    >
                        <Trans>Start Your AI Agent Project</Trans>
                    </Button>
                </Group>

                <Text
                    size="sm"
                    c="dimmed"
                    ta="center"
                    mt="xl"
                >
                    <Trans>
                        Most projects start with a 2-week proof-of-concept to validate the approach before full
                        deployment.
                    </Trans>
                </Text>
            </Container>
        </Box>
    )
}
