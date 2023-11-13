import {Inter} from 'next/font/google'
import './globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'Rebeauty',
    description: 'Rebeauty products',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <title>ReBeauty - Skin Care Product Review</title>
            <meta charSet="utf-8"/>
            <meta httpEquiv="content-language" content="en-us"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="keywords" content="skin care, review, cleanser, toner, moisturizer, beauty product"/>
            <meta name="description"
                  content="Discover numerous honest Beauty Reviews. Join our reliable community to catch up with the latest product update. More than 1000 users has joined!"/>
            <meta property="og:title" content="ReBeauty - Skin Care Product Review"/>
            <meta property="og:description"
                  content="Discover numerous honest Beauty Reviews. Join our reliable community to catch up with the latest product update. More than 1000 users has joined!"/>
            <meta property="og:image" content="https://imgur.com/beXWL1O.png"/>
            <meta property="og:url" content="www.rebeauty.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap"
                  rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap"
                  rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.13.0/css/all.css"/>
        </head>
            <body className={inter.className}>

            <Navbar></Navbar>
                {children}
            <Footer></Footer>
            </body>
        </html>
    )
}
