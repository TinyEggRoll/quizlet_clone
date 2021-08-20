import { extendTheme } from "@chakra-ui/react"


const myNewTheme = extendTheme({
    colors: {
        primary: '#4257b2',
        secondary: '#3ccfcf',
        highlight: '#ffdc62',
        slightShade: '#4A5568'
    },
})

export default myNewTheme;