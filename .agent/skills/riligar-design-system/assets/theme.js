/**
 * RiLiGar Design System - Mantine 8 Theme
 * Estética minimalista e adaptável (Light/Dark Mode).
 *
 * CENTRALIZAÇÃO TOTAL:
 * Toda a configuração visual (sizes, borders, radius) DEVE estar aqui.
 * O código do componente deve ser limpo.
 */

import { createTheme, rem } from '@mantine/core'

export const rlgTheme = createTheme({
    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',

    colors: {
        // Escala Neutra Universal (Substitui o gray padrão)
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
        error: ['#FEF2F2', '#FEE2E2', '#FECACA', '#FCA5A5', '#F87171', '#EF4444', '#DC2626', '#B91C1C', '#991B1B', '#7F1D1D'],
        success: ['#F0FDF4', '#DCFCE7', '#BBF7D0', '#86EFAC', '#4ADE80', '#22C55E', '#16A34A', '#15803D', '#166534', '#14532D'],
    },

    primaryColor: 'dark', // Escala dark mapeada para cinzas
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
            },
            // Variações semânticas via theme vars se necessário
        },
        TextInput: {
            defaultProps: {
                size: 'sm', // 32px height
                radius: 'md',
            },
            styles: theme => ({
                input: {
                    border: `1px solid ${theme.colors.gray[2]}`, // Garante borda 1px
                    '&:focus': {
                        borderColor: theme.colors.dark[8],
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
                size: 'sm', // 26px context triggers
                variant: 'subtle',
                color: 'gray',
                radius: 'md',
            },
        },
    },
})
