import { Space } from '@mantine/core'
import Layout from '@/layout'

import AIAgentsHero from '@/components/solutions/ai-agents/hero'
import AIAgentsTechStack from '@/components/solutions/ai-agents/tech-stack'
import AIAgentsCapabilities from '@/components/solutions/ai-agents/capabilities'
import AIAgentsUseCases from '@/components/solutions/ai-agents/use-cases'
import AIAgentsResults from '@/components/solutions/ai-agents/results'
import AIAgentsCTA from '@/components/solutions/ai-agents/cta'

export default function AIAgentsPage() {
    return (
        <Layout>
            <AIAgentsHero />
            <AIAgentsTechStack />
            <Space h="64" />
            <AIAgentsCapabilities />
            <Space h="64" />
            <AIAgentsUseCases />
            <Space h="64" />
            <AIAgentsResults />
            <Space h="64" />
            <AIAgentsCTA />
            <Space h="64" />
        </Layout>
    )
}
