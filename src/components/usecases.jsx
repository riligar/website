import {
    Box,
    Title,
    Text,
    Container,
    Card,
    SimpleGrid,
    Badge,
    Group,
    List,
    ThemeIcon,
    rem,
    Button,
} from '@mantine/core'
import {
    IconCheck,
    IconRobot,
    IconChartBar,
    IconCloudComputing,
    IconSparkles,
    IconArrowRight,
} from '@tabler/icons-react'
import { Trans, useLingui } from '@lingui/react/macro'

const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de discutir meu caso de uso com a RiLiGar. Podemos conversar?'
)
const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

const useCases = [
    {
        id: 'customer-service',
        icon: IconRobot,
        badgeKey: 'AI Agents',
        titleKey: 'Customer Service Automation',
        descriptionKey:
            'Deploy AI agents that handle customer inquiries, provide instant responses, and escalate complex issues to your team—all while learning from every interaction.',
        benefits: ['24/7 availability', 'Instant responses', 'Consistent quality', 'Scales effortlessly'],
    },
    {
        id: 'sales-pipeline',
        icon: IconChartBar,
        badgeKey: 'Salesforce',
        titleKey: 'Sales Pipeline Intelligence',
        descriptionKey:
            'Custom Salesforce components that provide real-time insights, automate data entry, and help your sales team focus on closing deals instead of administrative tasks.',
        benefits: ['Real-time dashboards', 'Automated workflows', 'Better forecasting', 'Higher productivity'],
    },
    {
        id: 'industry-saas',
        icon: IconCloudComputing,
        badgeKey: 'SaaS Platform',
        titleKey: 'Industry-Specific SaaS',
        descriptionKey:
            'Build a complete SaaS platform tailored to your industry. From MVP to enterprise-scale, we handle everything: architecture, development, deployment, and scaling.',
        benefits: ['Rapid MVP launch', 'Scalable architecture', 'Cost-effective hosting', 'Modern tech stack'],
    },
    {
        id: 'document-processing',
        icon: IconSparkles,
        badgeKey: 'AI Integration',
        titleKey: 'Document Processing System',
        descriptionKey:
            'Integrate AI to automatically extract, analyze, and process documents. Turn unstructured data into actionable insights without manual data entry.',
        benefits: ['Automated extraction', 'High accuracy', 'Time savings', 'Error reduction'],
    },
]

export default function UseCases() {
    return (
        <Box
            component="section"
            aria-label="Real-world use cases"
            py={80}
        >
            <Container size="xl">
                <Group
                    justify="center"
                    mb="md"
                >
                    <Badge
                        variant="filled"
                        size="lg"
                    >
                        <Trans>Real-World Applications</Trans>
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                    size={{ base: 28, sm: 32, md: 36 }}
                >
                    <Trans>See How Our Solutions Work in Practice</Trans>
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    <Trans>
                        These are just a few examples. Every solution is customized to your specific needs and industry.
                    </Trans>
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 2 }}
                    // spacing="lg"
                >
                    {useCases.map(useCase => (
                        <Card
                            key={useCase.id}
                            shadow="md"
                            radius="md"
                            padding="xl"
                            withBorder
                        >
                            <Group mb="md">
                                <useCase.icon
                                    style={{ width: rem(40), height: rem(40) }}
                                    stroke={2}
                                    color="#228be6"
                                />
                                <Badge
                                    size="sm"
                                    variant="light"
                                >
                                    <Trans>{useCase.badgeKey}</Trans>
                                </Badge>
                            </Group>

                            <Title
                                order={4}
                                mb="xs"
                            >
                                <Trans>{useCase.titleKey}</Trans>
                            </Title>

                            <Text
                                size="sm"
                                c="dimmed"
                                mb="md"
                            >
                                <Trans>{useCase.descriptionKey}</Trans>
                            </Text>

                            <Text
                                size="sm"
                                fw={600}
                                mb="xs"
                            >
                                <Trans>Key Benefits:</Trans>
                            </Text>

                            <List
                                spacing="xs"
                                size="sm"
                                icon={
                                    <ThemeIcon
                                        size={20}
                                        radius="xl"
                                        variant="light"
                                    >
                                        <IconCheck
                                            style={{ width: rem(12), height: rem(12) }}
                                            stroke={3}
                                        />
                                    </ThemeIcon>
                                }
                            >
                                {useCase.benefits.map((benefit, idx) => (
                                    <List.Item key={idx}>
                                        <Trans>{benefit}</Trans>
                                    </List.Item>
                                ))}
                            </List>
                        </Card>
                    ))}
                </SimpleGrid>

                <Group
                    justify="center"
                    mt={50}
                >
                    <Button
                        component="a"
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="lg"
                        variant="outline"
                        rightSection={<IconArrowRight style={{ width: rem(18), height: rem(18) }} />}
                    >
                        <Trans>Discuss Your Use Case</Trans>
                    </Button>
                </Group>
            </Container>
        </Box>
    )
}
