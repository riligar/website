import { Box, Title, Text, Button, Group, Container, rem } from '@mantine/core'
import { IconMessageCircle, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

export default function AboutCTA() {
    return (
        <Box
            py={80}
            style={{
                background: 'linear-gradient(135deg, rgba(34, 139, 230, 0.1) 0%, rgba(58, 134, 255, 0.05) 100%)',
            }}
        >
            <Container size="md">
                <Title
                    order={2}
                    ta="center"
                    size={{ base: 28, sm: 36, md: 42 }}
                    mb="md"
                >
                    <Trans>Vamos Construir Algo Significativo Juntos</Trans>
                </Title>

                <Text
                    size="lg"
                    c="dimmed"
                    ta="center"
                    mb={40}
                    maw={600}
                    mx="auto"
                >
                    <Trans>
                        Se você acredita em tecnologia com propósito e quer um parceiro pessoalmente investido no seu
                        sucesso, vamos conversar.
                    </Trans>
                </Text>

                <Group
                    justify="center"
                    gap="md"
                    mb="lg"
                >
                    <Button
                        size="xl"
                        leftSection={<IconMessageCircle style={{ width: rem(24), height: rem(24) }} />}
                        component="a"
                        href="https://www.youtube.com/@ciro-maciel"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Trans>Canal do YouTube</Trans>
                    </Button>
                </Group>

                <Group
                    justify="center"
                    gap="md"
                >
                    <Button
                        size="md"
                        variant="light"
                        leftSection={<IconBrandLinkedin style={{ width: rem(20), height: rem(20) }} />}
                        component="a"
                        href="https://www.linkedin.com/in/ciromaciel/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </Button>
                    <Button
                        size="md"
                        variant="light"
                        leftSection={<IconBrandInstagram style={{ width: rem(20), height: rem(20) }} />}
                        component="a"
                        href="https://www.instagram.com/ciro.maciel/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Instagram
                    </Button>
                </Group>

                <Text
                    size="sm"
                    c="dimmed"
                    ta="center"
                    mt="xl"
                >
                    <Trans>
                        Quer saber mais sobre minha jornada? Visite meu{' '}
                        <Text
                            component="a"
                            href="https://blog.ciromaciel.click/sobre-mim"
                            target="_blank"
                            rel="noopener noreferrer"
                            c="blue"
                            fw={600}
                            style={{ textDecoration: 'underline', cursor: 'pointer' }}
                        >
                            blog pessoal
                        </Text>{' '}
                        para conhecer mais sobre minha história e filosofia.
                    </Trans>
                </Text>
            </Container>
        </Box>
    )
}
