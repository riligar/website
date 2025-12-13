import { Title, Text, Container, Box, Badge, Group, Button, rem, List, ThemeIcon } from '@mantine/core'
import { IconCloudComputing, IconCheck, IconMessageCircle } from '@tabler/icons-react'


export default function SaaSHero() {
    return (
        <Box
            component="section"
            aria-label="SaaS hero"
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
                        leftSection={<IconCloudComputing style={{ width: rem(18), height: rem(18) }} />}
                    >
                        SaaS Platforms
                    </Badge>
                </Group>

                <Title
                    order={1}
                    component="h1"
                    ta="center"
                    mb="xl"
                    style={{ lineHeight: 1.2 }}
                >
                    
                        Scalable SaaS Platforms <br /> Built Right From Day One
                    
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
                    
                        We build modern, high-performance SaaS applications with clean architecture. From MVP to
                        enterprise scale—lightweight, fast, and cost-effective to run.
                    
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
                            
                                <strong>Modern Tech Stack:</strong> React, Node.js, PostgreSQL, Redis—proven
                                technologies
                            
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text component="span">
                            
                                <strong>Cloud-Native:</strong> Built for AWS, GCP, or Azure with auto-scaling and high
                                availability
                            
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text component="span">
                            
                                <strong>Clean Architecture:</strong> Maintainable, testable, and ready to scale
                            
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text component="span">
                            
                                <strong>Cost-Effective:</strong> Optimized infrastructure that doesn't waste resources
                            
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
                        Discuss Your SaaS Idea
                    </Button>
                </Group>
            </Container>
        </Box>
    )
}
