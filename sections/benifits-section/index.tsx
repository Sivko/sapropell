"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const benefits = [
  "Питательный", "Экологичный", "Плодородный", "Структурообразующий",
  "Увлажняющий", "Бактерицидный", "Оздоровительный", "Сорбционный",
  "Долговременный", "Универсальный"
];

export default function BenefitsSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["50%", "-60%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  return (
    <>
      <section ref={sectionRef} className="relative h-[300px] overflow-hidden">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap text-3xl font-bold">
          {benefits.map((benefit, index) => (
            <span key={index} className="inline-block mx-10">
              {benefit}
            </span>
          ))}
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap text-3xl font-bold">
          {benefits.map((benefit, index) => (
            <span key={index} className="inline-block mx-10">
              {benefit}
            </span>
          ))}
        </motion.div>
      </section>
    </>
  );
}
