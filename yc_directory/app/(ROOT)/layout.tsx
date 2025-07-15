import Navbar from "../components/navbar"
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <SessionProvider>
            <main className="font-sans">
                <Navbar />
                {children}
            </main>
        </SessionProvider>
    )
}