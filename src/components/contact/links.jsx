import { Box, Container, SimpleGrid, Card, Group, Text, ThemeIcon, rem, Button } from '@mantine/core'
import { IconBrandLinkedin, IconBrandInstagram, IconBrandYoutube, IconWorld, IconArrowRight } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

const socialLinks = [
    {
        id: 'linkedin',
        icon: IconBrandLinkedin,
        nameKey: 'LinkedIn',
        descriptionKey: 'Connect professionally and see my career journey',
        username: '@ciromaciel',
        url: 'https://www.linkedin.com/in/ciromaciel/',
        color: '#0A66C2',
        buttonTextKey: 'Connect on LinkedIn',
    },
    {
        id: 'instagram',
        icon: IconBrandInstagram,
        nameKey: 'Instagram',
        descriptionKey: 'Follow my daily insights and behind-the-scenes',
        username: '@ciro.maciel',
        url: 'https://www.instagram.com/ciro.maciel/',
        color: '#E4405F',
        buttonTextKey: 'Follow on Instagram',
    },
    {
        id: 'youtube',
        icon: IconBrandYoutube,
        nameKey: 'YouTube',
        descriptionKey: 'Watch tutorials, insights and technology content',
        username: '@ciro-maciel',
        url: 'https://www.youtube.com/@ciro-maciel',
        color: '#FF0000',
        buttonTextKey: 'Subscribe on YouTube',
    },
    {
        id: 'blog',
        icon: IconWorld,
        nameKey: 'Personal Blog',
        descriptionKey: 'Read about my journey, philosophy and learnings',
        username: 'blog.ciromaciel.click',
        url: 'https://blog.ciromaciel.click/sobre-mim',
        color: '#228BE6',
        buttonTextKey: 'Visit Blog',
    },
]

export default function ContactLinks() {
    return (
        <Box py={40}>
            <Container size="xl">
                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 2 }}
                    spacing="xl"
                >
                    {socialLinks.map(link => (
                        <Card
                            key={link.id}
                            shadow="md"
                            padding="xl"
                            radius="md"
                            withBorder
                            style={{
                                transition: 'transform 0.2s, box-shadow 0.2s',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-5px)'
                                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = ''
                            }}
                        >
                            <Group
                                align="flex-start"
                                mb="md"
                            >
                                <ThemeIcon
                                    size={60}
                                    radius="md"
                                    style={{ backgroundColor: link.color }}
                                >
                                    <link.icon style={{ width: rem(32), height: rem(32) }} />
                                </ThemeIcon>

                                <Box style={{ flex: 1 }}>
                                    <Text
                                        size="xl"
                                        fw={700}
                                        mb={4}
                                    >
                                        <Trans>{link.nameKey}</Trans>
                                    </Text>
                                    <Text
                                        size="sm"
                                        c="dimmed"
                                        mb="xs"
                                    >
                                        {link.username}
                                    </Text>
                                </Box>
                            </Group>

                            <Text
                                size="sm"
                                c="dimmed"
                                mb="lg"
                                style={{ lineHeight: 1.6 }}
                            >
                                <Trans>{link.descriptionKey}</Trans>
                            </Text>

                            <Button
                                fullWidth
                                variant="light"
                                size="md"
                                rightSection={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
                                component="a"
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: link.color, borderColor: link.color }}
                            >
                                <Trans>{link.buttonTextKey}</Trans>
                            </Button>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
