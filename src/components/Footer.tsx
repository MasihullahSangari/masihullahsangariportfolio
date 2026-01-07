import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/MasihullahSangari',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/masihullah-sangari-ab123b386',
    icon: Linkedin,
  },
  {
    name: 'Email',
    url: 'mailto:masihullahsangari0@gmail.com',
    icon: Mail,
  },
];

const Footer = () => {
  return (
    <footer className="py-8 px-6 text-center">
      {/* Mobile social links */}
      <div className="flex justify-center gap-6 mb-6 md:hidden">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            className="text-slate-light hover:text-primary transition-colors"
          >
            <link.icon size={20} />
          </a>
        ))}
      </div>

      <a
        href="https://github.com/MasihullahSangari"
        target="_blank"
        rel="noopener noreferrer"
        className="font-mono text-xs text-slate hover:text-primary transition-colors"
      >
        <p>Designed & Built by Masihullah Sangari</p>
        <p className="mt-1 text-slate-dark">Kabul, Afghanistan</p>
      </a>
    </footer>
  );
};

export default Footer;
