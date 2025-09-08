"use client";

import { Users, Box, Handshake, PlayCircle } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: <Users className="w-10 h-10 mb-2 text-white" />,
      value: "2.877+",
      label: "Mujeres gestantes atendidas directamente en territorio",
    },
    {
      icon: <Box className="w-10 h-10 mb-2 text-white" />,
      value: "31.072+",
      label: "Asistencias alimentarias",
    },
    {
      icon: <Handshake className="w-10 h-10 mb-2 text-white" />,
      value: "238+",
      label: "Instituciones articuladas",
    },
    {
      icon: <PlayCircle className="w-10 h-10 mb-2 text-white" />,
      value: "9.1 MILLONES+",
      label: "Personas expuestas a mensajes de prevención de la DCI",
    },
  ];

  return (
    <section className="section-stats">
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="stat-card">
            {s.icon}
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Ola de fondo */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z" />
        </svg>
      </div>
    </section>
  );
}
