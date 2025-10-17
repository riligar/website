import { Box, Title, Text, Container, SimpleGrid, Card, ThemeIcon, rem } from '@mantine/core'
import {
    IconComponents,
    IconPlugConnected,
    IconAutomation,
    IconPackage,
    IconSettings,
    IconShield,
} from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

const capabilities = [
    {
        id: 'cap1',
        icon: IconComponents,
        titleKey: 'Custom Lightning Web Components',
        descriptionKey:
            'Build reusable LWC components for any use case—data tables, charts, custom forms, interactive dashboards, and more. Modern JavaScript, performant, and fully tested.',
    },
    {
        id: 'cap2',
        icon: IconPackage,
        titleKey: 'Component Libraries',
        descriptionKey:
            'Create internal component libraries that standardize UI across your org. Documented, versioned, and shared across teams for consistent user experience.',
    },
    {
        id: 'cap3',
        icon: IconPlugConnected,
        titleKey: 'System Integrations',
        descriptionKey:
            'Connect Salesforce with ERPs, marketing platforms, databases, APIs, and legacy systems. Real-time sync or batch processing—whatever your business needs.',
    },
    {
        id: 'cap4',
        icon: IconAutomation,
        titleKey: 'Process Automation',
        descriptionKey:
            'Eliminate manual work with Flows, Apex triggers, and scheduled jobs. Automate lead routing, approval processes, data validation, notifications, and complex workflows.',
    },
    {
        id: 'cap5',
        icon: IconSettings,
        titleKey: 'Custom Business Logic',
        descriptionKey:
            'Implement complex business rules, calculations, and validations in Apex. Efficient, bulkified code that respects governor limits and scales with data growth.',
    },
    {
        id: 'cap6',
        icon: IconShield,
        titleKey: 'Security & Compliance',
        descriptionKey:
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
                    <Trans>What We Build for Salesforce</Trans>
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    size="lg"
                    maw={800}
                    mx="auto"
                    mb={60}
                >
                    <Trans>From custom components to complex integrations—we build Salesforce solutions that fit your exact business needs.</Trans>
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 2, lg: 3 }}
                    spacing="xl"
                >
                    {capabilities.map(capability => (
                        <Card
                            key={capability.id}
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
