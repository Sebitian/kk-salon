import { list } from "@vercel/blob"

/**
 * Fetches the public URL for a blob by filename.
 * Falls back to local /public path if Blob is not configured.
 */
export async function getBlobUrl(filename: string): Promise<string> {
  try {
    const { blobs } = await list({ limit: 100 })
    const blob = blobs.find((b) => b.pathname.endsWith(filename) || b.pathname === filename)
    return blob?.url ?? `/${filename}`
  } catch {
    return `/${filename}`
  }
}

/**
 * Fetches URLs for multiple blobs in a single list request.
 */
export async function getBlobUrls(filenames: string[]): Promise<Record<string, string>> {
  try {
    const { blobs } = await list({ limit: 100 })
    const result: Record<string, string> = {}
    for (const filename of filenames) {
      const blob = blobs.find((b) => b.pathname.endsWith(filename) || b.pathname === filename)
      result[filename] = blob?.url ?? `/${filename}`
    }
    return result
  } catch {
    return Object.fromEntries(filenames.map((f) => [f, `/${f}`]))
  }
}
