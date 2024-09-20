import { useState, useEffect } from "preact/hooks"

import {
    Container,
    Title,
    Grid,
    Slider,
    Box,
    CopyButton,
    Tooltip,
    ActionIcon,
    Text,
    List,
    Pill,
    ThemeIcon,
    Switch,
    Space,
    rem
} from "@mantine/core"
import { IconCheck, IconCopy, IconRefresh } from "@tabler/icons-react"

import { generatePassword } from "../../utils/generator"

export default function Hero() {
    const [password, setPassword] = useState("")

    const [passwordLength, setPasswordLength] = useState(30)
    const [includeNumbers, setIncludeNumbers] = useState(true)
    const [includeSymbols, setIncludeSymbols] = useState(true)

    useEffect(() => {
        setPassword(generatePassword(passwordLength, includeNumbers, includeSymbols))
    }, [includeNumbers, includeSymbols, passwordLength])

    return (
        <Container mt="64" mb="64">
            <Grid gutter={{ base: 64, md: 32 }}>
                <Grid.Col span={{ base: 12, sm: 12, md: 6, lg: 6 }}>
                    <Title order={1}>Strong. Secure. Awesome.</Title>
                    <Text c="dimmed" mt="md">
                        A powerful generator for powerful passwords to protect your online accounts.
                    </Text>

                    <List
                        mt={30}
                        spacing="sm"
                        size="sm"
                        icon={
                            <ThemeIcon size={20} radius="xl">
                                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
                            </ThemeIcon>
                        }>
                        <List.Item>
                            <b>Advanced Security</b> – Randomly generated passwords are much harder to predict or crack
                            compared to manually created ones
                        </List.Item>
                        <List.Item>
                            <b>Prevents Password Reuse</b> – A password generator ensures you have unique passwords for
                            each account
                        </List.Item>
                        <List.Item>
                            <b>Secure Character Combination</b> – Our generator uses a mix of uppercase, lowercase
                            letters, numbers, and symbols, creating highly complex combinations.
                        </List.Item>
                    </List>
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 12, md: 6, lg: 6 }}>
                    <Box
                        display={"flex"}
                        h={"100%"}
                        style={{
                            flexDirection: "column",
                            justifyContent: "center"
                        }}>
                        <Title order={2} ta="center">
                            Password Generator
                        </Title>
                        <Space h={{ base: 20, md: 40 }} />
                        <Box
                            display="flex"
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: "10px"
                            }}>
                            <Box flex={1} display={"flex"} style={{ justifyContent: "center" }}>
                                <Pill size="xl" w={330}>
                                    {password}
                                </Pill>
                            </Box>
                            <ActionIcon.Group>
                                <ActionIcon variant="default" size="lg">
                                    <CopyButton value={password} timeout={2000}>
                                        {({ copied, copy }) => (
                                            <Tooltip label={copied ? "Copied" : "Copy"} withArrow position="top">
                                                <ActionIcon
                                                    color={copied ? "teal" : "gray"}
                                                    variant="subtle"
                                                    onClick={copy}>
                                                    {copied ? (
                                                        <IconCheck style={{ width: rem(16) }} />
                                                    ) : (
                                                        <IconCopy style={{ width: rem(16) }} />
                                                    )}
                                                </ActionIcon>
                                            </Tooltip>
                                        )}
                                    </CopyButton>
                                </ActionIcon>
                                <ActionIcon variant="default" size="lg" color="gray">
                                    <ActionIcon
                                        color={"gray"}
                                        variant="subtle"
                                        onClick={() =>
                                            setPassword(
                                                generatePassword(passwordLength, includeNumbers, includeSymbols)
                                            )
                                        }>
                                        <IconRefresh style={{ width: rem(20) }} stroke={1.5} />{" "}
                                    </ActionIcon>
                                </ActionIcon>
                            </ActionIcon.Group>
                        </Box>
                        <Space h={{ base: 40, md: 60 }} />
                        <Box
                            display="flex"
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: "20px"
                            }}>
                            <Box>
                                <Title order={6}>Password length:</Title>
                            </Box>
                            <Box flex={1}>
                                <Slider
                                    miw={270}
                                    color="blue"
                                    labelAlwaysOn
                                    defaultValue={passwordLength}
                                    min={4}
                                    max={50}
                                    marks={[
                                        { value: 6, label: "6" },
                                        { value: 8, label: "8" },
                                        { value: 12, label: "12" },
                                        { value: 20, label: "20" },
                                        { value: 30, label: "30" },
                                        { value: 40, label: "40" },
                                        { value: 50, label: "50" }
                                    ]}
                                    onChange={setPasswordLength}
                                />
                            </Box>
                        </Box>
                        <Space h="60" />
                        <Box
                            display="flex"
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: "10px"
                            }}>
                            <Box px={4}>
                                <Title order={6}>Characters used:</Title>
                            </Box>
                            <Box flex={1} display={"flex"} style={{ gap: "20px", justifyContent: "center" }}>
                                <Switch
                                    defaultChecked
                                    label="Numbers"
                                    onChange={({ currentTarget: { checked } }) => setIncludeNumbers(checked)}
                                />
                                <Switch
                                    defaultChecked
                                    label="Symbols"
                                    onChange={({ currentTarget: { checked } }) => setIncludeSymbols(checked)}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Grid.Col>
            </Grid>
        </Container>
    )
}
