import { Space } from '@mantine/core'

import Layout from '@/layout'

import Hero from '@/components/hero'
import Clients from '@/components/clients'
import ImpactLevels from '@/components/impactLevels'
import Features from '@/components/features'
import Process from '@/components/process'
import UseCases from '@/components/usecases'
import CaseStudy from '@/components/caseStudy'
import PricingModel from '@/components/pricingModel'
import Comparison from '@/components/comparison'
import Testimonials from '@/components/testimonials'
import AboutSection from '@/components/aboutSection'
import CTA from '@/components/cta'
import Faq from '@/components/faq'
import ContactSection from '@/components/contactSection'

export default function Page() {
    return (
        <Layout>
            <Hero />
            <Clients />
            <Space h="64" />
            <ImpactLevels />
            <Features />
            <Process />
            <Space h="64" />
            <UseCases />
            <CaseStudy />
            <PricingModel />
            <Comparison />
            <Space h="64" />
            <Testimonials />
            <Space h="64" />
            <AboutSection />
            <CTA />
            <Space h="64" />
            <Space h="64" />
            <Faq />
            <Space h="64" />
            <ContactSection />
        </Layout>
    )
}
//
