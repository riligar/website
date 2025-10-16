import { Select, Group, Text } from '@mantine/core'
import { useLingui } from '@lingui/react/macro'
import { locales, dynamicActivate } from '../i18n'
import { saveLocale } from '../utils/detectLocale'

const flagEmojis = {
    en: '🇺🇸',
    es: '🇪🇸',
    pt: '🇧🇷',
}

export default function LanguageSelector() {
    const { i18n } = useLingui()

    const handleChange = async value => {
        if (value) {
            await dynamicActivate(value)
            saveLocale(value)
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
            value={i18n.locale}
            onChange={handleChange}
            data={options}
            size="xs"
            style={{ width: 170 }}
            comboboxProps={{ withinPortal: false }}
            renderOption={renderSelectOption}
        />
    )
}
