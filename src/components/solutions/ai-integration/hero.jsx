import { Title, Text, Container, Box, Badge, Group, Button, rem, List, ThemeIcon } from '@mantine/core'
import { IconSparkles, IconCheck, IconMessageCircle } from '@tabler/icons-react'


export default function AIIntegrationHero() {
    return (
        <Box
            component="section"
            aria-label="AI Integration hero"
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
                        leftSection={<IconSparkles style={{ width: rem(18), height: rem(18) }} />}
                    >
                        AI Integration
                    </Badge>
                </Group>

                <Title
                    order={1}
                    component="h1"
                    ta="center"
                    mb="xl"
                    style={{ lineHeight: 1.2 }}
                >
                    
                        Add AI Capabilities <br /> To Your Existing Systems
                    
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
                    
                        Integrate cutting-edge AI into your current applications and workflows. Natural language
                        processing, document analysis, predictive analytics, and intelligent automation—tailored to your
                        specific needs.
                    
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
                            
                                <strong>No Rip-and-Replace:</strong> AI enhances your existing systems, doesn't replace
                                them
                            
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text component="span">
                            
                                <strong>Custom AI Models:</strong> Fine-tuned for your data and use cases
                            
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text component="span">
                            
                                <strong>API-First:</strong> Easy integration with any application or platform
                            
                        </Text>
                    </List.Item>
                    <List.Item>
                        <Text component="span">
                            
                                <strong>Production-Ready:</strong> Reliable, monitored, and scalable AI services
                            
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
                        Discuss AI Integration
                    </Button>
                </Group>
            </Container>
        </Box>
    )
}
