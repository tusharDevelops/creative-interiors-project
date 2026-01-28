export interface MaterialSpec {
  key: string
  value: string
}

export interface Material {
  id: string
  name: string
  code: string
  price: number
  rating: number
  category: string
  description: string
  features: string[]
  image: string
  badge: string
  specs: MaterialSpec[]   
}
