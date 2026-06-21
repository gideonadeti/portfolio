import { ImageResponse } from "next/og";
import { getPost } from "@/data/blog";
import { DATA } from "@/data/resume";

export const alt = "Blog Post";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  try {
    const { slug } = await params;
    const post = await getPost(slug);

    const imageUrl = DATA.avatarUrl
      ? new URL(DATA.avatarUrl, DATA.url).toString()
      : undefined;

    if (!post) {
      return new ImageResponse(
        (
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#ffffff",
              padding: "40px",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "flex-end",
              }}
            >
              <div style={{ fontSize: 48, fontWeight: 600, color: "#000000" }}>
                Post Not Found
              </div>
            </div>
          </div>
        ),
        { ...size }
      );
    }

    const title = post.metadata.title;
    const description = post.metadata.summary || "";
    const publishedDate = post.metadata.publishedAt
      ? new Date(post.metadata.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: "UTC",
        })
      : "";

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#ffffff",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              padding: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: "auto",
              }}
            >
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt=""
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 12,
                    objectFit: "cover",
                  }}
                />
              )}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                height: "100%",
              }}
            >
              <div
                style={{
                  fontSize: 48,
                  fontWeight: 600,
                  lineHeight: 1.1,
                  color: "#000000",
                  marginBottom: 16,
                  maxWidth: 900,
                }}
              >
                {title}
              </div>
              {description && (
                <div
                  style={{
                    fontSize: 20,
                    color: "#404040",
                    marginBottom: 16,
                    maxWidth: 800,
                  }}
                >
                  {description}
                </div>
              )}
              {publishedDate && (
                <div style={{ fontSize: 16, color: "#666666" }}>
                  {publishedDate}
                </div>
              )}
            </div>
          </div>
        </div>
      ),
      { ...size }
    );
  } catch (error) {
    console.error("Error generating OpenGraph image:", error);
    return new Response(
      `Failed to generate image: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      { status: 500 }
    );
  }
}
