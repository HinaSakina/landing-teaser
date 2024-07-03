import { CiShop } from "react-icons/ci";
import { FaConnectdevelop, FaPager, FaPiedPiper } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { IoIosSchool } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { MdAnimation } from "react-icons/md";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
import Link from "next/link";

const size = 35

export const Services = [
  {
    icon: (
      <FaConnectdevelop
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"

      />
    ),
    title: "What is OmniGPT?",
    desc:(
<p>
OmniGPT is a remarkable all-in-one conversational AI solution that revolutionizes productivity and teamwork. With real-time collaboration and communication across multiple channels, teams can seamlessly work together. The advanced AI capabilities automate routine tasks, saving time and resources.
<h5>
<Link className="underline  text-gray-400" href=' https://omnigpt.co/'>
        Learn More
      </Link>

</h5>


</p>
    )
 
     
   
  },
  {
    icon: (
      <MdAnimation
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "What makes OmniGPT different from other AI platforms?",
    desc: "OmniGPT excels in centralizing a wide array of LLMs, making it a one-stop solution for various AI needs across different professions. Our platform is user-centric, with intuitive interfaces, detailed guides, and a vibrant community to support you. Dive into OmniGPT and experience the difference firsthand!",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "What LLMs are available on OmniGPT?",
    desc: "OmniGPT offers a diverse selection of Large Language Models. Here are the LLMs currently available on our platform: GPT-3.5, GPT-4, GPT4o, GPT 4 Turbo,Claude 2.0, Claude 2.1, Claude 3 Sonnet, Claude 3.5 Sonnet, Claude Haiku, Claude Opus, Gemini Pro 1.5, Gemini Flash 1.5, Mistral-7b-v0.1, Mistral-8x22b, Llama 3-70B, Llama 3-8B,  Perplexity Llama-3-Sonar-Small-32k-online, Perplexity Llama-3-Sonar-Large-32k-online, Dolphin 2.9.2 Mistral-8x22b, DeepSeek Coder, WizardLM-2 8x22B, Toppy, Dall-E 2, and Dall-E 3. E",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Which LLM is the best for me?",
    desc: (
      <p>
        You can explore the resources page to see how different LLMs align with various professions and use cases. But the best part? You can try all the LLMs right here in
        <Link className="underline px-2 text-gray-400" href='https://app.omnigpt.co/login'>
          OmniGPT.
        </Link>
        Experiment with them and discover which one is the perfect match for you!
      </p>
    )
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Can I try different LLMs before making a decision? ",
    desc: "Yes, OmniGPT offers a free plan for various LLMs so you can evaluate their performance and suitability for your specific use cases before subscribing. When you upgrade to the Plus plan, you get access to all LLMs and more features with just one plan.",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Can I integrate OmniGPT with other tools and software I use?",
    desc: "You can currently integrate OmniGPT with Slack and WhatsApp. More integrations are on the way, so stay tuned for updates. We're committed to making your workflows as seamless as possible!",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Do I need technical knowledge to use the LLMs on OmniGPT?",
    desc: "No worries! While some models might benefit from a basic understanding of AI and machine learning, our intuitive interfaces and comprehensive guides make these powerful technologies accessible to everyone. Jump in and start exploring without hesitation!",
  },
  {
    icon: (
      <MdOutlineAutoAwesomeMotion
        size={size}
        className="group-hover:rotate-90 transition-all duration-300"
      />
    ),
    title: "Is there a community or support available if I have questions?",
    desc: (
      <p> 
        Yes!
        <Link className="underline px-2 text-gray-400" href='https://app.omnigpt.co/login'>
          Join our Discord Channel
        </Link>
        where you can share your experiences, ask questions, and get support from your peers and our teammates. We are here to help you every step of the way. You can reach the OmniGPT
        <Link className="underline px-2 text-gray-400" href='https://intercom.help/omnigptco/en/'>
          Support page here.
        </Link>
      </p>
    )
  },

];


export const ServiceItem = [
  {
    title: 'HR Managers',
    desc: 'Oversees employee recruitment, onboarding, and development.',
    icon: <ImProfile className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'hr-managers'
  },
  {
    title: 'Project Manager',
    desc: 'Plans, executes, and monitors projects to ensure successful completion.',
    icon: <FaPager className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'project-manager'
  },
  {
    title: 'Product Manager',
    desc: 'Leads the strategy, development, and launch of a product.',
    icon: <IoDiamondOutline className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'product-manager'
  },
  {
    title: 'Marketer',
    desc: "Creates and implements strategies to promote a company's products or services.",
    icon: <CiShop className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'marketer'
  },
  {
    title: 'Business Analyst',
    desc: 'Analyzes business needs and develops solutions to improve efficiency.',
    icon: <IoIosSchool className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'business-analyst'
  },
  {
    title: 'Operations Manager',
    desc: 'Optimizes day-to-day business processes to ensure smooth operations.',
    icon: <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'operations-manager'
  },
  {
    title: 'Software Developer',
    desc: 'Writes code to create and maintain software applications.',
    icon: <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'software-developer'
  },
  {
    title: 'Content Writer & Creator',
    desc: 'Develops engaging written, visual, or audio content.',
    icon: <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'content-writer-creator'
  },
  {
    title: 'Public Relations Specialist',
    desc: "Manages a company's public image and builds relationships with the media.",
    icon: <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'public-relations-specialist'
  },
  {
    title: 'Designer',
    desc: 'Creates visual elements like user interfaces, graphics, or physical products.',
    icon: <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'designer'
  },
  {
    title: 'Data Scientist',
    desc: 'Extracts insights and knowledge from data using statistical methods and machine learning.',
    icon: <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'data-scientist'
  },
  {
    title: 'Teacher',
    desc: 'Educates and imparts knowledge to students in a specific subject area.',
    icon: <FaPiedPiper className="h-12 w-12 mb-4 dark:text-white text-black " />,
    slug: 'teacher'
  },
];


