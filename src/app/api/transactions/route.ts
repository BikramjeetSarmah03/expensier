import { currentProfile } from "@/lib/currentProfile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const profile = await currentProfile();

    const { title, description, amount, type, date } = await req.json();

    if (!profile) return new NextResponse("Unauthorized", { status: 400 });

    const transaction = await db.transactions.create({
      data: {
        title,
        description,
        amount,
        type,
        userId: profile.userId,
        date,
      },
    });

    return NextResponse.json(transaction);
  } catch (error) {
    console.log("TRANSACTIONS: ", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
