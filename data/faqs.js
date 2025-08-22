// import InternalLink from "@/components/global/InternalLink";
import Link from "next/link";

const faqs = [
  {
    question: "What’s the response time after submitting the form?",
    answer: "We typically reply within 24 hours on weekdays. However we have a lower response time during weekends since it is after hours. We reserve that time for urgent matters.",
  },
  {
    question: "Can I schedule a consultation?",
    answer: "Absolutely! Just mention your preferred time in the message field and we will do our best to accommodate.",
  },
  {
    question: "Is there a fee for the first consultation?",
    answer: "No, the first consultation is completely free. We want to understand your needs before moving forward. We also offer free website audits where we review your current site and provide recommendations as well as pinpoint areas for improvement.",
  },
  {
    question: "Do you only work with businesses in Pennsylvania?",
    answer: "No! Most of our clients are in Pennsylvania, but we have clients all over the U.S. Given the nature of our work, we can collaborate remotely with businesses anywhere.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We work with a variety of industries including retail, professional services, home improvement, hospitality, agriculture, sports and entertainment, streaming and more. Our team has experience tailoring strategies to meet the unique needs of different sectors. We are always excited to take on new challenges and explore different industries.",
  },
  {
    question: "What size businesses do you work with?",
    answer: "We work with businesses of all sizes, from startups to established enterprises. Our services are scalable and can be customized to fit the needs of small businesses as well as larger organizations.",
  },
  {
    question: "How do you measure the success of your marketing campaigns?",
    answer: "We use a variety of metrics to measure the success of our campaigns, including website traffic, conversion rates, lead generation, and return on investment (ROI). We provide regular reports to our clients so they can see the impact of our efforts.",
  },
  {
    question: "What is your pricing structure?",
    answer: (
      <>
        <p>
          Our pricing varies depending on the scope of the project and the specific services required. We offer competitive rates and provide detailed quotes after understanding your needs.
        </p>
        <p className="mt-2">
          However, in the interest of transparency, we provide base pricing on many of our service pages. These prices give you a starting point, and we do our best to stay within those ranges. We encourage you to contact us for a personalized quote.
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-1">
          <li><Link href="/web-design" className="text-blue-400 hover:text-blue-600 underline">Web Design</Link></li>
          <li><Link href="/app-development" className="text-blue-400 hover:text-blue-600 underline">App Development</Link></li>
          <li><Link href="/brand-design" className="text-blue-400 hover:text-blue-600 underline">Brand Design</Link></li>
          <li><Link href="/graphic-design" className="text-blue-400 hover:text-blue-600 underline">Graphic Design</Link></li>
          <li><Link href="/social-media-marketing" className="text-blue-400 hover:text-blue-600 underline">Social Media Marketing</Link></li>
          <li><Link href="/ppc-marketing" className="text-blue-400 hover:text-blue-600 underline">PPC Marketing</Link></li>
          <li><Link href="/email-marketing" className="text-blue-400 hover:text-blue-600 underline">Email Marketing</Link></li>
        </ul>
      </>
    ),
  },
  {
    question: "What is your process for onboarding new clients?",
    answer: "Our onboarding process begins with an initial consultation to understand your business goals and needs. We then conduct a thorough analysis of your current marketing efforts and develop a customized strategy. Once the strategy is approved, we require a retainer payment before we begin implementation and provide regular updates throughout the process. Once the project is complete, we issue a final payment to close the project and offer ongoing support and maintenance as needed.",
  },
  {
    question: "What happens if I need to change my project scope?",
    answer: "We understand that project scopes can evolve. If you need to change your project scope, just reach out to your project manager. We'll assess the changes and provide you with an updated proposal and timeline."
  },
  {
    question: "How do you handle communication and project updates?",
    answer: "We prioritize clear and consistent communication. You'll have a dedicated project manager who will be your main point of contact. We provide regular updates through email, phone calls, or video meetings, depending on your preference. We also use project management tools to keep you informed about progress and milestones."
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer: "Your satisfaction is our top priority. If you're not satisfied with the results, please let us know. We'll work with you to address any concerns and make necessary adjustments to ensure we meet your expectations."
  },
  {
    question: "What if I wanted to redesign my website after a few years?",
    answer: "We recommend redesigning your website every 2-3 years to keep it fresh and aligned with current design trends and technologies. However, if your business undergoes significant changes or if you feel your current site is no longer effective, we can discuss a redesign at any time. Redesigning does come with a fee but it is always much cheaper than building a new site from scratch or doing a complete overhaul."
  } 
];

export default faqs;