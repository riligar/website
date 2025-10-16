import { Box, Title, Text, Container, SimpleGrid, Card, ThemeIcon, rem, List, Group } from '@mantine/core'
import {
    IconBrandReact,
    IconBrandNodejs,
    IconDatabase,
    IconBrandAws,
    IconBrandDocker,
    IconCheck,
} from '@tabler/icons-react'

const techStack = [
    {
        category: 'Frontend',
        icon: IconBrandReact,
        color: 'cyan',
        technologies: ['React / Next.js', 'TypeScript', 'Tailwind CSS / Mantine', 'React Query', 'Zustand / Redux'],
        description:
            'Modern, performant frontend with excellent UX. Fast load times, responsive design, and accessible interfaces.',
    },
    {
        category: 'Backend',
        icon: IconBrandNodejs,
        color: 'green',
        technologies: ['Node.js / Bun', 'Express / Fastify', 'TypeScript', 'GraphQL / REST', 'WebSockets'],
        description:
            'Scalable backend APIs built for performance. Clean code, proper error handling, and comprehensive logging.',
    },
    {
        category: 'Database',
        icon: IconDatabase,
        color: 'violet',
        technologies: ['PostgreSQL', 'Redis (caching)', 'MongoDB (NoSQL)', 'Prisma ORM', 'Database migrations'],
        description:
            'Robust data layer with proper indexing, caching, and backup strategies. Optimized queries and data integrity.',
    },
    {
        category: 'Infrastructure',
        icon: IconBrandAws,
        color: 'orange',
        technologies: ['AWS / GCP / Azure', 'Docker & Kubernetes', 'CI/CD pipelines', 'Load balancing', 'Auto-scaling'],
        description:
            'Cloud-native infrastructure that scales automatically. High availability, disaster recovery, and cost optimization.',
    },
    {
        category: 'DevOps',
        icon: IconBrandDocker,
        color: 'blue',
        technologies: [
            'Docker containers',
            'GitHub Actions',
            'Monitoring (Datadog)',
            'Logging (ELK stack)',
            'Security scanning',
        ],
        description:
            'Automated deployment pipelines ensure quality and speed. Monitoring and alerts keep systems healthy.',
    },
]

export default function SaaSTechStack() {
    return (
        <Box
            component="section"
            aria-label="SaaS tech stack"
            py={80}
            style={{ background: 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(255, 255, 255, 0) 100%)' }}
        >
            <Container size="xl">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    Our SaaS Technology Stack
                </Title>
                <Text
                    c="dimmed"
                    ta="center"
                    size="lg"
                    maw={800}
                    mx="auto"
                    mb={60}
                >
                    Modern, proven technologies that deliver performance, reliability, and maintainability. No hype—just
                    solid engineering.
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 2, lg: 3 }}
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
                                <Text
                                    fz="lg"
                                    fw={600}
                                >
                                    {stack.category}
                                </Text>
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
                        Why Our SaaS Platforms Stand Out
                    </Title>
                    <Text
                        ta="center"
                        size="lg"
                        maw={900}
                        mx="auto"
                    >
                        20+ years of software engineering means we know how to build systems that last. Clean code,
                        proper testing, scalable architecture, and cost-effective infrastructure. Your SaaS platform
                        deserves engineering excellence, not tech debt.
                    </Text>
                </Box>
            </Container>
        </Box>
    )
}
