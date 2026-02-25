import { Container, Box } from '@mantine/core'

import Header from './components/header'
import Footer from './components/footer'

export default function Layout({ children }) {
    // Zen Manifesto: "O Palco" - containers largos (XL) com padding vertical generoso (80px),
    // criando um palco central limpo e calmo.
    return (
        <Box
            display="flex"
            style={{ flexDirection: 'column', minHeight: '100vh', backgroundColor: '#FFFFFF' }}
        >
            <Header />
            <Box
                component="main"
                flex={1}
                style={{ position: 'relative' }}
                py={{ base: 40, md: 80 }} // Zen padding
            >
                <Container
                    size="lg" // Zen: usar XL
                    w="100%"
                    px="xl"
                >
                    {children}
                </Container>
            </Box>
            <Footer />
        </Box>
    )
}
