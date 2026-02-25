import {
    Box,
    Title,
    Text,
    Container,
    Card,
    SimpleGrid,
    Badge,
    Group,
    List,
    ThemeIcon,
    Button,
    useMantineTheme,
} from '@mantine/core'
import {
    IconCheck,
    IconRobot,
    IconChartBar,
    IconCloudComputing,
    IconSparkles,
    IconArrowRight,
} from '@tabler/icons-react'

const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de discutir como a RiLiGar pode resolver desafios semelhantes no meu negócio. Podemos conversar?'
)
const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

const useCases = [
    {
        id: 'escritorio-advocacia',
        icon: IconRobot,
        badge: 'Escritório de Advocacia',
        title: 'Qualificação Instantânea de Leads',
        description:
            'Um escritório perdia 15h/semana processando leads manuais. O problema? Falta de critérios de triagem. Redesenhamos o fluxo de entrada; a automação foi apenas a ferramenta. Resultado: Advogados focados apenas em casos de alto ticket.',
        benefits: [
            '15h economizadas por semana',
            'Triagem 24/7 sem erros',
            'Velocidade de contato imbatível',
            'Foco total em peticionamento',
        ],
    },
    {
        id: 'ecommerce',
        icon: IconChartBar,
        badge: 'E-commerce',
        title: 'Decisões Baseadas em Lucro, Não Planilhas',
        description:
            'Uma operação de $50M/ano voava às cegas com dados obsoletos. Criamos uma arquitetura de dados em tempo real. O dono agora decide baseado em margem líquida por SKU, não em faturamento bruto.',
        benefits: [
            'Margem líquida em tempo real',
            'Previsibilidade de estoque',
            'Redução de capital parado',
            'Dashboards estratégicos',
        ],
    },
    {
        id: 'care-homes',
        icon: IconCloudComputing,
        badge: 'Rede de Casas de Repouso',
        title: 'Recuperando $100K em Inventário',
        description:
            'Acreditavam que faltava controle. O diagnóstico revelou falta de processos de recompra. Estabelecemos protocolos rígidos e automação de gatilhos. O ROI foi imediato pela eliminação de compras ad-hoc.',
        benefits: ['$100K de impacto anual', 'Estoque zero ruptura', 'Auditoria automatizada', 'Eficiência de compra'],
    },
    {
        id: 'contabilidade',
        icon: IconSparkles,
        badge: 'Escritório de Contabilidade',
        title: 'Satisfação do Cliente Através do Sistema',
        description:
            'O churn estava alto por "falta de atenção". Redesenhamos a comunicação para ser proativa e baseada em entregáveis. A automação garantiu que o cliente se sinta único, sem sobrecarregar o time contábil.',
        benefits: [
            'Churn reduzido drasticamente',
            'Elogios proativos',
            'Escalabilidade de atendimento',
            'Processos transparentes',
        ],
    },
]

export default function UseCases() {
    const theme = useMantineTheme()

    return (
        <Box
            component="section"
            aria-label="Real-world use cases"
            py={120}
        >
            <style>{`
                .usecase-card {
                    transition: border-color 0.4s ease;
                }
                .usecase-card:hover {
                    border-color: #212121;
                }
                .cta-button {
                    transition: transform 0.3s ease, background-color 0.3s ease;
                }
                .cta-button:hover {
                    transform: scale(1.05);
                }
            `}</style>

            <Container size="lg">
                <Group
                    justify="center"
                    mb="md"
                >
                    <Badge
                        variant="dot"
                        color="dark"
                        size="lg"
                    >
                        Casos Reais de Transformação
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                    style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-0.04em' }}
                >
                    Onde o Diagnóstico Virou Lucro
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={80}
                    maw={700}
                    mx="auto"
                    fz="lg"
                >
                    Estes não são apenas projetos de software. São intervenções operacionais onde a tecnologia foi o
                    último passo de uma transformação profunda de resultados.
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 2 }}
                    spacing="xl"
                >
                    {useCases.map(useCase => (
                        <Card
                            key={useCase.id}
                            className="usecase-card"
                            radius="sm"
                            padding="xl"
                            bg="white"
                            bd={`1px solid ${theme.colors.gray[2]}`}
                        >
                            <Group
                                mb="xl"
                                justify="space-between"
                                align="center"
                            >
                                <ThemeIcon
                                    size={48}
                                    radius="sm"
                                    variant="light"
                                    color="gray"
                                >
                                    <useCase.icon
                                        size={28}
                                        stroke={1.5}
                                    />
                                </ThemeIcon>
                                <Badge
                                    size="sm"
                                    variant="dot"
                                    color="gray"
                                >
                                    {useCase.badge}
                                </Badge>
                            </Group>

                            <Title
                                order={3}
                                size="h3"
                                fw={800}
                                mb="sm"
                                style={{ letterSpacing: '-0.02em', color: theme.black }}
                            >
                                {useCase.title}
                            </Title>

                            <Text
                                size="md"
                                c="dimmed"
                                mb="xl"
                                lh={1.6}
                                style={{ flexGrow: 1 }}
                            >
                                {useCase.description}
                            </Text>

                            <Box style={{ borderTop: `1px solid ${theme.colors.gray[2]}`, paddingTop: '16px' }}>
                                <Text
                                    data-zen-subtitle="true"
                                    mb="sm"
                                >
                                    Resultados:
                                </Text>

                                <List
                                    spacing="xs"
                                    size="sm"
                                    icon={
                                        <ThemeIcon
                                            size={20}
                                            radius="xl"
                                            variant="light"
                                            color="gray"
                                        >
                                            <IconCheck
                                                size={12}
                                                stroke={1.5}
                                            />
                                        </ThemeIcon>
                                    }
                                >
                                    {useCase.benefits.map((benefit, idx) => (
                                        <List.Item key={idx}>
                                            <Text
                                                fw={600}
                                                c="dark"
                                            >
                                                {benefit}
                                            </Text>
                                        </List.Item>
                                    ))}
                                </List>
                            </Box>
                        </Card>
                    ))}
                </SimpleGrid>

                <Box
                    mt={100}
                    ta="center"
                >
                    <Text
                        data-zen-subtitle="true"
                        mb="md"
                        c="dark"
                    >
                        Pronto Para Ser o Próximo Estudo de Caso?
                    </Text>
                    <Group justify="center">
                        <Button
                            component="a"
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="xl"
                            color="dark"
                            radius="sm"
                            className="cta-button"
                            rightSection={
                                <IconArrowRight
                                    size={20}
                                    stroke={2}
                                />
                            }
                        >
                            Agendar Diagnóstico Estratégico
                        </Button>
                    </Group>
                </Box>
            </Container>
        </Box>
    )
}
