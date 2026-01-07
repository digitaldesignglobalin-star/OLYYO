import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User.js";
// import User from "../../../../../../backend/Models/User.js";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        await connectDB();

        const user = await User.findOne({
          email: credentials.username,
        });

        if (!user) return null;

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isValid) return null;
 // 🔍 TEMP DEBUG LOG (VERY IMPORTANT)
  console.log("AUTH USER FROM DB 👉", {
    id: user._id.toString(),
    email: user.email,
    role: user.role,
    restaurantId: user.restaurantId,
  });
        // 🔥 CRITICAL FIX: INCLUDE restaurantId
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
          restaurantId: user.restaurantId
            ? user.restaurantId.toString()
            : null,
            
        };
        
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user }) {
      // runs on login
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.restaurantId = user.restaurantId; // 🔥 FIX
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.restaurantId = token.restaurantId; // 🔥 FIX
      }
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
