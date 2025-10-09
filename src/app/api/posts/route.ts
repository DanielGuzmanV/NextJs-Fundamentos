import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/app/libs/prisma";

export async function GET() {
  const post = await prisma.post.findMany();
  return NextResponse.json(post);
}

export async function POST(request: NextRequest) {
  const datos = await request.json();
  const nuevoPost = await prisma.post.create({
    data: {
      titulo: datos.titulo,
      contenido: datos.contenido,
    }
  })
  return NextResponse.json(nuevoPost);
}
