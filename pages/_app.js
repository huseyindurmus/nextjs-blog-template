import React from "react";
import '../styles/base.css'
import Head from "next/head";
function MyApp({ Component, pageProps }) {
    return(
        <>
            <Head>
                <title>Dasdas Blog Template</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp