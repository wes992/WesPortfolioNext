import { NextResponse } from "next/server";
import { emailUser } from "../../functions";

export const POST = async (req: Request) => {
  const formData = await req.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Please fill out all required fields" },
      { status: 500 }
    );
  }

  try {
    emailUser({ name, email, message });
    return NextResponse.json(
      { message: "Messages sent successfully" },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ message: "Invalid Request" }, { status: 500 });
  }
};
