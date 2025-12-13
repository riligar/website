import {
    Box,
    Title,
    Text,
    Container,
    Paper,
    SimpleGrid,
    ThemeIcon,
    rem,
    Badge,
    Group,
    List,
    Button,
} from '@mantine/core'
import { IconRocket, IconRefresh, IconChartLine, IconCheck, IconCalendar } from '@tabler/icons-react'

const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de entender melhor o modelo de investimento da RiLiGar. Podemos conversar?'
)
const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

const phases = [
    {
        id: 'setup',
        icon: IconRocket,
        title: 'Setup Inicial',
        subtitle: 'Diagnóstico + Implementação',
        description:
            'Investimento único para diagnosticar seu negócio, redesenhar processos e implementar a solução. Pagamento pode ser parcelado conforme entregas.',
        highlights: [
            'Diagnóstico profundo do negócio',
            'Redesenho de processos',
            'Implementação completa',
            'Treinamento da equipe',
        ],
        color: 'blue',
    },
    {
        id: 'manutencao',
        icon: IconRefresh,
        title: 'Manutenção Contínua',
        subtitle: 'Evolução + Suporte',
        description:
            'Valor mensal acessível para manter a solução funcionando, resolver problemas e evoluir conforme seu negócio cresce. Sem surpresas.',
        highlights: ['Suporte prioritário', 'Atualizações incluídas', 'Monitoramento proativo', 'Evoluções mensais'],
        color: 'teal',
    },
    {
        id: 'resultado',
        icon: IconChartLine,
        title: 'Baseado em Resultado',
        subtitle: 'Parceria Real',
        description:
            'Em projetos maiores, parte do investimento pode ser vinculada aos resultados que entregamos. Se você ganha mais, nós também ganhamos.',
        highlights: [
            'Alinhamento de interesses',
            'Risco compartilhado',
            'Foco em impacto real',
            'Parceria de longo prazo',
        ],
        color: 'green',
    },
]

export default function PricingModel() {
    return (
        <Box
            component="section"
            aria-label="Modelo de investimento"
            py={80}
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
                    Modelo de Investimento
                </Badge>
            </Group>

            <Title
                order={2}
                ta="center"
                mb="md"
                size={{ base: 28, sm: 32, md: 36 }}
            >
                Tecnologia Que Cabe no Seu Bolso
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mb={60}
                maw={700}
                mx="auto"
            >
                Não cobramos por hora nem por funcionalidade. Nosso modelo é transparente: um setup inicial para
                resolver o problema, e manutenções acessíveis para manter tudo funcionando. Simples assim.
            </Text>

            <SimpleGrid
                cols={{ base: 1, md: 3 }}
                spacing="lg"
            >
                {phases.map(phase => (
                    <Paper
                        key={phase.id}
                        p="xl"
                        radius="md"
                        style={{
                            border: `2px solid var(--mantine-color-${phase.color}-2)`,
                            background: `linear-gradient(180deg, var(--mantine-color-${phase.color}-0) 0%, transparent 100%)`,
                        }}
                    >
                        <ThemeIcon
                            size={48}
                            radius="md"
                            variant="light"
                            color={phase.color}
                            mb="md"
                        >
                            <phase.icon
                                style={{ width: rem(24), height: rem(24) }}
                                stroke={2}
                            />
                        </ThemeIcon>

                        <Text
                            size="xl"
                            fw={700}
                            mb={4}
                        >
                            {phase.title}
                        </Text>

                        <Text
                            size="sm"
                            c={phase.color}
                            fw={600}
                            mb="md"
                        >
                            {phase.subtitle}
                        </Text>

                        <Text
                            size="sm"
                            c="dimmed"
                            mb="lg"
                        >
                            {phase.description}
                        </Text>

                        <List
                            spacing="xs"
                            size="sm"
                            icon={
                                <ThemeIcon
                                    color={phase.color}
                                    size={20}
                                    radius="xl"
                                    variant="light"
                                >
                                    <IconCheck
                                        style={{ width: rem(12), height: rem(12) }}
                                        stroke={3}
                                    />
                                </ThemeIcon>
                            }
                        >
                            {phase.highlights.map((item, index) => (
                                <List.Item key={index}>{item}</List.Item>
                            ))}
                        </List>
                    </Paper>
                ))}
            </SimpleGrid>

            <Paper
                mt={40}
                p="lg"
                radius="md"
                style={{
                    border: '1px solid #e9ecef',
                    textAlign: 'center',
                }}
            >
                <Text
                    size="lg"
                    fw={600}
                    mb="xs"
                >
                    Todos podem ser nossos clientes
                </Text>
                <Text
                    size="sm"
                    c="dimmed"
                    maw={600}
                    mx="auto"
                    mb="lg"
                >
                    Desde pequenos negócios até grandes empresas, adaptamos o modelo ao seu momento. O importante é que
                    o investimento faça sentido e gere retorno real.
                </Text>
                <Button
                    component="a"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="md"
                    variant="light"
                    leftSection={<IconCalendar style={{ width: rem(18), height: rem(18) }} />}
                >
                    Conversar Sobre Investimento
                </Button>
            </Paper>
            {/* </Container> */}
        </Box>
    )
}
