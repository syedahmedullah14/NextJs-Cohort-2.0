import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";
import client from "@/db"


export async function POST(req: NextRequest) {
  const body = await req.json();
  // Add validation logic here (e.g., using Zod)

  const user = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  console.log(user.id);

  return NextResponse.json({ message: 'Signed up' });
}


// export async function GET() {
//   const user = await client.user.findFirst({});
//   return NextResponse.json({ name: user?.username, email: user?.username });
// }