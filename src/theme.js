import { createTheme } from '@mantine/core'

/**
 * RiLiGar Design System - Mantine 8 Theme
 * Estética 'Zen-Modern' de alto impacto.
 * Princípios: Conteúdo sobre Cromo, Paleta minimalista, Hierarquia Massiva, Big Type Metrics, Inputs Minimalistas.
 */
export const rlgTheme = createTheme({
    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',

    colors: {
        // Pure White backgrounds, Dark-9/Gray-9 texts
        gray: [
            '#FFFFFF', // 0: White (Background) / Pure White
            '#F8F8F8', // 1: Off-White
            '#EEEEEE', // 2: Light Gray (Borders)
            '#E0E0E0', // 3: Disabled
            '#BDBDBD', // 4: Placeholder/Subtitles
            '#757575', // 5: Text Secondary
            '#616161', // 6: Text Primary Soft
            '#424242', // 7: Text Primary
            '#34322D', // 8: Black (Headers)
            '#212121', // 9: Absolute Black (Dark-9)
        ],
        error: [
            '#F9FAFB',
            '#F3F4F6',
            '#E5E7EB',
            '#D1D5DB',
            '#9CA3AF',
            '#6B7280',
            '#4B5563',
            '#374151',
            '#1F2937',
            '#11181C',
        ],
        success: [
            '#F9FAFB',
            '#F3F4F6',
            '#E5E7EB',
            '#D1D5DB',
            '#9CA3AF',
            '#6B7280',
            '#4B5563',
            '#374151',
            '#1F2937',
            '#11181C',
        ],
    },

    primaryColor: 'gray',
    black: '#212121', // Dark-9
    white: '#FFFFFF', // Pure White
    autoContrast: true,

    defaultRadius: '0', // Zen: Remoção de cantos muito arredondados para um ar mais editorial/sério se desejar, mas mantendo md se preferir. Vamos usar 'sm' para sutileza.

    components: {
        // --- LAYOUT & CONTAINERS ---
        // Content over Chrome: No borders, no shadows
        Paper: {
            defaultProps: {
                withBorder: false,
                shadow: 'none',
                radius: 'sm',
            },
            styles: {
                root: {
                    backgroundColor: 'transparent',
                },
            },
        },
        Card: {
            defaultProps: {
                withBorder: false,
                shadow: 'none',
                radius: 'sm',
                padding: 'xl', // Generous padding
            },
            styles: {
                root: {
                    backgroundColor: 'transparent',
                },
            },
        },

        // --- DATA DISPLAY ---
        Table: {
            defaultProps: {
                verticalSpacing: 'md',
                horizontalSpacing: 'xl',
                withRowBorders: true,
                highlightOnHover: true,
            },
        },
        Badge: {
            defaultProps: {
                size: 'sm',
                radius: 'sm',
                variant: 'dot', // Zen: dot ou light
                fw: 600,
                color: 'gray.5',
            },
            styles: {
                root: {
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                },
            },
        },

        // --- INPUTS & ACTIONS ---
        Button: {
            defaultProps: {
                size: 'md',
                fw: 600,
                radius: 'sm',
                variant: 'filled',
                color: 'dark',
            },
            styles: {
                root: {
                    boxShadow: 'none', // Sem sombras
                },
            },
        },
        TextInput: {
            defaultProps: {
                size: 'md',
                radius: 0,
                variant: 'unstyled', // Zen: unstyled com border-bottom
            },
            styles: theme => ({
                input: {
                    borderBottom: `1px solid ${theme.colors.gray[2]}`,
                    paddingLeft: 0,
                    paddingRight: 0,
                    borderRadius: 0,
                    '&:focus': {
                        borderBottomColor: theme.black,
                    },
                },
                label: {
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    fontSize: '10px',
                    fontWeight: 800,
                    color: theme.colors.gray[5],
                    marginBottom: '8px',
                },
            }),
        },
        Textarea: {
            defaultProps: {
                size: 'md',
                radius: 0,
                variant: 'unstyled',
            },
            styles: theme => ({
                input: {
                    borderBottom: `1px solid ${theme.colors.gray[2]}`,
                    paddingLeft: 0,
                    paddingRight: 0,
                    borderRadius: 0,
                    '&:focus': {
                        borderBottomColor: theme.black,
                    },
                },
                label: {
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    fontSize: '10px',
                    fontWeight: 800,
                    color: theme.colors.gray[5],
                    marginBottom: '8px',
                },
            }),
        },
        Select: {
            defaultProps: {
                size: 'md',
                radius: 0,
                variant: 'unstyled',
            },
            styles: theme => ({
                input: {
                    borderBottom: `1px solid ${theme.colors.gray[2]}`,
                    paddingLeft: 0,
                    paddingRight: 0,
                    borderRadius: 0,
                    '&:focus': {
                        borderBottomColor: theme.black,
                    },
                },
                label: {
                    textTransform: 'uppercase',
                    letterSpacing: '1.5px',
                    fontSize: '10px',
                    fontWeight: 800,
                    color: theme.colors.gray[5],
                    marginBottom: '8px',
                },
            }),
        },
        ActionIcon: {
            defaultProps: {
                size: 'md',
                variant: 'subtle',
                color: 'gray',
                radius: 'sm',
            },
        },
        ThemeIcon: {
            defaultProps: {
                variant: 'light',
                color: 'gray',
                radius: 'sm',
            },
        },
        // --- TYPOGRAPHY (Hierarquia Massiva) ---
        Title: {
            styles: {
                root: {
                    fontWeight: 900,
                    letterSpacing: '-0.04em', // Zen: Títulos Pesados
                    color: '#212121',
                },
            },
        },
        Text: {
            styles: theme => ({
                root: {
                    '&[data-zen-subtitle="true"]': {
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '1.5px',
                        color: theme.colors.gray[5],
                        fontSize: '12px',
                    },
                    '&[data-zen-metric="true"]': {
                        fontWeight: 900,
                        fontSize: '64px', // base metric size
                        lineHeight: 1,
                        letterSpacing: '-0.04em',
                        color: theme.black,
                    },
                },
            }),
        },
    },
})
