import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/app/libs/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  const datos = await request.json();

  const usuario = await prisma.usuario.findUnique({
    where: {
      usuario: datos.usuario,
    }
  });

  if (usuario) {
    return NextResponse.json({message: "El usuario ya existe"}, {status: 400});
  }

  const email = await prisma.usuario.findUnique({
    where: {
      email: datos.email,
    }
  });

  if (email) {
    return NextResponse.json({message: "El email ya está registrado"}, {status: 400});
  }

  const password = await bcrypt.hash(datos.password, 10);

  const nuevoUsuario = await prisma.usuario.create({
    data: {
      usuario: datos.usuario,
      email: datos.email,
      password: password,
    }
  })
  return NextResponse.json(nuevoUsuario);
}