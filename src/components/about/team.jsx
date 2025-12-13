import { Box, Title, Text, Container, Card, SimpleGrid, Avatar, Group, Badge } from '@mantine/core'
import { Trans } from '@lingui/react/macro'

export default function AboutTeam() {
    return (
        <Box py={80}>
            <Container size="lg">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    <Trans>O Time</Trans>
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    <Trans>
                        A Riligar é uma empresa familiar. Somos pequenos por design — focados, dedicados e pessoalmente
                        investidos em cada projeto que assumimos.
                    </Trans>
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
                                        <Trans>Fundador e Líder Técnico</Trans>
                                    </Badge>
                                </Group>

                                <Text
                                    size="sm"
                                    c="dimmed"
                                    mb="md"
                                    style={{ lineHeight: 1.6 }}
                                >
                                    <Trans>
                                        20+ anos construindo sistemas corporativos, liderando equipes técnicas e
                                        resolvendo problemas complexos. Especializado em diagnóstico de negócios,
                                        redesenho de processos e tecnologia como enabler. Apaixonado por tecnologia com
                                        propósito.
                                    </Trans>
                                </Text>

                                <Group gap="xs">
                                    <Badge
                                        size="sm"
                                        variant="outline"
                                    >
                                        <Trans>Diagnóstico de Negócios</Trans>
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
                                        <Trans>Arquitetura SaaS</Trans>
                                    </Badge>
                                    <Badge
                                        size="sm"
                                        variant="outline"
                                    >
                                        <Trans>Liderança</Trans>
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
                        <Trans>Por Trás de Cada Solução</Trans>
                    </Title>

                    <Text
                        c="dimmed"
                        ta="center"
                        maw={800}
                        mx="auto"
                        style={{ lineHeight: 1.8 }}
                    >
                        <Trans>
                            Enquanto lidero o trabalho técnico, nada disso seria possível sem o apoio da minha família.
                            <strong>Andréa</strong> e <strong>Edgar</strong> me inspiram diariamente a construir
                            tecnologia que cria mais tempo para o que realmente importa. Essa motivação pessoal nos
                            impulsiona a entregar soluções que genuinamente melhoram vidas — não apenas resultados.
                        </Trans>
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}
