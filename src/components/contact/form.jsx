import { Box, Title, Text, Container, Paper, Group, Button, rem } from '@mantine/core'
import { IconBrandWhatsapp, IconBrandLinkedin } from '@tabler/icons-react'
import { Trans, useLingui } from '@lingui/react/macro'

export default function ContactForm() {
    const { _ } = useLingui()
    const whatsappMessage = encodeURIComponent(
        _('Olá! Gostaria de agendar uma conversa de diagnóstico para entender como a RiLiGar pode ajudar meu negócio.')
    )
    const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

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
                        <Trans>Agende Seu Diagnóstico</Trans>
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
                            Em 30 minutos, vamos entender seus principais desafios, identificar onde pode haver valor
                            escondido, e discutir se faz sentido trabalharmos juntos. Sem compromisso.
                        </Trans>
                    </Text>

                    <Group
                        justify="center"
                        gap="md"
                    >
                        <Button
                            size="lg"
                            color="green"
                            leftSection={<IconBrandWhatsapp style={{ width: rem(24), height: rem(24) }} />}
                            component="a"
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Trans>Agendar pelo WhatsApp</Trans>
                        </Button>
                        {/* <Button
                            size="lg"
                            variant="outline"
                            leftSection={<IconBrandLinkedin style={{ width: rem(20), height: rem(20) }} />}
                            component="a"
                            href="https://www.linkedin.com/in/ciromaciel/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Trans>Mensagem no LinkedIn</Trans>
                        </Button> */}
                    </Group>

                    <Text
                        size="sm"
                        c="dimmed"
                        ta="center"
                        mt="xl"
                    >
                        <Trans>Normalmente respondo em até 24 horas. Ansioso para conhecer seu negócio!</Trans>
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
                        <Trans>Baseado no Brasil 🇧🇷 | Atendendo Clientes no Mundo Todo 🌎</Trans>
                    </Text>
                    <Text
                        size="sm"
                        c="dimmed"
                    >
                        <Trans>Trabalho remoto • Flexibilidade de horários • Comunicação clara</Trans>
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}
