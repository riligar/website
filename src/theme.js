import { createTheme } from '@mantine/core'

/**
 * RiLiGar Design System - Mantine 8 Theme
 * Estética minimalista e adaptável (Light/Dark Mode).
 */
export const rlgTheme = createTheme({
    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',

    colors: {
        // Escala Baseada nas cores fornecidas no Design System Asset
        // Preto: #34322D
        // Cinza: #F8F8F8
        // Branco: #FFFFFF
        gray: [
            '#F8F8F8', // 0: Gray (Background)
            '#FFFFFF', // 1: White
            '#EEEEEE', // 2: Light Gray (Borders)
            '#E0E0E0', // 3: Disabled
            '#BDBDBD', // 4: Placeholder
            '#757575', // 5: Text Secondary
            '#616161', // 6: Text Primary Soft
            '#424242', // 7: Text Primary
            '#34322D', // 8: Black (Headers/Deep)
            '#212121', // 9: Absolute Black
        ],
        // Semânticos neutralizados para manter monochromaticidade total conforme skill
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
    black: '#34322D',
    white: '#FFFFFF',
    autoContrast: true,

    defaultRadius: 'md', // 6px

    components: {
        // --- LAYOUT & CONTAINERS ---
        Paper: {
            defaultProps: {
                withBorder: true,
                shadow: 'none',
                radius: 'lg', // 8px para containers
            },
        },
        Card: {
            defaultProps: {
                withBorder: true,
                shadow: 'none',
                radius: 'lg',
                padding: 'md',
            },
        },

        // --- DATA DISPLAY ---
        Table: {
            defaultProps: {
                verticalSpacing: 'xs', // 8px density
                horizontalSpacing: 'md',
                withRowBorders: true,
                highlightOnHover: true,
            },
        },
        Badge: {
            defaultProps: {
                size: 'sm',
                radius: 'sm',
                variant: 'light',
                fw: 500,
            },
        },

        // --- INPUTS & ACTIONS ---
        Button: {
            defaultProps: {
                size: 'sm', // 32px
                fw: 500,
                radius: 'md',
                variant: 'filled',
                color: 'dark',
            },
        },
        TextInput: {
            defaultProps: {
                size: 'sm', // 32px height
                radius: 'md',
            },
            styles: theme => ({
                input: {
                    border: `1px solid ${theme.colors.gray[2]}`,
                    '&:focus': {
                        borderColor: theme.colors.gray[5],
                    },
                },
            }),
        },
        Select: {
            defaultProps: {
                size: 'sm',
                radius: 'md',
            },
        },
        ActionIcon: {
            defaultProps: {
                size: 'sm',
                variant: 'subtle',
                color: 'gray',
                radius: 'md',
            },
        },
        ThemeIcon: {
            defaultProps: {
                variant: 'light',
                color: 'gray',
                radius: 'md',
            },
        },
        Title: {
            styles: {
                root: {
                    letterSpacing: '-0.02em',
                },
            },
        },
    },
})
