import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const views = await redis.get<number>(`blog:posts:${slug}:views`);
  return Response.json({ views: views ?? 0 });
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const { action } = (await request.json()) as { action: "view" };

  if (action === "view") {
    await redis.incr(`blog:posts:${slug}:views`);
  }

  const views = (await redis.get<number>(`blog:posts:${slug}:views`)) ?? 0;
  return Response.json({ views });
}
