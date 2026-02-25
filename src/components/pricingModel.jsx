import {
    Box,
    Title,
    Text,
    Container,
    Paper,
    SimpleGrid,
    ThemeIcon,
    Badge,
    Group,
    List,
    Button,
    useMantineTheme,
} from '@mantine/core'
import { IconRocket, IconRefresh, IconChartLine, IconCheck, IconCalendar } from '@tabler/icons-react'

const whatsappMessage = encodeURIComponent(
    'Olá! Gostaria de entender melhor o modelo de investimento da RiLiGar. Podemos conversar?'
)
const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

const phases = [
    {
        id: 'setup',
        icon: IconRocket,
        title: 'Intervenção Inicial',
        subtitle: 'Diagnóstico + Redesenho',
        description:
            'Investimento focado em estancar o dreno de capital e implementar o novo workflow. O foco é pay-back rápido e impacto imediato na sua operação.',
        highlights: [
            'Mapeamento de gargalos reais',
            'Arquitetura do novo processo',
            'Implementação da tecnologia enabler',
            'Treinamento focado em execução',
        ],
    },
    {
        id: 'manutencao',
        icon: IconRefresh,
        title: 'Evolução Contínua',
        subtitle: 'Custo Marginal de Mantimento',
        description:
            'Valor previsível para garantir que o sistema não degrade e continue evoluindo conforme sua escala aumenta. Sem taxas surpresas.',
        highlights: [
            'Monitoramento proativo de ROI',
            'Suporte de nível operador',
            'Ajustes finos no workflow',
            'Segurança e infraestrutura',
        ],
    },
    {
        id: 'resultado',
        icon: IconChartLine,
        title: 'Partnership Real',
        subtitle: 'Alinhamento de Incentivos',
        description:
            'Em projetos estratégicos, vinculamos parte do investimento aos resultados entregues. Se sua margem sobe, nós ganhamos com você. Risco compartilhado.',
        highlights: [
            'Interesses 100% alinhados',
            'Foco obsessivo em métricas',
            'Parceria de longo prazo',
            'Consultoria estratégica contínua',
        ],
    },
]

export default function PricingModel() {
    const theme = useMantineTheme()

    return (
        <Box
            component="section"
            aria-label="Tecnologia Que Se Paga"
            py={80}
        >
            <Group
                justify="center"
                mb="md"
            >
                <Badge
                    variant="dot"
                    color="gray"
                    size="lg"
                >
                    Tecnologia Como Ativo Financeiro
                </Badge>
            </Group>

            <Title
                order={2}
                ta="center"
                mb="md"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.04em' }}
            >
                Modelos Que Respeitam Seu Fluxo de Caixa
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mb={60}
                maw={700}
                mx="auto"
                fz="lg"
            >
                Não cobramos por funcionalidade. Cobramos pela transformação do seu negócio em um sistema mais
                lucrativo. Transparência total desde o diagnóstico inicial.
            </Text>

            <SimpleGrid
                cols={{ base: 1, md: 3 }}
                spacing="lg"
            >
                {phases.map(phase => (
                    <Paper
                        key={phase.id}
                        p="xl"
                        radius="sm"
                        style={{
                            backgroundColor: 'transparent',
                            transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                    >
                        <ThemeIcon
                            size={48}
                            radius="sm"
                            variant="light"
                            color="gray"
                            mb="md"
                        >
                            <phase.icon
                                size={24}
                                stroke={1.5}
                            />
                        </ThemeIcon>

                        <Text
                            size="h3"
                            fw={800}
                            mb={4}
                            style={{ letterSpacing: '-0.02em' }}
                        >
                            {phase.title}
                        </Text>

                        <Text
                            data-zen-subtitle="true"
                            mb="md"
                        >
                            {phase.subtitle}
                        </Text>

                        <Text
                            size="sm"
                            c="dimmed"
                            mb="lg"
                            lh={1.6}
                        >
                            {phase.description}
                        </Text>

                        <List
                            spacing="xs"
                            size="sm"
                            icon={
                                <ThemeIcon
                                    color="gray"
                                    size={20}
                                    radius="xl"
                                    variant="light"
                                >
                                    <IconCheck
                                        size={12}
                                        stroke={1.5}
                                    />
                                </ThemeIcon>
                            }
                        >
                            {phase.highlights.map((item, index) => (
                                <List.Item key={index}>{item}</List.Item>
                            ))}
                        </List>
                    </Paper>
                ))}
            </SimpleGrid>

            <Paper
                mt={80} // Zen: mais padding
                p="xl"
                radius="sm"
                style={{ textAlign: 'center', backgroundColor: 'transparent' }}
            >
                <Title
                    order={3}
                    style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em' }}
                    mb="xs"
                >
                    Focado em ROI, Indiferente ao Tamanho
                </Title>
                <Text
                    size="sm"
                    c="dimmed"
                    maw={600}
                    mx="auto"
                    mb="lg"
                    lh={1.6}
                >
                    Seja um pequeno negócio buscando o primeiro nível de eficiência ou uma grande operação redesenhando
                    seu núcleo digital. Se o ROI faz sentido, a RiLiGar é o seu parceiro.
                </Text>
                <Button
                    component="a"
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    leftSection={
                        <IconCalendar
                            size={20}
                            stroke={1.5}
                        />
                    }
                >
                    Vamos Conversar?
                </Button>
            </Paper>
        </Box>
    )
}
