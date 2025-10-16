import { Space } from '@mantine/core'
import Layout from '@/layout'

import AIIntegrationHero from '@/components/solutions/ai-integration/hero'
import AIIntegrationTechStack from '@/components/solutions/ai-integration/tech-stack'
import AIIntegrationResults from '@/components/solutions/ai-integration/results'
import AIIntegrationCTA from '@/components/solutions/ai-integration/cta'

export default function AIIntegrationPage() {
    return (
        <Layout>
            <AIIntegrationHero />
            <AIIntegrationTechStack />
            <Space h="64" />
            <AIIntegrationResults />
            <Space h="64" />
            <AIIntegrationCTA />
            <Space h="64" />
        </Layout>
    )
}
