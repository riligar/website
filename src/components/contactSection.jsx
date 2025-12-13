import { Box, Title, Text, Badge, Group, Button, Stack } from '@mantine/core'
import { IconBrandWhatsapp } from '@tabler/icons-react'

// Configuração do WhatsApp - altere esses valores conforme necessário
const WHATSAPP_CONFIG = {
    phoneNumber: '5511986166966', // Número de telefone no formato internacional (sem + ou espaços)
    defaultMessage: 'Olá! Gostaria de agendar uma conversa de diagnóstico para meu negócio.',
}

export default function ContactSection() {
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodeURIComponent(WHATSAPP_CONFIG.defaultMessage)}`

    return (
        <Box
            component="section"
            id="contato"
            py="xl"
        >
            {/* <Container size="xl"> */}
            <Group
                justify="center"
                mb="md"
            >
                <Badge
                    variant="filled"
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
            >
                Agende Sua Conversa de Diagnóstico
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mb="lg"
                maw={600}
                mx="auto"
            >
                Em 30 minutos, vamos entender seus principais desafios e identificar onde pode haver valor escondido no
                seu negócio. Sem compromisso.
            </Text>

            {/* WhatsApp CTA */}
            <Stack
                align="center"
                mb={50}
            >
                <Button
                    component="a"
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    color="green"
                    leftSection={<IconBrandWhatsapp size={24} />}
                    // style={{
                    //     background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                    // }}
                >
                    Fale Conosco pelo WhatsApp
                </Button>
                <Text
                    size="sm"
                    c="dimmed"
                >
                    Ou agende abaixo no horário que preferir
                </Text>
            </Stack>

            {/* Google Calendar Embed */}
            <Box
                maw={800}
                mx="auto"
            >
                <iframe
                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0EuOqah9XqQ72XikgQrE1DzJhtneH62PGApC0eXkfo-WCrw5LNjqun9dLwxl-cPoABmv8eVzMy?gv=true"
                    style={{ border: 0, width: '100%', height: 700 }}
                    title="Agendar Conversa de Diagnóstico"
                />
            </Box>
            {/* </Container> */}
        </Box>
    )
}
