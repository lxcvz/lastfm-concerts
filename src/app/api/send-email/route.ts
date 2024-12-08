import { NextApiRequest, NextApiResponse } from "next";
import formData from "form-data";
import Mailgun from "mailgun.js";
import { NextResponse } from "next/server";

const mailgun = new Mailgun(formData);
const client = mailgun.client({
  username: "api",
  key: process.env.NEXT_PUBLIC_MAILGUN_API_KEY || "",
});

interface EmailRequest {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ error: `Método ${req.method} não permitido.` });
  }

  const body: EmailRequest = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Todos os campos são obrigatórios." },
      { status: 500 }
    );
  }

  try {
    const response = await client.messages.create(
      process.env.NEXT_PUBLIC_MAILGUN_DOMAIN || "",
      {
        from: `Contato <no-reply@${process.env.NEXT_PUBLIC_MAILGUN_DOMAIN}>`,
        to: "lxcvz99@gmail.com", // Substitua pelo seu email
        subject: "All my gigs contact",
        text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
      }
    );

    console.log("Resposta do Mailgun:", response);
    return NextResponse.json(
      {
        message: "Email enviado com sucesso!",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro ao enviar o email." },
      { status: 500 }
    );
  }
}
