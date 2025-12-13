import { Title, Text, Container, Box, Badge, Group } from '@mantine/core'
import { Trans } from '@lingui/react/macro'

export default function AboutHero() {
    return (
        <Box
            mt={80}
            mb={80}
        >
            <Container size="md">
                <Group
                    justify="center"
                    mb="md"
                >
                    <Badge
                        variant="filled"
                        size="lg"
                    >
                        <Trans>Sobre a RiLiGar</Trans>
                    </Badge>
                </Group>

                <Title
                    order={1}
                    ta="center"
                    mb="xl"
                    style={{ lineHeight: 1.2 }}
                >
                    <Trans>
                        Entendemos Negócios <br />
                        Antes de Propor Soluções
                    </Trans>
                </Title>

                <Text
                    size="xl"
                    c="dimmed"
                    ta="center"
                    maw={800}
                    mx="auto"
                    style={{ lineHeight: 1.6 }}
                >
                    <Trans>
                        A RiLiGar nasceu de uma crença simples: tecnologia só tem valor quando resolve problemas reais
                        de negócio. Não vendemos automação — diagnosticamos, redesenhamos e transformamos.
                    </Trans>
                </Text>
            </Container>
        </Box>
    )
}
