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

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const action = body && typeof body === "object" && "action" in body
    ? (body as { action: unknown }).action
    : undefined;

  if (action !== "view") {
    return Response.json(
      { error: `Invalid action "${String(action)}"` },
      { status: 400 },
    );
  }

  await redis.incr(`blog:posts:${slug}:views`);
  const views = (await redis.get<number>(`blog:posts:${slug}:views`)) ?? 0;
  return Response.json({ views });
}
