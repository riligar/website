import { Box, Title, Text, Button, Group, Container, rem } from '@mantine/core'
import { IconRocket } from '@tabler/icons-react'

export default function SalesforceCTA() {
    const whatsappMessage = encodeURIComponent(
        'Olá! Tenho interesse em desenvolvimento Salesforce personalizado. Gostaria de discutir componentes Lightning, integrações ou automações para nossa org Salesforce.'
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
                    Ready to Supercharge Your Salesforce?
                </Title>

                <Text
                    size="lg"
                    c="dimmed"
                    ta="center"
                    mb={40}
                    maw={700}
                    mx="auto"
                >
                    Let's discuss how custom development can transform your Salesforce org. Whether it's Lightning Web
                    Components, integrations, or automation—we'll build exactly what your business needs.
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
                        Start Your Salesforce Project
                    </Button>
                </Group>

                <Text
                    size="sm"
                    c="dimmed"
                    ta="center"
                    mt="xl"
                >
                    Most Salesforce projects deliver first results in 2-4 weeks with our agile development process.
                </Text>
            </Container>
        </Box>
    )
}
