import { Space } from '@mantine/core'

import Layout from '@/layout'

import AboutHero from '@/components/about/hero'
import AboutStory from '@/components/about/story'
import AboutValues from '@/components/about/values'
import AboutTeam from '@/components/about/team'
import AboutCTA from '@/components/about/cta'

export default function AboutPage() {
    return (
        <Layout>
            <AboutHero />
            <AboutStory />
            <AboutValues />
            <AboutTeam />
            <Space h="64" />
            <AboutCTA />
            <Space h="64" />
        </Layout>
    )
}
