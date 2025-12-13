import { Box, Title, Text, Button, Group, Container, rem } from '@mantine/core'
import { IconRocket } from '@tabler/icons-react'

export default function SaaSCTA() {
    const whatsappMessage = encodeURIComponent(
        'Olá! Tenho interesse em construir uma plataforma SaaS. Gostaria de discutir arquitetura, stack tecnológico e cronograma de entrega.'
    )
    const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

    return (
        <Box
            component="section"
            aria-label="SaaS CTA"
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
                    Ready to Build Your SaaS?
                </Title>
                <Text
                    size="lg"
                    c="dimmed"
                    ta="center"
                    mb={40}
                    maw={700}
                    mx="auto"
                >
                    Let's discuss your SaaS idea. We'll design the architecture, choose the right tech stack, and
                    deliver an MVP in 8-16 weeks.
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
                        Start Your SaaS Project
                    </Button>
                </Group>
                <Text
                    size="sm"
                    c="dimmed"
                    ta="center"
                    mt="xl"
                >
                    Most SaaS projects start with a technical discovery phase to validate architecture before full
                    development.
                </Text>
            </Container>
        </Box>
    )
}
