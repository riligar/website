import {
    Box,
    Title,
    Text,
    Container,
    Paper,
    SimpleGrid,
    ThemeIcon,
    Badge,
    Group,
    List,
    Button,
    useMantineTheme,
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
    },
    {
        id: 'manutencao',
        icon: IconRefresh,
        title: 'Manutenção Contínua',
        subtitle: 'Evolução + Suporte',
        description:
            'Valor mensal acessível para manter a solução funcionando, resolver problemas e evoluir conforme seu negócio cresce. Sem surpresas.',
        highlights: ['Suporte prioritário', 'Atualizações incluídas', 'Monitoramento proativo', 'Evoluções mensais'],
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
    },
]

export default function PricingModel() {
    const theme = useMantineTheme()

    return (
        <Box
            component="section"
            aria-label="Tecnologia Que Se Paga"
            py={80}
        >
            <Group
                justify="center"
                mb="md"
            >
                <Badge
                    variant="light"
                    color="gray"
                    size="lg"
                >
                    Tecnologia Que Se Paga
                </Badge>
            </Group>

            <Title
                order={2}
                ta="center"
                mb="md"
                size={{ base: 28, sm: 32, md: 36 }}
                c="dark"
            >
                Tecnologia Que Cabe no Seu Bolso
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mb={60}
                maw={700}
                mx="auto"
                fz="lg"
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
                        bg="white"
                        bd={`1px solid ${theme.colors.gray[2]}`}
                        style={{ transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
                    >
                        <ThemeIcon
                            size={48}
                            radius="md"
                            variant="light"
                            color="gray"
                            mb="md"
                        >
                            <phase.icon
                                size={24}
                                stroke={1.5}
                            />
                        </ThemeIcon>

                        <Text
                            size="xl"
                            fw={700}
                            mb={4}
                            c="dark"
                        >
                            {phase.title}
                        </Text>

                        <Text
                            size="sm"
                            c="dimmed"
                            fw={600}
                            mb="md"
                            tt="uppercase"
                        >
                            {phase.subtitle}
                        </Text>

                        <Text
                            size="sm"
                            c="dimmed"
                            mb="lg"
                            lh={1.6}
                        >
                            {phase.description}
                        </Text>

                        <List
                            spacing="xs"
                            size="sm"
                            icon={
                                <ThemeIcon
                                    color="gray"
                                    size={20}
                                    radius="xl"
                                    variant="light"
                                >
                                    <IconCheck
                                        size={12}
                                        stroke={1.5}
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
                p="xl"
                radius="md"
                bg="gray.0"
                bd={`1px solid ${theme.colors.gray[2]}`}
                style={{ textAlign: 'center' }}
            >
                <Title
                    order={3}
                    size="lg"
                    fw={700}
                    mb="xs"
                    c="dark"
                >
                    Todos podem ser nossos clientes
                </Title>
                <Text
                    size="sm"
                    c="dimmed"
                    maw={600}
                    mx="auto"
                    mb="lg"
                    lh={1.6}
                >
                    Desde pequenos negócios até grandes empresas, adaptamos o modelo ao seu momento. O importante é que
                    o investimento faça sentido e gere retorno real.
                </Text>
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
                    Vamos Conversar?
                </Button>
            </Paper>
        </Box>
    )
}
