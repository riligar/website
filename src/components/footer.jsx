import logo from '/image/riligar-logo.webp'

import { Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core'
import { IconBrandLinkedin, IconBrandYoutube, IconBrandInstagram, IconBrandGithub } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

import LanguageSelector from './LanguageSelector'
import classes from './footer.module.css'

const data = [
    {
        id: 'value',
        titleKey: 'O Que Entregamos',
        links: [
            { id: 'diagnostico', labelKey: 'Diagnóstico Profundo', link: '/about' },
            { id: 'redesenho', labelKey: 'Redesenho de Processos', link: '/about' },
            { id: 'resultados', labelKey: 'Resultados Mensuráveis', link: '/about' },
            { id: 'parceria', labelKey: 'Parceria de Transformação', link: '/contact' },
        ],
    },
    {
        id: 'company',
        titleKey: 'Empresa',
        links: [
            { id: 'about', labelKey: 'Sobre Nós', link: '/about' },
            { id: 'contact', labelKey: 'Contato', link: '/contact' },
            { id: 'blog', labelKey: 'Blog', link: 'https://blog.ciromaciel.click', external: true },
        ],
    },
    {
        id: 'connect',
        titleKey: 'Conecte-se',
        links: [
            { id: 'linkedin', labelKey: 'LinkedIn', link: 'https://www.linkedin.com/in/ciromaciel/', external: true },
            { id: 'instagram', labelKey: 'Instagram', link: 'https://www.instagram.com/ciro.maciel/', external: true },
            { id: 'youtube', labelKey: 'YouTube', link: 'https://www.youtube.com/@ciro-maciel', external: true },
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
                <Trans>{link.labelKey}</Trans>
            </Text>
        ))

        return (
            <div
                className={classes.wrapper}
                key={group.id}
            >
                <Text className={classes.title}>
                    <Trans>{group.titleKey}</Trans>
                </Text>
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
                        <Trans>
                            Parceiros em transformação de negócios: diagnóstico profundo, redesenho de processos e
                            resultados mensuráveis.
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
                        <Trans>© {new Date().getFullYear()} RiLiGar. Todos os direitos reservados.</Trans>
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
