import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    message: "GET /api/posts"
  });
}

export function POST() {
  return NextResponse.json({
    message: "POST /api/posts"
  });
}
export function PUT() {
  return NextResponse.json({
    message: "PUT /api/posts"
  });
}
export function DELETE() {
  return NextResponse.json({
    message: "DELETE /api/posts"
  });
}
















