/**
 * RiLiGar Design System - Mantine 8 Theme
 * Estética minimalista e adaptável (Light/Dark Mode).
 *
 * CENTRALIZAÇÃO TOTAL:
 * Toda a configuração visual (sizes, borders, radius) DEVE estar aqui.
 * O código do componente deve ser limpo.
 */

import { createTheme } from '@mantine/core'

export const theme = createTheme({
    fontFamily: 'Montserrat, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',

    colors: {
        // Escala Baseada nas cores fornecidas
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
        // Semânticos neutralizados para manter monochromaticidade total
        error: ['#F9FAFB', '#F3F4F6', '#E5E7EB', '#D1D5DB', '#9CA3AF', '#6B7280', '#4B5563', '#374151', '#1F2937', '#11181C'],
        success: ['#F9FAFB', '#F3F4F6', '#E5E7EB', '#D1D5DB', '#9CA3AF', '#6B7280', '#4B5563', '#374151', '#1F2937', '#11181C'],
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
                        borderColor: theme.colors.gray[5], // Force gray focus
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
