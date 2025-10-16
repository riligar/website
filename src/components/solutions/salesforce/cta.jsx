import { Box, Title, Text, Button, Group, Container, rem } from '@mantine/core'
import { IconRocket } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

export default function SalesforceCTA() {
    const whatsappMessage = encodeURIComponent(
        "Hi! I'm interested in custom Salesforce development. I'd like to discuss Lightning Web Components, integrations, or automations for our Salesforce org."
    )
    const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

    return (
        <Box
            component="section"
            aria-label="Salesforce CTA"
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
                    <Trans>Ready to Supercharge Your Salesforce?</Trans>
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
                        Let's discuss how custom development can transform your Salesforce org. Whether it's Lightning
                        Web Components, integrations, or automation—we'll build exactly what your business needs.
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
                        <Trans>Start Your Salesforce Project</Trans>
                    </Button>
                </Group>

                <Text
                    size="sm"
                    c="dimmed"
                    ta="center"
                    mt="xl"
                >
                    <Trans>
                        Most Salesforce projects deliver first results in 2-4 weeks with our agile development process.
                    </Trans>
                </Text>
            </Container>
        </Box>
    )
}
