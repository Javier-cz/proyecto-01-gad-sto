"use client";
import React, { useRef, useState, useEffect } from "react";
import PositionedMenu from "@/components/ui/positioned-menu";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const menus = [
    {
      label: "Desnutrición Crónica Infantil",
      items: [
        { href: "/info", label: "Información", color: "var(--menu-text-b)" },
        { href: "/estadisticas", label: "Estadísticas", color: "var(--menu-text-b)" },
      ],
      baseColor: "var(--color-header-dos)",
      hoverColor: "var(--menu-text-e)",
    },
    {
      label: "¿Qué hacemos?",
      items: [
        { href: "/programas", label: "Programas", color: "var(--menu-text-c)" },
        { href: "/iniciativas", label: "Iniciativas", color: "var(--menu-text-c)" },
      ],
      baseColor: "var(--color-header-tres)",
      hoverColor: "var(--menu-text-e)",
    },
    {
      label: "¿Quiénes somos?",
      items: [
        { href: "/nosotros", label: "Nosotros", color: "var(--menu-text-d)" },
        { href: "/equipo", label: "Equipo", color: "var(--menu-text-d)" },
      ],
      baseColor: "var(--color-header-cuatro)",
      hoverColor: "var(--menu-text-e)",
    },
  ];

  const handleEnter = (i: number) => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
    setOpenIndex(i);
  };

  const handleLeave = () => {
    hoverTimeout.current = setTimeout(() => setOpenIndex(null), 200);
  };


  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 50);

      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: hidden ? -80 : 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${isScrolled ? "shadow-md" : ""
        }`}
      style={{
        backgroundColor: isScrolled
          ? "rgba(255,255,255,0.95)"
          : "var(--header-bg)",
        borderBottom: "1px solid var(--header-border)",
        backdropFilter: isScrolled ? "blur(10px)" : "none",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center text-3xl font-bold cursor-pointer">
          <Icon
            icon="bi:tree-fill"
            width="40"
            height="40"
            style={{ color: "var(--color-header-tres)" }}
          />
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex items-center space-x-6">
            {menus.map((m, i) => (
              <li
                key={m.label}
                className="relative"
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={handleLeave}
              >
                <button
                  ref={(el) => {
                    triggerRefs.current[i] = el;
                  }}
                  aria-expanded={openIndex === i}
                  className={`
                    relative flex items-center font-medium px-1 py-1
                    transition-colors duration-200
                    after:content-[''] after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:bg-current after:transition-all
                    after:duration-300
                    ${openIndex === i ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  `}
                  style={{
                    color: openIndex === i ? m.hoverColor : m.baseColor,
                  }}
                >
                  {m.label}
                  <Icon
                    icon="mdi:chevron-down"
                    className={`ml-1 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""
                      }`}
                    width="18"
                    height="18"
                  />
                </button>

                <PositionedMenu
                  triggerRef={{ current: triggerRefs.current[i] }}
                  open={openIndex === i}
                  onClose={() => setOpenIndex(null)}
                  className="rounded-lg border shadow-md p-2"
                  style={{
                    backgroundColor: "var(--menu-bg)",
                    borderColor: "var(--menu-border)",
                  }}
                  align="left"                >
                  <ul className="flex flex-col space-y-1"
                    onMouseEnter={() => {
                      if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
                    }}
                    onMouseLeave={handleLeave}                  >
                    {m.items.map((it) => (
                      <li key={it.href}>
                        <a href={it.href}
                          className="block px-4 py-2 rounded-md hover:bg-gray-100 transition"
                          style={{ color: it.color }}
                        >
                          {it.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </PositionedMenu>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="hover:scale-110 transition" aria-label="Español">
            <Icon icon="twemoji:flag-spain" width="24" height="24" />
          </button>
          <button className="hover:scale-110 transition" aria-label="Inglés">
            <Icon icon="twemoji:flag-united-kingdom" width="24" height="24" />
          </button>

          <a href="/donar"
            style={{
              backgroundColor: "var(--color-btn-bg)",
              color: "var(--color-btn-text)",
            }}
            className="rounded-full px-4 py-2 font-semibold transition hover:brightness-90" >
            Donar
          </a>
        </div>
      </div>
    </motion.header>
  );
}
