"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function PrevencionSection() {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section className="prevencion-section">
      <div className="prevencion-container">
        {/* Imagen con círculo */}
        <div className="prevencion-img-container">
          <Image
            src="/04.png"
            alt="Prevención de la DCI"
            width={600}
            height={400}
            className="prevencion-img"
          />

          {/* Círculo animado */}
          <motion.div style={{ rotate }} className="prevencion-circle">
            <span>
              20% <br />
              <small>
                En Ecuador, el 20% de niños menores de 2 años sufre
                desnutrición crónica.
              </small>
            </span>
          </motion.div>
        </div>

        {/* Texto */}
        <div className="prevencion-text">
          <h2 className="prevencion-title">
            PREVENIR LA DESNUTRICIÓN CRÓNICA INFANTIL ES URGENTE
          </h2>
          <p className="prevencion-paragraph">
            La Desnutrición Crónica Infantil (DCI) es una problemática
            multicausal resultado de dietas alimenticias inadecuadas, del pobre
            acceso a servicios de salud, de prácticas de cuidado inapropiadas y
            de entornos insalubres.
          </p>
        </div>
      </div>
    </section>
  );
}
