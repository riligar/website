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
            {/* <Space h="64" /> */}
            <AboutValues />
            {/* <Space h="64" /> */}
            <AboutTeam />
            <Space h="64" />
            <AboutCTA />
            <Space h="64" />
        </Layout>
    )
}
