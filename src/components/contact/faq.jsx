import { Box, Title, Text, Container, Accordion } from '@mantine/core'


const contactFaq = [
    {
        id: 'info',
        questionKey: 'O que devo compartilhar no primeiro contato?',
        answerKey:
            'Compartilhe seu principal desafio de negócio, o que você já tentou, e qual seria o impacto de resolver esse problema. Quanto mais contexto, melhor posso preparar nosso diagnóstico.',
    },
    {
        id: 'consultation',
        questionKey: 'A conversa de diagnóstico é gratuita?',
        answerKey:
            'Sim! A primeira conversa de diagnóstico (30 minutos) é sempre gratuita. Vamos entender seu desafio, explorar possíveis soluções, e ver se faz sentido trabalharmos juntos — sem obrigação e sem pressão.',
    },
    {
        id: 'projects',
        questionKey: 'Que tipos de problemas vocês resolvem?',
        answerKey:
            'Problemas onde processos ineficientes estão custando dinheiro, tempo ou oportunidades. Pode ser leads caindo entre as frestas, decisões baseadas em achismo, trabalho manual repetitivo, ou falta de visibilidade operacional.',
    },
    {
        id: 'size',
        questionKey: 'Qual o tamanho típico de projeto?',
        answerKey:
            'Trabalhamos desde transformações pontuais (2-4 semanas) até parcerias de transformação contínua (meses/anos). Tanto startups quanto empresas estabelecidas são bem-vindos.',
    },
    {
        id: 'international',
        questionKey: 'Vocês trabalham com clientes fora do Brasil?',
        answerKey:
            'Sim! Trabalhamos com clientes em qualquer lugar do mundo. A comunicação acontece via videochamadas, WhatsApp, email, e ferramentas de gestão de projetos.',
    },
    {
        id: 'unsure',
        questionKey: 'E se eu não souber exatamente qual é meu problema?',
        answerKey:
            'Isso é perfeitamente normal! A maioria dos clientes sabe que algo poderia funcionar melhor, mas não consegue pinpoint o quê. É exatamente para isso que serve nosso diagnóstico — identificar o problema real antes de propor soluções.',
    },
]

export default function ContactFAQ() {
    return (
        <Box py={80}>
            <Container size="lg">
                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    Perguntas Comuns
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    Respostas rápidas para dúvidas antes de entrar em contato.
                </Text>

                <Accordion variant="separated">
                    {contactFaq.map(item => (
                        <Accordion.Item
                            key={item.id}
                            value={item.questionKey}
                        >
                            <Accordion.Control>
                                {item.questionKey}
                            </Accordion.Control>
                            <Accordion.Panel>
                                <Text
                                    size="sm"
                                    c="dimmed"
                                >
                                    {item.answerKey}
                                </Text>
                            </Accordion.Panel>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </Box>
    )
}
