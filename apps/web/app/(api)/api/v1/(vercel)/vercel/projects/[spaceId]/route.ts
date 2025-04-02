import axios from 'axios';
import { db } from "@workspace/db";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ spaceId: string }>;
  }
) {
  try {
    const { spaceId } = await params;

    if (!spaceId) {
      return new NextResponse("SpaceId required", { status: 401 });
    }

    const space = await db.space.findUnique({
      where: { id: spaceId },
      select: {
        vercelProjectId: true,
      },
    });

    if (!space || !space.vercelProjectId) {
      return new NextResponse("No Vercel project associated with this space", { status: 404 });
    }


    const vercelDeploymentHookUrl = `https://api.vercel.com/v1/integrations/deploy/${space.vercelProjectId}`;

    const deploymentResponse = await axios.post(vercelDeploymentHookUrl, {}, {
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
      },
    });

    if (deploymentResponse.status !== 200) {
      throw new Error("Failed to trigger Vercel deployment");
    }

    return new NextResponse("Deployment triggered successfully", { status: 200 });
  } catch (error: any) {
    console.error(error.message);
    return new NextResponse("Internal Server error", { status: 500 });
  }
}
