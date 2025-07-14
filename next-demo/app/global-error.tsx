

"use client" //eror boundary
interface GlobalError     {
    error: Error & {digest?: string},
    reset: () => void
} 
module.exports = function GlobalError({ error, reset }: GlobalError)
{
    return (
        <html>
            <body>
                <h2>Global Error</h2>
                <p>{error.message}</p>
                <button onClick={reset}>Try again</button>
            </body>
        </html>
    )
}