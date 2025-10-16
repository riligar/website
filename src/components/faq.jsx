import { Box, Title, Text, Accordion, Space } from '@mantine/core'

const faq = [
    {
        question: 'What services does RiLiGar provide?',
        answer: `RiLiGar specializes in three core areas: Salesforce development, SaaS application development, and AI integration. We create custom Salesforce components and Lightning Web Components that enhance your CRM workflows. Our SaaS solutions are built with clean, lightweight architecture designed for maximum performance and cost-efficiency. Additionally, we integrate cutting-edge AI technologies to automate processes and unlock new capabilities for your business.`,
    },
    {
        question: 'Why choose RiLiGar over larger development agencies?',
        answer: `
      As a focused, dedicated team, we bring personal attention to every project. Unlike large agencies where you're just another ticket number, at RiLiGar you work directly with experienced engineers who care deeply about your success. Our small team size means faster communication, more flexibility, and a genuine partnership approach. We combine the expertise of enterprise-level engineers with the agility and cost-effectiveness of a boutique firm.
      <br/>
      <br/>
      Our development philosophy centers on clean, efficient code—no bloat, no unnecessary complexity. We believe in building solutions that are not only powerful today but remain maintainable and scalable for years to come. Every project gets our full attention and commitment to excellence.
      `,
    },
    {
        question: 'What makes your Salesforce components unique?',
        answer: `
      Our Salesforce component library is built on the principle that tools should enhance—not disrupt—your existing workflows. We focus on creating Lightning Web Components that are intuitive, performant, and seamlessly integrate with your Salesforce environment. Each component is designed with clean code practices, comprehensive documentation, and real-world use cases in mind.
      <br/>
      <br/>
      We don't just build components; we solve business problems. Whether you need custom data visualizations, workflow automation, or integration with external systems, our components are crafted to deliver measurable value and improve team productivity.
      `,
    },
    {
        question: 'How do you approach SaaS development?',
        answer: `
      Our SaaS development philosophy is built on three pillars: performance, simplicity, and cost-effectiveness. We use modern JavaScript frameworks and best practices to create applications that are lightning-fast and resource-efficient. This means lower hosting costs for you and better user experiences for your customers.
      <br/>
      <br/>
      We start every SaaS project by deeply understanding your business model and target users. Then we architect solutions that scale with your growth—from MVP to enterprise-level deployment. Our code is clean, well-documented, and built with maintainability in mind, so you're never locked into our services if you choose to take development in-house later.
      `,
    },
    {
        question: 'Can you integrate AI into existing systems?',
        answer: `
      Absolutely! We specialize in practical AI integration that delivers real business value. Whether you want to add intelligent automation to your Salesforce workflows, implement natural language processing in your SaaS application, or leverage machine learning for data insights, we can help.
      <br/>
      <br/>
      We work with leading AI platforms and APIs, and we're experienced in both off-the-shelf AI solutions and custom model development. Our approach focuses on finding the right AI solution for your specific use case—not forcing AI where it doesn't add value. We believe AI should augment human capabilities, not replace them.
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
        <Box>
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
