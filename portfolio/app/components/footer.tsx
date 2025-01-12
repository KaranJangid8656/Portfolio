import { Github, Linkedin, Mail, Instagram, XIcon as TwitterX } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/KaranJangid8656",
      label: "GitHub Profile"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/karansuthar9565",
      label: "LinkedIn Profile"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/karan_jangid_8/",
      label: "Instagram Profile"
    },
    {
      icon: TwitterX,
      href: "https://x.com/Karan__Suthar",
      label: "X (Twitter) Profile"
    },
    {
      icon: Mail,
      href: "mailto:karansuthar9565@gmail.com",
      label: "Email"
    }
  ]

  return (
    <footer className="bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 backdrop-blur-lg">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-center items-center space-x-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label={social.label}
            >
              <div className="absolute -inset-2 bg-indigo-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity" />
              <social.icon className="w-6 h-6 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors" />
            </a>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Karan Suthar. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
            <a href="tel:+918431770172" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              +91 8431770172
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

