import { Title, Grid, Box, Text, List, ThemeIcon, Image, rem } from '@mantine/core'
import { IconCheck } from '@tabler/icons-react'

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
                        order={1}
                        size={{ base: 36, sm: 42, md: 48 }}
                        style={{ lineHeight: 1.2 }}
                    >
                        Strong. Secure. Awesome.
                    </Title>
                    <Text
                        size="lg"
                        c="dimmed"
                        mt="xl"
                    >
                        A powerful generator for powerful passwords to protect your online accounts.
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
                                Advanced Security
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                Randomly generated passwords are much harder to predict or crack compared to manually
                                created ones
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text
                                fw={600}
                                component="span"
                            >
                                Prevents Password Reuse
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                A password generator ensures you have unique passwords for each account
                            </Text>
                        </List.Item>
                        <List.Item>
                            <Text
                                fw={600}
                                component="span"
                            >
                                Secure Character Combination
                            </Text>
                            <Text
                                c="dimmed"
                                size="sm"
                                mt={4}
                            >
                                Our generator uses a mix of uppercase, lowercase letters, numbers, and symbols
                            </Text>
                        </List.Item>
                    </List>
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
                            alt="Password Manager Illustration"
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
