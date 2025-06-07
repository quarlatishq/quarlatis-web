import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log(body);
    const bodydata = {
      name: body.name,
      email: body.email,
      message: body.message,
    };
    console.log(bodydata);
    const newContact = await prisma.contact.create({
      data: {
        ...bodydata,
      },
    });

    // ✅ Return response on success
    return NextResponse.json(
      { message: "message sended  successfully", contact: newContact },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
