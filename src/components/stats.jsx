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
                size={{ base: 28, sm: 32, md: 36 }}
                c="dark"
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
                        radius="md"
                        bg="gray.0"
                        bd={`1px solid ${theme.colors.gray[2]}`}
                        style={{
                            textAlign: 'center',
                            transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                    >
                        <Text
                            fz={48}
                            fw={900}
                            c="dark"
                            mb="xs"
                            lh={1}
                        >
                            {stat.value}
                        </Text>

                        <Text
                            size="sm"
                            fw={700}
                            mb="xs"
                            c="dark"
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
