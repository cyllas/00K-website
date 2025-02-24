import { useState, useEffect } from 'react';

interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'original';
}

export const useOptimizedImage = (src: string, options: ImageOptions = {}) => {
  const [imageSrc, setImageSrc] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        setLoading(true);
        
        // Verifica se é uma URL externa
        const isExternalUrl = src.startsWith('http');
        
        if (isExternalUrl) {
          // Para URLs externas, usa um serviço de otimização de imagem
          const params = new URLSearchParams({
            url: src,
            w: options.width?.toString() || '',
            h: options.height?.toString() || '',
            q: options.quality?.toString() || '80',
            fmt: options.format || 'webp'
          });
          
          setImageSrc(`https://imagekit.io/proxy?${params.toString()}`);
        } else {
          // Para imagens locais, usa importação dinâmica do Vite
          const imageModule = await import(`/src/assets/${src}`);
          setImageSrc(imageModule.default);
        }
        
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Erro ao carregar imagem'));
        setLoading(false);
      }
    };

    loadImage();
  }, [src, options.width, options.height, options.quality, options.format]);

  return { imageSrc, loading, error };
};
