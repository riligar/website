import { Box, Title, Text, Container, Accordion } from '@mantine/core'

const contactFaq = [
    {
        question: 'What information should I include when reaching out?',
        answer: 'Share your business challenge, project goals, timeline, and budget range if possible. The more context you provide, the better I can tailor my response to your specific needs.',
    },
    {
        question: 'Do you offer free consultations?',
        answer: "Yes! The initial consultation is always free. We'll discuss your project, explore potential solutions, and see if we're a good fit—no obligation, no sales pressure.",
    },
    {
        question: 'What types of projects do you take on?',
        answer: 'I focus on AI Agents, Salesforce solutions, SaaS platforms, and AI integration projects. If it involves intelligent automation, Salesforce development, or scalable web applications, I can likely help.',
    },
    {
        question: 'What is your typical project size?',
        answer: 'I work with projects ranging from small Salesforce components (2-4 weeks) to complete SaaS platforms (3-6 months). Both startups and established businesses are welcome.',
    },
    {
        question: 'Do you work with international clients?',
        answer: 'Absolutely! I work with clients worldwide and am comfortable with different time zones. Communication happens via video calls, email, and project management tools.',
    },
    {
        question: "What if I'm not sure what solution I need?",
        answer: "That's perfectly fine! Many clients reach out with a challenge but aren't sure about the best solution. That's where my expertise comes in—I'll recommend the approach that makes the most sense for your situation.",
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
                    Common Questions
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    Quick answers to questions you might have before reaching out.
                </Text>

                <Accordion variant="separated">
                    {contactFaq.map((item, index) => (
                        <Accordion.Item
                            key={index}
                            value={item.question}
                        >
                            <Accordion.Control>{item.question}</Accordion.Control>
                            <Accordion.Panel>
                                <Text
                                    size="sm"
                                    c="dimmed"
                                >
                                    {item.answer}
                                </Text>
                            </Accordion.Panel>
                        </Accordion.Item>
                    ))}
                </Accordion>
            </Container>
        </Box>
    )
}
