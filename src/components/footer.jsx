import logo from '/image/riligar-logo.webp'

import { Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core'
import { IconBrandLinkedin, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react'

import classes from './footer.module.css'

const data = [
    {
        title: 'Solutions',
        links: [
            { label: 'AI Agents', link: '/ai-agents' },
            { label: 'Salesforce Solutions', link: '/salesforce' },
            { label: 'SaaS Platforms', link: '/saas' },
            { label: 'AI Integration', link: '/ai-integration' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'About Us', link: '/about' },
            { label: 'Contact', link: '/contact' },
            { label: 'Blog', link: 'https://blog.ciromaciel.click', external: true },
        ],
    },
    {
        title: 'Connect',
        links: [
            { label: 'LinkedIn', link: 'https://www.linkedin.com/in/ciromaciel/', external: true },
            { label: 'Instagram', link: 'https://www.instagram.com/ciro.maciel/', external: true },
            { label: 'YouTube', link: 'https://www.youtube.com/@ciro-maciel', external: true },
        ],
    },
]

export default function FooterLinks() {
    const groups = data.map(group => {
        const links = group.links.map((link, index) => (
            <Text
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
            >
                {link.label}
            </Text>
        ))

        return (
            <div
                className={classes.wrapper}
                key={group.title}
            >
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        )
    })

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.logo}>
                    <Image
                        src={logo}
                        h={30}
                        w={30}
                        alt="Riligar"
                    />
                    <Text
                        size="xs"
                        c="dimmed"
                        className={classes.description}
                    >
                        Delivering powerful solutions: AI Agents, Salesforce, SaaS platforms, and AI integration
                        services.
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text
                    c="dimmed"
                    size="sm"
                >
                    © {new Date().getFullYear()} RiLiGar. All rights reserved. Built with excellence.
                </Text>

                <Group
                    gap={0}
                    className={classes.social}
                    justify="flex-end"
                    wrap="nowrap"
                >
                    <ActionIcon
                        component="a"
                        href="https://www.linkedin.com/in/ciromaciel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="xl"
                        color="gray"
                        variant="subtle"
                        style={{ minWidth: rem(44), minHeight: rem(44) }}
                    >
                        <IconBrandLinkedin
                            style={{ width: rem(24), height: rem(24) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                    <ActionIcon
                        component="a"
                        href="https://www.youtube.com/@ciro-maciel"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="xl"
                        color="gray"
                        variant="subtle"
                        style={{ minWidth: rem(44), minHeight: rem(44) }}
                    >
                        <IconBrandYoutube
                            style={{ width: rem(24), height: rem(24) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                    <ActionIcon
                        component="a"
                        href="https://www.instagram.com/ciro.maciel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="xl"
                        color="gray"
                        variant="subtle"
                        style={{ minWidth: rem(44), minHeight: rem(44) }}
                    >
                        <IconBrandInstagram
                            style={{ width: rem(24), height: rem(24) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    )
}
