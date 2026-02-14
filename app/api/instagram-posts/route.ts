import { NextResponse } from "next/server"

type InstagramEdge = {
  node?: {
    shortcode?: string
  }
}

const INSTAGRAM_USERNAME = "kossof_salonspa"

const FALLBACK_POSTS = [
  { url: "https://www.instagram.com/p/DT5w6sAgPnG/" },
  { url: "https://www.instagram.com/p/DTN34J-gMNJ/" },
  { url: "https://www.instagram.com/p/DSX7WwmAOT4/" },
  { url: "https://www.instagram.com/p/DS1lGOjgDkH/" },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const requestedLimit = Number(searchParams.get("limit") ?? "10")
  const limit = Number.isFinite(requestedLimit) ? Math.max(1, Math.min(requestedLimit, 20)) : 10

  try {
    const response = await fetch(
      `https://www.instagram.com/api/v1/users/web_profile_info/?username=${INSTAGRAM_USERNAME}`,
      {
        headers: {
          "x-ig-app-id": "936619743392459",
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
          accept: "application/json",
        },
        next: { revalidate: 300 },
      }
    )

    if (!response.ok) {
      return NextResponse.json(
        { posts: FALLBACK_POSTS.slice(0, limit), fallback: true },
        { status: 200 }
      )
    }

    const data = (await response.json()) as {
      data?: {
        user?: {
          edge_owner_to_timeline_media?: {
            edges?: InstagramEdge[]
          }
        }
      }
    }

    const edges = data?.data?.user?.edge_owner_to_timeline_media?.edges ?? []
    const posts = edges
      .map((edge) => edge.node?.shortcode)
      .filter((shortcode): shortcode is string => Boolean(shortcode))
      .slice(0, limit)
      .map((shortcode) => ({ url: `https://www.instagram.com/p/${shortcode}/` }))

    if (!posts.length) {
      return NextResponse.json(
        { posts: FALLBACK_POSTS.slice(0, limit), fallback: true },
        { status: 200 }
      )
    }

    return NextResponse.json({ posts, fallback: false }, { status: 200 })
  } catch {
    return NextResponse.json(
      { posts: FALLBACK_POSTS.slice(0, limit), fallback: true },
      { status: 200 }
    )
  }
}
