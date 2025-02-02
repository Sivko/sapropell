"use client"

// import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FaRecycle, FaSun, FaChild } from "react-icons/fa";

export default function SapropelLanding() {
  const { scrollYProgress } = useScroll();
  const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="relative w-full min-h-screen bg-gray-100 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/sapropel-bg.jpg')", y: scrollYProgress }}
      />
      
      <div className="relative z-10 p-10 text-center">
        <motion.h1 
          className="text-5xl font-bold text-green-700"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ opacity: textOpacity }}
        >
          Натуральное удобрение – Сапропель
        </motion.h1>
      </div>
      
      <div className="relative z-10 space-y-10 p-10">
        {[{title: "Область применения", image: "/usage.jpg", content: ["Универсальное", "Для компостирования", "Для стимуляции роста"]},
          {title: "Назначение", image: "/purpose.jpg", content: ["Декоративные культуры", "Овощные культуры", "Плодово-ягодные культуры"]},
          {title: "Восстановление почвы", image: "/soil.jpg", content: ["Защита от засухи", "Сокращение водопотребления", "Защита от избыточной влажности"]}].map((section, index) => (
          <div key={index} className="relative text-center">
            <motion.img 
              src={section.image} 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <Card className="relative mt-5">
              <CardContent>
                <h2 className="text-xl font-semibold text-green-700">{section.title}</h2>
                <ul className="mt-2 text-gray-700">
                  {section.content.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      
      <div className="relative z-10 overflow-hidden p-10">
        <motion.div className="flex space-x-10" style={{ x: useTransform(scrollYProgress, [0, 1], [0, -200]) }}>
          {["Отличное удобрение!", "Результаты превзошли ожидания!", "Почва стала гораздо плодороднее!"].map((review, index) => (
            <Card key={index} className="min-w-[300px]">
              <CardContent>
                <p className="text-lg text-gray-700">{review}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
      
      <div className="relative z-10 flex justify-center space-x-6 p-10">
        <FaRecycle className="text-5xl text-green-700" title="Перерабатываемая упаковка" />
        <FaChild className="text-5xl text-red-600" title="Хранить в недоступном для детей месте" />
        <FaSun className="text-5xl text-yellow-500" title="Беречь от солнечных лучей" />
      </div>
    </div>
  );
}
