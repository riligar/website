import { Box, Title, Text, Card, SimpleGrid, Avatar, Group, Rating, Container, Badge, Button, rem } from '@mantine/core'
import { IconQuote, IconArrowRight } from '@tabler/icons-react'

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CTO, TechFlow Solutions',
        company: 'SaaS Company',
        rating: 5,
        text: 'RiLiGar transformed our vision into reality. Their expertise in SaaS development is unmatched. The team delivered a lightweight, blazing-fast application that our customers love. What impressed us most was their clean code approach—everything is maintainable and scalable.',
        avatar: 'SJ',
    },
    {
        name: 'Michael Chen',
        role: 'Salesforce Admin',
        company: 'Enterprise Corp',
        rating: 5,
        text: "The custom Lightning Web Components that RiLiGar built for us have completely revolutionized our Salesforce workflows. They took the time to understand our business processes and created tools that genuinely solve our problems. Our team's productivity has increased by 40%.",
        avatar: 'MC',
    },
    {
        name: 'Emily Rodriguez',
        role: 'Product Manager',
        company: 'InnovateLabs',
        rating: 5,
        text: 'Working with RiLiGar felt like having a dedicated technical co-founder. They brought AI capabilities to our platform that we thought would take years to develop. The integration was seamless, and their communication throughout the project was exceptional.',
        avatar: 'ER',
    },
    {
        name: 'David Park',
        role: 'Founder & CEO',
        company: 'StartupHub',
        rating: 5,
        text: 'As a startup, we needed a development partner who could move fast without breaking things. RiLiGar delivered exactly that. Their agile approach and commitment to quality gave us the confidence to launch quickly and iterate based on user feedback.',
        avatar: 'DP',
    },
    {
        name: 'Lisa Williams',
        role: 'Operations Director',
        company: 'GrowthCo',
        rating: 5,
        text: "The AI automation solutions that RiLiGar implemented saved our team hundreds of hours every month. They didn't just implement technology—they took the time to understand our workflows and design solutions that actually work for our team.",
        avatar: 'LW',
    },
    {
        name: 'James Thompson',
        role: 'VP of Engineering',
        company: 'DataSystems Inc',
        rating: 5,
        text: "I've worked with many development agencies over my career, and RiLiGar stands out. Their technical depth is impressive—from Salesforce architecture to modern JavaScript frameworks to AI integration. Plus, they're genuinely great people to work with.",
        avatar: 'JT',
    },
]

export default function Testimonials() {
    return (
        <Box
            component="section"
            aria-label="Client testimonials"
            py="xl"
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
                        What Our Clients Say
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                    size={{ base: 28, sm: 32, md: 36 }}
                >
                    Trusted by Teams That Build Amazing Things
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={50}
                    maw={700}
                    mx="auto"
                >
                    Don't just take our word for it. Here's what companies say about working with RiLiGar.
                </Text>

                <SimpleGrid
                    cols={{ base: 1, md: 2, lg: 3 }}
                    spacing="lg"
                >
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            shadow="md"
                            radius="md"
                            padding="lg"
                            style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        >
                            <IconQuote
                                size={32}
                                style={{ opacity: 0.3, marginBottom: '1rem' }}
                            />

                            <Text
                                size="sm"
                                c="dimmed"
                                style={{ flex: 1 }}
                            >
                                {testimonial.text}
                            </Text>

                            <Box mt="md">
                                <Rating
                                    value={testimonial.rating}
                                    readOnly
                                    size="sm"
                                    mb="md"
                                />

                                <Group>
                                    <Avatar
                                        color="blue"
                                        radius="xl"
                                    >
                                        {testimonial.avatar}
                                    </Avatar>
                                    <div>
                                        <Text
                                            size="sm"
                                            fw={600}
                                        >
                                            {testimonial.name}
                                        </Text>
                                        <Text
                                            size="xs"
                                            c="dimmed"
                                        >
                                            {testimonial.role}
                                        </Text>
                                        <Text
                                            size="xs"
                                            c="dimmed"
                                        >
                                            {testimonial.company}
                                        </Text>
                                    </div>
                                </Group>
                            </Box>
                        </Card>
                    ))}
                </SimpleGrid>

                <Group
                    justify="center"
                    mt={50}
                >
                    <Button
                        component="a"
                        href="https://blog.ciromaciel.click"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="md"
                        variant="outline"
                        rightSection={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
                    >
                        Read More Stories
                    </Button>
                </Group>
            </Container>
        </Box>
    )
}
