"use client";

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
  return (
      <ResponsiveMasonry
          columnsCountBreakPoints={{350: 4, 750: 4, 900: 4}}
          gutterBreakpoints={{350: "2px", 750: "2px", 900: "2px"}}
      >
        <Masonry gutter="2px">
          {images.map((img, idx) => (
              <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  onClick={() => onClick(img)}
                  className="w-[500px] h-auto rounded-2xl cursor-pointer object-cover"
              />
          ))}
        </Masonry>
      </ResponsiveMasonry>
  );
}