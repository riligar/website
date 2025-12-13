import {
    Badge,
    Group,
    Title,
    Text,
    Box,
    Stack,
    Container,
    SimpleGrid,
    ThemeIcon,
    Button,
    rem,
    Paper,
} from '@mantine/core'
import {
    IconRocket,
    IconBrain,
    IconChartBar,
    IconRefresh,
    IconClock,
    IconTrendingUp,
    IconAlertTriangle,
    IconCheck,
    IconArrowRight,
} from '@tabler/icons-react'

const solutions = [
    {
        id: 'diagnostico',
        icon: IconBrain,
        title: 'Diagnóstico de Processos',
        problemStatement: 'Você não sabe exatamente onde está perdendo dinheiro.',
        description:
            'Mapeamos seus processos atuais, identificamos gargalos invisíveis e quantificamos o impacto real no seu faturamento. Antes de automatizar qualquer coisa, entendemos onde está o problema.',
        results: ['Mapeamento completo em 2 semanas', 'Relatório com ROI potencial', 'Priorização de ações'],
        color: 'blue',
    },
    {
        id: 'automacao',
        icon: IconRefresh,
        title: 'Automação Inteligente',
        problemStatement: 'Sua equipe gasta horas em tarefas que uma máquina faria em minutos.',
        description:
            'Criamos automações que eliminam trabalho manual, reduzem erros e liberam sua equipe para o que realmente importa: vender mais, atender melhor, inovar.',
        results: ['Redução de 60-80% em tarefas manuais', 'Zero erros de digitação', 'Operação 24/7'],
        color: 'green',
    },
    {
        id: 'integracao',
        icon: IconChartBar,
        title: 'Integração de Sistemas',
        problemStatement: 'Seus sistemas não conversam entre si. Dados duplicados, retrabalho constante.',
        description:
            'Conectamos suas ferramentas — CRM, ERP, WhatsApp, planilhas, e-commerce — para que informações fluam automaticamente, sem intervenção manual.',
        results: ['Dados sincronizados em tempo real', 'Fim do "copia e cola"', 'Visão unificada do negócio'],
        color: 'violet',
    },
    {
        id: 'ia',
        icon: IconTrendingUp,
        title: 'IA Aplicada ao Negócio',
        problemStatement: 'Você ouve falar de IA todo dia, mas não sabe como aplicar no seu negócio.',
        description:
            'Implementamos soluções práticas de IA: chatbots inteligentes, análise preditiva, processamento de documentos, assistentes virtuais que realmente funcionam.',
        results: ['Atendimento automatizado 24/7', 'Análises que preveem tendências', 'Decisões baseadas em dados'],
        color: 'orange',
    },
]

function SolutionCard({ solution }) {
    const Icon = solution.icon

    return (
        <Paper
            p="xl"
            radius="lg"
            shadow="sm"
            style={{
                border: '1px solid var(--mantine-color-gray-2)',
                transition: 'all 0.3s ease',
                height: '100%',
            }}
            className="solution-card"
        >
            <Stack gap="md">
                {/* Problem Statement - Ataca a dor */}
                <Box
                    p="md"
                    style={{
                        background: 'rgba(255, 107, 107, 0.08)',
                        borderRadius: 'var(--mantine-radius-md)',
                        borderLeft: '4px solid var(--mantine-color-red-6)',
                    }}
                >
                    <Group gap="xs">
                        <IconAlertTriangle
                            style={{ width: rem(18), height: rem(18), color: 'var(--mantine-color-red-6)' }}
                        />
                        <Text
                            size="sm"
                            fw={600}
                            c="red.7"
                        >
                            O Problema:
                        </Text>
                    </Group>
                    <Text
                        size="sm"
                        mt="xs"
                        style={{ fontStyle: 'italic' }}
                    >
                        "{solution.problemStatement}"
                    </Text>
                </Box>

                {/* Icon and Title */}
                <Group gap="md">
                    <ThemeIcon
                        size={48}
                        radius="lg"
                        variant="light"
                        color={solution.color}
                    >
                        <Icon style={{ width: rem(28), height: rem(28) }} />
                    </ThemeIcon>
                    <Title order={3}>{solution.title}</Title>
                </Group>

                {/* Description */}
                <Text
                    c="dimmed"
                    size="sm"
                    style={{ lineHeight: 1.6 }}
                >
                    {solution.description}
                </Text>

                {/* Results */}
                <Box
                    p="md"
                    style={{
                        background: 'rgba(64, 192, 87, 0.08)',
                        borderRadius: 'var(--mantine-radius-md)',
                        borderLeft: '4px solid var(--mantine-color-green-6)',
                    }}
                >
                    <Text
                        size="sm"
                        fw={600}
                        c="green.7"
                        mb="xs"
                    >
                        Resultados:
                    </Text>
                    <Stack gap={6}>
                        {solution.results.map((result, index) => (
                            <Group
                                key={index}
                                gap="xs"
                            >
                                <IconCheck style={{ width: rem(14), height: rem(14), color: 'green' }} />
                                <Text size="sm">{result}</Text>
                            </Group>
                        ))}
                    </Stack>
                </Box>
            </Stack>
        </Paper>
    )
}

