import {
    Box,
    Title,
    Text,
    Card,
    SimpleGrid,
    Avatar,
    Group,
    Rating,
    Container,
    Badge,
    Button,
    useMantineTheme,
} from '@mantine/core'
import { IconQuote, IconArrowRight } from '@tabler/icons-react'

const testimonials = [
    {
        id: 'ana-silva',
        name: 'Ana Silva',
        role: 'Sócia-Diretora',
        company: 'Escritório de Advocacia',
        rating: 5,
        text: 'Acreditamos que o gargalo era a entrada de leads. O diagnóstico da RiLiGar provou que estávamos perdendo 15h semanais em triagem manual ineficiente. O redesenho do fluxo nos devolveu esse tempo e triplicou nossa velocidade de resposta.',
        avatar: 'AS',
    },
    {
        id: 'carlos-mendes',
        name: 'Carlos Mendes',
        role: 'Diretor de Operações',
        company: 'Rede de Casas de Repouso',
        rating: 5,
        text: 'Estávamos prontos para gastar em um software complexo de inventário. A RiLiGar nos parou, diagnosticou falhas no protocolo de compra e economizou $100K ao ano com uma solução simples e pragmática.',
        avatar: 'CM',
    },
    // {
    //     id: 'fernanda-costa',
    //     name: 'Fernanda Costa',
    //     role: 'CEO',
    //     company: 'E-commerce',
    //     rating: 5,
    //     text: 'Vínhamos tomando decisões no escuro. Hoje, operamos com margens reais por produto em tempo real. Não foi só uma entrega técnica, foi uma mudança de nível operacional.',
    //     avatar: 'FC',
    // },
    {
        id: 'roberto-almeida',
        name: 'Roberto Almeida',
        role: 'Sócio-Fundador',
        company: 'Escritório de Contabilidade',
        rating: 5,
        text: 'Onde outros viam problemas de suporte, a RiLiGar viu problemas de processo. Redesenhamos a comunicação e o churn parou. O sistema novo se tornou nosso maior diferencial de venda.',
        avatar: 'RA',
    },
]

export default function Testimonials() {
    const theme = useMantineTheme()

    return (
        <Box
            component="section"
            aria-label="Client testimonials"
            py={80}
        >
            <Group
                justify="center"
                mb="md"
            >
                <Badge
                    variant="light"
                    color="gray"
                    size="lg"
                >
                    Quem Estancou o Desperdício
                </Badge>
            </Group>

            <Title
                order={2}
                ta="center"
                mb="md"
                size={{ base: 28, sm: 32, md: 36 }}
                c="dark"
            >
                Sistemas Que Geram Lucro Real
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mb={50}
                maw={700}
                mx="auto"
            >
                Estes são depoimentos de operadores que trocaram o caos por sistemas de alta performance.
            </Text>

            <SimpleGrid
                cols={{ base: 1, md: 2, lg: 3 }}
                spacing="lg"
            >
                {testimonials.map(testimonial => (
                    <Card
                        key={testimonial.id}
                        shadow="md"
                        radius="md"
                        padding="lg"
                        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <IconQuote
                            size={32}
                            stroke={1.5}
                            color={theme.colors.gray[3]}
                            style={{ marginBottom: '1rem' }}
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
                                color="dark"
                            />

                            <Group>
                                <Avatar
                                    color="gray"
                                    radius="xl"
                                    variant="light"
                                >
                                    {testimonial.avatar}
                                </Avatar>
                                <div>
                                    <Text
                                        size="sm"
                                        fw={700}
                                        c="dark"
                                    >
                                        {testimonial.name}
                                    </Text>
                                    <Text
                                        size="xs"
                                        c="dimmed"
                                        fw={500}
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

            {/* <Group
                justify="center"
                mt={60}
            >
                <Button
                    component="a"
                    href="https://blog.ciromaciel.click"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    variant="outline"
                    rightSection={
                        <IconArrowRight
                            size={18}
                            stroke={1.5}
                        />
                    }
                >
                    Ler Mais Histórias
                </Button>
            </Group> */}
        </Box>
    )
}
