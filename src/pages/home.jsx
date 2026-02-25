import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

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
    const location = useLocation()

    // Escuta mudanças no hash da URL e faz scroll suave
    useEffect(() => {
        if (location.hash) {
            const elementId = location.hash.replace('#', '')
            // Timeout para garantir que o DOM esteja pronto
            setTimeout(() => {
                const element = document.getElementById(elementId)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            }, 100)
        }
    }, [location.hash])

    return (
        <Layout>
            <Hero />
            {/* <Clients /> */}
            <ImpactLevels />
            <Features />
            {/* <Process /> */}
            <UseCases />
            <CaseStudy />
            <PricingModel />
            <Comparison />
            <Testimonials />
            <AboutSection />
            <CTA />
            <Faq />
            <ContactSection />
        </Layout>
    )
}
