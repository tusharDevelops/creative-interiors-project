// adapters/catalogueAdapter.ts

export function adaptCatalogue(c: any) {
  return {
    id: c._id,
    name: c.name,

    // UI filtering / display (Abstract, Modern, Nature)
    category: c.style,

    // price logic (wallpaper = fixed, blinds = sqft)
    price: c.price_per_sqft ?? c.fixed_price ?? 0,

    image: c.image_url || "/placeholder.svg?height=400&width=400",
    description: c.description || "",

    allowsMaterial: c.allows_material_selection,
    allowsCustomSize: c.allows_custom_size,
    tags: []
  }
}


export const adaptCatalogueList = (data: any[]) =>
  data.map((c) => ({
    id: c._id,
    name: c.name,

    // shown in card subtitle / filter
    category: c.style,

    price: c.price_per_sqft ?? c.fixed_price ?? 0,

    image: c.image_url || "/placeholder.svg?height=300&width=300",

    // future proof
    allowsMaterial: c.allows_material_selection,
    allowsCustomSize: c.allows_custom_size,
    tags: [],
  }))

