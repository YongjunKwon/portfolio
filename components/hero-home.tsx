// components/hero-home.tsx
"use client";

import {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import ImageModal from "@/components/ImageModal";
import PageIllustration from "@/components/page-illustration";

const MasonryGallery = dynamic(() => import("@/components/MasonryGallery"), {
  ssr: false,
});

type ImgItem = {
  thumbnail: string;
  original: string;
  alt: string;
};

export default function Hero({images}: { images: ImgItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<ImgItem | null>(null);

  // 모달 열릴 때 body 잠금
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // ESC 키 핸들러
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setSelected(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = (img: ImgItem) => {
    setSelected(img);
    setIsOpen(true);
  };
  const close = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      setIsOpen(false);
      setSelected(null);
    }
  };

  return (
      <section className="relative">
        <PageIllustration/>
        <div className="mx-auto max-w-1xl px-4 sm:px-6">
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            <div className="pb-12 text-center md:pb-16">
              <h1
                  className="mb-6 text-3xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
                  data-aos="zoom-y-out"
                  data-aos-delay={150}
              >
                JUNG JIN HONG
              </h1>
              <p
                  className="mb-6 border-y tracking-widest text-xs font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-xs md:tracking-widest"
                  data-aos="zoom-y-out"
                  data-aos-delay={150}
              >
                "Designing moments, not just visuals"
              </p>
            </div>

            <MasonryGallery
                images={images.map((img) => ({
                  src: img.thumbnail,
                  alt: img.alt,
                  raw: img,
                }))}
                onClick={(data) => open(data.raw)}
            />
          </div>
        </div>

        {isOpen && selected && (
            <ImageModal
                src={selected.original}
                alt={selected.alt}
                onClose={close}
            />
        )}
      </section>
  );
}