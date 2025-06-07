// app/api/applications/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

// auth demo
// export async function GET(req: NextRequest) {
//     const userEmail = req.headers.get("x-user-email"); // Simulating auth

//     if (!userEmail) {
//       return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
//     }

//     const user = await prisma.user.findUnique({
//       where: { email: userEmail },
//     });

//     if (!user || user.role !== "ADMIN") {
//       return NextResponse.json({ error: "Forbidden" }, { status: 403 });
//     }

//     const apps = await prisma.application.findMany({
//       include: { job: true, user: true },
//     });

//     return NextResponse.json(apps);
//   }

export async function GET() {
  const apps = await prisma.application.findMany({
    include: { job: true },
  });
  return NextResponse.json(apps);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);

    const newApplication = await prisma.application.create({
      data: {
        ...body,
      },
    });

    return NextResponse.json(newApplication);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to create application" },
      { status: 500 }
    );
  }
}
