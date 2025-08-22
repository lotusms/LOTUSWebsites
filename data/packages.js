import { ArrowUpTrayIcon, CodeBracketIcon, ComputerDesktopIcon, ListBulletIcon, StarIcon } from '@heroicons/react/24/outline';

const packages = [
  {
    title: 'Silver Package',
    variant: 'silver',
    price: 130,
    description:
      'This is the most common package as it includes ecommerce support. This way they can offer business merchandise to their clients. We will also serve as a technical support desk for your clients if they find a problem with your site.',
    features: [
      { label: 'Supports e-commerce websites', icon: CodeBracketIcon },
      { label: 'CMS management & support', icon: ComputerDesktopIcon },
      { label: 'Monthly check for updates', icon: ListBulletIcon },
      { label: 'Website backup & restore', icon: ArrowUpTrayIcon },
      { label: 'Preferred by established businesses', icon: StarIcon },
    ],
  },
  {
    title: 'Gold Package',
    variant: 'gold',
    price: 190,
    description:
      'Our enterprise support comes with custom back end and front end support and maintenance, as well as full website management. We will also serve as a technical support desk for your clients if they find a problem with your site.',
    features: [
      { label: 'Supports App & Enterprise websites', icon: CodeBracketIcon },
      { label: 'Website & Apps management', icon: ComputerDesktopIcon },
      { label: 'Monthly check for updates', icon: ListBulletIcon },
      { label: 'Website & App backup & restore', icon: ArrowUpTrayIcon },
      { label: 'Preferred by app owners', icon: StarIcon },
    ],
  },
  {
    title: 'Bronze Package',
    variant: 'bronze',
    price: 75,
    description:
      'Very affordable and great piece of mind when you are trying to build a new business. We will also serve as a technical support desk for your clients if they find a problem with your site.',
    features: [
      { label: 'Supports starter/marketing websites', icon: CodeBracketIcon },
      { label: 'Website content management', icon: ComputerDesktopIcon },
      { label: 'Monthly check for updates', icon: ListBulletIcon },
      { label: 'Website backup & restore', icon: ArrowUpTrayIcon },
      { label: 'Preferred by small businesses', icon: StarIcon },
    ],
  },
];

export default packages;
