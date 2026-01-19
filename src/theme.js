import { createTheme } from '@mantine/core'

/**
 * RiLiGar Design System - Mantine 8 Theme
 * Estética minimalista e adaptável (Light/Dark Mode).
 */
export const rlgTheme = createTheme({
    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',

    colors: {
        // Escala Neutra Universal (Mapeada para cinzas conforme design-tokens)
        gray: [
            '#F9FAFB', // 0: App Background
            '#F3F4F6', // 1: Hover/Subtle
            '#E5E7EB', // 2: Borders
            '#D1D5DB', // 3: Disabled
            '#9CA3AF', // 4: Placeholder
            '#6B7280', // 5: Text Secondary
            '#4B5563', // 6: Text Primary Soft
            '#374151', // 7: Text Primary
            '#1F2937', // 8: Headers
            '#11181C', // 9: Absolute Black
        ],
        // Semânticos
        error: [
            '#FEF2F2',
            '#FEE2E2',
            '#FECACA',
            '#FCA5A5',
            '#F87171',
            '#EF4444',
            '#DC2626',
            '#B91C1C',
            '#991B1B',
            '#7F1D1D',
        ],
        success: [
            '#F0FDF4',
            '#DCFCE7',
            '#BBF7D0',
            '#86EFAC',
            '#4ADE80',
            '#22C55E',
            '#16A34A',
            '#15803D',
            '#166534',
            '#14532D',
        ],
    },

    primaryColor: 'dark',
    autoContrast: true,

    defaultRadius: 'md', // 6px

    components: {
        // Centralização de estilos para evitar repetição nos componentes
        Paper: {
            defaultProps: {
                withBorder: true,
                shadow: 'none',
                radius: 'lg',
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
        Button: {
            defaultProps: {
                size: 'sm',
                fw: 500,
                radius: 'md',
                variant: 'filled',
                color: 'dark',
            },
        },
        ActionIcon: {
            defaultProps: {
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
