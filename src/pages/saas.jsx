import { Space } from '@mantine/core'
import Layout from '@/layout'

import SaaSHero from '@/components/solutions/saas/hero'
import SaaSTechStack from '@/components/solutions/saas/tech-stack'
import SaaSResults from '@/components/solutions/saas/results'
import SaaSCTA from '@/components/solutions/saas/cta'

export default function SaaSPage() {
    return (
        <Layout>
            <SaaSHero />
            <SaaSTechStack />
            <Space h="64" />
            <SaaSResults />
            <Space h="64" />
            <SaaSCTA />
            <Space h="64" />
        </Layout>
    )
}
