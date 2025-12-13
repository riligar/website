import { Badge, Group, Title, Text, Card, SimpleGrid, Box, rem, useMantineTheme } from '@mantine/core'
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
            style={
                feature.highlight
                    ? {
                          border: `2px solid ${theme.colors.blue[6]}`,
                          background:
                              'linear-gradient(135deg, rgba(34, 139, 230, 0.05) 0%, rgba(58, 134, 255, 0.02) 100%)',
                      }
                    : {}
            }
        >
            {feature.highlight && (
                <Badge
                    variant="light"
                    color="blue"
                    size="sm"
                    mb="sm"
                >
                    Solução Destaque
                </Badge>
            )}
            <feature.icon
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color={theme.colors.blue[6]}
            />
            <Text
                fz="lg"
                fw={500}
                mt="md"
            >
                {feature.title}
            </Text>
            <Text
                fz="sm"
                c="dimmed"
                mt="sm"
            >
                {feature.description}
            </Text>
        </Card>
    ))

    return (
        <Box
            component="section"
            aria-label="Solutions portfolio"
            py="xl"
        >
            <Group justify="center">
                <Badge
                    variant="filled"
                    size="lg"
                >
                    Problemas Que Resolvemos
                </Badge>
            </Group>

            <Title
                order={2}
                ta="center"
                mt="sm"
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
                segundo é resolvê-lo de forma que gere impacto real e mensurável. Clique em qualquer card para saber
                como podemos ajudar.
            </Text>

            <SimpleGrid
                cols={{ base: 1, md: 3 }}
                spacing="lg"
                mt={50}
            >
                {features}
            </SimpleGrid>
        </Box>
    )
}
