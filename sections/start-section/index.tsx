"use client"

import { motion, useTransform, useScroll } from 'framer-motion';

const ProductSection: React.FC = () => {
  const { scrollY } = useScroll(); // Получаем позицию скролла
  const xTransform = useTransform(scrollY, [0, 500], [0, -200]); // Преобразуем скролл в смещение по X

  return (
    <div className="flex items-center p-5 h-screen">
      {/* Изображение */}
      <div className="flex-shrink-0 mr-8">
        <img
          src="https://placehold.co/600x400/png" // Замените на URL вашего изображения
          alt="Product"
          className=" rounded-lg"
        />
      </div>

      {/* Текст с анимацией */}
      <motion.div
        style={{ x: xTransform }} // Применяем анимацию перемещения
        className="flex-grow overflow-hidden"
      >
        <h2 className="text-3xl font-bold whitespace-nowrap">Сапропель - удобрение 3 л</h2>
      </motion.div>
    </div>
  );
};

export default ProductSection;