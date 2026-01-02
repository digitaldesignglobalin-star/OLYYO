import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function POST(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return new Response(
      JSON.stringify({ message: "Not logged in" }),
      { status: 401 }
    );
  }

  const body = await req.json();

  const res = await fetch("http://localhost:5000/api/restaurants/profile", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: body.name,
      email: body.email,
      userId: session.user.id, // 🔑 THIS IS THE KEY
    }),
  });

  const data = await res.json();
  return Response.json(data, { status: res.status });
}
