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



Mock inter view 21-july-2025

🔰 Beginner-Level React Questions
1. What is React?
React is a JavaScript library for building user interfaces, developed by Facebook. It's used for creating fast, dynamic, and interactive web applications using a component-based architecture.

2. What are components in React?
Components are the building blocks of a React app. They are reusable pieces of code that return React elements (UI). There are two types: Functional and Class components.

3. What is JSX?
JSX (JavaScript XML) is a syntax extension for JavaScript that looks like HTML. It allows you to write HTML elements in JavaScript and place them in the DOM using React.

4. What is the difference between functional and class components?

Functional: Use functions, easier syntax, support Hooks.

Class: Use ES6 classes, have lifecycle methods and this keyword.
Now, functional components with Hooks are preferred.

5. What is a state in React?
State is a built-in object used to store data that can change over time. When the state changes, the component re-renders.

6. What are props in React?
Props (short for properties) are used to pass data from parent to child components. They are read-only.

7. What is the difference between props and state?

Props: Passed from parent, read-only.

State: Managed inside the component, can change.

8. What is a key in React and why is it important?
A key is a unique identifier for elements in a list. React uses keys to track changes and improve rendering performance.

9. How does React handle events?
React handles events using camelCase syntax (onClick, onChange). You pass a function as the event handler.

10. What is conditional rendering in React?
It means rendering components or elements based on certain conditions (using if, ternary, or logical &&).

⚡️ Intermediate-Level React Questions
11. What is the Virtual DOM and how does it work?
Virtual DOM is a lightweight copy of the real DOM. React compares changes using diffing and updates only the changed parts, improving performance.

12. What are React Hooks? Name a few.
Hooks are functions that let you use state and lifecycle features in functional components.
Examples: useState, useEffect, useRef, useContext, useMemo.

13. What is useState()?
A Hook that adds local state to functional components.

js
Copy
Edit
const [count, setCount] = useState(0);
14. What is useEffect()? How is it different from lifecycle methods?
useEffect lets you perform side effects (e.g., fetching data). It's similar to componentDidMount, componentDidUpdate, and componentWillUnmount in class components.

15. What are controlled and uncontrolled components?

Controlled: React manages the form data using state.

Uncontrolled: DOM manages the data via ref.

16. What is lifting state up in React?
It’s when you move the shared state to the closest common ancestor of components that need it.

17. How do you pass data from child to parent in React?
By passing a function from the parent as a prop to the child, then calling it with data inside the child.

18. What is context in React? When would you use it?
Context lets you pass data deeply without prop drilling. Use it for global data like themes or authenticated user info.

19. What is prop drilling and how can it be avoided?
Prop drilling is passing props through many layers. Avoid it using Context API or state management libraries like Redux.

20. What are fragments in React?
Fragments let you group elements without adding extra nodes to the DOM:

js
Copy
Edit
<></> or <React.Fragment></React.Fragment>
🔥 Advanced-Level React Questions
21. What is React Reconciliation?
Reconciliation is the process of updating the DOM when the component's state or props change. React compares the new and old virtual DOM and updates only the changed elements.

22. How does React optimize performance?
By using:

Virtual DOM

Keys in lists

Memoization (React.memo, useMemo)

Code splitting

Lazy loading

Avoiding unnecessary re-renders

23. What is memoization (React.memo, useMemo, useCallback)?
Memoization caches results:

React.memo: Prevents re-render if props didn’t change.

useMemo: Caches a computed value.

useCallback: Caches a function.

24. Difference: useEffect vs useLayoutEffect vs useInsertionEffect?

useEffect: Runs after render.

useLayoutEffect: Runs before painting (sync).

useInsertionEffect: Runs before any DOM mutation (used for libraries like CSS-in-JS).

25. Explain the working of React's rendering process.
React creates a virtual DOM, compares it with the previous version (diffing), calculates minimal DOM changes (reconciliation), and updates the real DOM efficiently.

26. How do you handle side effects in React?
Using useEffect, useLayoutEffect, and cleanup functions for unsubscribing or cleaning resources.

27. What are higher-order components (HOC)?
Functions that take a component and return a new component with added behavior.

js
Copy
Edit
const Enhanced = withLogger(MyComponent);
28. What are render props?
A pattern where a prop is a function that returns JSX, allowing sharing code logic between components.

29. How does React handle error boundaries?
Using a class component with componentDidCatch() and getDerivedStateFromError() to catch and display errors in the UI tree.

30. What are custom hooks and when should you use them?
Custom hooks are user-defined functions using other hooks. Use them to extract and reuse logic.

🧠 React Ecosystem & Tooling Questions
31. What is Redux? How does it work with React?
Redux is a state management library. It uses actions, reducers, and a store to manage global state. You connect it to React using react-redux.

32. Difference between Redux and Context API?

Context: Simple, for light use like themes.

Redux: More complex, better for large apps with predictable state changes.

33. What is Next.js and how does it enhance React?
Next.js is a React framework for building full-stack apps. It adds:

File-based routing

Server-side rendering

Static site generation

API routes

34. How do you do server-side rendering in React?
Use frameworks like Next.js. It renders HTML on the server and sends it to the client.

35. What is React Router and how does routing work in SPA?
React Router enables navigation in single-page apps (SPA) without reloading. It uses components like <Route>, <Link>, and <BrowserRouter>.

36. What is the use of React DevTools?
React DevTools is a browser extension that helps inspect the component tree, props, state, and performance.

37. Explain code splitting in React.
Splitting code into smaller chunks to load only what’s needed. Use React.lazy() and Suspense for component-level lazy loading.

38. What are portals in React?
Portals let you render children into a different part of the DOM (outside the root node). Useful for modals, tooltips.

39. What are suspense and lazy loading?
Suspense lets you wait for some code to load (like lazy components or data).
lazy() loads components dynamically.

40. Performance optimization techniques in large React apps?

Memoization (React.memo, useMemo, useCallback)

Code splitting

Virtualization (e.g. react-window)

Lazy loading images

Avoid unnecessary re-renders

Batching state updates

Using CDN for static assets

