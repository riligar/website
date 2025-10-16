import { Box, Title, Text, Button, Group, Container, SimpleGrid, rem } from '@mantine/core'
import { IconRocket, IconCalendar } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

export default function CTA() {
    const whatsappMessage = encodeURIComponent(
        'Olá! Gostaria de conhecer mais sobre as soluções da RiLiGar. Podemos agendar uma conversa?'
    )
    const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

    return (
        <Box
            component="section"
            aria-label="Call to action"
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
                    <Trans>Find the Perfect Solution for Your Business</Trans>
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
                        Whether you need AI Agents, Salesforce solutions, SaaS platforms, or AI integration—we have the
                        expertise to deliver. Let's explore which solution fits your needs best.
                    </Trans>
                </Text>

                <Group
                    justify="center"
                    gap="md"
                >
                    <Button
                        component="a"
                        href="/contact"
                        size="xl"
                        leftSection={<IconRocket style={{ width: rem(24), height: rem(24) }} />}
                    >
                        <Trans>Explore Solutions</Trans>
                    </Button>
                    <Button
                        component="a"
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="xl"
                        variant="outline"
                        leftSection={<IconCalendar style={{ width: rem(24), height: rem(24) }} />}
                    >
                        <Trans>Schedule a Call</Trans>
                    </Button>
                </Group>

                <SimpleGrid
                    cols={{ base: 1, sm: 3 }}
                    spacing={{ base: 'md', sm: 'xl' }}
                    mt={40}
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
                            <Trans>Solutions Available</Trans>
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
                            <Trans>To First Results</Trans>
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
                            <Trans>AI Agents Working</Trans>
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
