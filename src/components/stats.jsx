import { Box, Title, Text, Container, SimpleGrid, Paper, useMantineTheme } from '@mantine/core'

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
    const theme = useMantineTheme()

    return (
        <Box
            component="section"
            aria-label="Estatísticas e números de impacto"
            py={80}
            bg="white"
        >
            <Title
                order={2}
                ta="center"
                mb={60}
                style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.04em' }}
            >
                Resultados Mensuráveis, Não Promessas Vazias
            </Title>

            <SimpleGrid
                cols={{ base: 1, sm: 2, lg: 4 }}
                spacing="xl"
            >
                {stats.map((stat, index) => (
                    <Paper
                        key={index}
                        p="xl"
                        radius="sm"
                        style={{
                            textAlign: 'center',
                            backgroundColor: 'transparent',
                        }}
                    >
                        <Text
                            data-zen-metric="true"
                            mb="sm"
                        >
                            {stat.value}
                        </Text>

                        <Text
                            data-zen-subtitle="true"
                            mb="xs"
                        >
                            {stat.label}
                        </Text>

                        <Text
                            size="xs"
                            c="dimmed"
                            lh={1.5}
                        >
                            {stat.description}
                        </Text>
                    </Paper>
                ))}
            </SimpleGrid>
        </Box>
    )
}
