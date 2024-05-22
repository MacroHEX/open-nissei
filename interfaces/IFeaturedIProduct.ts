export interface FeaturedProduct {
  id: string
  priority: number
  product_id: string
  product: Product
}

export interface Product {
  id: string
  category_id?: string
  created_at: string
  description?: string
  image_url?: string
  name: string
  price?: number
  slug: string
}
