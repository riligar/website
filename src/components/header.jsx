import {
    HoverCard,
    Group,
    Image,
    Button,
    UnstyledButton,
    Text,
    Anchor,
    SimpleGrid,
    ThemeIcon,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme,
} from '@mantine/core'

import { useDisclosure } from '@mantine/hooks'
import {
    IconChartBar,
    IconCloudComputing,
    IconRobot,
    IconSparkles,
    IconChevronDown,
    IconRocket,
} from '@tabler/icons-react'
import { useState, useEffect } from 'react'

import classes from './header.module.css'

import { useNavigate } from 'react-router-dom'

import logo from '/image/riligar-logotipo.png'

const mockdata = [
    {
        icon: IconRobot,
        title: 'AI Agents',
        description: 'Agentes autônomos inteligentes que automatizam tarefas e tomam decisões para seu negócio',
        pathname: '/ai-agents',
    },
    {
        icon: IconChartBar,
        title: 'Soluções Salesforce',
        description: 'Componentes personalizados, integrações e automações para sua plataforma Salesforce',
        pathname: '/salesforce',
    },
    {
        icon: IconCloudComputing,
        title: 'Plataformas SaaS',
        description: 'Desenvolvimento completo de SaaS com arquitetura moderna e escalável',
        pathname: '/saas',
    },
    {
        icon: IconSparkles,
        title: 'Integração de IA',
        description: 'Adicione capacidades de IA aos seus sistemas e fluxos de trabalho existentes',
        pathname: '/ai-integration',
    },
]

export default function HeaderMegaMenu() {
    const navigate = useNavigate()

    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
    const [scrolled, setScrolled] = useState(false)
    const theme = useMantineTheme()

    // WhatsApp link with pre-filled message
    const whatsappMessage = encodeURIComponent(
        'Olá! Gostaria de agendar uma conversa de diagnóstico para entender como a RiLiGar pode ajudar meu negócio.'
    )
    const whatsappLink = `https://wa.me/5511986166966?text=${whatsappMessage}`

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = mockdata.map(item => (
        <UnstyledButton
            className={classes.subLink}
            key={item.pathname}
            onClick={() => navigate(item.pathname)}
        >
            <Group
                wrap="nowrap"
                align="flex-start"
            >
                <ThemeIcon
                    size={34}
                    variant="default"
                    radius="md"
                >
                    <item.icon
                        style={{ width: rem(22), height: rem(22) }}
                        color={theme.colors.blue[6]}
                    />
                </ThemeIcon>
                <div>
                    <Text
                        size="sm"
                        fw={500}
                    >
                        {item.title}
                    </Text>
                    <Text
                        size="xs"
                        c="dimmed"
                    >
                        {item.description}
                    </Text>
                </div>
            </Group>
        </UnstyledButton>
    ))

    return (
        <>
            <Box className={`${classes.headerWrapper} ${scrolled ? classes.scrolled : ''}`}>
                <header className={classes.header}>
                    <Group
                        justify="space-between"
                        h="100%"
                    >
                        <UnstyledButton
                            component="a"
                            href="/"
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            <Group gap="xs">
                                <Image
                                    src={logo}
                                    h={30}
                                />
                            </Group>
                        </UnstyledButton>
                        <Group
                            h="100%"
                            gap={0}
                            visibleFrom="sm"
                        >
                            <a
                                href="/"
                                className={classes.link}
                            >
                                Início
                            </a>
                            <HoverCard
                                width={600}
                                position="bottom"
                                radius="md"
                                shadow="md"
                                withinPortal
                            >
                                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                                    <Group
                                        justify="space-between"
                                        px="md"
                                    >
                                        <Text fw={500}>Nossas Soluções</Text>
                                    </Group>

                                    <Divider my="sm" />

                                    <SimpleGrid
                                        cols={2}
                                        spacing={0}
                                    >
                                        {links}
                                    </SimpleGrid>

                                    <div className={classes.dropdownFooter}>
                                        <Group justify="space-between">
                                            <div>
                                                <Text
                                                    fw={500}
                                                    fz="sm"
                                                >
                                                    Pronto para começar?
                                                </Text>
                                                <Text
                                                    size="xs"
                                                    c="dimmed"
                                                >
                                                    Descubra a solução ideal para seu negócio
                                                </Text>
                                            </div>
                                            <Button
                                                component="a"
                                                href={whatsappLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                variant="default"
                                                leftSection={<IconRocket style={{ width: rem(16), height: rem(16) }} />}
                                            >
                                                Agendar Diagnóstico
                                            </Button>
                                        </Group>
                                    </div>
                                </HoverCard.Dropdown>
                            </HoverCard>
                            <a
                                href="/about"
                                className={classes.link}
                            >
                                Sobre
                            </a>
                            <a
                                href="/contact"
                                className={classes.link}
                            >
                                Contato
                            </a>
                        </Group>
                        <Group visibleFrom="sm">
                            <Button
                                component="a"
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="md"
                                leftSection={<IconRocket style={{ width: rem(16), height: rem(16) }} />}
                            >
                                Agendar Diagnóstico
                            </Button>
                        </Group>
                        <Burger
                            opened={drawerOpened}
                            onClick={toggleDrawer}
                            hiddenFrom="sm"
                        />
                    </Group>
                </header>
            </Box>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navegação"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea
                    h={`calc(100vh - ${rem(80)})`}
                    mx="-md"
                >
                    <Divider my="sm" />

                    <a
                        href="/"
                        className={classes.link}
                    >
                        Início
                    </a>
                    <UnstyledButton
                        className={classes.link}
                        onClick={toggleLinks}
                    >
                        <Center inline>
                            <Box
                                component="span"
                                mr={5}
                            >
                                Soluções
                            </Box>
                            <IconChevronDown
                                style={{ width: rem(16), height: rem(16) }}
                                color={theme.colors.blue[6]}
                            />
                        </Center>
                    </UnstyledButton>
                    <Collapse in={linksOpened}>{links}</Collapse>
                    <a
                        href="/about"
                        className={classes.link}
                    >
                        Sobre
                    </a>
                    <a
                        href="/contact"
                        className={classes.link}
                    >
                        Contato
                    </a>

                    <Group
                        justify="center"
                        grow
                        pb="xl"
                        px="md"
                    >
                        <Button
                            component="a"
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            size="lg"
                            leftSection={<IconRocket style={{ width: rem(20), height: rem(20) }} />}
                        >
                            Agendar Diagnóstico
                        </Button>
                    </Group>
                </ScrollArea>
            </Drawer>

            {/* Spacer para compensar o header fixo */}
            <Box
                style={{ height: rem(70) }}
                visibleFrom="sm"
            />
            <Box
                style={{ height: rem(60) }}
                hiddenFrom="sm"
            />
        </>
    )
}
