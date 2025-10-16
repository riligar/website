import { Space } from '@mantine/core'
import Layout from '@/layout'

import SalesforceHero from '@/components/solutions/salesforce/hero'
import SalesforceTechStack from '@/components/solutions/salesforce/tech-stack'
import SalesforceCapabilities from '@/components/solutions/salesforce/capabilities'
import SalesforceUseCases from '@/components/solutions/salesforce/use-cases'
import SalesforceResults from '@/components/solutions/salesforce/results'
import SalesforceCTA from '@/components/solutions/salesforce/cta'

export default function SalesforcePage() {
    return (
        <Layout>
            <SalesforceHero />
            <SalesforceTechStack />
            <Space h="64" />
            <SalesforceCapabilities />
            <Space h="64" />
            <SalesforceUseCases />
            <Space h="64" />
            <SalesforceResults />
            <Space h="64" />
            <SalesforceCTA />
            <Space h="64" />
        </Layout>
    )
}
