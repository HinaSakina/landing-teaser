'use client'
import { useTheme } from 'next-themes';

const CardContent = () => {
  const { theme } = useTheme();
  
  const CardDetail = [
    {
      id: 1,
      img: '/Gemini.png',
      title: "Gemini",
      text: "Rapid text analysis and data processing.",
      slug: "gemini",
    },
    {
      id: 2,
      img: theme === 'light' ? '/CloudeVecter.svg' : '/Claude.png',
      title: "Claude",
      text: "Content creation, coding, and summarization. Creativity and natural human language.",
      slug: "claude",
    },
    {
      id: 3,
      img: theme === 'light' ? '/Vector.svg' : '/GPT.svg',
      title: "GPT",
      text: "Building complex applications and systems, excellent for human-computer interactions",
      slug: "GPT",
    },
    {
      id: 4,
      title: "Llama",
      img: '/Llama.png',
      text: "Precise question answering, dialogue systems and reasoning.",
      slug: "Llama",
    },
    {
      id: 5,
      img: '/Mistral.png',
      title: "Mistral",
      text: "Mathematical reasoning and analysis.",
      slug: "Mistral",
    },
    {
      id: 6,
      img: '/Perplexity.png',
      title: "Perplexity",
      text: "Fact checking and validating information.",
      slug: "Perplexity",
    },
  ];

  return CardDetail;
};

export default CardContent;
