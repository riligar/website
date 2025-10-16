import { Box, Title, Text, Container, SimpleGrid, Paper, rem } from '@mantine/core'

const clients = [
    { name: 'TechFlow Solutions', industry: 'SaaS' },
    { name: 'Enterprise Corp', industry: 'Enterprise' },
    { name: 'InnovateLabs', industry: 'Technology' },
    { name: 'StartupHub', industry: 'Startup Platform' },
    { name: 'GrowthCo', industry: 'Operations' },
    { name: 'DataSystems Inc', industry: 'Data Analytics' },
    { name: 'CloudScale', industry: 'Cloud Services' },
    { name: 'FinTech Pro', industry: 'Financial Tech' },
]

export default function Clients() {
    return (
        <Box
            py={60}
            style={{
                borderTop: '1px solid #e9ecef',
                borderBottom: '1px solid #e9ecef',
                background: 'rgba(249, 250, 251, 0.5)',
            }}
        >
            <Container size="xl">
                <Text
                    size="sm"
                    ta="center"
                    c="dimmed"
                    fw={600}
                    mb="xl"
                    tt="uppercase"
                    style={{ letterSpacing: 2 }}
                >
                    Trusted by Forward-Thinking Companies
                </Text>

                <SimpleGrid
                    cols={{ base: 2, sm: 4, lg: 4 }}
                    spacing="xl"
                >
                    {clients.map((client, index) => (
                        <Paper
                            key={index}
                            p="md"
                            radius="md"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid #e9ecef',
                                background: 'white',
                                minHeight: '100px',
                                transition: 'all 0.2s',
                                cursor: 'default',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = '#228be6'
                                e.currentTarget.style.transform = 'scale(1.05)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = '#e9ecef'
                                e.currentTarget.style.transform = 'scale(1)'
                            }}
                        >
                            <Text
                                size="lg"
                                fw={700}
                                ta="center"
                                c="dark"
                                mb={4}
                            >
                                {client.name}
                            </Text>
                            <Text
                                size="xs"
                                c="dimmed"
                                ta="center"
                            >
                                {client.industry}
                            </Text>
                        </Paper>
                    ))}
                </SimpleGrid>

                <Text
                    size="xs"
                    ta="center"
                    c="dimmed"
                    mt="xl"
                >
                    From startups to enterprises, we deliver solutions that drive growth across industries
                </Text>
            </Container>
        </Box>
    )
}
