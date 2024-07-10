import React from "react";
import Image from "../element/Image";
import { useTheme } from 'next-themes';

export default function Logo() {
  const { theme } = useTheme();
  return (
    <>
      <Image
        className="w-[100%]  h-auto object-cover bg-transparent  rounded-3xl"
        src={theme === 'light' ? '/WordLogoLightBg.svg' : '/WordLogo.svg'}
        alt="Image"
        width={400}
        height={400}
        
        priority
      />
    </>
  );
}
