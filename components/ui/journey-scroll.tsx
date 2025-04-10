

import Image from "next/image"

interface JourneyItem {
  title: string
  description: string
  image: string
}

export const JourneyScroll = ({ items }: { items: JourneyItem[] }) => {
  return (
    <div className="bg-black text-white">
      <div className="wrapper">
        {/* Intro Section */}
        <section className="text-white h-screen w-full bg-slate-950 grid place-content-center sticky top-0">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <h1 className="2xl:text-7xl text-6xl px-8 font-semibold text-center tracking-tight leading-[120%]">
            Our Journey <br /> Through The Years 👇
          </h1>
        </section>

        {/* Journey Sections */}
        {items.map((item, index) => (
          <section
            key={index}
            className={`${index % 2 === 0 ? "bg-gray-300 text-black" : "bg-slate-950 text-white"} grid place-content-center h-screen sticky top-0 ${index === 0 ? "rounded-tr-2xl rounded-tl-2xl" : ""} overflow-hidden`}
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <h1 className="2xl:text-7xl text-4xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              {item.title}
            </h1>
            <p className="text-xl px-8 max-w-3xl mx-auto text-center mt-6">{item.description}</p>
          </section>
        ))}
      </div>

      {/* Image Grid Section */}
      <section className="text-white w-full bg-slate-950">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="sticky top-0 h-screen flex items-center justify-center">
            <h1 className="2xl:text-7xl text-5xl px-8 font-semibold text-center tracking-tight leading-[120%]">
              Our Design <br /> Evolution
            </h1>
          </div>
          <div className="grid gap-2 py-12">
            {[
              "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg",
              "https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg",
              "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
              "https://images.pexels.com/photos/271800/pexels-photo-271800.jpeg",
            ].map((src, i) => (
              <figure key={i} className={`grid place-content-center ${i % 2 === 0 ? "-skew-x-12" : "skew-x-12"}`}>
                <div className="relative w-80 h-96">
                  <Image
                    src={src}
                    alt="Design evolution"
                    fill
                    className="transition-all duration-300 align-bottom object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Images Section */}
      <section className="text-white w-full bg-slate-950">
        <div className="grid grid-cols-1 md:grid-cols-2 px-8">
          <div className="grid gap-2">
            {[
              "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg",
              "https://images.pexels.com/photos/276554/pexels-photo-276554.jpeg",
              "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg",
              "https://images.pexels.com/photos/1438834/pexels-photo-1438834.jpeg",
            ].map((src, i) => (
              <figure key={i} className="sticky top-0 h-screen grid place-content-center">
                <div className="relative w-96 h-96">
                  <Image
                    src={src}
                    alt="Interior design"
                    fill
                    className="transition-all duration-300 align-bottom object-cover rounded-md"
                  />
                </div>
              </figure>
            ))}
          </div>
          <div className="sticky top-0 h-screen grid place-content-center">
            <h1 className="text-4xl px-8 font-medium text-right tracking-tight leading-[120%]">
              From concept to completion, we've transformed countless spaces into extraordinary environments
            </h1>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="group bg-slate-950">
        <h1 className="text-[16vw] group-hover:translate-y-4 translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-magenta to-cyan bg-clip-text text-transparent transition-all ease-linear">
          Creative Interiors
        </h1>
        <section className="bg-black h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full">
          Transforming Spaces Since 2008
        </section>
      </footer>
    </div>
  )
}
