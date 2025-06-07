// app/api/jobs/route.ts
import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function GET() {
  const jobs = await prisma.job.findMany({
    include: { applications: true },
  });
  return NextResponse.json(jobs);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { postedById, title, description, location, salary } = body;

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
