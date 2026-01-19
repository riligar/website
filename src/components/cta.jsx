import { Box, Title, Text, Button, Group, Container, SimpleGrid, useMantineTheme } from '@mantine/core'
import { IconRocket, IconCalendar } from '@tabler/icons-react'

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
                    ta="center"
                    size={{ base: 28, sm: 36, md: 42 }}
                    mb="lg"
                    c="dark"
                >
                    Qual Problema Está Custando Mais do Que Deveria?
                </Title>

                <Text
                    size="lg"
                    c="dimmed"
                    ta="center"
                    mb={50}
                    maw={700}
                    mx="auto"
                    fz="xl"
                    lh={1.6}
                >
                    A maioria dos empresários sabe que algo poderia funcionar melhor — mas não consegue identificar
                    exatamente o quê. Em uma conversa de 30 minutos, vamos diagnosticar seus maiores gargalos e mostrar
                    onde está o valor escondido no seu negócio.
                </Text>

                <Group
                    justify="center"
                    gap="md"
                    mb={60}
                >
                    <Button
                        component="a"
                        href="/contact"
                        size="lg"
                        leftSection={
                            <IconRocket
                                size={20}
                                stroke={1.5}
                            />
                        }
                    >
                        Agendar Diagnóstico
                    </Button>
                    <Button
                        component="a"
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="lg"
                        variant="outline"
                        leftSection={
                            <IconCalendar
                                size={20}
                                stroke={1.5}
                            />
                        }
                    >
                        Agendar Conversa
                    </Button>
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
