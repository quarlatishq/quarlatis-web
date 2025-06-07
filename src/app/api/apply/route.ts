import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    // const data = await req.json();

    // const {
    //   job,
    //   jobId,
    //   firstName,
    //   lastName,
    //   email,
    //   phone,
    //   resumeUrl,
    //   coverLetter,
    //   portfolioUrl,
    //   linkedinUrl,
    //   githubUrl,
    // } = data;

    // // Basic validation
    // if (!job || !jobId || !firstName || !lastName || !email || !phone || !resumeUrl) {
    //   return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    // }

    // const application = await prisma.application.create({
    //   data: {
    //     job,
    //     jobId,
    //     firstName,
    //     lastName,
    //     email,
    //     phone,
    //     resumeUrl,
    //     coverLetter,
    //     portfolioUrl,
    //     linkedinUrl,
    //     githubUrl,
    //   },
    // });
const obj = {
    name: "love"
}
    return NextResponse.json(obj, { status: 201 });
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
