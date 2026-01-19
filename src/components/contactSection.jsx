import { Box, Title, Text, Badge, Group, Button, Stack, Container, useMantineTheme } from '@mantine/core'
import { IconBrandWhatsapp } from '@tabler/icons-react'

// Configuração do WhatsApp - altere esses valores conforme necessário
const WHATSAPP_CONFIG = {
    phoneNumber: '5511986166966', // Número de telefone no formato internacional (sem + ou espaços)
    defaultMessage: 'Olá! Gostaria de agendar uma conversa de diagnóstico para meu negócio.',
}

export default function ContactSection() {
    const theme = useMantineTheme()
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(WHATSAPP_CONFIG.defaultMessage)}`

    return (
        <Box
            component="section"
            id="contato"
            py={80}
            bg="white"
        >
            <Group
                justify="center"
                mb="md"
            >
                <Badge
                    variant="light"
                    color="gray"
                    size="lg"
                >
                    Contato
                </Badge>
            </Group>

            <Title
                order={2}
                ta="center"
                mb="md"
                size={{ base: 28, sm: 32, md: 36 }}
                c="dark"
            >
                Agende Sua Conversa de Diagnóstico
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mb={50}
                maw={700}
                mx="auto"
                fz="lg"
            >
                Em 30 minutos, vamos entender seus principais desafios e identificar onde pode haver valor escondido no
                seu negócio. Sem compromisso.
            </Text>

            {/* WhatsApp CTA */}
            <Stack
                align="center"
                // mb={60}
            >
                <Button
                    component="a"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    color="dark"
                    leftSection={
                        <IconBrandWhatsapp
                            size={20}
                            stroke={1.5}
                        />
                    }
                >
                    Fale Conosco pelo WhatsApp
                </Button>
                {/* <Text
                    size="sm"
                    c="dimmed"
                    fw={500}
                >
                    Ou agende abaixo no horário que preferir
                </Text> */}
            </Stack>

            {/* Google Calendar Embed */}
            {/* <Box
                maw={900}
                mx="auto"
                p="md"
                bg="gray.0"
                radius="md"
                bd={`1px solid ${theme.colors.gray[2]}`}
            >
                <iframe
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0EuOqah9XqQ72XikgQrE1DzJhtneH62PGApC0eXkfo-WCrw5LNjqun9dLwxl-cPoABmv8eVzMy?gv=true"
                    style={{ border: 0, width: '100%', height: 700 }}
                    title="Agendar Conversa de Diagnóstico"
                />
            </Box> */}
        </Box>
    )
}