function SolutionsHero() {
    const whatsappMessage = encodeURIComponent(
        'Olá! Tenho interesse em conhecer as soluções da RiLiGar. Gostaria de agendar uma conversa de diagnóstico.'
    )
    const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

    return (
        <Box
            component="section"
            aria-label="Soluções Hero"
            mt={80}
            mb={60}
        >
            <Container size="lg">
                {/* Badge */}
                <Group
                    justify="center"
                    mb="md"
                >
                    <Badge
                        variant="filled"
                        size="xl"
                        leftSection={<IconRocket style={{ width: rem(16), height: rem(16) }} />}
                    >
                        Soluções que Transformam
                    </Badge>
                </Group>

                {/* Main Headline - Viral */}
                <Title
                    order={1}
                    ta="center"
                    size={{ base: 32, sm: 42, md: 52 }}
                    style={{ lineHeight: 1.1 }}
                    mb="xl"
                >
                    Seu Negócio Está{' '}
                    <Text
                        component="span"
                        inherit
                        c="red"
                    >
                        Sangrando Dinheiro
                    </Text>{' '}
                    Todos os Dias.
                    <br />
                    <Text
                        component="span"
                        inherit
                        c="blue"
                    >
                        Você Só Não Sabe Onde.
                    </Text>
                </Title>

                {/* Sub-headline */}
                <Text
                    size="xl"
                    c="dimmed"
                    ta="center"
                    maw={800}
                    mx="auto"
                    style={{ lineHeight: 1.6 }}
                    mb="xl"
                >
                    Processos manuais, sistemas desconectados, retrabalho constante, oportunidades perdidas — tudo isso
                    custa caro. A maioria dos empresários não percebe porque está ocupado demais "apagando incêndios".
                </Text>

                {/* Pain Points - Quick hits */}
                <SimpleGrid
                    cols={{ base: 2, sm: 4 }}
                    spacing="lg"
                    mb={40}
                >
                    {[
                        { icon: IconClock, text: 'Horas perdidas em planilhas' },
                        { icon: IconRefresh, text: 'Mesma tarefa feita 10 vezes' },
                        { icon: IconAlertTriangle, text: 'Erros que custam clientes' },
                        { icon: IconChartBar, text: 'Decisões sem dados reais' },
                    ].map((pain, index) => (
                        <Box
                            key={index}
                            ta="center"
                        >
                            <ThemeIcon
                                size={48}
                                radius="xl"
                                variant="light"
                                color="red"
                                mb="xs"
                                mx="auto"
                            >
                                <pain.icon style={{ width: rem(24), height: rem(24) }} />
                            </ThemeIcon>
                            <Text
                                size="sm"
                                fw={500}
                            >
                                {pain.text}
                            </Text>
                        </Box>
                    ))}
                </SimpleGrid>

                {/* Promise Statement */}
                <Paper
                    p="xl"
                    radius="lg"
                    mb={40}
                    style={{
                        background:
                            'linear-gradient(135deg, rgba(34, 139, 230, 0.1) 0%, rgba(58, 134, 255, 0.05) 100%)',
                        border: '1px solid var(--mantine-color-blue-2)',
                    }}
                >
                    <Text
                        size="lg"
                        ta="center"
                        fw={600}
                    >
                        🎯 Nós não vendemos tecnologia.{' '}
                        <Text
                            component="span"
                            c="blue"
                            inherit
                        >
                            Vendemos resultados.
                        </Text>
                    </Text>
                    <Text
                        size="md"
                        c="dimmed"
                        ta="center"
                        mt="xs"
                    >
                        Primeiro diagnosticamos, depois propomos. Se não encontrarmos oportunidades reais de melhoria,
                        você não paga nada.
                    </Text>
                </Paper>

                {/* CTA */}
                <Group
                    justify="center"
                    gap="md"
                >
                    <Button
                        component="a"
                        href="/contact"
                        size="xl"
                        leftSection={<IconRocket style={{ width: rem(22), height: rem(22) }} />}
                    >
                        Quero um Diagnóstico Grátis
                    </Button>
                    <Button
                        component="a"
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="xl"
                        variant="outline"
                        rightSection={<IconArrowRight style={{ width: rem(20), height: rem(20) }} />}
                    >
                        Falar no WhatsApp
                    </Button>
                </Group>
            </Container>
        </Box>
    )
}

export default function Solutions() {
    return (
        <>
            {/* Hero Section */}
            <SolutionsHero />

            {/* Solutions Grid */}
            <Box
                component="section"
                id="solucoes"
                aria-label="Nossas Soluções"
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
                            O Que Fazemos
                        </Badge>
                    </Group>

                    <Title
                        order={2}
                        ta="center"
                        size={{ base: 28, sm: 32, md: 36 }}
                        mb="md"
                    >
                        Soluções Sob Medida Para Cada Problema
                    </Title>

                    <Text
                        c="dimmed"
                        ta="center"
                        maw={700}
                        mx="auto"
                        mb={50}
                    >
                        Não aplicamos fórmulas prontas. Cada negócio é único — e sua solução também precisa ser.
                    </Text>

                    <SimpleGrid
                        cols={{ base: 1, sm: 2 }}
                        spacing="xl"
                    >
                        {solutions.map(solution => (
                            <SolutionCard
                                key={solution.id}
                                solution={solution}
                            />
                        ))}
                    </SimpleGrid>

                    {/* Final CTA */}
                    <Box
                        ta="center"
                        mt={60}
                    >
                        <Text
                            size="xl"
                            fw={600}
                            mb="md"
                        >
                            Não sabe qual solução precisa?{' '}
                            <Text
                                component="span"
                                c="blue"
                                inherit
                            >
                                Normal.
                            </Text>
                        </Text>
                        <Text
                            c="dimmed"
                            mb="xl"
                            maw={600}
                            mx="auto"
                        >
                            É exatamente por isso que começamos com um diagnóstico. Em 30 minutos de conversa,
                            identificamos onde estão as maiores oportunidades do seu negócio.
                        </Text>
                        <Button
                            component="a"
                            href="/contact"
                            size="lg"
                            leftSection={<IconRocket style={{ width: rem(20), height: rem(20) }} />}
                        >
                            Agendar Diagnóstico Gratuito
                        </Button>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
