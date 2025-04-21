// File: app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Temporary hardcoded check
        if (credentials?.email === "test@example.com" && 
            credentials?.password === "password123") {
          return { id: "1", name: "Test User", email: "test@example.com" }
        }
        return null // Login failed
      }
    })
  ]
})