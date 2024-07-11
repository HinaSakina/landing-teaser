import React from "react";
import Image from "../element/Image";
import { useTheme } from 'next-themes';

export default function Logo() {
  const { theme } = useTheme();
  return (
    <>
      <Image
        className="w-[160px]  h-auto object-cover bg-transparent"
        src={theme === 'light' ? '/WordLogoLightBg.svg' : '/WordLogo.svg'}
        alt="Image"
        width={400}
        height={400}
        
        priority
      />
    </>
  );
}
