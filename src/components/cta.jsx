import { Box, Title, Text, Button, Group, Container, SimpleGrid, useMantineTheme } from '@mantine/core'
import { IconCalendar, IconMessageCircle } from '@tabler/icons-react'

export default function CTA() {
    const theme = useMantineTheme()
    const whatsappMessage = encodeURIComponent(
        'Olá! Gostaria de agendar uma conversa para diagnóstico do meu negócio. Podemos conversar?'
    )
    const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

    return (
        <Box
            component="section"
            aria-label="Call to action"
            py={80}
            bg="gray.0"
            bd={{ top: `1px solid ${theme.colors.gray[2]}`, bottom: `1px solid ${theme.colors.gray[2]}` }}
        >
            <Container size="md">
                <Title
                    order={2}
                    size={40}
                    fw={900}
                    lh={1.1}
                    ta="center"
                    mb="xl"
                >
                    Seu Próximo Nível Operacional Começa Com Uma Conversa de 30 Minutos.
                </Title>

                <Text
                    size="xl"
                    mb={40}
                    opacity={0.9}
                    maw={700}
                    mx="auto"
                >
                    Sem pressão de vendas. Apenas um diagnóstico honesto para identificar onde seu negócio está vazando
                    lucro e como um sistema real pode estancar esse dreno.
                </Text>

                <Group
                    justify="center"
                    gap="md"
                    mb={60}
                >
                    <Button
                        component="a"
                        href="/#contato"
                        size="xl"
                        variant="outline"
                        c="dark"
                        leftSection={<IconCalendar size={20} />}
                    >
                        Agendar Diagnóstico Gratuito →
                    </Button>
                    {/* <Button
                        component="a"
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="xl"
                        variant="outline"
                        color="gray.0"
                        leftSection={<IconMessageCircle size={20} />}
                    >
                        Conversar via WhatsApp
                    </Button> */}
                </Group>

                <SimpleGrid
                    cols={{ base: 1, sm: 3 }}
                    spacing="xl"
                >
                    <Box ta="center">
                        <Title
                            order={3}
                            size="h1"
                            fw={900}
                            c="dark"
                            mb={4}
                        >
                            4+
                        </Title>
                        <Text
                            size="sm"
                            c="dimmed"
                            fw={700}
                            tt="uppercase"
                        >
                            Diagnósticos Realizados
                        </Text>
                    </Box>
                    <Box ta="center">
                        <Title
                            order={3}
                            size="h1"
                            fw={900}
                            c="dark"
                            mb={4}
                        >
                            2-3 Semanas
                        </Title>
                        <Text
                            size="sm"
                            c="dimmed"
                            fw={700}
                            tt="uppercase"
                        >
                            Para Primeiros Resultados
                        </Text>
                    </Box>
                    <Box ta="center">
                        <Title
                            order={3}
                            size="h1"
                            fw={900}
                            c="dark"
                            mb={4}
                        >
                            24/7
                        </Title>
                        <Text
                            size="sm"
                            c="dimmed"
                            fw={700}
                            tt="uppercase"
                        >
                            Sem Interrupção no Seu Negócio
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
