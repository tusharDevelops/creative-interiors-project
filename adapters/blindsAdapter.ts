import { BLINDS_UI_MAP } from "@/config/blindsUIMap";

export function adaptBlindCategories(apiCategories: any[]) {
  return apiCategories
    .filter(cat => BLINDS_UI_MAP[cat.slug])
    .map(cat => {
      const ui = BLINDS_UI_MAP[cat.slug];

      return {
        id: cat.slug,
        name: ui.name,
        description: ui.description,
        images: ui.images,
        href: `/custom-shop/blinds/${cat.slug}`,
      };
    });
}
