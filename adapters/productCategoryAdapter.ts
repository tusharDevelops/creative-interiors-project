import { CATEGORY_UI_MAP } from "@/config/categoryUIMap";

export function adaptCategories(apiCategories: any[]) {
  return apiCategories
    .filter(cat => CATEGORY_UI_MAP[cat.slug]) // sirf jo UI me chahiye
    .map(cat => {
      const ui = CATEGORY_UI_MAP[cat.slug];

      return {
        id: cat.slug,
        name: cat.name,
        tagline: ui.tagline,
        description: ui.description,
        icon: ui.icon,
        href: `/custom-shop/${cat.slug}`,
        image: ui.image,
        popular: ui.popular,
        projects: ui.projects,
        rating: ui.rating,
        price: "From ₹" + (cat.minPrice ?? "—"), // optional
        bgColor: ui.bgColor,
        textColor: ui.textColor,
        size: ui.size,
      };
    });
}
