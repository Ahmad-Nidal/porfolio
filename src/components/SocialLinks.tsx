import React from 'react';
import { Github, Linkedin, Mail, MessageCircle, MessagesSquare } from 'lucide-react';
import QabilahIcon from '@/assets/images/icons/qabilah.svg?react';

const socialLinks = [
  {
    icon: <MessageCircle size={24} />,
    href: 'https://t.me/ahmadnidall',
    label: 'Contact Me on Telegram'
  },
  {
    icon: <MessagesSquare size={24} />,
    href: 'https://t.me/ahmad_nidal',
    label: 'View My Telegram Channel'
  },
  {
    icon: <Github size={24} />,
    href: 'https://github.com/ahmad-nidal',
    label: 'Visit My GitHub Profile'
  },
  {
    icon: <Linkedin size={24} />,
    href: 'https://linkedin.com/in/ahmad-nidal/',
    label: 'Connect with Me on LinkedIn'
  },
  {
    icon: <QabilahIcon />,
    href: 'https://qabilah.com/profile/ahmad-nidal',
    label: 'Connect with Me on Qabilah'
  },
  {
    icon: <Mail size={24} />,
    href: 'mailto:ahmadnidal.dr@gmail.com',
    label: 'Send Me an Email'
  }
];

export function SocialLinks() {
  return (
    <section className="flex flex-wrap-reverse justify-center gap-4 mt-6">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          title={link.label}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors duration-200"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </section>
  );
}