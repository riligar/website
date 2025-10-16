import { Space } from '@mantine/core'

import Layout from '@/layout'

import ContactHero from '@/components/contact/hero'
import ContactLinks from '@/components/contact/links'
import ContactAvailability from '@/components/contact/availability'
import ContactProcess from '@/components/contact/process'
import ContactFAQ from '@/components/contact/faq'
import ContactForm from '@/components/contact/form'

export default function ContactPage() {
    return (
        <Layout>
            <ContactHero />
            <ContactLinks />
            <Space h="64" />
            <ContactAvailability />
            <ContactProcess />
            <Space h="64" />
            <ContactFAQ />
            <Space h="64" />
            <ContactForm />
            <Space h="64" />
        </Layout>
    )
}
