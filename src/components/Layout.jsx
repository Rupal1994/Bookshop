import React from 'react'
import NavbarBook from './NavbarBook'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <>
            <NavbarBook />
            <main>
                <Outlet/>
            </main>
            <Footer />
        </>
    )
}
