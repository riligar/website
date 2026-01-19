import { Badge, Group, Title, Text, Card, SimpleGrid, Box, ThemeIcon, useMantineTheme } from '@mantine/core'
import { IconCloudComputing, IconChartBar, IconBrain, IconRobot, IconSparkles, IconShield } from '@tabler/icons-react'

const mockdata = [
    {
        id: 'leads-perdidos',
        title: 'Leads Caindo Entre as Frestas?',
        description:
            'Quando leads passam despercebidos ou não recebem follow-up adequado, você perde receita. Garantimos que cada lead de alto valor receba atenção imediata, enquanto consultas rotineiras são tratadas automaticamente.',
        icon: IconRobot,
        highlight: true,
    },
    {
        id: 'pipeline-cego',
        title: 'Pipeline de Vendas Sem Visibilidade?',
        description:
            'Decisões baseadas em achismo custam caro. Criamos visibilidade completa do seu funil de vendas com dashboards que mostram exatamente onde estão os gargalos e oportunidades.',
        icon: IconChartBar,
    },
    {
        id: 'produto-nao-escala',
        title: 'Produto Que Não Escala com Seu Crescimento?',
        description:
            'Seu sistema atual está travando seu crescimento? Desenvolvemos plataformas que escalam conforme seu negócio cresce, sem surpresas de custo ou performance.',
        icon: IconCloudComputing,
    },
    {
        id: 'dados-manual',
        title: 'Horas Perdidas em Trabalho Manual?',
        description:
            'Dados não estruturados e processos manuais consomem tempo da sua equipe. Automatizamos a extração, análise e processamento para liberar seu time para trabalho estratégico.',
        icon: IconSparkles,
    },
    {
        id: 'software-generico',
        title: 'Software Genérico Que Não Resolve Seu Problema?',
        description:
            'Quando soluções de prateleira não atendem seus processos únicos, desenvolvemos ferramentas sob medida que realmente se encaixam no seu workflow.',
        icon: IconBrain,
    },
    {
        id: 'incerteza-tecnologia',
        title: 'Incerteza Sobre Onde Investir em Tecnologia?',
        description:
            'Com tantas opções disponíveis, é difícil saber qual caminho seguir. Diagnosticamos seu negócio e criamos um roadmap claro de onde a tecnologia pode gerar mais valor.',
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
                Esses Problemas São Familiares?
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mt="md"
                maw={800}
                mx="auto"
            >
                Identificamos esses padrões repetidamente nos negócios. O primeiro passo é reconhecer o problema — o
                segundo é resolvê-lo de forma que gere impacto real e mensurável.
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
