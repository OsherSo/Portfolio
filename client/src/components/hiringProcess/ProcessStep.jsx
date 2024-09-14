import { ArrowRight } from "lucide-react";

const ProcessStep = ({ icon: Icon, title, description, isLast }) => (
  <div className="flex flex-col items-center">
    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg">
      <Icon size={40} className="text-white" />
    </div>
    <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
    <p className="mt-2 text-center text-gray-600 max-w-xs">{description}</p>
    {!isLast && (
      <ArrowRight className="mt-4 text-emerald-500 hidden md:block" size={24} />
    )}
  </div>
);

export default ProcessStep;
