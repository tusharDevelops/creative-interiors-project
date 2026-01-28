import type { Material } from "@/types/material"
import { MATERIAL_UI_MAP } from "@/config/materialUIMap"

export function adaptMaterials(apiMaterials: any[]): Material[] {
  return apiMaterials.map((m) => {
    const ui = MATERIAL_UI_MAP[m.material_grade?.toLowerCase()] || {}

    return {
      id: m._id,                        // backend _id ✔
      name: m.name,
      code: m.code,
      price: m.price_per_sqft,
      rating: m.rating ?? 4.6,
      category: ui.label || m.material_grade,
      description: m.description,
      features: m.features || [],
      image: m.image_url,
      badge: ui.badge || "standard",
      specs: m.specs || [],             // 👈 IMPORTANT
    }
  })
}
