/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                pii: {
                    primary: '#1e3a8a',
                    secondary: '#15803d',
                    accent: '#d97706',
                    soft: '#f0f9ff',
                    surface: '#ffffff'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Amiri', 'serif'],
                pixel: ['"Press Start 2P"', 'cursive'],
                retro: ['VT323', 'monospace'],
            },
            animation: {
                'shine': 'shine 1.5s infinite',
            },
            keyframes: {
                shine: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' }
                }
            }
        },
    },
    plugins: [],
}
