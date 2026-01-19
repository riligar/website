# Master Patterns: Mantine Clean Code

O código deve ser limpo. A customização visual vive no **Tema**, não no componente.

## 1. Sidebar (Clean)

```jsx
import { Stack, Box, Text, UnstyledButton, Group } from '@mantine/core'
import { IconHome, IconSettings } from '@tabler/icons-react'

function Sidebar() {
    return (
        // bg="gray.0" -> Layer 0 (Canvas) [Visual-Code Dictionary §2]
        // bd="solid gray.2" -> Layer 1 Separation [Visual-Code Dictionary §2]
        // p="sm" -> Layout Rhythm (Section) [Visual-Code Dictionary §1]
        <Box
            w={260}
            h="100vh"
            bg="gray.0"
            bd={{ base: '1px solid gray.2' }}
            p="sm"
        >
            <Stack gap={4}>
                <NavItem
                    icon={IconHome}
                    label="Home"
                    active
                />
                <NavItem
                    icon={IconSettings}
                    label="Settings"
                />
            </Stack>
        </Box>
    )
}

function NavItem({ icon: Icon, label, active }) {
    return (
        <UnstyledButton
            data-active={active || undefined}
            w="100%"
            p="xs" // Component Rhythm (8px) [Visual-Code Dictionary §1]
            // Radius md (6px) -> Defined in theme, enforced here for clarity
            style={{ borderRadius: 'var(--mantine-radius-md)' }}
            bg={active ? 'white' : 'transparent'}
            c={active ? 'text' : 'dimmed'}
        >
            <Group gap="xs">
                {/* Excellence Nuance #1: Stroke 1.5 [Visual-Code Dictionary §4] */}
                <Icon
                    size={16}
                    stroke={1.5}
                />
                <Text
                    size="sm"
                    fw={500}
                >
                    {label}
                </Text>
            </Group>
        </UnstyledButton>
    )
}
```

## 2. Tabela (Zero Props)

```jsx
import { Table, Text, Badge } from '@mantine/core'

// Note a ausência de props de estilo.
// O <Table> já vem com spacing e borders configurados no tema.
// [Visual-Code Dictionary §3: Table Row Anatomy]
function DenseTable({ data }) {
    return (
        <Table>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>NAME</Table.Th>
                    <Table.Th>STATUS</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                {data.map(item => (
                    <Table.Tr key={item.id}>
                        <Table.Td>
                            <Text fw={500}>{item.name}</Text>
                        </Table.Td>
                        <Table.Td>
                            <Badge color="gray">{item.status}</Badge>
                        </Table.Td>
                    </Table.Tr>
                ))}
            </Table.Tbody>
        </Table>
    )
}
```

## 3. Cards (Clean)

```jsx
import { Paper, Text, Group, Button, Stack, Box } from '@mantine/core'

function ContentCard() {
    return (
        // <Paper> já vem com border e radius corretos do tema
        // [Visual-Code Dictionary §2: Layer 1 Card]
        <Paper overflow="hidden">
            <Box
                p="md"
                py="xs"
                bg="gray.0"
                bd={{ bottom: '1px solid gray.2' }}
            >
                <Text fw={600}>Project Alpha</Text>
            </Box>

            <Stack
                p="md"
                gap="sm"
            >
                <Text
                    c="dimmed"
                    size="sm"
                >
                    Descrição limpa e focada.
                </Text>

                <Group justify="flex-end">
                    {/* Variantes e tamanhos vêm do defaultProps do tema */}
                    <Button variant="default">Cancel</Button>
                    <Button>Save</Button>
                </Group>
            </Stack>
        </Paper>
    )
}
```
