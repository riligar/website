import { Box, Title, Text, Button, Group, Container, SimpleGrid, rem } from '@mantine/core'
import { IconRocket, IconCalendar } from '@tabler/icons-react'

export default function CTA() {
    const whatsappMessage = encodeURIComponent(
        'Olá! Gostaria de agendar uma conversa para diagnóstico do meu negócio. Podemos conversar?'
    )
    const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

    return (
        <Box
            component="section"
            aria-label="Call to action"
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
                    Qual Problema Está Custando Mais do Que Deveria?
                </Title>

                <Text
                    size="lg"
                    c="dimmed"
                    ta="center"
                    mb={40}
                    maw={600}
                    mx="auto"
                >
                    A maioria dos empresários sabe que algo poderia funcionar melhor — mas não consegue identificar
                    exatamente o quê. Em uma conversa de 30 minutos, vamos diagnosticar seus maiores gargalos e mostrar
                    onde está o valor escondido no seu negócio.
                </Text>

                <Group
                    justify="center"
                    gap="md"
                >
                    <Button
                        component="a"
                        href="/contact"
                        size="lg"
                        leftSection={<IconRocket style={{ width: rem(24), height: rem(24) }} />}
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
                        leftSection={<IconCalendar style={{ width: rem(24), height: rem(24) }} />}
                    >
                        Agendar Conversa
                    </Button>
                </Group>

                <SimpleGrid
                    cols={{ base: 1, sm: 3 }}
                    spacing={{ base: 'md', sm: 'xl' }}
                    mt={40}
                >
                    <Box ta="center">
                        <Text
                            size="xl"
                            fw={700}
                            c="blue"
                        >
                            4+
                        </Text>
                        <Text
                            size="sm"
                            c="dimmed"
                        >
                            Diagnósticos Realizados
                        </Text>
                    </Box>
                    <Box ta="center">
                        <Text
                            size="xl"
                            fw={700}
                            c="blue"
                        >
                            2-3 Weeks
                        </Text>
                        <Text
                            size="sm"
                            c="dimmed"
                        >
                            Para Primeiros Resultados
                        </Text>
                    </Box>
                    <Box ta="center">
                        <Text
                            size="xl"
                            fw={700}
                            c="blue"
                        >
                            24/7
                        </Text>
                        <Text
                            size="sm"
                            c="dimmed"
                        >
                            Sem Interrupção no Seu Negócio
                        </Text>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    )
}
