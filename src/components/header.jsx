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
import { IconChartBar, IconCloudComputing, IconBrain, IconCode, IconChevronDown } from '@tabler/icons-react'
import { useState, useEffect } from 'react'

import classes from './header.module.css'

import { useNavigate } from 'react-router-dom'

import logo from '/image/riligar-logotipo.png'

const mockdata = [
    {
        icon: IconChartBar,
        title: 'Salesforce Development',
        description: 'Custom Lightning Web Components and Salesforce solutions that enhance your CRM',
        pathname: '/salesforce',
    },
    {
        icon: IconCloudComputing,
        title: 'SaaS Development',
        description: 'High-performance, scalable applications built with clean code and smart architecture',
        pathname: '/saas',
    },
    {
        icon: IconBrain,
        title: 'AI Integration',
        description: 'Intelligent automation and AI-powered tools that transform your workflows',
        pathname: '/ai-solutions',
    },
    {
        icon: IconCode,
        title: 'Consulting',
        description: 'Technical expertise and strategic guidance for your development projects',
        pathname: '/consulting',
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
                                                    Let's discuss how we can help your business grow
                                                </Text>
                                            </div>
                                            <Button variant="default">Contact Us</Button>
                                        </Group>
                                    </div>
                                </HoverCard.Dropdown>
                            </HoverCard>
                            <a
                                href="#"
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
                            >
                                Our Work
                            </Button>
                            <Button size="xs">Get Started</Button>
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
                        href="#"
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
                        <Button variant="default">Our Work</Button>
                        <Button>Get Started</Button>
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
