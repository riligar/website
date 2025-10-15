export function generatePassword(length, includeNumbers = true, includeSymbols = true) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?'
    const numbers = '0123456789'

    let allChars = uppercase + lowercase

    // Arrays para garantir inclusão
    let guaranteedChars = ''

    if (includeNumbers) {
        allChars += numbers
        guaranteedChars += numbers[Math.floor(Math.random() * numbers.length)]
    }

    if (includeSymbols) {
        allChars += symbols
        guaranteedChars += symbols[Math.floor(Math.random() * symbols.length)]
    }

    let password = guaranteedChars
    const array = new Uint32Array(length - guaranteedChars.length)

    // Preenche o array com números aleatórios usando o crypto.getRandomValues
    const cryptoObj = typeof window !== 'undefined' ? window.crypto : crypto
    cryptoObj.getRandomValues(array)

    for (let i = 0; i < array.length; i++) {
        const randomIndex = array[i] % allChars.length
        password += allChars[randomIndex]
    }

    // Embaralha a senha para que os caracteres garantidos não estejam sempre no início
    return password
        .split('')
        .sort(() => 0.5 - Math.random())
        .join('')
}
