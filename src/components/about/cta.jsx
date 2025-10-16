import { Box, Title, Text, Button, Group, Container, rem } from '@mantine/core'
import { IconMessageCircle, IconBrandLinkedin, IconBrandInstagram } from '@tabler/icons-react'

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
                    Let's Build Something Meaningful Together
                </Title>

                <Text
                    size="lg"
                    c="dimmed"
                    ta="center"
                    mb={40}
                    maw={600}
                    mx="auto"
                >
                    If you believe in technology with purpose and want a partner who's personally invested in your
                    success, let's talk.
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
                        YouTube Channel
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
                    Want to know more about my journey? Visit my{' '}
                    <Text
                        component="a"
                        href="https://blog.ciromaciel.click/sobre-mim"
                        target="_blank"
                        rel="noopener noreferrer"
                        c="blue"
                        fw={600}
                        style={{ textDecoration: 'underline', cursor: 'pointer' }}
                    >
                        personal blog
                    </Text>{' '}
                    to learn more about my story and philosophy.
                </Text>
            </Container>
        </Box>
    )
}
