import logo from '/image/riligar-logo.webp'

import { Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core'
import { IconBrandLinkedin, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

import LanguageSelector from './LanguageSelector'
import classes from './footer.module.css'

const data = [
    {
        title: <Trans>Solutions</Trans>,
        links: [
            { label: <Trans>AI Agents</Trans>, link: '/ai-agents' },
            { label: <Trans>Salesforce Solutions</Trans>, link: '/salesforce' },
            { label: <Trans>SaaS Platforms</Trans>, link: '/saas' },
            { label: <Trans>AI Integration</Trans>, link: '/ai-integration' },
        ],
    },
    {
        title: <Trans>Company</Trans>,
        links: [
            { label: <Trans>About Us</Trans>, link: '/about' },
            { label: <Trans>Contact</Trans>, link: '/contact' },
            { label: <Trans>Blog</Trans>, link: 'https://blog.ciromaciel.click', external: true },
        ],
    },
    {
        title: <Trans>Connect</Trans>,
        links: [
            { label: <Trans>LinkedIn</Trans>, link: 'https://www.linkedin.com/in/ciromaciel/', external: true },
            { label: <Trans>Instagram</Trans>, link: 'https://www.instagram.com/ciro.maciel/', external: true },
            { label: <Trans>YouTube</Trans>, link: 'https://www.youtube.com/@ciro-maciel', external: true },
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
                        <Trans>
                            Delivering powerful solutions: AI Agents, Salesforce, SaaS platforms, and AI integration
                            services.
                        </Trans>
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Group
                    gap="md"
                    align="center"
                >
                    <Text
                        c="dimmed"
                        size="sm"
                    >
                        <Trans>
                            © {new Date().getFullYear()} RiLiGar. All rights reserved. Built with excellence.
                        </Trans>
                    </Text>
                    <LanguageSelector />
                </Group>

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
