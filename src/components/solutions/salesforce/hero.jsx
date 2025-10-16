import { Title, Text, Container, Box, Badge, Group, Button, rem, List, ThemeIcon } from '@mantine/core'
import { IconChartBar, IconCheck, IconMessageCircle } from '@tabler/icons-react'

export default function SalesforceHero() {
    return (
        <Box
            component="section"
            aria-label="Salesforce hero"
            mt={80}
            mb={80}
        >
            <Container size="lg">
                <Group
                    justify="center"
                    mb="md"
                >
                    <Badge
                        variant="filled"
                        size="xl"
                        leftSection={<IconChartBar style={{ width: rem(18), height: rem(18) }} />}
                    >
                        Salesforce Solutions
                    </Badge>
                </Group>

                <Title
                    order={1}
                    component="h1"
                    ta="center"
                    mb="xl"
                    style={{ lineHeight: 1.2 }}
                >
                    Custom Salesforce Development <br /> That Supercharges Your CRM
                </Title>

                <Text
                    size="xl"
                    c="dimmed"
                    ta="center"
                    maw={900}
                    mx="auto"
                    mb="xl"
                    style={{ lineHeight: 1.6 }}
                >
                    Build Lightning Web Components, custom integrations, and automations that transform Salesforce into
                    exactly what your business needs. Clean, maintainable code that scales with your organization.
                </Text>

                <List
                    size="lg"
                    spacing="md"
                    center
                    maw={700}
                    mx="auto"
                    mb="xl"
                    icon={
                        <ThemeIcon
                            size={24}
                            radius="xl"
                            variant="light"
                        >
                            <IconCheck style={{ width: rem(16), height: rem(16) }} />
                        </ThemeIcon>
                    }
                >
                    <List.Item>
                        <Text component="span">
                            <strong>Lightning Web Components:</strong> Modern, performant custom components for any use
                            case
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text component="span">
                            <strong>Custom Integrations:</strong> Connect Salesforce with any system—APIs, databases,
                            external apps
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text component="span">
                            <strong>Process Automation:</strong> Flows, Apex triggers, and custom logic that eliminate
                            manual work
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text component="span">
                            <strong>Component Libraries:</strong> Reusable, documented components that boost
                            productivity across teams
                        </Text>
                    </List.Item>
                </List>

                <Group
                    justify="center"
                    mt={40}
                >
                    <Button
                        size="xl"
                        leftSection={<IconMessageCircle style={{ width: rem(24), height: rem(24) }} />}
                    >
                        Discuss Your Salesforce Project
                    </Button>
                </Group>
            </Container>
        </Box>
    )
}
