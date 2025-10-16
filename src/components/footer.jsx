import logo from '/image/riligar-logo.webp'

import { Text, Container, ActionIcon, Group, rem, Image, Anchor } from '@mantine/core'
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react'

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
            { label: 'Our Approach', link: '#' },
            { label: 'Contact', link: '#' },
            { label: 'Careers', link: '#' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { label: 'Case Studies', link: '#' },
            { label: 'Blog', link: '#' },
            { label: 'FAQ', link: '#' },
            { label: 'Privacy Policy', link: '#' },
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
                onClick={event => event.preventDefault()}
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
                        size="lg"
                        color="gray"
                        variant="subtle"
                    >
                        <IconBrandTwitter
                            style={{ width: rem(18), height: rem(18) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                    <ActionIcon
                        size="lg"
                        color="gray"
                        variant="subtle"
                    >
                        <IconBrandYoutube
                            style={{ width: rem(18), height: rem(18) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                    <ActionIcon
                        size="lg"
                        color="gray"
                        variant="subtle"
                    >
                        <IconBrandInstagram
                            style={{ width: rem(18), height: rem(18) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    )
}
