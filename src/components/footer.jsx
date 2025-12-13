import logo from '/image/riligar-logo.webp'

import { Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core'
import { IconBrandLinkedin, IconBrandYoutube, IconBrandInstagram, IconBrandGithub } from '@tabler/icons-react'

import LanguageSelector from './LanguageSelector'
import classes from './footer.module.css'

const data = [
    {
        id: 'value',
        title: 'Entregamos',
        links: [
            { id: 'diagnostico', label: 'Diagnóstico', link: '/#quem-somos' },
            { id: 'redesenho', label: 'Redesenho', link: '/#quem-somos' },
            { id: 'resultados', label: 'Resultados', link: '/#casos-impacto' },
            { id: 'parceria', label: 'Parceria', link: '/#contato' },
        ],
    },
    {
        id: 'company',
        title: 'Empresa',
        links: [
            { id: 'about', label: 'Sobre Nós', link: '/#quem-somos' },
            { id: 'contact', label: 'Contato', link: '/#contato' },
            { id: 'llms', label: 'LLMs.txt', link: '/llms.txt' },
            { id: 'llms', label: 'LLMs Contexto.txt', link: '/llms-ctx.txt' },
        ],
    },
    {
        id: 'connect',
        title: 'Conecte-se',
        links: [
            { id: 'linkedin', label: 'LinkedIn', link: 'https://www.linkedin.com/in/ciromaciel/', external: true },
            { id: 'instagram', label: 'Instagram', link: 'https://www.instagram.com/ciro.maciel/', external: true },
            { id: 'youtube', label: 'YouTube', link: 'https://www.youtube.com/@ciro-maciel', external: true },
        ],
    },
]

export default function FooterLinks() {
    const groups = data.map(group => {
        const links = group.links.map(link => (
            <Text
                key={link.id}
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
                key={group.id}
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
                        alt="RiLiGar"
                    />
                    <Text
                        size="xs"
                        c="dimmed"
                        className={classes.description}
                    >
                        Parceiros em transformação de negócios: diagnóstico profundo, redesenho de processos e
                        resultados mensuráveis.
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
                        © {new Date().getFullYear()} RiLiGar. Todos os direitos reservados.
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
                        href="https://github.com/riligar"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="xl"
                        color="green"
                        variant="subtle"
                        style={{ minWidth: rem(44), minHeight: rem(44) }}
                    >
                        <IconBrandGithub
                            style={{ width: rem(24), height: rem(24) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                    <ActionIcon
                        component="a"
                        href="https://github.com/ciro-maciel"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="xl"
                        color="yellow"
                        variant="subtle"
                        style={{ minWidth: rem(44), minHeight: rem(44) }}
                    >
                        <IconBrandGithub
                            style={{ width: rem(24), height: rem(24) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                    <ActionIcon
                        component="a"
                        href="https://github.com/riligar-salesforce"
                        target="_blank"
                        rel="noopener noreferrer"
                        size="xl"
                        color="blue"
                        variant="subtle"
                        style={{ minWidth: rem(44), minHeight: rem(44) }}
                    >
                        <IconBrandGithub
                            style={{ width: rem(24), height: rem(24) }}
                            stroke={1.5}
                        />
                    </ActionIcon>
                </Group>
            </Container>
        </footer>
    )
}
