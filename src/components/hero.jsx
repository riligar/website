import { Title, Grid, Box, Text, List, ThemeIcon, Image, rem, Button, Group } from '@mantine/core'
import { IconCheck, IconRocket, IconMessageCircle } from '@tabler/icons-react'

export default function Hero() {
    return (
        <Box
            component="section"
            aria-label="Hero section"
            mt={80}
            mb={80}
        >
            <Grid
                gutter={{ base: 40, md: 60 }}
                align="center"
            >
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Title
                        order={1}
                        component="h1"
                        // size={{ base: 36, sm: 42, md: 48 }}
                        style={{ lineHeight: 1.2 }}
                    >
                        Solutions That Transform <br /> Your Business
                    </Title>
                    <Text
                        size="lg"
                        c="dimmed"
                        mt="xl"
                    >
                        We deliver powerful solutions tailored to your needs. From Salesforce components to intelligent
                        AI Agents, scalable SaaS platforms, and advanced AI integrations—every solution is designed to
                        solve real problems and drive measurable results.
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
                                AI Agents
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                Intelligent autonomous agents that work 24/7, automating tasks, making decisions, and
                                delivering insights
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text
                                fw={600}
                                component="span"
                            >
                                Salesforce Solutions
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                Custom components and integrations that supercharge your CRM and boost team productivity
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text
                                fw={600}
                                component="span"
                            >
                                SaaS & AI Integration
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                High-performance platforms with AI capabilities that scale with your business growth
                            </Text>
                        </List.Item>
                    </List>

                    <Group mt={40}>
                        <Button
                            size="lg"
                            leftSection={<IconRocket style={{ width: rem(20), height: rem(20) }} />}
                        >
                            Explore Solutions
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            leftSection={<IconMessageCircle style={{ width: rem(20), height: rem(20) }} />}
                        >
                            Talk to Us
                        </Button>
                    </Group>
                </Grid.Col>

                <Grid.Col span={{ base: 12, md: 6 }}>
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
