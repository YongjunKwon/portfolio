"use client"; // 상태 관리를 위해 'use client'를 추가해야 합니다.

import { useState } from "react";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import imageA from "@/public/images/a.jpg";
import imageB from "@/public/images/b.jpg";
import imageC from "@/public/images/c.jpg";
import imageD from "@/public/images/d.jpg";
import imageE from "@/public/images/e.jpg";
import imageF from "@/public/images/f.jpg";
import ImageModal from "@/components/ImageModal";

export default function HeroHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: any; alt: string } | null>(null);

  const openModal = (src: any, alt: string) => {
    setSelectedImage({ src, alt });
    setIsModalOpen(true);
  };

  const closeModal = (e: { target: any; currentTarget: any }) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      setSelectedImage(null);
    }
  };


  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-1xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
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
          {/* Hero image */}
          <div className="mx-auto" data-aos="zoom-y-out" data-aos-delay={600}>
            <div className="mx-auto" data-aos="zoom-y-out" data-aos-delay={600}>
              <div className="flex flex-col gap-4 md:flex-row md:gap-1">
                {[imageA, imageB, imageC].map((img, index) => (
                    <Image
                        key={index}
                        className="mx-auto rounded-2xl cursor-pointer mb-4"
                        src={img}
                        width={500}
                        height={355}
                        alt={`Hero image ${index + 1}`}
                        onClick={() => openModal(img, `Hero image ${index + 1}`)}
                    />
                ))}
              </div>
              <div className="flex flex-col gap-4 md:flex-row md:gap-1">
                {[imageD, imageE, imageF].map((img, index) => (
                    <Image
                        key={index}
                        className="mx-auto rounded-2xl cursor-pointer"
                        src={img}
                        width={500}
                        height={355}
                        alt={`Hero image ${index + 1}`}
                        onClick={() => openModal(img, `Hero image ${index + 1}`)}
                    />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* 모달이 열려 있을 때만 렌더링 */}
      {isModalOpen && selectedImage && (
          <ImageModal src={selectedImage.src} alt={selectedImage.alt} onClose={closeModal}/>
      )}
    </section>
  );
}
