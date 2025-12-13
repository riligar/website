import { Box, Title, Text, Container, Badge, Group } from '@mantine/core'

export default function ContactSection() {
    return (
        <Box
            component="section"
            id="contato"
            py="xl"
        >
            <Container size="xl">
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
                    mb={50}
                    maw={600}
                    mx="auto"
                >
                    Em 30 minutos, vamos entender seus principais desafios e identificar onde pode haver valor escondido
                    no seu negócio. Sem compromisso.
                </Text>

                {/* Google Calendar Embed */}
                <Box
                    maw={800}
                    mx="auto"
                >
                    <iframe
                        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0EuOqah9XqQ72XikgQrE1DzJhtneH62PGApC0eXkfo-WCrw5LNjqun9dLwxl-cPoABmv8eVzMy?gv=true"
                        style={{ border: 0, width: '100%', height: 600 }}
                        title="Agendar Conversa de Diagnóstico"
                    />
                </Box>
            </Container>
        </Box>
    )
}
