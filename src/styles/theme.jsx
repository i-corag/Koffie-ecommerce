import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        primary: 'black',
        secondary: '#968452',
    },
    styles: {
        global: {
            'html, body': {
                color: 'primary',
                font: ` 'Barlow','sans-serif' `,
                letterSpacing: '0.08em',
                // lineHeight: 'tall',
                a: {
                    _hover: {
                        color: 'secondary',
                        transform: 'scale(1.02)',
                    },
                },
            },
        }
    },
    components: {
        Button: {
            variants: {
                // add a new visual variant
                'koffie': {
                    color: 'primary',
                    bg: 'transparent',
                    border: '1px solid',
                    borderColor: 'secondary',
                    _hover: {
                        boxShadow: 'md',
                        borderColor: 'secondary',
                        transform: 'scale(1.02)',
                    },
                },
            },
        },
    }
});


export default theme