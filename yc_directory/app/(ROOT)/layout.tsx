export default function RootLayout({ children }: Readonly{ children: React.ReactNode }) {
    return (
        <main className="font-sans">
            {children}
        </main>
    )
}