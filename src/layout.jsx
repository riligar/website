import { Container, Box } from '@mantine/core'

import Header from './components/header'
import Footer from './components/footer'

export default function Layout({ children }) {
    return (
        <Box
            display="flex"
            style={{ flexDirection: 'column', minHeight: '100vh' }}
        >
            <Header />
            <Box
                component="main"
                flex={1}
                style={{ position: 'relative' }}
            >
                <Container
                    maw={1024}
                    w="100%"
                    px="md"
                >
                    {children}
                </Container>
            </Box>
            <Footer />
        </Box>
    )
}
