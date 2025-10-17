import { Title, Grid, Box, Text, List, ThemeIcon, Image, rem, Button, Group } from '@mantine/core'
import { IconCheck, IconRocket, IconMessageCircle } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

export default function Hero() {
    const whatsappMessage = encodeURIComponent(
        'Olá! Gostaria de conhecer mais sobre as soluções da RiLiGar. Podemos conversar?'
    )
    const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

    return (
        <Box
            component="section"
            aria-label="Hero section"
            mt={80}
            mb={80}
        >
            <Grid align="center">
                <Grid.Col
                    span={{ base: 12, sm: 6, md: 7 }}
                    order={{ base: 2, sm: 2, md: 1 }}
                >
                    <Title
                        order={1}
                        component="h1"
                        style={{ lineHeight: 1.2 }}
                    >
                        <Trans>Solutions That Transform Your Business</Trans>
                    </Title>
                    <Text
                        size="lg"
                        c="dimmed"
                        mt="xl"
                    >
                        <Trans>
                            We deliver powerful solutions tailored to your needs. From Salesforce components to
                            intelligent AI Agents, scalable SaaS platforms, and advanced AI integrations—every solution
                            is designed to solve real problems and drive measurable results.
                        </Trans>
                    </Text>

                    <List
                        mt={40}
                        spacing="lg"
                        size="md"
                        icon={
                            <ThemeIcon
                                size={24}
                                radius="xl"
                                variant="light"
                            >
                                <IconCheck
                                    style={{ width: rem(14), height: rem(14) }}
                                    stroke={2}
                                />
                            </ThemeIcon>
                        }
                    >
                        <List.Item>
                            <Text
                                fw={600}
                                component="span"
                            >
                                <Trans>AI Agents</Trans>
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                <Trans>
                                    Intelligent autonomous agents that work 24/7, automating tasks, making decisions,
                                    and delivering insights
                                </Trans>
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text
                                fw={600}
                                component="span"
                            >
                                <Trans>Salesforce Solutions</Trans>
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                <Trans>
                                    Custom components and integrations that supercharge your CRM and boost team
                                    productivity
                                </Trans>
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text
                                fw={600}
                                component="span"
                            >
                                <Trans>SaaS & AI Integration</Trans>
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                <Trans>
                                    High-performance platforms with AI capabilities that scale with your business growth
                                </Trans>
                            </Text>
                        </List.Item>
                    </List>

                    <Group
                        mt={40}
                        gap="md"
                        style={{ flexWrap: 'wrap' }}
                    >
                        <Button
                            component="a"
                            href="/contact"
                            size="lg"
                            leftSection={<IconRocket style={{ width: rem(20), height: rem(20) }} />}
                            style={{ flex: '1 1 auto', minWidth: '200px' }}
                        >
                            <Trans>Explore Solutions</Trans>
                        </Button>
                        <Button
                            component="a"
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="lg"
                            variant="outline"
                            leftSection={<IconMessageCircle style={{ width: rem(20), height: rem(20) }} />}
                            style={{ flex: '1 1 auto', minWidth: '200px' }}
                        >
                            <Trans>Talk to Us</Trans>
                        </Button>
                    </Group>
                </Grid.Col>

                <Grid.Col
                    span={{ base: 12, sm: 6, md: 5 }}
                    order={{ base: 1, sm: 1, md: 2 }}
                >
                    <Box
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <Image
                            src="/image/home-001.svg"
                            alt="RiLiGar Solutions"
                            style={{
                                width: '100%',
                                maxWidth: '500px',
                                height: 'auto',
                            }}
                        />
                    </Box>
                </Grid.Col>
            </Grid>
        </Box>
    )
}
