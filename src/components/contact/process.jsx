import { Box, Title, Text, Container, Timeline, ThemeIcon, rem } from '@mantine/core'
import { IconMessageCircle, IconClipboardCheck, IconChecklist, IconRocket } from '@tabler/icons-react'

export default function ContactProcess() {
    return (
        <Box py={80}>
            <Container size="lg">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    Como Vamos Trabalhar Juntos
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    Do primeiro contato ao lançamento do projeto, esse é o processo simples que seguimos para garantir
                    seu sucesso.
                </Text>

                <Timeline
                    active={4}
                    bulletSize={50}
                    lineWidth={2}
                >
                    <Timeline.Item
                        bullet={
                            <ThemeIcon
                                size={50}
                                variant="light"
                                radius="xl"
                            >
                                <IconMessageCircle style={{ width: rem(24), height: rem(24) }} />
                            </ThemeIcon>
                        }
                        title="Conversa Inicial"
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                            mt={4}
                        >
                            Teremos uma consulta gratuita para discutir seus desafios, objetivos e visão. Farei
                            perguntas para entender suas necessidades e compartilhar pensamentos iniciais sobre
                            possíveis soluções.
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon
                                size={50}
                                variant="light"
                                radius="xl"
                            >
                                <IconClipboardCheck style={{ width: rem(24), height: rem(24) }} />
                            </ThemeIcon>
                        }
                        title="Proposta e Planejamento"
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                            mt={4}
                        >
                            Fornecerei uma proposta detalhada descrevendo a solução recomendada, cronograma e
                            investimento. Refinamos o plano juntos até que se encaixe perfeitamente nas suas
                            necessidades e orçamento.
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon
                                size={50}
                                variant="light"
                                radius="xl"
                            >
                                <IconChecklist style={{ width: rem(24), height: rem(24) }} />
                            </ThemeIcon>
                        }
                        title="Acordo e Kickoff"
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                            mt={4}
                        >
                            Uma vez que concordarmos com a abordagem, formalizaremos a parceria e agendaremos uma
                            reunião detalhada de kickoff. É onde mergulhamos nos requisitos e definimos expectativas
                            claras.
                        </Text>
                    </Timeline.Item>

                    <Timeline.Item
                        bullet={
                            <ThemeIcon
                                size={50}
                                variant="light"
                                radius="xl"
                            >
                                <IconRocket style={{ width: rem(24), height: rem(24) }} />
                            </ThemeIcon>
                        }
                        title="Desenvolvimento e Entrega"
                    >
                        <Text
                            c="dimmed"
                            size="sm"
                            mt={4}
                        >
                            Começarei a construir sua solução com check-ins regulares e demos. Você verá o progresso
                            constantemente e terá oportunidades para fornecer feedback em cada etapa até o lançamento.
                        </Text>
                    </Timeline.Item>
                </Timeline>
            </Container>
        </Box>
    )
}
