import { urlForImage } from '@/sanity/lib/image'

export function image(source: unknown) {
  return urlForImage(source)
}
