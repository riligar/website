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
        title: 'Diagnóstico Brutalmente Honesto',
        description:
            'Não perguntamos "o que você quer construir?" — perguntamos "o que está impedindo seu negócio de lucrar 10x mais?". Mapeamos gargalos que você nem sabia que existiam.',
        number: '01',
    },
    {
        id: 'redesenho',
        icon: IconBulb,
        title: 'Redesenho de Processos',
        description:
            'Automação sem redesenho é acelerar o erro. Criamos fluxos otimizados para a escala, garantindo que o sistema novo não herde vícios do antigo.',
        number: '02',
    },
    {
        id: 'implementacao',
        icon: IconRocket,
        title: 'Implementação de Sistemas',
        description:
            'Construímos ferramentas pragmáticas que habilitam o processo redesenhado. Tecnologia focada em ROI e impacto, sem complexidade desnecessária.',
        number: '03',
    },
    {
        id: 'parceria',
        icon: IconTrendingUp,
        title: 'Crescimento Composto',
        description:
            'Não somos fornecedores, somos sua célula de tecnologia de elite. Evoluímos seus sistemas conforme sua operação cresce e novos desafios surgem.',
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
                        Nosso Workflow
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                    size={{ base: 28, sm: 32, md: 36 }}
                    c="dark"
                >
                    De Gargalos Invisíveis a Resultados Mensuráveis
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                    fz="lg"
                >
                    Primeiro entendemos, depois simplificamos. A tecnologia é o enabler final, nunca o ponto de partida.
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
