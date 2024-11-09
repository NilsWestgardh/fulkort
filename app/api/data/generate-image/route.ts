import { NextRequest, NextResponse } from "next/server";
import Client from "opperai";

export async function POST(request: NextRequest) {
  const client = new Client();

  try {
    const { prompt } = await request.json();

    if (!prompt) {
      console.error("[Server] No prompt provided");
      throw new Error("Prompt is required");
    }

    const result = await client.generateImage({
      model: "azure/dall-e-3-eu",
      prompt,
      parameters: {
        aspectRatio: "16:9",
      },
    });

    const base64Image = Buffer.from(result.bytes).toString("base64");
    const imageUrl = `data:image/jpeg;base64,${base64Image}`;

    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error("[Server] Error generating image", error);
    return NextResponse.json(
      { message: "Error generating image" },
      { status: 500 },
    );
  }
}
