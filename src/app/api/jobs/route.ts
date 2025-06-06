// app/api/jobs/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  const jobs = await prisma.job.findMany({
    include: { postedBy: true, applications: true },
  });
  return NextResponse.json(jobs);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { postedById, title, description, location, salary } = body;

    // 1. Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: postedById },
    });

    // 2. If user not found or not admin, return error
    if (!user || user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "Only admins are allowed to post jobs." },
        { status: 403 }
      );
    }

    // 3. Create the job
    const newJob = await prisma.job.create({
      data: {
        title,
        description,
        location,
        salary,
        postedById,
      },
    });

    return NextResponse.json(newJob);
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to create job", details: error.message },
      { status: 500 }
    );
  }
}
