import { Title, Grid, Box, Text, List, ThemeIcon, Image, rem, Button, Group } from '@mantine/core'
import { IconCheck, IconRocket, IconMessageCircle } from '@tabler/icons-react'

export default function Hero() {
    const whatsappMessage = encodeURIComponent(
        'Olá! Gostaria de conversar sobre como a RiLiGar pode ajudar meu negócio. Podemos agendar?'
    )
    const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

    return (
        <Box
            component="section"
            aria-label="Hero section"
            mt={80}
            mb={80}
        >
            <Grid align="center">
                <Grid.Col
                    span={{ base: 12, sm: 6, md: 7 }}
                    order={{ base: 2, sm: 2, md: 1 }}
                >
                    <Title
                        order={1}
                        component="h1"
                        style={{ lineHeight: 1.2 }}
                    >
                        <Text
                            component="span"
                            inherit
                            c="red"
                        >
                            Entendemos
                        </Text>{' '}
                        Seu Negócio{' '}
                        <Text
                            component="span"
                            inherit
                            c="red"
                        >
                            Antes
                        </Text>{' '}
                        de Propor Soluções
                    </Title>
                    <Text
                        size="lg"
                        c="dimmed"
                        mt="xl"
                    >
                        Antes de automatizar qualquer coisa, diagnosticamos o que realmente está impedindo seu negócio
                        de crescer. Depois, criamos soluções que geram impacto mensurável — não apenas economia de
                        tempo, mas aumento de receita, redução de custos e vantagens competitivas.
                    </Text>

                    <List
                        mt={40}
                        spacing="lg"
                        size="md"
                        icon={
                            <ThemeIcon
                                size={24}
                                radius="xl"
                                variant="light"
                            >
                                <IconCheck
                                    style={{ width: rem(14), height: rem(14) }}
                                    stroke={2}
                                />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <Text
                                fw={600}
                                component="span"
                            >
                                Diagnóstico de Processos
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                Identificamos gargalos que você não sabia que existiam e quantificamos o impacto real no
                                seu faturamento
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text
                                fw={600}
                                component="span"
                            >
                                Redesenho de Operações
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                Reestruturamos processos para serem mais eficazes, não apenas mais rápidos
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text
                                fw={600}
                                component="span"
                            >
                                Vantagem Competitiva
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                Criamos capacidades que seus concorrentes não conseguem replicar facilmente
                            </Text>
                        </List.Item>
                    </List>

                    <Group
                        mt={40}
                        gap="md"
                        style={{ flexWrap: 'wrap' }}
                    >
                        <Button
                            component="a"
                            href="/contact"
                            size="lg"
                            leftSection={<IconRocket style={{ width: rem(20), height: rem(20) }} />}
                            style={{ flex: '1 1 auto', minWidth: '200px' }}
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
                            leftSection={<IconMessageCircle style={{ width: rem(20), height: rem(20) }} />}
                            style={{ flex: '1 1 auto', minWidth: '200px' }}
                        >
                            Fale Conosco
                        </Button>
                    </Group>
                </Grid.Col>

                <Grid.Col
                    span={{ base: 12, sm: 6, md: 5 }}
                    order={{ base: 1, sm: 1, md: 2 }}
                >
                    <Box
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <Image
                            src="/image/home-hero.svg"
                            alt="RiLiGar Solutions"
                            style={{
                                width: '100%',
                                maxWidth: '500px',
                                height: 'auto',
                            }}
                        />
                    </Box>
                </Grid.Col>
            </Grid>
        </Box>
    )
}
