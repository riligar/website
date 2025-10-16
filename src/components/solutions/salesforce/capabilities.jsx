import { Box, Title, Text, Container, SimpleGrid, Card, ThemeIcon, rem } from '@mantine/core'
import {
    IconComponents,
    IconPlugConnected,
    IconAutomation,
    IconPackage,
    IconSettings,
    IconShield,
} from '@tabler/icons-react'

const capabilities = [
    {
        icon: IconComponents,
        title: 'Custom Lightning Web Components',
        description:
            'Build reusable LWC components for any use case—data tables, charts, custom forms, interactive dashboards, and more. Modern JavaScript, performant, and fully tested.',
    },
    {
        icon: IconPackage,
        title: 'Component Libraries',
        description:
            'Create internal component libraries that standardize UI across your org. Documented, versioned, and shared across teams for consistent user experience.',
    },
    {
        icon: IconPlugConnected,
        title: 'System Integrations',
        description:
            'Connect Salesforce with ERPs, marketing platforms, databases, APIs, and legacy systems. Real-time sync or batch processing—whatever your business needs.',
    },
    {
        icon: IconAutomation,
        title: 'Process Automation',
        description:
            'Eliminate manual work with Flows, Apex triggers, and scheduled jobs. Automate lead routing, approval processes, data validation, notifications, and complex workflows.',
    },
    {
        icon: IconSettings,
        title: 'Custom Business Logic',
        description:
            'Implement complex business rules, calculations, and validations in Apex. Efficient, bulkified code that respects governor limits and scales with data growth.',
    },
    {
        icon: IconShield,
        title: 'Security & Compliance',
        description:
            'Field-level security, sharing rules, permission sets, and custom authentication. Ensure your Salesforce org meets compliance and security requirements.',
    },
]

export default function SalesforceCapabilities() {
    return (
        <Box
            component="section"
            aria-label="Salesforce capabilities"
            py={80}
        >
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    What We Build for Salesforce
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    size="lg"
                    maw={800}
                    mx="auto"
                    mb={60}
                >
                    From custom components to complex integrations—we build Salesforce solutions that fit your exact
                    business needs.
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 2, lg: 3 }}
                    spacing="xl"
                >
                    {capabilities.map((capability, index) => (
                        <Card
                            key={index}
                            shadow="sm"
                            radius="md"
                            padding="xl"
                            withBorder
                            style={{ height: '100%' }}
                        >
                            <ThemeIcon
                                size={50}
                                radius="md"
                                variant="light"
                                mb="md"
                            >
                                <capability.icon
                                    style={{ width: rem(28), height: rem(28) }}
                                    stroke={1.5}
                                />
                            </ThemeIcon>
                            <Text
                                fz="lg"
                                fw={600}
                                mb="xs"
                            >
                                {capability.title}
                            </Text>
                            <Text
                                size="sm"
                                c="dimmed"
                            >
                                {capability.description}
                            </Text>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}
