import { put } from "@vercel/blob";
import { NextResponse } from "next/server";


export async function POST(req: Request)
{
    const form = await req.formData();
    const file = form.get("file") as File;



    if (!file.name) {
        return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const blob = await put(file.name, file, 
        {access: "public",
    })
    return NextResponse.json(blob)
}