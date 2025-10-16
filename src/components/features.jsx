import { Badge, Group, Title, Text, Card, SimpleGrid, Box, rem, useMantineTheme } from '@mantine/core'
import { IconCloudComputing, IconChartBar, IconBrain, IconRobot, IconSparkles, IconShield } from '@tabler/icons-react'

const mockdata = [
    {
        title: 'AI Agents',
        description:
            'Deploy intelligent autonomous agents that work continuously for your business. From customer service to data analysis, our AI agents handle complex tasks, make informed decisions, and learn from interactions—all while you focus on growth.',
        icon: IconRobot,
        highlight: true,
    },
    {
        title: 'Salesforce Solutions',
        description:
            'Custom Lightning Web Components, integrations, and automations for Salesforce. Component libraries that enhance your CRM capabilities and streamline your sales, service, and marketing workflows.',
        icon: IconChartBar,
    },
    {
        title: 'SaaS Platforms',
        description:
            'End-to-end SaaS solutions built with modern architecture. From MVP to enterprise-scale, we deliver lightweight, high-performance applications that are easy to maintain and cost-effective to run.',
        icon: IconCloudComputing,
    },
    {
        title: 'AI Integration Services',
        description:
            'Integrate cutting-edge AI capabilities into your existing systems. Natural language processing, machine learning models, predictive analytics, and intelligent automation—tailored to your specific use cases.',
        icon: IconSparkles,
    },
    {
        title: 'Custom Development',
        description:
            'Bespoke solutions designed around your unique business requirements. Clean, maintainable code that scales with your needs and stands the test of time.',
        icon: IconBrain,
    },
    {
        title: 'Consulting & Strategy',
        description:
            'Technical guidance and strategic planning for your technology initiatives. We help you make informed decisions about architecture, tooling, and implementation approaches.',
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
            style={
                feature.highlight
                    ? {
                          border: `2px solid ${theme.colors.blue[6]}`,
                          background:
                              'linear-gradient(135deg, rgba(34, 139, 230, 0.05) 0%, rgba(58, 134, 255, 0.02) 100%)',
                      }
                    : {}
            }
        >
            {feature.highlight && (
                <Badge
                    variant="light"
                    color="blue"
                    size="sm"
                    mb="sm"
                >
                    Featured Solution
                </Badge>
            )}
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
        <Box
            component="section"
            aria-label="Solutions portfolio"
            py="xl"
        >
            <Group justify="center">
                <Badge
                    variant="filled"
                    size="lg"
                >
                    Solutions That Deliver Results
                </Badge>
            </Group>

            <Title
                order={2}
                ta="center"
                mt="sm"
            >
                Our Solutions Portfolio
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mt="md"
                maw={800}
                mx="auto"
            >
                Each solution is crafted to address specific business challenges. We combine cutting-edge technology
                with clean, maintainable code to deliver tools that are powerful, reliable, and built to last. From AI
                Agents that work autonomously to Salesforce components that boost productivity—we have the solutions you
                need to thrive.
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
