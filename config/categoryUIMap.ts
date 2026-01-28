import { Palette, Blinds, ImageIcon, Sparkles } from "lucide-react";

export const CATEGORY_UI_MAP: Record<string, any> = {
  wallpaper: {
    icon: Palette,
    tagline: "Transform your walls.",
    description:
      "Premium custom wallpapers with endless design possibilities.",
    image: "/show/product-wallpaper.jpeg",
    popular: true,
    projects: "2,847",
    rating: 4.9,
    bgColor: "bg-gradient-to-br from-orange-50 to-pink-50",
    textColor: "text-gray-900",
    size: "large",
  },

  blinds: {
    icon: Blinds,
    tagline: "Privacy meets style.",
    description:
      "Elegant window treatments for the perfect balance of privacy and light.",
    image: "/show/product-blinds.jpeg",
    popular: false,
    projects: "1,923",
    rating: 4.8,
    bgColor: "bg-gradient-to-br from-slate-900 to-slate-800",
    textColor: "text-white",
    size: "medium",
  },

  canvas: {
    icon: ImageIcon,
    tagline: "Your memories, elevated.",
    description:
      "Transform your favorite photos into stunning wall art.",
    image: "/show/product-canvas.jpeg",
    popular: true,
    projects: "3,156",
    rating: 4.9,
    bgColor: "bg-gradient-to-br from-emerald-50 to-teal-50",
    textColor: "text-gray-900",
    size: "medium",
  },

  "glass-films": {
    icon: Sparkles,
    tagline: "Modern privacy solutions.",
    description:
      "Decorative films that add style while maintaining light.",
    image: "/show/product-glass-film.jpeg",
    popular: false,
    projects: "987",
    rating: 4.7,
    bgColor: "bg-gradient-to-br from-sky-100 to-blue-100",
    textColor: "text-gray-900",
    size: "large",
  },

  curtains: {
    icon: Sparkles,
    tagline: "Elevate your space.",
    description:
      "Luxurious curtains that combine style and functionality.",
    image: "/show/product-curtain.jpeg",
    popular: false,
    projects: "1,234",
    rating: 4.8,
    bgColor: "bg-gradient-to-br from-pink-50 to-rose-50",
    textColor: "text-gray-900",
    size: "large",
  },
};
