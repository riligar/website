import logo from '/image/riligar-logo.webp'

import { Text, Container, ActionIcon, Group, rem, Image, Anchor } from '@mantine/core'
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react'

import classes from './footer.module.css'

const data = [
    {
        title: 'Empresa',
        links: [
            { label: 'Sobre Nós', link: '#' },
            { label: 'Serviços', link: '#' },
            { label: 'Suporte', link: '#' },
            { label: 'Contato', link: '#' },
        ],
    },
    {
        title: 'Soluções',
        links: [
            { label: 'Password Manager', link: '/manager' },
            { label: 'Password Generator', link: '/generator' },
            { label: 'Send Password', link: '/send-password' },
            { label: 'Send Text', link: '/send-text' },
        ],
    },
    {
        title: 'Recursos',
        links: [
            { label: 'Documentação', link: '#' },
            { label: 'Blog', link: '#' },
            { label: 'FAQ', link: '#' },
            { label: 'Política de Privacidade', link: '#' },
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
                        Soluções inovadoras para gerenciamento seguro de senhas e dados.
                    </Text>
                </div>
                <div className={classes.groups}>{groups}</div>
            </Container>
            <Container className={classes.afterFooter}>
                <Text
                    c="dimmed"
                    size="sm"
                >
                    © {new Date().getFullYear()} Riligar. Todos os direitos reservados.
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
