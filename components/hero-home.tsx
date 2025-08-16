"use client"; // 상태 관리를 위해 'use client'를 추가해야 합니다.

import { useState } from "react";
import Image from "next/image";
import PageIllustration from "@/components/page-illustration";
import imageA from "@/public/images/a.jpg";
import ImageModal from "@/components/ImageModal";

export default function HeroHome() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (e: { target: any; currentTarget: any; }) => {
    // 이벤트 버블링을 막아 이미지 클릭 시 모달이 닫히지 않게 합니다.
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Jinhong's Portfolio

            </h1>
          </div>
          {/* Hero image */}
          <div
              className="mx-auto max-w-3xl"
              data-aos="zoom-y-out"
              data-aos-delay={600}
          >
            <div
                className="mx-auto max-w-3xl"
                data-aos="zoom-y-out"
                data-aos-delay={600}
                onClick={openModal} // 클릭 이벤트 핸들러 추가
            >
              <Image
                  className="mx-auto rounded-2xl"
                  src={imageA}
                  width={540}
                  height={405}
                  alt="Hero image"
              />
            </div>
            </div>
          </div>
        </div>
        {/* 모달이 열려 있을 때만 렌더링 */}
        {isModalOpen && (
            <ImageModal src={imageA} alt="Hero image" onClose={closeModal} />
        )}
    </section>
);
}
