import { useState } from 'react'
import { Select, Group, Text } from '@mantine/core'

const locales = {
    en: 'English',
    es: 'Español',
    pt: 'Português',
}

const flagEmojis = {
    en: '🇺🇸',
    es: '🇪🇸',
    pt: '🇧🇷',
}

const STORAGE_KEY = 'language'

function getStoredLocale() {
    return localStorage.getItem(STORAGE_KEY) || 'pt'
}

export default function LanguageSelector() {
    const [currentLocale, setCurrentLocale] = useState(getStoredLocale)

    const handleChange = value => {
        if (value) {
            localStorage.setItem(STORAGE_KEY, value)
            setCurrentLocale(value)
        }
    }

    const options = Object.entries(locales).map(([value, label]) => ({
        value,
        label: `${flagEmojis[value]} ${label}`,
    }))

    const renderSelectOption = ({ option }) => (
        <Group
            gap="xs"
            align="center"
        >
            <Text size="sm">{option.label}</Text>
        </Group>
    )

    return (
        <Select
            value={currentLocale}
            onChange={handleChange}
            data={options}
            size="xs"
            style={{ width: 170 }}
            comboboxProps={{ withinPortal: false }}
            renderOption={renderSelectOption}
        />
    )
}
