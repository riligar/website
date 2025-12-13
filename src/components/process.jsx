import { Box, Title, Text, Container, SimpleGrid, ThemeIcon, rem, Badge, Group, Button } from '@mantine/core'
import { IconMessageCircle, IconBulb, IconRocket, IconTrendingUp, IconCalendar } from '@tabler/icons-react'
import { Trans, useLingui } from '@lingui/react/macro'

const whatsappMessage = encodeURIComponent('Olá! Gostaria de agendar um diagnóstico com a RiLiGar. Podemos conversar?')
const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

const steps = [
    {
        id: 'diagnostico',
        icon: IconMessageCircle,
        titleKey: 'Diagnóstico Profundo',
        descriptionKey:
            'Não perguntamos "o que você quer automatizar?" — perguntamos "o que está impedindo seu negócio de atingir seus objetivos?" Analisamos processos e quantificamos gargalos.',
        number: '01',
    },
    {
        id: 'redesenho',
        icon: IconBulb,
        titleKey: 'Redesenho de Processos',
        descriptionKey:
            'Antes de escolher qualquer tecnologia, redesenhamos como o processo DEVERIA funcionar. Um processo ruim automatizado ainda é um processo ruim — só mais rápido.',
        number: '02',
    },
    {
        id: 'implementacao',
        icon: IconRocket,
        titleKey: 'Implementação Focada em Resultados',
        descriptionKey:
            'Construímos a solução que habilita o processo redesenhado. A tecnologia é um meio, não o objetivo. Medimos sucesso por impacto de negócio, não por funcionalidades.',
        number: '03',
    },
    {
        id: 'parceria',
        icon: IconTrendingUp,
        titleKey: 'Parceria de Transformação',
        descriptionKey:
            'Não somos fornecedores de serviços técnicos — somos parceiros na transformação do seu negócio. Acompanhamos resultados e evoluímos as soluções conforme você cresce.',
        number: '04',
    },
]

export default function Process() {
    return (
        <Box
            component="section"
            aria-label="Our development process"
            py={80}
            style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(249, 250, 251, 1) 100%)',
            }}
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
                        <Trans>Nosso Processo</Trans>
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                    size={{ base: 28, sm: 32, md: 36 }}
                >
                    <Trans>De Problema Invisível a Resultado Mensurável</Trans>
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    <Trans>
                        Primeiro entendemos, depois redesenhamos, e só então implementamos. A tecnologia é sempre o
                        último passo, nunca o primeiro.
                    </Trans>
                </Text>

                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 4 }}
                    spacing="xl"
                >
                    {steps.map(step => (
                        <Box
                            key={step.id}
                            style={{ position: 'relative' }}
                        >
                            <Text
                                size="64px"
                                fw={900}
                                style={{
                                    position: 'absolute',
                                    top: -20,
                                    left: 0,
                                    opacity: 0.1,
                                    lineHeight: 1,
                                }}
                            >
                                {step.number}
                            </Text>

                            <ThemeIcon
                                size={60}
                                radius="md"
                                variant="light"
                                mb="md"
                                style={{ position: 'relative', zIndex: 1 }}
                            >
                                <step.icon
                                    style={{ width: rem(30), height: rem(30) }}
                                    stroke={2}
                                />
                            </ThemeIcon>

                            <Text
                                size="lg"
                                fw={600}
                                mb="xs"
                            >
                                <Trans>{step.titleKey}</Trans>
                            </Text>

                            <Text
                                size="sm"
                                c="dimmed"
                            >
                                <Trans>{step.descriptionKey}</Trans>
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>

                <Group
                    justify="center"
                    mt={60}
                >
                    <Button
                        component="a"
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="lg"
                        leftSection={<IconCalendar style={{ width: rem(20), height: rem(20) }} />}
                    >
                        <Trans>Iniciar Diagnóstico</Trans>
                    </Button>
                </Group>
            </Container>
        </Box>
    )
}
