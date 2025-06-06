import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create Admin User
  const admin = await prisma.user.create({
    data: {
      email: "admin@example.com",
      password: "admin123", // In production, hash this
      role: "ADMIN",
    },
  });

  // Create Applicant User
  const applicant = await prisma.user.create({
    data: {
      email: "applicant@example.com",
      password: "applicant123",
      role: "APPLICANT",
    },
  });

  // Create Jobs posted by Admin
  const job1 = await prisma.job.create({
    data: {
      title: "Frontend Developer",
      description: "React/Next.js experience required.",
      location: "Remote",
      salary: 60000,
      postedBy: { connect: { id: admin.id } },
    },
  });

  const job2 = await prisma.job.create({
    data: {
      title: "Backend Developer",
      description: "Node.js and Prisma preferred.",
      location: "Bangalore",
      salary: 80000,
      postedBy: { connect: { id: admin.id } },
    },
  });

  // Create Application by Applicant for Job 1
  await prisma.application.create({
    data: {
      jobId: job1.id,
      userId: applicant.id,
      fullName: "John Doe",
      email: "applicant@example.com",
      phone: "9876543210",
      resumeUrl: "https://example.com/resume.pdf",
      coverLetter: "I am passionate about frontend development.",
      portfolioUrl: "https://johndoe.dev",
      linkedinUrl: "https://linkedin.com/in/johndoe",
    },
  });

  console.log("🌱 Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
