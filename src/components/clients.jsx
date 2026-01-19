import { Box, Text, Container, SimpleGrid, Paper, useMantineTheme } from '@mantine/core'

const clients = [
    { name: 'Escritório Advocacia', industry: 'Jurídico' },
    { name: 'Rede de Casas de Repouso', industry: 'Saúde' },
    { name: 'E-commerce', industry: 'Varejo Digital' },
    { name: 'Contabilidade', industry: 'Serviços Contábeis' },
    { name: 'Indústria Têxtil', industry: 'Manufatura' },
    { name: 'Agência Marketing', industry: 'Comunicação' },
    { name: 'Clínica Médica', industry: 'Saúde' },
    { name: 'Startup Tech', industry: 'Tecnologia' },
]

export default function Clients() {
    const theme = useMantineTheme()

    return (
        <Box
            component="section"
            aria-label="Nossos clientes"
            py={60}
            bg="gray.0"
            bd={{ top: `1px solid ${theme.colors.gray[2]}`, bottom: `1px solid ${theme.colors.gray[2]}` }}
        >
            <Container size="xl">
                <Text
                    size="sm"
                    ta="center"
                    c="dimmed"
                    fw={600}
                    mb="xl"
                    tt="uppercase"
                    style={{ letterSpacing: '0.1em' }}
                >
                    Empresas Que Confiaram no Diagnóstico
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
                            bg="white"
                            bd={`1px solid ${theme.colors.gray[2]}`}
                            display="flex"
                            style={{
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                minHeight: '100px',
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'default',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = theme.colors.gray[8]
                                e.currentTarget.style.transform = 'translateY(-4px)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = theme.colors.gray[2]
                                e.currentTarget.style.transform = 'translateY(0)'
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
                    De startups a empresas estabelecidas, entregamos transformações que geram crescimento real
                </Text>
            </Container>
        </Box>
    )
}
