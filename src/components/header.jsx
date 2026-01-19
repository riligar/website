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
    useMantineTheme,
    Portal,
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
import { useNavigate } from 'react-router-dom'

import logo from '/image/riligar-logotipo.webp'

const transformacoes = [
    {
        icon: IconRobot,
        title: 'Eliminar Gargalos',
        description: 'Identifique e automatize o que está travando sua operação',
        pathname: '/ai-agents',
    },
    {
        icon: IconChartBar,
        title: 'Acelerar Vendas',
        description: 'Otimize seu CRM para fechar mais negócios em menos tempo',
        pathname: '/salesforce',
    },
    {
        icon: IconCloudComputing,
        title: 'Criar Nova Receita',
        description: 'Lance produtos digitais que geram receita recorrente',
        pathname: '/saas',
    },
    {
        icon: IconSparkles,
        title: 'Decisões Mais Inteligentes',
        description: 'Use IA para tomar decisões baseadas em dados reais',
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

    const subLinks = transformacoes.map(item => (
        <UnstyledButton
            key={item.pathname}
            onClick={() => navigate(item.pathname)}
            w="100%"
            p="xs"
            style={{ borderRadius: 'var(--mantine-radius-md)' }}
            className="header-sublink" // Temporary for potential hover logic if needed, but let's try to avoid
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
                        size={22}
                        stroke={1.5}
                        color={theme.colors.gray[7]}
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
            <Portal>
                <Box
                    pos="fixed"
                    top={0}
                    left={0}
                    right={0}
                    zIndex={9999}
                    bg={scrolled ? 'white' : 'rgba(255, 255, 255, 0.85)'}
                    bd={{ bottom: `1px solid ${theme.colors.gray[2]}` }}
                    style={{
                        backdropFilter: scrolled ? 'none' : 'blur(8px)',
                        transition: 'all 0.3s ease',
                        boxShadow: scrolled ? theme.shadows.sm : 'none',
                    }}
                >
                    <Box
                        maw={1280}
                        mx="auto"
                        px="md"
                        h={60}
                    >
                        <Group
                            justify="space-between"
                            h="100%"
                        >
                            <UnstyledButton
                                component="a"
                                href="/"
                                style={{ display: 'flex', alignItems: 'center' }}
                            >
                                <Image
                                    src={logo}
                                    h={30}
                                />
                            </UnstyledButton>

                            <Group
                                h="100%"
                                gap={0}
                                visibleFrom="sm"
                            >
                                <Anchor
                                    href="/#casos-impacto"
                                    p="md"
                                    h="100%"
                                    underline="none"
                                    fw={500}
                                    fz="sm"
                                    c="dark"
                                    onClick={e => {
                                        if (window.location.pathname === '/') {
                                            e.preventDefault()
                                            document
                                                .getElementById('casos-impacto')
                                                ?.scrollIntoView({ behavior: 'smooth' })
                                        }
                                    }}
                                >
                                    Casos de Sucesso
                                </Anchor>
                                <Anchor
                                    href="/#sobre"
                                    p="md"
                                    h="100%"
                                    underline="none"
                                    fw={500}
                                    fz="sm"
                                    c="dark"
                                    onClick={e => {
                                        if (window.location.pathname === '/') {
                                            e.preventDefault()
                                            document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })
                                        }
                                    }}
                                >
                                    Por Que Nós
                                </Anchor>
                                <Anchor
                                    href="/solutions"
                                    p="md"
                                    h="100%"
                                    underline="none"
                                    fw={500}
                                    fz="sm"
                                    c="dark"
                                >
                                    Soluções
                                </Anchor>
                                <Anchor
                                    href="/#contato"
                                    p="md"
                                    h="100%"
                                    underline="none"
                                    fw={500}
                                    fz="sm"
                                    c="dark"
                                    onClick={e => {
                                        if (window.location.pathname === '/') {
                                            e.preventDefault()
                                            document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
                                        }
                                    }}
                                >
                                    Contato
                                </Anchor>
                            </Group>

                            <Group visibleFrom="sm">
                                <Button
                                    component="a"
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    size="md"
                                    leftSection={
                                        <IconRocket
                                            size={16}
                                            stroke={1.5}
                                        />
                                    }
                                >
                                    Diagnóstico Grátis
                                </Button>
                            </Group>

                            <Burger
                                opened={drawerOpened}
                                onClick={toggleDrawer}
                                hiddenFrom="sm"
                            />
                        </Group>
                    </Box>
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
                        h="calc(100vh - 80px)"
                        mx="-md"
                    >
                        <Divider
                            my={0}
                            mb={16}
                        />
                        <Anchor
                            href="/#casos-impacto"
                            display="block"
                            p="md"
                            underline="none"
                            fw={500}
                            fz="sm"
                            c="dark"
                            onClick={e => {
                                if (window.location.pathname === '/') {
                                    e.preventDefault()
                                    document.getElementById('casos-impacto')?.scrollIntoView({ behavior: 'smooth' })
                                    closeDrawer()
                                }
                            }}
                        >
                            Casos de Sucesso
                        </Anchor>
                        <Anchor
                            href="/#sobre"
                            display="block"
                            p="md"
                            underline="none"
                            fw={500}
                            fz="sm"
                            c="dark"
                            onClick={e => {
                                if (window.location.pathname === '/') {
                                    e.preventDefault()
                                    document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })
                                    closeDrawer()
                                }
                            }}
                        >
                            Por Que Nós
                        </Anchor>
                        <Anchor
                            href="/solutions"
                            display="block"
                            p="md"
                            underline="none"
                            fw={500}
                            fz="sm"
                            c="dark"
                        >
                            Soluções
                        </Anchor>
                        <Anchor
                            href="/#contato"
                            display="block"
                            p="md"
                            underline="none"
                            fw={500}
                            fz="sm"
                            c="dark"
                            mb={16}
                            onClick={e => {
                                if (window.location.pathname === '/') {
                                    e.preventDefault()
                                    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
                                    closeDrawer()
                                }
                            }}
                        >
                            Contato
                        </Anchor>

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
                                leftSection={
                                    <IconRocket
                                        size={20}
                                        stroke={1.5}
                                    />
                                }
                            >
                                Diagnóstico Grátis
                            </Button>
                        </Group>
                    </ScrollArea>
                </Drawer>
            </Portal>

            {/* Spacer para compensar o header fixo */}
            <Box h={{ base: 60, sm: 70 }} />
        </>
    )
}
