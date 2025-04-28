
  
"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function FeaturedProducts() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Trending Now: Top Products
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const WallPVCContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Transform walls into art with our stylish PVC louvers.
      </span>{" "}
      Perfect for adding a clean, modern aesthetic to living rooms, offices, and commercial spaces. Designed for easy installation and lasting beauty.
    </p>

    {/* Using the provided images */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Image
        src="https://d68pxkftt5390.cloudfront.net/web-assets/v2/assets/category-header/louvers-planks/louvers-planks/shop-by-category-1.png"
        alt="Louvers Planks 1"
        height={500}
        width={500}
        className="w-full h-full object-contain rounded-xl"
      />
      <Image
        src="https://d68pxkftt5390.cloudfront.net/web-assets/v2/assets/category-header/louvers-planks/louvers-planks/shop-by-category-2.png"
        alt="Louvers Planks 2"
        height={500}
        width={500}
        className="w-full h-full object-contain rounded-xl"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <Image
        src="https://d68pxkftt5390.cloudfront.net/web-assets/v2/assets/category-header/louvers-planks/louvers-planks/shop-by-category-3.png"
        alt="Louvers Planks 3"
        height={500}
        width={500}
        className="w-full h-full object-contain rounded-xl"
      />
      <Image
        src="https://d68pxkftt5390.cloudfront.net/web-assets/v2/assets/category-header/louvers-planks/louvers-planks/shop-by-category-4.png"
        alt="Louvers Planks 4"
        height={500}
        width={500}
        className="w-full h-full object-contain rounded-xl"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      <Image
        src="https://d68pxkftt5390.cloudfront.net/web-assets/v2/assets/category-header/louvers-planks/louvers-planks/shop-by-category-5.png"
        alt="Louvers Planks 5"
        height={500}
        width={500}
        className="w-full h-full object-contain rounded-xl"
      />
      <Image
        src="https://d68pxkftt5390.cloudfront.net/web-assets/v2/assets/category-header/louvers-planks/louvers-planks/shop-by-category-6.png"
        alt="Louvers Planks 6"
        height={500}
        width={500}
        className="w-full h-full object-contain rounded-xl"
      />
    </div>
  </div>
);


const WallpaperContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Elegant wallpapers to redefine your spaces.
      </span>{" "}
      From minimalistic to luxurious patterns, our wallpapers add depth, sophistication, and style to every wall they touch.
    </p>
    
    {/* Images from Walldecorpro */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/1f360070e175d029df8216b62f16db19-1.jpg"
        alt="Elegant Wallpaper 1"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/21c7dfbd86111ac7c83148efab530128-2.jpg"
        alt="Elegant Wallpaper 2"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/07df481ed4a94defcf0ac88882576731.jpg"
        alt="Elegant Wallpaper 3"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/b8f65aaf9604dc348dc93310c397777d.jpg"
        alt="Elegant Wallpaper 4"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/f73a69a7769bd8d7e4349900f0d9cf37.jpg"
        alt="Elegant Wallpaper 5"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/92371d67277e980da6111f566686ff00-1.jpg"
        alt="Elegant Wallpaper 6"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  </div>
);


const PUStonePanelContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Get the beauty of natural stone without the heavy weight.
      </span>{" "}
      PU Stone Panels are lightweight, weather-resistant, and ideal for both interior and exterior transformations.
    </p>
    
    {/* Images from Walldecorpro */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/1-GFG.jpg"
        alt="PU Stone Panel 1"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/TRER.jpg"
        alt="PU Stone Panel 2"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/ec2a40e52e1d85863418a1c06afdffa7.jpg"
        alt="PU Stone Panel 3"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/c7e75e05e37b343d3c9006a503f210d2.jpg"
        alt="PU Stone Panel 4"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/7090850283d3b6c2e77313e95243262a.jpg"
        alt="PU Stone Panel 5"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/20d06af192512717d0152f2d5194457a.jpg"
        alt="PU Stone Panel 6"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  </div>
);


const WoodenFlooringContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Classic wooden flooring for timeless elegance.
      </span>{" "}
      Enhance the warmth and luxury of your interiors with our wide range of durable wooden flooring solutions.
    </p>
    
    {/* Images from Walldecorpro */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/5c0b5ee86ef6f8e830b21a2f7abfb128.jpg"
        alt="Wooden Flooring 1"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/37227af3b89b90dedd9d510b163c6045.jpg"
        alt="Wooden Flooring 2"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/9ddf6e074ff5786aab5531d372692a41.jpg"
        alt="Wooden Flooring 3"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/6b3c8e36d993d4b9e764154e138525f2.jpg"
        alt="Wooden Flooring 4"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/f151d9411344c1dab15cd6f08f63f640.jpg"
        alt="Wooden Flooring 5"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/20a090ffed43132e21920f3316de3412.jpg"
        alt="Wooden Flooring 6"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  </div>
);




const Wall3DPanelContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Add character with stunning 3D wall panels.
      </span>{" "}
      Elevate the dimension and texture of any room with our cutting-edge, easy-to-install 3D wall panels.
    </p>
    
    {/* Images from Walldecorpro */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-29-at-1.19.57-PM-2.jpeg"
        alt="3D Wall Panel 1"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/8d977bacaa8185dda4bdd5f147f6ae34.jpg"
        alt="3D Wall Panel 2"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-29-at-1.31.35-PM.jpeg"
        alt="3D Wall Panel 3"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-29-at-1.19.57-PM-8.jpeg"
        alt="3D Wall Panel 4"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-29-at-1.19.57-PM-7.jpeg"
        alt="3D Wall Panel 5"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-05-11-at-2.40.46-PM.jpeg"
        alt="3D Wall Panel 6"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  </div>
);




const ExteriorWPCContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Durable, stylish, and eco-friendly exterior WPC panels.
      </span>{" "}
      Designed for outdoor applications, our WPC panels resist weather, UV damage, and provide lasting beauty for exterior facades.
    </p>
    
    {/* Images from Walldecorpro */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/c7b214d9c1a82fdff1773b6cdb7db422.jpg"
        alt="Exterior WPC Panel 1"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/4abf89422abfb143cfe54cc6d5dc3fe0.jpg"
        alt="Exterior WPC Panel 2"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/0066c6dee9256a18cd7b847c374e1d9e.jpg"
        alt="Exterior WPC Panel 3"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/3d51e506b30ff52b75db6639ba83edf4.jpg"
        alt="Exterior WPC Panel 4"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/99054b50cd6a9f90d835856f9aadb27d-1.jpg"
        alt="Exterior WPC Panel 5"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/028877d14e361525c5c5f24a71b4b328.jpg"
        alt="Exterior WPC Panel 6"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  </div>
);

const SelfAdhesivePanelContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Easy-to-install self-adhesive panels for modern interiors.
      </span>{" "}
      Transform your walls effortlessly with our high-quality self-adhesive panels. Ideal for quick renovations and stylish interior solutions.
    </p>
    
    {/* Images from Walldecorpro */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/22.jpg"
        alt="Self Adhesive Panel 1"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/33.jpg"
        alt="Self Adhesive Panel 2"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/555.jpg"
        alt="Self Adhesive Panel 3"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/44.jpg"
        alt="Self Adhesive Panel 4"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/1111.jpg"
        alt="Self Adhesive Panel 5"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/666.jpg"
        alt="Self Adhesive Panel 6"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  </div>
);

const CustomizedWallpaperContent = () => (
  <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
    <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
      <span className="font-bold text-neutral-700 dark:text-neutral-200">
        Personalized wallpapers for every style and space.
      </span>{" "}
      Create a unique atmosphere with our customizable wallpapers that match your personality and enhance your interiors.
    </p>
    
    {/* Images from Walldecorpro */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-29-at-1.42.57-PM.jpeg"
        alt="Customized Wallpaper 1"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-29-at-1.19.57-PM-11.jpeg"
        alt="Customized Wallpaper 2"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-29-at-1.19.57-PM-9.jpeg"
        alt="Customized Wallpaper 3"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/WhatsApp-Image-2024-06-29-at-1.19.57-PM-10.jpeg"
        alt="Customized Wallpaper 4"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/bebd68f01194ab4100d0a1eea8ec6d30.jpg"
        alt="Customized Wallpaper 5"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
      <Image
        src="https://walldecorpro.in/wp-content/uploads/2024/07/3aa5933276f63be39d37a3769d297418.jpg"
        alt="Customized Wallpaper 6"
        height={500}
        width={500}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  </div>
);









const data = [
  {
    category: "Wall PVC Louvers",
    title: "Sleek & Modern Wall PVC Louvers",
    src: "https://walldecorpro.in/wp-content/uploads/2024/07/9cb2553970bfaa01f49aa4311538e225.jpg",
    content: <WallPVCContent />,
  },
  {
    category: "Wallpaper",
    title: "Luxury Wallpapers for Elegant Spaces",
    src: "https://walldecorpro.in/wp-content/uploads/2024/07/56b5ad3bda857ef5c48cca708381dc1d.jpg",
    content: <WallpaperContent />,
  },
  {
    category: "PU Stone Panels",
    title: "Realistic & Durable PU Stone Panels",
    src: "https://walldecorpro.in/wp-content/uploads/2024/07/d904a88d61b94f3d5434a8ef0e8ef098.jpg",
    content: <PUStonePanelContent />,
  },
  {
    category: "Wooden Flooring",
    title: "Timeless Wooden Flooring",
    src: "https://walldecorpro.in/wp-content/uploads/2024/07/20a090ffed43132e21920f3316de3412.jpg",
    content: <WoodenFlooringContent />,
  },
  {
    category: "3D Wall Panels",
    title: "Add Depth with 3D Wall Panels",
    src: "https://walldecorpro.in/wp-content/uploads/2024/07/9d97f56b7270056252f9e6e865bef5a8.jpg",
    content: <Wall3DPanelContent />,
  },
  {
    category: "Exterior WPC Panels",
    title: "Durable & Stylish Exterior WPC Panels",
    src: "https://walldecorpro.in/wp-content/uploads/2024/07/0fbd343fa7d448b6b1c7ab64fb1b740e.jpg",
    content: <ExteriorWPCContent />,
  },
  {
    category: "Self Adhesive Panels",
    title: "Convenient and Stylish Self-Adhesive Panels",
    src: "https://walldecorpro.in/wp-content/uploads/2024/07/22.jpg",
    content: <SelfAdhesivePanelContent />,
  },
  {
    category: "Customized Wallpapers",
    title: "Create Personalized Spaces with Customized Wallpapers",
    src: "https://walldecorpro.in/wp-content/uploads/2024/07/3aa5933276f63be39d37a3769d297418.jpg",
    content: <CustomizedWallpaperContent />,
  }
  
  
];
