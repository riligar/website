import { Box, Title, Text, Container, SimpleGrid, Card, ThemeIcon, rem } from '@mantine/core'
import { IconTarget, IconCode, IconUsers, IconHeart, IconBrain, IconTrendingUp } from '@tabler/icons-react'

const values = [
    {
        id: 'diagnostico',
        icon: IconTarget,
        title: 'Diagnóstico Primeiro',
        description:
            'Antes de propor qualquer solução, entendemos profundamente o problema. Identificamos causas raiz, não sintomas. A tecnologia vem depois.',
    },
    {
        id: 'resultados',
        icon: IconCode,
        title: 'Resultados Mensuráveis',
        description:
            'Medimos sucesso por impacto de negócio: aumento de receita, redução de custos, vantagem competitiva. Não por linhas de código ou funcionalidades.',
    },
    {
        id: 'parceria',
        icon: IconUsers,
        title: 'Parceria, Não Fornecimento',
        description:
            'Não somos fornecedores técnicos. Somos parceiros na transformação do seu negócio. Trabalhamos lado a lado para garantir que a solução realmente funcione.',
    },
    {
        id: 'transparencia',
        icon: IconHeart,
        title: 'Transparência Total',
        description:
            'Comunicação honesta sobre prazos, limitações e expectativas. Se algo não fizer sentido para seu negócio, vamos dizer — mesmo que signifique menos trabalho para nós.',
    },
    {
        id: 'simplicidade',
        icon: IconBrain,
        title: 'Simplicidade Intencional',
        description:
            'A solução mais elegante é geralmente a mais simples. Evitamos complexidade desnecessária que aumenta custos e dificulta manutenção.',
    },
    {
        id: 'evolucao',
        icon: IconTrendingUp,
        title: 'Evolução Contínua',
        description:
            'Seu negócio muda, suas soluções devem acompanhar. Projetamos para evolução, não para obsolescência. Acompanhamos resultados e ajustamos conforme necessário.',
    },
]

export default function AboutValues() {
    return (
        <Box
            p={80}
            style={{
                background: 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
        >
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    Nossos Valores
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    Esses princípios guiam cada diagnóstico e cada solução que criamos.
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 2, lg: 3 }}
                    spacing="lg"
                >
                    {values.map(value => (
                        <Card
                            key={value.id}
                            shadow="sm"
                            padding="lg"
                            radius="md"
                            withBorder
                        >
                            <ThemeIcon
                                size={50}
                                radius="md"
                                variant="light"
                                mb="md"
                            >
                                <value.icon style={{ width: rem(26), height: rem(26) }} />
                            </ThemeIcon>

                            <Text
                                fw={600}
                                size="lg"
                                mb="xs"
                            >
                                {value.title}
                            </Text>

                            <Text
                                size="sm"
                                c="dimmed"
                            >
                                {value.description}
                            </Text>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
