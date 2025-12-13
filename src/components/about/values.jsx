import { Box, Title, Text, Container, SimpleGrid, Card, ThemeIcon, rem } from '@mantine/core'
import { IconTarget, IconCode, IconUsers, IconHeart, IconBrain, IconTrendingUp } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

const values = [
    {
        id: 'diagnostico',
        icon: IconTarget,
        titleKey: 'Diagnóstico Primeiro',
        descriptionKey:
            'Antes de propor qualquer solução, entendemos profundamente o problema. Identificamos causas raiz, não sintomas. A tecnologia vem depois.',
    },
    {
        id: 'resultados',
        icon: IconCode,
        titleKey: 'Resultados Mensuráveis',
        descriptionKey:
            'Medimos sucesso por impacto de negócio: aumento de receita, redução de custos, vantagem competitiva. Não por linhas de código ou funcionalidades.',
    },
    {
        id: 'parceria',
        icon: IconUsers,
        titleKey: 'Parceria, Não Fornecimento',
        descriptionKey:
            'Não somos fornecedores técnicos. Somos parceiros na transformação do seu negócio. Trabalhamos lado a lado para garantir que a solução realmente funcione.',
    },
    {
        id: 'transparencia',
        icon: IconHeart,
        titleKey: 'Transparência Total',
        descriptionKey:
            'Comunicação honesta sobre prazos, limitações e expectativas. Se algo não fizer sentido para seu negócio, vamos dizer — mesmo que signifique menos trabalho para nós.',
    },
    {
        id: 'simplicidade',
        icon: IconBrain,
        titleKey: 'Simplicidade Intencional',
        descriptionKey:
            'A solução mais elegante é geralmente a mais simples. Evitamos complexidade desnecessária que aumenta custos e dificulta manutenção.',
    },
    {
        id: 'evolucao',
        icon: IconTrendingUp,
        titleKey: 'Evolução Contínua',
        descriptionKey:
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
                    <Trans>Nossos Valores</Trans>
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    <Trans>Esses princípios guiam cada diagnóstico e cada solução que criamos.</Trans>
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
                                <Trans>{value.titleKey}</Trans>
                            </Text>

                            <Text
                                size="sm"
                                c="dimmed"
                            >
                                <Trans>{value.descriptionKey}</Trans>
                            </Text>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
