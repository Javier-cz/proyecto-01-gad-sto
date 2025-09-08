// components/footer.tsx
"use client";

import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Ola superior */}
      <div className="footer-wave">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,40 C480,120 960,-40 1440,40 L1440,0 L0,0 Z" className="footer-wave-path" />
        </svg>
      </div>

      {/* Contenido */}
      <div className="footer-content">
        {/* Logo + redes */}
        <div className="footer-col">
          <img src="/01.png" alt="REDNI" className="footer-logo" />
          <div className="footer-socials">
            <a href="#" aria-label="Instagram"><Icon icon="mdi:instagram" /></a>
            <a href="#" aria-label="Facebook"><Icon icon="mdi:facebook" /></a>
            <a href="#" aria-label="Twitter"><Icon icon="mdi:twitter" /></a>
            <a href="#" aria-label="Linkedin"><Icon icon="mdi:linkedin" /></a>
          </div>
        </div>

        {/* Columna 1 */}
        <div className="footer-col">
          <ul>
            <li>Fundación REDNI</li>
            <li>Nuestro Equipo</li>
            <li>Noticias – Boletines</li>
            <li>Reportajes sobre la DCI</li>
            <li>Nutrimos el futuro 2022</li>
          </ul>
        </div>

        {/* Columna 2 */}
        <div className="footer-col">
          <ul>
            <li>¿Qué es?</li>
            <li>¿Cómo afecta?</li>
            <li>¿Cómo prevenirla?</li>
            <li>Proyectos en territorio</li>
            <li>Política de cookies</li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div className="footer-col">
          <p className="footer-title">Dirección:</p>
          <p>Quito – Ecuador</p>
          <p className="footer-title">Teléfono:</p>
          <p>022444019</p>
          <p className="footer-title">Email:</p>
          <p>info@redni.org</p>
          <div className="footer-languages">
            <button aria-label="Español"><Icon icon="twemoji:flag-spain" /></button>
            <button aria-label="Inglés"><Icon icon="twemoji:flag-united-kingdom" /></button>
          </div>
        </div>
      </div>

      {/* Pie inferior */}
      <div className="footer-bottom">
        Powered by <span>La Motora 2025</span> – All Rights Reserved ®
      </div>
    </footer>
  );
}
