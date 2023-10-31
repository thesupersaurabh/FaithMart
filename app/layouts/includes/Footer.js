import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const FooterSection = ({ title, links }) => (
  <div className="text-gray-700">
    <h2 className="font-bold text-lg">{title}</h2>
    <ul className="mt-2">
      {links.map((link, index) => (
        <FooterLink key={index} text={link} />
      ))}
    </ul>
  </div>
);

const FooterLink = ({ text }) => (
  <li className="py-1 text-xs hover:underline cursor-pointer">{text}</li>
);

const SocialLinks = ({ links }) => (
  <div className="text-gray-700">
    <h2 className="font-bold text-lg">Connect with Us</h2>
    <ul className="mt-2 flex">
      {links.map((link, index) => (
        <SocialLink key={index} icon={link.icon} url={link.url} />
      ))}
    </ul>
  </div>
);

const SocialLink = ({ icon, url }) => (
  <li className="mr-4">
    <a href={url} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  </li>
);

export default function Footer() {
  const sections = [
    {
      title: 'Buy',
      links: ['Registration', 'Money Back Guarantee', 'Stores'],
    },
    {
      title: 'Sell',
      links: ['Start selling', 'Learn to sell', 'Affiliates'],
    },
    {
      title: 'About FaithMart',
      links: [
        'Company info',
        'News',
        'Investors',
        'Careers',
        'Government relations',
        'Policies',
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebook />,
      url: '#',
    },
    {
      icon: <FaTwitter />,
      url: '#',
    },
    {
      icon: <FaInstagram />,
      url: '#',
    },
  ];

  return (
    <footer id="Footer" className="border-t mt-20 px-2 py-10 bg-gray-100">
      <div className="flex flex-wrap justify-between mx-auto max-w-[1200px]">
        {sections.map((section, index) => (
          <FooterSection key={index} title={section.title} links={section.links} />
        ))}

        <SocialLinks links={socialLinks} />

        <div className="text-gray-700">
          <h2 className="font-bold text-lg">Newsletter Signup</h2>
          <p className="mt-2 text-sm">
            Subscribe to our newsletter for updates and promotions.
          </p>
          <form className="mt-2 flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded-md px-2 py-1 w-48 mr-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-md px-4 py-1 hover:bg-blue-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-6 text-gray-700 text-center border-t pt-4">
        <p className="text-xs">&copy; {new Date().getFullYear()} FaithMart. All rights reserved.</p>
      </div>
    </footer>
  );
}
