import { Box, Title, Text, Container, SimpleGrid, Paper, rem } from '@mantine/core'

const stats = [
    {
        value: '30min',
        label: 'Conversa de diagnóstico para entender seu negócio',
        description: 'Sem compromisso, sem pressão de vendas',
    },
    {
        value: '2-3 Sem',
        label: 'Para primeiros resultados visíveis',
        description: 'Iteração rápida significa validação rápida',
    },
    {
        value: 'ROI',
        label: 'Foco em retorno sobre investimento',
        description: 'Medimos sucesso por impacto de negócio',
    },
    {
        value: '20+',
        label: 'Anos de experiência em transformação',
        description: 'Soluções que realmente funcionam',
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
                    Resultados Mensuráveis, Não Promessas Vazias
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
