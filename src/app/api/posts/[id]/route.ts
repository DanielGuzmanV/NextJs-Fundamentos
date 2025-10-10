import { prisma } from "@/app/libs/prisma";
import { NextResponse, NextRequest } from "next/server";

interface DataParams {
  params: {id: string}
}

export async function GET(request: Request, {params}: DataParams) {
  const {id} = await params
  const post = await prisma.post.findUnique({
    where: {
      id:parseInt(id)
    }
  })
  return NextResponse.json(post);
}

export async function PUT(request: NextRequest, {params}: DataParams) {
  const {id} = await params;
  const datos = await request.json();
  const postUpdate = await prisma.post.update({
    where: { id: parseInt(id) },
    data: { ...datos }
  })
  return NextResponse.json(postUpdate);
}

export async function DELETE({params}: DataParams) {
  const {id} = await params;
  try {
    const postDelete = await prisma.post.delete({
      where: { id: parseInt(id) }
    });
    return NextResponse.json(postDelete);

  } catch (error) {
    return NextResponse.json({
      message: "Error: " + error
    });
  }
}