import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        primary: 'black',
        secondary: '#968452',
        tertiary: '#887A53',
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
                'koffie-solid': {
                    color: 'primary',
                    bg: 'secondary',
                    _hover: {
                        boxShadow: 'md',
                        bg: 'tertiary',
                        border: '1px solid',
                        borderColor: 'secondary',
                        transform: 'scale(1.02)',
                    },
                },
            },
        },

        Heading: {
            font: ` 'Barlow','sans-serif' `,
            letterSpacing: '0.08em',
            variants: {
                'koffie': {
                    color: 'secondary',
                },
                'title': {
                    fontSize: 'md',
                    py: '.3em',
                    lineHeight: 'medium',
                }
            },
        },

        Text: {
            font: ` 'Barlow','sans-serif' `,
            letterSpacing: '0.08em',
        }
    }
});


export default theme