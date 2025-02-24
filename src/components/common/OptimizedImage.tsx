import React from 'react';
import { useOptimizedImage } from '../../hooks/useOptimizedImage';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'original';
  lazy?: boolean;
  placeholderSrc?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  width,
  height,
  quality = 80,
  format = 'webp',
  lazy = true,
  placeholderSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
  alt = '',
  className = '',
  ...props
}) => {
  const { imageSrc, loading, error } = useOptimizedImage(src, {
    width,
    height,
    quality,
    format,
  });

  return (
    <img
      src={loading ? placeholderSrc : imageSrc}
      alt={alt}
      width={width}
      height={height}
      loading={lazy ? 'lazy' : 'eager'}
      decoding="async"
      className={`
        transition-opacity duration-300
        ${loading ? 'opacity-0' : 'opacity-100'}
        ${error ? 'grayscale' : ''}
        ${className}
      `.trim()}
      {...props}
    />
  );
};
