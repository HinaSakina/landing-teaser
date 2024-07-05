'use client'
import { useTheme } from 'next-themes';

const CardContent = () => {
  const { theme } = useTheme();
  
  const CardDetail = [
    {
      id: 1,
      img: '/Gemini.png',
      title: "Gemini",
      description: "Elevate Your Business with Teaser SaaS!",
      text: "Unveil the future of efficiency with Teaser SaaS – a cutting-edge solution designed to streamline your operations",
      slug: "gemini",
    },
    {
      id: 2,
      img: theme === 'light' ? '/CloudeVecter.svg' : '/Claude.png',
      title: "Claude",
      description: "Your Gateway to Streamlined Excellence",
      text: "Dive into the future of efficient business operations with Teaser SaaS. Our solution is crafted to streamline your SaaS experience",
      slug: "claude",
    },
    {
      id: 3,
      img: theme === 'light' ? '/Vector.svg' : '/GPT.svg',
      title: "GPT",
      description: "Teaser SaaS - Redefining Productivity",
      text: "Tailored website solutions to meet specific business needs and goals.",
      slug: "GPT",
    },
    {
      id: 4,
      title: "Llama",
      img: '/Llama.png',
      description: "Your Gateway to Streamlined Excellence",
      text: "Simplify your SaaS experience with Teaser, where optimization meets success",
      slug: "Llama",
    },
    {
      id: 5,
      img: '/Mistral.png',
      title: "Mistral",
      description: "Teaser - Your Strategic Partner!",
      text: "Teaser SaaS is more than a solution; it’s your strategic partner in achieving operational excellence",
      slug: "Mistral",
    },
    {
      id: 6,
      img: '/Perplexity.png',
      title: "Perplexity",
      description: "Teaser Unleashes Creativity!",
      text: "Teaser SaaS invites you to innovate with confidence. Our solution is a catalyst for creativity",
      slug: "Perplexity",
    },
  ];

  return CardDetail;
};

export default CardContent;
