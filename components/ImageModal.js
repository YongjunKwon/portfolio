import React from 'react';

const ImageModal = ({src, alt, onClose}) => (
    <div
        className="
      fixed inset-0 z-50
      bg-black bg-opacity-75
      overflow-y-auto overflow-x-hidden
    "
        onClick={onClose}
    >
      {/* 닫기 버튼 */}
      <button
          onClick={onClose}
          aria-label="Close modal"
          className="
        fixed top-4 right-8 z-50
        text-white text-4xl
        bg-black bg-opacity-50 rounded-full p-2
        hover:bg-opacity-75 transition
      "
      >
        &times;
      </button>

      {/* 이미지 영역 */}
      <div
          className="min-h-screen flex items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
      >
        <img
            src={src}
            alt={alt}
            className="
          block
          w-auto
          max-w-full       // 모바일에서 화면 넘지 않도록
          md:max-w-none    // PC(md 이상)에서는 원래 크기 유지
        "
        />
      </div>
    </div>
);

export default ImageModal;