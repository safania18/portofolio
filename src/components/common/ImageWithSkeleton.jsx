import { useState } from "react";

const ImageWithSkeleton = ({ src, alt, className, style, skeletonClassName }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    return (
        <div className={`relative overflow-hidden ${className}`} style={style}>
            {isLoading && (
                <div
                    className={`absolute inset-0 bg-base-300 animate-pulse ${skeletonClassName}`}
                    style={{ zIndex: 1 }}
                >
                    {/* Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-base-100/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />

                    {/* Spinner */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="loading loading-spinner loading-md text-primary"></span>
                    </div>
                </div>
            )}

            <img
                src={src}
                alt={alt}
                loading="lazy"
                className={`w-full h-full object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                }}
            />

            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-base-200 text-base-content/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default ImageWithSkeleton;
