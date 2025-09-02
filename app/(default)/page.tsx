// app/page.tsx (Next.js 13 App Router 기준)

import fs from "fs/promises";
import path from "path";

export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default async function Home() {
  // 1) public/images 디렉터리 경로
  const imagesDir = path.join(process.cwd(), "public/images");
  // 2) 모든 파일 읽기
  const files = await fs.readdir(imagesDir);

  // 3) _thumbnail.jpg 파일만 필터링 후 매핑
  const images = files
  .filter((file) => file.endsWith("_thumbnail.jpg"))
  .map((thumbFile) => {
    const baseName = thumbFile.replace(/_thumbnail\.jpg$/, "");
    return {
      thumbnail: `/images/${thumbFile}`,
      original: `/images/${baseName}.jpg`,
      alt: baseName,
    };
  });

  return (
      <>
        <Hero images={images}/>

        {/* 아래 컴포넌트들도 필요에 따라 활성화하세요 */}
        {/* <BusinessCategories /> */}
        {/* <FeaturesPlanet /> */}
        {/* <LargeTestimonial /> */}
        {/* <Cta /> */}
      </>
  );
}