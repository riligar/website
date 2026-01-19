import { Box, Title, Text, Container, Table, Badge, Group, ThemeIcon, Button, useMantineTheme } from '@mantine/core'
import { IconCheck, IconX, IconArrowRight } from '@tabler/icons-react'

const comparisons = [
    {
        id: 'diagnosis',
        feature: 'Diagnóstico profundo antes de propor soluções',
        riligar: true,
        others: false,
    },
    {
        id: 'process',
        feature: 'Redesenho de processos antes da automação',
        riligar: true,
        others: false,
    },
    {
        id: 'results',
        feature: 'Foco em resultados de negócio mensuráveis',
        riligar: true,
        others: false,
    },
    {
        id: 'partnership',
        feature: 'Parceria de transformação (não apenas fornecimento)',
        riligar: true,
        others: false,
    },
    {
        id: 'speed',
        feature: 'Iterações rápidas (2-3 semanas para primeiros resultados)',
        riligar: true,
        others: false,
    },
    {
        id: 'transparency',
        feature: 'Transparência total (sem taxas escondidas)',
        riligar: true,
        others: false,
    },
    {
        id: 'tech-as-tool',
        feature: 'Tecnologia como ferramenta (não como objetivo)',
        riligar: true,
        others: false,
    },
    {
        id: 'personal',
        feature: 'Atenção pessoal dedicada a cada projeto',
        riligar: true,
        others: false,
    },
]

export default function Comparison() {
    const theme = useMantineTheme()

    return (
        <Box
            component="section"
            aria-label="Comparação com outras agências"
            py={80}
            bg="white"
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
                    O Diferencial Riligar
                </Badge>
            </Group>

            <Title
                order={2}
                ta="center"
                mb="md"
                size={{ base: 28, sm: 32, md: 36 }}
                c="dark"
            >
                Por Que Escolher a Riligar?
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mb={60}
                maw={700}
                mx="auto"
                fz="lg"
            >
                Não somos apenas mais uma agência de desenvolvimento. Somos um time focado que entrega transformações —
                não apenas código. Veja o que nos diferencia.
            </Text>

            <Box
                style={{
                    overflowX: 'auto',
                }}
                bd={`1px solid ${theme.colors.gray[2]}`}
                radius="md"
            >
                <Table
                    highlightOnHover
                    verticalSpacing="md"
                >
                    <Table.Thead>
                        <Table.Tr>
                            <Table.Th style={{ width: '50%' }}>Diferencial</Table.Th>
                            <Table.Th style={{ textAlign: 'center', width: '25%' }}>
                                <Text
                                    fw={800}
                                    size="lg"
                                    c="dark"
                                >
                                    RiLiGar
                                </Text>
                            </Table.Th>
                            <Table.Th style={{ textAlign: 'center', width: '25%' }}>
                                <Text
                                    fw={600}
                                    c="dimmed"
                                >
                                    Agências Típicas
                                </Text>
                            </Table.Th>
                        </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                        {comparisons.map(item => (
                            <Table.Tr key={item.id}>
                                <Table.Td>
                                    <Text
                                        size="sm"
                                        fw={500}
                                    >
                                        {item.feature}
                                    </Text>
                                </Table.Td>
                                <Table.Td style={{ textAlign: 'center' }}>
                                    {item.riligar ? (
                                        <ThemeIcon
                                            color="dark"
                                            size={24}
                                            radius="xl"
                                            variant="light"
                                        >
                                            <IconCheck
                                                size={16}
                                                stroke={1.5}
                                            />
                                        </ThemeIcon>
                                    ) : (
                                        <ThemeIcon
                                            color="gray"
                                            size={24}
                                            radius="xl"
                                            variant="light"
                                        >
                                            <IconX
                                                size={16}
                                                stroke={1.5}
                                            />
                                        </ThemeIcon>
                                    )}
                                </Table.Td>
                                <Table.Td style={{ textAlign: 'center' }}>
                                    {item.others ? (
                                        <ThemeIcon
                                            color="gray"
                                            size={24}
                                            radius="xl"
                                            variant="light"
                                        >
                                            <IconCheck
                                                size={16}
                                                stroke={1.5}
                                            />
                                        </ThemeIcon>
                                    ) : (
                                        <ThemeIcon
                                            color="gray"
                                            size={24}
                                            radius="xl"
                                            variant="light"
                                            opacity={0.5}
                                        >
                                            <IconX
                                                size={16}
                                                stroke={1.5}
                                            />
                                        </ThemeIcon>
                                    )}
                                </Table.Td>
                            </Table.Tr>
                        ))}
                    </Table.Tbody>
                </Table>
            </Box>

            <Text
                size="sm"
                c="dimmed"
                ta="center"
                mt="xl"
                mb="lg"
                maw={800}
                mx="auto"
                lh={1.6}
            >
                Focamos no que importa: resolver seus problemas eficientemente com soluções que funcionam. Sem
                burocracia, sem equipes inchadas, sem maximizar horas faturáveis — apenas trabalho honesto e
                especializado.
            </Text>

            {/* <Group
                justify="center"
                mt="xl"
            >
                <Button
                    component="a"
                    href="/about"
                    size="lg"
                    variant="outline"
                    rightSection={
                        <IconArrowRight
                            size={18}
                            stroke={1.5}
                        />
                    }
                >
                    Veja Como Trabalhamos
                </Button>
            </Group> */}
        </Box>
    )
}
