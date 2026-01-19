import {
    Box,
    Title,
    Text,
    Container,
    SimpleGrid,
    ThemeIcon,
    Badge,
    Group,
    Button,
    useMantineTheme,
} from '@mantine/core'
import { IconMessageCircle, IconBulb, IconRocket, IconTrendingUp, IconCalendar } from '@tabler/icons-react'

const whatsappMessage = encodeURIComponent('Olá! Gostaria de agendar um diagnóstico com a RiLiGar. Podemos conversar?')
const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

const steps = [
    {
        id: 'diagnostico',
        icon: IconMessageCircle,
        title: 'Diagnóstico Profundo',
        description:
            'Não perguntamos "o que você quer automatizar?" — perguntamos "o que está impedindo seu negócio de atingir seus objetivos?" Analisamos processos e quantificamos gargalos.',
        number: '01',
    },
    {
        id: 'redesenho',
        icon: IconBulb,
        title: 'Redesenho de Processos',
        description:
            'Antes de escolher qualquer tecnologia, redesenhamos como o processo DEVERIA funcionar. Um processo ruim automatizado ainda é um processo ruim — só mais rápido.',
        number: '02',
    },
    {
        id: 'implementacao',
        icon: IconRocket,
        title: 'Implementação Focada em Resultados',
        description:
            'Construímos a solução que habilita o processo redesenhado. A tecnologia é um meio, não o objetivo. Medimos sucesso por impacto de negócio, não por funcionalidades.',
        number: '03',
    },
    {
        id: 'parceria',
        icon: IconTrendingUp,
        title: 'Parceria de Transformação',
        description:
            'Não somos fornecedores de serviços técnicos — somos parceiros na transformação do seu negócio. Acompanhamos resultados e evoluímos as soluções conforme você cresce.',
        number: '04',
    },
]

export default function Process() {
    const theme = useMantineTheme()

    return (
        <Box
            component="section"
            aria-label="Our development process"
            py={80}
            bg="gray.0"
            bd={{ top: `1px solid ${theme.colors.gray[2]}`, bottom: `1px solid ${theme.colors.gray[2]}` }}
        >
            <Container size="xl">
                <Group
                    justify="center"
                    mb="md"
                >
                    <Badge
                        variant="light"
                        color="gray"
                        size="lg"
                    >
                        Nosso Processo
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                    size={{ base: 28, sm: 32, md: 36 }}
                    c="dark"
                >
                    De Problema Invisível a Resultado Mensurável
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                    fz="lg"
                >
                    Primeiro entendemos, depois redesenhamos, e só então implementamos. A tecnologia é sempre o último
                    passo, nunca o primeiro.
                </Text>

                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 4 }}
                    spacing="xl"
                >
                    {steps.map(step => (
                        <Box
                            key={step.id}
                            pos="relative"
                        >
                            <Text
                                fz={72}
                                fw={900}
                                pos="absolute"
                                top={-24}
                                left={0}
                                c="gray.2"
                                lh={1}
                                style={{ zIndex: 0, opacity: 0.5 }}
                            >
                                {step.number}
                            </Text>

                            <ThemeIcon
                                size={60}
                                radius="md"
                                variant="light"
                                color="gray"
                                mb="md"
                                pos="relative"
                                style={{ zIndex: 1 }}
                            >
                                <step.icon
                                    size={30}
                                    stroke={1.5}
                                />
                            </ThemeIcon>

                            <Title
                                order={3}
                                size="lg"
                                fw={700}
                                mb="xs"
                                c="dark"
                            >
                                {step.title}
                            </Title>

                            <Text
                                size="sm"
                                c="dimmed"
                                lh={1.6}
                            >
                                {step.description}
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
                        leftSection={
                            <IconCalendar
                                size={20}
                                stroke={1.5}
                            />
                        }
                    >
                        Iniciar Diagnóstico
                    </Button>
                </Group>
            </Container>
        </Box>
    )
}
