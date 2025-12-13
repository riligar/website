import { Title, Text, Container, Box, Badge, Group } from '@mantine/core'
import { Trans } from '@lingui/react/macro'

export default function ContactHero() {
    return (
        <Box
            mt={80}
            mb={60}
        >
            <Container size="lg">
                <Group
                    justify="center"
                    mb="md"
                >
                    <Badge
                        variant="filled"
                        size="lg"
                    >
                        <Trans>Entre em Contato</Trans>
                    </Badge>
                </Group>

                <Title
                    order={1}
                    ta="center"
                    mb="xl"
                    style={{ lineHeight: 1.2 }}
                >
                    <Trans>Vamos Conversar</Trans>
                </Title>

                <Text
                    size="xl"
                    c="dimmed"
                    ta="center"
                    maw={700}
                    mx="auto"
                    style={{ lineHeight: 1.6 }}
                >
                    <Trans>
                        Pronto para descobrir onde está o valor escondido no seu negócio? Agende uma conversa de
                        diagnóstico — 30 minutos para entender seus desafios e identificar oportunidades.
                    </Trans>
                </Text>
            </Container>
        </Box>
    )
}
