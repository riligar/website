import { Badge, Group, Title, Text, Card, SimpleGrid, Container, rem, useMantineTheme } from "@mantine/core"
import { IconFingerprint, IconKey, IconLock } from "@tabler/icons-react"

const mockdata = [
    {
        title: "Long",
        description:
            "The longer a password, the more secure it is. A strong password should be at least 10 characters long.",
        icon: IconKey
    },
    {
        title: "Complex",
        description:
            "Strong passwords use a combination of letters, numbers, cases, and symbols to form an unpredictable string of characters that doesn't resemble words or names.",
        icon: IconLock
    },
    {
        title: "Unique",
        description:
            "A strong password should be unique to each account to reduce vulnerability in the event of a hack.",
        icon: IconFingerprint
    }
]

export default function Features() {
    const theme = useMantineTheme()
    const features = mockdata.map(feature => (
        <Card
            key={feature.title}
            shadow="md"
            radius="md"
            // className={classes.card}
            padding="lg">
            <feature.icon style={{ width: rem(50), height: rem(50) }} stroke={2} color={theme.colors.blue[6]} />
            <Text fz="lg" fw={500} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </Card>
    ))

    return (
        <Container size="lg" py="xl">
            <Group justify="center">
                <Badge variant="filled" size="lg">
                    Protection Against Automated Attacks
                </Badge>
            </Group>

            <Title
                order={2}
                // className={classes.title}
                ta="center"
                mt="sm">
                What makes passwords strong?
            </Title>

            <Text c="dimmed" ta="center" mt="md">
                Strong passwords are unique and random. Humans aren’t very good at coming up with passwords that are
                either of those things, let alone both. So we created the 1Password Strong Password Generator tool to
                create secure, complex passwords – including ones that combine upper and lowercase letters, numbers, and
                special characters.
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mt={50}>
                {features}
            </SimpleGrid>
        </Container>
    )
}
