"use client";

import {useState} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

type Props = {
  images: Array<{
    src: string;
    alt: string;
    raw: any;
  }>;
  onClick: (data: { src: string; alt: string; raw: any }) => void;
};

export default function MasonryGallery({images, onClick}: Props) {
  // 각 이미지의 로딩 상태를 추적
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
      Array(images.length).fill(false)
  );

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  return (
      <ResponsiveMasonry
          columnsCountBreakPoints={{350: 4, 750: 4, 900: 4}}
          gutterBreakPoints={{350: "4px", 750: "4px", 900: "4px"}}
      >
        <Masonry gutter="2px">
          {images.map((img, idx) => (
              <div key={idx} className="relative w-[500px]">
                {/* 로딩 전 Skeleton */}
                {!loadedImages[idx] && (
                    <div className="w-[500px] h-[300px] bg-gray-200 animate-pulse rounded-2xl"/>
                )}

                {/* 실제 이미지 */}
                <img
                    src={img.src}
                    alt={img.alt}
                    onClick={() => onClick(img)}
                    onLoad={() => handleImageLoad(idx)}
                    className={`
                w-[500px] h-auto rounded-2xl cursor-pointer object-cover
                transition-opacity duration-500
                ${loadedImages[idx] ? "opacity-100" : "opacity-0 absolute top-0 left-0"}
              `}
                />
              </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
  );
}