import { Title, Text, Container, Box, Badge, Group } from '@mantine/core'

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
                        Sobre a RiLiGar
                    </Badge>
                </Group>

                <Title
                    order={1}
                    ta="center"
                    mb="xl"
                    style={{ lineHeight: 1.2 }}
                >
                    Entendemos Negócios <br />
                    Antes de Propor Soluções
                </Title>

                <Text
                    size="xl"
                    c="dimmed"
                    ta="center"
                    maw={800}
                    mx="auto"
                    style={{ lineHeight: 1.6 }}
                >
                    A RiLiGar nasceu de uma crença simples: tecnologia só tem valor quando resolve problemas reais de
                    negócio. Não vendemos automação — diagnosticamos, redesenhamos e transformamos.
                </Text>
            </Container>
        </Box>
    )
}
