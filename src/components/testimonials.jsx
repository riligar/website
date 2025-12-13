import { Box, Title, Text, Card, SimpleGrid, Avatar, Group, Rating, Container, Badge, Button, rem } from '@mantine/core'
import { IconQuote, IconArrowRight } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

const testimonials = [
    {
        id: 'ana-silva',
        name: 'Ana Silva',
        role: 'Sócia-Diretora',
        company: 'Escritório de Advocacia',
        rating: 5,
        textKey:
            'Achávamos que precisávamos automatizar a entrada de leads. O diagnóstico revelou que nosso problema real era o processo de qualificação. Depois do redesenho, economizamos horas por dia e os leads certos chegam direto ao advogado certo.',
        avatar: 'AS',
    },
    {
        id: 'carlos-mendes',
        name: 'Carlos Mendes',
        role: 'Diretor de Operações',
        company: 'Rede de Casas de Repouso',
        rating: 5,
        textKey:
            'Queríamos automatizar planilhas de inventário. Eles descobriram que não tínhamos protocolos de recompra e vendas prometia entregas sem checar estoque. Resultado depois do redesenho: $100K economizados por ano.',
        avatar: 'CM',
    },
    {
        id: 'fernanda-costa',
        name: 'Fernanda Costa',
        role: 'CEO',
        company: 'E-commerce',
        rating: 5,
        textKey:
            'Tomávamos decisões baseadas em planilhas desatualizadas. Criaram visibilidade completa do pipeline de vendas — não automatizando o existente, mas redesenhando como a informação deveria fluir. Agora temos previsibilidade de receita.',
        avatar: 'FC',
    },
    {
        id: 'roberto-almeida',
        name: 'Roberto Almeida',
        role: 'Sócio-Fundador',
        company: 'Escritório de Contabilidade',
        rating: 5,
        textKey:
            'Clientes reclamavam da frequência de atualizações — mas era da qualidade. Redesenharam nossa comunicação inteira. A automação foi mínima; o impacto foi enorme. Agora clientes elogiam proativamente.',
        avatar: 'RA',
    },
    {
        id: 'patricia-santos',
        name: 'Patrícia Santos',
        role: 'Diretora Administrativa',
        company: 'Indústria Têxtil',
        rating: 5,
        textKey:
            'Pensávamos que nosso problema era tecnologia ultrapassada. O diagnóstico mostrou que eram processos manuais desnecessários. Com redesenho + automação inteligente, reduzimos tempo de produção em 35%.',
        avatar: 'PS',
    },
    {
        id: 'marcos-lima',
        name: 'Marcos Lima',
        role: 'Fundador',
        company: 'Startup Tech',
        rating: 5,
        textKey:
            'Como startup, precisávamos de um parceiro que movesse rápido sem quebrar nada. Entregaram exatamente isso. Em 3 semanas já víamos resultado. A abordagem de diagnóstico primeiro fez toda a diferença.',
        avatar: 'ML',
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
                        <Trans>O Que Nossos Clientes Dizem</Trans>
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                    size={{ base: 28, sm: 32, md: 36 }}
                >
                    <Trans>Empresas Que Transformamos</Trans>
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={50}
                    maw={700}
                    mx="auto"
                >
                    <Trans>
                        Esses são depoimentos de empresas que passaram pelo nosso processo de diagnóstico e
                        transformação.
                    </Trans>
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
                                style={{ opacity: 0.3, marginBottom: '1rem' }}
                            />

                            <Text
                                size="sm"
                                c="dimmed"
                                style={{ flex: 1 }}
                            >
                                <Trans>{testimonial.textKey}</Trans>
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
                        <Trans>Ler Mais Histórias</Trans>
                    </Button>
                </Group>
            </Container>
        </Box>
    )
}
