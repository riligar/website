import { Badge, Group, Title, Text, Card, SimpleGrid, Box, rem, useMantineTheme } from '@mantine/core'
import { IconCloudComputing, IconChartBar, IconBrain, IconRobot, IconSparkles, IconShield } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

const mockdata = [
    {
        id: 'leads-perdidos',
        titleKey: 'Leads Caindo Entre as Frestas?',
        descriptionKey:
            'Quando leads passam despercebidos ou não recebem follow-up adequado, você perde receita. Garantimos que cada lead de alto valor receba atenção imediata, enquanto consultas rotineiras são tratadas automaticamente.',
        icon: IconRobot,
        highlight: true,
    },
    {
        id: 'pipeline-cego',
        titleKey: 'Pipeline de Vendas Sem Visibilidade?',
        descriptionKey:
            'Decisões baseadas em achismo custam caro. Criamos visibilidade completa do seu funil de vendas com dashboards que mostram exatamente onde estão os gargalos e oportunidades.',
        icon: IconChartBar,
    },
    {
        id: 'produto-nao-escala',
        titleKey: 'Produto Que Não Escala com Seu Crescimento?',
        descriptionKey:
            'Seu sistema atual está travando seu crescimento? Desenvolvemos plataformas que escalam conforme seu negócio cresce, sem surpresas de custo ou performance.',
        icon: IconCloudComputing,
    },
    {
        id: 'dados-manual',
        titleKey: 'Horas Perdidas em Trabalho Manual?',
        descriptionKey:
            'Dados não estruturados e processos manuais consomem tempo da sua equipe. Automatizamos a extração, análise e processamento para liberar seu time para trabalho estratégico.',
        icon: IconSparkles,
    },
    {
        id: 'software-generico',
        titleKey: 'Software Genérico Que Não Resolve Seu Problema?',
        descriptionKey:
            'Quando soluções de prateleira não atendem seus processos únicos, desenvolvemos ferramentas sob medida que realmente se encaixam no seu workflow.',
        icon: IconBrain,
    },
    {
        id: 'incerteza-tecnologia',
        titleKey: 'Incerteza Sobre Onde Investir em Tecnologia?',
        descriptionKey:
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
                    <Trans>Solução Destaque</Trans>
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
                <Trans>{feature.titleKey}</Trans>
            </Text>
            <Text
                fz="sm"
                c="dimmed"
                mt="sm"
            >
                <Trans>{feature.descriptionKey}</Trans>
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
                    <Trans>Problemas Que Resolvemos</Trans>
                </Badge>
            </Group>

            <Title
                order={2}
                ta="center"
                mt="sm"
                size={{ base: 28, sm: 32, md: 36 }}
            >
                <Trans>Esses Problemas São Familiares?</Trans>
            </Title>

            <Text
                c="dimmed"
                ta="center"
                mt="md"
                maw={800}
                mx="auto"
            >
                <Trans>
                    Identificamos esses padrões repetidamente nos negócios. O primeiro passo é reconhecer o problema — o
                    segundo é resolvê-lo de forma que gere impacto real e mensurável. Clique em qualquer card para saber
                    como podemos ajudar.
                </Trans>
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
