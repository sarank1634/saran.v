# saran.v

## Project Overview
This project uses Next.js and NextAuth.js for authentication, with GitHub as the OAuth provider.

## NextAuth Setup
1. **Install NextAuth:**
   ```bash
   npm install next-auth
   ```
2. **Dynamic Auth Route:**
   - Create `[...nextauth].ts` in `/app/api/auth/` for dynamic routes.
   - Insert GET/POST handlers as needed.
   - Middleware is optional unless you need route protection.

3. **GitHub OAuth Setup:**
   - Go to GitHub > Settings > Developer Settings > OAuth Apps.
   - Register a new OAuth app and fill out the form.
   - Use callback URL: `https://localhost:3000/api/auth/callback/github`
   - After registration, copy your **Client ID** and **Client Secret**.
   - Add these to your `.env.local` file:
     ```env
     AUTH_GITHUB_ID=your_client_id
     AUTH_GITHUB_SECRET=your_client_secret
     ```

## Using SessionProvider
- **Why:** `useSession`, `signIn`, and `signOut` require `<SessionProvider>` from `next-auth/react` to work in Client Components.
- **How:** Wrap your app in `<SessionProvider>` in `layout.tsx` (Next.js App Router) or `_app.tsx` (Pages Router).

**Example for `/app/(ROOT)/layout.tsx`:**
```tsx
import Navbar from "../components/navbar";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <main>
        <Navbar />
        {children}
      </main>
    </SessionProvider>
  );
}
```

## Common Errors & Solutions
- **Error:** `useSession must be wrapped in a <SessionProvider />`
  - **Solution:** Add `<SessionProvider>` as shown above.
- **Error:** `Event handlers cannot be passed to Client Component props.`
  - **Solution:** Make sure your component has `"use client"` at the top and does not mix server/client logic.

- **Error:** `error=Configuration` or **500 Server Error** on `/api/auth/error?error=Configuration`
  - **Solution:**
    1. Make sure your `.env.local` has `GITHUB_ID` and `GITHUB_SECRET` set to your real GitHub OAuth values (not placeholders).
    2. The callback URL in your GitHub OAuth app settings must match exactly: `http://localhost:3000/api/auth/callback/github` (or your deployed URL).
    3. After any change to `.env.local`, restart your dev server (`npm run dev`).
    4. In `auth.ts`, ensure the provider is configured as:
        ```ts
        GitHub({
          clientId: process.env.GITHUB_ID!,
          clientSecret: process.env.GITHUB_SECRET!,
        })
        ```
    5. If you still see the error, check your terminal/server logs for more details and confirm all environment variables are loaded.

## Minimal Navbar Example
```tsx
"use client";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav>
      {session ? (
        <>
          <span>{session.user?.name}</span>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <button onClick={() => signIn('github')}>Login with GitHub</button>
      )}
    </nav>
  );
};
export default Navbar;
```

## Troubleshooting
- If you change authentication logic, always restart your dev server.
- Check environment variables if GitHub login fails.
- Ensure all client components needing session use are inside `<SessionProvider>`.