import { Badge, Group, Title, Text, Card, SimpleGrid, Box, ThemeIcon, useMantineTheme } from '@mantine/core'
import { IconCloudComputing, IconChartBar, IconBrain, IconRobot, IconSparkles, IconShield } from '@tabler/icons-react'

const mockdata = [
    {
        id: 'leads-perdidos',
        title: 'Leads Vazando Pelo Funil?',
        description:
            'Leads de alto valor ignorados ou com follow-up tardio são faturamento jogado fora. Criamos sistemas que garantem atenção imediata onde importa, enquanto a IA cuida do resto.',
        icon: IconRobot,
        highlight: true,
    },
    {
        id: 'pipeline-cego',
        title: 'Pipeline de Vendas Sem Previsibilidade?',
        description:
            'Decidir no "feel" custa caro. Estabelecemos visibilidade total com dashboards de verdade, expondo exatamente onde o dinheiro está travado no seu fluxo.',
        icon: IconChartBar,
    },
    {
        id: 'produto-nao-escala',
        title: 'Operação Travando o Crescimento?',
        description:
            'Sistemas legados e processos manuais são o teto do seu lucro. Desenhamos infraestruturas que escalam conforme você cresce, sem surpresas de custo.',
        icon: IconCloudComputing,
    },
    {
        id: 'dados-manual',
        title: 'Dreno de Tempo em Trabalho Manual?',
        description:
            'Sua equipe deveria estar fechando negócios, não preenchendo planilhas. Automatizamos a extração e processamento de dados para liberar inteligência.',
        icon: IconSparkles,
    },
    {
        id: 'software-generico',
        title: 'Refém de Softwares Genéricos?',
        description:
            'Tentar encaixar seu negócio único em uma ferramenta de prateleira é receita para o caos. Criamos soluções sob medida para o seu workflow específico.',
        icon: IconBrain,
    },
    {
        id: 'incerteza-tecnologia',
        title: 'Paralisia por Excesso de Opções?',
        description:
            'A tecnologia certa é aquela que resolve o problema agora. Diagnosticamos sua empresa e entregamos um roadmap pragmático focado em ROI.',
        icon: IconShield,
    },
]

export default function Features() {
    const theme = useMantineTheme()

    const features = mockdata.map(feature => (
        <Card
            key={feature.id}
            shadow="md"
            radius="md"
            padding="lg"
            bg={feature.highlight ? 'gray.0' : 'white'}
            bd={feature.highlight ? `2px solid ${theme.colors.gray[8]}` : `1px solid ${theme.colors.gray[2]}`}
            style={{ transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
            {feature.highlight && (
                <Badge
                    variant="light"
                    color="gray"
                    size="sm"
                    mb="sm"
                >
                    Solução Destaque
                </Badge>
            )}
            <ThemeIcon
                size={50}
                radius="md"
                variant="light"
                color="gray"
            >
                <feature.icon
                    size={30}
                    stroke={1.5}
                />
            </ThemeIcon>
            <Text
                fz="lg"
                fw={700}
                mt="md"
                c="dark"
            >
                {feature.title}
            </Text>
            <Text
                fz="sm"
                c="dimmed"
                mt="sm"
                lh={1.6}
            >
                {feature.description}
            </Text>
        </Card>
    ))

    return (
        <Box
            component="section"
            aria-label="Solutions portfolio"
            py={80}
        >
            <Group justify="center">
                <Badge
                    variant="light"
                    color="gray"
                    size="lg"
                >
                    Problemas Que Resolvemos
                </Badge>
            </Group>

            <Title
                order={2}
                ta="center"
                mt="md"
                size={{ base: 28, sm: 32, md: 36 }}
            >
                Estes Sintomas Parecem Familiares?
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mt="md"
                maw={800}
                mx="auto"
            >
                A maioria dos negócios está operando abaixo do potencial não por falta de esforço, mas por processos
                inflados. Nosso papel é diagnosticar, simplificar e lucrar.
            </Text>

            <SimpleGrid
                cols={{ base: 1, sm: 2, md: 3 }}
                spacing="lg"
                mt={50}
            >
                {features}
            </SimpleGrid>
        </Box>
    )
}
