import React from 'react'
import Footer from './Footer'
import Navbar from './Nav/Navbar'

export const Layout = ({ children }) => {
    return (
        <main>
            <Navbar />
            <div>{children}</div>
            <Footer />
        </main>
    )
}
