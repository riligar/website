import { Title, Grid, Box, Text, List, ThemeIcon, Image, rem, Button, Group } from '@mantine/core'
import { IconCheck, IconRocket } from '@tabler/icons-react'

export default function Hero() {
    return (
        <Box
            mt={80}
            mb={80}
        >
            <Grid
                gutter={{ base: 40, md: 60 }}
                align="center"
            >
                <Grid.Col span={{ base: 12, md: 6 }}>
                    <Title
                        order={2}
                        // size={{ base: 36, sm: 42, md: 48 }}
                        style={{ lineHeight: 1.2 }}
                    >
                        Empower Your Business <br /> with Smart Solutions
                    </Title>
                    <Text
                        size="lg"
                        c="dimmed"
                        mt="xl"
                    >
                        We transform complex challenges into streamlined, high-performance solutions. Specializing in
                        Salesforce development, SaaS applications, and AI-powered tools that drive real business growth.
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
                                Salesforce Excellence
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                Custom Salesforce components and solutions that enhance productivity and streamline your
                                workflows
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text
                                fw={600}
                                component="span"
                            >
                                Intelligent SaaS
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                Lightweight, cost-effective applications built with clean code and smart architecture
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text
                                fw={600}
                                component="span"
                            >
                                AI-Powered Innovation
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                Leverage cutting-edge AI to automate processes and unlock new opportunities for growth
                            </Text>
                        </List.Item>
                    </List>

                    <Group mt={40}>
                        <Button
                            size="lg"
                            leftSection={<IconRocket style={{ width: rem(20), height: rem(20) }} />}
                        >
                            Start Your Project
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                        >
                            View Our Work
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
