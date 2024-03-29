/* eslint-disable jsx-a11y/alt-text */
//@ts-nocheck
'use client'
import Image from 'next/image';
import { useState } from 'react';


function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function BlurImage({ src, ...props }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Image
      {...props}
      src={src}  
        priority={true}
        quality={100}    
      className={cn(
        'duration-700 ease-in-out w-full',
        isLoading
          ? 'grayscale blur-2xl scale-110'
          : 'grayscale-0 blur-0 scale-100'
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
}

export default BlurImage;