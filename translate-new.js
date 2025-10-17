import fs from 'fs'

const translations = {
    "These are examples of Salesforce customizations we've built for clients—each delivering measurable business value.":
        {
            es: 'Estos son ejemplos de personalizaciones de Salesforce que hemos construido para clientes—cada una entregando valor empresarial medible.',
            pt: 'Estes são exemplos de personalizações Salesforce que construímos para clientes—cada uma entregando valor empresarial mensurável.',
        },
    "These aren't theoretical—they're production systems we've built and deployed. Each use case shows measurable business impact.":
        {
            es: 'Estos no son teóricos—son sistemas de producción que hemos construido y desplegado. Cada caso de uso muestra impacto empresarial medible.',
            pt: 'Estes não são teóricos—são sistemas de produção que construímos e implantamos. Cada caso de uso mostra impacto empresarial mensurável.',
        },
}

const locales = ['es', 'pt']

for (const locale of locales) {
    const poFile = `src/locales/${locale}/messages.po`
    let content = fs.readFileSync(poFile, 'utf8')
    let count = 0

    for (const [english, trans] of Object.entries(translations)) {
        if (trans[locale]) {
            const escapedEnglish = english.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/\n/g, '\\n')

            const regex = new RegExp(`(msgid "${escapedEnglish}"\\s*\\n)msgstr ""`, 'g')

            const before = content
            content = content.replace(regex, `$1msgstr "${trans[locale]}"`)
            if (content !== before) count++
        }
    }

    fs.writeFileSync(poFile, content, 'utf8')
    console.log(`✅ ${locale}: ${count} traduções aplicadas`)
}

console.log('\n✅ Traduções aplicadas!')
