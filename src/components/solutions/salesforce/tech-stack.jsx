import { Box, Title, Text, Container, SimpleGrid, Card, ThemeIcon, rem, List, Group } from '@mantine/core'
import {
    IconBrandJavascript,
    IconCode,
    IconDatabase,
    IconBrandGit,
    IconTestPipe,
    IconCloudComputing,
    IconCheck,
} from '@tabler/icons-react'

const techStack = [
    {
        category: 'Frontend Development',
        icon: IconBrandJavascript,
        color: 'yellow',
        technologies: [
            'Lightning Web Components (LWC)',
            'JavaScript (ES6+)',
            'Aura Components (legacy support)',
            'HTML5 & CSS3',
            'Salesforce Lightning Design System (SLDS)',
            'lwc-test-suite for unit testing',
        ],
        description:
            'We build modern, performant Lightning Web Components using JavaScript best practices. Components are reusable, well-documented, and follow Salesforce standards.',
    },
    {
        category: 'Backend & Logic',
        icon: IconCode,
        color: 'blue',
        technologies: [
            'Apex (Salesforce programming language)',
            'Triggers & Batch Apex',
            'Apex REST & SOAP Web Services',
            'Custom Controllers & Extensions',
            'Queueable & Schedulable classes',
            'Governor limits optimization',
        ],
        description:
            "Apex code that's efficient, testable, and maintainable. We write bulkified code that respects governor limits and scales with data volume.",
    },
    {
        category: 'Automation & Flow',
        icon: IconCloudComputing,
        color: 'green',
        technologies: [
            'Flow Builder (Screen, Record-Triggered, Scheduled)',
            'Process Builder (legacy support)',
            'Workflow Rules migration',
            'Custom Apex Actions for Flow',
            'Platform Events for integration',
            'Change Data Capture (CDC)',
        ],
        description:
            'Declarative automation with Flow Builder, enhanced with custom Apex actions when needed. We migrate legacy automation to modern Flow patterns.',
    },
    {
        category: 'Data & Integration',
        icon: IconDatabase,
        color: 'violet',
        technologies: [
            'Salesforce Object Query Language (SOQL)',
            'Salesforce Object Search Language (SOSL)',
            'REST & SOAP API integration',
            'MuleSoft (for complex integrations)',
            'External Objects & OData',
            'Heroku Connect for external data',
        ],
        description:
            'Seamless data integration between Salesforce and external systems. Efficient queries, proper indexing, and scalable integration patterns.',
    },
    {
        category: 'Testing & Quality',
        icon: IconTestPipe,
        color: 'red',
        technologies: [
            'Apex Test Classes (80%+ coverage)',
            'Jest for LWC unit testing',
            'Selenium for end-to-end testing',
            'PMD & ApexMetrics for code quality',
            'Salesforce Code Analyzer',
            'Continuous Integration (CI/CD)',
        ],
        description:
            'Comprehensive testing ensures reliability. We write tests first, maintain high coverage, and catch issues before they reach production.',
    },
    {
        category: 'DevOps & Deployment',
        icon: IconBrandGit,
        color: 'orange',
        technologies: [
            'Salesforce DX (SFDX)',
            'Git for version control',
            'VS Code with Salesforce extensions',
            'Scratch orgs for development',
            'GitHub Actions / Jenkins for CI/CD',
            'Change sets & Metadata API',
        ],
        description:
            'Modern DevOps practices for Salesforce development. Source-driven development, automated deployments, and proper version control.',
    },
]

export default function SalesforceTechStack() {
    return (
        <Box
            component="section"
            aria-label="Salesforce tech stack"
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
                    Our Salesforce Technology Stack
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    size="lg"
                    maw={800}
                    mx="auto"
                    mb={60}
                >
                    We use the full power of the Salesforce platform—Lightning Web Components, Apex, Flow, and modern
                    DevOps practices. 20+ years of software engineering applied to Salesforce development.
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 2 }}
                    spacing="xl"
                >
                    {techStack.map((stack, index) => (
                        <Card
                            key={index}
                            shadow="md"
                            radius="md"
                            padding="xl"
                            withBorder
                        >
                            <Group mb="md">
                                <ThemeIcon
                                    size={50}
                                    radius="md"
                                    variant="light"
                                    color={stack.color}
                                >
                                    <stack.icon
                                        style={{ width: rem(30), height: rem(30) }}
                                        stroke={1.5}
                                    />
                                </ThemeIcon>
                                <div>
                                    <Text
                                        fz="lg"
                                        fw={600}
                                    >
                                        {stack.category}
                                    </Text>
                                </div>
                            </Group>

                            <Text
                                size="sm"
                                c="dimmed"
                                mb="md"
                            >
                                {stack.description}
                            </Text>

                            <List
                                size="sm"
                                spacing="xs"
                                icon={
                                    <ThemeIcon
                                        size={18}
                                        radius="xl"
                                        variant="light"
                                        color={stack.color}
                                    >
                                        <IconCheck
                                            style={{ width: rem(12), height: rem(12) }}
                                            stroke={2}
                                        />
                                    </ThemeIcon>
                                }
                            >
                                {stack.technologies.map((tech, idx) => (
                                    <List.Item key={idx}>
                                        <Text
                                            size="sm"
                                            fw={500}
                                        >
                                            {tech}
                                        </Text>
                                    </List.Item>
                                ))}
                            </List>
                        </Card>
                    ))}
                </SimpleGrid>

                <Box
                    mt={60}
                    p="xl"
                    style={{
                        background:
                            'linear-gradient(135deg, rgba(34, 139, 230, 0.1) 0%, rgba(58, 134, 255, 0.05) 100%)',
                        borderRadius: '12px',
                    }}
                >
                    <Title
                        order={3}
                        ta="center"
                        mb="md"
                    >
                        Why Our Salesforce Development Stands Out
                    </Title>
                    <Text
                        ta="center"
                        size="lg"
                        maw={900}
                        mx="auto"
                    >
                        We're not just Salesforce developers—we're software engineers who happen to specialize in
                        Salesforce. That means clean, maintainable code; proper testing; version control; CI/CD; and all
                        the best practices from enterprise software development. Your Salesforce org deserves better
                        than quick hacks—it deserves engineering excellence.
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}
