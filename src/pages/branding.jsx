import { Container, Title, Text, SimpleGrid, Card, Image, Stack, Group, Box, Badge, Divider, Grid } from '@mantine/core'
import Layout from '@/layout'

export default function BrandingPage() {
    return (
        <Layout>
            <Box
                bg="gray.0"
                py={120}
                bd={{ bottom: '1px solid gray.2' }}
            >
                <Container size="md">
                    <Stack
                        align="center"
                        gap="md"
                        ta="center"
                    >
                        <Badge
                            variant="outline"
                            color="gray"
                            size="lg"
                            radius="sm"
                        >
                            Baixar ativos da marca
                        </Badge>
                        <Title
                            order={1}
                            style={{ fontSize: '64px', letterSpacing: '-0.04em' }}
                        >
                            Recursos da marca
                        </Title>
                        <Text
                            c="dimmed"
                            size="xl"
                            maw={600}
                            mx="auto"
                        >
                            Tudo que você precisa para exibir a marca RiLiGar da maneira certa - logotipos, cores e
                            mais, tudo em um só lugar.
                        </Text>
                    </Stack>
                </Container>
            </Box>

            <Container
                size="md"
                py={100}
            >
                <Stack gap={100}>
                    {/* Logotipo Principal */}
                    <section>
                        <Group
                            justify="space-between"
                            align="flex-end"
                            mb="xl"
                        >
                            <Box>
                                <Title order={2}>Logotipo Principal</Title>
                                <Text c="dimmed">A assinatura oficial da nossa marca.</Text>
                            </Box>
                        </Group>
                        <Card
                            bg="white"
                            bd="1px solid gray.2"
                            p={100}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Stack
                                align="center"
                                gap="xl"
                            >
                                <Image
                                    src="/images/logotipo.webp"
                                    h={80}
                                    w="auto"
                                />
                                <Text
                                    size="xs"
                                    c="dimmed"
                                    fw={500}
                                    style={{ letterSpacing: '0.1em' }}
                                >
                                    A ASSINATURA POSITIVA É O NOSSO PADRÃO
                                </Text>
                            </Stack>
                        </Card>
                    </section>

                    {/* Símbolo */}
                    <section>
                        <Grid gutter={60}>
                            <Grid.Col span={{ base: 12, md: 5 }}>
                                <Title
                                    order={2}
                                    mb="md"
                                >
                                    O Símbolo
                                </Title>
                                <Text
                                    c="dimmed"
                                    size="lg"
                                >
                                    O Raio RiLiGar é a manifestação visual da energia que impulsiona a transformação.
                                    Suas linhas paralelas e precisas simbolizam o alinhamento inquebrável entre a
                                    velocidade da inovação e o rigor da engenharia estratégica, capturando a essência da
                                    centelha que gera escala e resultados.
                                </Text>
                            </Grid.Col>
                            <Grid.Col span={{ base: 12, md: 7 }}>
                                <Card
                                    bg="white"
                                    bd="1px solid gray.2"
                                    p="xl"
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minHeight: '300px',
                                    }}
                                >
                                    <Image
                                        src="/images/logo.webp"
                                        h={120}
                                        w="auto"
                                    />
                                </Card>
                            </Grid.Col>
                        </Grid>
                    </section>

                    {/* Cores */}
                    <section>
                        <Title
                            order={2}
                            mb="xs"
                        >
                            Paleta de Cores
                        </Title>
                        <Text
                            c="dimmed"
                            mb="xl"
                        >
                            Uma estética monocromática calibrada para destacar o conteúdo.
                        </Text>
                        <SimpleGrid
                            cols={{ base: 1, sm: 3 }}
                            spacing="xl"
                        >
                            <ColorCard
                                color="#34322D"
                                label="Deep Black"
                                hex="#34322D"
                            />
                            <ColorCard
                                color="#F8F8F8"
                                label="Soft Gray"
                                hex="#F8F8F8"
                            />
                            <ColorCard
                                color="#FFFFFF"
                                label="Pure White"
                                hex="#FFFFFF"
                            />
                        </SimpleGrid>
                    </section>

                    {/* Tipografia */}
                    <section>
                        <Title
                            order={2}
                            mb="xs"
                        >
                            Tipografia
                        </Title>
                        <Text
                            c="dimmed"
                            mb="xl"
                        >
                            Nossa linguagem visual é ancorada na versatilidade e clareza da Montserrat.
                        </Text>

                        <Card
                            p="xl"
                            bd="1px solid gray.2"
                            bg="white"
                        >
                            <Stack gap={60}>
                                <Grid
                                    gutter={40}
                                    align="center"
                                >
                                    <Grid.Col span={{ base: 12, md: 5 }}>
                                        <Box>
                                            <Text
                                                size="xl"
                                                fw={700}
                                                style={{
                                                    fontSize: '120px',
                                                    lineHeight: 1,
                                                    letterSpacing: '-0.04em',
                                                }}
                                            >
                                                Aa
                                            </Text>
                                            <Title
                                                order={3}
                                                mt="md"
                                            >
                                                Montserrat
                                            </Title>
                                            <Badge
                                                variant="light"
                                                color="gray"
                                                mt="xs"
                                            >
                                                PRIMARY TYPEFACE
                                            </Badge>
                                        </Box>
                                    </Grid.Col>
                                    <Grid.Col span={{ base: 12, md: 7 }}>
                                        <Stack gap="xl">
                                            <Box>
                                                <Title
                                                    order={4}
                                                    mb="xs"
                                                >
                                                    Caráter e Identidade
                                                </Title>
                                                <Text c="dimmed">
                                                    Nossa tipo de letra sem serifa da marca é a Montserrat. Sua clareza
                                                    geométrica e caráter moderno a tornam altamente eficaz em aplicações
                                                    que exigem um contraste arrojado e chamativo, equilibrando-se com
                                                    refinamento em todas as escalas.
                                                </Text>
                                            </Box>
                                            <Box>
                                                <Title
                                                    order={4}
                                                    mb="xs"
                                                >
                                                    Uso Estratégico
                                                </Title>
                                                <Text c="dimmed">
                                                    Utilizamos pesos variados para criar hierarquias claras: pesos
                                                    arrojados (700+) para títulos de impacto e materiais promocionais, e
                                                    pesos médios/regulares para legibilidade excepcional em corpos de
                                                    texto e interfaces técnicas.
                                                </Text>
                                            </Box>
                                        </Stack>
                                    </Grid.Col>
                                </Grid>

                                <Divider
                                    label="AMOSTRAS DE PESO"
                                    labelPosition="center"
                                />

                                <SimpleGrid
                                    cols={{ base: 2, sm: 4 }}
                                    spacing="xl"
                                >
                                    <Stack gap={4}>
                                        <Text
                                            fw={400}
                                            size="xl"
                                        >
                                            Regular
                                        </Text>
                                        <Text
                                            size="xs"
                                            c="dimmed"
                                        >
                                            Body text & descriptions
                                        </Text>
                                    </Stack>
                                    <Stack gap={4}>
                                        <Text
                                            fw={500}
                                            size="xl"
                                        >
                                            Medium
                                        </Text>
                                        <Text
                                            size="xs"
                                            c="dimmed"
                                        >
                                            Subtitles & emphasis
                                        </Text>
                                    </Stack>
                                    <Stack gap={4}>
                                        <Text
                                            fw={700}
                                            size="xl"
                                        >
                                            Bold
                                        </Text>
                                        <Text
                                            size="xs"
                                            c="dimmed"
                                        >
                                            Main headlines
                                        </Text>
                                    </Stack>
                                    <Stack gap={4}>
                                        <Text
                                            fw={900}
                                            size="xl"
                                        >
                                            Black
                                        </Text>
                                        <Text
                                            size="xs"
                                            c="dimmed"
                                        >
                                            Hero & high contrast
                                        </Text>
                                    </Stack>
                                </SimpleGrid>
                            </Stack>
                        </Card>
                    </section>

                    {/* Área de Proteção */}
                    <section>
                        <Title
                            order={2}
                            mb="xs"
                        >
                            Área de Exclusão
                        </Title>
                        <Text
                            c="dimmed"
                            mb="xl"
                        >
                            Garantindo que nossa marca sempre tenha espaço para respirar.
                        </Text>
                        <Card
                            bg="gray.0"
                            bd="1px dashed gray.2"
                            p={120}
                            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <Box
                                style={{
                                    border: '1px solid var(--mantine-color-gray-3)',
                                    padding: '40px',
                                    position: 'relative',
                                }}
                            >
                                <Image
                                    src="/images/logo.webp"
                                    h={128}
                                    w="auto"
                                />
                                <Badge
                                    variant="light"
                                    color="gray"
                                    size="xs"
                                    style={{
                                        position: 'absolute',
                                        top: -10,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                    }}
                                >
                                    32px
                                </Badge>
                                <Badge
                                    variant="light"
                                    color="gray"
                                    size="xs"
                                    style={{
                                        position: 'absolute',
                                        bottom: -10,
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                    }}
                                >
                                    32px
                                </Badge>
                                <Badge
                                    variant="light"
                                    color="gray"
                                    size="xs"
                                    style={{
                                        position: 'absolute',
                                        left: -20,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                    }}
                                >
                                    32px
                                </Badge>
                                <Badge
                                    variant="light"
                                    color="gray"
                                    size="xs"
                                    style={{
                                        position: 'absolute',
                                        right: -20,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                    }}
                                >
                                    32px
                                </Badge>
                            </Box>
                        </Card>
                    </section>

                    {/* OpenGraph */}
                    <section>
                        <Title
                            order={2}
                            mb="xs"
                        >
                            Social & OpenGraph
                        </Title>
                        <Text
                            c="dimmed"
                            mb="xl"
                        >
                            Nossa presença visual em compartilhamentos e redes sociais.
                        </Text>
                        <Card
                            p="xl"
                            bd="1px solid gray.2"
                            bg="white"
                        >
                            <Grid
                                gutter={40}
                                align="center"
                            >
                                <Grid.Col span={{ base: 12, md: 8 }}>
                                    <Box
                                        style={{
                                            position: 'relative',
                                            borderRadius: '8px',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Image
                                            src="/images/opengraph.webp"
                                            w="100%"
                                            h="auto"
                                        />
                                        <Box style={{ position: 'absolute', top: 10, right: 10 }}>
                                            <Badge
                                                color="dark"
                                                size="sm"
                                            >
                                                1200 x 630 px
                                            </Badge>
                                        </Box>
                                    </Box>
                                </Grid.Col>
                                <Grid.Col span={{ base: 12, md: 4 }}>
                                    <Stack gap="md">
                                        <Title order={4}>Visão Geral</Title>
                                        <Text
                                            size="sm"
                                            c="dimmed"
                                        >
                                            O card OpenGraph é otimizado para plataformas como LinkedIn, WhatsApp e X.
                                            Ele combina nossa marca com uma imagem de impacto que comunica inovação e
                                            escala.
                                        </Text>
                                        <Divider />
                                        <Box>
                                            <Text
                                                size="xs"
                                                fw={700}
                                                c="dimmed"
                                                style={{ letterSpacing: '0.1em' }}
                                            >
                                                ESPECIFICAÇÕES
                                            </Text>
                                            <Text size="sm">Formato: WebP / PNG</Text>
                                            <Text size="sm">Proporção: 1.91:1</Text>
                                            <Text size="sm">Peso: &lt; 300KB</Text>
                                        </Box>
                                    </Stack>
                                </Grid.Col>
                            </Grid>
                        </Card>
                    </section>

                    {/* Assinatura da Marca */}
                    <section>
                        <Title
                            order={2}
                            mb="xs"
                        >
                            Arquitetura de Marca
                        </Title>
                        <Text
                            c="dimmed"
                            mb="xl"
                        >
                            Como estendemos nossa identidade para submarcas e departamentos.
                        </Text>
                        <Card
                            p={60}
                            bd="1px solid gray.2"
                            bg="white"
                        >
                            <Group
                                justify="center"
                                gap={40}
                            >
                                <Image
                                    src="/images/logotipo.webp"
                                    h={30}
                                    w="auto"
                                />
                                <Box
                                    h={40}
                                    w={1}
                                    bg="gray.3"
                                />
                                <Text
                                    fw={700}
                                    size="xl"
                                    style={{ letterSpacing: '0.2em' }}
                                >
                                    ENGINEERING
                                </Text>
                            </Group>
                        </Card>
                    </section>
                </Stack>
            </Container>
        </Layout>
    )
}

function ColorCard({ color, label, hex }) {
    return (
        <Card
            p={0}
            bd="1px solid gray.2"
            radius="md"
            overflow="hidden"
            bg="white"
        >
            <Box
                bg={color}
                h={120}
            />
            <Box p="md">
                <Text
                    fw={600}
                    size="sm"
                >
                    {label}
                </Text>
                <Text
                    size="xs"
                    c="dimmed"
                >
                    {hex}
                </Text>
            </Box>
        </Card>
    )
}

function TypeSample({ weight, label }) {
    return (
        <Stack gap={4}>
            <Text
                fw={weight}
                size="xl"
            >
                Aa
            </Text>
            <Text
                size="xs"
                c="dimmed"
            >
                {label}
            </Text>
        </Stack>
    )
}
