import { Badge, Group, Title, Text, Card, SimpleGrid, Box, rem, useMantineTheme } from '@mantine/core'
import { IconCloudComputing, IconChartBar, IconBrain, IconCode, IconRocket, IconShield } from '@tabler/icons-react'

const mockdata = [
    {
        title: 'Salesforce Development',
        description:
            'Build custom Salesforce components, Lightning Web Components, and integrations that supercharge your CRM. We create tools that fit seamlessly into your existing workflows.',
        icon: IconChartBar,
    },
    {
        title: 'SaaS Applications',
        description:
            'Develop high-performance, scalable SaaS solutions with clean architecture. Lightweight applications that deliver maximum value without the bloat.',
        icon: IconCloudComputing,
    },
    {
        title: 'AI Integration',
        description:
            'Harness the power of artificial intelligence to automate tasks, gain insights, and create intelligent workflows that transform how your team works.',
        icon: IconBrain,
    },
    {
        title: 'Clean Code Philosophy',
        description:
            'Every line of code matters. We build with maintainability, performance, and scalability in mind—creating solutions that stand the test of time.',
        icon: IconCode,
    },
    {
        title: 'Rapid Development',
        description:
            'Fast iterations without compromising quality. Get your product to market quickly with our streamlined development process and agile methodology.',
        icon: IconRocket,
    },
    {
        title: 'Enterprise Security',
        description:
            'Security is built-in, not bolted-on. We follow industry best practices to ensure your data and applications are protected at every level.',
        icon: IconShield,
    },
]

export default function Features() {
    const theme = useMantineTheme()
    const features = mockdata.map(feature => (
        <Card
            key={feature.title}
            shadow="md"
            radius="md"
            padding="lg"
        >
            <feature.icon
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color={theme.colors.blue[6]}
            />
            <Text
                fz="lg"
                fw={500}
                mt="md"
            >
                {feature.title}
            </Text>
            <Text
                fz="sm"
                c="dimmed"
                mt="sm"
            >
                {feature.description}
            </Text>
        </Card>
    ))

    return (
        <Box py="xl">
            <Group justify="center">
                <Badge
                    variant="filled"
                    size="lg"
                >
                    Trusted by Forward-Thinking Companies
                </Badge>
            </Group>

            <Title
                order={2}
                ta="center"
                mt="sm"
            >
                What makes us different?
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mt="md"
                maw={800}
                mx="auto"
            >
                We believe that great software is born from a commitment to clean, functional, and intelligent design.
                Our development philosophy centers on creating solutions that are powerful yet simple, cost-effective
                yet enterprise-grade. We focus on what matters: delivering exceptional value that drives measurable
                growth.
            </Text>

            <SimpleGrid
                cols={{ base: 1, md: 3 }}
                spacing="lg"
                mt={50}
            >
                {features}
            </SimpleGrid>
        </Box>
    )
}
