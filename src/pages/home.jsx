import { Space } from '@mantine/core'

import Layout from '@/layout'

import Hero from '@/components/hero'
import Features from '@/components/features'
import Faq from '@/components/faq'

export default function Page() {
    return (
        <Layout>
            <Hero />
            <Features />
            <Space h="64" />
            <Faq />
            <Space h="64" />
        </Layout>
    )
}
//
