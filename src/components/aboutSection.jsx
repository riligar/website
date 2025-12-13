import { Box, Title, Text, Container, Card, SimpleGrid, ThemeIcon, Avatar, Group, Badge, rem } from '@mantine/core'
import { IconTarget, IconCode, IconUsers, IconHeart } from '@tabler/icons-react'

const values = [
    {
        id: 'diagnostico',
        icon: IconTarget,
        title: 'Diagnóstico Primeiro',
        description: 'Entendemos profundamente o problema antes de propor qualquer solução.',
    },
    {
        id: 'resultados',
        icon: IconCode,
        title: 'Resultados Mensuráveis',
        description: 'Medimos sucesso por impacto de negócio: receita, custos e vantagem competitiva.',
    },
    {
        id: 'parceria',
        icon: IconUsers,
        title: 'Parceria, Não Fornecimento',
        description: 'Trabalhamos lado a lado na transformação do seu negócio.',
    },
    {
        id: 'transparencia',
        icon: IconHeart,
        title: 'Transparência Total',
        description: 'Comunicação honesta sobre prazos, limitações e expectativas.',
    },
]

export default function AboutSection() {
    return (
        <Box
            component="section"
            id="quem-somos"
            py="xl"
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
                        Quem Somos
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                    size={{ base: 28, sm: 32, md: 36 }}
                >
                    Parceiros em Transformação de Negócios
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={50}
                    maw={700}
                    mx="auto"
                >
                    Empresa familiar com mais de duas décadas de experiência em tecnologia corporativa, focada em
                    diagnosticar problemas reais e entregar resultados mensuráveis.
                </Text>

                {/* Founder Card */}
                <Card
                    shadow="md"
                    radius="md"
                    padding="xl"
                    mb={50}
                    maw={600}
                    mx="auto"
                >
                    <Group
                        align="flex-start"
                        wrap="nowrap"
                        gap="xl"
                    >
                        <Avatar
                            size={80}
                            radius="md"
                            color="blue"
                            src="https://avatars.githubusercontent.com/u/349602?v=4"
                        >
                            CM
                        </Avatar>

                        <Box>
                            <Group
                                mb="xs"
                                gap="xs"
                                wrap="wrap"
                            >
                                <Text
                                    size="lg"
                                    fw={700}
                                >
                                    Ciro Cesar Maciel
                                </Text>
                                <Badge
                                    variant="light"
                                    size="sm"
                                >
                                    Fundador
                                </Badge>
                            </Group>

                            <Text
                                size="sm"
                                c="dimmed"
                                mb="md"
                            >
                                20+ anos construindo sistemas corporativos e liderando equipes técnicas. Especializado
                                em diagnóstico de negócios e tecnologia como enabler de transformação.
                            </Text>

                            <Group gap="xs">
                                <Badge
                                    size="sm"
                                    variant="outline"
                                >
                                    Transformação de Negócios
                                </Badge>
                                <Badge
                                    size="sm"
                                    variant="outline"
                                >
                                    Crescimento Sustentável
                                </Badge>
                                <Badge
                                    size="sm"
                                    variant="outline"
                                >
                                    Resultados Mensuráveis
                                </Badge>
                            </Group>
                        </Box>
                    </Group>
                </Card>

                {/* Values Grid */}
                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 4 }}
                    spacing="lg"
                >
                    {values.map(value => (
                        <Card
                            key={value.id}
                            shadow="sm"
                            padding="lg"
                            radius="md"
                        >
                            <ThemeIcon
                                size={40}
                                radius="md"
                                variant="light"
                                mb="md"
                            >
                                <value.icon style={{ width: rem(22), height: rem(22) }} />
                            </ThemeIcon>

                            <Text
                                fw={500}
                                size="md"
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
