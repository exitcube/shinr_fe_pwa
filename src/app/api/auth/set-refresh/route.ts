import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { refreshToken } = await req.json();

  const c = await cookies();
  c.set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 60,
    path: "/",
  });

  return NextResponse.json({ ok: true });
}
