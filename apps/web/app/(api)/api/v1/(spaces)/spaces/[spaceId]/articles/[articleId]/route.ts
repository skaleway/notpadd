export async function GET(
  req: Request,
  {
    params,
  }: {
    params: Promise<{ spaceId: string; articleId: string }>;
  }
) {
  try {
    const { articleId, spaceId } = await params;
  } catch (error: any) {}
}
