import React from "react";
import { Tooltip } from "@mui/material";

const macroElements = [
  { name: "N", description: "Азот - способствует росту растений и увеличению урожайности.", atomicNumber: 7, category: "Nonmetal", color: "bg-blue-200" },
  { name: "P", description: "Фосфор - улучшает развитие корневой системы и ускоряет цветение.", atomicNumber: 15, category: "Nonmetal", color: "bg-red-200" },
  { name: "K", description: "Калий - укрепляет устойчивость растений к болезням и засухе.", atomicNumber: 19, category: "Alkali Metal", color: "bg-yellow-200" },
  { name: "Fe", description: "Железо - необходимо для фотосинтеза и предотвращает хлороз.", atomicNumber: 26, category: "Transition Metal", color: "bg-orange-200" },
  { name: "Ca", description: "Кальций - укрепляет клеточные стенки и улучшает качество плодов.", atomicNumber: 20, category: "Alkaline Earth Metal", color: "bg-green-200" },
  { name: "Mg", description: "Магний - ключевой элемент хлорофилла, обеспечивает фотосинтез.", atomicNumber: 12, category: "Alkaline Earth Metal", color: "bg-purple-200" },
];

const SapropelMacroElements: React.FC = () => {
  return (
    <div className="">
      <h2 className="text-4xl font-bold mb-4 text-center">Элементы</h2>
      <div className="grid grid-cols-3 gap-4 p-4 text-center">
        {macroElements.map((element) => (
          <Tooltip key={element.name} title={`${element.description} (№${element.atomicNumber}, ${element.category})`} arrow>
            <div className={`p-4 border rounded-lg text-lg font-bold cursor-pointer shadow-md ${element.color} hover:opacity-80`}>
              {element.name}
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default SapropelMacroElements;