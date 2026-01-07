import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        // 🔹 Call your backend login API
        const res = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });

        const user = await res.json();

        if (!res.ok) return null;

        // ⚠️ VERY IMPORTANT: return restaurantId here
        return {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          restaurantId: user.restaurantId, // ✅ THIS IS THE KEY
        };
      },
    }),
  ],

  callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.id = user.id;
      token.role = user.role;
      token.restaurantId = user.restaurantId; // ✅ STORE IN TOKEN
    }
    return token;
  },

  async session({ session, token }) {
    session.user.id = token.id;
    session.user.role = token.role;
    session.user.restaurantId = token.restaurantId; // ✅ SEND TO UI
    return session;
  },
},


  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
