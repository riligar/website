import { Box, Title, Text, Container, Paper, Timeline, rem, ThemeIcon } from '@mantine/core'
import { IconRocket, IconBulb, IconHeart, IconTrendingUp } from '@tabler/icons-react'

export default function AboutStory() {
    return (
        <Box pb={80}>
            <Container size="lg">
                <Title
                    order={2}
                    ta="center"
                    mb="xl"
                >
                    Nossa História
                </Title>

                <Paper
                    p="xl"
                    radius="md"
                    withBorder
                    mb={60}
                >
                    <Text
                        size="lg"
                        mb="md"
                    >
                        Olá, sou <strong>Ciro Cesar Maciel</strong>, fundador da Riligar.
                    </Text>

                    <Text
                        c="dimmed"
                        mb="md"
                        style={{ lineHeight: 1.8 }}
                    >
                        Sou apaixonado por tecnologia há mais de duas décadas. Minha jornada começou cedo—construindo
                        sistemas para grandes corporações, resolvendo problemas complexos e liderando equipes técnicas
                        em momentos críticos.
                    </Text>

                    <Text
                        c="dimmed"
                        mb="md"
                        style={{ lineHeight: 1.8 }}
                    >
                        Mas em <strong>2024</strong>, algo mudou. Decidi direcionar minha energia para projetos que
                        realmente façam sentido — não apenas tecnicamente impressionantes, mas significativos. Projetos
                        que diagnosticam problemas reais e entregam impacto mensurável.
                    </Text>

                    <Text
                        c="dimmed"
                        mb="md"
                        style={{ lineHeight: 1.8 }}
                    >
                        Com o apoio da minha esposa, <strong>Andréa</strong>, e do meu filho, <strong>Edgar</strong>,
                        transformei linhas de código em soluções com impacto direto em nossa rotina. O que começou como
                        ferramentas para nossa família gradualmente se tornou meu propósito.
                    </Text>

                    <Text
                        c="dimmed"
                        style={{ lineHeight: 1.8 }}
                    >
                        Hoje, a Riligar combina minha experiência em desenvolvimento de software corporativo com uma
                        abordagem diferente:{' '}
                        <em>
                            primeiro diagnosticamos o problema real, depois redesenhamos processos, e só então
                            escolhemos a tecnologia certa
                        </em>
                        . AI Agents, Salesforce, SaaS — são ferramentas, não objetivos.
                    </Text>
                </Paper>

                <Title
                    order={3}
                    ta="center"
                    mb={40}
                >
                    A Jornada
                </Title>

                <Timeline
                    active={4}
                    bulletSize={40}
                    lineWidth={2}
                >
                    <Timeline.Item
                        bullet={
                            <ThemeIcon
                                size={40}
                                variant="light"
                                radius="xl"
                            >
                                <IconRocket style={{ width: rem(20), height: rem(20) }} />
                            </ThemeIcon>
                        }
                        title="20+ Anos em Tecnologia"
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                        >
                            Construí sistemas para grandes corporações, liderei equipes técnicas e resolvi problemas
                            complexos em escala. Ganhei expertise profunda em arquitetura de software, processos de
                            desenvolvimento e liderança de equipes.
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon
                                size={40}
                                variant="light"
                                radius="xl"
                            >
                                <IconBulb style={{ width: rem(20), height: rem(20) }} />
                            </ThemeIcon>
                        }
                        title="A Decisão de 2024"
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                        >
                            Decidi focar em projetos com propósito real. Comecei a desenvolver uma abordagem que
                            diagnóstica problemas primeiro — em vez de apenas entregar tecnologia.
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon
                                size={40}
                                variant="light"
                                radius="xl"
                            >
                                <IconHeart style={{ width: rem(20), height: rem(20) }} />
                            </ThemeIcon>
                        }
                        title="Inovação Familiar"
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                        >
                            Com o apoio de Andréa e Edgar, transformei código em soluções impactantes. O que construímos
                            para nós mesmos se tornou ferramentas que ajudam outros.
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon
                                size={40}
                                variant="light"
                                radius="xl"
                            >
                                <IconTrendingUp style={{ width: rem(20), height: rem(20) }} />
                            </ThemeIcon>
                        }
                        title="Riligar Hoje"
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                        >
                            Agora entregando transformações de negócio: diagnóstico profundo, redesenho de processos, e
                            tecnologia como enabler. Ajudando empresas a evoluir com menos ruído, mais clareza e
                            resultados consistentes.
                        </Text>
                    </Timeline.Item>
                </Timeline>
            </Container>
        </Box>
    )
}
