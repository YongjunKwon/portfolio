import React from 'react';
import Image from 'next/image';

const ImageModal = ({ src, alt, onClose }) => {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={onClose} // 배경 클릭 시 모달 닫기
        >
            <div className="relative max-w-5xl">
                <Image src={src} alt={alt} layout="intrinsic" />
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white text-4xl"
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default ImageModal;