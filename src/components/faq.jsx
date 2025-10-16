import { Box, Title, Text, Accordion, Space } from '@mantine/core'

const faq = [
    {
        question: 'What solutions does RiLiGar offer?',
        answer: `RiLiGar delivers four main solutions: AI Agents, Salesforce Solutions, SaaS Platforms, and AI Integration Services. Our AI Agents are intelligent autonomous systems that work 24/7 to automate tasks and make decisions. We build custom Salesforce components and Lightning Web Components that enhance your CRM. Our SaaS platforms are built with modern, scalable architecture. And our AI integration services bring cutting-edge AI capabilities to your existing systems.`,
    },
    {
        question: 'What are AI Agents and how can they help my business?',
        answer: `AI Agents are intelligent, autonomous software systems that can perform tasks, make decisions, and learn from interactions without constant human supervision. Unlike traditional automation, AI Agents understand context, adapt to new situations, and handle complex workflows.
      <br/>
      <br/>
      Our AI Agents can handle customer service inquiries, analyze data to provide insights, monitor systems and respond to issues, process documents and extract information, manage scheduling and logistics, and much more. They work continuously, scale instantly, and improve over time—freeing your team to focus on strategic work while the agents handle routine tasks.
      <br/>
      <br/>
      The result is reduced operational costs, faster response times, 24/7 availability, consistent quality, and the ability to scale without adding headcount.`,
    },
    {
        question: 'How do I know which solution is right for my business?',
        answer: `
      The best solution depends on your specific challenges and goals. AI Agents are ideal if you have repetitive tasks, need 24/7 operations, or want to scale without adding staff. Salesforce Solutions work best when you need to enhance your existing Salesforce platform or build custom CRM functionality. SaaS Platforms are perfect when you need a complete application built from scratch. AI Integration is right when you want to add intelligent capabilities to your existing systems.
      <br/>
      <br/>
      We start every engagement with a discovery conversation to understand your needs. We'll recommend the solution (or combination of solutions) that makes the most sense for your situation. No pressure, no upselling—just honest guidance from experienced engineers who want to see you succeed.
      `,
    },
    {
        question: 'Can AI Agents integrate with our existing tools and systems?',
        answer: `
      Absolutely! Our AI Agents are designed to work with your existing technology stack. They can integrate with CRMs like Salesforce, communication platforms like Slack and Microsoft Teams, project management tools, databases, APIs, and virtually any system with an interface.
      <br/>
      <br/>
      We don't believe in rip-and-replace. Instead, we build agents that complement and enhance your current workflows. The agents can pull data from multiple sources, make decisions based on your business rules, and take actions across different platforms—all while maintaining security and compliance standards.
      `,
    },
    {
        question: 'How quickly can you deploy a solution?',
        answer: `
      Timeline varies based on complexity, but we're known for fast delivery without sacrificing quality. For AI Agents, we can often have a proof-of-concept running in 2-3 weeks, with production deployment in 4-8 weeks. Salesforce components typically take 2-6 weeks depending on complexity. SaaS platforms range from 8-16 weeks for MVPs.
      <br/>
      <br/>
      We follow an agile approach with regular check-ins and demos, so you see progress constantly. Many clients start realizing value even before full deployment, as we can often roll out features incrementally rather than waiting for everything to be complete.
      `,
    },
    {
        question: 'What makes your approach different from other development firms?',
        answer: `
      We focus on solutions, not just code. Every project starts with understanding your business challenge, not just technical requirements. We're a focused team of experienced engineers who work directly with you—no layers of project managers or account executives. This means faster decisions, clearer communication, and better results.
      <br/>
      <br/>
      Our solutions-first approach means we might recommend an AI Agent when others would propose custom development, or suggest a Salesforce component when others want to build from scratch. We care about solving your problem efficiently, not maximizing billable hours. Plus, our code is clean, well-documented, and built to last—you're getting a quality asset, not technical debt.
      `,
    },
    {
        question: 'What is your development process?',
        answer: `
      We follow an agile, iterative approach that keeps you involved throughout the development process. Projects typically start with a discovery phase where we deeply understand your requirements, goals, and constraints. Then we move into rapid prototyping to validate concepts early.
      <br/>
      <br/>
      Development happens in sprints with regular check-ins and demos. You'll see progress constantly and have opportunities to provide feedback at every stage. We prioritize delivering working software early and often, so you can start realizing value quickly. Testing and quality assurance are built into every sprint—not tacked on at the end.
      <br/>
      <br/>
      Communication is paramount. You'll have direct access to the engineers working on your project, and we're responsive via email, chat, or video calls. No bureaucracy, no layers of project managers—just direct, honest communication between technical experts.
      `,
    },
    {
        question: 'How do you ensure code quality and security?',
        answer: `
      Quality and security are non-negotiable at RiLiGar. Every line of code goes through rigorous review processes. We follow industry best practices including secure coding standards, automated testing, and continuous integration/continuous deployment (CI/CD) pipelines.
      <br/>
      <br/>
      For security, we implement a defense-in-depth strategy with multiple layers of protection. This includes input validation, authentication and authorization controls, encryption of sensitive data, and regular security audits. We stay current with the latest security vulnerabilities and best practices, ensuring your applications are protected against emerging threats.
      <br/>
      <br/>
      We also believe in clean, readable code that's easy to maintain. Our codebase includes comprehensive documentation, follows consistent coding standards, and is architected for long-term maintainability. You're not just getting a working application—you're getting a quality software asset.
      `,
    },
    {
        question: 'What are your pricing and engagement models?',
        answer: `
      We offer flexible engagement models to fit different project needs and budgets. For well-defined projects, we can provide fixed-price quotes. For ongoing development or projects with evolving requirements, we offer time-and-materials arrangements with transparent hourly rates.
      <br/>
      <br/>
      We also provide retainer-based partnerships for clients who need continuous development support or want to ensure priority access to our team. This model works great for companies building SaaS products or maintaining Salesforce implementations.
      <br/>
      <br/>
      Our pricing is competitive and transparent—no hidden fees, no surprises. We'll work with you to find an engagement model that aligns with your budget and project goals. Contact us for a detailed quote tailored to your specific needs.
      `,
    },
    {
        question: 'Do you provide ongoing support and maintenance?',
        answer: `
      Yes! We stand behind our work with comprehensive support options. After project delivery, we offer maintenance packages that include bug fixes, security updates, performance monitoring, and feature enhancements. We can also provide training for your team to help them get the most out of the solutions we build.
      <br/>
      <br/>
      Our support is proactive, not reactive. We monitor applications for potential issues and address them before they impact your users. For Salesforce projects, we stay current with Salesforce releases and ensure your custom components remain compatible with platform updates.
      <br/>
      <br/>
      We believe in building long-term partnerships, not just completing projects. Many of our clients work with us continuously as their trusted technology partner, and we're proud to grow alongside their businesses.
      `,
    },
    {
        question: 'How do I get started with RiLiGar?',
        answer: `
      Getting started is simple! Reach out to us via email or through our contact form with a brief description of your project or challenge. We'll schedule a free consultation call to discuss your needs, timeline, and budget.
      <br/>
      <br/>
      During that initial conversation, we'll explore whether we're a good fit for your project. If so, we'll provide a detailed proposal outlining our approach, timeline, and investment. Once you approve, we can typically start work within a week.
      <br/>
      <br/>
      No pressure, no hard sell—just honest conversation between technical experts. We're excited to learn about your business and explore how we can help you succeed. Let's build something great together!
      `,
    },
]

export default function Faq() {
    return (
        <Box
            component="section"
            aria-label="Frequently asked questions"
        >
            <Title ta="center">Frequently Asked Questions</Title>

            <Text
                c="dimmed"
                ta="center"
                mt="md"
            >
                Everything you need to know about working with RiLiGar
            </Text>
            <Space h="lg" />
            <Accordion variant="separated">
                {faq.map(item => (
                    <Accordion.Item
                        key={item.question}
                        value={item.question}
                    >
                        <Accordion.Control>{item.question}</Accordion.Control>
                        <Accordion.Panel>
                            <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                        </Accordion.Panel>
                    </Accordion.Item>
                ))}
            </Accordion>
        </Box>
    )
}
