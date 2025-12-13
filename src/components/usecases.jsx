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
    rem,
    Button,
} from '@mantine/core'
import {
    IconCheck,
    IconRobot,
    IconChartBar,
    IconCloudComputing,
    IconSparkles,
    IconArrowRight,
} from '@tabler/icons-react'
import { Trans, useLingui } from '@lingui/react/macro'

const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de discutir como a RiLiGar pode resolver desafios semelhantes no meu negócio. Podemos conversar?'
)
const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

const useCases = [
    {
        id: 'escritorio-advocacia',
        icon: IconRobot,
        badgeKey: 'Escritório de Advocacia',
        titleKey: 'De Horas Manuais a Leads Qualificados em Segundos',
        descriptionKey:
            'Um escritório com 10 funcionários perdia horas processando leads manualmente. O problema real? Não sabiam quando enviar email, SMS ou passar para um advogado. Redesenhamos o fluxo de qualificação inteiro — a automação foi só o enabler.',
        benefits: [
            'Horas economizadas/semana',
            'Leads processados 24/7',
            'Menos erros humanos',
            'Equipe focada em casos',
        ],
    },
    {
        id: 'ecommerce',
        icon: IconChartBar,
        badgeKey: 'E-commerce',
        titleKey: 'De Decisões por Achismo a Dashboard Estratégico',
        descriptionKey:
            'Uma operação de $50M/ano tomava decisões baseadas em planilhas desatualizadas. Criamos visibilidade completa do pipeline de vendas — não por automatizar o existente, mas por redesenhar como a informação deveria fluir.',
        benefits: [
            'Visibilidade em tempo real',
            'Decisões baseadas em dados',
            'Previsibilidade de receita',
            'Equipe alinhada',
        ],
    },
    {
        id: 'care-homes',
        icon: IconCloudComputing,
        badgeKey: 'Rede de Casas de Repouso',
        titleKey: 'De $100K Perdidos a Inventário Inteligente',
        descriptionKey:
            'Queriam automatizar planilhas de inventário. Descobrimos: sem protocolos de recompra, decisões ad-hoc, e vendas prometendo entregas sem checar estoque. O problema real não era tracking — era processo. Resultado: $100K economizados ao ano.',
        benefits: ['$100K impacto anual', 'Recompra automática', 'Fluxo de aprovação', 'Dashboards de visibilidade'],
    },
    {
        id: 'contabilidade',
        icon: IconSparkles,
        badgeKey: 'Escritório de Contabilidade',
        titleKey: 'De Comunicação Genérica a Clientes Satisfeitos',
        descriptionKey:
            'Clientes reclamavam da frequência de atualizações — mas era da qualidade. Relatórios genéricos não respondiam o que queriam saber. Redesenhamos a comunicação inteira. A automação foi mínima; o impacto foi enorme.',
        benefits: ['Satisfação disparou', 'Comunicação clara', 'Menos reclamações', 'Clientes elogiam proativamente'],
    },
]

export default function UseCases() {
    return (
        <Box
            component="section"
            aria-label="Real-world use cases"
            py={80}
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
                        <Trans>Casos Reais de Transformação</Trans>
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                    size={{ base: 28, sm: 32, md: 36 }}
                >
                    <Trans>Como Resolvemos Problemas de Verdade</Trans>
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    <Trans>
                        Estes são exemplos reais de como o diagnóstico profundo revela problemas que ninguém sabia que
                        existiam — e como a solução é sempre muito mais do que automação.
                    </Trans>
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 2 }}
                    // spacing="lg"
                >
                    {useCases.map(useCase => (
                        <Card
                            key={useCase.id}
                            shadow="md"
                            radius="md"
                            padding="xl"
                            withBorder
                        >
                            <Group mb="md">
                                <useCase.icon
                                    style={{ width: rem(40), height: rem(40) }}
                                    stroke={2}
                                    color="#228be6"
                                />
                                <Badge
                                    size="sm"
                                    variant="light"
                                >
                                    <Trans>{useCase.badgeKey}</Trans>
                                </Badge>
                            </Group>

                            <Title
                                order={4}
                                mb="xs"
                            >
                                <Trans>{useCase.titleKey}</Trans>
                            </Title>

                            <Text
                                size="sm"
                                c="dimmed"
                                mb="md"
                            >
                                <Trans>{useCase.descriptionKey}</Trans>
                            </Text>

                            <Text
                                size="sm"
                                fw={600}
                                mb="xs"
                            >
                                <Trans>Resultados:</Trans>
                            </Text>

                            <List
                                spacing="xs"
                                size="sm"
                                icon={
                                    <ThemeIcon
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
                                {useCase.benefits.map((benefit, idx) => (
                                    <List.Item key={idx}>
                                        <Trans>{benefit}</Trans>
                                    </List.Item>
                                ))}
                            </List>
                        </Card>
                    ))}
                </SimpleGrid>

                <Group
                    justify="center"
                    mt={50}
                >
                    <Button
                        component="a"
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="lg"
                        variant="outline"
                        rightSection={<IconArrowRight style={{ width: rem(18), height: rem(18) }} />}
                    >
                        <Trans>Discutir Meu Caso</Trans>
                    </Button>
                </Group>
            </Container>
        </Box>
    )
}
