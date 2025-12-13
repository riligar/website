import { Box, Title, Text, Button, Group, Container, rem } from '@mantine/core'
import { IconRocket } from '@tabler/icons-react'

export default function AIIntegrationCTA() {
    const whatsappMessage = encodeURIComponent(
        'Olá! Tenho interesse em integrar capacidades de IA nos nossos sistemas existentes. Gostaria de discutir NLP, processamento de documentos ou automação inteligente.'
    )
    const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

    return (
        <Box
            component="section"
            aria-label="AI Integration CTA"
            py={80}
            style={{ background: 'linear-gradient(135deg, rgba(34, 139, 230, 0.1) 0%, rgba(58, 134, 255, 0.05) 100%)' }}
        >
            <Container size="md">
                <Title
                    order={2}
                    ta="center"
                    size={{ base: 28, sm: 36, md: 42 }}
                    mb="md"
                >
                    Ready to Add AI to Your Systems?
                </Title>
                <Text
                    size="lg"
                    c="dimmed"
                    ta="center"
                    mb={40}
                    maw={700}
                    mx="auto"
                >
                    Let's explore how AI can enhance your existing applications. We'll identify opportunities, design
                    the integration, and deliver measurable results.
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
                        Start AI Integration Project
                    </Button>
                </Group>
                <Text
                    size="sm"
                    c="dimmed"
                    ta="center"
                    mt="xl"
                >
                    Most AI integration projects start with a proof-of-concept to validate the approach before full
                    deployment.
                </Text>
            </Container>
        </Box>
    )
}
