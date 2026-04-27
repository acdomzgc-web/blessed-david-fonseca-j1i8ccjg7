import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase/client'

let fetchPromise: Promise<any> | null = null
let cachedImages: any = null

export function useSiteImages() {
  const [images, setImages] = useState(
    cachedImages || {
      hero: `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/site-assets/hercules.jpg`,
      about: `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/site-assets/hercules.jpg`,
      method: `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/site-assets/deadlift.jpg`,
      benefits: `https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/David%20Clean.jpeg`,
      loading: true,
    },
  )

  useEffect(() => {
    if (cachedImages) return

    if (!fetchPromise) {
      fetchPromise = supabase.storage
        .from('site-assets')
        .list()
        .then(({ data, error }) => {
          if (error || !data) return null

          const sortedFiles = [...data]
            .filter((f) => f.name && !f.name.startsWith('.empty'))
            .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())

          const getFileUrl = (name: string) =>
            `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/site-assets/${name}`

          const newImages = {
            hero: getFileUrl('hercules.jpg'),
            about: getFileUrl('hercules.jpg'),
            method: getFileUrl('deadlift.jpg'),
            benefits:
              'https://rrmhtpwtsusahmyazwhf.supabase.co/storage/v1/object/public/site-assets/David%20Clean.jpeg',
          }

          let foundNewAbout = false

          for (const file of sortedFiles) {
            const name = file.name.toLowerCase()
            const url = getFileUrl(file.name)

            if (name.includes('deadlift')) {
              newImages.method = url
            } else if (name.includes('david clean')) {
              newImages.benefits = url
            } else if (name.includes('hercules')) {
              newImages.hero = url
              if (!foundNewAbout) {
                newImages.about = url
              }
            } else if (!foundNewAbout) {
              newImages.about = url
              foundNewAbout = true
            }
          }

          return newImages
        })
    }

    fetchPromise.then((result) => {
      if (result) {
        cachedImages = { ...result, loading: false }
        setImages(cachedImages)
      } else {
        setImages((prev) => ({ ...prev, loading: false }))
      }
    })
  }, [])

  return images
}
