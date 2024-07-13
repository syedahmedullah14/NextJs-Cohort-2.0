import axios from 'axios';
import { PrismaClient } from '@prisma/client/extension';
import { NextResponse } from 'next/server';

const client = new PrismaClient();

export async function fetchData() {
  const user = await client.user.findFirst({});

    return { username: user?.username,
      name: 'jaser'
    }
}

async function getUserDetails() {
  await new Promise((r) => setTimeout(r, 100))

  const response = await axios.get('http://localhost:3000/api/user');
  return response.data;
}

export default async function Home() {
  const userData = await getUserDetails();

  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>
            Name: {userData?.name}
          </div>
          {userData?.email}
        </div>
      </div>
    </div>
  );
}