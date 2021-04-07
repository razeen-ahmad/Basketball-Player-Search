import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        brand: {
            100: "#fa7d09",
            200: "#4a3f35", 
            300: "#2f2519",
            400: "#ff4301",
        },
    },
});


export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};
