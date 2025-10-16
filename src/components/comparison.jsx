import { Box, Title, Text, Container, Table, Badge, Group, ThemeIcon, rem, Button } from '@mantine/core'
import { IconCheck, IconX, IconArrowRight } from '@tabler/icons-react'

const comparisons = [
    {
        feature: 'Direct access to experienced engineers',
        riligar: true,
        others: false,
    },
    {
        feature: 'Solutions-first approach (not just code)',
        riligar: true,
        others: false,
    },
    {
        feature: 'AI Agents deployment capability',
        riligar: true,
        others: false,
    },
    {
        feature: 'Fast iterations (2-3 weeks to prototype)',
        riligar: true,
        others: false,
    },
    {
        feature: 'Clean, maintainable code standard',
        riligar: true,
        others: false,
    },
    {
        feature: 'Transparent pricing, no hidden fees',
        riligar: true,
        others: false,
    },
    {
        feature: 'Salesforce expertise + AI integration',
        riligar: true,
        others: false,
    },
    {
        feature: 'Personal attention to every project',
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
                        The RiLiGar Difference
                    </Badge>
                </Group>

                <Title
                    order={2}
                    ta="center"
                    mb="md"
                >
                    Why Choose RiLiGar?
                </Title>

                <Text
                    c="dimmed"
                    ta="center"
                    mb={60}
                    maw={700}
                    mx="auto"
                >
                    We're not just another development agency. We're a focused team that delivers solutions—not just
                    code. Here's what makes us different.
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
                                <Table.Th style={{ width: '50%' }}>Feature</Table.Th>
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
                                        Typical Agencies
                                    </Text>
                                </Table.Th>
                            </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                            {comparisons.map((item, index) => (
                                <Table.Tr key={index}>
                                    <Table.Td>
                                        <Text size="sm">{item.feature}</Text>
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
                    We focus on what matters: solving your problems efficiently with solutions that work. No
                    bureaucracy, no bloated teams, no maximizing billable hours—just honest, expert work.
                </Text>

                <Group
                    justify="center"
                    mt="xl"
                >
                    <Button
                        size="md"
                        variant="light"
                        rightSection={<IconArrowRight style={{ width: rem(16), height: rem(16) }} />}
                    >
                        See How We Work
                    </Button>
                </Group>
            </Container>
        </Box>
    )
}
