import Image from "next/image";
import { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  description: string;
  img: StaticImageData;
}

const Card: React.FC<CardProps> = ({ title, description, img }) => (
  <div className=" bg-slate-200 overflow-hidden rounded-lg shadow-md transition-transform transform-gpu hover:scale-105">
    <Image src={img} alt="fdbgd" className="w-full h-auto" />
    <div className="p-4">
      <h5 className="text-gray-700 text-2xl font-bold mb-2">{title}</h5>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default Card;
