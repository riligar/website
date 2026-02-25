import { Title, Grid, Box, Text, Button, Group } from '@mantine/core'
import { IconRocket, IconMessageCircle } from '@tabler/icons-react'

export default function Hero() {
    const whatsappMessage = encodeURIComponent(
        'Olá! Gostaria de conversar sobre como a RiLiGar pode ajudar meu negócio. Podemos agendar?'
    )
    const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

    return (
        <Box
            component="section"
            aria-label="Hero section"
            mt={{ base: 40, md: 120 }}
            mb={{ base: 40, md: 120 }}
            style={{ textAlign: 'center' }} // Zen: Centralized stage approach if desired, or left aligned but clean. Let's keep it clean.
        >
            <Grid
                align="center"
                gutter="xl"
            >
                <Grid.Col
                    span={12}
                    order={1}
                >
                    <Title
                        order={1}
                        component="h1"
                        style={{ fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1, textWrap: 'balance' }} // Big Type Metrics
                        mx="auto"
                        maw={900}
                    >
                        Pare de Automatizar Processos Quebrados.{' '}
                        <Text
                            component="span"
                            inherit
                            c="dark"
                            fw={900}
                        >
                            Redesenhamos Sua Operação Para o Lucro Real.
                        </Text>
                    </Title>
                    <Text
                        size="xl" // Larger base font for subtitle
                        c="gray.6" // Darker than dimmed
                        mt="xl"
                        mx="auto"
                        maw={700}
                        style={{ fontWeight: 500, lineHeight: 1.6 }}
                    >
                        Diagnóstico profundo e redesenho operacional para escalar com qualidade. Menos ferramentas,
                    </Text>

                    <Group
                        mt={60}
                        gap="lg"
                        justify="center"
                    >
                        <Button
                            component="a"
                            href="/#contato"
                            size="xl" // Zen actions: large hit areas
                            color="dark"
                            radius="sm"
                            leftSection={
                                <IconRocket
                                    size={20}
                                    stroke={2}
                                />
                            }
                        >
                            Agendar Diagnóstico Gratuito →
                        </Button>
                        <Button
                            component="a"
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="xl"
                            variant="default" // Outlined subtle style
                            radius="sm"
                            leftSection={
                                <IconMessageCircle
                                    size={20}
                                    stroke={2}
                                />
                            }
                        >
                            Conversar com um Especialista
                        </Button>
                    </Group>
                </Grid.Col>
            </Grid>
        </Box>
    )
}
