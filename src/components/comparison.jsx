import { Box, Title, Text, Container, Table, Badge, Group, ThemeIcon, rem, Button } from '@mantine/core'
import { IconCheck, IconX, IconArrowRight } from '@tabler/icons-react'
import { Trans } from '@lingui/react/macro'

const comparisons = [
    {
        id: 'engineers',
        featureKey: 'Direct access to experienced engineers',
        riligar: true,
        others: false,
    },
    {
        id: 'solutions',
        featureKey: 'Solutions-first approach (not just code)',
        riligar: true,
        others: false,
    },
    {
        id: 'ai-agents',
        featureKey: 'AI Agents deployment capability',
        riligar: true,
        others: false,
    },
    {
        id: 'iterations',
        featureKey: 'Fast iterations (2-3 weeks to prototype)',
        riligar: true,
        others: false,
    },
    {
        id: 'code-quality',
        featureKey: 'Clean, maintainable code standard',
        riligar: true,
        others: false,
    },
    {
        id: 'pricing',
        featureKey: 'Transparent pricing, no hidden fees',
        riligar: true,
        others: false,
    },
    {
        id: 'expertise',
        featureKey: 'Salesforce expertise + AI integration',
        riligar: true,
        others: false,
    },
    {
        id: 'attention',
        featureKey: 'Personal attention to every project',
        riligar: true,
        others: false,
    },
]

export default function Comparison() {
    return (
        <Box
            component="section"
            aria-label="Comparison with other agencies"
            py={80}
            style={{
                background: 'linear-gradient(180deg, rgba(249, 250, 251, 1) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
        >
            <Container size="md">
                <Group
                    justify="center"
                    mb="md"
                >
                    <Badge
                        variant="filled"
                        size="lg"
                    >
                        <Trans>The RiLiGar Difference</Trans>
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                    size={{ base: 28, sm: 32, md: 36 }}
                >
                    <Trans>Why Choose RiLiGar?</Trans>
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    <Trans>
                        We're not just another development agency. We're a focused team that delivers solutions—not just
                        code. Here's what makes us different.
                    </Trans>
                </Text>

                <Box
                    style={{
                        overflowX: 'auto',
                        border: '1px solid #e9ecef',
                        borderRadius: '8px',
                    }}
                >
                    <Table highlightOnHover>
                        <Table.Thead>
                            <Table.Tr>
                                <Table.Th style={{ width: '50%' }}>
                                    <Trans>Feature</Trans>
                                </Table.Th>
                                <Table.Th style={{ textAlign: 'center', width: '25%' }}>
                                    <Text
                                        fw={700}
                                        size="lg"
                                        c="blue"
                                    >
                                        RiLiGar
                                    </Text>
                                </Table.Th>
                                <Table.Th style={{ textAlign: 'center', width: '25%' }}>
                                    <Text
                                        fw={600}
                                        c="dimmed"
                                    >
                                        <Trans>Typical Agencies</Trans>
                                    </Text>
                                </Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {comparisons.map(item => (
                                <Table.Tr key={item.id}>
                                    <Table.Td>
                                        <Text size="sm">
                                            <Trans>{item.featureKey}</Trans>
                                        </Text>
                                    </Table.Td>
                                    <Table.Td style={{ textAlign: 'center' }}>
                                        {item.riligar ? (
                                            <ThemeIcon
                                                color="teal"
                                                size={24}
                                                radius="xl"
                                                variant="light"
                                            >
                                                <IconCheck
                                                    style={{ width: rem(16), height: rem(16) }}
                                                    stroke={3}
                                                />
                                            </ThemeIcon>
                                        ) : (
                                            <ThemeIcon
                                                color="red"
                                                size={24}
                                                radius="xl"
                                                variant="light"
                                            >
                                                <IconX
                                                    style={{ width: rem(16), height: rem(16) }}
                                                    stroke={3}
                                                />
                                            </ThemeIcon>
                                        )}
                                    </Table.Td>
                                    <Table.Td style={{ textAlign: 'center' }}>
                                        {item.others ? (
                                            <ThemeIcon
                                                color="teal"
                                                size={24}
                                                radius="xl"
                                                variant="light"
                                            >
                                                <IconCheck
                                                    style={{ width: rem(16), height: rem(16) }}
                                                    stroke={3}
                                                />
                                            </ThemeIcon>
                                        ) : (
                                            <ThemeIcon
                                                color="gray"
                                                size={24}
                                                radius="xl"
                                                variant="light"
                                            >
                                                <IconX
                                                    style={{ width: rem(16), height: rem(16) }}
                                                    stroke={2}
                                                />
                                            </ThemeIcon>
                                        )}
                                    </Table.Td>
                                </Table.Tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                </Box>

                <Text
                    size="sm"
                    c="dimmed"
                    ta="center"
                    mt="xl"
                    mb="lg"
                >
                    <Trans>
                        We focus on what matters: solving your problems efficiently with solutions that work. No
                        bureaucracy, no bloated teams, no maximizing billable hours—just honest, expert work.
                    </Trans>
                </Text>

                <Group
                    justify="center"
                    mt="xl"
                >
                    <Button
                        component="a"
                        href="/about"
                        size="md"
                        variant="light"
                        rightSection={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
                    >
                        <Trans>See How We Work</Trans>
                    </Button>
                </Group>
            </Container>
        </Box>
    )
}
