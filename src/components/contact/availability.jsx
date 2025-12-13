import { Box, Title, Text, Container, SimpleGrid, Card, ThemeIcon, rem } from '@mantine/core'
import { IconClock, IconWorld, IconMessageCheck, IconCalendar } from '@tabler/icons-react'


const availabilityInfo = [
    {
        id: 'response',
        icon: IconClock,
        titleKey: 'Response Time',
        descriptionKey: 'Typically within 24 hours on business days. Urgent matters get priority attention.',
    },
    {
        id: 'global',
        icon: IconWorld,
        titleKey: 'Global Availability',
        descriptionKey: 'Working with clients worldwide. Flexible with time zones and scheduling.',
    },
    {
        id: 'communication',
        icon: IconMessageCheck,
        titleKey: 'Communication',
        descriptionKey: 'Clear, direct communication. No bureaucracy, just honest technical discussions.',
    },
    {
        id: 'kickoff',
        icon: IconCalendar,
        titleKey: 'Project Kickoff',
        descriptionKey: 'Most projects can start within 1-2 weeks after initial consultation.',
    },
]

export default function ContactAvailability() {
    return (
        <Box
            py={80}
            style={{
                background: 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
        >
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    What to Expect
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    
                        When you reach out, you're connecting directly with me—not a sales team or account manager.
                        Here's what you can expect from our collaboration.
                    
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 2, lg: 4 }}
                    spacing="lg"
                >
                    {availabilityInfo.map(info => (
                        <Card
                            key={info.id}
                            shadow="sm"
                            padding="lg"
                            radius="md"
                            withBorder
                        >
                            <ThemeIcon
                                size={50}
                                radius="md"
                                variant="light"
                                mb="md"
                            >
                                <info.icon style={{ width: rem(26), height: rem(26) }} />
                            </ThemeIcon>

                            <Text
                                fw={600}
                                size="lg"
                                mb="xs"
                            >
                                {info.titleKey}
                            </Text>

                            <Text
                                size="sm"
                                c="dimmed"
                            >
                                {info.descriptionKey}
                            </Text>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
