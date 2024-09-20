import { Space } from "@mantine/core"

import Layout from "../layout"

import Hero from "../components/generator/hero"
import Features from "../components/generator/features"
import Faq from "../components/generator/faq"

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
