import { Space } from '@mantine/core'

import Layout from '@/layout'

import Hero from '@/components/hero'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import CTA from '@/components/cta'
import Faq from '@/components/faq'

export default function Page() {
    return (
        <Layout>
            <Hero />
            <Space h="64" />
            <Features />
            <Space h="64" />
            <Testimonials />
            <Space h="64" />
            <CTA />
            <Space h="64" />
            <Faq />
            <Space h="64" />
        </Layout>
    )
}
//
