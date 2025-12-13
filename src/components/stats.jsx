import { Box, Title, Text, Container, SimpleGrid, Paper, rem } from '@mantine/core'
import { Trans } from '@lingui/react/macro'

const stats = [
    {
        value: '30min',
        label: <Trans>Conversa de diagnóstico para entender seu negócio</Trans>,
        description: <Trans>Sem compromisso, sem pressão de vendas</Trans>,
    },
    {
        value: '2-3 Sem',
        label: <Trans>Para primeiros resultados visíveis</Trans>,
        description: <Trans>Iteração rápida significa validação rápida</Trans>,
    },
    {
        value: 'ROI',
        label: <Trans>Foco em retorno sobre investimento</Trans>,
        description: <Trans>Medimos sucesso por impacto de negócio</Trans>,
    },
    {
        value: '20+',
        label: <Trans>Anos de experiência em transformação</Trans>,
        description: <Trans>Soluções que realmente funcionam</Trans>,
    },
]

export default function Stats() {
    return (
        <Box
            component="section"
            aria-label="Estatísticas e números de impacto"
            py={80}
        >
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb={60}
                    size={{ base: 28, sm: 32, md: 36 }}
                >
                    <Trans>Resultados Mensuráveis, Não Promessas Vazias</Trans>
                </Title>

                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 4 }}
                    spacing="lg"
                >
                    {stats.map((stat, index) => (
                        <Paper
                            key={index}
                            p="xl"
                            radius="md"
                            style={{
                                border: '1px solid #e9ecef',
                                textAlign: 'center',
                                transition: 'transform 0.2s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-5px)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)'
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 'clamp(32px, 8vw, 48px)',
                                    lineHeight: 1,
                                }}
                                fw={900}
                                c="blue"
                                mb="xs"
                            >
                                {stat.value}
                            </Text>

                            <Text
                                size="sm"
                                fw={600}
                                mb="xs"
                            >
                                {stat.label}
                            </Text>

                            <Text
                                size="xs"
                                c="dimmed"
                            >
                                {stat.description}
                            </Text>
                        </Paper>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
