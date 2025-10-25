export function urlForImage(source: unknown) {
  // This would normally use Sanity's image URL builder
  // For now, return a placeholder or the source as-is
  return (
    (source as { asset?: { url?: string } })?.asset?.url || '/placeholder.jpg'
  )
}
