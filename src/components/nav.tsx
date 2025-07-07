"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { GitHubStarsButton } from '@/components/animate-ui/buttons/github-stars';
import { useRouter } from "next/navigation";

export function NavbarDemo() {
  const navItems = [
    {
      name: "Features",
      link: "",
    },
    {
      name: "About",
      link: "",
    },
    {
      name: "Contact",
      link: "",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <GitHubStarsButton username="kris70lesgo" repo="s1" />
            <NavbarButton variant="secondary" onClick={() => router.push('/sign')}>Login</NavbarButton>
            
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-black dark:text-black"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => { setIsMobileMenuOpen(false); router.push('/sign'); }}
                variant="primary"
                className="w-full"
              >
                Login
              </NavbarButton>
              
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
     

      {/* Navbar */}
    </div>
  );
}
