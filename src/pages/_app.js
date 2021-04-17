import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import "@fontsource/spartan/400.css";
import React from 'react';
import Router from 'next/router';
import { Spinner, Center, Text } from "@chakra-ui/react"
import Layout from '../components/Layout';

const theme = extendTheme({
    colors: {
        brand: {
            100: "#fa7d09",
            200: "#4a3f35", 
            300: "#2f2519",
            400: "#ff4301",
        },
    },
    fonts: {
        heading: "Spartan",
        body: "Spartan",
      },
});


export default function App({ Component, pageProps }) {
    //loading page setup
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        const start = () => {
            setLoading(true);
        };
        const end = () => {
            setLoading(false);
        };
        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);
        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);

    return (
        <>
            {loading ? (
                    <Center>
                        <Text>Loading ... </Text>
                        <Spinner />
                    </Center>
            ) : ( 
                <ChakraProvider theme={theme}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </ChakraProvider>
            )}
        </>
    );
};
