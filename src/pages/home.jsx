import { Space } from '@mantine/core'

import Layout from '@/layout'

import Hero from '@/components/manager/hero'
import Features from '@/components/manager/features'
import Faq from '@/components/manager/faq'

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
