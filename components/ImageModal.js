import React from 'react';

const ImageModal = ({src, alt, onClose}) => (
    <div
        className="fixed inset-0 z-50 bg-black bg-opacity-75 overflow-auto"
        onClick={onClose}
    >
      {/* 1) 닫기 버튼: 뷰포트 기준으로 fixed */}
      <button
          onClick={onClose}
          aria-label="Close modal"
          className="fixed top-2 right-6 z-50 text-white text-4xl bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition"
      >
        &times;
      </button>

      {/* 2) 이미지 영역: 스크롤은 outer wrapper가 담당 */}
      <div
          className="flex items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
      >
        <img
            src={src}
            alt={alt}
            className="block max-w-none"
        />
      </div>
    </div>
);

export default ImageModal;