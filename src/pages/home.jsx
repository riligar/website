import { Space } from '@mantine/core'

import Layout from '@/layout'

import Hero from '@/components/hero'
import Clients from '@/components/clients'
import Stats from '@/components/stats'
import Features from '@/components/features'
import Process from '@/components/process'
import UseCases from '@/components/usecases'
import Comparison from '@/components/comparison'
import Testimonials from '@/components/testimonials'
import CTA from '@/components/cta'
import Faq from '@/components/faq'

export default function Page() {
    return (
        <Layout>
            <Hero />
            <Clients />
            <Space h="64" />
            <Stats />
            <Features />
            <Process />
            <Space h="64" />
            <UseCases />
            <Comparison />
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
