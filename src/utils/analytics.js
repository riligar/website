/**
 * Carrega o script de analytics apenas em produção
 * Utiliza import.meta.env.PROD para detectar ambiente de produção
 */
export function loadAnalytics() {
    // Só carrega analytics em produção
    if (!import.meta.env.PROD) {
        console.log('📊 Analytics desabilitado em desenvolvimento')
        return
    }

    // Verifica se o script já foi carregado
    if (document.querySelector('script[data-website-id="5b1ad6c7-33bc-4f3d-88d2-145f49c0e3ef"]')) {
        console.log('📊 Analytics já carregado')
        return
    }

    try {
        // Cria elemento script
        const script = document.createElement('script')
        script.defer = true
        script.src = 'https://analytics.riligar.click/script.js'
        script.setAttribute('data-website-id', '5b1ad6c7-33bc-4f3d-88d2-145f49c0e3ef')

        // Adiciona handlers para sucesso e erro
        script.onload = () => {
            console.log('📊 Analytics carregado com sucesso')
        }

        script.onerror = () => {
            console.warn('⚠️ Erro ao carregar analytics')
        }

        // Adiciona ao documento
        document.head.appendChild(script)
    } catch (error) {
        console.warn('⚠️ Erro ao inicializar analytics:', error)
    }
}

/**
 * Função alternativa usando variável de ambiente personalizada
 * Para usar esta versão, crie um arquivo .env.production com:
 * VITE_ENABLE_ANALYTICS=true
 */
export function loadAnalyticsWithEnv() {
    // Verifica variável de ambiente específica
    if (import.meta.env.VITE_ENABLE_ANALYTICS !== 'true') {
        console.log('📊 Analytics desabilitado via variável de ambiente')
        return
    }

    // Resto do código igual à função anterior
    loadAnalytics()
}
