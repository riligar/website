import { Container, Space } from '@mantine/core'

import Header from './components/header'
import Footer from './components/footer'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Space h="64" />
            <Container
                style={{ flex: 1 }}
                size={1024}
            >
                {children}
            </Container>
            <Footer />
        </>
    )
}
