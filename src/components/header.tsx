"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <header
      className="w-full border-b"
      style={{
        backgroundColor: "var(--header-bg)",
        borderColor: "var(--header-border)",
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* LOGO */}
        <div className="flex items-center space-x-1 text-2xl font-bold">
          <span style={{ color: "var(--color-redni-uno)" }}>R</span>
          <span style={{ color: "var(--color-redni-dos)" }}>E</span>
          <span style={{ color: "var(--color-redni-tres)" }}>D</span>
          <span style={{ color: "var(--color-redni-cuatro)" }}>N</span>
          <span style={{ color: "var(--color-redni-cinco)" }}>I</span>
        </div>

        {/* NAVIGATION MENU */}
        <NavigationMenu>
          <NavigationMenuList className="space-x-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger
                style={{ color: "var(--color-redni-dos)" }}
                className="font-medium"
              >
                Desnutrición Crónica Infantil
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4">
                <NavigationMenuLink href="/info">
                  Información
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                style={{ color: "var(--color-pink)" }}
                className="font-medium"
              >
                ¿Qué hacemos?
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4">
                <NavigationMenuLink href="/programas">
                  Programas
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                style={{ color: "var(--color-redni-tres)" }}
                className="font-medium"
              >
                ¿Quiénes somos?
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4">
                <NavigationMenuLink href="/equipo">
                  Nuestro Equipo
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                style={{ color: "var(--color-pink)" }}
                className="font-medium"
              >
                ¿Como Sumarte?
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4">
                <NavigationMenuLink href="/sumarte">
                  cosas
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger
                style={{ color: "var(--color-redni-cinco)" }}
                className="font-medium">
                Campañas
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4">
                <NavigationMenuLink href="/campanas">
                  Campañas actuales
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* IDIOMAS + BOTÓN */}
        <div className="flex items-center space-x-4">
          {/* Banderas con Iconify */}
          <button className="hover:scale-110 transition">
            <Icon icon="twemoji:flag-spain" width="24" height="24" />
          </button>
          <button className="hover:scale-110 transition">
            <Icon icon="twemoji:flag-united-kingdom" width="24" height="24" />
          </button>

          {/* Botón DONAR */}
          <a
            href="/donar"
            style={{
              backgroundColor: "var(--color-btn-bg)",
              color: "var(--color-btn-text)",
            }}
            className="rounded-full px-4 py-2 font-semibold transition hover:brightness-90"
          >
            Donar
          </a>
        </div>
      </div>
    </header>
  );
}
