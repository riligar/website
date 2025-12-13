import { Box, Title, Text, Container, Card, SimpleGrid, Avatar, Group, Badge } from '@mantine/core'

export default function AboutTeam() {
    return (
        <Box py={80}>
            <Container size="lg">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    O Time
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    A Riligar é uma empresa familiar. Somos pequenos por design — focados, dedicados e pessoalmente
                    investidos em cada projeto que assumimos.
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 1 }}
                    spacing="xl"
                >
                    <Card
                        shadow="md"
                        padding="xl"
                        radius="md"
                        withBorder
                        style={{ maxWidth: 600, margin: '0 auto', width: '100%' }}
                    >
                        <Group
                            align="flex-start"
                            wrap="nowrap"
                        >
                            <Avatar
                                size={120}
                                radius="md"
                                color="blue"
                                src={'https://avatars.githubusercontent.com/u/349602?v=4'}
                            >
                                CM
                            </Avatar>

                            <Box style={{ flex: 1 }}>
                                <Group
                                    mb="xs"
                                    gap="xs"
                                    wrap="wrap"
                                >
                                    <Text
                                        size="xl"
                                        fw={700}
                                    >
                                        Ciro Cesar Maciel
                                    </Text>
                                    <Badge
                                        variant="light"
                                        size="sm"
                                    >
                                        Fundador e Líder Técnico
                                    </Badge>
                                </Group>

                                <Text
                                    size="sm"
                                    c="dimmed"
                                    mb="md"
                                    style={{ lineHeight: 1.6 }}
                                >
                                    20+ anos construindo sistemas corporativos, liderando equipes técnicas e resolvendo
                                    problemas complexos. Especializado em diagnóstico de negócios, redesenho de
                                    processos e tecnologia como enabler. Apaixonado por tecnologia com propósito.
                                </Text>

                                <Group gap="xs">
                                    <Badge
                                        size="sm"
                                        variant="outline"
                                    >
                                        Diagnóstico de Negócios
                                    </Badge>
                                    <Badge
                                        size="sm"
                                        variant="outline"
                                    >
                                        Salesforce
                                    </Badge>
                                    <Badge
                                        size="sm"
                                        variant="outline"
                                    >
                                        Arquitetura SaaS
                                    </Badge>
                                    <Badge
                                        size="sm"
                                        variant="outline"
                                    >
                                        Liderança
                                    </Badge>
                                </Group>
                            </Box>
                        </Group>
                    </Card>
                </SimpleGrid>

                <Box
                    mt={60}
                    p="xl"
                    style={{
                        background:
                            'linear-gradient(135deg, rgba(34, 139, 230, 0.05) 0%, rgba(58, 134, 255, 0.02) 100%)',
                        borderRadius: '12px',
                        border: '1px solid #e9ecef',
                    }}
                >
                    <Title
                        order={4}
                        ta="center"
                        mb="md"
                    >
                        Por Trás de Cada Solução
                    </Title>

                    <Text
                        c="dimmed"
                        ta="center"
                        maw={800}
                        mx="auto"
                        style={{ lineHeight: 1.8 }}
                    >
                        Enquanto lidero o trabalho técnico, nada disso seria possível sem o apoio da minha família.
                        <strong>Andréa</strong> e <strong>Edgar</strong> me inspiram diariamente a construir tecnologia
                        que cria mais tempo para o que realmente importa. Essa motivação pessoal nos impulsiona a
                        entregar soluções que genuinamente melhoram vidas — não apenas resultados.
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}
