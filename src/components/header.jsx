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
    IconLayoutGrid,
    IconPhone,
} from '@tabler/icons-react'
import { useState, useEffect } from 'react'

import classes from './header.module.css'

import { useNavigate } from 'react-router-dom'

import logo from '/image/riligar-logotipo.png'

const mockdata = [
    {
        icon: IconRobot,
        title: 'AI Agents',
        description: 'Intelligent autonomous agents that automate tasks and make decisions for your business',
        pathname: '/ai-agents',
    },
    {
        icon: IconChartBar,
        title: 'Salesforce Solutions',
        description: 'Custom components, integrations, and automations for your Salesforce platform',
        pathname: '/salesforce',
    },
    {
        icon: IconCloudComputing,
        title: 'SaaS Platforms',
        description: 'End-to-end SaaS development with modern, scalable architecture',
        pathname: '/saas',
    },
    {
        icon: IconSparkles,
        title: 'AI Integration',
        description: 'Add AI capabilities to your existing systems and workflows',
        pathname: '/ai-integration',
    },
]

export default function HeaderMegaMenu() {
    const navigate = useNavigate()

    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false)
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
    const [scrolled, setScrolled] = useState(false)
    const theme = useMantineTheme()

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
            key={item.title}
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
                        <Group gap="xs">
                            <Image
                                src={logo}
                                h={30}
                            />
                            {/* <Text
                            size="lg"
                            fw={900}
                            mt={1}
                        >
                            Riligar
                        </Text> */}
                        </Group>
                        {/* <IconAlignBoxRightStretch size={30} /> */}
                        <Group
                            h="100%"
                            gap={0}
                            visibleFrom="sm"
                        >
                            <a
                                href="/"
                                className={classes.link}
                            >
                                Home
                            </a>
                            <HoverCard
                                width={600}
                                position="bottom"
                                radius="md"
                                shadow="md"
                                withinPortal
                            >
                                <HoverCard.Target>
                                    <a
                                        href="#"
                                        className={classes.link}
                                    >
                                        <Center inline>
                                            <Box
                                                component="span"
                                                mr={5}
                                            >
                                                Solutions
                                            </Box>
                                            <IconChevronDown
                                                style={{ width: rem(16), height: rem(16) }}
                                                color={theme.colors.blue[6]}
                                            />
                                        </Center>
                                    </a>
                                </HoverCard.Target>

                                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                                    <Group
                                        justify="space-between"
                                        px="md"
                                    >
                                        <Text fw={500}>Our Services</Text>
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
                                                    Ready to get started?
                                                </Text>
                                                <Text
                                                    size="xs"
                                                    c="dimmed"
                                                >
                                                    Discover the perfect solution for your business
                                                </Text>
                                            </div>
                                            <Button
                                                variant="default"
                                                leftSection={
                                                    <IconLayoutGrid style={{ width: rem(16), height: rem(16) }} />
                                                }
                                            >
                                                View Solutions
                                            </Button>
                                        </Group>
                                    </div>
                                </HoverCard.Dropdown>
                            </HoverCard>
                            <a
                                href="/about"
                                className={classes.link}
                            >
                                About Us
                            </a>
                            <a
                                href="#"
                                className={classes.link}
                            >
                                Contact
                            </a>
                        </Group>
                        <Group visibleFrom="sm">
                            <Button
                                size="xs"
                                variant="outline"
                                leftSection={<IconLayoutGrid style={{ width: rem(14), height: rem(14) }} />}
                            >
                                Solutions
                            </Button>
                            <Button
                                size="xs"
                                leftSection={<IconPhone style={{ width: rem(14), height: rem(14) }} />}
                            >
                                Contact Us
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
                title="Navigation"
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
                        Home
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
                                Solutions
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
                        About Us
                    </a>
                    <a
                        href="#"
                        className={classes.link}
                    >
                        Contact
                    </a>

                    <Group
                        justify="center"
                        grow
                        pb="xl"
                        px="md"
                    >
                        <Button
                            variant="default"
                            leftSection={<IconLayoutGrid style={{ width: rem(16), height: rem(16) }} />}
                        >
                            Solutions
                        </Button>
                        <Button leftSection={<IconPhone style={{ width: rem(16), height: rem(16) }} />}>
                            Contact Us
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
